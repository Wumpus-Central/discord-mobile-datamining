import initialize from "initialize";
import fetchFingerprint from "fetchFingerprint";
import createToggle from "createToggle";

const require = arg1;
const name = require("useIsMobileVisualRefreshExperimentEnabled").MobileVisualRefreshExperiment.definition.name;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.s3amTp);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["6e1ir2"]);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  usePredicate: function useIsInDTesterExperimentVariant() {
    const items = [initialize, fetchFingerprint];
    return require(589) /* initialize */.useStateFromStores(items, () => {
      serverAssignment = serverAssignment.getServerAssignment("user", id.getId(), closure_5);
      let tmp2 = null != serverAssignment;
      if (tmp2) {
        tmp2 = 3 === serverAssignment.variantId;
      }
      return tmp2;
    });
  },
  useValue: function useIsRefreshEnabled() {
    const MobileVisualRefreshExperiment = require(1348) /* useIsMobileVisualRefreshExperimentEnabled */.MobileVisualRefreshExperiment;
    return MobileVisualRefreshExperiment.useConfig({ location: "SettingsAppearance" }).enabled;
  },
  onValueChange: function onToggleRefresh(arg0) {
    const dispatch = importDefault(709).dispatch;
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
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/MobileVisualRefreshSetting.tsx");

export default createToggle;