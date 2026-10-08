// === Module 15925: BuildOverrideActiveSetting ===

// Module 15925 (BuildOverrideActiveSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import build_overrides_BuildOverrideUtils from "build_overrides/BuildOverrideUtils" /* 11395 */;
import DevToolsNavigator from "DevToolsNavigator" /* 14648 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 14927 */;
import DevToolsContent from "DevToolsContent" /* 15919 */;
import BuildOverrideStore from "BuildOverrideStore" /* 10460 */;

require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useBuildOverrideActive() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [BuildOverrideStore];
    const fn = function u() {
      const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
      let id;
      if (overrides != null) {
        const tmp4 = overrides[build_overrides_BuildOverrideUtils.DEVICE_FIELD];
        if (tmp4 != null) {
          id = tmp4.id;
        }
      }
      return id;
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
    let id;
    if (overrides != null) {
      const tmp4 = overrides[build_overrides_BuildOverrideUtils.DEVICE_FIELD];
      if (tmp4 != null) {
        id = tmp4.id;
      }
    }
    return id;
  });
});
fn(558);
ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasBuildOverrideActive() {
  const staffOrDeveloperSettingPredicate = useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
  return null != closure_4() && staffOrDeveloperSettingPredicate;
}) : (function useHasBuildOverrideActive() {
  const staffOrDeveloperSettingPredicate = useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
  return null != closure_4() && staffOrDeveloperSettingPredicate;
});
const SettingBuilders = fn(11262);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useBuildOverrideActiveDescription() {
  const cResult = c.c(2);
  const tmp4 = closure_4();
  if (cResult[0] !== tmp4) {
    let tmp7;
    if (null != tmp4) {
      const obj2 = { label: "Build override: ", value: tmp4 };
      tmp7 = jsx(DevToolsContent.DevToolsContentSubLabel, { label: "Build override: ", value: tmp4 });
    }
    cResult[0] = tmp4;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (function useBuildOverrideActiveDescription() {
  const tmp = closure_4();
  let tmp2;
  if (null != tmp) {
    const obj = { label: "Build override: ", value: tmp };
    tmp2 = jsx(DevToolsContent.DevToolsContentSubLabel, { label: "Build override: ", value: tmp });
  }
  return tmp2;
});
const pressable = SettingBuilders.createPressable({
  useTitle() {
    return "Build Override Active";
  },
  parent: null,
  IconComponent: fn(15055).RefreshIcon,
  useDescription: ReactCompilerGating.isReactCompilerEnabled() ? (function useBuildOverrideActiveDescription() {
    const cResult = c.c(2);
    const tmp4 = closure_4();
    if (cResult[0] !== tmp4) {
      let tmp7;
      if (null != tmp4) {
        const obj2 = { label: "Build override: ", value: tmp4 };
        tmp7 = jsx(DevToolsContent.DevToolsContentSubLabel, { label: "Build override: ", value: tmp4 });
      }
      cResult[0] = tmp4;
      cResult[1] = tmp7;
      let tmp5 = tmp7;
    } else {
      tmp5 = cResult[1];
    }
    return tmp5;
  }) : (function useBuildOverrideActiveDescription() {
    const tmp = closure_4();
    let tmp2;
    if (null != tmp) {
      const obj = { label: "Build override: ", value: tmp };
      tmp2 = jsx(DevToolsContent.DevToolsContentSubLabel, { label: "Build override: ", value: tmp });
    }
    return tmp2;
  }),
  usePredicate: tmp2,
  onPress: function handleBuildOverrideActivePress() {
    DevToolsNavigator.navigateToDevTools({ screenKey: "buildOverride" });
  },
  withArrow: true
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/BuildOverrideActiveSetting.tsx");

export default pressable;