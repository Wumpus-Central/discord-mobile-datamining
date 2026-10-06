// discord_app/modules/keyboard/native/PortalKeyboard.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import NavigationRouteUtils from "../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import Portal from "../../../../_runtime/04758_Portal.js";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let children, name;

const jsx = Fragment.jsx;
let c3 = "default";
const modal = "modal";
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      const obj = react2;
      const cResult = obj.c(3);
      children = children.children;
      const obj2 = NavigationRouteUtils;
      if (obj2.useIsModalOpen()) {
        let tmp4;
        const tmpResult = PlatformUtils;
        if (tmpResult.isIOS()) {
          tmp4 = modal;
        }
        if (cResult[0] === children) {
          let tmp5;
          if (cResult[1] === tmp4) {
            tmp5 = cResult[2];
          }
          return tmp5;
        }
        const tmp7 = jsx(Portal.Portal, { hostName: tmp4, children });
        cResult[0] = children;
        cResult[1] = tmp4;
        cResult[2] = tmp7;
        tmp5 = tmp7;
      }
      tmp4 = c3;
    }
  : (children) => {
      children = children.children;
      const obj = NavigationRouteUtils;
      if (obj.useIsModalOpen()) {
        let tmp3;
        const tmpResult = PlatformUtils;
        if (tmpResult.isIOS()) {
          tmp3 = modal;
        }
        return jsx(Portal.Portal, { hostName: tmp3, children });
      }
      tmp3 = c3;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (name) => {
      let tmp4;
      const obj = react2;
      const cResult = obj.c(2);
      name = name.name;
      if (undefined === name) {
        name = c3;
      }
      if (cResult[0] !== name) {
        const tmp6 = jsx(Portal.PortalHost, { name });
        cResult[0] = name;
        cResult[1] = tmp6;
        tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : (name) => {
      name = name.name;
      if (name === undefined) {
        name = c3;
      }
      return jsx(Portal.PortalHost, { name });
    };
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboard.tsx");

export const PortalKeyboardState = {
  EMPTY: "empty",
  REQUEST_OPEN: "request_open",
  OPENING: "opening",
  OPEN: "open",
  REQUEST_CLOSE: "request_close",
  CLOSING: "closing",
  CLOSED: "closed",
};
export const PORTAL_HOST_NAME_DEFAULT = "default";
export const PORTAL_HOST_NAME_MODAL = "modal";
export const PortalKeyboard = tmp3;
export const PortalKeyboardHost = tmp4;
