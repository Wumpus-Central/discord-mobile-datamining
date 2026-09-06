// discord_app/modules/user_settings/defs/native/AccountEnable2faSetting.tsx
import util from "../../../../intl/index.native.tsx";
import AlertActionCreatorsDefault from "../../../../actions/AlertActionCreators.tsx";
import SettingsAccountUtils from "../../account/native/SettingsAccountUtils.tsx";
import TwoFASetupModalActionCreatorsDefault from "../../account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.cDgKte);
  },
  parent: fn(7975).MobileUserSettings.ACCOUNT,
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
  },
};
SettingBuilders = SettingBuilders.createPressable(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountEnable2faSetting.tsx");

export default SettingBuilders;
