// === Module 14702: createDismissiblePremiumNewBadgeRouteProps ===

// Module 14702 (createDismissiblePremiumNewBadgeRouteProps)
import DismissiblePremiumNewBadgeDefault from "DismissiblePremiumNewBadge" /* 14703 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/DismissiblePremiumNewBadgeRouteProps.tsx");

export function createDismissiblePremiumNewBadgeRouteProps(CUSTOM_APP_ICONS_NEW_BADGE) {
  closure_0 = CUSTOM_APP_ICONS_NEW_BADGE;
  return {
    useTrailing() {
      return jsx(DismissiblePremiumNewBadgeDefault, { dismissibleContent: closure_0, newPremiumStyle: true });
    },
    usePreNavigationAction() {
      const items = [first];
      const tmp = closure_1_3(CUSTOM_APP_ICONS_NEW_BADGE(dependencyMap[5]).useSelectedDismissibleContent(items), 2);
      first = tmp[0];
      closure_1 = tmp3;
      const items1 = [first, tmp[1]];
      return closure_1_4.useCallback(() => {
        if (first === first) {
          callback(ContentDismissActionType.TAKE_ACTION);
        }
        return true;
      }, items1);
    }
  };
}