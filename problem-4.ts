{
  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  const calculateShapeArea = (shape: Circle | Rectangle): number => {
    //   console.log(shape.shape);
    let ans =0;
    if (shape.shape == "rectangle") {
      ans= shape.width * shape.height;
    }
    if (shape.shape == "circle") {
      ans= Math.PI * shape.radius * shape.radius;
    }

    ans = parseFloat(ans.toFixed(2))
    return ans;
  };

  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

  console.log(circleArea);
  

  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

  console.log(rectangleArea);
  
}
