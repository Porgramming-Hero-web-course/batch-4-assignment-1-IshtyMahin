{
  type arr = Array<number>;
  const sumArray = (array: arr) => {
    let total = array.reduce((sum, num) => sum + num, 0);
    console.log(total);
  };

  sumArray([1, 2, 3, 4, 5]);
}
