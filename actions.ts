'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function loginAction(formData: FormData) {
  const pin = formData.get('pin') as string
  const correctPin = process.env.HOGAR_PIN

  if (!correctPin) {
    throw new Error('PIN no configurado en variables de entorno')
  }

  if (pin !== correctPin) {
    return { error: 'PIN incorrecto' }
  }

  const cookieStore = await cookies()
  cookieStore.set('hogar_auth', 'true', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 30, // 30 días
    path: '/',
  })

  redirect('/dashboard')
}

export async function logoutAction() {
  const cookieStore = await cookies()
  cookieStore.delete('hogar_auth')
  redirect('/login')
}
