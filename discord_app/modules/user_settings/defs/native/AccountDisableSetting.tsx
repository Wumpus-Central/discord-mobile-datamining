// === Module 14641: pressable ===

// Module 14641 (pressable)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import MobileUserSettings from "MobileUserSettings" /* 7893 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 14640 */;
import createToggle from "createToggle" /* 11288 */;

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.jf5GGb);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT,
  onPress: function onAccountDisablePress() {
    handleDisableAccountDefault(false);
  }
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.jf5GGb);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT,
  onPress: function onAccountDisablePress() {
    handleDisableAccountDefault(false);
  }
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AccountDisableSetting.tsx");

export default pressable;