// discord_app/modules/user_settings/defs/native/ExperimentOverrideActiveSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import DevToolsNavigator from "../../../devtools/native/components/DevToolsNavigator.tsx";
import useIsStaffOrDeveloperSettingPredicate from "../../dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx";
import DevToolsContent from "../../../devtools/native/components/DevToolsContent.tsx";
import ExperimentStore from "../../../experiments/ExperimentStore.tsx";
import ApexExperimentStore from "../../../experiments/apex/ApexExperimentStore.tsx";

require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(4);
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
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ApexExperimentStore];
        const fn2 = function u() {
          return Object.keys(clientOverrides.getClientOverrides()).length;
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        let tmp9 = fn2;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult = initialize;
      return stateFromStores + initialize.useStateFromStores(tmp8, tmp9);
    }
  : () => {
      const items = [ExperimentStore];
      const stateFromStores = initialize.useStateFromStores(
        items,
        () => Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length,
      );
      const items1 = [ApexExperimentStore];
      return (
        stateFromStores +
        initialize.useStateFromStores(items1, () => Object.keys(clientOverrides.getClientOverrides()).length)
      );
    };
fn(558);
ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(4);
      const str = closure_5();
      if (cResult[0] !== str) {
        const str1 = str.toString();
        cResult[0] = str;
        cResult[1] = str1;
        let tmp4 = str1;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== tmp4) {
        const obj2 = { label: "Experiments overridden: ", value: tmp4 };
        const tmp8 = jsx(DevToolsContent.DevToolsContentSubLabel, { label: "Experiments overridden: ", value: tmp4 });
        cResult[2] = tmp4;
        cResult[3] = tmp8;
        let tmp6 = tmp8;
      } else {
        tmp6 = cResult[3];
      }
      return tmp6;
    }
  : () => {
      const str = closure_5();
      return jsx(DevToolsContent.DevToolsContentSubLabel, {
        label: "Experiments overridden: ",
        value: closure_5().toString(),
      });
    };
const SettingBuilders = fn(11129);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const staffOrDeveloperSettingPredicate =
        useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
      return closure_5() > 0 && staffOrDeveloperSettingPredicate;
    }
  : () => {
      const staffOrDeveloperSettingPredicate =
        useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
      return closure_5() > 0 && staffOrDeveloperSettingPredicate;
    };
const pressable = SettingBuilders.createPressable({
  useTitle() {
    return "Experiments Overrides Active";
  },
  parent: null,
  IconComponent: fn(15413).BeakerIcon,
  useDescription: tmp2,
  usePredicate: ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const staffOrDeveloperSettingPredicate =
          useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
        return closure_5() > 0 && staffOrDeveloperSettingPredicate;
      }
    : () => {
        const staffOrDeveloperSettingPredicate =
          useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
        return closure_5() > 0 && staffOrDeveloperSettingPredicate;
      },
  onPress: function handleExperimentOverrideActivePress() {
    DevToolsNavigator.navigateToDevTools({ screenKey: "experiments" });
  },
  withArrow: true,
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ExperimentOverrideActiveSetting.tsx");

export default pressable;
