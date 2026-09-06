// === Module 15747: BuildOverrideActiveSetting ===

// Module 15747 (BuildOverrideActiveSetting)
import initialize from "initialize" /* 504 */;
import build_overrides_BuildOverrideUtils from "build_overrides/BuildOverrideUtils" /* 11789 */;
import DevToolsNavigator from "DevToolsNavigator" /* 14581 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 14842 */;
import DevToolsContent from "DevToolsContent" /* 15743 */;
import BuildOverrideStore from "BuildOverrideStore" /* 11425 */;

require = fn;
const jsx = fn(21).jsx;
fn(11468);
let SettingBuilders = {
  useTitle() {
    return "Build Override Active";
  },
  parent: null,
  IconComponent: fn(15158).RefreshIcon,
  useDescription: function useBuildOverrideActiveDescription() {
    let obj = initialize;
    const items = [BuildOverrideStore];
    const stateFromStores = obj.useStateFromStores(items, () => {
      const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
      let id;
      if (overrides != null) {
        const tmp4 = overrides[build_overrides_BuildOverrideUtils.DEVICE_FIELD];
        if (tmp4 != null) {
          id = tmp4.id;
        }
      }
      return id;
    });
    let tmp4;
    if (null != stateFromStores) {
      obj = { label: "Build override: ", value: stateFromStores };
      tmp4 = jsx(DevToolsContent.DevToolsContentSubLabel, { label: "Build override: ", value: stateFromStores });
    }
    return tmp4;
  },
  usePredicate: function useHasBuildOverrideActive() {
    const staffOrDeveloperSettingPredicate = useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
    const items = [BuildOverrideStore];
    return null != initialize.useStateFromStores(items, () => {
      const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
      let id;
      if (overrides != null) {
        const tmp4 = overrides[build_overrides_BuildOverrideUtils.DEVICE_FIELD];
        if (tmp4 != null) {
          id = tmp4.id;
        }
      }
      return id;
    }) && staffOrDeveloperSettingPredicate;
  },
  onPress: function handleBuildOverrideActivePress() {
    DevToolsNavigator.navigateToDevTools({ screenKey: "buildOverride" });
  },
  withArrow: true
};
SettingBuilders = SettingBuilders.createPressable(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/BuildOverrideActiveSetting.tsx");

export default SettingBuilders;