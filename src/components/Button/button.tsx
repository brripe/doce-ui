import type { ButtonHTMLAttributes } from "react";
import scss from "./button.module.scss";
import classNames from "classnames";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: CSSModuleClasses | string;
};

export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button className={classNames(scss.buttonContainer, className)} {...props}>
      {children}
    </button>
  );
}
