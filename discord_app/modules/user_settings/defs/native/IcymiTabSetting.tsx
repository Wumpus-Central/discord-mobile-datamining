// === Module 15059: IcymiTabSetting ===

// Module 15059 (IcymiTabSetting)
import util from "util" /* 1115 */;
import SettingsConstants from "SettingsConstants" /* 7412 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 7791 */;
import ICYMIExperiment from "ICYMIExperiment" /* 7792 */;
import useLabFeatureDefault from "useLabFeature" /* 7795 */;
import LabFeatureActions from "LabFeatureActions" /* 15060 */;
import SettingBuilders from "SettingBuilders" /* 10993 */;
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
  usePredicate: function useICYMIPredicate() {
    const ICYMIStaffOnlyExperiment = ICYMIExperiment.ICYMIStaffOnlyExperiment;
    return ICYMIStaffOnlyExperiment.useConfig({ location: "settings" }).enabled;
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/IcymiTabSetting.tsx");

export default toggle;