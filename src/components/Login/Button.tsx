import React from 'react';
import { Button as ShadcnButton, type ButtonProps as ShadcnButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ButtonProps extends ShadcnButtonProps {
  // No custom props needed beyond Shadcn's ButtonProps for this specific component
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'default', // 'default' variant uses primary colors from theme (teal background, white text)
  ...props
}) => {
  return (
    <ShadcnButton
      variant={variant}
      className={cn(
        "w-full font-semibold", // Ensure button is full width and text is semibold as per general CTA feel
        // Shadcn's default 'h-10 py-2 px-4' and 'rounded-md' are generally good.
        // 'text-sm' is also default for Shadcn button.
        className
      )}
      {...props}
    >
      {children}
    </ShadcnButton>
  );
};

export default Button;
