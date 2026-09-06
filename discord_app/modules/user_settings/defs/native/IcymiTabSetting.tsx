// === Module 15532: IcymiTabSetting ===

// Module 15532 (IcymiTabSetting)
import util from "util" /* 1114 */;
import SettingsConstants from "SettingsConstants" /* 7975 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8351 */;
import ICYMIExperiment from "ICYMIExperiment" /* 8352 */;
import useLabFeatureDefault from "useLabFeature" /* 8355 */;
import LabFeatureActions from "LabFeatureActions" /* 15533 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
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
    let obj = ICYMIActionCreatorsDefault;
    let str = "show";
    if (enabled) {
      str = "hide";
    }
    obj.itemInteracted(str, "icymi_tab_toggle", "press");
    ICYMIActionCreatorsDefault.feedPageActioned({ actionParameters: { actionGestureType: "press", actionTargetElement: "icymi_tab_toggle", actionIntentType: "configure", actionDestinationType: null } });
    const tmpResult = ICYMIActionCreatorsDefault;
    obj = { enabled };
    LabFeatureActions.toggleLabFeature(ICYMIExperiment.ICYMI_LAB_FEATURE, obj);
  },
  usePredicate: function useICYMIPredicate() {
    const ICYMIStaffOnlyExperiment = ICYMIExperiment.ICYMIStaffOnlyExperiment;
    return ICYMIStaffOnlyExperiment.useConfig({ location: "settings" }).enabled;
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/IcymiTabSetting.tsx");

export default toggle;