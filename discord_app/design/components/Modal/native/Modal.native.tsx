// discord_app/design/components/Modal/native/Modal.native.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSafeAreaInsets").fileFinishedImporting("design/components/Modal/native/Modal.native.tsx");

export const Modal = function Modal(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { height: require("../../Navigator/native/NavigatorConstants.native.tsx") /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT + require("../../../../modules/safe_area/useSafeAreaInsets.native.tsx")().top };
  obj.headerStyle = obj;
  return jsx(require("../../Navigator/native/Navigator.native.tsx") /* NavigationStack */.Navigator, { height: require("../../Navigator/native/NavigatorConstants.native.tsx") /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT + require("../../../../modules/safe_area/useSafeAreaInsets.native.tsx")().top });
};