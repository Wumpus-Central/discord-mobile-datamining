// discord_app/modules/user_settings/defs/native/IcymiTabSetting.tsx
import react from "../../../../../_runtime/00576_react.js";
import intl2 from "../../../../intl/index.native.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import ICYMIActionCreatorsDefault from "../../../icymi/ICYMIActionCreators.tsx";
import ICYMIExperiment from "../../../icymi/ICYMIExperiment.tsx";
import useLabFeatureDefault from "../../../labs/useLabFeature.tsx";
import LabFeatureActions from "../../../labs/LabFeatureActions.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      const obj = react;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { location: "settings" };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      const ICYMIStaffOnlyExperiment = ICYMIExperiment.ICYMIStaffOnlyExperiment;
      return ICYMIStaffOnlyExperiment.useConfig(first).enabled;
    }
  : () => {
      const ICYMIStaffOnlyExperiment = ICYMIExperiment.ICYMIStaffOnlyExperiment;
      return ICYMIStaffOnlyExperiment.useConfig({ location: "settings" }).enabled;
    };
const fn = () => {
  const tmp = useLabFeatureDefault;
  return tmp(ICYMIExperiment.ICYMI_LAB_FEATURE);
};
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.D4clKq);
  },
  parent: MobileUserSettings.ADVANCED,
  useValue: fn,
  onValueChange: function onICYMISettingValueChange(enabled) {
    let str = "show";
    const itemInteracted = ICYMIActionCreatorsDefault.itemInteracted;
    ICYMIActionCreatorsDefault;
    if (enabled) {
      str = "hide";
    }
    itemInteracted(str, "icymi_tab_toggle", "press");
    const tmpResult = ICYMIActionCreatorsDefault;
    tmpResult.feedPageActioned({
      actionParameters: {
        actionGestureType: "press",
        actionTargetElement: "icymi_tab_toggle",
        actionIntentType: "configure",
        actionDestinationType: null,
      },
    });
    const obj = { enabled };
    const obj2 = LabFeatureActions;
    obj2.toggleLabFeature(ICYMIExperiment.ICYMI_LAB_FEATURE, obj);
  },
  usePredicate: tmp3,
};
const toggle = SettingBuilders.createToggle(obj);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/IcymiTabSetting.tsx");

export default toggle;
