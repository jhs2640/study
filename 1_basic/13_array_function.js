let members = ['A','B','C','D'];
console.log(members);

// push
members.push('E');
console.log(members);

// pop : 마지막 인덱스 값 삭제
console.log(members.pop(), members);

// shift : 첫번째 인덱스 값 삭제
console.log(members.shift(), members);

// unshift : 첫번째 인덱스 값 추가
console.log(members.unshift('A'), members);

// splice(여기서부터, 이만큼자르겠다) : 원 배열 변경됨
console.log(members.splice(0,2), members);

/**
 * 원 배열을 변경하지 않고 새로운 배열을 만들어서 반환하는 함수
 */
members = ['A','B','C','D'];
// concat() : push와 같은 기능이지만 원 배열을 변경하지 않는다.
console.log(members.concat('E'));
console.log(members);

// slice(시작인덱스, 자를 인덱스+1) : 원 배열을 변경하지 않는다.
console.log(members.slice(0,3));
console.log(members);

// spread operator
let members2 = [
    ...members,
];
console.log('spread operator : ',members2);

let members3 = members;
console.log(members3 === members);
console.log('spread oprator 비교 : ', members2 === members);

// join(구분자) : string으로 변환
console.log(members.join());
console.log(members.join('/'));
console.log(members.join(', '));

// sort() : 오름차순 / reverse() : 내림차순
members.sort();
console.log(members);
console.log(members.reverse());

console.log("------------------");
members.sort((a, b) => {
    return a > b ? 1 : -1;
});
members.sort((a, b) => {
    return a > b ? -1 : 1;
});
console.log(members);

// map() : vale값을 순회하여 원배열을 변경한 배열값 반환
console.log(members.map((x) => `멤버:${x}`));
console.log(members.map((x) => {
    if(x === 'D'){
        return `멤버:${x}`;
    }else{
        return x;
    }
}))
console.log(members);

// filter() : value 값을 순회하여 true를 반환한 값만 배열형태로 리턴함
console.log(members.filter((x) => x === 'D'));

// find() : value 값을 순회하여 true를 반환한 값만 리턴함
console.log(members.find((x) => x === 'D'));

// findIndex() : value 값을 순회하여 true를 반환한 인덱스만 리턴함
console.log(members.findIndex((x) => x === 'D'));

// reduce((변수) => 연산, 시작값) : value 값을 순회하여 연산 실행함
console.log(members.reduce((p,n) => p + n.length, 0));
// test2

