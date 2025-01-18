import { createCookieSessionStorage } from "react-router";

const sessionStorage = createCookieSessionStorage({
    cookie: {
        name: "_session",
        sameSite: "lax",
        path: "/",
        httpOnly: true,
    },
})

export { sessionStorage }