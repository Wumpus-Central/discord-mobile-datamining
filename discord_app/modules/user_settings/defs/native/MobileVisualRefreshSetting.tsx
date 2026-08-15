// discord_app/modules/user_settings/defs/native/MobileVisualRefreshSetting.tsx
import initialize from "initialize";
import fetchFingerprint from "fetchFingerprint";
import createToggle from "createToggle";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { dispatcher } from "../../../../Dispatcher.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { useIsMobileVisualRefreshExperimentEnabled } from "../../../themes/experiments/MobileVisualRefreshExperiment.tsx";

const require = arg1;
const name = require("useIsMobileVisualRefreshExperimentEnabled").MobileVisualRefreshExperiment.definition.name;
createToggle = {
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
    const items = [initialize, fetchFingerprint];
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
    const dispatch = dispatcher.dispatch;
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
const result = require("MobileUserSettings").fileFinishedImporting("modules/user_settings/defs/native/MobileVisualRefreshSetting.tsx");

export default createToggle;