import React, { useState } from 'react';

const Payment = () => {
    const [amount, setAmount] = useState('');

   

    const handlePayment = () => {
        if (amount === undefined || amount === '') {
            alert("Please enter an amount");
        } else {
            const options = {
                key: "rzp_test_shFjrnQPnV1Zul",
                amount: amount * 100,
                currency: "INR",
                name: "Book Store",
                handler: function(response) {
                    alert(`Payment of Rs.${amount}/- is Successful`); 
                },
                prefill: {
                    name: "admin",
                    email: "onlinebookstore@gmail.com",
                    contact: "7412589631"
                },
                notes: {
                    address: "Razorpay Corporate office"
                },
                theme: {
                    color: "8e3969"
                }
            };
            const pay = new window.Razorpay(options);
            pay.open();
        }
    };
    

    return (
        <div>
           
            <button onClick={handlePayment}>Pay Now</button>
        </div>
    );
};

export default Payment;
