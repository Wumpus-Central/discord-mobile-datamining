// discord_app/modules/user_settings/defs/native/AccountAgeGroupAssignedAdultSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import messagesProxyDefault from "../../../age_assurance/AgeAssurance.messages.js";
import useAgeVerificationRunner from "../../../age_assurance/AgeVerificationUtils.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { SettingsAgeGroupHeader } from "../../age_group/native/SettingsAgeGroupScreen.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.piqs0o);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT,
  useTrailing() {
    const intl = getSystemLocale.intl;
    const intl2 = getSystemLocale.intl;
    return "" + intl.string(getSystemLocale.t.XxRj7f) + " \u2022 " + intl2.string(messagesProxyDefault.FTawSP);
  },
  usePredicate: useAgeVerificationRunner.useShowAssignedAgeGroupSettings,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.AGE_GROUP,
  getComponent() {
    return SettingsAgeGroupHeader /* SettingsAgeGroupHeader */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAssignedAdultSetting.tsx");

export default route;