import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("guest", "routes/guest/layout.tsx", [
        route("login", "routes/guest/login.tsx"),

    ])
] satisfies RouteConfig;
