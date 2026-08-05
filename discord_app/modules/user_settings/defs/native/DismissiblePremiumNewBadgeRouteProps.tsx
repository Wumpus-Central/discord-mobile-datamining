// discord_app/modules/user_settings/defs/native/DismissiblePremiumNewBadgeRouteProps.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ContentDismissActionType").fileFinishedImporting("modules/user_settings/defs/native/DismissiblePremiumNewBadgeRouteProps.tsx");

export function createDismissiblePremiumNewBadgeRouteProps(CUSTOM_APP_ICONS_NEW_BADGE) {
  let closure_0 = CUSTOM_APP_ICONS_NEW_BADGE;
  return {
    useTrailing() {
      return outer1_6(outer1_1(outer1_2[4]), { dismissibleContent: closure_0, newPremiumStyle: true });
    },
    usePreNavigationAction() {
      const items = [first];
      const tmp = outer1_3(CUSTOM_APP_ICONS_NEW_BADGE(outer1_2[5]).useSelectedDismissibleContent(items), 2);
      first = tmp[0];
      let closure_1 = tmp3;
      const items1 = [first, tmp[1]];
      return outer1_4.useCallback(() => {
        if (first === first) {
          tmp3 = tmp3(outer2_5.TAKE_ACTION);
        }
        return true;
      }, items1);
    }
  };
}