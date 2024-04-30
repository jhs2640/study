let age = 32;
console.log(typeof age.toString(), age.toString());
console.log(typeof String(age), String(age));

console.log(typeof parseInt('2'), parseFloat('9.99'));

console.log(typeof +'1', +'1');

/**
 * boolean 변환
 * 1. 아무 글자도 없는 string => false 반환
 * 2. 값이 없는 경우 => false 반환
 * 3. 0 => false 반환
 * 4. array, object => true 반환
 */
console.log(!!'');
console.log(!!false);
console.log(!!undefined);
console.log(!!null);
console.log(!!0);

console.log(!!{});
console.log(!![]);