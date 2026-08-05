import { useSafeAreaInsets } from "../../../../modules/safe_area/useSafeAreaInsets.native.tsx";
import { NavigationStack } from "../../Navigator/native/Navigator.native.tsx";
import { NAV_BAR_HEIGHT } from "../../Navigator/native/NavigatorConstants.native.tsx";
// discord_app/design/components/Modal/native/Modal.native.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useSafeAreaInsets").fileFinishedImporting("design/components/Modal/native/Modal.native.tsx");

export const Modal = function Modal(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { height: NAV_BAR_HEIGHT /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT + useSafeAreaInsets().top };
  obj.headerStyle = obj;
  return jsx(NavigationStack /* NavigationStack */.Navigator, { height: NAV_BAR_HEIGHT /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT + useSafeAreaInsets().top });
};