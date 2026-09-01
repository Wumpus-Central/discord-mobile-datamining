// _runtime/06014_PanGestureHandler.js
import LegacyBaseButton from "05652_LegacyBaseButton.js";
import GestureHandlerRefContext from "06015_GestureHandlerRefContext.js";
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
