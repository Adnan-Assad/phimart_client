import  { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Login = () => {

    const {loginUser} = useContext(AuthContext)

    return (
        <div>
            <h1>This is login page..........</h1>
            <button className='btn btn-secondary' onClick={() => loginUser("admin@admin.com", '1234') }>Log In</button>
        </div>
    );
};

export default Login;