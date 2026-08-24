// === Module 13774: initialize ===

// Module 13774 (initialize)
import extractId from "extractId" /* 513 */;
import v1 from "v1" /* 514 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_2 from "fetchFingerprint" /* 1218 */;
import closure_3 from "init" /* 7472 */;

require = arg1;
let c4 = 0;
let closure_5 = [];
let c6 = 0;
let closure_7 = [];
let c8 = false;
const Store = initializeDefault.Store;
class AnalyticsLogStore extends Store {
}
const prototype = AnalyticsLogStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_2, closure_3);
};
Object.defineProperty(prototype, "loggedEvents", {
  get: function loggedEvents() {
    return closure_5;
  },
  set: undefined
});
Object.defineProperty(prototype, "loggedEventsVersion", {
  get: function loggedEventsVersion() {
    return c6;
  },
  set: undefined
});
Object.defineProperty(prototype, "loggedTriggers", {
  get: function loggedTriggers() {
    return closure_7;
  },
  set: undefined
});
Object.defineProperty(prototype, "trackTriggers", {
  get: function trackTriggers() {
    return c8;
  },
  set: undefined
});
AnalyticsLogStore.displayName = "AnalyticsLogStore";
const analyticsLogStore = new AnalyticsLogStore(dispatcherDefault, {
  TRACK: function handleTrack(fingerprint) {
    fingerprint = fingerprint.fingerprint;
    if (closure_3.isDeveloper) {
      const obj = { key: null, event: null, properties: null, fingerprint: null, timestamp: null };
      closure_4 = str + 1;
      obj[0] = +closure_4.toString();
      obj[1] = tmp;
      obj[2] = tmp2;
      if (null != fingerprint) {
        let extractIdResult = extractId.extractId(fingerprint);
        const obj2 = extractId;
      } else {
        extractIdResult = id.getId();
      }
      obj[3] = extractIdResult;
      const _Date = Date;
      const date = new Date();
      obj[4] = date;
      arr = arr.push(obj);
      closure_6 = closure_6 + 1;
      if (arr.length > 500) {
        const _Math = Math;
        arr = arr.slice(-Math.floor(250));
      }
    }
  },
  TRACK_TRIGGER: function handleTrackTrigger(arg0) {
    let isDeveloper = closure_3.isDeveloper;
    ({ experimentId, descriptor, exposureType, excluded, location: _location, previouslyTracked } = arg0);
    if (isDeveloper) {
      isDeveloper = c8;
    }
    if (isDeveloper) {
      const items = [];
      const obj = { key: null, experimentId: null, descriptor: null, exposureType: null, excluded: null, location: null, previouslyTracked: null, timestamp: null };
      const arraySpreadResult = HermesBuiltin.arraySpread(items, 0);
      obj[0] = v1.v4();
      obj[1] = experimentId;
      obj[2] = descriptor;
      obj[3] = exposureType;
      obj[4] = excluded;
      obj[5] = _location;
      obj[6] = previouslyTracked;
      const _Date = Date;
      const date = new Date();
      obj[7] = date;
      items[arraySpreadResult] = obj;
      isDeveloper = items.length > 500;
      const obj2 = v1;
    }
    if (isDeveloper) {
      items.shift();
    }
  },
  SET_TRACK_TRIGGERS: function handleSetTrackTriggers(enabled) {
    enabled = enabled.enabled;
  },
  ANALYTICS_LOG_CLEAR: function handleAnalyticsLogClear() {
    closure_5 = [];
    closure_6 = closure_6 + 1;
    closure_7 = [];
  }
});
const result = require("set").fileFinishedImporting("modules/devtools/AnalyticsLogStore.tsx");

export default analyticsLogStore;