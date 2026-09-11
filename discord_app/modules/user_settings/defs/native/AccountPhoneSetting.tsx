// === Module 14766: AccountPhoneSetting ===

// Module 14766 (AccountPhoneSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4809 */;
import PhoneActionCreators from "PhoneActionCreators" /* 7118 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
let closure_4 = fn(7116).PHONE_VERIFICATION_MODAL_KEY;
fn(11562);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.dEYpSt);
  },
  parent: fn(8049).MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountPhoneSettingTrailing() {
    const items = [UserStore];
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
    const obj = { allowDeletePhone: true, reason: PhoneActionCreators.ChangePhoneReason.USER_SETTINGS_UPDATE };
    obj.pushLazy(asyncRequireImpl(7115, dependencyMap.paths), obj, closure_4);
  },
  withArrow: true
};
SettingBuilders = SettingBuilders.createPressable(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountPhoneSetting.tsx");

export default SettingBuilders;