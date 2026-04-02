export default function TutorialPage() {
  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-6">
        Tailwind Tutorial
      </h1>

      <div className="bg-blue-500 text-white p-4 rounded-lg mb-4">
        This box has padding, background color, and rounded corners.
      </div>

      <div className="border-2 border-gray-400 p-4 mb-4">
        This box has a border.
      </div>

      <p className="text-green-500 font-bold mb-4">
        This text is green and bold.
      </p>

      <ul className="list-disc pl-6 mb-6">
        <li>Tailwind uses utility classes</li>
        <li>You can combine many classes</li>
        <li>Classes control layout and styling</li>
      </ul>

      <div className="flex gap-4">
        <div className="bg-red-500 text-white p-4 rounded">
          Box 1
        </div>

        <div className="bg-purple-500 text-white p-4 rounded">
          Box 2
        </div>
      </div>

    </div>
  )
}