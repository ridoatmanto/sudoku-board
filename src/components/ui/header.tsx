import { Link } from "react-router-dom";

export function Header() {
  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pb-4">
        <div className="flex items-center">
          <div className="grid grid-rows-2">
            <div className="text-black">
              <Link to="/" className="space-x-3 rtl:space-x-reverse">
                <img
                  src="./sudoku-board.png"
                  alt="Sudoku Board Logo"
                  className="h-8 float-left"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Sudoku Board
                </span>
              </Link>
            </div>
            <div className="text-md italic text-slate-500">
              Help you enjoy Sudoku.
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
