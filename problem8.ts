
{
    type Obj<X = any> = {
        [key: string]:X;
    };

    const validateKeys = <X extends Obj>(obj: X, keys: (keyof X)[]): boolean => {
    
      return keys.every((key) => key in obj);
    };

    const person = { name: "Alice", age: 25, email: "alice@example.com" };

    console.log(validateKeys(person, ["name", "age"]));

    // here it gives error for false input without run the code ,, so below i code another code for this 
    // console.log(validateKeys(person, ["name", "address"]));
}
{
  
  // in this code we pass any kind of string[] in 2nd parameter ,, so it check all kind of string for validate key find 

  type Obj<X = any> = {
    [key: string]: X;
  };
  const validateKeys = (obj: Obj, keys: string[]) => {
    return keys.every((k) => k in obj);
  };
  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person, ["name", "age"]));
  console.log(validateKeys(person, ["name", "something"]));


}
