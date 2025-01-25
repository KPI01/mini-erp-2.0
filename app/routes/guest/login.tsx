import {
  Form,
  redirect,
  type ActionFunctionArgs,
  type MetaFunction,
} from "react-router";
import { Eye, EyeOff, Forward } from "lucide-react";
import { useEffect, useState } from "react";
import { login } from "~/server/auth/login";
import { getSession } from "~/server/auth/cookie";
import type { Route } from "./+types/login";
import Input from "~/components/forms/Input";
import { SendIcon } from "~/components/icons";

export const meta: MetaFunction = () => {
  return [{ title: "Login", description: "Iniciar sesión en la plataforma" }];
};

export async function loader({ request }: Route.LoaderArgs) {
  console.log("loader");

  const session = await getSession(request.headers.get("cookie"));
  console.log("session:", session.data);

  if (session.get("user")) {
    throw redirect("/app");
  }
}

export async function action({ request }: ActionFunctionArgs) {
  console.log("action");

  await login(request);
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
      <Form
        className="mt-4 grid grid-rows-2"
        method="post"
        action="/guest/login"
      >
        <Input
          label="Usuario"
          input={{
            type: "text",
            id: "username",
            name: "username",
          }}
        />
        <Input
          label="Contraseña"
          input={{
            type: showPassword ? "text" : "password",
            id: "password",
            name: "password",
            className: "basis-full",
          }}
          btn={{
            type: "button",
            className: "btn btn-outline-lightBlue",
            onClick: () => setShowPassword(!showPassword),
          }}
          icon={showPassword ? <Eye /> : <EyeOff />}
        />
        <button
          type="submit"
          className="btn btn-darkBlue text-white ms-auto mt-4 gap-3 text-lg font-bold"
        >
          Ingresar
          <SendIcon />
        </button>
      </Form>
    </div>
  );
}
