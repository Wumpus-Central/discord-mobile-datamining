// discord_app/modules/user_settings/defs/native/IcymiTabSetting.tsx
import util from "../../../../intl/index.native.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import ICYMIActionCreatorsDefault from "../../../icymi/ICYMIActionCreators.tsx";
import ICYMIExperiment from "../../../icymi/ICYMIExperiment.tsx";
import useLabFeatureDefault from "../../../labs/useLabFeature.tsx";
import LabFeatureActions from "../../../labs/LabFeatureActions.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
    ICYMIActionCreatorsDefault.feedPageActioned({
      actionParameters: {
        actionGestureType: "press",
        actionTargetElement: "icymi_tab_toggle",
        actionIntentType: "configure",
        actionDestinationType: null,
      },
    });
    const tmpResult = ICYMIActionCreatorsDefault;
    obj = { enabled };
    LabFeatureActions.toggleLabFeature(ICYMIExperiment.ICYMI_LAB_FEATURE, obj);
  },
  usePredicate: function useICYMIPredicate() {
    const ICYMIStaffOnlyExperiment = ICYMIExperiment.ICYMIStaffOnlyExperiment;
    return ICYMIStaffOnlyExperiment.useConfig({ location: "settings" }).enabled;
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/IcymiTabSetting.tsx");

export default toggle;
