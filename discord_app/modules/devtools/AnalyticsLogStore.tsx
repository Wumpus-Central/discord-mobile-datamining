import { v1 } from "../../../_runtime/00514_v1.js";
import { extractId } from "../../../discord_common/js/packages/fingerprint-utils/FingerprintUtils.tsx";
// discord_app/modules/devtools/AnalyticsLogStore.tsx
import fetchFingerprint from "fetchFingerprint";
import init from "init";
import { Store } from "initialize";

const require = arg1;
let c4 = 0;
let closure_5 = [];
let c6 = 0;
let closure_7 = [];
let c8 = false;
class AnalyticsLogStore extends Store {
}
const prototype = AnalyticsLogStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(fetchFingerprint, init);
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
const analyticsLogStore = new AnalyticsLogStore(require("dispatcher"), {
  TRACK: function handleTrack(fingerprint) {
    fingerprint = fingerprint.fingerprint;
    if (init.isDeveloper) {
      const obj = { key: null, event: null, properties: null, fingerprint: null, timestamp: null };
      let closure_4 = str + 1;
      obj[0] = +closure_4.toString();
      obj[1] = tmp;
      obj[2] = tmp2;
      if (null != fingerprint) {
        let extractIdResult = extractId /* extractId */.extractId(fingerprint);
        const obj2 = extractId /* extractId */;
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
    let _location;
    let descriptor;
    let excluded;
    let experimentId;
    let exposureType;
    let previouslyTracked;
    let isDeveloper = init.isDeveloper;
    ({ experimentId, descriptor, exposureType, excluded, location: _location, previouslyTracked } = arg0);
    if (isDeveloper) {
      isDeveloper = c8;
    }
    if (isDeveloper) {
      const items = [];
      const obj = { key: null, experimentId: null, descriptor: null, exposureType: null, excluded: null, location: null, previouslyTracked: null, timestamp: null };
      const arraySpreadResult = HermesBuiltin.arraySpread(items, 0);
      obj[0] = v1 /* v1 */.v4();
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
      const obj2 = v1 /* v1 */;
    }
    if (isDeveloper) {
      items.shift();
    }
  },
  SET_TRACK_TRIGGERS: function handleSetTrackTriggers(enabled) {
    enabled = enabled.enabled;
  },
  ANALYTICS_LOG_CLEAR: function handleAnalyticsLogClear() {
    let closure_5 = [];
    closure_6 = closure_6 + 1;
    let closure_7 = [];
  }
});
const result = require("extractId").fileFinishedImporting("modules/devtools/AnalyticsLogStore.tsx");

export default analyticsLogStore;