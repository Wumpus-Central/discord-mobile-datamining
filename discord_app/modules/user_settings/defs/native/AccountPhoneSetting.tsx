// === Module 14322: pressable ===

// Module 14322 (pressable)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4676 from "module_4676" /* 4676 */;
import ChangePhoneReason from "ChangePhoneReason" /* 7704 */;
import closure_3 from "mergeGuildAvatar" /* 1922 */;
import { PHONE_VERIFICATION_MODAL_KEY as closure_4 } from "PHONE_VERIFICATION_MODAL_KEY" /* 7702 */;
import createToggle from "createToggle" /* 10988 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.dEYpSt);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountPhoneSettingTrailing() {
    const items = [closure_3];
    return initialize.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      let phone;
      if (currentUser != null) {
        phone = currentUser.phone;
      }
      return phone;
    });
  },
  onPress: function onAccountPhoneSettingPress() {
    let obj = _modDef4676;
    obj = { allowDeletePhone: true, reason: ChangePhoneReason.ChangePhoneReason.USER_SETTINGS_UPDATE };
    obj.pushLazy(asyncRequireImpl(7701, dependencyMap.paths), obj, closure_4);
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AccountPhoneSetting.tsx");

export default createToggle;