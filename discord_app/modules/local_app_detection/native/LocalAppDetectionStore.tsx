// === Module 13524: LocalAppDetectionStore ===

// Module 13524 (LocalAppDetectionStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import LocalAppDetectionTypes from "LocalAppDetectionTypes" /* 13525 */;
import LocalAppDetectionUtils from "LocalAppDetectionUtils" /* 13526 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ConsentStore from "ConsentStore" /* 6084 */;
import size from "module_2" /* 2 */;

let tmp;
const Consents = Constants.Consents;
let closure_6 = { detected: false, lastScannedAt: "a" };
let closure_7 = { apps: {} };
const DeviceSettingsStore = get_initializedDefault.DeviceSettingsStore;
class LocalAppDetectionStore extends DeviceSettingsStore {
  constructor() {
    const obj = {
      POST_CONNECTION_OPEN() {
        return closure_0.handlePostConnectionOpen();
      },
      LOCAL_APP_DETECTION_COMPLETE(result) {
        return closure_0.handleLocalAppDetectionComplete(result);
      }
    };
    const tmp22 = new tmp2(DispatcherDefault, obj, new.target, tmp2, tmp, this);
    let closure_0 = tmp22;
    return tmp22;
  }
  initialize(arg0) {
    let tmp = arg0;
    if (arg0 == null) {
      tmp = closure_7;
    }
    closure_7 = tmp;
    this.waitFor(ConsentStore);
  }
  getUserAgnosticState() {
    return closure_7;
  }
  getAppState(nextResult) {
    let tmp = this.getUserAgnosticState().apps[nextResult];
    if (tmp == null) {
      tmp = closure_6;
    }
    return tmp;
  }
  isAppInstalled(nextResult) {
    let detected = ConsentStore.hasConsented(Consents.PERSONALIZATION);
    if (detected) {
      const self = this;
      detected = this.getAppState(nextResult).detected;
    }
    return detected;
  }
  handlePostConnectionOpen() {
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
      const obj = LocalAppDetectionUtils;
      obj.detectLocalApps(items);
    }
  }
  handleLocalAppDetectionComplete(result) {
    const entries = Object.entries(result.result);
    if (0 === entries.length) {
      return false;
    } else {
      const _Date = Date;
      const obj = {};
      const timestamp = Date.now();
      const merged = Object.assign(closure_7);
      const tmp6 = entries[Symbol.iterator]();
      while (tmp6 !== undefined) {
        let tmp11 = _slicedToArray(tmp8, 2);
        let obj2 = { detected: tmp11[1], lastScannedAt: timestamp };
        obj.apps[tmp11[0]] = obj2;
        continue;
      }
      closure_7 = obj;
    }
  }
}
const prototype = LocalAppDetectionStore.prototype;
class DEV_resetState {
  constructor() {
    closure_7 = { apps: {} };
  }
}
prototype["DEV_resetState"] = DEV_resetState;
LocalAppDetectionStore.displayName = "AppDetectionStore";
LocalAppDetectionStore.persistKey = "AppDetectionStore";
let obj = {
  POST_CONNECTION_OPEN() {
    return closure_0.handlePostConnectionOpen();
  },
  LOCAL_APP_DETECTION_COMPLETE(result) {
    return closure_0.handleLocalAppDetectionComplete(result);
  }
};
const object = new Object(DispatcherDefault, obj, tmp, LocalAppDetectionStore, Object, prototype, this, undefined, DEV_resetState);
const result = size.fileFinishedImporting("modules/local_app_detection/native/LocalAppDetectionStore.tsx");

export default object;