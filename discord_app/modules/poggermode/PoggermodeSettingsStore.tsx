// discord_app/modules/poggermode/PoggermodeSettingsStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import PoggermodeConstants from "PoggermodeConstants.tsx";
import apply from "../../../_runtime/metro/00012__.js";
import size from "../../../_runtime/metro/00002__.js";

({ ShakeLocation, ConfettiLocation } = PoggermodeConstants);
let c0 = false;
let initialState = {
  settingsVisible: false,
  enabled: false,
  combosEnabled: true,
  combosRequiredCount: 5,
  comboSoundsEnabled: true,
  screenshakeEnabled: true,
  screenshakeEnabledLocations: {
    [ShakeLocation.CHAT_INPUT]: true,
    [ShakeLocation.VOICE_USER]: false,
    [ShakeLocation.MENTION]: false,
  },
  shakeIntensity: 1,
  confettiEnabled: true,
  confettiEnabledLocations: {
    [ConfettiLocation.CHAT_INPUT]: true,
    [ConfettiLocation.REACTION]: true,
    [ConfettiLocation.MEMBER_USER]: true,
    [ConfettiLocation.CALL_TILE]: true,
  },
  confettiSize: 16,
  confettiCount: 5,
  warningSeen: false,
};
initialState = apply.cloneDeep(initialState);
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class PoggermodeSettingsStore extends DeviceSettingsStore {}
const prototype = PoggermodeSettingsStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  const obj = {};
  const merged = Object.assign(obj);
  const merged1 = Object.assign(arg0);
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return obj;
};
Object.defineProperty(prototype, "settingsVisible", {
  get: function settingsVisible() {
    return obj.settingsVisible;
  },
  set: undefined,
});
prototype["isEnabled"] = function isEnabled() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ confettiLocation, shakeLocation } = obj);
  let tmp = null == confettiLocation;
  if (!tmp) {
    let confettiEnabled = obj.confettiEnabled;
    if (confettiEnabled) {
      confettiEnabled = obj.confettiEnabledLocations[confettiLocation];
    }
    tmp = confettiEnabled;
  }
  let tmp4 = null == shakeLocation;
  if (!tmp4) {
    let screenshakeEnabled = obj.screenshakeEnabled;
    if (screenshakeEnabled) {
      screenshakeEnabled = obj.screenshakeEnabledLocations[shakeLocation];
    }
    tmp4 = screenshakeEnabled;
  }
  let enabled = this.settingsVisible;
  if (enabled) {
    enabled = !c0;
  }
  if (enabled) {
    enabled = obj.enabled;
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
      num = obj.shakeIntensity;
    }
    return num;
  },
  set: undefined,
});
Object.defineProperty(prototype, "combosRequiredCount", {
  get: function combosRequiredCount() {
    let num = 0;
    if (this.isEnabled()) {
      num = obj.combosRequiredCount;
    }
    return num;
  },
  set: undefined,
});
Object.defineProperty(prototype, "screenshakeEnabled", {
  get: function screenshakeEnabled() {
    return obj.screenshakeEnabled;
  },
  set: undefined,
});
Object.defineProperty(prototype, "screenshakeEnabledLocations", {
  get: function screenshakeEnabledLocations() {
    return obj.screenshakeEnabledLocations;
  },
  set: undefined,
});
Object.defineProperty(prototype, "combosEnabled", {
  get: function combosEnabled() {
    return obj.combosEnabled;
  },
  set: undefined,
});
Object.defineProperty(prototype, "comboSoundsEnabled", {
  get: function comboSoundsEnabled() {
    return obj.comboSoundsEnabled;
  },
  set: undefined,
});
PoggermodeSettingsStore.displayName = "PoggermodeSettingsStore";
PoggermodeSettingsStore.persistKey = "PoggermodeSettingsStore";
initialState = {
  POGGERMODE_SETTINGS_UPDATE: function handlePoggermodeSettingsUpdate(settings) {
    const obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(settings.settings);
  },
  POGGERMODE_TEMPORARILY_DISABLED: function handlePoggermodeTemporarilyDisabled() {
    c0 = true;
  },
};
const poggermodeSettingsStore = new PoggermodeSettingsStore(DispatcherDefault, initialState);
const result = size.fileFinishedImporting("modules/poggermode/PoggermodeSettingsStore.tsx");

export default poggermodeSettingsStore;
export { initialState };
