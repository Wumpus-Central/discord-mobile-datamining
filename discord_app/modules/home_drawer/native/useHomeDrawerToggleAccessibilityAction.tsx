// discord_app/modules/home_drawer/native/useHomeDrawerToggleAccessibilityAction.tsx
import intl2 from "../../../intl/index.native.tsx";
import AccessibilityAnnouncer2 from "../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import NavigationRouteUtils from "../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let c3 = "toggle-home-drawer";
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      _require = arg1;
      let obj = require("react");
      const cResult = obj.c(7);
      let tmp4 = null;
      if (arg0) {
        let tmp5;
        let tmp7;
        if (cResult[0] !== arg1) {
          let stringResult;
          let intl = tmp(1126).intl;
          let string = intl.string;
          let t = tmp(1126).t;
          if (arg1) {
            stringResult = string(t.h8xFEv);
          } else {
            stringResult = string(t["Rgk/2h"]);
          }
          cResult[0] = arg1;
          cResult[1] = stringResult;
          tmp5 = stringResult;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] !== arg1) {
          const fn = function u() {
            let stringResult;
            const obj = NavigationRouteUtils;
            obj.setHomeDrawerState(!closure_0);
            const intl = intl2.intl;
            const string = intl.string;
            const t = intl2.t;
            if (closure_0) {
              stringResult = string(t["0s/g+O"]);
            } else {
              stringResult = string(t.hfxfVb);
            }
            const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
            AccessibilityAnnouncer.announce(stringResult);
          };
          cResult[2] = arg1;
          cResult[3] = fn;
          tmp7 = fn;
        } else {
          tmp7 = cResult[3];
        }
        if (cResult[4] === tmp7) {
          let tmp8;
          if (cResult[5] === tmp5) {
            tmp8 = cResult[6];
          }
          tmp4 = tmp8;
        }
        const obj2 = { name, label: tmp5, action: tmp7 };
        cResult[4] = tmp7;
        cResult[5] = tmp5;
        cResult[6] = obj2;
        tmp8 = obj2;
      }
      return tmp4;
    }
  : (arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      const items = [arg0, arg1];
      return react.useMemo(() => {
        if (closure_0) {
          let stringResult;
          let intl = intl2.intl;
          let string = intl.string;
          let t = intl2.t;
          if (closure_1) {
            stringResult = string(t.h8xFEv);
          } else {
            stringResult = string(t["Rgk/2h"]);
          }
          let obj = {
            name,
            label: stringResult,
            action() {
              let stringResult;
              const obj = closure_0(closure_1[4]);
              obj.setHomeDrawerState(!closure_1_1);
              const intl = closure_0(closure_1[3]).intl;
              const string = intl.string;
              const t = closure_0(closure_1[3]).t;
              if (closure_1_1) {
                stringResult = string(t["0s/g+O"]);
              } else {
                stringResult = string(t.hfxfVb);
              }
              const AccessibilityAnnouncer = closure_0(closure_1[5]).AccessibilityAnnouncer;
              AccessibilityAnnouncer.announce(stringResult);
            },
          };
          return obj;
        } else {
          return null;
        }
      }, items);
    };
const result = size.fileFinishedImporting("modules/home_drawer/native/useHomeDrawerToggleAccessibilityAction.tsx");

export default tmp2;
export const TOGGLE_HOME_DRAWER_A11Y_ACTION = "toggle-home-drawer";
