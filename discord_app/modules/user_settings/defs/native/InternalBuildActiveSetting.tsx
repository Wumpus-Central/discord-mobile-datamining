// discord_app/modules/user_settings/defs/native/InternalBuildActiveSetting.tsx
import useIsStaffOrDeveloperSettingPredicate from "../../dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx";
import MobileNativeUpdateStore from "../../../mobile_native_updater/MobileNativeUpdateStore.tsx";

require = fn;
const SettingBuilders = fn(11622);
const obj2 = {
  useTitle() {
    return "Internal Build Active";
  },
  parent: null,
  IconComponent: fn(15680).MobilePhoneSettingsIcon,
  useDescription: function useInternalBuildActiveDescription() {
    return "Build installed from builds.discord.tools";
  },
  usePredicate: function useHasCheckNativeUpdateSetting() {
    return (
      MobileNativeUpdateStore.hasUpdatesConfigured &&
      useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate()
    );
  },
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InternalBuildActiveSetting.tsx");

export default SettingBuilders.createStatic({
  useTitle() {
    return "Internal Build Active";
  },
  parent: null,
  IconComponent: fn(15680).MobilePhoneSettingsIcon,
  useDescription: function useInternalBuildActiveDescription() {
    return "Build installed from builds.discord.tools";
  },
  usePredicate: function useHasCheckNativeUpdateSetting() {
    return (
      MobileNativeUpdateStore.hasUpdatesConfigured &&
      useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate()
    );
  },
});
