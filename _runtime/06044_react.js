// _runtime/06044_react.js
import react from "00019_react.js";

let __react_navigation__elements_contexts = "__react_navigation__elements_contexts";
__react_navigation__elements_contexts = globalThis.__react_navigation__elements_contexts;
let _globalThis = globalThis;
if (__react_navigation__elements_contexts == null) {
  const _Map = Map;
  const self = this;
  const self2 = this;
  __react_navigation__elements_contexts = new Map();
}
_globalThis.__react_navigation__elements_contexts = __react_navigation__elements_contexts;

export const getNamedContext = function getNamedContext(FrameContext, fakeSharedValue) {
  const obj = globalThis[__react_navigation__elements_contexts];
  let value = obj.get(FrameContext);
  if (!value) {
    const context = react.createContext(fakeSharedValue);
    context.displayName = FrameContext;
    const _globalThis = globalThis;
    const obj2 = globalThis[__react_navigation__elements_contexts];
    const result = obj2.set(FrameContext, context);
    value = context;
  }
  return value;
};
