// === Module 14672: toggle ===

// Module 14672 (toggle)
import initialize from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useIsMobileVisualRefreshExperimentEnabled from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import "createToggle";

require = fn;
const name = require("useIsMobileVisualRefreshExperimentEnabled").MobileVisualRefreshExperiment.definition.name;
let createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.s3amTp);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["6e1ir2"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.APPEARANCE,
  usePredicate: function useIsInDTesterExperimentVariant() {
    const items = [closure_3, closure_4];
    return initialize.useStateFromStores(items, () => {
      serverAssignment = serverAssignment.getServerAssignment("user", id.getId(), closure_5);
      let tmp2 = null != serverAssignment;
      if (tmp2) {
        tmp2 = 3 === serverAssignment.variantId;
      }
      return tmp2;
    });
  },
  useValue: function useIsRefreshEnabled() {
    const MobileVisualRefreshExperiment = useIsMobileVisualRefreshExperimentEnabled.MobileVisualRefreshExperiment;
    return MobileVisualRefreshExperiment.useConfig({ location: "SettingsAppearance" }).enabled;
  },
  onValueChange: function onToggleRefresh(arg0) {
    const dispatch = dispatcherDefault.dispatch;
    if (arg0) {
      let obj = { type: "APEX_EXPERIMENT_OVERRIDE_DELETE", experimentName: null };
      obj[1] = name;
      dispatch(obj);
    } else {
      obj = { type: "APEX_EXPERIMENT_OVERRIDE_CREATE", experimentName: null, variantId: 0 };
      obj[1] = name;
      dispatch(obj);
    }
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/MobileVisualRefreshSetting.tsx");

export default createToggle;