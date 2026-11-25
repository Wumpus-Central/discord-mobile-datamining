// === Module 16164: AccountEmailSetting ===

// Module 16164 (AccountEmailSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import EmailVerificationModalActionCreatorsDefault from "EmailVerificationModalActionCreators" /* 7157 */;
import UserStore from "UserStore" /* 1386 */;

require = fn;
const SettingBuilders = fn(11914);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["w/qqKK"]);
  },
  parent: fn(9513).MobileUserSettings.ACCOUNT,
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