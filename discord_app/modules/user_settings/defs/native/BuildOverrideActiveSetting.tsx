// discord_app/modules/user_settings/defs/native/BuildOverrideActiveSetting.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../../_runtime/00576_react.js";
import build_overrides_BuildOverrideUtils from "../../../build_overrides/native/BuildOverrideUtils.tsx";
import DevToolsNavigator from "../../../devtools/native/components/DevToolsNavigator.tsx";
import useIsStaffOrDeveloperSettingPredicate from "../../dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx";
import RefreshIcon from "../../../../design/components/Icon/native/redesign/generated/RefreshIcon.tsx";
import DevToolsContent from "../../../devtools/native/components/DevToolsContent.tsx";
import BuildOverrideStore from "../../../build_overrides/BuildOverrideStore.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let currentBuildOverride;
      let tmp4;
      let tmp5;
      const obj = react;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [BuildOverrideStore];
        const fn = function l() {
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
      const tmpResult = get_initialized;
      return tmpResult.useStateFromStores(tmp4, tmp5);
    }
  : () => {
      let currentBuildOverride;
      const items = [BuildOverrideStore];
      const obj = get_initialized;
      return obj.useStateFromStores(items, () => {
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
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = useIsStaffOrDeveloperSettingPredicate;
      const staffOrDeveloperSettingPredicate = obj.useStaffOrDeveloperSettingPredicate();
      const tmp2 = null != closure_4() && staffOrDeveloperSettingPredicate;
      return tmp2;
    }
  : () => {
      const obj = useIsStaffOrDeveloperSettingPredicate;
      const staffOrDeveloperSettingPredicate = obj.useStaffOrDeveloperSettingPredicate();
      const tmp2 = null != closure_4() && staffOrDeveloperSettingPredicate;
      return tmp2;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp5;
      const obj = react;
      const cResult = obj.c(2);
      const tmp4 = closure_4();
      if (cResult[0] !== tmp4) {
        let tmp7;
        if (null != tmp4) {
          tmp7 = jsx(DevToolsContent.DevToolsContentSubLabel, { label: "Build override: ", value: tmp4 });
        }
        cResult[0] = tmp4;
        cResult[1] = tmp7;
        tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : () => {
      const tmp = closure_4();
      let tmp2;
      if (null != tmp) {
        tmp2 = jsx(DevToolsContent.DevToolsContentSubLabel, { label: "Build override: ", value: tmp });
      }
      return tmp2;
    };
let obj = {
  useTitle() {
    return "Build Override Active";
  },
  parent: null,
  IconComponent: RefreshIcon.RefreshIcon,
  useDescription: tmp3,
  usePredicate: tmp2,
  onPress: function handleBuildOverrideActivePress() {
    const obj = DevToolsNavigator;
    obj.navigateToDevTools({ screenKey: "buildOverride" });
  },
  withArrow: true,
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/BuildOverrideActiveSetting.tsx");

export default pressable;
