// === Module 14596: pressable ===

// Module 14596 (pressable)
import initialize from "initialize" /* 586 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4723 from "module_4723" /* 4723 */;
import ChangePhoneReason from "ChangePhoneReason" /* 7780 */;
import closure_3 from "mergeGuildAvatar" /* 1921 */;
import { PHONE_VERIFICATION_MODAL_KEY as closure_4 } from "PHONE_VERIFICATION_MODAL_KEY" /* 7778 */;
import createToggle from "createToggle" /* 11288 */;

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
    let obj = _modDef4723;
    obj = { allowDeletePhone: true, reason: ChangePhoneReason.ChangePhoneReason.USER_SETTINGS_UPDATE };
    obj.pushLazy(asyncRequireImpl(7777, dependencyMap.paths), obj, closure_4);
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AccountPhoneSetting.tsx");

export default createToggle;