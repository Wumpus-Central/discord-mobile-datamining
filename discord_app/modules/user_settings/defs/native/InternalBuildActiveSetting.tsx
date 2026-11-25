// === Module 17342: InternalBuildActiveSetting ===

// Module 17342 (InternalBuildActiveSetting)
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16298 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 15778 */;

require = fn;
const SettingBuilders = fn(11914);
const obj2 = {
  useTitle() {
    return "Internal Build Active";
  },
  parent: null,
  IconComponent: fn(17131).MobilePhoneSettingsIcon,
  useDescription: function useInternalBuildActiveDescription() {
    return "Build installed from builds.discord.tools";
  },
  usePredicate: function useHasCheckNativeUpdateSetting() {
    return MobileNativeUpdateStore.hasUpdatesConfigured && useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InternalBuildActiveSetting.tsx");

export default SettingBuilders.createStatic({
  useTitle() {
    return "Internal Build Active";
  },
  parent: null,
  IconComponent: fn(17131).MobilePhoneSettingsIcon,
  useDescription: function useInternalBuildActiveDescription() {
    return "Build installed from builds.discord.tools";
  },
  usePredicate: function useHasCheckNativeUpdateSetting() {
    return MobileNativeUpdateStore.hasUpdatesConfigured && useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
  }
});