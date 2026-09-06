// === Module 14719: useAlwaysShow ===

// Module 14719 (useAlwaysShow)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1954 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
function useAlwaysShow() {
  return true;
}
let closure_7 = [];
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/DismissibleBadgeUtils.tsx");

export function createDismissibleBadgePreNavigationAction(TINY_BRONCO_SETTINGS, useShouldShowTinyBroncoAccountStatus) {
  closure_0 = TINY_BRONCO_SETTINGS;
  let tmp = useShouldShowTinyBroncoAccountStatus;
  if (useShouldShowTinyBroncoAccountStatus === undefined) {
    tmp = useAlwaysShow;
  }
  closure_1 = tmp;
  return () => {
    const tmp = callback();
    if (tmp) {
      const items = [first];
      let tmp2 = items;
    } else {
      tmp2 = closure_1_7;
    }
    const tmp4 = closure_1_3(CUSTOM_APP_ICONS_NEW_BADGE(closure_1_2[4]).useSelectedDismissibleContent(tmp2), 2);
    first = tmp4[0];
    callback = tmp6;
    const items1 = [first, tmp4[1]];
    return closure_1_4.useCallback(() => {
      if (first === first) {
        callback(closure_2_5.TAKE_ACTION);
      }
      return true;
    }, items1);
  };
}
export function createDismissibleBadgeRouteProps(CUSTOM_APP_ICONS_NEW_BADGE) {
  closure_0 = CUSTOM_APP_ICONS_NEW_BADGE;
  closure_0 = CUSTOM_APP_ICONS_NEW_BADGE;
  closure_1 = useAlwaysShow;
  return {
    useTrailing() {
      return closure_1_6(callback(closure_1_2[5]), { dismissibleContent: closure_0, newPremiumStyle: true });
    },
    usePreNavigationAction: () => {
      const tmp = callback();
      if (tmp) {
        const items = [first];
        let tmp2 = items;
      } else {
        tmp2 = closure_1_7;
      }
      const tmp4 = closure_1_3(CUSTOM_APP_ICONS_NEW_BADGE(closure_1_2[4]).useSelectedDismissibleContent(tmp2), 2);
      first = tmp4[0];
      callback = tmp6;
      const items1 = [first, tmp4[1]];
      return closure_1_4.useCallback(() => {
        if (first === first) {
          callback(closure_2_5.TAKE_ACTION);
        }
        return true;
      }, items1);
    }
  };
}