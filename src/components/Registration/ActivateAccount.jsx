 
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ErrorAlert from '../ErrorAlert';
import apiClient from '../../services/api-client';

const ActivateAccount = () => {
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const {uid , token} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        apiClient.post("/auth/users/activation", {uid, token})
        .then((res) => {
        setMessage("Account activate successfully.");
        setTimeout(() => navigate("/login") , 3000 )
        })
        .catch((error) => { 
        setError("Something Went Wrong...")
        console.log(error);
    });

    }, [navigate, uid, token])



    return (
        <div className='flex justify-center items-center min-h-screen bg-base-200'>
            <div className='card bg-base-100 shadow-xl p-6'>
                <h2 className='text-2xl font-bold'>Account Activation</h2>
                {message && (
                    <div role="alert" className="alert alert-error">

                        <svg xmlns="http://www.w3.org/2000/svg" 
                            className="h-6 w-6 shrink-0 stroke-current" 
                            fill="none"
                            viewBox="0 0 24 24">
                    <path strokeLinecap="round"
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span>{message}</span>
                </div>
                )}
                {error && <ErrorAlert  error={error}/> }
            </div>
        </div>
    );
};

export default ActivateAccount;