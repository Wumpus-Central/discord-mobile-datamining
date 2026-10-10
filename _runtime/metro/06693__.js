// === Module 6693: ? ===

// Module 6693
import LegacyBaseButton from "LegacyBaseButton" /* 6334 */;
import GestureHandlerRefContext from "GestureHandlerRefContext" /* 6694 */;
import noop from "module_19" /* 19 */;

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
export const GestureHandlerRootView = fn(6334).GestureHandlerRootView;
export const GestureState = fn(6334).State;