import React, { useState } from "react";

function Signup(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    async function handleSubmit(e){
        e.preventDefault()
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-type': 'application/json'}
        });
        if (response.status !== 200){
            alert('Registration failed...')
        }else{
            alert("Registartion suceessful")
        }
    }
    return (
        <div className="container">
            <div class="modal-content rounded-4 shadow">
                <div class="modal-header p-5 pb-4 border-bottom-0">
                    <h1 class="fw-bold mb-0 fs-2">Signup for free</h1>
                </div>

                <div class="modal-body p-5 pt-0">
                    <form class="" onSubmit={handleSubmit}>
                        <div class="form-floating mb-3">
                            <input  class="form-control rounded-3" id="floatingInput" placeholder="name@example.com" value={username} onChange={e => setUsername(e.target.value)}/>
                            <label for="floatingInput">Username</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                            <label for="floatingPassword">Password</label>
                        </div>
                        {/* <div class="form-floating mb-3">
                            <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Confirm Password" />
                            <label for="floatingPassword">Confirm Password</label>
                        </div> */}
                        <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Login</button>
                        <small class="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
                        <hr class="my-4" />

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;