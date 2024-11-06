{
  type arr = Array<number>;
  const removeDuplicates = (array: arr):arr => {
    let uniqueArray: arr = [];

    for (let num of array) {
      if (!uniqueArray.includes(num)) {
        uniqueArray.push(num);
      }
    }

    // console.log("(" + uniqueArray.join(",") + ")");
    return uniqueArray
  };

  removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
  // console.log("(" + removeDuplicates([1, 2, 2, 3, 4, 4, 5]).join(",") + ")");
}
