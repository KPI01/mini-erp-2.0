import { redirect } from "react-router";
import { PrismaClient } from "@prisma/client"

let prisma = new PrismaClient();

export async function login(request: Request) {
    const username = (await request.formData()).get('username');
    const password = (await request.formData()).get('password');

    if (!username || !password) {
        console.log('Alguno de los datos esta vacío')
        throw redirect('/login', {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
            statusText: 'Mala petición'
        })
    }

    if (typeof username === 'string' && typeof password === 'string') {
        let user = await prisma.user.findFirst({
            where: { username, password }
        }).then(async (user) => {
            if (!user) {
                console.log('Usuario no encontrado')
                prisma.$disconnect();
                throw redirect('/login', {
                    status: 401,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    statusText: 'Usuario no encontrado'
                })
            }

            console.log('Usuario encontrado:', user)
            prisma.$disconnect();
            return user;
        })
        console.log('usuario:', user)

        return user
    }

    return redirect('/login', {
        status: 400,
        headers: {
            'Content-Type': 'application/json',
        },
        statusText: 'Mala petición'
    })
}