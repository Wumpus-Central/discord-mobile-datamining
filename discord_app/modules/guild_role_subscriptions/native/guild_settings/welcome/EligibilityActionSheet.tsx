// === Module 17201: EligibilityActionSheet ===

// Module 17201 (EligibilityActionSheet)
import useCreatorMonetizationEligibilityItemsDefault from "useCreatorMonetizationEligibilityItems" /* 17202 */;
import EligibilityChecklistRowDefault from "EligibilityChecklistRow" /* 17206 */;
import closure_3 from "noop" /* 19 */;
import { UserSettingsSections } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const EligibilityActionSheet = "EligibilityActionSheet";
let closure_8 = createCacheKey.createStyles({ container: { flex: 1, paddingHorizontal: 0 }, title: { marginHorizontal: 24, marginTop: 16 } });
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/EligibilityActionSheet.tsx");

export default function EligibilityActionSheet(onRequireModeratorMFAClick) {
  onRequireModeratorMFAClick = onRequireModeratorMFAClick.onRequireModeratorMFAClick;
  const tmp = callback3();
  const items = [onRequireModeratorMFAClick];
  const memo = React.useMemo(() => {
    const actions = {
      onEnableMFAClick() {
        let obj = callback2(4413);
        obj.hideActionSheet(closure_7);
        callback2(9667).close();
        const obj2 = callback2(9667);
        obj = { screen: constants.ACCOUNT };
        callback(6210).openUserSettings(obj);
      },
      onRequireModeratorMFAClick() {
        closure_1_1(closure_1_2[4]).hideActionSheet(closure_1_7);
        callback();
      }
    };
    return { actions, sortedByIneligible: true };
  }, items);
  let obj = { startExpanded: true, children: null };
  obj = { style: tmp.title, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = onRequireModeratorMFAClick(1236).intl;
  obj[3] = intl.string(onRequireModeratorMFAClick(1236).t["3s47iN"]);
  const items1 = [callback(onRequireModeratorMFAClick(4442).Heading, obj), ];
  obj = { style: tmp.container, items: useCreatorMonetizationEligibilityItemsDefault(onRequireModeratorMFAClick.eligibility, memo) };
  items1[1] = callback(EligibilityChecklistRowDefault, obj);
  obj[1] = items1;
  return callback2(onRequireModeratorMFAClick(5587).BottomSheet, obj);
};
export const ELIGIBILITY_ACTION_SHEET_KEY = "EligibilityActionSheet";