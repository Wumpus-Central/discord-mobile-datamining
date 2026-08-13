// discord_app/modules/quests/native/QuestAccessSuspendedBottomSheet.tsx
import noop from "noop";
import { UserSettingsSections } from "ME";
import { AccountSettingsTabs } from "AccountSettingsTabs";
import { jsx } from "jsxProd";
import { Button } from "../../../design/components/Button/native/Button.native.tsx";
import { PromoSheet } from "../../../design/components/Sheet/native/PromoSheet.native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";

const require = arg1;
const result = require("AccountSettingsTabs").fileFinishedImporting("modules/quests/native/QuestAccessSuspendedBottomSheet.tsx");

export default function QuestAccessSuspendedBottomSheet() {
  const callback = React.useCallback(() => {
    let obj = callback2(4310);
    obj.hideActionSheet(callback(14434).ACTION_SHEET_KEY);
    obj = { screen: constants.ACCOUNT, params: obj };
    obj = { initialTab: constants2.STANDING };
    callback(6059).openUserSettings(obj);
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