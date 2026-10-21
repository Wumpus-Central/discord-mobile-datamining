// === Module 7080: ? ===

// Module 7080
import LegacyBaseButton from "LegacyBaseButton" /* 5279 */;
import GestureHandlerRefContext from "GestureHandlerRefContext" /* 7081 */;
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
export const GestureHandlerRootView = fn(5279).GestureHandlerRootView;
export const GestureState = fn(5279).State;