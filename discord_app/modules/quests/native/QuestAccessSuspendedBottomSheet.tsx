// === Module 14946: QuestAccessSuspendedBottomSheet ===

// Module 14946 (QuestAccessSuspendedBottomSheet)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import Button from "Button" /* 4928 */;
import PromoSheet from "PromoSheet" /* 10335 */;
import closure_3 from "noop" /* 19 */;
import { UserSettingsSections } from "ME" /* 673 */;
import { AccountSettingsTabs } from "AccountSettingsTabs" /* 11675 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/quests/native/QuestAccessSuspendedBottomSheet.tsx");

export default function QuestAccessSuspendedBottomSheet() {
  const callback = React.useCallback(() => {
    let obj = callback2(4445);
    obj.hideActionSheet(callback(14945).ACTION_SHEET_KEY);
    obj = { screen: constants.ACCOUNT, params: obj };
    obj = { initialTab: constants2.STANDING };
    callback(6254).openUserSettings(obj);
  }, []);
  let obj = { title: null, description: null, actions: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.WfwodX);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.I27WXW);
  obj = { grow: true, size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = getSystemLocale.intl;
  obj[3] = intl3.string(getSystemLocale.t.hvVgAZ);
  obj[4] = callback;
  obj[2] = jsx(Button.Button, { grow: true, size: "lg", variant: "primary", text: null, onPress: null });
  return jsx(PromoSheet.PromoSheet, { grow: true, size: "lg", variant: "primary", text: null, onPress: null });
};