import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  containerClassName?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  className,
  containerClassName,
  disabled,
  ...props
}) => {
  return (
    <div className={cn("grid w-full items-center gap-1.5", containerClassName)}>
      <Label 
        htmlFor={id} 
        className={cn(
          "text-sm font-medium text-card-foreground",
          disabled && "cursor-not-allowed opacity-70"
        )}
      >
        {label}
      </Label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={cn(
          "border-input bg-transparent placeholder:text-muted-foreground",
          "focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0", // Adjusted focus ring for better visibility if needed
          className
        )}
        {...props}
      />
    </div>
  );
};

export default InputField;
