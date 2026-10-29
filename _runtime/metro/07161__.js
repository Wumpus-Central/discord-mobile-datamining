// _runtime/metro/07161__.js
import LegacyBaseButton from "../05334_LegacyBaseButton.js";
import GestureHandlerRefContext from "../07162_GestureHandlerRefContext.js";
import noop from "00019__.js";

require = fn;
const jsx = fn(21).jsx;

export function PanGestureHandler(arg0) {
  const ref = noop.useRef(null);
  const obj = { value: ref, children: null };
  const obj2 = {};
  const merged = Object.assign(arg0);
  obj2.ref = ref;
  obj.children = jsx(LegacyBaseButton.PanGestureHandler, {});
  return jsx(GestureHandlerRefContext.GestureHandlerRefContext.Provider, { value: ref, children: null });
}
export const GestureHandlerRootView = fn(5334).GestureHandlerRootView;
export const GestureState = fn(5334).State;
