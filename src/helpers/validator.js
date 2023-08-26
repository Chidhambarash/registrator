export const validator = (userList,mobile, password) =>{
    for(let x=0; x<userList.length;x++){
        if(userList[x].mobile===mobile){
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

export const mobileValidator = (mobile) =>{
    return mobile.length===10 && /^[0-9]+$/.test(mobile);
};
