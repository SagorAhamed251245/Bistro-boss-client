import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import {  Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../../hooks/useCart";

const Payment = () => {
    
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_GateWay_Pk);
    const [cart] = useCart();
    const total = cart.reduce((sum , item )=> sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        
        <div className="">
            <SectionTitle subHeading={'please Provide'} heading={'Payment'}></SectionTitle>
            <h2 className="text-3xl">Taka O taka Tmi uira uira aso</h2>

            <Elements stripe={stripePromise}>
               <CheckoutForm price={price} cart={cart}></CheckoutForm>
            </Elements>
            
        </div>
    );
};

export default Payment;