import React from 'react';
import { redirect } from 'next/navigation';


const PageA: React.FC = () => {
  return (
<div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Page A</h1>
      <div className="bg-blue-500 rounded-lg shadow-lg p-6">
        {/* Add your content for Page A */}
      </div>
    </div>
  );
};



export default PageA;