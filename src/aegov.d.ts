declare module '@aegov/design-system-react' {
  import { ComponentPropsWithRef, FC, ForwardRefExoticComponent, ReactNode } from 'react';

  interface CardProps extends ComponentPropsWithRef<'div'> {
    variant?: 'default' | 'news' | 'service' | 'creative';
    size?: 'sm' | 'base' | 'lg';
    bordered?: boolean;
    glow?: boolean;
    asChild?: boolean;
    noRadius?: boolean;
    children?: ReactNode;
  }

  interface CardLinkProps extends ComponentPropsWithRef<'a'> {
    children?: ReactNode;
  }

  interface CardStackProps extends ComponentPropsWithRef<'div'> {
    direction?: 'horizontal' | 'vertical' | 'matrix';
    collapsed?: boolean;
    gap?: number;
    columns?: number;
    children?: ReactNode;
  }

  interface CardComponent extends ForwardRefExoticComponent<CardProps> {
    Link: ForwardRefExoticComponent<CardLinkProps>;
    Stack: ForwardRefExoticComponent<CardStackProps>;
  }

  export const Card: CardComponent;

  interface ButtonProps extends ComponentPropsWithRef<'button'> {
    variant?: 'solid' | 'outline' | 'soft' | 'link';
    style?: 'primary' | 'secondary';
    size?: 'xs' | 'sm' | 'base' | 'lg';
    block?: boolean;
    isIcon?: boolean;
    children?: ReactNode;
  }

  export const Button: ForwardRefExoticComponent<ButtonProps>;

  interface InputProps extends ComponentPropsWithRef<'input'> {
    label?: string;
    placeholder?: string;
    id?: string;
    type?: string;
    size?: 'sm' | 'base' | 'lg';
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
    required?: boolean;
    helperText?: string;
    error?: string;
    prefix?: ReactNode;
    suffix?: ReactNode;
  }

  export const Input: FC<InputProps>;

  interface SelectOption {
    label: string;
    value: string;
  }

  interface SelectProps {
    label?: string;
    placeholder?: string;
    id?: string;
    options?: SelectOption[];
    size?: 'sm' | 'base' | 'lg';
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
    required?: boolean;
    error?: string;
    helperText?: string;
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
  }

  export const Select: FC<SelectProps>;
}
