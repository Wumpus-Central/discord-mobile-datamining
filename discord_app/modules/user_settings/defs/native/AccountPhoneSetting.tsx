// discord_app/modules/user_settings/defs/native/AccountPhoneSetting.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import { PHONE_VERIFICATION_MODAL_KEY as closure_4 } from "PHONE_VERIFICATION_MODAL_KEY";
import createToggle from "createToggle";
import { asyncRequireImpl } from "../../../../../_runtime/02007_asyncRequireImpl.js";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { ModalActionCreators } from "../../../../actions/ModalActionCreators.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { ChangePhoneReason } from "../../../phone/PhoneActionCreators.tsx";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.dEYpSt);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountPhoneSettingTrailing() {
    const items = [mergeGuildAvatar];
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
    let obj = ModalActionCreators;
    obj = { allowDeletePhone: true, reason: null };
    obj[1] = ChangePhoneReason.ChangePhoneReason.USER_SETTINGS_UPDATE;
    obj.pushLazy(asyncRequireImpl(8626, dependencyMap.paths), obj, closure_4);
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("PHONE_VERIFICATION_MODAL_KEY").fileFinishedImporting("modules/user_settings/defs/native/AccountPhoneSetting.tsx");

export default createToggle;