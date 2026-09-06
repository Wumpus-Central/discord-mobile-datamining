// discord_app/modules/user_settings/defs/native/AccountPhoneSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import PhoneActionCreators from "../../../phone/PhoneActionCreators.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
let closure_4 = fn(7043).PHONE_VERIFICATION_MODAL_KEY;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.dEYpSt);
  },
  parent: fn(7975).MobileUserSettings.ACCOUNT,
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
    obj.pushLazy(asyncRequireImpl(7042, dependencyMap.paths), obj, closure_4);
  },
  withArrow: true,
};
SettingBuilders = SettingBuilders.createPressable(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountPhoneSetting.tsx");

export default SettingBuilders;
