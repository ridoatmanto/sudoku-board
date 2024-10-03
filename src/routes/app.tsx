import { Card } from "../components/card.tsx";

export default function App() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div>
        <div className="float-left grid grid-cols-3 lg:mx-0 min-h-72 lg:max-w-[436px] max-w-full bg-zinc-200 ">
          <div className="mb-1 mr-1">
            <Card block="1" key={"card-1"} />
          </div>
          <div className="mb-1 mr-1">
            <Card block="2" key={"card-2"} />
          </div>
          <div className="mb-1">
            <Card block="3" key={"card-3"} />
          </div>
          <div className="mb-1 mr-1">
            <Card block="4" key={"card-4"} />
          </div>
          <div className="mb-1 mr-1">
            <Card block="5" key={"card-5"} />
          </div>
          <div className="mb-1">
            <Card block="6" key={"card-6"} />
          </div>
          <div className="mb-1 mr-1">
            <Card block="7" key={"card-7"} />
          </div>
          <div className="mb-1 mr-1">
            <Card block="8" key={"card-8"} />
          </div>
          <div className="mb-1">
            <Card block="9" key={"card-9"} />
          </div>
        </div>
      </div>
      <div className="text-slate-500">
        <h2 className="text-2xl font-bold">Sudoku Rules</h2>
        <ul className="list-disc pl-4">
          <li>Each vertical column can only contain numbers from 1 to 9.</li>
          <li>Each horizontal row can only contain numbers from 1 to 9.</li>
          <li>
            Each number in the 3×3 block, vertical column or horizontal row can
            be used only once.{" "}
          </li>
          <li>
            The game is over when the whole Sudoku grid is correctly filled with
            numbers.
          </li>
        </ul>
        <h3 className="text-lg font-bold mt-2">Sample Empty Board</h3>
        <img
          src="./tantangan-sudoku-kompas.png"
          alt="tantangan sudoku kompas"
          className="w-80 block"
        />

        <p className="block">Source: Kompas Newspaper</p>
      </div>
    </div>
  );
}
