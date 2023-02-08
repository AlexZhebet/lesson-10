// const createCounter = () => {
//   let count = 0;
  
//   return {
//     increment() {
//       count++;
//     },
//     decrement() {
//       count--;
//     },
//     getCount() {
//       return count;
//     }
//   };
// };


// const counter = createCounter();

// counter.increment();
// counter.increment();
// counter.increment();
// console.log(counter)



// const createGreeting = (greeting) => {
  
//   const greetingVar = greeting
  
//   return (name) => {
    
//     return `${greeting} ${name}`;
//   };
// };

// const helloGreeting = createGreeting('Hi');
// const hiGreeting = createGreeting('Hi');

// console.log(helloGreeting('John'));
// console.log(helloGreeting('Jane'));



// setTimeout(function(){
//   console.log('hi')
// }, 3000)

//В этом примере функция asyncOperation представляет собой 
//асинхронную операцию, которая выполняется с задержкой в 1 секунду
 //и вызывает переданный ей коллбек с данными. 
//Функция useAsyncData использует замыкание, 
//чтобы сохранить данные, полученные в результате 
//выполнения асинхронной операции, и доступ к ним после выполнения операции.



// function asyncOperation(callback) {
//   setTimeout(() => {
//     const data = "Async data";
//     callback(data);
//   }, 1000);
// }

// function useAsyncData() {
//   let asyncData;

//   asyncOperation(function (data) {
//     asyncData = data;
//     console.log(asyncData);
//   });
// }

// useAsyncData();



// let user = {
//   name: "John",
//   age: 30,
//   sayHi() {
//     console.log("Привет");
//   }
// };


// console.log(user.name);
// console.log(user.sayHi());

// "this" в JavaScript - это ключевое слово, которое указывает на текущий контекст вызова.
// В зависимости от контекста, "this" может указывать на различные объекты, такие как глобальный объект, 
// объект функции или объект, который вызывает метод. 
// Использование "this" в коде может влиять на то, как данные или методы доступны внутри функции или объекта.





// В JavaScript существует несколько типов контекстов выполнения:

// - Глобальный контекст выполнения. Это базовый, используемый по умолчанию контекст выполнения.
//   Если некий код находится не внутри какой-нибудь функции, значит этот код принадлежит глобальному контексту. 
//   Глобальный контекст характеризуется наличием глобального объекта, которым, в случае с браузером, является объект`window`, 
//   и тем, что ключевое слово`this`указывает на этот глобальный объект. 
//   В программе может быть лишь один глобальный контекст.


// - Контекст выполнения функции. Каждый раз, когда вызывается функция, 
// для неё создаётся новый контекст. Каждая функция имеет собственный контекст выполнения. 
// В программе может одновременно присутствовать множество контекстов выполнения функций. 
// При создании нового контекста выполнения функции он проходит через определённую последовательность шагов.

// Стек выполнения используется для хранения контекстов выполнения, 
//   создаваемых в ходе работы кода.


// let a = 'Hello World!';

// function first() {
//   console.log('Inside first function');
//   second();
//   console.log('Again inside first function');
// }
// function second() {
//   console.log('Inside second function');
// }
// first();
// console.log('Inside Global Execution Context');


// ExecutionContext = {
//  ThisBinding = <this value>,
//  LexicalEnvironment = { ... },
//  VariableEnvironment = { ... },
// }

// Перед выполнением JavaScript-кода создаётся контекст выполнения. В процессе его создания выполняются три действия:

// 1. Определяется значение`this`и осуществляется привязка`this`(this binding).
// 2. Создаётся компонент`LexicalEnvironment`(лексическое окружение).
// 3. Создаётся компонент`VariableEnvironment`(окружение переменных).


// "this" в JavaScript - это ключевое слово, которое указывает на текущий контекст вызова.
// В зависимости от контекста, "this" может указывать на различные объекты, такие как глобальный объект, 
// объект функции или объект, который вызывает метод. 
// Использование "this" в коде может влиять на то, как данные или методы доступны внутри функции или объекта.




// console.log(this)

// let user = {
//   name: "John",
//   age: 30,
//   sayHi() {
//     console.log(this)
// // 	console.log(`Привет ${this.name}`);
//   }
// };

// user.sayHi();

// let user = { name: "John" };

// let admin = { name: "Admin" };

// function sayHi() {
//    console.log(`Привет ${this.name}`);
// }

// user.greeting = sayHi
// admin.greeting = sayHi


// user.greeting()
// admin.greeting()
// sayHi()


// let user = { 
//   name: "John",
//   greeting: function() {
//    console.log(`Привет ${this.name}`);
//   }
// };

// user.greeting()


// let foo = {
//   baz: function() {
//   console.log(this);
//   }
// }

// foo.baz();    
// 'this' указывает на объект 'foo', так как функция 'baz' была вызвана 
             // как метод объекта 'foo'
// let bar = foo.baz;
// bar();      
// 'this' указывает на глобальный объект window, так как при вызове функции
             // ссылка на объект не используется




// let obj1 = {
//  hello: function() {
//  console.log('Hello world');
//  return this;
//  },
//  obj2: {
//  breed: 'dog',
//  speak: function(){
//  console.log('woof!');
//  return this;
//  }
//  }
// };


// console.log(obj1);
// console.log(obj1.hello()); 
// выводит 'Hello world' и возвращает obj1
// console.log(obj1.obj2);
// console.log(obj1.obj2.speak()); 
// выводит 'woof!' и возвращает obj2



// let user = { name: "John" };


// function sayHi(lastName) {
//    console.log(`Привет ${this.name} ${lastName}`);
// }

// sayHi('Jon')


// sayHi.call(user, 'Jon', ...arh)
// sayHi.apply(user, ['Jon'])

// const sayHiwithLastName = sayHi.bind(user,  'Jon')

// sayHiwithLastName()


let user = {
    firstName: "Вася",
    sayHi() {
      console.log(`Привет, ${this.firstName}!`);
    }
  };
  
  function sayHiOuter() {
      console.log(`Привет, ${this.firstName}!`);
    }
  
  // setTimeout(callback, ms) 
  
  
  // console.log(user.sayHi);
  
  // setTimeout(user.sayHi, 1000); => setTimeout(function () {
  //     console.log(`Привет, ${this.firstName}!`);
  //   }, 1000);
  
  
  const userName = user.firstName
  const userFunctiona = user.sayHi
  
  
  
  console.log(userName)
  console.log(userFunctiona)
  
  
  // const sayHi2 = user.sayHi.bind(user);
  
  
  
  // setTimeout(sayHi2, 1000);
  
  
  
  // setTimeout(user.sayHi(), 1000) => setTimeout(undefind, 1000)
  
  
  // const sumNubs = (a, b) => {
  //   return a + b
  // }
  
  // const getNumbs = (arg) => {
  //   console.log(arg)
  // }
  
  // console.log(getNumbs)
  
  
  // getNumbs(sumNubs(5,65)) => getNumbs(70)
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  