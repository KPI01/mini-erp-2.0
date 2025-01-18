import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

export function Layout() {
  return (
    <main className="grid h-screen place-content-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-lightBlue/25 from-0% to-white to-70% font-sans text-darkBlue">
      <Outlet />
    </main>
  );
}

export default function App() {
  return <Outlet />;
}
