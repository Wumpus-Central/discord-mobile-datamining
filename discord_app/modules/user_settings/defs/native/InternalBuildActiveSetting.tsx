// === Module 15829: InternalBuildActiveSetting ===

// Module 15829 (InternalBuildActiveSetting)
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 14931 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 14482 */;

require = fn;
fn(11601);
let SettingBuilders = {
  useTitle() {
    return "Internal Build Active";
  },
  parent: null,
  IconComponent: fn(15646).MobilePhoneSettingsIcon,
  useDescription: function useInternalBuildActiveDescription() {
    return "Build installed from builds.discord.tools";
  },
  usePredicate: function useHasCheckNativeUpdateSetting() {
    return MobileNativeUpdateStore.hasUpdatesConfigured && useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
  }
};
SettingBuilders = SettingBuilders.createStatic(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InternalBuildActiveSetting.tsx");

export default SettingBuilders;