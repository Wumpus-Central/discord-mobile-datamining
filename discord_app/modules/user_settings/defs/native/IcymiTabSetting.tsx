// === Module 17809: IcymiTabSetting ===

// Module 17809 (IcymiTabSetting)
import util from "util" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8578 */;
import useLabFeatureDefault from "useLabFeature" /* 8710 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 9070 */;
import ICYMIExperiment from "ICYMIExperiment" /* 9074 */;
import LabFeatureActions from "LabFeatureActions" /* 17810 */;
import SettingBuilders from "SettingBuilders" /* 11737 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.D4clKq);
  },
  parent: SettingsConstants.MobileUserSettings.ADVANCED,
  useValue: function useICYMISettingValue() {
    return useLabFeatureDefault(ICYMIExperiment.ICYMI_LAB_FEATURE);
  },
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
  usePredicate: function useLegacyICYMITabSettingVisible() {
    return false;
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/IcymiTabSetting.tsx");

export default toggle;