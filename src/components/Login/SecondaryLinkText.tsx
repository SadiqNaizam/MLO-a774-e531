import React from 'react';
import { cn } from '@/lib/utils';

interface SecondaryLinkTextProps {
  leadingText: string;
  linkText: string;
  onLinkClick: () => void;
  className?: string;
}

const SecondaryLinkText: React.FC<SecondaryLinkTextProps> = ({
  leadingText,
  linkText,
  onLinkClick,
  className,
}) => {
  return (
    <p className={cn("text-sm text-center text-muted-foreground", className)}>
      {leadingText}{' '}
      <button
        type="button"
        onClick={onLinkClick}
        className="font-medium text-primary hover:text-primary/90 focus:outline-none focus:underline"
      >
        {linkText}
      </button>
    </p>
  );
};

export default SecondaryLinkText;
