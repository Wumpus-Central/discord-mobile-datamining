// === Module 15740: InternalBuildActiveSetting ===

// Module 15740 (InternalBuildActiveSetting)
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 14842 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 14394 */;

require = fn;
fn(11468);
let SettingBuilders = {
  useTitle() {
    return "Internal Build Active";
  },
  parent: null,
  IconComponent: fn(15559).MobilePhoneSettingsIcon,
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