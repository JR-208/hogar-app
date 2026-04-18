'use client'

import { useActionState } from 'react'
import { loginAction } from '@/lib/actions'

const initialState = { error: '' }

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, initialState)

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-white border border-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🏠</span>
          </div>
          <h1 className="text-xl font-medium text-gray-900">Hogar compartido</h1>
          <p className="text-sm text-gray-500 mt-1">Ingresa el PIN para continuar</p>
        </div>

        {/* Form */}
        <form action={formAction} className="bg-white border border-gray-200 rounded-2xl p-6 space-y-4">
          <div>
            <label htmlFor="pin" className="block text-sm font-medium text-gray-700 mb-1.5">
              PIN de acceso
            </label>
            <input
              id="pin"
              name="pin"
              type="password"
              inputMode="numeric"
              maxLength={8}
              required
              placeholder="••••"
              className="w-full px-4 py-2.5 text-center text-xl tracking-widest border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
            />
          </div>

          {state?.error && (
            <p className="text-sm text-red-600 text-center">{state.error}</p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full py-2.5 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {isPending ? 'Verificando...' : 'Entrar'}
          </button>
        </form>

      </div>
    </main>
  )
}
