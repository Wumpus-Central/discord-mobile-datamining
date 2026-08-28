// discord_app/modules/user_settings/defs/native/BuildOverrideActiveSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import navigateToDevTools from "../../../devtools/native/components/DevToolsNavigator.tsx";
import useStaffOrDeveloperSettingPredicate from "../../dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx";
import DevToolsContentSortButtons from "../../../devtools/native/components/DevToolsContent.tsx";
import closure_2 from "../../../build_overrides/BuildOverrideStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

require = arg1;
createToggle = {
  useTitle() {
    return "Build Override Active";
  },
  parent: null,
  IconComponent: require("RefreshIcon").RefreshIcon,
  useDescription: function useBuildOverrideActiveDescription() {
    let obj = initialize;
    const items = [closure_2];
    const stateFromStores = obj.useStateFromStores(items, () => {
      const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
      let id;
      if (overrides != null) {
        const tmp4 = overrides[callback(undefined, table[4]).DEVICE_FIELD];
        if (tmp4 != null) {
          id = tmp4.id;
        }
      }
      return id;
    });
    let tmp4;
    if (null != stateFromStores) {
      obj = { label: "Build override: ", value: null };
      obj[1] = stateFromStores;
      tmp4 = jsx(DevToolsContentSortButtons.DevToolsContentSubLabel, { label: "Build override: ", value: null });
    }
    return tmp4;
  },
  usePredicate: function useHasBuildOverrideActive() {
    const staffOrDeveloperSettingPredicate = useStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
    const obj = useStaffOrDeveloperSettingPredicate;
    const items = [closure_2];
    const obj2 = initialize;
    return null != initialize.useStateFromStores(items, () => {
      const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
      let id;
      if (overrides != null) {
        const tmp4 = overrides[callback(undefined, table[4]).DEVICE_FIELD];
        if (tmp4 != null) {
          id = tmp4.id;
        }
      }
      return id;
    }) && staffOrDeveloperSettingPredicate;
  },
  onPress: function handleBuildOverrideActivePress() {
    navigateToDevTools.navigateToDevTools({ screenKey: "buildOverride" });
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/BuildOverrideActiveSetting.tsx");

export default createToggle;