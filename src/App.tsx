import React from 'react';

const App = () => {
  console.log('App component is rendering');
  return (
    <div className="min-h-screen bg-red-500 p-8">
      <h1 className="text-4xl font-bold text-white">Test Page</h1>
      <p className="text-white">If you can see this, React is working!</p>
    </div>
  );
};

export default App;
