// === Module 15009: AccountEnable2faSetting ===

// Module 15009 (AccountEnable2faSetting)
import util from "util" /* 1126 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5299 */;
import SettingsAccountUtils from "SettingsAccountUtils" /* 14937 */;
import TwoFASetupModalActionCreatorsDefault from "TwoFASetupModalActionCreators" /* 15010 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const SettingBuilders = fn(10663);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.cDgKte);
  },
  parent: fn(7992).MobileUserSettings.ACCOUNT,
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
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/AccountEnable2faSetting.tsx");

export default pressable;