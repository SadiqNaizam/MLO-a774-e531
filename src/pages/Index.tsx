import React from 'react';
import LoginCard from '../components/Login/LoginCard';

/**
 * LoginPage serves as the main entry point for the login screen.
 * It utilizes a centered layout to display the LoginCard component.
 * This page corresponds to the "Login Screen" target page and implements
 * the "CenteredFormLayout" template by applying overall layout styles.
 */
const IndexPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <LoginCard />
    </div>
  );
};

export default IndexPage;
