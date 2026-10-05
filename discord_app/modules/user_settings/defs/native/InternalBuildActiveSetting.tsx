// discord_app/modules/user_settings/defs/native/InternalBuildActiveSetting.tsx
import useIsStaffOrDeveloperSettingPredicate from "../../dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx";
import MobileNativeUpdateStore from "../../../mobile_native_updater/MobileNativeUpdateStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11129);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () =>
      MobileNativeUpdateStore.hasUpdatesConfigured &&
      useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate()
  : () =>
      MobileNativeUpdateStore.hasUpdatesConfigured &&
      useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
const obj3 = {
  useTitle() {
    return "Internal Build Active";
  },
  parent: null,
  IconComponent: fn(15386).MobilePhoneSettingsIcon,
  useDescription: function useInternalBuildActiveDescription() {
    return "Build installed from builds.discord.tools";
  },
  usePredicate: ReactCompilerGating.isReactCompilerEnabled()
    ? () =>
        MobileNativeUpdateStore.hasUpdatesConfigured &&
        useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate()
    : () =>
        MobileNativeUpdateStore.hasUpdatesConfigured &&
        useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate(),
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InternalBuildActiveSetting.tsx");

export default SettingBuilders.createStatic({
  useTitle() {
    return "Internal Build Active";
  },
  parent: null,
  IconComponent: fn(15386).MobilePhoneSettingsIcon,
  useDescription: function useInternalBuildActiveDescription() {
    return "Build installed from builds.discord.tools";
  },
  usePredicate: ReactCompilerGating.isReactCompilerEnabled()
    ? () =>
        MobileNativeUpdateStore.hasUpdatesConfigured &&
        useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate()
    : () =>
        MobileNativeUpdateStore.hasUpdatesConfigured &&
        useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate(),
});
