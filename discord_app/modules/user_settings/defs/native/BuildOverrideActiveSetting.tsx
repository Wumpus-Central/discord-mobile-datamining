// === Module 16104: BuildOverrideActiveSetting ===

// Module 16104 (BuildOverrideActiveSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import _modDef2206 from "module_2206" /* 2206 */;
import Stack_Stack from "Stack/Stack" /* 5377 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import build_overrides_BuildOverrideUtils from "build_overrides/BuildOverrideUtils" /* 11341 */;
import DevToolsNavigator from "DevToolsNavigator" /* 14808 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 15098 */;
import DevToolsContent from "DevToolsContent" /* 16098 */;
import noop from "module_19" /* 19 */;
import BuildOverrideStore from "BuildOverrideStore" /* 10483 */;

require = fn;
function handleBuildOverrideActivePress() {
  DevToolsNavigator.navigateToDevTools({ screenKey: "buildOverride" });
}
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useBuildOverrideActive() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [BuildOverrideStore];
    const fn = function s() {
      const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
      let tmp;
      if (overrides != null) {
        tmp = overrides[build_overrides_BuildOverrideUtils.DEVICE_FIELD];
      }
      return tmp;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (function useBuildOverrideActive() {
  const items = [BuildOverrideStore];
  return initialize.useStateFromStores(items, () => {
    const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
    let tmp;
    if (overrides != null) {
      tmp = overrides[build_overrides_BuildOverrideUtils.DEVICE_FIELD];
    }
    return tmp;
  });
});
ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
function useHasBuildOverrideActive() {
  return null != closure_7();
}
const SettingBuilders = fn(10663);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useBuildOverrideActiveDescription() {
  const cResult = c.c(3);
  const tmp4 = closure_7();
  const staffOrDeveloperSettingPredicate = useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
  if (cResult[0] === tmp4) {
    if (cResult[1] === staffOrDeveloperSettingPredicate) {
      let tmp6 = cResult[2];
    }
    return tmp6;
  }
  let tmp8Result;
  if (null != tmp4) {
    const obj3 = { label: null, value: null };
    const intl = util.intl;
    const _HermesInternal = HermesInternal;
    obj3.label = "" + intl.string(_modDef2206.d11XdP) + " ";
    obj3.value = tmp4.id;
    const items = [React4(DevToolsContent.DevToolsContentSubLabel, obj3), , ];
    const obj4 = { text: null, variant: "secondary", onPress: null };
    const intl2 = util.intl;
    obj4.text = intl2.string(util.t.tX4xrt);
    obj4.onPress = build_overrides_BuildOverrideUtils.clearBuildOverride;
    items[1] = React4(components_Button_Button.Button, obj4);
    let tmp9Result = staffOrDeveloperSettingPredicate;
    if (staffOrDeveloperSettingPredicate) {
      const obj5 = { text: null, variant: "secondary", onPress: null };
      const intl3 = util.intl;
      obj5.text = intl3.string(_modDef2206.VBPcR9);
      obj5.onPress = handleBuildOverrideActivePress;
      tmp9Result = React4(components_Button_Button.Button, obj5);
    }
    const obj6 = { children: null };
    items[2] = tmp9Result;
    obj6.children = items;
    tmp8Result = hasOwnProperty(Stack_Stack.Stack, obj6);
  }
  cResult[0] = tmp4;
  cResult[1] = staffOrDeveloperSettingPredicate;
  cResult[2] = tmp8Result;
  tmp6 = tmp8Result;
}) : (function useBuildOverrideActiveDescription() {
  const tmp = closure_7();
  const staffOrDeveloperSettingPredicate = useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
  let tmp6Result;
  if (null != tmp) {
    const obj2 = { label: null, value: null };
    const intl = util.intl;
    const _HermesInternal = HermesInternal;
    obj2.label = "" + intl.string(_modDef2206.d11XdP) + " ";
    obj2.value = tmp.id;
    const items = [React4(DevToolsContent.DevToolsContentSubLabel, obj2), , ];
    const obj3 = { text: null, variant: "secondary", onPress: null };
    const intl2 = util.intl;
    obj3.text = intl2.string(util.t.tX4xrt);
    obj3.onPress = build_overrides_BuildOverrideUtils.clearBuildOverride;
    items[1] = React4(components_Button_Button.Button, obj3);
    let tmp7Result = staffOrDeveloperSettingPredicate;
    if (staffOrDeveloperSettingPredicate) {
      const obj4 = { text: null, variant: "secondary", onPress: null };
      const intl3 = util.intl;
      obj4.text = intl3.string(_modDef2206.VBPcR9);
      obj4.onPress = handleBuildOverrideActivePress;
      tmp7Result = React4(components_Button_Button.Button, obj4);
    }
    const obj5 = { children: null };
    items[2] = tmp7Result;
    obj5.children = items;
    tmp6Result = hasOwnProperty(Stack_Stack.Stack, obj5);
  }
  return tmp6Result;
});
let obj5 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2206.jBvMiO);
  },
  parent: null,
  IconComponent: fn(15229).RefreshIcon,
  useDescription: ReactCompilerGating.isReactCompilerEnabled() ? (function useBuildOverrideActiveDescription() {
    const cResult = c.c(3);
    const tmp4 = closure_7();
    const staffOrDeveloperSettingPredicate = useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
    if (cResult[0] === tmp4) {
      if (cResult[1] === staffOrDeveloperSettingPredicate) {
        let tmp6 = cResult[2];
      }
      return tmp6;
    }
    let tmp8Result;
    if (null != tmp4) {
      const obj3 = { label: null, value: null };
      const intl = util.intl;
      const _HermesInternal = HermesInternal;
      obj3.label = "" + intl.string(_modDef2206.d11XdP) + " ";
      obj3.value = tmp4.id;
      const items = [React4(DevToolsContent.DevToolsContentSubLabel, obj3), , ];
      const obj4 = { text: null, variant: "secondary", onPress: null };
      const intl2 = util.intl;
      obj4.text = intl2.string(util.t.tX4xrt);
      obj4.onPress = build_overrides_BuildOverrideUtils.clearBuildOverride;
      items[1] = React4(components_Button_Button.Button, obj4);
      let tmp9Result = staffOrDeveloperSettingPredicate;
      if (staffOrDeveloperSettingPredicate) {
        const obj5 = { text: null, variant: "secondary", onPress: null };
        const intl3 = util.intl;
        obj5.text = intl3.string(_modDef2206.VBPcR9);
        obj5.onPress = handleBuildOverrideActivePress;
        tmp9Result = React4(components_Button_Button.Button, obj5);
      }
      const obj6 = { children: null };
      items[2] = tmp9Result;
      obj6.children = items;
      tmp8Result = hasOwnProperty(Stack_Stack.Stack, obj6);
    }
    cResult[0] = tmp4;
    cResult[1] = staffOrDeveloperSettingPredicate;
    cResult[2] = tmp8Result;
    tmp6 = tmp8Result;
  }) : (function useBuildOverrideActiveDescription() {
    const tmp = closure_7();
    const staffOrDeveloperSettingPredicate = useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
    let tmp6Result;
    if (null != tmp) {
      const obj2 = { label: null, value: null };
      const intl = util.intl;
      const _HermesInternal = HermesInternal;
      obj2.label = "" + intl.string(_modDef2206.d11XdP) + " ";
      obj2.value = tmp.id;
      const items = [React4(DevToolsContent.DevToolsContentSubLabel, obj2), , ];
      const obj3 = { text: null, variant: "secondary", onPress: null };
      const intl2 = util.intl;
      obj3.text = intl2.string(util.t.tX4xrt);
      obj3.onPress = build_overrides_BuildOverrideUtils.clearBuildOverride;
      items[1] = React4(components_Button_Button.Button, obj3);
      let tmp7Result = staffOrDeveloperSettingPredicate;
      if (staffOrDeveloperSettingPredicate) {
        const obj4 = { text: null, variant: "secondary", onPress: null };
        const intl3 = util.intl;
        obj4.text = intl3.string(_modDef2206.VBPcR9);
        obj4.onPress = handleBuildOverrideActivePress;
        tmp7Result = React4(components_Button_Button.Button, obj4);
      }
      const obj5 = { children: null };
      items[2] = tmp7Result;
      obj5.children = items;
      tmp6Result = hasOwnProperty(Stack_Stack.Stack, obj5);
    }
    return tmp6Result;
  }),
  usePredicate: useHasBuildOverrideActive
};
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/BuildOverrideActiveSetting.tsx");

export default SettingBuilders.createStatic({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2206.jBvMiO);
  },
  parent: null,
  IconComponent: fn(15229).RefreshIcon,
  useDescription: ReactCompilerGating.isReactCompilerEnabled() ? (function useBuildOverrideActiveDescription() {
    const cResult = c.c(3);
    const tmp4 = closure_7();
    const staffOrDeveloperSettingPredicate = useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
    if (cResult[0] === tmp4) {
      if (cResult[1] === staffOrDeveloperSettingPredicate) {
        let tmp6 = cResult[2];
      }
      return tmp6;
    }
    let tmp8Result;
    if (null != tmp4) {
      const obj3 = { label: null, value: null };
      const intl = util.intl;
      const _HermesInternal = HermesInternal;
      obj3.label = "" + intl.string(_modDef2206.d11XdP) + " ";
      obj3.value = tmp4.id;
      const items = [React4(DevToolsContent.DevToolsContentSubLabel, obj3), , ];
      const obj4 = { text: null, variant: "secondary", onPress: null };
      const intl2 = util.intl;
      obj4.text = intl2.string(util.t.tX4xrt);
      obj4.onPress = build_overrides_BuildOverrideUtils.clearBuildOverride;
      items[1] = React4(components_Button_Button.Button, obj4);
      let tmp9Result = staffOrDeveloperSettingPredicate;
      if (staffOrDeveloperSettingPredicate) {
        const obj5 = { text: null, variant: "secondary", onPress: null };
        const intl3 = util.intl;
        obj5.text = intl3.string(_modDef2206.VBPcR9);
        obj5.onPress = handleBuildOverrideActivePress;
        tmp9Result = React4(components_Button_Button.Button, obj5);
      }
      const obj6 = { children: null };
      items[2] = tmp9Result;
      obj6.children = items;
      tmp8Result = hasOwnProperty(Stack_Stack.Stack, obj6);
    }
    cResult[0] = tmp4;
    cResult[1] = staffOrDeveloperSettingPredicate;
    cResult[2] = tmp8Result;
    tmp6 = tmp8Result;
  }) : (function useBuildOverrideActiveDescription() {
    const tmp = closure_7();
    const staffOrDeveloperSettingPredicate = useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
    let tmp6Result;
    if (null != tmp) {
      const obj2 = { label: null, value: null };
      const intl = util.intl;
      const _HermesInternal = HermesInternal;
      obj2.label = "" + intl.string(_modDef2206.d11XdP) + " ";
      obj2.value = tmp.id;
      const items = [React4(DevToolsContent.DevToolsContentSubLabel, obj2), , ];
      const obj3 = { text: null, variant: "secondary", onPress: null };
      const intl2 = util.intl;
      obj3.text = intl2.string(util.t.tX4xrt);
      obj3.onPress = build_overrides_BuildOverrideUtils.clearBuildOverride;
      items[1] = React4(components_Button_Button.Button, obj3);
      let tmp7Result = staffOrDeveloperSettingPredicate;
      if (staffOrDeveloperSettingPredicate) {
        const obj4 = { text: null, variant: "secondary", onPress: null };
        const intl3 = util.intl;
        obj4.text = intl3.string(_modDef2206.VBPcR9);
        obj4.onPress = handleBuildOverrideActivePress;
        tmp7Result = React4(components_Button_Button.Button, obj4);
      }
      const obj5 = { children: null };
      items[2] = tmp7Result;
      obj5.children = items;
      tmp6Result = hasOwnProperty(Stack_Stack.Stack, obj5);
    }
    return tmp6Result;
  }),
  usePredicate: useHasBuildOverrideActive
});