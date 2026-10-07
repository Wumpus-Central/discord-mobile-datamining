// discord_app/modules/poggermode/trackPoggermodeSettingsUpdated.tsx
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import PoggermodeConstants from "PoggermodeConstants.tsx";
import apply from "../../../_runtime/metro/00012__.js";
import size from "../../../_runtime/metro/00002__.js";

function getScreenshakeLocationName(arg0) {
  if (constants.CHAT_INPUT === arg0) {
    return "chat_input";
  } else if (constants.MENTION === arg0) {
    return "mention";
  } else if (constants.VOICE_USER === arg0) {
    return "voice_user";
  }
}
function getConfettiLocationName(arg0) {
  if (constants2.CHAT_INPUT === arg0) {
    return "chat_input";
  } else if (constants2.MEMBER_USER === arg0) {
    return "member_user";
  } else if (constants2.REACTION === arg0) {
    return "reaction";
  } else if (constants2.CALL_TILE === arg0) {
    return "call_tile";
  }
}
({ ShakeLocation: c2, ConfettiLocation: c3 } = PoggermodeConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/poggermode/trackPoggermodeSettingsUpdated.tsx");

export default apply.throttle((arg0) => {
  ({
    enabled,
    combosEnabled,
    combosRequiredCount,
    screenshakeEnabled,
    shakeIntensity,
    screenshakeEnabledLocations,
    confettiEnabled,
    confettiSize,
    confettiCount,
    confettiEnabledLocations,
  } = arg0);
  const obj2 = {
    enabled,
    combos_enabled: combosEnabled,
    combos_required_count: combosRequiredCount,
    screenshake_enabled: screenshakeEnabled,
    shake_intensity: shakeIntensity,
    screenshake_enabled_locations: null,
    confetti_enabled: null,
    confetti_size: null,
    confetti_count: null,
    confetti_enabled_locations: null,
  };
  const entries = Object.entries(screenshakeEnabledLocations);
  const found = entries.filter((item) => {
    [, tmp] = item;
    return tmp;
  });
  obj2.screenshake_enabled_locations = found.map((item) => {
    [tmp] = item;
    return closure_0(Number.parseInt(tmp));
  });
  obj2.confetti_enabled = confettiEnabled;
  obj2.confetti_size = confettiSize;
  obj2.confetti_count = confettiCount;
  closure_0 = getConfettiLocationName;
  const entries1 = Object.entries(confettiEnabledLocations);
  const found1 = entries1.filter((item) => {
    [, tmp] = item;
    return tmp;
  });
  obj2.confetti_enabled_locations = found1.map((item) => {
    [tmp] = item;
    return closure_0(Number.parseInt(tmp));
  });
  AnalyticsUtilsDefault.track(AnalyticEvents.POGGERMODE_SETTINGS_UPDATED, obj2);
}, 5000);
