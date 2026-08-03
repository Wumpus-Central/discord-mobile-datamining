// === Module 5654: __react_navigation__elements_contexts ===

// Module 5654 (__react_navigation__elements_contexts)
import noop from "noop";

let __react_navigation__elements_contexts = "__react_navigation__elements_contexts";
__react_navigation__elements_contexts = global.__react_navigation__elements_contexts;
if (__react_navigation__elements_contexts == null) {
  const _Map = Map;
  __react_navigation__elements_contexts = new Map();
}
global.__react_navigation__elements_contexts = __react_navigation__elements_contexts;

export default function getNamedContext(displayName) {
  let value = global[__react_navigation__elements_contexts].get(displayName);
  if (!value) {
    const context = React.createContext(arg1);
    context.displayName = displayName;
    const result = global[tmp2].set(displayName, context);
    value = context;
    const obj2 = global[tmp2];
  }
  return value;
};