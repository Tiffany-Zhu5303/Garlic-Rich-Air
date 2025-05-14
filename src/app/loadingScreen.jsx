import React from 'react';

export default function LoadingScreen({backgroundcolor}) {
  return (
    <div className={`${backgroundcolor} fixed inset-0 flex items-center justify-center z-50`}>
      <img src='./garlicbulb.png' alt='Loading...' className="animate-spin rounded-full h-60 w-60 border-t-transparent"/>
    </div>
  ); 
}