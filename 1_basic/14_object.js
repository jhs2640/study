/**
 * Object 객체
 */
let member = {
    name: '정희수',
    group: '정',
    job: function(){
        return `${this.name}은 언니이다.`;
    }
};

// console.log(member.name);
// console.log(member['name']);
// const key = 'name';
// console.log(member[key]);
// console.log(member.job());

/**
 * object 안에 프로퍼티나 메소드 선언법2
 * [변수명]: 변수값
 */
const nameKey = 'name';
const nameValue = '정희수';
const groupKey = 'group';
const groupValue = '정';
const jobKey = 'job';
const member2 = {
    [nameKey]: nameValue,
    [groupKey]: groupValue,
    [jobKey]: function(){
        return `${this.name}은 언니이다.`;
    }
}

// console.log(member2.name);
// console.log(member2[nameKey]);
// console.log(member2.group);
// console.log(member2[groupKey]);
// console.log(member2.job());

/** 객체 수정, 추가, 삭제 */
// console.log(member2);
// member2[nameKey] = '정희수수';
// console.log(member2);
// member2.name = '정희수수수수';
// console.log(member2);

// member2.englishName = 'JHS';
// console.log(member2);

// delete member2.englishName;
// delete member2.job;
// console.log(member2);

/**
 * 객체의 특징
 * 1) const로 선언할 경우 객체 자체를 변경 할 수는 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경 할 수 있다.
 */
const member3 = {
    name:'정희수',
    group:'정',
}
// console.log(member3);

//member3 = {}; error : 객체 자체는 변경 할 수 없음 

member3['group'] = '정희';
// console.log(member3);

/**
 * 객체 키값 리스트로 반환
 */
// console.log(Object.keys(member3));

/**
 * 객체 벨류값 리스트로 반환
 */
// console.log(Object.values(member3));

/**
 * 객체 프로퍼티 명과 벨류 변수명이 같을때
 */
const name = '정희수';
const member4 = {
    name: name,
    // name,
}
console.log("member4:",member4);



