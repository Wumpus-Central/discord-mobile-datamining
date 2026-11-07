// discord_app/modules/voice_panel/native/controls/buttons/useVoicePanelScreenshareToggle.tsx
import util from "../../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import useAlertStore from "../../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import VoicePanelVideoGuardErrorAlert from "../../alerts/VoicePanelVideoGuardErrorAlert.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;
const VoicePanelVideoGuardErrorAlertDefault = VoicePanelVideoGuardErrorAlert;

require = fn;
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/voice_panel/native/controls/buttons/useVoicePanelScreenshareToggle.tsx",
);

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
        obj3.openAlert(
          VoicePanelVideoGuardErrorAlert.VOICE_PANEL_VIDEO_GUARD_ERROR_KEY,
          jsx(VoicePanelVideoGuardErrorAlertDefault, { title: null }),
        );
      } else if (isFeatureEnabled) {
        const obj4 = { source, was_active: isActive };
        AnalyticsUtilsDefault.track(AnalyticEvents.VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED, obj4);
        onPress();
      }
    }, items),
  };
}
