// === Module 7283: initialize ===

// Module 7283 (initialize)
import set from "set" /* 2 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import ConfettiLocation from "ConfettiLocation" /* 7284 */;
import apply from "apply" /* 12 */;

({ ShakeLocation, ConfettiLocation } = ConfettiLocation);
let c0 = false;
let obj = { settingsVisible: false, enabled: false, combosEnabled: true, combosRequiredCount: 5, comboSoundsEnabled: true, screenshakeEnabled: true, screenshakeEnabledLocations: { [ShakeLocation.CHAT_INPUT]: true, [ShakeLocation.VOICE_USER]: false, [ShakeLocation.MENTION]: false }, shakeIntensity: 1, confettiEnabled: true, confettiEnabledLocations: { [ConfettiLocation.CHAT_INPUT]: true, [ConfettiLocation.REACTION]: true, [ConfettiLocation.MEMBER_USER]: true, [ConfettiLocation.CALL_TILE]: true }, confettiSize: 16, confettiCount: 5, warningSeen: false };
let closure_1 = apply.cloneDeep(obj);
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class PoggermodeSettingsStore extends DeviceSettingsStore {
}
const prototype = PoggermodeSettingsStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  const obj = {};
  const merged = Object.assign(obj);
  const merged1 = Object.assign(arg0);
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return closure_1;
};
Object.defineProperty(prototype, "settingsVisible", {
  get: function settingsVisible() {
    return closure_1.settingsVisible;
  },
  set: undefined
});
prototype["isEnabled"] = function isEnabled() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ confettiLocation, shakeLocation } = obj);
  let tmp = null == confettiLocation;
  if (!tmp) {
    let confettiEnabled = closure_1.confettiEnabled;
    if (confettiEnabled) {
      confettiEnabled = closure_1.confettiEnabledLocations[confettiLocation];
    }
    tmp = confettiEnabled;
  }
  let tmp4 = null == shakeLocation;
  if (!tmp4) {
    let screenshakeEnabled = closure_1.screenshakeEnabled;
    if (screenshakeEnabled) {
      screenshakeEnabled = closure_1.screenshakeEnabledLocations[shakeLocation];
    }
    tmp4 = screenshakeEnabled;
  }
  let enabled = this.settingsVisible;
  if (enabled) {
    enabled = !c0;
  }
  if (enabled) {
    enabled = closure_1.enabled;
  }
  if (enabled) {
    enabled = tmp;
  }
  if (enabled) {
    enabled = tmp4;
  }
  return enabled;
};
Object.defineProperty(prototype, "shakeIntensity", {
  get: function shakeIntensity() {
    let num = 0;
    if (this.isEnabled()) {
      num = closure_1.shakeIntensity;
    }
    return num;
  },
  set: undefined
});
Object.defineProperty(prototype, "combosRequiredCount", {
  get: function combosRequiredCount() {
    let num = 0;
    if (this.isEnabled()) {
      num = closure_1.combosRequiredCount;
    }
    return num;
  },
  set: undefined
});
Object.defineProperty(prototype, "screenshakeEnabled", {
  get: function screenshakeEnabled() {
    return closure_1.screenshakeEnabled;
  },
  set: undefined
});
Object.defineProperty(prototype, "screenshakeEnabledLocations", {
  get: function screenshakeEnabledLocations() {
    return closure_1.screenshakeEnabledLocations;
  },
  set: undefined
});
Object.defineProperty(prototype, "combosEnabled", {
  get: function combosEnabled() {
    return closure_1.combosEnabled;
  },
  set: undefined
});
Object.defineProperty(prototype, "comboSoundsEnabled", {
  get: function comboSoundsEnabled() {
    return closure_1.comboSoundsEnabled;
  },
  set: undefined
});
PoggermodeSettingsStore.displayName = "PoggermodeSettingsStore";
PoggermodeSettingsStore.persistKey = "PoggermodeSettingsStore";
obj = {
  POGGERMODE_SETTINGS_UPDATE: function handlePoggermodeSettingsUpdate(settings) {
    const obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(settings.settings);
  },
  POGGERMODE_TEMPORARILY_DISABLED: function handlePoggermodeTemporarilyDisabled() {
    c0 = true;
  }
};
const poggermodeSettingsStore = new PoggermodeSettingsStore(dispatcherDefault, obj);
const result = set.fileFinishedImporting("modules/poggermode/PoggermodeSettingsStore.tsx");

export default poggermodeSettingsStore;
export const initialState = obj;