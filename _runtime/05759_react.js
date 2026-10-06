// _runtime/05759_react.js
import react from "00019_react.js";
import Fragment from "react/00021_Fragment.js";

let _window;
let map;
({ Fragment: _window, jsx: map } = Fragment);
const context = react.createContext((children) => {
  const obj = { children: children.children };
  return map(React, obj);
});

export const GHContext = context;
export const RNSScreensRefContext = react.createContext(null);
