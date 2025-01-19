import { createCookieSessionStorage } from "react-router";
import dotenv from "dotenv"

dotenv.config()

const cookieName = process.env.SESSION_COOKIE_NAME || "session"
const cookieMaxAge = 60 * 60 * Number(process.env.SESSION_COOKIE_AGE_HOURS) || 60 * 60 * 2

console.log("cookie name:", cookieName)
console.log("cookie age:", cookieMaxAge)

const sessionStorage = createCookieSessionStorage({
    cookie: {
        name: cookieName,
        sameSite: "lax",
        path: "/",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: cookieMaxAge
    },
})

async function getSession(cookieHeader: string | null) {
    return sessionStorage.getSession(cookieHeader)
}

async function saveSession(session: any, data: Record<string, any>) {
    for (const [ key, value ] of Object.entries(data)) {
        session.set(key, value)
    }

    return session
}

async function destroySession(cookieHeader: string | null) {
    const session = await sessionStorage.getSession(cookieHeader)
    return sessionStorage.destroySession(session)
}

export { sessionStorage, getSession, saveSession, destroySession }