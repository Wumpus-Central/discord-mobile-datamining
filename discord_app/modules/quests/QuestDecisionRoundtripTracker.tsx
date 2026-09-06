// === Module 11281: QuestDecisionRoundtripTracker ===

// Module 11281 (QuestDecisionRoundtripTracker)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import AdCreativeType from "AdCreativeType" /* 5451 */;
import NetStats from "NetStats" /* 7459 */;
import SessionForegroundUtils from "SessionForegroundUtils" /* 7462 */;
import getDeviceMetadataDefault from "getDeviceMetadata" /* 7677 */;
import AdDecisionUtils from "AdDecisionUtils" /* 7701 */;
import AdDeliveryStore from "AdDeliveryStore" /* 7700 */;
import NetworkStore from "NetworkStore" /* 4609 */;

require = fn;
function trackRoundtrip(apiResponseTimestamp, transition_case, fetched_at) {
  if (Math.random() <= 0.1) {
    let diff = null;
    if (null != apiResponseTimestamp.apiResponseTimestamp) {
      diff = apiResponseTimestamp.apiResponseTimestamp - apiResponseTimestamp.initialSendTimestamp;
    }
    let obj = NetStats;
    const signalStrength = obj.getSignalStrength();
    obj = {};
    const merged = Object.assign(getDeviceMetadataDefault());
    ({ endpoint: obj3.endpoint, wasSuccessful: obj3.was_successful } = apiResponseTimestamp);
    obj.api_latency_ms = diff;
    obj.mobile_network_type = NetworkStore.getType();
    let tmp10 = null != signalStrength;
    if (tmp10) {
      obj = { mobile_signal_strength_level: signalStrength };
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
    const obj2 = AnalyticsUtilsDefault;
    obj.is_foregrounded = SessionForegroundUtils.isForegrounded();
    obj2.track(AnalyticEvents.QUEST_DECISION_ROUNDTRIP, obj);
    const tmp2Result = SessionForegroundUtils;
  }
}
const AnalyticEvents = fn(1074).AnalyticEvents;
class QuestDecisionRoundtripTracker {
  constructor() {
    merged = Object.assign({ pendingRequests: null });
    map = new Map();
    merged[0] = map;
    return merged;
  }
}
const prototype = QuestDecisionRoundtripTracker.prototype;
prototype["recordQuestRequestAttempt"] = function recordQuestRequestAttempt(endpoint, callerSource, arg2) {
  const self = this;
  closure_0 = endpoint;
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = null;
  }
  let tmp2 = null;
  if (null != tmp) {
    const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
    value = deliveryAdDecisionByPlacement.get(tmp);
    if (value == null) {
      value = null;
    }
    tmp2 = value;
  }
  let pendingRequests = this.pendingRequests;
  const result = pendingRequests.set(endpoint, { initialSendTimestamp: Date.now(), endpoint, apiResponseTimestamp: null, wasSuccessful: false, callerSource, adRequestId: null, previousAdDecision: tmp2, placement: tmp });
  const timerId = setTimeout(() => {
    const pendingRequests = self.pendingRequests;
    value = pendingRequests.get(closure_0);
    if (null != value) {
      trackRoundtrip(value, "timeout", null);
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
  let currentCreative = adRequestId.currentCreative;
  if (currentCreative === undefined) {
    currentCreative = null;
  }
  let currentFetchedAt = adRequestId.currentFetchedAt;
  if (currentFetchedAt === undefined) {
    currentFetchedAt = null;
  }
  const pendingRequests = this.pendingRequests;
  value = pendingRequests.get(arg0);
  let tmp5 = null;
  if (null != value) {
    let tmp7 = null;
    if (null !== currentFetchedAt) {
      let obj = { creative: currentCreative, fetchedAt: currentFetchedAt, ttlMillis: 0, adDecisionData: null };
      let tmp6;
      if (tmp5 != adRequestId) {
        obj = { decision_id: adRequestId };
        tmp6 = obj;
      }
      obj.adDecisionData = tmp6;
      tmp7 = obj;
    }
    const previousAdDecision = value.previousAdDecision;
    let str2 = "null";
    if (tmp5 != previousAdDecision) {
      let str3 = "no_serve";
      if (tmp5 != previousAdDecision.creative) {
        const type = previousAdDecision.creative.type;
        let str4 = "quest";
        if (AdCreativeType.AdCreativeType.QUEST !== type) {
          str4 = "bounty";
          if (tmp8(5451).AdCreativeType.BOUNTY !== type) {
            if (tmp8(5451).AdCreativeType.QUEST_HOME_HERO === type) {
              str4 = "quest_home_hero";
            }
          }
        }
        str3 = str4;
      }
      str2 = str3;
    }
    let str5 = "null";
    if (tmp5 != tmp7) {
      let str6 = "no_serve";
      if (tmp5 != tmp7.creative) {
        const type2 = tmp7.creative.type;
        let str7 = "quest";
        if (AdCreativeType.AdCreativeType.QUEST !== type2) {
          str7 = "bounty";
          if (tmp10(5451).AdCreativeType.BOUNTY !== type2) {
            if (tmp10(5451).AdCreativeType.QUEST_HOME_HERO === type2) {
              str7 = "quest_home_hero";
            }
          }
        }
        str6 = str7;
      }
      str5 = str6;
    }
    if (str2 === str5) {
      let creative;
      if (previousAdDecision != tmp5) {
        creative = previousAdDecision.creative;
      }
      const deliveredAdCreativeId = AdDecisionUtils.getDeliveredAdCreativeId(creative);
      let creative1;
      if (tmp7 != tmp5) {
        creative1 = tmp7.creative;
      }
      if (deliveredAdCreativeId === tmp14Result.getDeliveredAdCreativeId(creative1)) {
        const _HermesInternal3 = HermesInternal;
        let combined = "same_" + str2;
      } else {
        const _HermesInternal2 = HermesInternal;
        combined = "different_" + str2;
      }
      tmp14Result = AdDecisionUtils;
    }
    const _HermesInternal = HermesInternal;
    obj = {};
    const combined1 = "" + str2 + "_to_" + str5;
    const merged = Object.assign(value);
    const _Date = Date;
    obj.apiResponseTimestamp = Date.now();
    obj.wasSuccessful = adRequestId.wasSuccessful;
    obj.adRequestId = adRequestId;
    tmp5 = trackRoundtrip(obj, combined1, currentFetchedAt);
    const pendingRequests2 = this.pendingRequests;
    pendingRequests2.delete(arg0);
  }
};
let merged = Object.assign({ pendingRequests: null });
merged[0] = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/QuestDecisionRoundtripTracker.tsx");

export default merged;