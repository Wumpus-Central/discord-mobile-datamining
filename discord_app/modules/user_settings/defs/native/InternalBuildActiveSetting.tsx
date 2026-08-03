import checkForNewerBuild from "checkForNewerBuild";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    return "Internal Build Active";
  },
  parent: null,
  IconComponent: require("MobilePhoneSettingsIcon").MobilePhoneSettingsIcon,
  useDescription: function useInternalBuildActiveDescription() {
    return "Build installed from builds.discord.tools";
  },
  usePredicate: function useHasCheckNativeUpdateSetting() {
    const obj = require(13959) /* useStaffOrDeveloperSettingPredicate */;
    return hasUpdatesConfigured.hasUpdatesConfigured && require(13959) /* useStaffOrDeveloperSettingPredicate */.useStaffOrDeveloperSettingPredicate();
  }
};
createToggle = createToggle.createStatic(createToggle);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/InternalBuildActiveSetting.tsx");

export default createToggle;