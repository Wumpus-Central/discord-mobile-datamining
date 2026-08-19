// discord_app/modules/user_settings/defs/native/DismissiblePremiumNewBadgeRouteProps.tsx
import DismissiblePremiumNewBadgeDefault from "DismissiblePremiumNewBadge.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../_runtime/00019_noop.js";
import { ContentDismissActionType } from "../../../dismissible_content/DismissibleContentConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

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