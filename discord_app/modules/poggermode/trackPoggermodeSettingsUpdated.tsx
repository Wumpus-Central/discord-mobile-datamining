// === Module 7577: getScreenshakeLocationName ===

// Module 7577 (getScreenshakeLocationName)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import ConfettiLocation from "ConfettiLocation" /* 7424 */;
import importDefaultResult from "apply" /* 12 */;

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
({ ShakeLocation: obj1, ConfettiLocation: c3 } = ConfettiLocation);
const AnalyticEvents = ME.AnalyticEvents;
const throttleResult = importDefaultResult.throttle((arg0) => {
  ({ enabled, combosEnabled, combosRequiredCount, screenshakeEnabled, shakeIntensity, screenshakeEnabledLocations, confettiEnabled, confettiSize, confettiCount, confettiEnabledLocations } = arg0);
  let obj = expandEventPropertiesDefault;
  obj = { enabled, combos_enabled: combosEnabled, combos_required_count: combosRequiredCount, screenshake_enabled: screenshakeEnabled, shake_intensity: shakeIntensity, screenshake_enabled_locations: null, confetti_enabled: null, confetti_size: null, confetti_count: null, confetti_enabled_locations: null };
  importDefault = getScreenshakeLocationName;
  const entries = Object.entries(screenshakeEnabledLocations);
  const found = entries.filter((arg0) => {
    [, tmp] = arg0;
    return tmp;
  });
  obj[5] = found.map((arg0) => {
    [tmp] = arg0;
    return callback(Number.parseInt(tmp));
  });
  obj[6] = confettiEnabled;
  obj[7] = confettiSize;
  obj[8] = confettiCount;
  importDefault = getConfettiLocationName;
  const entries1 = Object.entries(confettiEnabledLocations);
  const found1 = entries1.filter((arg0) => {
    [, tmp] = arg0;
    return tmp;
  });
  obj[9] = found1.map((arg0) => {
    [tmp] = arg0;
    return callback(Number.parseInt(tmp));
  });
  obj.track(AnalyticEvents.POGGERMODE_SETTINGS_UPDATED, obj);
}, 5000);
const result = set.fileFinishedImporting("modules/poggermode/trackPoggermodeSettingsUpdated.tsx");

export default throttleResult;