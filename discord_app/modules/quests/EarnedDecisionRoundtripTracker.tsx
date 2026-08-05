// discord_app/modules/quests/EarnedDecisionRoundtripTracker.tsx
import handleConnectionInfoChange from "handleConnectionInfoChange";
import { AnalyticEvents } from "ME";
import set from "receiveNetworkInfoformation";
import { expandEventProperties } from "../../utils/AnalyticsUtils.tsx";
import { isForegrounded } from "../analytics_sessions/SessionForegroundUtils.native.tsx";
import { getDeviceMetadata } from "../device/getDeviceMetadata.native.tsx";
import { receiveNetworkInfoformation } from "../network/NetStats.android.tsx";

const require = arg1;
function trackRoundtrip(apiResponseTimestamp) {
  if (Math.random() <= 0.1) {
    let diff = null;
    if (null != apiResponseTimestamp.apiResponseTimestamp) {
      diff = apiResponseTimestamp.apiResponseTimestamp - apiResponseTimestamp.initialSendTimestamp;
    }
    let obj = receiveNetworkInfoformation;
    const signalStrength = obj.getSignalStrength();
    obj = {};
    const merged = Object.assign(getDeviceMetadata());
    ({ endpoint: obj3.endpoint, wasSuccessful: obj3.was_successful } = apiResponseTimestamp);
    obj.api_latency_ms = diff;
    obj.mobile_network_type = type.getType();
    let tmp10 = null != signalStrength;
    if (tmp10) {
      obj = { mobile_signal_strength_level: null };
      obj[0] = signalStrength;
      tmp10 = obj;
    }
    const merged1 = Object.assign(tmp10);
    ({ callerSource: obj3.caller_source, requestId: obj3.request_id, fetchedAt: obj3.fetched_at } = apiResponseTimestamp);
    const obj2 = expandEventProperties;
    const tmp2 = require;
    obj.is_foregrounded = isForegrounded.isForegrounded();
    obj2.track(AnalyticEvents.EARNED_DECISION_ROUNDTRIP, obj);
    const tmp2Result = isForegrounded;
  }
}
class EarnedDecisionRoundtripTracker {
  constructor() {
    obj = Object.create(new.target.prototype);
    map = new Map();
    obj[0] = map;
    return obj;
  }
}
const prototype = EarnedDecisionRoundtripTracker.prototype;
prototype["recordEarnedRequestAttempt"] = function recordEarnedRequestAttempt(arg0, callerSource) {
  const self = this;
  let closure_0 = arg0;
  let pendingRequests = this.pendingRequests;
  const result = pendingRequests.set(arg0, { initialSendTimestamp: Date.now(), endpoint: "/quests/earned-decision", apiResponseTimestamp: null, wasSuccessful: false, callerSource, requestId: null, fetchedAt: null });
  const timerId = setTimeout(() => {
    const pendingRequests = self.pendingRequests;
    const value = pendingRequests.get(closure_0);
    if (null != value) {
      outer1_5(value);
      const pendingRequests2 = self.pendingRequests;
      pendingRequests2.delete(closure_0);
    }
  }, 30000);
};
prototype["recordEarnedRequestApiResponse"] = function recordEarnedRequestApiResponse(closure_0, requestId) {
  requestId = requestId.requestId;
  if (requestId === undefined) {
    requestId = null;
  }
  let fetchedAt = requestId.fetchedAt;
  if (fetchedAt === undefined) {
    fetchedAt = null;
  }
  const pendingRequests = this.pendingRequests;
  const value = pendingRequests.get(closure_0);
  if (null != value) {
    const obj = {};
    const merged = Object.assign(value);
    const _Date = Date;
    obj.apiResponseTimestamp = Date.now();
    obj.wasSuccessful = requestId.wasSuccessful;
    obj.requestId = requestId;
    obj.fetchedAt = fetchedAt;
    trackRoundtrip(obj);
    const pendingRequests2 = this.pendingRequests;
    pendingRequests2.delete(closure_0);
  }
};
let set = Object.create(EarnedDecisionRoundtripTracker.prototype);
set[0] = new Map();
let result = set.fileFinishedImporting("modules/quests/EarnedDecisionRoundtripTracker.tsx");

export default set;