import { Component } from "solid-js";
import { Show } from "solid-js";
import { Icon } from "solid-heroicons";
import { arrowLeft, bell, chatBubbleLeftEllipsis, home } from "solid-heroicons/solid";
import iUser from "~/core/model/iUser";

const PlaygroundNav: Component = (props: any) => {
    const defaultMode = "web";

    return (
    <nav class="bg-gray-800 text-white p-4">
        {/* First Row */}
        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <button class="flex items-center text-lg">
                    <Icon path={arrowLeft} class="w-6 h-6 mr-2" />
                    <span>Playground</span>
                </button>
            </div>
            <div class="flex items-center space-x-4">
                <Icon path={chatBubbleLeftEllipsis} class="w-5 h-5" />
                <Icon path={bell} class="w-5 h-5" />
                <img
                    src={props.avatarUrl}
                    alt={props.userName + "'s Avatar"}
                    class="w-6 h-6 rounded-full"
                />
            </div>
        </div>

        {/* Second Row */}
        <div class="flex justify-around mt-2">
            <Show when={defaultMode === "web"} fallback={
            <>
                <div class="flex-1 text-center">Python</div>
                <div class="flex-1 text-center">Output</div>
            </>
            }>
            <div class="flex-1 text-center">HTML</div>
            <div class="flex-1 text-center">CSS</div>
            <div class="flex-1 text-center">JS</div>
            <div class="flex-1 text-center">Output</div>
            </Show>
        </div>
        </nav>
  );
};

export default PlaygroundNav;
