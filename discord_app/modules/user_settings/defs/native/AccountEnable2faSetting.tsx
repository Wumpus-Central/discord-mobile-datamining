// === Module 14235: pressable ===

// Module 14235 (pressable)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import setDefault from "set" /* 4744 */;
import useIs2FAEnabled from "useIs2FAEnabled" /* 14200 */;
import _modDef14236 from "module_14236" /* 14236 */;
import closure_3 from "mergeGuildAvatar" /* 1922 */;
import createToggle from "createToggle" /* 10516 */;

require = arg1;
createToggle = {
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
        let obj = _modDef14236;
        obj.open();
      }
    }
    obj = { title: null, body: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t.v740sh);
    const intl2 = getSystemLocale.intl;
    obj[1] = intl2.string(getSystemLocale.t.uggF7o);
    setDefault.show(obj);
  },
  withArrow: true,
  usePredicate: function useHasAccountEnable2FASetting() {
    return !useIs2FAEnabled.useIsTOTPEnabled();
  }
};
createToggle = createToggle.createPressable(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AccountEnable2faSetting.tsx");

export default createToggle;