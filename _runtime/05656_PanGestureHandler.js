// _runtime/05656_PanGestureHandler.js
import noop from "noop";
import { jsx } from "jsxProd";
import { Directions } from "05353_Directions.js";
import { noop } from "05657_noop.js";

const require = arg1;

export const PanGestureHandler = function PanGestureHandler(arg0) {
  const ref = React.useRef(null);
  let obj = { value: ref, children: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj.ref = ref;
  obj[1] = jsx(Directions.PanGestureHandler, {});
  return jsx(noop.Provider, {});
};
export const GestureHandlerRootView = require("Directions").GestureHandlerRootView;
export const GestureState = require("Directions").State;