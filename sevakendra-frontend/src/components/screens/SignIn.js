import React,{useState,useContext,} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import M from 'materialize-css'
import { useAuth0 } from "@auth0/auth0-react";

const SignIn  = ()=>{
    const {state,dispatch} = useContext(UserContext)
    const history = useHistory()
    const [password,setPasword] = useState("")
    const [email,setEmail] = useState("")
    const PostData = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
            return
        }
        fetch("https://uninterested-bass-ring.cyclic.app/signin",{   //axios //if hosting use cors ip 
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
               localStorage.setItem("jwt",data.token)
               localStorage.setItem("user",JSON.stringify(data.user))
               dispatch({type:"USER",payload:data.user})
               M.toast({html:"signedin success",classes:"#43a047 green darken-1"})
               history.push('/')
           }
        }).catch(err=>{
            console.log(err)
        })
    }
    
    const myStyle={
        backgroundColor:'#F1F6F9',
        backgroundImage: 
     "url('https://scontent.fbom14-1.fna.fbcdn.net/v/t31.18172-8/10265598_491731034349307_7708470699767433589_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=JqiWaA06xs4AX_9lG_B&_nc_ht=scontent.fbom14-1.fna&oh=00_AfCYqSA8u_28T-NhNfr8KDim2zfQTAbNxwolBILIAM82OQ&oe=64A2DBC0')",
     backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
     };
   return (
      <div className="mycard" style={myStyle} >
          <div className="card auth-card input-field">
            <h2>Seva Kendra</h2><br></br>
            <h3 style={{ border: "1px solid black", padding: "10px" }}><strong>MAKING LIVES BETTER TOGETHER</strong></h3>
            <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e)=>setPasword(e.target.value)}
            />
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
            onClick={()=>PostData()}
            >
                Login
            </button>
            <h5  style={{color:"red"}}>
                <Link to="/signup">Dont have an account ?</Link>
            </h5>
            <h6 > Join our hands to make earth a better place !🤝
            </h6>
    
        </div>
      </div>
   )
}


export default SignIn