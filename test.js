// function foo(arg) {
//   arg();
// }

// const foo = function (arg) {
//   return arg;
// };

// function bar() {
//   console.log("bar");
// }

// 두 번째 값부터 rest 배열에 들어감
// function foo(arg, ...rest) {
//   console.log(rest);
// }

// 인자로 들어온 값들이 객체로 출력됨
function foo(arg) {
  console.log(arguments);
}

foo(1, 2, 3, 4, 5);
