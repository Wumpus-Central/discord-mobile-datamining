// === Module 15887: AccountEmailSetting ===

// Module 15887 (AccountEmailSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import EmailVerificationModalActionCreatorsDefault from "EmailVerificationModalActionCreators" /* 7222 */;
import UserStore from "UserStore" /* 1386 */;

require = fn;
const SettingBuilders = fn(11817);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["w/qqKK"]);
  },
  parent: fn(8592).MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountEmailSettingTrailing() {
    items = [UserStore];
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
    EmailVerificationModalActionCreatorsDefault.open(true);
  },
  withArrow: true
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountEmailSetting.tsx");

export default pressable;