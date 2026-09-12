// _runtime/metro/07109__.js
import LegacyBaseButton from "../06756_LegacyBaseButton.js";
import GestureHandlerRefContext from "../07110_GestureHandlerRefContext.js";
import noop from "00019__.js";

require = fn;
const jsx = fn(21).jsx;

export const PanGestureHandler = function PanGestureHandler(arg0) {
  const ref = noop.useRef(null);
  let obj = { value: ref, children: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj.ref = ref;
  obj.children = jsx(LegacyBaseButton.PanGestureHandler, {});
  return jsx(GestureHandlerRefContext.GestureHandlerRefContext.Provider, {});
};
export const GestureHandlerRootView = fn(6756).GestureHandlerRootView;
export const GestureState = fn(6756).State;
