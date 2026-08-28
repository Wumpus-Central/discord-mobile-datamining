// === Module 13296: initialize ===

// Module 13296 (initialize)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "hasConsented" /* 6019 */;
import { Consents } from "ME" /* 676 */;

let object = arg1;
let closure_6 = { detected: false, lastScannedAt: "r" };
let closure_7 = { apps: {} };
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class LocalAppDetectionStore extends DeviceSettingsStore {
  constructor() {
    closure_0 = undefined;
    obj = {
      POST_CONNECTION_OPEN() {
            return obj.handlePostConnectionOpen();
          },
      LOCAL_APP_DETECTION_COMPLETE(arg0) {
            return obj.handleLocalAppDetectionComplete(arg0);
          }
    };
    tmp2 = new tmp2(require("dispatcher"), obj, new.target, tmp2, tmp, new.target);
    // ThrowIfThisInitialized (0x7c)
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
  this.waitFor(closure_4);
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
  let detected = closure_4.hasConsented(Consents.PERSONALIZATION);
  if (detected) {
    const self = this;
    detected = this.getAppState(nextResult).detected;
  }
  return detected;
};
prototype["handlePostConnectionOpen"] = function handlePostConnectionOpen() {
  const self = this;
  const items = [];
  const iter = object(13297).ALL_DETECTABLE_APP_NAMES[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let appState = self.getAppState(nextResult);
    let tmp5 = null == appState.lastScannedAt;
    if (!tmp5) {
      let _Date = Date;
      let tmp6 = appState;
      tmp5 = Date.now() - tmp4.lastScannedAt > 86400000;
    }
    if (tmp5) {
      let tmp7 = nextResult;
      let arr = items.push(tmp2);
    }
    continue;
  }
  if (items.length > 0) {
    object(13298).detectLocalApps(items);
    const obj = object(13298);
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
    const merged = Object.assign(obj);
    const tmp6 = entries[Symbol.iterator]();
    while (tmp6 !== undefined) {
      let tmp10 = callback;
      let tmp11 = callback(tmp8, 2);
      obj = { detected: null, lastScannedAt: null };
      obj[0] = tmp11[1];
      obj[1] = timestamp;
      obj.apps[tmp11[0]] = obj;
      continue;
    }
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
object = undefined;
object = new Object(dispatcherDefault, {
  POST_CONNECTION_OPEN() {
    return obj.handlePostConnectionOpen();
  },
  LOCAL_APP_DETECTION_COMPLETE(arg0) {
    return obj.handleLocalAppDetectionComplete(arg0);
  }
}, tmp, LocalAppDetectionStore, Object, prototype, new.target, undefined, DEV_resetState);
// ThrowIfThisInitialized (0x7c)
const result = require("set").fileFinishedImporting("modules/local_app_detection/native/LocalAppDetectionStore.tsx");

export default object;