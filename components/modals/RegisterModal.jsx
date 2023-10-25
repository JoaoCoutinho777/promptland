import React, { useState, useCallback } from 'react';
import Input from '@components/Input';
import Modal from '@components/Modal';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const RegisterModal = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [showLoginModal, setShowLoginModal] = useState(true);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    
    const onToggle = useCallback(() => {
        if (isLoading) {
            return;
        }
        setShowRegisterModal(false);
        setShowLoginModal(true);
    }, [isLoading, showLoginModal, showRegisterModal]);

    const onSubmit = useCallback(async () => {
        try{
            setIsLoading(true);

            await axios.post('/api/register', {
                email,
                password,
                username,
                name
            });

            toast.success('Account created!');

            signIn('credentials', {
                email,
                password,
            });

            setShowRegisterModal(false);

        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        }
        finally {
            setIsLoading(false);
        }
    }, [showRegisterModal, email, password, username, name]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={isLoading}/>
            <Input placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            disabled={isLoading}/>
            <Input placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            disabled={isLoading}/>
            <Input placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            disabled={isLoading}/>
        </div>
    )

    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p>Already have an account? 
                <span
                onClick={onToggle}
                className="
                    text-white
                    cursor-pointer
                    hover:underline"> Sign in</span>
            </p>
        </div>
    )

    return (
        <Modal disabled={isLoading}
        isOpen={showRegisterModal}
        title="Create an account"
        actionLabel="Register"
        onClose={() => setShowRegisterModal(false)}
        onSubmit={onSubmit}
        body={bodyContent}
        footer={footerContent}/>

    );
}

export default RegisterModal;