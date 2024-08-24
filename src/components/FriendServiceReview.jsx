function FriendServiceReview() {
  return (
    <div className="text-white">
      <>
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <p>How did you liked the service?</p>
          <select className="bg-gray-600 px-4 py-3 rounded" name="" id="">
            <option value="">Dissatisfied (0%)</option>
            <option value="">It was Okay (5%)</option>
            <option value="">It was Good (10%)</option>
            <option value="">Absolutely Amazing (100%)</option>
          </select>
        </div>
      </>
    </div>
  );
}

export default FriendServiceReview;
