// === Module 4431: PortalKeyboard ===

// Module 4431 (PortalKeyboard)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4417 */;
import Portal from "Portal" /* 4432 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let c3 = "default";
const modal = "modal";
const size = fn(2);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboard.tsx");

export const PortalKeyboardState = { EMPTY: "empty", REQUEST_OPEN: "request_open", OPENING: "opening", OPEN: "open", REQUEST_CLOSE: "request_close", CLOSING: "closing", CLOSED: "closed" };
export const PORTAL_HOST_NAME_DEFAULT = "default";
export const PORTAL_HOST_NAME_MODAL = "modal";
export const PortalKeyboard = function PortalKeyboard(children) {
  let obj = NavigationRouteUtils;
  if (obj.useIsModalOpen()) {
    if (tmpResult.isIOS()) {
      let tmp3 = modal;
    }
    obj = { hostName: tmp3, children: children.children };
    return jsx(Portal.Portal, { hostName: tmp3, children: children.children });
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