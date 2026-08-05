// discord_app/design/components/Modal/native/Modal.native.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSafeAreaInsets").fileFinishedImporting("design/components/Modal/native/Modal.native.tsx");

export const Modal = function Modal(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { height: require(5235) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT + importDefault(1581)().top };
  obj.headerStyle = obj;
  return jsx(require(5665) /* NavigationStack */.Navigator, { height: require(5235) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT + importDefault(1581)().top });
};