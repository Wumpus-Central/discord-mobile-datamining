// === Module 14888: ? ===

// Module 14888
import useStaffOrDeveloperSettingPredicate from "useStaffOrDeveloperSettingPredicate" /* 14199 */;
import checkForNewerBuild from "checkForNewerBuild" /* 13770 */;
import "createToggle";

require = fn;
let createToggle = {
  useTitle() {
    return "Internal Build Active";
  },
  parent: null,
  IconComponent: require("MobilePhoneSettingsIcon").MobilePhoneSettingsIcon,
  useDescription: function useInternalBuildActiveDescription() {
    return "Build installed from builds.discord.tools";
  },
  usePredicate: function useHasCheckNativeUpdateSetting() {
    return hasUpdatesConfigured.hasUpdatesConfigured && useStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
  }
};
createToggle = createToggle.createStatic(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/InternalBuildActiveSetting.tsx");

export default createToggle;