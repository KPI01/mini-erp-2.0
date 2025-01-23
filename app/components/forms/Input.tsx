import type { ButtonHTMLAttributes } from "react";
import type React from "react";

interface InputProps<T> {
  label?: string;
  input: React.InputHTMLAttributes<HTMLInputElement>;
  btn?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  icon?: React.ReactNode;
}

export default function Input<T>({ label, input, btn, icon }: InputProps<T>) {
  return (
    <div className="form-control">
      {label && <label htmlFor={input.name}>{label}</label>}
      {icon && btn ? (
        <div className="flex gap-3">
          <input {...input} />
          <button {...btn}>{icon}</button>
        </div>
      ) : (
        <input {...input} />
      )}
    </div>
  );
}
