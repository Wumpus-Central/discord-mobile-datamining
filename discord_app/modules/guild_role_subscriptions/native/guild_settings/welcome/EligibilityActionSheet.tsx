// discord_app/modules/guild_role_subscriptions/native/guild_settings/welcome/EligibilityActionSheet.tsx
import useCreatorMonetizationEligibilityItemsDefault from "../../../../creator_monetization_eligibility/guild_settings/useCreatorMonetizationEligibilityItems.tsx";
import EligibilityChecklistRowDefault from "../../components/EligibilityChecklist.tsx";
import noop from "../../../../../../_runtime/00019_noop.js";
import { UserSettingsSections } from "../../../../../Constants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const EligibilityActionSheet = "EligibilityActionSheet";
let closure_8 = createCacheKey.createStyles({ container: { flex: 1, paddingHorizontal: 0 }, title: { marginHorizontal: 24, marginTop: 16 } });
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/EligibilityActionSheet.tsx");

export default function EligibilityActionSheet(onRequireModeratorMFAClick) {
  onRequireModeratorMFAClick = onRequireModeratorMFAClick.onRequireModeratorMFAClick;
  const tmp = callback3();
  const items = [onRequireModeratorMFAClick];
  const memo = React.useMemo(() => {
    const actions = {
      onEnableMFAClick() {
        let obj = callback2(4342);
        obj.hideActionSheet(closure_7);
        callback2(8874).close();
        const obj2 = callback2(8874);
        obj = { screen: constants.ACCOUNT };
        callback(7360).openUserSettings(obj);
      },
      onRequireModeratorMFAClick() {
        closure_1_1(closure_1_2[4]).hideActionSheet(closure_1_7);
        callback();
      }
    };
    return { actions, sortedByIneligible: true };
  }, items);
  let obj = { style: tmp.title, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = onRequireModeratorMFAClick(1236).intl;
  obj[3] = intl.string(onRequireModeratorMFAClick(1236).t["3s47iN"]);
  const items1 = [callback(onRequireModeratorMFAClick(4734).Heading, obj), ];
  obj = { style: tmp.container, items: useCreatorMonetizationEligibilityItemsDefault(onRequireModeratorMFAClick.eligibility, memo) };
  items1[1] = callback(EligibilityChecklistRowDefault, obj);
  obj[1] = items1;
  return callback2(onRequireModeratorMFAClick(6950).BottomSheet, obj);
};
export const ELIGIBILITY_ACTION_SHEET_KEY = "EligibilityActionSheet";