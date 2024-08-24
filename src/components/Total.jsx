function Total({ bill, friendServicePercentage, serviceReview }) {
  const totalPercentage = (friendServicePercentage + serviceReview) / 2;
  console.log("totalPercentage", totalPercentage);
  const finalBill = (bill * totalPercentage) / 100;
  console.log(finalBill);

  const totalAmount = bill + finalBill;
  console.log(finalBill);

  return (
    <div className="text-white">
      <p className="text-3xl ">
        You Pay ${bill} (${bill} + ${totalPercentage} tip = {totalAmount})
      </p>
    </div>
  );
}

export default Total;
