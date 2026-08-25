// _runtime/05895_PanGestureHandler.js
import LegacyBaseButton from "05533_LegacyBaseButton.js";
import GestureHandlerRefContext from "05896_GestureHandlerRefContext.js";
import closure_2 from "00019_noop.js";
import { jsx } from "react/00021_jsxProd.js";

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