export const validator = (userList,email, password) =>{
    for(let x=0; x<userList.length;x++){
        if(userList[x].email===email){
            if(userList[x].password===password){
                return "Success";
            }
            else{
                return "Password"
            }

        }
        
    }
    return "not found";
};