// === Module 17702: BuildOverrideActiveSetting ===

// Module 17702 (BuildOverrideActiveSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import _modDef2142 from "module_2142" /* 2142 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import Stack_Stack from "Stack/Stack" /* 6022 */;
import build_overrides_BuildOverrideUtils from "build_overrides/BuildOverrideUtils" /* 13142 */;
import DevToolsNavigator from "DevToolsNavigator" /* 16381 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16691 */;
import DevToolsContent from "DevToolsContent" /* 17700 */;
import noop from "module_19" /* 19 */;
import BuildOverrideStore from "BuildOverrideStore" /* 11325 */;

require = fn;
function handleBuildOverrideActivePress() {
  DevToolsNavigator.navigateToDevTools({ screenKey: "buildOverride" });
}
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const SettingBuilders = fn(11505);
const obj2 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2142.jBvMiO);
  },
  parent: null,
  IconComponent: fn(12518).RefreshIcon,
  useDescription: function useBuildOverrideActiveDescription() {
    const items = [BuildOverrideStore];
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
      obj3.label = "" + intl.string(_modDef2142.d11XdP) + " ";
      obj3.value = stateFromStores.id;
      const items1 = [React4(DevToolsContent.DevToolsContentSubLabel, obj3), , ];
      const obj4 = { text: null, variant: "secondary", onPress: null };
      const intl2 = util.intl;
      obj4.text = intl2.string(util.t.tX4xrt);
      obj4.onPress = build_overrides_BuildOverrideUtils.clearBuildOverride;
      items1[1] = React4(components_Button_Button.Button, obj4);
      let tmp7Result = staffOrDeveloperSettingPredicate;
      if (staffOrDeveloperSettingPredicate) {
        const obj5 = { text: null, variant: "secondary", onPress: null };
        const intl3 = util.intl;
        obj5.text = intl3.string(_modDef2142.VBPcR9);
        obj5.onPress = handleBuildOverrideActivePress;
        tmp7Result = React4(components_Button_Button.Button, obj5);
      }
      const obj6 = { children: null };
      items1[2] = tmp7Result;
      obj6.children = items1;
      tmp6Result = hasOwnProperty(Stack_Stack.Stack, obj6);
    }
    return tmp6Result;
  },
  usePredicate: function useHasBuildOverrideActive() {
    const items = [BuildOverrideStore];
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
const result = size.fileFinishedImporting("modules/user_settings/defs/native/BuildOverrideActiveSetting.tsx");

export default SettingBuilders.createStatic({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2142.jBvMiO);
  },
  parent: null,
  IconComponent: fn(12518).RefreshIcon,
  useDescription: function useBuildOverrideActiveDescription() {
    const items = [BuildOverrideStore];
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
      obj3.label = "" + intl.string(_modDef2142.d11XdP) + " ";
      obj3.value = stateFromStores.id;
      const items1 = [React4(DevToolsContent.DevToolsContentSubLabel, obj3), , ];
      const obj4 = { text: null, variant: "secondary", onPress: null };
      const intl2 = util.intl;
      obj4.text = intl2.string(util.t.tX4xrt);
      obj4.onPress = build_overrides_BuildOverrideUtils.clearBuildOverride;
      items1[1] = React4(components_Button_Button.Button, obj4);
      let tmp7Result = staffOrDeveloperSettingPredicate;
      if (staffOrDeveloperSettingPredicate) {
        const obj5 = { text: null, variant: "secondary", onPress: null };
        const intl3 = util.intl;
        obj5.text = intl3.string(_modDef2142.VBPcR9);
        obj5.onPress = handleBuildOverrideActivePress;
        tmp7Result = React4(components_Button_Button.Button, obj5);
      }
      const obj6 = { children: null };
      items1[2] = tmp7Result;
      obj6.children = items1;
      tmp6Result = hasOwnProperty(Stack_Stack.Stack, obj6);
    }
    return tmp6Result;
  },
  usePredicate: function useHasBuildOverrideActive() {
    const items = [BuildOverrideStore];
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