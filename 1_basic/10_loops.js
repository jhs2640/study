/**
 * for..in
 * object key, array index 값을 가져옴
 */
const obj = {
    name: '정희수',
    age: '29',
}
for(let key in obj){
    console.log(key);
}

const arry = ['정','희','수'];
for(let key in arry){
    console.log(`${key} : ${arry[key]}`);
}

/**
 * for..of
 * array의 value 값을 가져옴
 */
const ofArry = ['정','희','수'];
for(let value of ofArry){
    console.log(value);
}

/**
 * break : loop을 끝낸다
 */
for(let i=0; i<10; i++){
    if(i === 5){
        break;
    }
    console.log(i);
}
let num = 0;
while(num < 10){
    if(num === 5){
        break;
    }
    num++;
    console.log(num);
}

/**
 * continue : 현재 진행되고있는 loop만 스킵
 */
for(let i=0; i<10; i++){
    if(i===5){
        continue;
    }
    console.log(i);
}