// discord_app/modules/home_drawer/native/useHomeDrawerToggleAccessibilityAction.tsx
import util from "../../../intl/index.native.tsx";
import AccessibilityAnnouncer2 from "../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import NavigationRouteUtils from "../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
let c3 = "toggle-home-drawer";
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/useHomeDrawerToggleAccessibilityAction.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useHomeDrawerToggleAccessibilityAction(arg0, arg1) {
      _require = arg1;
      const cResult = require("c").c(7);
      if (!arg0) {
        return null;
      } else if (cResult[0] !== arg1) {
        let intl = tmp(1126).intl;
        let string = intl.string;
        let h8xFEv = tmp(1126).t;
        if (arg1) {
          h8xFEv = h8xFEv.h8xFEv;
          let stringResult = string(h8xFEv);
        } else {
          stringResult = string(h8xFEv["Rgk/2h"]);
        }
        cResult[0] = arg1;
        cResult[1] = stringResult;
      } else {
        if (cResult[2] !== arg1) {
          function action() {
            NavigationRouteUtils.setHomeDrawerState(!closure_0);
            const intl = util.intl;
            const string = intl.string;
            const t = util.t;
            if (closure_0) {
              let stringResult = string(t["0s/g+O"]);
            } else {
              stringResult = string(t.hfxfVb);
            }
            const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
            AccessibilityAnnouncer.announce(stringResult);
          }
          cResult[2] = arg1;
          cResult[3] = action;
          let tmp7 = action;
        } else {
          tmp7 = cResult[3];
        }
        if (cResult[4] === tmp7) {
        }
        const obj2 = { name, label: cResult[1], action: tmp7 };
        cResult[4] = tmp7;
        cResult[5] = cResult[1];
        cResult[6] = obj2;
      }
      let obj = require("c");
    }
  : function useHomeDrawerToggleAccessibilityAction(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      const items = [arg0, arg1];
      return noop.useMemo(() => {
        if (closure_0) {
          let intl = util.intl;
          let string = intl.string;
          let t = util.t;
          if (dependencyMap) {
            let stringResult = string(t.h8xFEv);
          } else {
            stringResult = string(t["Rgk/2h"]);
          }
          let obj = {
            name,
            label: stringResult,
            action() {
              closure_0(4976).setHomeDrawerState(!dependencyMap);
              const intl = closure_0(1126).intl;
              const string = intl.string;
              const t = closure_0(1126).t;
              if (dependencyMap) {
                let stringResult = string(t["0s/g+O"]);
              } else {
                stringResult = string(t.hfxfVb);
              }
              const AccessibilityAnnouncer = closure_0(4828).AccessibilityAnnouncer;
              AccessibilityAnnouncer.announce(stringResult);
              const obj = closure_0(4976);
            },
          };
          return obj;
        } else {
          return null;
        }
      }, items);
    };
export const TOGGLE_HOME_DRAWER_A11Y_ACTION = "toggle-home-drawer";
