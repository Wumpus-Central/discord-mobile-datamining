// discord_app/modules/keyboard/native/PortalKeyboard.tsx
import "noop";
import { jsx } from "jsxProd";
import { Portal } from "../../../../_runtime/04212_Portal.js";
import { coerceMainRoute } from "../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";

const require = arg1;
let c3 = "default";
const modal = "modal";
const result = require("coerceMainRoute").fileFinishedImporting("modules/keyboard/native/PortalKeyboard.tsx");

export const PortalKeyboardState = { EMPTY: "empty", REQUEST_OPEN: "request_open", OPENING: "opening", OPEN: "open", REQUEST_CLOSE: "request_close", CLOSING: "closing", CLOSED: "closed" };
export const PORTAL_HOST_NAME_DEFAULT = "default";
export const PORTAL_HOST_NAME_MODAL = "modal";
export const PortalKeyboard = function PortalKeyboard(children) {
  let obj = coerceMainRoute;
  if (obj.useIsModalOpen()) {
    if (tmpResult.isIOS()) {
      let tmp3 = modal;
    }
    obj = { hostName: null, children: null };
    obj[0] = tmp3;
    obj[1] = children.children;
    return jsx(tmp(4212).Portal, { hostName: null, children: null });
  }
  tmp3 = c3;
};
export const PortalKeyboardHost = function PortalKeyboardHost(name) {
  name = name.name;
  if (name === undefined) {
    name = c3;
  }
  return jsx(Portal.PortalHost, { name });
};