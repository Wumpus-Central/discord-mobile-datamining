// === Module 14367: pressable ===

// Module 14367 (pressable)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import MobileUserSettings from "MobileUserSettings" /* 7816 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 14366 */;
import createToggle from "createToggle" /* 10988 */;

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