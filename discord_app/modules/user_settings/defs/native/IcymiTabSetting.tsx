// discord_app/modules/user_settings/defs/native/IcymiTabSetting.tsx
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.D4clKq);
  },
  parent: require("MobileSetting").MobileSetting.ADVANCED,
  useValue: function useICYMISettingValue() {
    return require("../../../labs/useLabFeature.tsx")(require("../../../icymi/ICYMIExperiment.tsx") /* apexExperiment */.ICYMI_LAB_FEATURE);
  },
  onValueChange: function onICYMISettingValueChange(enabled) {
    let obj = require("../../../icymi/ICYMIActionCreators.tsx");
    let str = "show";
    if (enabled) {
      str = "hide";
    }
    obj.itemInteracted(str, "icymi_tab_toggle", "press");
    require("../../../icymi/ICYMIActionCreators.tsx").feedPageActioned({ actionParameters: { actionGestureType: "press", actionTargetElement: "icymi_tab_toggle", actionIntentType: "configure", actionDestinationType: null } });
    const tmp = importDefault;
    const tmpResult = require("../../../icymi/ICYMIActionCreators.tsx");
    obj = { enabled };
    require("../../../labs/LabFeatureActions.tsx") /* toggleLabFeature */.toggleLabFeature(require("../../../icymi/ICYMIExperiment.tsx") /* apexExperiment */.ICYMI_LAB_FEATURE, obj);
  },
  usePredicate: function useICYMIPredicate() {
    const ICYMIStaffOnlyExperiment = require("../../../icymi/ICYMIExperiment.tsx") /* apexExperiment */.ICYMIStaffOnlyExperiment;
    return ICYMIStaffOnlyExperiment.useConfig({ location: "settings" }).enabled;
  }
});
let obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.D4clKq);
  },
  parent: require("MobileSetting").MobileSetting.ADVANCED,
  useValue: function useICYMISettingValue() {
    return require("../../../labs/useLabFeature.tsx")(require("../../../icymi/ICYMIExperiment.tsx") /* apexExperiment */.ICYMI_LAB_FEATURE);
  },
  onValueChange: function onICYMISettingValueChange(enabled) {
    let obj = require("../../../icymi/ICYMIActionCreators.tsx");
    let str = "show";
    if (enabled) {
      str = "hide";
    }
    obj.itemInteracted(str, "icymi_tab_toggle", "press");
    require("../../../icymi/ICYMIActionCreators.tsx").feedPageActioned({ actionParameters: { actionGestureType: "press", actionTargetElement: "icymi_tab_toggle", actionIntentType: "configure", actionDestinationType: null } });
    const tmp = importDefault;
    const tmpResult = require("../../../icymi/ICYMIActionCreators.tsx");
    obj = { enabled };
    require("../../../labs/LabFeatureActions.tsx") /* toggleLabFeature */.toggleLabFeature(require("../../../icymi/ICYMIExperiment.tsx") /* apexExperiment */.ICYMI_LAB_FEATURE, obj);
  },
  usePredicate: function useICYMIPredicate() {
    const ICYMIStaffOnlyExperiment = require("../../../icymi/ICYMIExperiment.tsx") /* apexExperiment */.ICYMIStaffOnlyExperiment;
    return ICYMIStaffOnlyExperiment.useConfig({ location: "settings" }).enabled;
  }
};
const result = require("apexExperiment").fileFinishedImporting("modules/user_settings/defs/native/IcymiTabSetting.tsx");

export default toggle;