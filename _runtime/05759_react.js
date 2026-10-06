// === Module 5759: react ===

// Module 5759 (react)
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;

let _window;
let map;
({ Fragment: _window, jsx: map } = Fragment);
const context = react.createContext((children) => {
  const obj = { children: children.children };
  return map(React, obj);
});

export const GHContext = context;
export const RNSScreensRefContext = react.createContext(null);