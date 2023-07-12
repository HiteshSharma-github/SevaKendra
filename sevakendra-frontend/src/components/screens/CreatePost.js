import React,{useState,useEffect} from 'react'
import M from 'materialize-css'
import {useHistory} from 'react-router-dom'
const CretePost = ()=>{
    const history = useHistory()
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [image,setImage] = useState("")
    const [url,setUrl] = useState("")
    useEffect(()=>{
       if(url){
        fetch("https://uninterested-bass-ring.cyclic.app/createpost",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                title,
                body,
                pic:url
            })
        }).then(res=>res.json())
        .then(data=>{
    
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
               M.toast({html:"Created post Successfully",classes:"#43a047 green darken-1"})
               history.push('/')
           }
        }).catch(err=>{
            console.log(err)
        })
    }
    },[url])
    
   const postDetails = ()=>{
       const data = new FormData()
       data.append("file",image)
       data.append("upload_preset","insta-clone")
       data.append("cloud_name","dk437d9ex")
       fetch("https://api.cloudinary.com/v1_1/dk437d9ex/image/upload",{
           method:"post",
           body:data
       })
       .then(res=>res.json())
       .then(data=>{
          setUrl(data.url)
       })
       .catch(err=>{
           console.log(err)
       })

    
   }
   const UnethicalWords = ["offensive", "hate", "insult"]
   const [error, setError] = useState(null);  //coz thats a normal funt.

 
   const handleSubmit = (e) => {

    e.preventDefault();
    let isUnethical = false;
    UnethicalWords.forEach(word => {
      if (body.includes(word)) {
        setError(`The text contains an unethical word "${word}"`);
        isUnethical = true;
        console.log(error)
      }
    });
    if (!isUnethical) {
      setError(null);
      postDetails();
    }
  };

   return(<div style={{        backgroundImage: 
    "url('https://wallpaperaccess.com/full/1353726.jpg')",
       backgroundRepeat: 'repeat-y'}}>
       <form onSubmit={handleSubmit} className="card input-filed"
       style={{
           margin:"30px auto",
           maxWidth:"600px",
           padding:"20px",
           textAlign:"center",
           borderRadius: "18px",
       }}
       >
           <input 
           type="text"
            placeholder="Title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />
           <input
            type="text"
             placeholder={'Share your recent accomplishments .Please refrain from using abusive language.'}
             value={body}
            onChange={(e)=>setBody(e.target.value)}
            style={{ height: '300px', width: '600px' }}
             />
           <div className="file-field input-field">
            <div className="btn #64b5f6 blue darken-1">
                <span>Upload Pic</span>
                <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
            </div>
            {error && <div style={{color:"red"}}>{error}</div>}

            <button type="submit" className="btn waves-effect waves-light #64b5f6 blue darken-1"
         //   onClick={()=>postDetails()}
            
            >
                👍 POST
            </button>
           
        <div>
            
        </div>
        </form>
       </div>
   )
}


export default CretePost