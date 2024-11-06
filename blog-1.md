# Union Type :
 
Union Type are used to define a variable that can hold values of multiple types. Such as when a variable would be string or number ,then we can use Union of string and number type for that variable 
  
Example: 
    
    let regId : number | string;

    regId =  1234123
    regId = "123423"`

Here value can be either number or a string. We assign string or number value in the regId variable 

    regId = true // give error 

But when we try to assign any type except string and number typescript show an error.

Union types are helpful When a variable can belong multiple type of value but need to be one of them at a time , then we use union type . The symbol which indicated the union type is ( | ).

# Intersection Type:

Intersection types are used to when a variable needs to assign multiple types at a same time.This means the variable must need both type of value in same time .

Example: 
    
    type FrontendDeveloper = {
        skills: string[];
        designation1: "Frontend Developer";
    };

    type BackendDeveloper = {
        skills: string[];
        designation2: "Backend Developer";
    };

    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

    const fullstackDeveloper: FullstackDeveloper = {
        skills: ["HTML", "CSS", "EXPRESS"],
        designation1: "Frontend Developer",
        designation2: "Backend Developer",
    };


Here we have separate types for FrontendDeveloper and BackendDeveloper. When we need a developer who can handle both frontend and backend tasks which called a fullstackDeveloper , then we create an intersection type that combines both . 

This means fullstackDeveloper must need to be designation2 and designation2 properties, as well as a skills array. 

    const fullstackDeveloper: FullstackDeveloper = {
        skills: ["HTML", "CSS", "EXPRESS"],
        designation1: "Frontend Developer"
    };

It gives wrong because we didnot assign designation2 in that variable .


So,We can tell that Intersection types are helpfl when a variable needs to multiple types together in same time. The symbol for intersection types is ( & ) . 