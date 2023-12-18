import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = () => {
    const [ email, setEmail ] = useState('');
    const [password, setPasswod] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const logIn = async () => {
        try {
            await signInWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles');
        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <>
        <h1>Log In</h1>
        { error && <p className="error">{ error }</p>}

        <input 
            placeholder ="Your email address"
            value = { email }
            onChange = { e => setEmail(e.target.value)}/>
        <input 
            type="password"
            placeholder ="Your Password"
            value = { password }
            onChange = { e => setPasswod(e.target.value)} />
        <button onClick={ logIn }> Log In</button>
        <Link to="/create-account"> Don't have an account? Create one!</Link>
        </>
    );
}

export default LoginPage;