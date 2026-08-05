import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { DevToolsContentSortButtons } from "../../../devtools/native/components/DevToolsContent.tsx";
import { navigateToDevTools } from "../../../devtools/native/components/DevToolsNavigator.tsx";
import { useStaffOrDeveloperSettingPredicate } from "../../dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx";
// discord_app/modules/user_settings/defs/native/BuildOverrideActiveSetting.tsx
import getCurrentBuildOverride from "getCurrentBuildOverride";
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    return "Build Override Active";
  },
  parent: null,
  IconComponent: require("RefreshIcon").RefreshIcon,
  useDescription: function useBuildOverrideActiveDescription() {
    let obj = initialize /* initialize */;
    const items = [getCurrentBuildOverride];
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
      tmp4 = jsx(DevToolsContentSortButtons /* DevToolsContentSortButtons */.DevToolsContentSubLabel, { label: "Build override: ", value: null });
    }
    return tmp4;
  },
  usePredicate: function useHasBuildOverrideActive() {
    const staffOrDeveloperSettingPredicate = useStaffOrDeveloperSettingPredicate /* useStaffOrDeveloperSettingPredicate */.useStaffOrDeveloperSettingPredicate();
    const obj = useStaffOrDeveloperSettingPredicate /* useStaffOrDeveloperSettingPredicate */;
    const items = [getCurrentBuildOverride];
    const obj2 = initialize /* initialize */;
    return null != initialize /* initialize */.useStateFromStores(items, () => {
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
    navigateToDevTools /* navigateToDevTools */.navigateToDevTools({ screenKey: "buildOverride" });
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("navigateToDevTools").fileFinishedImporting("modules/user_settings/defs/native/BuildOverrideActiveSetting.tsx");

export default createToggle;