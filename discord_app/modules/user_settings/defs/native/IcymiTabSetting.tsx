// === Module 15811: IcymiTabSetting ===

// Module 15811 (IcymiTabSetting)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8471 */;
import ICYMIExperiment from "ICYMIExperiment" /* 8472 */;
import useLabFeatureDefault from "useLabFeature" /* 8475 */;
import LabFeatureActions from "LabFeatureActions" /* 15812 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
let ReactCompilerGating = ReactCompilerGating_mod;
function useICYMISettingValue() {
  return useLabFeatureDefault(ICYMIExperiment.ICYMI_LAB_FEATURE);
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useICYMIPredicate() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "settings" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const ICYMIStaffOnlyExperiment = ICYMIExperiment.ICYMIStaffOnlyExperiment;
  return ICYMIStaffOnlyExperiment.useConfig(first).enabled;
}) : (function useICYMIPredicate() {
  const ICYMIStaffOnlyExperiment = ICYMIExperiment.ICYMIStaffOnlyExperiment;
  return ICYMIStaffOnlyExperiment.useConfig({ location: "settings" }).enabled;
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.D4clKq);
  },
  parent: SettingsConstants.MobileUserSettings.ADVANCED,
  useValue: useICYMISettingValue,
  onValueChange: function onICYMISettingValueChange(enabled) {
    let str = "show";
    if (enabled) {
      str = "hide";
    }
    ICYMIActionCreatorsDefault.itemInteracted(str, "icymi_tab_toggle", "press");
    ICYMIActionCreatorsDefault.feedPageActioned({ actionParameters: { actionGestureType: "press", actionTargetElement: "icymi_tab_toggle", actionIntentType: "configure", actionDestinationType: null } });
    const tmpResult = ICYMIActionCreatorsDefault;
    LabFeatureActions.toggleLabFeature(ICYMIExperiment.ICYMI_LAB_FEATURE, { enabled });
    const obj2 = { enabled };
  },
  usePredicate: ReactCompilerGating.isReactCompilerEnabled() ? (function useICYMIPredicate() {
    const cResult = c.c(1);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { location: "settings" };
      cResult[0] = obj2;
      let first = obj2;
    } else {
      first = cResult[0];
    }
    const ICYMIStaffOnlyExperiment = ICYMIExperiment.ICYMIStaffOnlyExperiment;
    return ICYMIStaffOnlyExperiment.useConfig(first).enabled;
  }) : (function useICYMIPredicate() {
    const ICYMIStaffOnlyExperiment = ICYMIExperiment.ICYMIStaffOnlyExperiment;
    return ICYMIStaffOnlyExperiment.useConfig({ location: "settings" }).enabled;
  })
});
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/IcymiTabSetting.tsx");

export default toggle;