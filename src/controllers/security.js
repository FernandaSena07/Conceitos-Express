import sha1 from 'sha1'

export function hidePassword(password) {

   

    console.log(password)



    const hash = sha1(password)



    console.log(hash)



    return hash

}