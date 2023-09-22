const encryptDecrypt={
    hashPwd(originalPwd){
        bcrypt.hashSync(originalPwd,10);

        
    },
    matchPwd(originalPwd,hashedPwd){

    }
}