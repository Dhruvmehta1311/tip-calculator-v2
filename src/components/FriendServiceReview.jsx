import { useState } from "react";

function FriendServiceReview({
  friendServicePercentage,
  setFriendServicePercentage,
}) {
  const friendService = (e) => {
    console.log(e.target.value);
    setFriendServicePercentage(Number(e.target.value));
  };

  return (
    <div className="text-white">
      <>
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <p>How did your friend liked the service?</p>
          <select
            onChange={friendService}
            className="bg-gray-600 px-4 py-3 rounded"
            name=""
            id=""
          >
            <option value="0">Dissatisfied (0%)</option>
            <option value="5">It was Okay (5%)</option>
            <option value="10">It was Good (10%)</option>
            <option value="100">Absolutely Amazing (100%)</option>
          </select>
          <p>{friendServicePercentage}</p>
        </div>
      </>
    </div>
  );
}

export default FriendServiceReview;
