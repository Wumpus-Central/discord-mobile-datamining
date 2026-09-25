// === Module 15327: BuildOverrideActiveSetting ===

// Module 15327 (BuildOverrideActiveSetting)
import initialize from "initialize" /* 504 */;
import build_overrides_BuildOverrideUtils from "build_overrides/BuildOverrideUtils" /* 11253 */;
import DevToolsNavigator from "DevToolsNavigator" /* 14115 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 14354 */;
import DevToolsContent from "DevToolsContent" /* 15321 */;
import BuildOverrideStore from "BuildOverrideStore" /* 10956 */;

require = fn;
const jsx = fn(21).jsx;
const SettingBuilders = fn(10993);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    return "Build Override Active";
  },
  parent: null,
  IconComponent: fn(14664).RefreshIcon,
  useDescription: function useBuildOverrideActiveDescription() {
    const items = [BuildOverrideStore];
    const stateFromStores = initialize.useStateFromStores(items, () => {
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
      const obj2 = { label: "Build override: ", value: stateFromStores };
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
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/BuildOverrideActiveSetting.tsx");

export default pressable;