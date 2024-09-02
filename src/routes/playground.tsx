import { Component, createSignal, onMount } from "solid-js";
import PlaygroundNav from "~/components/nav/PlaygroundNav";
import hljs from "highlight.js"

const Playground: Component = () => {

    const [code, setCode]  = createSignal(`    function sayName() {
        console.log("SayName");
    }
    console.log("Hello world");`);

    const [c, setC] = "language-javascript"

    onMount(() => {
        hljs.highlightAll();
        setCode("console.log('2')");
    });

    return (
        <div class="flex flex-col h-screen">

        {/* Navigation */}
        <PlaygroundNav />

        <main class="flex-grow overflow-y-auto bg-black-100 p-4">
            <pre><code class={c}>
                {code()}
            </code></pre>
        </main>
        
        {/* Footer */}
        <footer class="bg-gray-800 text-white p-4">
            <p class="text-center">Footer</p>
        </footer>
        </div>
  );
};

export default Playground;
