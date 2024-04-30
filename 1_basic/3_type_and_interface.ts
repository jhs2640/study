/**
 * type
*/
type tyString = string;
type tyNumber = number;
type typeObj = {
    name: string;
    year?: number;
}

const typeTest: typeObj = {
    name: '안유진',
    // year: 2024,
}

/**
 * interface
*/
interface testInterface {
    name: string;
    year?: number;
}

const test2: testInterface = {
    name: '안유진',
    // year: 2024,
}
