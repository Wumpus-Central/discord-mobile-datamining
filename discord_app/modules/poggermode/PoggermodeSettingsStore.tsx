// discord_app/modules/poggermode/PoggermodeSettingsStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import PoggermodeConstants from "PoggermodeConstants.tsx";
import 00012__ from "../../../_runtime/metro/00012__.js";
import size from "../../../_runtime/metro/00002__.js";

let ConfettiLocation;
let ShakeLocation;
({ ShakeLocation, ConfettiLocation } = PoggermodeConstants);
let c0 = false;
let initialState = { settingsVisible: false, enabled: false, combosEnabled: true, combosRequiredCount: 5, comboSoundsEnabled: true, screenshakeEnabled: true, screenshakeEnabledLocations: { [ShakeLocation.CHAT_INPUT]: true, [ShakeLocation.VOICE_USER]: false, [ShakeLocation.MENTION]: false }, shakeIntensity: 1, confettiEnabled: true, confettiEnabledLocations: { [ConfettiLocation.CHAT_INPUT]: true, [ConfettiLocation.REACTION]: true, [ConfettiLocation.MEMBER_USER]: true, [ConfettiLocation.CALL_TILE]: true }, confettiSize: 16, confettiCount: 5, warningSeen: false };
initialState = module_12.cloneDeep(initialState);
const DeviceSettingsStore = get_initializedDefault.DeviceSettingsStore;
class PoggermodeSettingsStore extends DeviceSettingsStore {
  initialize(arg0) {
    const obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(arg0);
  }
  getUserAgnosticState() {
    return obj;
  }
  isEnabled() {
    let confettiLocation;
    let shakeLocation;
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    ({ confettiLocation, shakeLocation } = obj);
    let tmp = null == confettiLocation;
    if (!tmp) {
      const confettiEnabled = obj.confettiEnabled && obj.confettiEnabledLocations[confettiLocation];
      tmp = confettiEnabled;
    }
    let tmp4 = null == shakeLocation;
    if (!tmp4) {
      const screenshakeEnabled = obj.screenshakeEnabled && obj.screenshakeEnabledLocations[shakeLocation];
      tmp4 = screenshakeEnabled;
    }
    const enabled = this.settingsVisible && !c0 && obj.enabled && tmp && tmp4;
    return enabled;
  }
}
const prototype = PoggermodeSettingsStore.prototype;
Object.defineProperty(prototype, "settingsVisible", {
  get: function settingsVisible() {
    return obj.settingsVisible;
  },
  set: undefined
});
Object.defineProperty(prototype, "shakeIntensity", {
  get: function shakeIntensity() {
    let num = 0;
    if (this.isEnabled()) {
      num = obj.shakeIntensity;
    }
    return num;
  },
  set: undefined
});
Object.defineProperty(prototype, "combosRequiredCount", {
  get: function combosRequiredCount() {
    let num = 0;
    if (this.isEnabled()) {
      num = obj.combosRequiredCount;
    }
    return num;
  },
  set: undefined
});
Object.defineProperty(prototype, "screenshakeEnabled", {
  get: function screenshakeEnabled() {
    return obj.screenshakeEnabled;
  },
  set: undefined
});
Object.defineProperty(prototype, "screenshakeEnabledLocations", {
  get: function screenshakeEnabledLocations() {
    return obj.screenshakeEnabledLocations;
  },
  set: undefined
});
Object.defineProperty(prototype, "combosEnabled", {
  get: function combosEnabled() {
    return obj.combosEnabled;
  },
  set: undefined
});
Object.defineProperty(prototype, "comboSoundsEnabled", {
  get: function comboSoundsEnabled() {
    return obj.comboSoundsEnabled;
  },
  set: undefined
});
PoggermodeSettingsStore.displayName = "PoggermodeSettingsStore";
PoggermodeSettingsStore.persistKey = "PoggermodeSettingsStore";
const obj2 = {
  POGGERMODE_SETTINGS_UPDATE: function handlePoggermodeSettingsUpdate(settings) {
    settings = settings.settings;
    const obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(settings);
  },
  POGGERMODE_TEMPORARILY_DISABLED: function handlePoggermodeTemporarilyDisabled() {
    c0 = true;
  }
};
const poggermodeSettingsStore = new PoggermodeSettingsStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/poggermode/PoggermodeSettingsStore.tsx");

export default poggermodeSettingsStore;
export { initialState };