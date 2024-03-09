'use client'
import React from 'react';
import LoginForm from '../components/LoginForm';
import { useRouter } from 'next/router';
import { useEffect } from "react";


const Profile = () => {
  const router = useRouter()

useEffect(() => {
  const token = localStorage.getItem('accessToken')
  if(!token) router.push('/login')
}, [])


  return (
    <div >
     <h1>Profile Page</h1>
    </div>
  );
};

export default Profile;
