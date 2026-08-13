// discord_app/modules/quests/QuestDecisionRoundtripTracker.tsx
import handleConnectionInfoChange from "handleConnectionInfoChange";
import initializeState from "initializeState";
import { AnalyticEvents } from "ME";
import set from "ME";
import { expandEventProperties } from "../../utils/AnalyticsUtils.tsx";
import { isForegrounded } from "../analytics_sessions/SessionForegroundUtils.native.tsx";
import { getDeviceMetadata } from "../device/getDeviceMetadata.native.tsx";
import { receiveNetworkInfoformation } from "../network/NetStats.android.tsx";

const require = arg1;
function trackRoundtrip(apiResponseTimestamp, transition_case, fetched_at) {
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
    ({ callerSource: obj3.caller_source, adRequestId: obj3.ad_request_id } = apiResponseTimestamp);
    obj.fetched_at = fetched_at;
    const previousAdDecision = apiResponseTimestamp.previousAdDecision;
    let decision_id;
    if (previousAdDecision != null) {
      const adDecisionData = previousAdDecision.adDecisionData;
      if (adDecisionData != null) {
        decision_id = adDecisionData.decision_id;
      }
    }
    if (decision_id == null) {
      decision_id = null;
    }
    obj.previous_ad_request_id = decision_id;
    const previousAdDecision2 = apiResponseTimestamp.previousAdDecision;
    let fetchedAt;
    if (previousAdDecision2 != null) {
      fetchedAt = previousAdDecision2.fetchedAt;
    }
    if (fetchedAt == null) {
      fetchedAt = null;
    }
    obj.previous_fetched_at = fetchedAt;
    obj.transition_case = transition_case;
    const obj2 = expandEventProperties;
    const tmp2 = require;
    obj.is_foregrounded = isForegrounded.isForegrounded();
    obj2.track(AnalyticEvents.QUEST_DECISION_ROUNDTRIP, obj);
    const tmp2Result = isForegrounded;
  }
}
class QuestDecisionRoundtripTracker {
  constructor() {
    obj = Object.create(new.target.prototype);
    map = new Map();
    obj[0] = map;
    return obj;
  }
}
const prototype = QuestDecisionRoundtripTracker.prototype;
prototype["recordQuestRequestAttempt"] = function recordQuestRequestAttempt(endpoint, closure_1, closure_0) {
  const self = this;
  closure_0 = endpoint;
  let tmp = closure_0;
  if (closure_0 === undefined) {
    tmp = null;
  }
  let tmp2 = null;
  if (null != tmp) {
    const questAdDecisionByPlacement = obj.questAdDecisionByPlacement;
    let value = questAdDecisionByPlacement.get(tmp);
    if (value == null) {
      value = null;
    }
    tmp2 = value;
  }
  obj = { initialSendTimestamp: Date.now(), endpoint, apiResponseTimestamp: null, wasSuccessful: false, callerSource: closure_1, adRequestId: null, previousAdDecision: tmp2, placement: tmp };
  let pendingRequests = this.pendingRequests;
  const result = pendingRequests.set(endpoint, obj);
  const timerId = setTimeout(() => {
    const pendingRequests = self.pendingRequests;
    const value = pendingRequests.get(closure_0);
    if (null != value) {
      outer1_6(value, "timeout", null);
      const pendingRequests2 = self.pendingRequests;
      pendingRequests2.delete(closure_0);
    }
  }, 30000);
};
prototype["recordQuestRequestApiResponse"] = function recordQuestRequestApiResponse(arg0, adRequestId) {
  adRequestId = adRequestId.adRequestId;
  if (adRequestId === undefined) {
    adRequestId = null;
  }
  let currentQuestId = adRequestId.currentQuestId;
  if (currentQuestId === undefined) {
    currentQuestId = null;
  }
  let currentFetchedAt = adRequestId.currentFetchedAt;
  if (currentFetchedAt === undefined) {
    currentFetchedAt = null;
  }
  let self = this;
  let pendingRequests = this.pendingRequests;
  let timestamp = pendingRequests.get(arg0);
  let tmp5 = null;
  if (null != timestamp) {
    pendingRequests = null;
    if (null !== currentFetchedAt) {
      let obj = { questId: null, adCreativeId: null, fetchedAt: null, ttlMillis: 0, adDecisionData: null };
      obj[0] = currentQuestId;
      obj[1] = currentQuestId;
      obj[2] = currentFetchedAt;
      let tmp6;
      if (tmp5 != adRequestId) {
        obj = { decision_id: null };
        obj[0] = adRequestId;
        tmp6 = obj;
      }
      obj[4] = tmp6;
      pendingRequests = obj;
    }
    let previousAdDecision = timestamp.previousAdDecision;
    let str = "null";
    let str2 = "null";
    if (tmp5 != previousAdDecision) {
      let str3 = "quest";
      if (tmp5 == previousAdDecision.questId) {
        str3 = "no_serve";
      }
      str2 = str3;
    }
    if (tmp5 != pendingRequests) {
      let str4 = "quest";
      if (tmp5 == pendingRequests.questId) {
        str4 = "no_serve";
      }
      str = str4;
    }
    if ("quest" !== str2) {
      const _HermesInternal = HermesInternal;
      let combined = "" + str2 + "_to_" + str;
      previousAdDecision = trackRoundtrip;
      obj = {};
      const merged = Object.assign(timestamp);
      const _Date = Date;
      timestamp = Date.now();
      obj.apiResponseTimestamp = timestamp;
      obj.wasSuccessful = adRequestId.wasSuccessful;
      obj.adRequestId = adRequestId;
      tmp5 = trackRoundtrip(obj, combined, currentFetchedAt);
      pendingRequests = self.pendingRequests;
      self = pendingRequests.delete(arg0);
    }
    let questId;
    if (previousAdDecision != tmp5) {
      questId = previousAdDecision.questId;
    }
    let questId1;
    if (pendingRequests != tmp5) {
      questId1 = pendingRequests.questId;
    }
    let str8 = "different_quest";
    if (questId === questId1) {
      str8 = "same_quest";
    }
    combined = str8;
  }
};
let set = Object.create(QuestDecisionRoundtripTracker.prototype);
set[0] = new Map();
let result = set.fileFinishedImporting("modules/quests/QuestDecisionRoundtripTracker.tsx");

export default set;