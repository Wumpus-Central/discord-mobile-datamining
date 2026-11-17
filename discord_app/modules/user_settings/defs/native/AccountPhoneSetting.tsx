// === Module 17276: AccountPhoneSetting ===

// Module 17276 (AccountPhoneSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1113 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6833 */;
import PhoneActionCreators from "PhoneActionCreators" /* 7830 */;
import UserStore from "UserStore" /* 1388 */;

require = fn;
let closure_4 = fn(7828).PHONE_VERIFICATION_MODAL_KEY;
const SettingBuilders = fn(12612);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.dEYpSt);
  },
  parent: fn(9213).MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountPhoneSettingTrailing() {
    items = [UserStore];
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
    const obj2 = { allowDeletePhone: true, reason: null };
    const obj = ModalActionCreatorsDefault;
    obj2.reason = PhoneActionCreators.ChangePhoneReason.USER_SETTINGS_UPDATE;
    obj.pushLazy(asyncRequireImpl(7827, dependencyMap.paths), obj2, closure_4);
  },
  withArrow: true
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountPhoneSetting.tsx");

export default pressable;