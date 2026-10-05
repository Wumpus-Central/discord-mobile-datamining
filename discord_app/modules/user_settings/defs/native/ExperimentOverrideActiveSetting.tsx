// discord_app/modules/user_settings/defs/native/ExperimentOverrideActiveSetting.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../../_runtime/00576_react.js";
import DevToolsNavigator from "../../../devtools/native/components/DevToolsNavigator.tsx";
import useIsStaffOrDeveloperSettingPredicate from "../../dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx";
import BeakerIcon from "../../../../design/components/Icon/native/redesign/generated/BeakerIcon.tsx";
import DevToolsContent from "../../../devtools/native/components/DevToolsContent.tsx";
import ExperimentStore from "../../../experiments/ExperimentStore.tsx";
import ApexExperimentStore from "../../../experiments/apex/ApexExperimentStore.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let allExperimentOverrideDescriptors;
      let clientOverrides;
      let tmp4;
      let tmp5;
      let tmp8;
      let tmp9;
      const obj = react;
      const cResult = obj.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ExperimentStore];
        const fn = function o() {
          return Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ApexExperimentStore];
        const fn2 = function u() {
          return Object.keys(clientOverrides.getClientOverrides()).length;
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        tmp9 = fn2;
        tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult2 = get_initialized;
      return stateFromStores + tmpResult2.useStateFromStores(tmp8, tmp9);
    }
  : () => {
      let allExperimentOverrideDescriptors;
      let clientOverrides;
      const items = [ExperimentStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(
        items,
        () => Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length,
      );
      const items1 = [ApexExperimentStore];
      const obj2 = get_initialized;
      return (
        stateFromStores +
        obj2.useStateFromStores(items1, () => Object.keys(clientOverrides.getClientOverrides()).length)
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      let tmp6;
      const obj = react;
      const cResult = obj.c(4);
      const str = closure_5();
      if (cResult[0] !== str) {
        const str1 = str.toString();
        cResult[0] = str;
        cResult[1] = str1;
        tmp4 = str1;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== tmp4) {
        const tmp8 = jsx(DevToolsContent.DevToolsContentSubLabel, { label: "Experiments overridden: ", value: tmp4 });
        cResult[2] = tmp4;
        cResult[3] = tmp8;
        tmp6 = tmp8;
      } else {
        tmp6 = cResult[3];
      }
      return tmp6;
    }
  : () => {
      const str = closure_5();
      const DevToolsContentSubLabel = DevToolsContent.DevToolsContentSubLabel;
      return <DevToolsContentSubLabel label="Experiments overridden: " value={str.toString()} />;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = useIsStaffOrDeveloperSettingPredicate;
      const staffOrDeveloperSettingPredicate = obj.useStaffOrDeveloperSettingPredicate();
      const tmp2 = closure_5() > 0 && staffOrDeveloperSettingPredicate;
      return tmp2;
    }
  : () => {
      const obj = useIsStaffOrDeveloperSettingPredicate;
      const staffOrDeveloperSettingPredicate = obj.useStaffOrDeveloperSettingPredicate();
      const tmp2 = closure_5() > 0 && staffOrDeveloperSettingPredicate;
      return tmp2;
    };
let obj = {
  useTitle() {
    return "Experiments Overrides Active";
  },
  parent: null,
  IconComponent: BeakerIcon.BeakerIcon,
  useDescription: tmp2,
  usePredicate: tmp3,
  onPress: function handleExperimentOverrideActivePress() {
    const obj = DevToolsNavigator;
    obj.navigateToDevTools({ screenKey: "experiments" });
  },
  withArrow: true,
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ExperimentOverrideActiveSetting.tsx");

export default pressable;
