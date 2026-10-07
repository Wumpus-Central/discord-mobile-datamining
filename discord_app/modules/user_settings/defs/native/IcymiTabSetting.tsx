// discord_app/modules/user_settings/defs/native/IcymiTabSetting.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import ICYMIActionCreatorsDefault from "../../../icymi/ICYMIActionCreators.tsx";
import ICYMIExperiment from "../../../icymi/ICYMIExperiment.tsx";
import useLabFeatureDefault from "../../../labs/useLabFeature.tsx";
import LabFeatureActions from "../../../labs/LabFeatureActions.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
let ReactCompilerGating = ReactCompilerGating_mod;
const fn = () => useLabFeatureDefault(ICYMIExperiment.ICYMI_LAB_FEATURE);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
    }
  : () => {
      const ICYMIStaffOnlyExperiment = ICYMIExperiment.ICYMIStaffOnlyExperiment;
      return ICYMIStaffOnlyExperiment.useConfig({ location: "settings" }).enabled;
    };
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.D4clKq);
  },
  parent: SettingsConstants.MobileUserSettings.ADVANCED,
  useValue: fn,
  onValueChange: function onICYMISettingValueChange(enabled) {
    let str = "show";
    if (enabled) {
      str = "hide";
    }
    ICYMIActionCreatorsDefault.itemInteracted(str, "icymi_tab_toggle", "press");
    ICYMIActionCreatorsDefault.feedPageActioned({
      actionParameters: {
        actionGestureType: "press",
        actionTargetElement: "icymi_tab_toggle",
        actionIntentType: "configure",
        actionDestinationType: null,
      },
    });
    const tmpResult = ICYMIActionCreatorsDefault;
    LabFeatureActions.toggleLabFeature(ICYMIExperiment.ICYMI_LAB_FEATURE, { enabled });
    const obj2 = { enabled };
  },
  usePredicate: ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
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
      }
    : () => {
        const ICYMIStaffOnlyExperiment = ICYMIExperiment.ICYMIStaffOnlyExperiment;
        return ICYMIStaffOnlyExperiment.useConfig({ location: "settings" }).enabled;
      },
});
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/IcymiTabSetting.tsx");

export default toggle;
