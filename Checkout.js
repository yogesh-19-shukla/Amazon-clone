import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {

    const [{basket}] = useStateValue();
  

    return (
    <div className="checkout">
       <div className="chechout_left">
           <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/GW/Event_hero_Teaser_PC_1500X600_eng._CB664069228_.jpg" height="600px" width="1500px" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/GW/Event_hero_Teaser_PC_eng_3000x1200._CB664069228_.jpg" alt="" />
           {basket?.length === 0 ? (
            <div>
                <h2>Your shopping basket is empty</h2>                
                <p>You have no items in the basket. To buy go to "Add to basket" option next to the item.</p>           
            </div>
         ) : (
            <div>
                <h2 className="checkout_title">Your Shopping basket contains</h2>

                {basket?.map(item => (
                    <CheckoutProduct 
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                    />
                ))}
            </div>
        )}
      </div>

        {basket.length>0 && (
            <div className="checkout_right">
                <Subtotal />
                
            </div>
        )}
        </div>
    );
}

export default Checkout
