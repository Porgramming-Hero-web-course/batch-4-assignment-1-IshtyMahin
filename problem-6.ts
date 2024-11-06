{
  interface User {
    name: string;
    age: number;
    email: string;
  }

  type Obj<X extends keyof User> = {
    [key in X]: User[key];
  };

  const updateProfile = <X extends keyof User>(profile: User, obj: Obj<X>):User => {
    let newProfile = { ...profile, ...obj };
    return newProfile;
  };
  
  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(updateProfile(myProfile, { age: 26 }));
}
