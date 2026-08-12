// _runtime/05828_PanGestureHandler.js
import noop from "noop";
import { jsx } from "jsxProd";
import { LegacyBaseButton } from "05466_LegacyBaseButton.js";
import { GestureHandlerRefContext } from "05829_GestureHandlerRefContext.js";

const require = arg1;

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