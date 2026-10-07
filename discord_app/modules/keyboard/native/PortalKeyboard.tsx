// === Module 4757: PortalKeyboard ===

// Module 4757 (PortalKeyboard)
import c from "c" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4742 */;
import Portal from "Portal" /* 4758 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let c3 = "default";
const modal = "modal";
fn(558);
const ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  const cResult = c.c(3);
  children = children.children;
  if (obj2.useIsModalOpen()) {
    if (tmpResult.isIOS()) {
      let tmp4 = modal;
    }
    if (cResult[0] === children) {
      if (cResult[1] === tmp4) {
        let tmp5 = cResult[2];
      }
      return tmp5;
    }
    const obj3 = { hostName: tmp4, children };
    const tmp7 = jsx(Portal.Portal, { hostName: tmp4, children });
    cResult[0] = children;
    cResult[1] = tmp4;
    cResult[2] = tmp7;
    tmp5 = tmp7;
    tmpResult = PlatformUtils;
  }
  tmp4 = c3;
  obj2 = NavigationRouteUtils;
}) : ((children) => {
  if (obj.useIsModalOpen()) {
    if (tmpResult.isIOS()) {
      let tmp3 = modal;
    }
    const obj2 = { hostName: tmp3, children: children.children };
    return jsx(Portal.Portal, { hostName: tmp3, children: children.children });
  }
  tmp3 = c3;
  obj = NavigationRouteUtils;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboard.tsx");

export const PortalKeyboardState = { EMPTY: "empty", REQUEST_OPEN: "request_open", OPENING: "opening", OPEN: "open", REQUEST_CLOSE: "request_close", CLOSING: "closing", CLOSED: "closed" };
export const PORTAL_HOST_NAME_DEFAULT = "default";
export const PORTAL_HOST_NAME_MODAL = "modal";
export const PortalKeyboard = tmp3;
export const PortalKeyboardHost = ReactCompilerGating.isReactCompilerEnabled() ? ((name) => {
  const cResult = c.c(2);
  name = name.name;
  if (undefined === name) {
    name = c3;
  }
  if (cResult[0] !== name) {
    const obj2 = { name };
    const tmp6 = jsx(Portal.PortalHost, { name });
    cResult[0] = name;
    cResult[1] = tmp6;
    let tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : ((name) => {
  name = name.name;
  if (name === undefined) {
    name = c3;
  }
  return jsx(Portal.PortalHost, { name });
});