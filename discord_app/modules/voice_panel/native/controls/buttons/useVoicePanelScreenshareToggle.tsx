// === Module 19796: useVoicePanelScreenshareToggle ===

// Module 19796 (useVoicePanelScreenshareToggle)
import util from "util" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import useAlertStore from "useAlertStore" /* 6207 */;
import VoicePanelVideoGuardErrorAlert from "VoicePanelVideoGuardErrorAlert" /* 15523 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;
const VoicePanelVideoGuardErrorAlertDefault = VoicePanelVideoGuardErrorAlert;

require = fn;
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/useVoicePanelScreenshareToggle.tsx");

export default function useVoicePanelScreenshareToggle(arg0, location, source) {
  _require = source;
  const tmp = isActive(isFeatureEnabled[3])(arg0);
  isActive = tmp.isActive;
  isFeatureEnabled = tmp.isFeatureEnabled;
  const onPress = tmp.onPress;
  const VideoGuardExperiment = require("VideoGuardExperiment").VideoGuardExperiment;
  const tmp2 = !VideoGuardExperiment.useConfig({ location }).videoEnabled;
  closure_4 = tmp2;
  items = [isActive, isFeatureEnabled, onPress, source, tmp2];
  return {
    isActive,
    isFeatureEnabled,
    videoBlocked: tmp2,
    text: tmp.text,
    onPress: onPress.useCallback(() => {
      if (closure_4) {
        const obj2 = { title: null };
        const obj3 = useAlertStore;
        const intl = util.intl;
        obj2.title = intl.string(util.t.GFr0GR);
        obj3.openAlert(VoicePanelVideoGuardErrorAlert.VOICE_PANEL_VIDEO_GUARD_ERROR_KEY, jsx(VoicePanelVideoGuardErrorAlertDefault, { title: null }));
      } else if (isFeatureEnabled) {
        const obj4 = { source, was_active: isActive };
        AnalyticsUtilsDefault.track(AnalyticEvents.VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED, obj4);
        onPress();
      }
    }, items)
  };
};