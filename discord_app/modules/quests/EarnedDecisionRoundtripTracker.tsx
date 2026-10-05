// === Module 10016: EarnedDecisionRoundtripTracker ===

// Module 10016 (EarnedDecisionRoundtripTracker)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import NetStats from "NetStats" /* 6968 */;
import react_native from "react-native" /* 6971 */;
import getDeviceMetadataDefault from "getDeviceMetadata" /* 7161 */;
import NetworkStore from "NetworkStore" /* 4939 */;
import size from "module_2" /* 2 */;

function trackRoundtrip(apiResponseTimestamp) {
  let tmp2Result;
  if (Math.random() <= 0.1) {
    let diff = null;
    if (null != apiResponseTimestamp.apiResponseTimestamp) {
      diff = apiResponseTimestamp.apiResponseTimestamp - apiResponseTimestamp.initialSendTimestamp;
    }
    const obj = NetStats;
    const signalStrength = obj.getSignalStrength();
    const obj3 = { api_latency_ms: diff, mobile_network_type: NetworkStore.getType(), is_foregrounded: tmp2Result.isForegrounded() };
    const track = AnalyticsUtilsDefault.track;
    const EARNED_DECISION_ROUNDTRIP = AnalyticEvents.EARNED_DECISION_ROUNDTRIP;
    AnalyticsUtilsDefault;
    const merged = Object.assign(getDeviceMetadataDefault());
    ({ endpoint: obj2.endpoint, wasSuccessful: obj2.was_successful } = apiResponseTimestamp);
    let tmp11 = null != signalStrength;
    if (tmp11) {
      tmp11 = { mobile_signal_strength_level: signalStrength };
      const obj4 = { mobile_signal_strength_level: signalStrength };
    }
    const merged1 = Object.assign(tmp11);
    ({ callerSource: obj2.caller_source, requestId: obj2.request_id, fetchedAt: obj2.fetched_at } = apiResponseTimestamp);
    tmp2Result = react_native;
    track(EARNED_DECISION_ROUNDTRIP, obj3);
  }
}
const AnalyticEvents = Constants.AnalyticEvents;
class EarnedDecisionRoundtripTracker {
  constructor() {
    const merged = Object.assign({ pendingRequests: null });
    merged[0] = new Map();
    new Map();
    return merged;
  }
  recordEarnedRequestAttempt(content, callerSource) {
    const self = this;
    let closure_0 = content;
    let pendingRequests = this.pendingRequests;
    const obj = { initialSendTimestamp: Date.now(), endpoint: "/quests/earned-decision", apiResponseTimestamp: null, wasSuccessful: false, callerSource, requestId: null, fetchedAt: null };
    const result = pendingRequests.set(content, obj);
    const timerId = setTimeout(() => {
      const pendingRequests = self.pendingRequests;
      const value = pendingRequests.get(content);
      if (null != value) {
        trackRoundtrip(value);
        const pendingRequests2 = self.pendingRequests;
        pendingRequests2.delete(content);
      }
    }, 30000);
  }
  recordEarnedRequestApiResponse(get, requestId) {
    requestId = requestId.requestId;
    const wasSuccessful = requestId.wasSuccessful;
    if (requestId === undefined) {
      requestId = null;
    }
    let fetchedAt = requestId.fetchedAt;
    if (fetchedAt === undefined) {
      fetchedAt = null;
    }
    const pendingRequests = this.pendingRequests;
    const value = pendingRequests.get(get);
    if (null != value) {
      const obj = { apiResponseTimestamp: Date.now(), wasSuccessful, requestId, fetchedAt };
      const merged = Object.assign(value);
      const _Date = Date;
      trackRoundtrip(obj);
      const pendingRequests2 = this.pendingRequests;
      pendingRequests2.delete(get);
    }
  }
}
const prototype = EarnedDecisionRoundtripTracker.prototype;
let merged = Object.assign({ pendingRequests: null });
const map = new Map();
merged[0] = map;
let result = size.fileFinishedImporting("modules/quests/EarnedDecisionRoundtripTracker.tsx");

export default merged;