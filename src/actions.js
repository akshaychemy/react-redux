export const Login =(Credentials)=>({
    type:"PUT_DATA",
    payload:Credentials
})


export const Logout =()=>({
    type:"GET_DATA",
})
