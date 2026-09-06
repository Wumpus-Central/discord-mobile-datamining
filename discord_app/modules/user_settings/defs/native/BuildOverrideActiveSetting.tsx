// discord_app/modules/user_settings/defs/native/BuildOverrideActiveSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import build_overrides_BuildOverrideUtils from "../../../build_overrides/native/BuildOverrideUtils.tsx";
import DevToolsNavigator from "../../../devtools/native/components/DevToolsNavigator.tsx";
import useIsStaffOrDeveloperSettingPredicate from "../../dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx";
import DevToolsContent from "../../../devtools/native/components/DevToolsContent.tsx";
import BuildOverrideStore from "../../../build_overrides/BuildOverrideStore.tsx";

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
    const staffOrDeveloperSettingPredicate =
      useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
    const items = [BuildOverrideStore];
    return (
      null !=
        initialize.useStateFromStores(items, () => {
          const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
          let id;
          if (overrides != null) {
            const tmp4 = overrides[build_overrides_BuildOverrideUtils.DEVICE_FIELD];
            if (tmp4 != null) {
              id = tmp4.id;
            }
          }
          return id;
        }) && staffOrDeveloperSettingPredicate
    );
  },
  onPress: function handleBuildOverrideActivePress() {
    DevToolsNavigator.navigateToDevTools({ screenKey: "buildOverride" });
  },
  withArrow: true,
};
SettingBuilders = SettingBuilders.createPressable(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/BuildOverrideActiveSetting.tsx");

export default SettingBuilders;
