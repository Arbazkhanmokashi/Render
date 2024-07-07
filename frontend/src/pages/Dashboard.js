import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import backgroundImage from '../assets/dashboard.png'; // Import the background image
import NavigationHelp from '../components/NavigationHelp'; // Import the NavigationHelp component
import ShareMarketChart from '../components/ShareMarketChart'; // Import the ShareMarketChart component

const DashboardContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  position: relative; /* Ensure the container is positioned relatively */
`;

const ContentBox = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 30px;
  border-radius: 10px;
  max-width: 800px; /* Increase the max-width */
  margin: 50px auto; /* Center the content horizontally */
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }
`;

const Heading = styled.h1`
  color: #333;
`;

const Paragraph = styled.p`
  color: #666;
  font-size: 16px;
  line-height: 1.5;
`;

const AdminButton = styled.button`
  background-color: #ff0000; /* Red color */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
`;

const Input = styled.input`
  margin-bottom: 15px;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const ShareMarketContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.5); /* Transparent white background */
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
`;

function Dashboard() {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleAdminModeToggle = () => {
    setIsAdminMode(!isAdminMode); // Toggle admin mode
    setUsername('');
    setPassword('');
    setIsAdminLoggedIn(false); // Reset admin login state
  };

  const handleAdminLogin = () => {
    // Authenticate admin credentials
    if (username === 'admin' && password === 'admin123') {
      // Show admin dashboard with revenue, cost, and share market details
      alert('Welcome, Admin! Showing admin dashboard...');
      setIsAdminLoggedIn(true);
      // Implement logic to display admin dashboard content
    } else {
      alert('Invalid admin credentials. Please try again.');
      setIsAdminLoggedIn(false);
    }
  };

  return (
    <DashboardContainer>
      <Navbar />
      <NavigationHelp />
      <ContentBox>
        <Heading>Dashboard</Heading>
        <Paragraph>
          Welcome to the Car Pooling Ride Sharing application dashboard. Here, you can access various features and services that enhance your commuting experience. Discover affordable travel options by sharing rides with others heading in the same direction. Save on fuel costs, reduce your carbon footprint, and make new connections with our platform. Enjoy the convenience and benefits of carpooling with us.
        </Paragraph>
        <AdminButton onClick={handleAdminModeToggle}>
          {isAdminMode ? 'Turn Off Admin Mode' : 'Turn On Admin Mode'}
        </AdminButton>
        {isAdminMode && !isAdminLoggedIn && (
          <div>
            <Input
              type="text"
              placeholder="Admin Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleAdminLogin}>Login</button>
          </div>
        )}
      </ContentBox>
      {isAdminLoggedIn && (
        <ShareMarketContainer>
          <ShareMarketChart width={400} height={300} /> {/* Set width and height */}
        </ShareMarketContainer>
      )}
    </DashboardContainer>
  );
}

export default Dashboard;
