// === Module 15551: InternalBuildActiveSetting ===

// Module 15551 (InternalBuildActiveSetting)
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 14584 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 14081 */;

require = fn;
const SettingBuilders = fn(11211);
const obj2 = {
  useTitle() {
    return "Internal Build Active";
  },
  parent: null,
  IconComponent: fn(15320).MobilePhoneSettingsIcon,
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
  IconComponent: fn(15320).MobilePhoneSettingsIcon,
  useDescription: function useInternalBuildActiveDescription() {
    return "Build installed from builds.discord.tools";
  },
  usePredicate: function useHasCheckNativeUpdateSetting() {
    return MobileNativeUpdateStore.hasUpdatesConfigured && useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
  }
});