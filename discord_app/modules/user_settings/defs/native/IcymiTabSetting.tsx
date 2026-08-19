// === Module 14842: toggle ===

// Module 14842 (toggle)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import _modDef9057 from "module_9057" /* 9057 */;
import apexExperiment from "apexExperiment" /* 9058 */;
import useLabFeatureDefault from "useLabFeature" /* 9061 */;
import toggleLabFeature from "toggleLabFeature" /* 14843 */;
import createToggle from "createToggle" /* 10669 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.D4clKq);
  },
  parent: MobileUserSettings.MobileUserSettings.ADVANCED,
  useValue: function useICYMISettingValue() {
    return useLabFeatureDefault(apexExperiment.ICYMI_LAB_FEATURE);
  },
  onValueChange: function onICYMISettingValueChange(enabled) {
    let obj = _modDef9057;
    let str = "show";
    if (enabled) {
      str = "hide";
    }
    obj.itemInteracted(str, "icymi_tab_toggle", "press");
    _modDef9057.feedPageActioned({ actionParameters: { actionGestureType: "press", actionTargetElement: "icymi_tab_toggle", actionIntentType: "configure", actionDestinationType: null } });
    const tmpResult = _modDef9057;
    obj = { enabled };
    toggleLabFeature.toggleLabFeature(apexExperiment.ICYMI_LAB_FEATURE, obj);
  },
  usePredicate: function useICYMIPredicate() {
    const ICYMIStaffOnlyExperiment = apexExperiment.ICYMIStaffOnlyExperiment;
    return ICYMIStaffOnlyExperiment.useConfig({ location: "settings" }).enabled;
  }
});
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/IcymiTabSetting.tsx");

export default toggle;