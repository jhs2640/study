/**
 * var, let은 초기화안해도 undefined 할당되어있음
 * const 초기화 필요
 */
var test;
let test2;
// const test3;
console.log(test, test2);


/**
 * 단축 평가 연산자
 * &&를 사용했을때 좌측이 true면 우측 값 반환
 * &&를 사용했을때 좌측이 false면 좌측 값 반환
 * ||를 사용했을때 좌측이 true면 좌측 값 반환
 * ||를 사용했을때 좌측이 false면 우측 값 반환
 */
console.log(true && '정희수');
console.log(false && '정희수');
console.log(true || '정희수');
console.log(false || '정희수');

/**
 * 지수 연산자
 */
console.log(2**2);
console.log(2**10);

/**
 * null 연산자
 * 변수 ?? 'test'  -> 변수가 undefined or null이면 'test' 반환
 */
let name;
name ??= '정희수';
// name = name ?? '정희수';
console.log(name);

name = name ?? '코드팩토리';
console.log(name);
