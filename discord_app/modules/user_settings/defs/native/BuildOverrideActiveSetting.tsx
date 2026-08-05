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
    let obj = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
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
      tmp4 = jsx(require("../../../devtools/native/components/DevToolsContent.tsx") /* DevToolsContentSortButtons */.DevToolsContentSubLabel, { label: "Build override: ", value: null });
    }
    return tmp4;
  },
  usePredicate: function useHasBuildOverrideActive() {
    const staffOrDeveloperSettingPredicate = require("../../dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx") /* useStaffOrDeveloperSettingPredicate */.useStaffOrDeveloperSettingPredicate();
    const obj = require("../../dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx") /* useStaffOrDeveloperSettingPredicate */;
    const items = [getCurrentBuildOverride];
    const obj2 = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
    return null != require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => {
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
    require("../../../devtools/native/components/DevToolsNavigator.tsx") /* navigateToDevTools */.navigateToDevTools({ screenKey: "buildOverride" });
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("navigateToDevTools").fileFinishedImporting("modules/user_settings/defs/native/BuildOverrideActiveSetting.tsx");

export default createToggle;