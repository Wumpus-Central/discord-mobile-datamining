// discord_app/modules/user_settings/defs/native/AccountEnable2faSetting.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import createToggle from "createToggle";
import { set } from "../../../../actions/AlertActionCreators.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { TwoFASetupModalActionCreators } from "../../account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx";
import { useIs2FAEnabled } from "../../account/native/SettingsAccountUtils.tsx";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.cDgKte);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCOUNT,
  onPress: function onAccountEnable2FASettingPress() {
    currentUser = currentUser.getCurrentUser();
    let verified;
    if (currentUser != null) {
      verified = currentUser.verified;
    }
    if (verified != null) {
      if (verified) {
        let obj = TwoFASetupModalActionCreators;
        obj.open();
      }
    }
    obj = { title: null, body: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t.v740sh);
    const intl2 = getSystemLocale.intl;
    obj[1] = intl2.string(getSystemLocale.t.uggF7o);
    set.show(obj);
  },
  withArrow: true,
  usePredicate: function useHasAccountEnable2FASetting() {
    return !useIs2FAEnabled.useIsTOTPEnabled();
  }
};
createToggle = createToggle.createPressable(createToggle);
const result = require("useIs2FAEnabled").fileFinishedImporting("modules/user_settings/defs/native/AccountEnable2faSetting.tsx");

export default createToggle;