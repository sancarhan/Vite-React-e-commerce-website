import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) =>{

 const currency = '₺';
 const delivery_fee = 10;
 const [search,setSearch] = useState('');
 const [showSearch,setShowSearch] = useState(true)

   const value = {
    products, currency, delivery_fee,
    search,setSearch,showSearch,setShowSearch

   }

   return (
    <ShopContext.Provider value={value}>
     {props.children}
    </ShopContext.Provider>
   )


}

export default ShopContextProvider;

/*2.32.00 de kaldım Search bar yapımında  https://youtu.be/7E6um7NGmeE?list=PLjwm_8O3suyOFd8LTFqgw9v7MqPNtgINA */ 