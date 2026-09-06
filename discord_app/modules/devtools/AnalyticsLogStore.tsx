// discord_app/modules/devtools/AnalyticsLogStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import FingerprintUtils from "../../../discord_common/js/packages/fingerprint-utils/FingerprintUtils.tsx";
import v1 from "../../../_runtime/01256_v1.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import DeveloperExperimentStore from "../../stores/DeveloperExperimentStore.tsx";

require = fn;
let closure_4 = 0;
let closure_5 = [];
let closure_6 = 0;
let closure_7 = [];
let enabled = false;
const Store = initializeDefault.Store;
class AnalyticsLogStore extends Store {}
const prototype = AnalyticsLogStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore, DeveloperExperimentStore);
};
Object.defineProperty(prototype, "loggedEvents", {
  get: function loggedEvents() {
    return closure_5;
  },
  set: undefined,
});
Object.defineProperty(prototype, "loggedEventsVersion", {
  get: function loggedEventsVersion() {
    return closure_6;
  },
  set: undefined,
});
Object.defineProperty(prototype, "loggedTriggers", {
  get: function loggedTriggers() {
    return closure_7;
  },
  set: undefined,
});
Object.defineProperty(prototype, "trackTriggers", {
  get: function trackTriggers() {
    return enabled;
  },
  set: undefined,
});
AnalyticsLogStore.displayName = "AnalyticsLogStore";
const analyticsLogStore = new AnalyticsLogStore(DispatcherDefault, {
  TRACK: function handleTrack(fingerprint) {
    fingerprint = fingerprint.fingerprint;
    if (DeveloperExperimentStore.isDeveloper) {
      const obj = { key: null, event: null, properties: null, fingerprint: null, timestamp: null };
      closure_4 = str + 1;
      obj.key = +closure_4.toString();
      obj.event = tmp;
      obj.properties = tmp2;
      if (null != fingerprint) {
        let extractIdResult = FingerprintUtils.extractId(fingerprint);
      } else {
        extractIdResult = AuthenticationStore.getId();
      }
      obj.fingerprint = extractIdResult;
      const _Date = Date;
      const date = new Date();
      obj.timestamp = date;
      closure_5.push(obj);
      closure_6 = closure_6 + 1;
      if (closure_5.length > 500) {
        const _Math = Math;
        closure_5 = closure_5.slice(-Math.floor(250));
      }
    }
  },
  TRACK_TRIGGER: function handleTrackTrigger(arg0) {
    let isDeveloper = DeveloperExperimentStore.isDeveloper;
    ({ experimentId, descriptor, exposureType, excluded, location: _location, previouslyTracked } = arg0);
    if (isDeveloper) {
      isDeveloper = enabled;
    }
    if (isDeveloper) {
      const items = [];
      const obj = {
        key: null,
        experimentId: null,
        descriptor: null,
        exposureType: null,
        excluded: null,
        location: null,
        previouslyTracked: null,
        timestamp: null,
      };
      const arraySpreadResult = HermesBuiltin.arraySpread(closure_7, 0);
      obj.key = v1.v4();
      obj.experimentId = experimentId;
      obj.descriptor = descriptor;
      obj.exposureType = exposureType;
      obj.excluded = excluded;
      obj.location = _location;
      obj.previouslyTracked = previouslyTracked;
      const _Date = Date;
      const date = new Date();
      obj.timestamp = date;
      items[arraySpreadResult] = obj;
      closure_7 = items;
      isDeveloper = items.length > 500;
    }
    if (isDeveloper) {
      closure_7.shift();
    }
  },
  SET_TRACK_TRIGGERS: function handleSetTrackTriggers(enabled) {
    enabled = enabled.enabled;
  },
  ANALYTICS_LOG_CLEAR: function handleAnalyticsLogClear() {
    closure_5 = [];
    closure_6 = closure_6 + 1;
    closure_7 = [];
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/AnalyticsLogStore.tsx");

export default analyticsLogStore;
