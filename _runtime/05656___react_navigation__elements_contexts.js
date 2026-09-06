// _runtime/05656___react_navigation__elements_contexts.js
import noop from "metro/00019__.js";

let __react_navigation__elements_contexts = "__react_navigation__elements_contexts";
__react_navigation__elements_contexts = globalThis.__react_navigation__elements_contexts;
if (__react_navigation__elements_contexts == null) {
  const _Map = Map;
  __react_navigation__elements_contexts = new Map();
}
globalThis.__react_navigation__elements_contexts = __react_navigation__elements_contexts;

export const getNamedContext = function getNamedContext(FrameContext, fakeSharedValue) {
  value = globalThis[__react_navigation__elements_contexts].get(FrameContext);
  if (!value) {
    const context = noop.createContext(fakeSharedValue);
    context.displayName = FrameContext;
    const _globalThis = globalThis;
    const result = globalThis[__react_navigation__elements_contexts].set(FrameContext, context);
    value = context;
    const obj2 = globalThis[__react_navigation__elements_contexts];
  }
  return value;
};
