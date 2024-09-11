import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext)

   const handleRegister = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const photo = form.get('photo')
    const password = form.get('password')
    const name = form.get('name')
    console.log( email , photo, password , name)

    // create user 
     createUser(email, password)
     .then(result => console.log(result.user))
     .catch(error =>  console.log(error))

     

   }
    return (
        <div>
            <div>
                <Navbar></Navbar>
                <h2 className="text-3xl text-center">This is Register page</h2>
                <form onSubmit={handleRegister} className="mx-auto lg:w-1/2 md:w-3/4" >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="name" name="name" placeholder="Your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo url</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" autoComplete="username" placeholder="Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" autoComplete="new-password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>

                <p className="text-center mt-4">Already have an account? <Link className="text-center text-blue-600 font-bold" to='/login'>Login now</Link></p>

            </div>
        </div>
    );
};

export default Register;