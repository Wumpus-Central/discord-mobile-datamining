// discord_app/modules/user_settings/defs/native/AccountAgeGroupAssignedAdultSetting.tsx
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.piqs0o);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useTrailing() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return "" + intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.XxRj7f) + " \u2022 " + intl2.string(require("../../../age_assurance/AgeAssurance.messages.js").FTawSP);
  },
  usePredicate: require("useAgeVerificationRunner").useShowAssignedAgeGroupSettings,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.AGE_GROUP,
  getComponent() {
    return require("../../age_group/native/SettingsAgeGroupScreen.tsx") /* SettingsAgeGroupHeader */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAssignedAdultSetting.tsx");

export default route;