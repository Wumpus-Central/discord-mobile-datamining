// === Module 14809: AccountEnable2faSetting ===

// Module 14809 (AccountEnable2faSetting)
import util from "util" /* 1114 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4918 */;
import SettingsAccountUtils from "SettingsAccountUtils" /* 14710 */;
import TwoFASetupModalActionCreatorsDefault from "TwoFASetupModalActionCreators" /* 14810 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
fn(11500);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.cDgKte);
  },
  parent: fn(7989).MobileUserSettings.ACCOUNT,
  onPress: function onAccountEnable2FASettingPress() {
    const currentUser = UserStore.getCurrentUser();
    let verified;
    if (currentUser != null) {
      verified = currentUser.verified;
    }
    if (verified != null) {
      if (verified) {
        let obj = TwoFASetupModalActionCreatorsDefault;
        obj.open();
      }
    }
    obj = { title: null, body: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.v740sh);
    const intl2 = util.intl;
    obj.body = intl2.string(util.t.uggF7o);
    AlertActionCreatorsDefault.show(obj);
  },
  withArrow: true,
  usePredicate: function useHasAccountEnable2FASetting() {
    return !SettingsAccountUtils.useIsTOTPEnabled();
  }
};
SettingBuilders = SettingBuilders.createPressable(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountEnable2faSetting.tsx");

export default SettingBuilders;