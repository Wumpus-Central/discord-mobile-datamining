// === Module 16206: AccountEnable2faSetting ===

// Module 16206 (AccountEnable2faSetting)
import util from "util" /* 1112 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 6015 */;
import SettingsAccountUtils from "SettingsAccountUtils" /* 16134 */;
import TwoFASetupModalActionCreatorsDefault from "TwoFASetupModalActionCreators" /* 16207 */;
import UserStore from "UserStore" /* 1386 */;

require = fn;
const SettingBuilders = fn(11914);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.cDgKte);
  },
  parent: fn(9513).MobileUserSettings.ACCOUNT,
  onPress: function onAccountEnable2FASettingPress() {
    const currentUser = UserStore.getCurrentUser();
    let verified;
    if (currentUser != null) {
      verified = currentUser.verified;
    }
    if (verified != null) {
      if (verified) {
        TwoFASetupModalActionCreatorsDefault.open();
      }
    }
    const obj3 = { title: null, body: null };
    const intl = util.intl;
    obj3.title = intl.string(util.t.v740sh);
    const intl2 = util.intl;
    obj3.body = intl2.string(util.t.uggF7o);
    AlertActionCreatorsDefault.show(obj3);
  },
  withArrow: true,
  usePredicate: function useHasAccountEnable2FASetting() {
    return !SettingsAccountUtils.useIsTOTPEnabled();
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountEnable2faSetting.tsx");

export default pressable;