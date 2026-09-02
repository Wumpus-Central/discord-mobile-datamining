// === Module 6022: PanGestureHandler ===

// Module 6022 (PanGestureHandler)
import LegacyBaseButton from "LegacyBaseButton" /* 5660 */;
import GestureHandlerRefContext from "GestureHandlerRefContext" /* 6023 */;
import closure_2 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;

export const PanGestureHandler = function PanGestureHandler(arg0) {
  const ref = React.useRef(null);
  let obj = { value: ref, children: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj.ref = ref;
  obj[1] = jsx(LegacyBaseButton.PanGestureHandler, {});
  return jsx(GestureHandlerRefContext.GestureHandlerRefContext.Provider, {});
};
export const GestureHandlerRootView = require("LegacyBaseButton").GestureHandlerRootView;
export const GestureState = require("LegacyBaseButton").State;