/**
 * copy by value : 값에 의한 전달
 * copy by reference : 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value
 * 2) 객체는 copy by reference
 */
console.log('1------------------------');
// 1) copy by value 예시 
let original = '안녕하세요';
let clone = original;
console.log(original === clone);

// original 값 변경
original += ' 정희수 입니다.';
console.log(original);
console.log(clone);
console.log(original === clone);

// 2) copy by reference 예시
console.log('2------------------------');
let originalObj = {
    name : '정희수',
    group: '정',
};
let cloneObj = originalObj;
console.log(originalObj === cloneObj);

// originalObj 값 변경시 clone 값도 변경됨
originalObj['group'] = '코드팩토리';
console.log(originalObj);
console.log(cloneObj);
console.log(originalObj === cloneObj);

console.log('3------------------------');
// 객체는 값은 다른 메모리 주소에 저장해놓고 그 메모리 주소를 갖는다.
const obj = {
    name: '정희수',
    group: '정',
}
const cObj = obj;
const obj2 = {
    name: '정희수',
    group: '정',
}
// 같은 메모리를 참조하고 있음 true
console.log(obj === cObj);
// 값은 같지만 다른 메모리를 참조하고 있음 false
console.log(obj === obj2);
console.log(cObj === obj2);

console.log('4------------------------');
/**
 * spread operator는 copy by value
 */
const obj3 = {
    ...obj2,
}
console.log(obj3);
console.log(obj3 === obj2);

console.log('5------------------------');
// spread operator 값 추가
const obj4 = {
    year: 2003,
    ...obj3,
};
console.log(obj4);

// spread operator에 같은 값 추가시 순서가 중요함
const obj5 = {
    name: '코드팩토리',
    ...obj3,
};
console.log(obj5);

const obj6 = {
    ...obj3,
    name: '코드팩토리',
}
console.log(obj6);

