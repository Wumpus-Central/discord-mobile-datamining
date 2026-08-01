// === Module 11136: Modal ===

// Module 11136 (Modal)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSafeAreaInsets").fileFinishedImporting("design/components/Modal/native/Modal.native.tsx");

export const Modal = function Modal(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { height: require(5144) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT + importDefault(1581)().top };
  obj.headerStyle = obj;
  return jsx(require(5574) /* NavigationStack */.Navigator, { height: require(5144) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT + importDefault(1581)().top });
};