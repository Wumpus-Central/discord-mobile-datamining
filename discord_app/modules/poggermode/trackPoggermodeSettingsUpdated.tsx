// === Module 7833: trackPoggermodeSettingsUpdated ===

// Module 7833 (trackPoggermodeSettingsUpdated)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import PoggermodeConstants from "PoggermodeConstants" /* 7679 */;
import apply from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

function getScreenshakeLocationName(arg0) {
  if (constants.CHAT_INPUT === arg0) {
    return "chat_input";
  } else if (tmp.MENTION === arg0) {
    return "mention";
  } else if (tmp.VOICE_USER === arg0) {
    return "voice_user";
  }
}
function getConfettiLocationName(arg0) {
  if (constants2.CHAT_INPUT === arg0) {
    return "chat_input";
  } else if (tmp.MEMBER_USER === arg0) {
    return "member_user";
  } else if (tmp.REACTION === arg0) {
    return "reaction";
  } else if (tmp.CALL_TILE === arg0) {
    return "call_tile";
  }
}
({ ShakeLocation: c2, ConfettiLocation: c3 } = PoggermodeConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/poggermode/trackPoggermodeSettingsUpdated.tsx");

export default apply.throttle((arg0) => {
  ({ enabled, combosEnabled, combosRequiredCount, screenshakeEnabled, shakeIntensity, screenshakeEnabledLocations, confettiEnabled, confettiSize, confettiCount, confettiEnabledLocations } = arg0);
  const obj = { enabled, combos_enabled: combosEnabled, combos_required_count: combosRequiredCount, screenshake_enabled: screenshakeEnabled, shake_intensity: shakeIntensity, screenshake_enabled_locations: null, confetti_enabled: null, confetti_size: null, confetti_count: null, confetti_enabled_locations: null };
  const entries = Object.entries(screenshakeEnabledLocations);
  const found = entries.filter((item) => {
    [, tmp] = item;
    return tmp;
  });
  obj.screenshake_enabled_locations = found.map((item) => {
    [tmp] = item;
    return closure_0(Number.parseInt(tmp));
  });
  obj.confetti_enabled = confettiEnabled;
  obj.confetti_size = confettiSize;
  obj.confetti_count = confettiCount;
  closure_0 = getConfettiLocationName;
  const entries1 = Object.entries(confettiEnabledLocations);
  const found1 = entries1.filter((item) => {
    [, tmp] = item;
    return tmp;
  });
  obj.confetti_enabled_locations = found1.map((item) => {
    [tmp] = item;
    return closure_0(Number.parseInt(tmp));
  });
  obj.track(AnalyticEvents.POGGERMODE_SETTINGS_UPDATED, obj);
}, 5000);