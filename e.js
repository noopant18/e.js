// let a=3;
// let b=3;
// let c=6;
// let result="a" +b;
// console.log(result);
// let result1= c+b+ "a"+a+b;
//  console.log(result1);




//relational operator
// let data=6;
// let data1=6;
// let result=data >=data1;
// console.log(result);
//  let x="pen";
//  let y="book";
//  let data=x>y;
// console.log(data);
// let x="mona";
// let y="monali";
// console.log(x>y);
// let x="2";
// let x=' ';
// let y=false;
// let data= x===y;
// console.log(data);    
   


//logical operator
//  let x=7, y=8,z=9;
//  let result=x<y || x<z;
//  console.log(result);
// let n = !result;
// console.log(result,n);
    




// function example
// function ADD2Num(num1,num2)
// {
// let result= num1+num2;
// console.log(" hello");
// return result;

// }
//  const result=ADD2Num(3,5);
// console.log("result",result);

// example 2(passing variable)
// function login(username)
// {
//     if(username===undefined)
//     {
//         console.log("please enter name:");
//         return; 
//     }
//     return `${username} just logged in`
// }
// console.log(login("nupu"));

//     ex 3(returning value)
// function greet()
// {
//     return "hello";


// }
// let str=greet();
// console.log(str);


//       example 4
//       function add(n1,n2,n3=2) // will take default value n3=2 only if 1 arg is missing
//       {
//         return n1+n2+n3;
//       }
//       let result=add(5,6,4); 
//       console.log(result);
 



//local variable and global variable
// function greet(u)
// {
//     console.log(u);
//     return `hello ${u}!`
// }
// let user="nupur";
// let str=greet(user);
// console.log(str);
 
   //ex 2
//    let user="nupur";
//    function greet(u)
// {
//     let n=5;
//     console.log(n);
//     return `hello ${u}!`
// }
// console.log("n value is"+n); //error as n is local

// let str=greet(user);
// console.log(str);

//condition statment
   //1)if statement
//    let age=19;
//    if(age>=19)
//    {
//     console.log("u are an adult");
//    }
   //2)if else statement
//    let n1=6,n2=4;
//  let result=n1>n2;
//  if(result)
//  {
//     console.log("n1 is greater");
//  }
// else{
//      console.log(" hello");
//   }
//   console.log("bye"); //will consider this line
//3)if else if
// let age=100;
// if(age>60)
// {
//     console.log("you are an senior citizen");
// }
//     else if(age>=18)
//         {
//             console.log("you are an adult");
        
//         }
//      else
//      {
//    console.log("you are a minor");
//      }
//4)switch statement
// let day="monday";
// switch(day)
// {
//     case "monday":
//     {
//         console.log("today is monday");
//   break;
//     }
//     case 'tuesday':
//     {
//         console.log("today is tuesday");
//         break;  
//     }
//      default:
//     {
//         console.log("today is  no day");
        
//     }
// }







//for-in loop
// let user=
// {   
//     name:'mona',
//     language:'js',
//     mobile:
//     {
//         RAM:4,
//         BRAND:'GOOGLE',
//     }
// }
//     for(let key in user )
//     {
//        // console.log(key);
//         console.log(key,user[key]);
//     }

  
//  let fruits=["apple","banana","cherry"];
//  for(let fruit of fruits)
//  {
//     console.log(fruit);
//  }




//js object
// let emp=
// {
//     id:102,
//     name:"mona",
//     salary:40000
// }
// console.log(emp.id+" " + emp.name+" " +emp.salary);


//exp2
// let programmer={ }
// console.log(typeof programmer);

//exp 3
// let programmer={
//     name:'mona',
//     tech:'js',
//     'work exp': 2

//  }
// console.log(programmer);
// console.log(programmer.name);
// console.log(programmer["name"]);
// console.log(programmer['work exp']);
  



//instance of object
// const user= new Object();
// user.id=123;
// user.name='mona';
// user.mark=100;
// console.log(user);


// const RegularUser=
// {
//     email:"noopant18@gmail.com",
//     fullname:
//     {
//         userfullname:
//         {
//             fname:'mona',
//             lname:'lisa'
//         },
//     }
// }
//console.log(RegularUser.fullname);
//console.log(RegularUser.fullname.userfullname.fname);
//console.log(RegularUser.fname);


// function person()
// {
//     this.fname="mona";
//     this.lname="lisa";
// }
// const p1=new person();
// const p2=new person();
// console.log(p1);
// console.log(p2);

//my 2nd commit ###
function person(eid,ename,salary)
{
    this.eid=eid;
    this.ename=ename;
    this.salary=salary;

}
const e=new person(21,"mona",40000);
console.log(e);
 

























































































































































































































































