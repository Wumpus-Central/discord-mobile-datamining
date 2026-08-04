import noop from "noop";
import { UserSettingsSections } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const EligibilityActionSheet = "EligibilityActionSheet";
let closure_8 = createCacheKey.createStyles({ container: { flex: 1, paddingHorizontal: 0 }, title: { marginHorizontal: 24, marginTop: 16 } });
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/EligibilityActionSheet.tsx");

export default function EligibilityActionSheet(onRequireModeratorMFAClick) {
  onRequireModeratorMFAClick = onRequireModeratorMFAClick.onRequireModeratorMFAClick;
  const tmp = callback3();
  const items = [onRequireModeratorMFAClick];
  const memo = React.useMemo(() => {
    const actions = {
      onEnableMFAClick() {
        let obj = callback2(4253);
        obj.hideActionSheet(closure_7);
        callback2(8943).close();
        const obj2 = callback2(8943);
        obj = { screen: constants.ACCOUNT };
        callback(5925).openUserSettings(obj);
      },
      onRequireModeratorMFAClick() {
        outer1_1(outer1_2[4]).hideActionSheet(outer1_7);
        callback();
      }
    };
    return { actions, sortedByIneligible: true };
  }, items);
  let obj = { startExpanded: true, children: null };
  obj = { style: tmp.title, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = onRequireModeratorMFAClick(1236).intl;
  obj[3] = intl.string(onRequireModeratorMFAClick(1236).t["3s47iN"]);
  const items1 = [callback(onRequireModeratorMFAClick(4281).Heading, obj), ];
  obj = { style: tmp.container, items: importDefault(16647)(onRequireModeratorMFAClick.eligibility, memo) };
  items1[1] = callback(importDefault(16651), obj);
  obj[1] = items1;
  return callback2(onRequireModeratorMFAClick(5338).BottomSheet, obj);
};
export const ELIGIBILITY_ACTION_SHEET_KEY = "EligibilityActionSheet";