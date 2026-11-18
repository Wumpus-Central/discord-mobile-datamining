// === Module 17254: BuildOverrideActiveSetting ===

// Module 17254 (BuildOverrideActiveSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1113 */;
import _modDef2292 from "module_2292" /* 2292 */;
import components_Button_Button from "components/Button/Button" /* 5421 */;
import Stack_Stack from "Stack/Stack" /* 5837 */;
import IconButton from "IconButton" /* 7502 */;
import SettingsIcon from "SettingsIcon" /* 10331 */;
import build_overrides_BuildOverrideUtils from "build_overrides/BuildOverrideUtils" /* 12177 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16066 */;
import openBuildOverridesSettings from "openBuildOverridesSettings" /* 17063 */;
import DevToolsContent from "DevToolsContent" /* 17248 */;
import noop from "module_19" /* 19 */;
import BuildOverrideStore from "BuildOverrideStore" /* 11854 */;

require = fn;
function handleBuildOverrideActivePress() {
  const result = openBuildOverridesSettings.openBuildOverridesSettings();
}
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const SettingBuilders = fn(11897);
const obj2 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2292.jBvMiO);
  },
  parent: null,
  IconComponent: fn(14295).RefreshIcon,
  useDescription: function useBuildOverrideActiveDescription() {
    items = [BuildOverrideStore];
    const stateFromStores = initialize.useStateFromStores(items, () => {
      const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
      let tmp;
      if (overrides != null) {
        tmp = overrides[build_overrides_BuildOverrideUtils.DEVICE_FIELD];
      }
      return tmp;
    });
    const staffOrDeveloperSettingPredicate = useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
    let tmp6Result;
    if (null != stateFromStores) {
      const obj3 = { label: null, value: null };
      const intl = util.intl;
      const _HermesInternal = HermesInternal;
      obj3.label = "" + intl.string(_modDef2292.d11XdP) + " ";
      obj3.value = stateFromStores.id;
      const items1 = [React4(DevToolsContent.DevToolsContentSubLabel, obj3), ];
      const obj4 = { text: null, variant: "secondary", onPress: null, grow: true, shrink: true };
      const intl2 = util.intl;
      obj4.text = intl2.string(util.t.tX4xrt);
      obj4.onPress = build_overrides_BuildOverrideUtils.clearBuildOverride;
      const items2 = [React4(components_Button_Button.Button, obj4), ];
      let tmp7Result = staffOrDeveloperSettingPredicate;
      if (staffOrDeveloperSettingPredicate) {
        const obj5 = { icon: React4(SettingsIcon.SettingsIcon, {}), accessibilityLabel: "Build Overrides", variant: "secondary", onPress: handleBuildOverrideActivePress };
        tmp7Result = React4(IconButton.IconButton, obj5);
      }
      const obj6 = { spacing: 4, children: null };
      const obj7 = { direction: "horizontal", align: "center", spacing: 8, children: null };
      items2[1] = tmp7Result;
      obj7.children = items2;
      items1[1] = hasOwnProperty(Stack_Stack.Stack, obj7);
      obj6.children = items1;
      tmp6Result = hasOwnProperty(Stack_Stack.Stack, obj6);
    }
    return tmp6Result;
  },
  usePredicate: function useHasBuildOverrideActive() {
    items = [BuildOverrideStore];
    return null != initialize.useStateFromStores(items, () => {
      const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
      let tmp;
      if (overrides != null) {
        tmp = overrides[build_overrides_BuildOverrideUtils.DEVICE_FIELD];
      }
      return tmp;
    });
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/BuildOverrideActiveSetting.tsx");

export default SettingBuilders.createStatic({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2292.jBvMiO);
  },
  parent: null,
  IconComponent: fn(14295).RefreshIcon,
  useDescription: function useBuildOverrideActiveDescription() {
    items = [BuildOverrideStore];
    const stateFromStores = initialize.useStateFromStores(items, () => {
      const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
      let tmp;
      if (overrides != null) {
        tmp = overrides[build_overrides_BuildOverrideUtils.DEVICE_FIELD];
      }
      return tmp;
    });
    const staffOrDeveloperSettingPredicate = useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
    let tmp6Result;
    if (null != stateFromStores) {
      const obj3 = { label: null, value: null };
      const intl = util.intl;
      const _HermesInternal = HermesInternal;
      obj3.label = "" + intl.string(_modDef2292.d11XdP) + " ";
      obj3.value = stateFromStores.id;
      const items1 = [React4(DevToolsContent.DevToolsContentSubLabel, obj3), ];
      const obj4 = { text: null, variant: "secondary", onPress: null, grow: true, shrink: true };
      const intl2 = util.intl;
      obj4.text = intl2.string(util.t.tX4xrt);
      obj4.onPress = build_overrides_BuildOverrideUtils.clearBuildOverride;
      const items2 = [React4(components_Button_Button.Button, obj4), ];
      let tmp7Result = staffOrDeveloperSettingPredicate;
      if (staffOrDeveloperSettingPredicate) {
        const obj5 = { icon: React4(SettingsIcon.SettingsIcon, {}), accessibilityLabel: "Build Overrides", variant: "secondary", onPress: handleBuildOverrideActivePress };
        tmp7Result = React4(IconButton.IconButton, obj5);
      }
      const obj6 = { spacing: 4, children: null };
      const obj7 = { direction: "horizontal", align: "center", spacing: 8, children: null };
      items2[1] = tmp7Result;
      obj7.children = items2;
      items1[1] = hasOwnProperty(Stack_Stack.Stack, obj7);
      obj6.children = items1;
      tmp6Result = hasOwnProperty(Stack_Stack.Stack, obj6);
    }
    return tmp6Result;
  },
  usePredicate: function useHasBuildOverrideActive() {
    items = [BuildOverrideStore];
    return null != initialize.useStateFromStores(items, () => {
      const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
      let tmp;
      if (overrides != null) {
        tmp = overrides[build_overrides_BuildOverrideUtils.DEVICE_FIELD];
      }
      return tmp;
    });
  }
});