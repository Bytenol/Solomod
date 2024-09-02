import { Component, createSignal } from "solid-js";
import PlaygroundNav from "~/components/nav/PlaygroundNav";

// Sample JSON Data
const jsonData = [
  { id: 1, title: "Item 1", description: "Description for item 1" },
  { id: 2, title: "Item 2", description: "Description for item 2" },
  { id: 3, title: "Item 3", description: "Description for item 3" },
  { id: 4, title: "Item 4", description: "Description for item 4" },
  { id: 5, title: "Item 5", description: "Description for item 5" },
  { id: 6, title: "Item 6", description: "Description for item 6" },
  { id: 7, title: "Item 7", description: "Description for item 7" },
  { id: 8, title: "Item 8", description: "Description for item 8" },
  { id: 9, title: "Item 9", description: "Description for item 9" },
  { id: 10, title: "Item 10", description: "Description for item 10" },
  { id: 11, title: "Item 11", description: "Description for item 11" },
  { id: 12, title: "Item 12", description: "Description for item 12" },
  // Add more items as needed...
];

const ScrollableMain: Component = () => {
  const [items, setItems] = createSignal(jsonData.slice(0, 10));
  const [index, setIndex] = createSignal(10);

  const generateMore = () => {
    const newIndex = index() + 10;
    setItems([...items(), ...jsonData.slice(index(), newIndex)]);
    setIndex(newIndex);
  };

  return (
    <main class="flex-grow overflow-y-auto bg-gray-100 p-4">
      <div class="grid grid-cols-1 gap-4">
        {items().map((item) => (
          <div class="bg-white p-4 shadow rounded">
            <h3 class="text-lg font-bold">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      {index() < jsonData.length && (
        <div class="flex justify-center mt-4">
          <button
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={generateMore}
          >
            Generate More
          </button>
        </div>
      )}
    </main>
  );
};


const CodeBit: Component = () => {
    const defaultMode = "web";

    return (
        <div class="flex flex-col h-screen">

        {/* Navigation */}
        <PlaygroundNav />

        <ScrollableMain />
        
        {/* Footer */}
        <footer class="bg-gray-800 text-white p-4">
            <p class="text-center">Footer</p>
        </footer>
        </div>
  );
};

export default CodeBit;