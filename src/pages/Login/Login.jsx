import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {
const handleLogin = e => {
   e.prevenrDefault();
  /*  const email = e.target.email.value;
   const password = e.target.password.value; */   

   const form = new FormData(e.currentTarget);
   console.log(form)
}

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl text-center">This is login page</h2>
            <div className="mx-auto lg:w-1/2 md:w-3/4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email"  name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input  name="password" type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </div>

        </div>
    );
};

export default Login;