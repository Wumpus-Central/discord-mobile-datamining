// === Module 14885: createDismissiblePremiumNewBadgeRouteProps ===

// Module 14885 (createDismissiblePremiumNewBadgeRouteProps)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/DismissiblePremiumNewBadgeRouteProps.tsx");

export function createDismissiblePremiumNewBadgeRouteProps(CUSTOM_APP_ICONS_NEW_BADGE) {
  closure_0 = CUSTOM_APP_ICONS_NEW_BADGE;
  return {
    useTrailing() {
      return closure_1_6(closure_1_1(closure_1_2[4]), { dismissibleContent: closure_0, newPremiumStyle: true });
    },
    usePreNavigationAction() {
      const items = [first];
      const tmp = closure_1_3(CUSTOM_APP_ICONS_NEW_BADGE(closure_1_2[5]).useSelectedDismissibleContent(items), 2);
      first = tmp[0];
      closure_1 = tmp3;
      const items1 = [first, tmp[1]];
      return closure_1_4.useCallback(() => {
        if (first === first) {
          callback(closure_2_5.TAKE_ACTION);
        }
        return true;
      }, items1);
    }
  };
}