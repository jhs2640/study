function multiply(x, y=10){
    console.log(x*y);
}
multiply(2,4);
multiply(2);

/**
 * Arrow 함수
 * 함수명 = (변수) => {
 *  함수 BODY
 * }
 */
const arrawFn = (x, y) => {
    return x*y;
}
const arrawFn2 = (x, y) => x*y;
const arrawFn3 = x => x*2;

function fn4(x){
    return function(y){
        return function(z){
            return `x: ${x} y:${y} z:${z}`;
        }
    }
}
console.log(fn4(3)(4)(5));
// arrow 함수로 변환
const arrawFn4 = x => y => z => `x:${x} y:${y} z:${z}`;
console.log(arrawFn4(3)(4)(5));

/**
 * 함수선언과 함수 리턴값 저장 동시에 선언 방법
 */
const fn5 = function(x, y){
    return x*y;
}
console.log(fn5(4,5));

/**
 * 함수 arguments
 */
function multiplyTree(x,y,z){
    console.log(arguments);
    return x*y*z;
}
console.log(multiplyTree(2,3,4));

function multiplyAll(...arguments){
    return Object.values(arguments).reduce((a,b) => a*b, 1);
    // return Object.values(arguments);
}
console.log(multiplyAll(2,3,4,5,6,7,8));

/**
 * 즉시실행함수(immediately invoked function)
 */
(function(x, y){
    console.log(x*y);
})(4,6)

/**
 * 함수의 type은 object
 */
function test(){
    console.log("함수");
}
console.log(test instanceof Object);

