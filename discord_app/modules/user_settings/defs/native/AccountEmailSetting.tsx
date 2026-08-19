// === Module 14123: pressable ===

// Module 14123 (pressable)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import _modDef8561 from "module_8561" /* 8561 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import "createToggle";

require = fn;
let createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["w/qqKK"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountEmailSettingTrailing() {
    const items = [closure_3];
    return initialize.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      let email;
      if (currentUser != null) {
        email = currentUser.email;
      }
      return email;
    });
  },
  onPress: function onAccountEmailSettingPress() {
    _modDef8561.open(true);
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/AccountEmailSetting.tsx");

export default createToggle;