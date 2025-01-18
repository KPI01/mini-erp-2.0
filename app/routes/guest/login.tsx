import { Form, type ActionFunctionArgs, type MetaFunction } from "react-router";
import { Eye, EyeOff, Forward } from "lucide-react";
import { useEffect, useState } from "react";
import { login } from "~/server/auth/login";

export const meta: MetaFunction = () => {
  return [{ title: "Login", description: "Iniciar sesión en la plataforma" }];
};

export async function action({ request }: ActionFunctionArgs) {
  console.log("action");

  return login(request);
}

export default function LoginForm() {
  console.log("LoginForm");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    if (showPassword) {
      setTimeout(() => {
        setShowPassword(false);
      }, 2500);
    }
  };

  useEffect(() => {
    handlePasswordVisibility();
  }, [showPassword]);

  return (
    <div className="card">
      <h1>Tu Sistema ERP</h1>
      <p className="card-description">
        Bienvenido al sistema de tu empresa, por favor ingresa tus credenciales
        para acceder al sistema.
      </p>
      <Form className="mt-4 grid grid-rows-2" method="post" action="/login">
        <div className="form-control">
          <label htmlFor="username">Usuario</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Contraseña</label>
          <div className="flex gap-3">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="basis-full"
            />
            <button
              type="button"
              className="btn-outline"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-darkBlue ms-auto mt-4 gap-3 text-lg font-bold"
        >
          Ingresar
          <Forward />
        </button>
      </Form>
    </div>
  );
}
