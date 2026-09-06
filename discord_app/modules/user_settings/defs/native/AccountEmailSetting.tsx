// discord_app/modules/user_settings/defs/native/AccountEmailSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import EmailVerificationModalActionCreatorsDefault from "../../../../actions/native/EmailVerificationModalActionCreators.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["w/qqKK"]);
  },
  parent: fn(7975).MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountEmailSettingTrailing() {
    const items = [UserStore];
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
  withArrow: true,
};
SettingBuilders = SettingBuilders.createPressable(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountEmailSetting.tsx");

export default SettingBuilders;
