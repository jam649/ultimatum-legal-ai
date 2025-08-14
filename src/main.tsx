import { createRoot } from 'react-dom/client'
import './index.css'

console.log('=== Starting main.tsx ===');

try {
  console.log('Importing React...');
  const { createRoot } = await import('react-dom/client');
  console.log('React imported successfully');
  
  console.log('Importing CSS...');
  await import('./index.css');
  console.log('CSS imported successfully');
  
  console.log('Root element:', document.getElementById("root"));
  
  const root = createRoot(document.getElementById("root")!);
  console.log('Root created successfully');
  
  // Render a simple div without any component imports
  root.render(
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: 'red', 
      padding: '2rem',
      color: 'white'
    }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Test Page</h1>
      <p>If you can see this, React is working!</p>
    </div>
  );
  
  console.log('App rendered successfully');
} catch (error) {
  console.error('Error in main.tsx:', error);
  // Fallback: try to show error on page
  const rootElement = document.getElementById("root");
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 2rem; background: red; color: white;">
        <h1>Error Loading App</h1>
        <p>${error.message}</p>
        <pre>${error.stack}</pre>
      </div>
    `;
  }
}
