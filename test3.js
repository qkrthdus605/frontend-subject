// 즉시 실행 함수
(function foo() {
  console.log("foo");
})();

// 재귀 함수
function foo2(arg) {
  // 무한 실행 방지를 위해 조건문 필요
  if (arg === 3) return;

  console.log(arg);
  foo2(arg + 1);
}

// 중첩(내부) 함수
function foo3(arg) {
  function bar() {
    console.log(arg);
  }
  bar();
}

// 콜백 함수
function foo4(arg) {
  arg();
}

foo(() => {
  // 여기가 콜백
  console.log(1);
});
