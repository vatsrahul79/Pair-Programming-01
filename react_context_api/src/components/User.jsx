import React,{useState} from 'react'



function User() {

    const [ name , setName ] = useState("")
    const [ age , setAge ] = useState("")
    const [ phone , setPhone ] = useState("")
    console.log(name,age,phone)
    return (
        <div>
            <form>
                <input placeholder="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <input placeholder="age" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
                <input placeholder="phone" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                <input type="submit" />
            </form>
        </div>

    )
}

export default User 
