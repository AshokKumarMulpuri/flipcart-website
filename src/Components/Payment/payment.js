import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Payment = () => {
  const timeout = useSelector((state) => state.timeout);
  const [timeLeft, setTimeLeft] = useState(timeout);
  const totalAmount = useSelector((state) => state.totalAmount);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1000 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60000);
  const seconds = ((timeLeft % 60000) / 1000).toFixed(0);

  return (
    <div>
      <h1>Payment</h1>
      <p>Total Amount Due: ${totalAmount}</p>
      <p>Time left to complete the transaction: {minutes}:{seconds < 10 ? '0' : ''}{seconds}</p>
    </div>
  );
}

export default Payment;
