// === Module 16919: AccountEmailSetting ===

// Module 16919 (AccountEmailSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1113 */;
import EmailVerificationModalActionCreatorsDefault from "EmailVerificationModalActionCreators" /* 7061 */;
import UserStore from "UserStore" /* 1385 */;

require = fn;
const SettingBuilders = fn(11685);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["w/qqKK"]);
  },
  parent: fn(8503).MobileUserSettings.ACCOUNT,
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