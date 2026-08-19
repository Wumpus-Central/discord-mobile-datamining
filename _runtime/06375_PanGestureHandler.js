// _runtime/06375_PanGestureHandler.js
import GestureHandlerRefContext from "06376_GestureHandlerRefContext.js";
import LegacyBaseButton from "06377_LegacyBaseButton.js";
import noop from "00019_noop.js";
import { jsx } from "react/00021_jsxProd.js";

require = fn;

export const PanGestureHandler = function PanGestureHandler(arg0) {
  const ref = React.useRef(null);
  const obj = {};
  const merged = Object.assign(arg0);
  obj.ref = ref;
  obj[1] = jsx(LegacyBaseButton.PanGestureHandler, {});
  return jsx(GestureHandlerRefContext.GestureHandlerRefContext.Provider, {});
};
export const GestureHandlerRootView = require("LegacyBaseButton").GestureHandlerRootView;
export const GestureState = require("LegacyBaseButton").State;