import Board from 'app/ui/Board'
import Cards from 'app/ui/Cards'
import Header from 'app/ui/Header'
import Hud from 'app/ui/Hud'
import { useGame } from './useGame'

export default function App() {
  const { game } = useGame()
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div className="w-screen flex flex-row h-full">
        <div className="w-full flex flex-col">
          <div className="h-full bg-slate-800">
            <Board game={game} />
          </div>
          <div className="min-h-[40vh] bg-gray-900">
            <Cards game={game} />
          </div>
        </div>
        <div className="min-w-[25vw] bg-slate-600">
          <Hud game={game} />
        </div>
      </div>
    </div>
  )
}
