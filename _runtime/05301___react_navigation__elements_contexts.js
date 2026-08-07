// _runtime/05301___react_navigation__elements_contexts.js
import noop from "noop";

let __react_navigation__elements_contexts = "__react_navigation__elements_contexts";
__react_navigation__elements_contexts = globalThis.__react_navigation__elements_contexts;
if (__react_navigation__elements_contexts == null) {
  const _Map = Map;
  __react_navigation__elements_contexts = new Map();
}
globalThis.__react_navigation__elements_contexts = __react_navigation__elements_contexts;

export const getNamedContext = function getNamedContext(FrameContext, arg1) {
  let value = globalThis[__react_navigation__elements_contexts].get(FrameContext);
  if (!value) {
    const context = React.createContext(arg1);
    context.displayName = FrameContext;
    const _globalThis = globalThis;
    const result = globalThis[tmp].set(FrameContext, context);
    value = context;
    const obj2 = globalThis[tmp];
  }
  return value;
};