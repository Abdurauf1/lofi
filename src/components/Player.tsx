import { FaPlay, FaBackward, FaForward } from "react-icons/fa";
// FaStop
const Player = () => {
  return (
    <div className="absolute bottom-10 left-10 backdrop-blur-xs bg-white/10 p-5">
      <div className="flex items-center gap-3">
        <FaBackward className="text-white cursor-pointer" />
        <FaPlay className="text-white cursor-pointer" />
        <FaForward className="text-white cursor-pointer" />
      </div>
    </div>
  )
}

export default Player