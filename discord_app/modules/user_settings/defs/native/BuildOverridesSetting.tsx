// === Module 17335: BuildOverridesSetting ===

// Module 17335 (BuildOverridesSetting)
import SettingsConstants from "SettingsConstants" /* 9513 */;
import RefreshIcon from "RefreshIcon" /* 14025 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16298 */;
import SettingBuilders from "SettingBuilders" /* 11914 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "Build Overrides";
  },
  parent: null,
  IconComponent: RefreshIcon.RefreshIcon,
  usePredicate: useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate,
  useSearchTerms() {
    return ["build override", "branch", "commit"];
  },
  screen: {
    route: SettingsConstants.MobileUserSettings.BUILD_OVERRIDES,
    getComponent() {
      return require("BuildOverridesScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/BuildOverridesSetting.tsx");

export default route;