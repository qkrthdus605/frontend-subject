// 일반적인 직원 정보
// 멤버변수 == 속성 == 프로퍼티
// 멤버함수 == 메서드

class Employee {
  //   private _empName: string;
  //   private _age: number;
  //   private _empJob: string;

  //   // 생성자
  //   constructor(empName: string, age: number, empJob: string) {
  //     this._empName = empName;
  //     this._age = age;
  //     this._empJob = empJob;
  //   }

  //선언과 초기화를 한 번에 축약하기
  constructor(
    private _empName: string,
    private _age: number,
    private _empJob: string
  ) {}

  // getter setter
  // private 변수에 접근하기 위해 ts는 getter setter를 제공한다
  get empName() {
    // 외부에서 바로 접근하지 않고 함수를 통해 private 변수를 리턴
    return this._empName;
  }

  set empName(val: string) {
    this._empName = val;
  }

  printEmp = (): void => {
    console.log(
      this._empName +
        "의 나이는 " +
        this._age +
        "이고, 직업은 " +
        this._empJob +
        "입니다."
    );
  };
}

let employee1 = new Employee("kim", 20, "developer");
employee1.empName = "lee"; // set을 호출하게 되는 거임
employee1.printEmp();
