// === Module 14639: pressable ===

// Module 14639 (pressable)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import MobileUserSettings from "MobileUserSettings" /* 7893 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 14640 */;
import createToggle from "createToggle" /* 11288 */;

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["8lQ2rR"]);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT,
  variant: "danger",
  onPress: function handlePress() {
    handleDisableAccountDefault(true);
  }
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["8lQ2rR"]);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT,
  variant: "danger",
  onPress: function handlePress() {
    handleDisableAccountDefault(true);
  }
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AccountDeleteSetting.tsx");

export default pressable;