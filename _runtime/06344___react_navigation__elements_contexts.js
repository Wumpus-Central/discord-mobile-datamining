// === Module 6344: __react_navigation__elements_contexts ===

// Module 6344 (__react_navigation__elements_contexts)
import noop from "noop" /* 19 */;

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
    const result = globalThis[__react_navigation__elements_contexts].set(FrameContext, context);
    value = context;
  }
  return value;
};