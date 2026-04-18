import { logoutAction } from '@/lib/actions'

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <h1 className="font-medium text-gray-900">🏠 Hogar compartido</h1>
        <form action={logoutAction}>
          <button
            type="submit"
            className="text-sm text-gray-500 hover:text-gray-900 transition"
          >
            Salir
          </button>
        </form>
      </header>
      <div className="max-w-lg mx-auto px-4 py-10 text-center text-gray-400 text-sm">
        Dashboard — aquí van los módulos de aseo y gastos
      </div>
    </main>
  )
}
