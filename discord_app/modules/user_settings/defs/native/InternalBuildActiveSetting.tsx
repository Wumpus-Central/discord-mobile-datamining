// === Module 16738: InternalBuildActiveSetting ===

// Module 16738 (InternalBuildActiveSetting)
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 15808 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 15338 */;

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11006);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasCheckNativeUpdateSetting() {
  return MobileNativeUpdateStore.hasUpdatesConfigured && useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
}) : (function useHasCheckNativeUpdateSetting() {
  return MobileNativeUpdateStore.hasUpdatesConfigured && useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
});
const obj3 = {
  useTitle() {
    return "Internal Build Active";
  },
  parent: null,
  IconComponent: fn(16540).MobilePhoneSettingsIcon,
  useDescription: function useInternalBuildActiveDescription() {
    return "Build installed from builds.discord.tools";
  },
  usePredicate: ReactCompilerGating.isReactCompilerEnabled() ? (function useHasCheckNativeUpdateSetting() {
    return MobileNativeUpdateStore.hasUpdatesConfigured && useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
  }) : (function useHasCheckNativeUpdateSetting() {
    return MobileNativeUpdateStore.hasUpdatesConfigured && useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
  })
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InternalBuildActiveSetting.tsx");

export default SettingBuilders.createStatic({
  useTitle() {
    return "Internal Build Active";
  },
  parent: null,
  IconComponent: fn(16540).MobilePhoneSettingsIcon,
  useDescription: function useInternalBuildActiveDescription() {
    return "Build installed from builds.discord.tools";
  },
  usePredicate: ReactCompilerGating.isReactCompilerEnabled() ? (function useHasCheckNativeUpdateSetting() {
    return MobileNativeUpdateStore.hasUpdatesConfigured && useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
  }) : (function useHasCheckNativeUpdateSetting() {
    return MobileNativeUpdateStore.hasUpdatesConfigured && useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
  })
});