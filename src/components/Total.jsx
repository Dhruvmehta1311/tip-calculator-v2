function Total({ bill, friendServicePercentage, serviceReview }) {
  const totalPercentage = friendServicePercentage + serviceReview;
  const finalBill = bill + (friendServicePercentage + serviceReview) / 100;
  console.log(finalBill);

  return (
    <div className="text-white">
      <p className="text-3xl ">
        You Pay ${bill} (${bill} + ${finalBill} tip)
      </p>
    </div>
  );
}

export default Total;
