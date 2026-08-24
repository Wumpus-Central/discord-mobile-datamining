// === Module 4243: PortalKeyboardState ===

// Module 4243 (PortalKeyboardState)
import noopAll from "noop" /* 19 */;
import coerceMainRoute from "coerceMainRoute" /* 4229 */;
import Portal from "Portal" /* 4244 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
let c3 = "default";
const modal = "modal";
const result = require("set").fileFinishedImporting("modules/keyboard/native/PortalKeyboard.tsx");

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
    return jsx(tmp(4244).Portal, { hostName: null, children: null });
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