// === Module 7058: ? ===

// Module 7058
import LegacyBaseButton from "LegacyBaseButton" /* 6705 */;
import GestureHandlerRefContext from "GestureHandlerRefContext" /* 7059 */;
import noop from "module_19" /* 19 */;

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
export const GestureHandlerRootView = fn(6705).GestureHandlerRootView;
export const GestureState = fn(6705).State;