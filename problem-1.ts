{
  type arr = Array<number>;
  const sumArray = (array: arr):number => {
    let total = array.reduce((sum, num) => sum + num, 0);
    // console.log(total);
    return total
  };

  // sumArray([1, 2, 3, 4, 5]);
  console.log(sumArray([1, 2, 3, 4, 5]));
}
