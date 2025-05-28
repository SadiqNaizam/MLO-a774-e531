import React from 'react';
import { cn } from '@/lib/utils';
import InputField from './InputField';
import Button from './Button';
import SecondaryLinkText from './SecondaryLinkText';

interface LoginCardProps {
  className?: string;
}

const LoginCard: React.FC<LoginCardProps> = ({ className }) => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleLogin = React.useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    console.log('Logging in with:', { username, password });
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    // In a real app, you would handle success (e.g., navigate) or error (e.g., show message)
    // For this example, we'll just log and reset loading state.
  }, [username, password]);

  const handleSignUpClick = React.useCallback(() => {
    console.log('Navigate to Sign Up page triggered');
    // Implement navigation logic here, e.g., using react-router-dom or Next.js router
  }, []);

  return (
    <div
      className={cn(
        "bg-card text-card-foreground p-6 shadow-md rounded-lg w-80",
        className
      )}
    >
      <h2 className="text-2xl font-bold text-center text-card-foreground mb-6">
        Log in
      </h2>
      
      <form onSubmit={handleLogin} className="space-y-4">
        <InputField
          id="username"
          label="Username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={isLoading}
          autoComplete="username"
        />
        <InputField
          id="password"
          label="Password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
          autoComplete="current-password"
        />
        <Button type="submit" disabled={isLoading} className="w-full mt-2">
          {isLoading ? 'Logging in...' : 'Log in'}
        </Button>
      </form>

      <SecondaryLinkText
        leadingText="or,"
        linkText="sign up"
        onLinkClick={handleSignUpClick}
        className="mt-6"
      />
    </div>
  );
};

export default LoginCard;
