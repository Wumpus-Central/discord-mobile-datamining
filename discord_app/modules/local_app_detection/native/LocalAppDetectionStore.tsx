// === Module 13711: LocalAppDetectionStore ===

// Module 13711 (LocalAppDetectionStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import LocalAppDetectionTypes from "LocalAppDetectionTypes" /* 13712 */;
import LocalAppDetectionUtils from "LocalAppDetectionUtils" /* 13713 */;
import _slicedToArray from "module_32" /* 32 */;
import ConsentStore from "ConsentStore" /* 6595 */;

require = fn;
const Consents = fn(1074).Consents;
let closure_6 = { detected: false, lastScannedAt: "PX_16" };
let closure_7 = { apps: {} };
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class LocalAppDetectionStore extends DeviceSettingsStore {
  constructor() {
    closure_0 = undefined;
    obj = {
      POST_CONNECTION_OPEN() {
            return closure_0.handlePostConnectionOpen();
          },
      LOCAL_APP_DETECTION_COMPLETE(arg0) {
            return closure_0.handleLocalAppDetectionComplete(arg0);
          }
    };
    tmp2 = new tmp2(closure_1(closure_2[4]), obj, new.target, tmp2, tmp, new.target);
    closure_0 = tmp2;
    return tmp2;
  }
}
const prototype = LocalAppDetectionStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = closure_7;
  }
  closure_7 = tmp;
  this.waitFor(ConsentStore);
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return closure_7;
};
prototype["getAppState"] = function getAppState(nextResult) {
  let tmp = this.getUserAgnosticState().apps[nextResult];
  if (tmp == null) {
    tmp = closure_6;
  }
  return tmp;
};
prototype["isAppInstalled"] = function isAppInstalled(nextResult) {
  let detected = ConsentStore.hasConsented(Consents.PERSONALIZATION);
  if (detected) {
    const self = this;
    detected = this.getAppState(nextResult).detected;
  }
  return detected;
};
prototype["handlePostConnectionOpen"] = function handlePostConnectionOpen() {
  const self = this;
  const items = [];
  const iter = LocalAppDetectionTypes.ALL_DETECTABLE_APP_NAMES[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let appState = self.getAppState(nextResult);
    let tmp5 = null == appState.lastScannedAt;
    if (!tmp5) {
      let _Date = Date;
      tmp5 = Date.now() - tmp4.lastScannedAt > 86400000;
    }
    if (tmp5) {
      let arr = items.push(tmp2);
    }
    continue;
  }
  if (items.length > 0) {
    LocalAppDetectionUtils.detectLocalApps(items);
  }
};
prototype["handleLocalAppDetectionComplete"] = function handleLocalAppDetectionComplete(result) {
  const entries = Object.entries(result.result);
  if (0 === entries.length) {
    return false;
  } else {
    const _Date = Date;
    let obj = {};
    const timestamp = Date.now();
    const merged = Object.assign(closure_7);
    const tmp6 = entries[Symbol.iterator]();
    while (tmp6 !== undefined) {
      let tmp11 = _slicedToArray(tmp8, 2);
      obj = { detected: tmp11[1], lastScannedAt: timestamp };
      obj.apps[tmp11[0]] = obj;
      continue;
    }
    closure_7 = obj;
  }
};
class DEV_resetState {
  constructor() {
    closure_7 = { apps: {} };
    return;
  }
}
prototype["DEV_resetState"] = DEV_resetState;
LocalAppDetectionStore.displayName = "AppDetectionStore";
LocalAppDetectionStore.persistKey = "AppDetectionStore";
const object = new Object(DispatcherDefault, {
  POST_CONNECTION_OPEN() {
    return closure_0.handlePostConnectionOpen();
  },
  LOCAL_APP_DETECTION_COMPLETE(arg0) {
    return closure_0.handleLocalAppDetectionComplete(arg0);
  }
}, tmp, LocalAppDetectionStore, Object, prototype, new.target, undefined, DEV_resetState);
let closure_129_0 = object;
const size = fn(2);
const result = size.fileFinishedImporting("modules/local_app_detection/native/LocalAppDetectionStore.tsx");

export default object;