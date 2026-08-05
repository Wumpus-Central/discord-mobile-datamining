import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { messagesProxy } from "../../../age_assurance/AgeAssurance.messages.js";
import { SettingsAgeGroupHeader } from "../../age_group/native/SettingsAgeGroupScreen.tsx";
// discord_app/modules/user_settings/defs/native/AccountAgeGroupAssignedAdultSetting.tsx
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.piqs0o);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useTrailing() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    return "" + intl.string(getSystemLocale /* getSystemLocale */.t.XxRj7f) + " \u2022 " + intl2.string(messagesProxy.FTawSP);
  },
  usePredicate: require("useAgeVerificationRunner").useShowAssignedAgeGroupSettings,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.AGE_GROUP,
  getComponent() {
    return SettingsAgeGroupHeader /* SettingsAgeGroupHeader */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAssignedAdultSetting.tsx");

export default route;