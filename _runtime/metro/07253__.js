// _runtime/metro/07253__.js
import LegacyBaseButton from "../06899_LegacyBaseButton.js";
import GestureHandlerRefContext from "../07254_GestureHandlerRefContext.js";
import noop from "00019__.js";

require = fn;
const jsx = fn(21).jsx;

export const PanGestureHandler = function PanGestureHandler(arg0) {
  const ref = noop.useRef(null);
  const obj = { value: ref, children: null };
  const obj2 = {};
  const merged = Object.assign(arg0);
  obj2.ref = ref;
  obj.children = jsx(LegacyBaseButton.PanGestureHandler, {});
  return jsx(GestureHandlerRefContext.GestureHandlerRefContext.Provider, { value: ref, children: null });
};
export const GestureHandlerRootView = fn(6899).GestureHandlerRootView;
export const GestureState = fn(6899).State;
