// discord_app/modules/user_settings/defs/native/AccountPhoneSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/02009_asyncRequireImpl.js";
import _modDef4611 from "../../../../actions/ModalActionCreators.tsx";
import ChangePhoneReason from "../../../phone/PhoneActionCreators.tsx";
import closure_3 from "../../../../stores/UserStore.tsx";
import { PHONE_VERIFICATION_MODAL_KEY as closure_4 } from "../../../phone/PhoneConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.dEYpSt);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountPhoneSettingTrailing() {
    const items = [closure_3];
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
    let obj = _modDef4611;
    obj = { allowDeletePhone: true, reason: ChangePhoneReason.ChangePhoneReason.USER_SETTINGS_UPDATE };
    obj.pushLazy(asyncRequireImpl(8671, dependencyMap.paths), obj, closure_4);
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AccountPhoneSetting.tsx");

export default createToggle;