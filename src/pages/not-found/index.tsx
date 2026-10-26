import type { FC } from "react"
import { Link } from "react-router-dom"
const NotFound:FC = () => {
  return (
    <div className="flex flex-col items-center gap-5 justify-center h-[80vh]">
      <h1 className="text-4xl font-bold">404</h1>
      <h1 className="text-2xl font-semibold">Sayfa Bulunamadı.</h1>
      <p className="text-lg">Aradığınız sayfa bulunamadı. Lütfen başka bir sayfaya geçiş yapınız</p>
      <Link to="/" className="text-blue-500">Anasayfa'ya Git</Link>
    </div>
  )
}

export default NotFound