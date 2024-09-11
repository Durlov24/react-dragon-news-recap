import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    console.log('login page loation', location)

    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        /*  const email = e.target.email.value;
         const password = e.target.password.value; */

        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                //  Use navigate after login
                navigate(location?.state ? location.state: '/'  )

            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl text-center">This is login page</h2>
            <form className="mx-auto lg:w-1/2 md:w-3/4" onSubmit={handleLogin}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password" type="password" autoComplete="current-password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>

            <p className="text-center mt-4">DO you have an account? <Link className="text-center text-blue-600 font-bold" to='/register'>Register now</Link></p>

        </div>
    );
};

export default Login;