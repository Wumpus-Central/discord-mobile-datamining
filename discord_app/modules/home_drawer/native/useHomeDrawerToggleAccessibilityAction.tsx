// discord_app/modules/home_drawer/native/useHomeDrawerToggleAccessibilityAction.tsx
import util from "../../../intl/index.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
let c3 = "toggle-home-drawer";
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/useHomeDrawerToggleAccessibilityAction.tsx");

export default function useHomeDrawerToggleAccessibilityAction(arg0, arg1) {
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
          closure_0(4494).setHomeDrawerState(!dependencyMap);
          const intl = closure_0(1114).intl;
          const string = intl.string;
          const t = closure_0(1114).t;
          if (dependencyMap) {
            let stringResult = string(t["0s/g+O"]);
          } else {
            stringResult = string(t.hfxfVb);
          }
          const AccessibilityAnnouncer = closure_0(4348).AccessibilityAnnouncer;
          AccessibilityAnnouncer.announce(stringResult);
          const obj = closure_0(4494);
        },
      };
      return obj;
    } else {
      return null;
    }
  }, items);
}
export const TOGGLE_HOME_DRAWER_A11Y_ACTION = "toggle-home-drawer";
