// discord_app/modules/user_settings/defs/native/AccountEnable2faSetting.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.cDgKte);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  onPress: function onAccountEnable2FASettingPress() {
    currentUser = currentUser.getCurrentUser();
    let verified;
    if (currentUser != null) {
      verified = currentUser.verified;
    }
    if (verified != null) {
      if (verified) {
        let obj = require("../../account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx");
        obj.open();
      }
    }
    obj = { title: null, body: null };
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[0] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.v740sh);
    const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[1] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.uggF7o);
    require("../../../../actions/AlertActionCreators.tsx").show(obj);
  },
  withArrow: true,
  usePredicate: function useHasAccountEnable2FASetting() {
    return !require("../../account/native/SettingsAccountUtils.tsx") /* useIs2FAEnabled */.useIsTOTPEnabled();
  }
};
createToggle = createToggle.createPressable(createToggle);
const result = require("useIs2FAEnabled").fileFinishedImporting("modules/user_settings/defs/native/AccountEnable2faSetting.tsx");

export default createToggle;