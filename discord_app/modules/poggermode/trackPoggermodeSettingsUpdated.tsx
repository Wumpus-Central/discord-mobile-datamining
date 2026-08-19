// discord_app/modules/poggermode/trackPoggermodeSettingsUpdated.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import ME from "../../Constants.tsx";
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import ConfettiLocation from "PoggermodeConstants.tsx";
import importDefaultResult from "../../../_runtime/00012_apply.js";

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
({ ShakeLocation: obj1, ConfettiLocation: c3 } = ConfettiLocation);
const AnalyticEvents = ME.AnalyticEvents;
const throttleResult = importDefaultResult.throttle((arg0) => {
  ({ enabled, combosEnabled, combosRequiredCount, screenshakeEnabled, shakeIntensity, screenshakeEnabledLocations, confettiEnabled, confettiSize, confettiCount, confettiEnabledLocations } = arg0);
  const obj = { enabled, combos_enabled: combosEnabled, combos_required_count: combosRequiredCount, screenshake_enabled: screenshakeEnabled, shake_intensity: shakeIntensity, screenshake_enabled_locations: null, confetti_enabled: null, confetti_size: null, confetti_count: null, confetti_enabled_locations: null };
  const entries = Object.entries(screenshakeEnabledLocations);
  const found = entries.filter((item, index) => {
    [, tmp] = item;
    return tmp;
  });
  obj[5] = found.map((item, index) => {
    [tmp] = item;
    return callback(Number.parseInt(tmp));
  });
  obj[6] = confettiEnabled;
  obj[7] = confettiSize;
  obj[8] = confettiCount;
  importDefault = getConfettiLocationName;
  const entries1 = Object.entries(confettiEnabledLocations);
  const found1 = entries1.filter((item, index) => {
    [, tmp] = item;
    return tmp;
  });
  obj[9] = found1.map((item, index) => {
    [tmp] = item;
    return callback(Number.parseInt(tmp));
  });
  obj.track(AnalyticEvents.POGGERMODE_SETTINGS_UPDATED, obj);
}, 5000);
const result = obj132.fileFinishedImporting("modules/poggermode/trackPoggermodeSettingsUpdated.tsx");

export default throttleResult;