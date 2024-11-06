{
  type arr = Array<number>;
  const removeDuplicates = (array: arr) => {
    let uniqueArray: arr = [];

    for (let num of array) {
      if (!uniqueArray.includes(num)) {
        uniqueArray.push(num);
      }
    }

    console.log("(" + uniqueArray.join(",") + ")");
  };

  removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
}
