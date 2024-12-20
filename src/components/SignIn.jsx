import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const SignIn = () => {
    const {login}  = useContext(AuthContext)

    const handleSignin = event=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        // login user
        login(email,password)
        .then(result=>{
            console.log(result.user);
            const muser = {
                email,
                lastLoggedAt: result.user?.metadata?.lastSignInTime,
            }
            fetch('http://localhost:5000/users', {
                method:'PATCH',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(muser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })
        })
        .catch(error=>{
            console.log(error);
        })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
            <h1 className="text-5xl font-bold">Login now!</h1>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;