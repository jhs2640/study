/**
 * try...cathch
 * 
 * 1) 에러 발생 시킴 -> throw
 * 2) 에러 인지 -> catch
 */
function runner(){
    try{
        console.log('------------try------------');
        throw new Error('에러발생');
    }catch(e){
        console.log('------------catch------------');
        console.log(e);
    }finally{

    }
}
runner();