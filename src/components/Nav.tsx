// import { useLocation } from "@solidjs/router";
// import PlaygroundNav from "./nav/PlaygroundNav";

// export default function Nav() {
//   const location = useLocation();
//   const active = (path: string) =>
//     path == location.pathname ? "border-sky-600" : "border-transparent hover:border-sky-600";

//   const basicNav = <ul class="container flex items-center p-3 text-gray-200">
//     <li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
//       <a href="/">Home</a>
//     </li>
//     <li class={`border-b-2 ${active("/about")} mx-1.5 sm:mx-6`}>
//       <a href="/about">About</a>
//     </li>
//   </ul>

//   console.log(location.pathname);
//   const navMapping: {[key:string]: any } = {
//     '/': <div>Basic</div>,
//     '/about': basicNav,
//     '/playground': PlaygroundNav,
//   };

//   const navComponent = navMapping[location.pathname];

//   return (
//     <nav class="bg-sky-800">
//       {navComponent}
//     </nav>
//   );
// }
