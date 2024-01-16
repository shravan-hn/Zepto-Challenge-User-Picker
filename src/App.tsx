import React from 'react';
import UserPicker from './components/UserPicker';
import './App.css'; 
import Footer from './components/Footer'
const App: React.FC = () => {
  // Sample data for users
  const users = [
    { id: '1', name: 'Alice Johnson', email: 'alice.johnson@example.com' },
    { id: '2', name: 'Bob Smith', email: 'bob.smith@example.com' },
    { id: '3', name: 'Carla Gomes', email: 'carla.gomes@example.com' },
    { id: '4', name: 'David Lee', email: 'david.lee@example.com' },
    { id: '5', name: 'Emily Clark', email: 'emily.clark@example.com' },
    { id: '6', name: 'Frank Morgan', email: 'frank.morgan@example.com' },
    { id: '7', name: 'Grace Kim', email: 'grace.kim@example.com' },
    { id: '8', name: 'Henry Martinez', email: 'henry.martinez@example.com' },
    { id: '9', name: 'Isla Fisher', email: 'isla.fisher@example.com' },
    { id: '10', name: 'Jack Turner', email: 'jack.turner@example.com' },
    { id: '11', name: 'Kara Young', email: 'kara.young@example.com' },
    { id: '12', name: 'Liam Brown', email: 'liam.brown@example.com' },
    { id: '14', name: 'Noah Allen', email: 'noah.allen@example.com' },
    { id: '15', name: 'Olivia Foster', email: 'olivia.foster@example.com' }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>User Picker</h1>
      </header>
      <main>
        <UserPicker users={users} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
