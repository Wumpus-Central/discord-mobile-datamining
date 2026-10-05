// discord_app/modules/devtools/AnalyticsLogStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import FingerprintUtils from "../../../discord_common/js/packages/fingerprint-utils/FingerprintUtils.tsx";
import v1 from "../../../_runtime/01266_v1.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import DeveloperExperimentStore from "../../stores/DeveloperExperimentStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_4 = 0;
let closure_5 = [];
let closure_6 = 0;
let closure_7 = [];
let enabled = false;
const Store = get_initializedDefault.Store;
class AnalyticsLogStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, DeveloperExperimentStore);
  }
}
const prototype = AnalyticsLogStore.prototype;
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
let obj = {
  TRACK: function handleTrack(fingerprint) {
    let date;
    let extractIdResult;
    fingerprint = fingerprint.fingerprint;
    if (DeveloperExperimentStore.isDeveloper) {
      const obj = {
        key: (+closure_4).toString(),
        event: tmp,
        properties: tmp2,
        fingerprint: extractIdResult,
        timestamp: date,
      };
      closure_4 = str + 1;
      const push = closure_5.push;
      if (null != fingerprint) {
        const obj2 = FingerprintUtils;
        extractIdResult = obj2.extractId(fingerprint);
      } else {
        extractIdResult = AuthenticationStore.getId();
      }
      const _Date = Date;
      const self = this;
      const self2 = this;
      date = new Date();
      push(obj);
      closure_6 = closure_6 + 1;
      if (closure_5.length > 500) {
        const _Math = Math;
        closure_5 = closure_5.slice(-Math.floor(250));
      }
    }
  },
  TRACK_TRIGGER: function handleTrackTrigger(arg0) {
    let _location;
    let date;
    let descriptor;
    let excluded;
    let experimentId;
    let exposureType;
    let obj2;
    let previouslyTracked;
    let isDeveloper = DeveloperExperimentStore.isDeveloper;
    ({ experimentId, descriptor, exposureType, excluded, location: _location, previouslyTracked } = arg0);
    if (isDeveloper) {
      isDeveloper = enabled;
    }
    if (isDeveloper) {
      const items = [];
      const obj = {
        key: obj2.v4(),
        experimentId,
        descriptor,
        exposureType,
        excluded,
        location: _location,
        previouslyTracked,
        timestamp: date,
      };
      const arraySpreadResult = HermesBuiltin.arraySpread(items, closure_7, 0);
      const _Date = Date;
      const self = this;
      const self2 = this;
      obj2 = v1;
      items[arraySpreadResult] = obj;
      closure_7 = items;
      isDeveloper = items.length > 500;
      date = new Date();
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
};
const analyticsLogStore = new AnalyticsLogStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/devtools/AnalyticsLogStore.tsx");

export default analyticsLogStore;
