// === Module 15888: AccountPhoneSetting ===

// Module 15888 (AccountPhoneSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6310 */;
import PhoneActionCreators from "PhoneActionCreators" /* 7302 */;
import UserStore from "UserStore" /* 1386 */;

require = fn;
let closure_4 = fn(7300).PHONE_VERIFICATION_MODAL_KEY;
const SettingBuilders = fn(11817);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.dEYpSt);
  },
  parent: fn(8592).MobileUserSettings.ACCOUNT,
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
    obj.pushLazy(asyncRequireImpl(7299, dependencyMap.paths), obj2, closure_4);
  },
  withArrow: true
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountPhoneSetting.tsx");

export default pressable;