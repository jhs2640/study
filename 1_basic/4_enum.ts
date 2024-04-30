/**
 * enum
 * 관행 : enum명은 대문자로 시작함
 */

enum State{
    DONE,
    LOADING,
    INITIAL,
    ERROR,
}

function runWork(){
    let state = State.INITIAL;

    try {
        state = State.DONE;
    } catch (error) {
        state = State.ERROR;
    }finally{
        return state;
    }
}

console.log(runWork());