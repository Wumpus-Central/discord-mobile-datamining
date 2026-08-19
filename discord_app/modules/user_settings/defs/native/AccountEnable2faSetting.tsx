// === Module 14137: pressable ===

// Module 14137 (pressable)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import obj132Default from "obj132" /* 4827 */;
import useIs2FAEnabled from "useIs2FAEnabled" /* 14102 */;
import _modDef14138 from "module_14138" /* 14138 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import "createToggle";

require = fn;
let createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.cDgKte);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCOUNT,
  onPress: function onAccountEnable2FASettingPress() {
    currentUser = currentUser.getCurrentUser();
    let verified;
    if (currentUser != null) {
      verified = currentUser.verified;
    }
    if (verified != null) {
      if (verified) {
        let obj = _modDef14138;
        obj.open();
      }
    }
    obj = { title: null, body: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t.v740sh);
    const intl2 = getSystemLocale.intl;
    obj[1] = intl2.string(getSystemLocale.t.uggF7o);
    obj132Default.show(obj);
  },
  withArrow: true,
  usePredicate: function useHasAccountEnable2FASetting() {
    return !useIs2FAEnabled.useIsTOTPEnabled();
  }
};
createToggle = createToggle.createPressable(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/AccountEnable2faSetting.tsx");

export default createToggle;