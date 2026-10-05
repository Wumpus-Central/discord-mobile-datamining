// discord_app/modules/quests/QuestDecisionRoundtripTracker.tsx
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import AdCreativeType from "../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import NetStats from "../network/NetStats.android.tsx";
import react_native from "../analytics_sessions/SessionForegroundUtils.native.tsx";
import getDeviceMetadataDefault from "../device/getDeviceMetadata.native.tsx";
import AdDecisionUtils from "../ads/utils/AdDecisionUtils.tsx";
import AdDeliveryStore from "../ads/AdDeliveryStore.tsx";
import NetworkStore from "../../stores/NetworkStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

function trackRoundtrip(apiResponseTimestamp, transition_case, fetched_at) {
  let decision_id;
  let fetchedAt;
  let tmp2Result;
  if (Math.random() <= 0.1) {
    let diff = null;
    if (null != apiResponseTimestamp.apiResponseTimestamp) {
      diff = apiResponseTimestamp.apiResponseTimestamp - apiResponseTimestamp.initialSendTimestamp;
    }
    const obj = NetStats;
    const signalStrength = obj.getSignalStrength();
    const obj3 = {
      api_latency_ms: diff,
      mobile_network_type: NetworkStore.getType(),
      fetched_at,
      previous_ad_request_id: decision_id,
      previous_fetched_at: fetchedAt,
      transition_case,
      is_foregrounded: tmp2Result.isForegrounded(),
    };
    const track = AnalyticsUtilsDefault.track;
    const QUEST_DECISION_ROUNDTRIP = AnalyticEvents.QUEST_DECISION_ROUNDTRIP;
    AnalyticsUtilsDefault;
    const merged = Object.assign(getDeviceMetadataDefault());
    ({ endpoint: obj2.endpoint, wasSuccessful: obj2.was_successful } = apiResponseTimestamp);
    let tmp11 = null != signalStrength;
    if (tmp11) {
      tmp11 = { mobile_signal_strength_level: signalStrength };
      const obj4 = { mobile_signal_strength_level: signalStrength };
    }
    const merged1 = Object.assign(tmp11);
    ({ callerSource: obj2.caller_source, adRequestId: obj2.ad_request_id } = apiResponseTimestamp);
    const previousAdDecision = apiResponseTimestamp.previousAdDecision;
    decision_id = undefined;
    if (previousAdDecision != null) {
      const adDecisionData = previousAdDecision.adDecisionData;
      if (adDecisionData != null) {
        decision_id = adDecisionData.decision_id;
      }
    }
    if (decision_id == null) {
      decision_id = null;
    }
    const previousAdDecision2 = apiResponseTimestamp.previousAdDecision;
    fetchedAt = undefined;
    if (previousAdDecision2 != null) {
      fetchedAt = previousAdDecision2.fetchedAt;
    }
    if (fetchedAt == null) {
      fetchedAt = null;
    }
    tmp2Result = react_native;
    track(QUEST_DECISION_ROUNDTRIP, obj3);
  }
}
const AnalyticEvents = Constants.AnalyticEvents;
class QuestDecisionRoundtripTracker {
  constructor() {
    const merged = Object.assign({ pendingRequests: null });
    merged[0] = new Map();
    new Map();
    return merged;
  }
  recordQuestRequestAttempt(endpoint, callerSource) {
    const self = this;
    let closure_0 = endpoint;
    let tmp = placement;
    if (placement === undefined) {
      tmp = null;
    }
    let tmp2 = null;
    if (null != tmp) {
      const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
      let value = deliveryAdDecisionByPlacement.get(tmp);
      if (value == null) {
        value = null;
      }
      tmp2 = value;
    }
    let pendingRequests = this.pendingRequests;
    const obj = {
      initialSendTimestamp: Date.now(),
      endpoint,
      apiResponseTimestamp: null,
      wasSuccessful: false,
      callerSource,
      adRequestId: null,
      previousAdDecision: tmp2,
      placement: tmp,
    };
    const result = pendingRequests.set(endpoint, obj);
    const timerId = setTimeout(() => {
      const pendingRequests = self.pendingRequests;
      const value = pendingRequests.get(endpoint);
      if (null != value) {
        trackRoundtrip(value, "timeout", null);
        const pendingRequests2 = self.pendingRequests;
        pendingRequests2.delete(endpoint);
      }
    }, 30000);
  }
  recordQuestRequestApiResponse(arg0, adRequestId) {
    let tmp5;
    adRequestId = adRequestId.adRequestId;
    const wasSuccessful = adRequestId.wasSuccessful;
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
    const value = pendingRequests.get(arg0);
    if (null != value) {
      let tmp6 = null;
      if (null !== currentFetchedAt) {
        const obj = { creative: currentCreative, fetchedAt: currentFetchedAt, ttlMillis: 0, adDecisionData: tmp5 };
        tmp5 = undefined;
        if (null != adRequestId) {
          tmp5 = { decision_id: adRequestId };
          const obj2 = { decision_id: adRequestId };
        }
        tmp6 = obj;
      }
      const previousAdDecision = value.previousAdDecision;
      let str2 = "null";
      if (null != previousAdDecision) {
        let str3 = "no_serve";
        if (null != previousAdDecision.creative) {
          const type = previousAdDecision.creative.type;
          let str4 = "quest";
          if (AdCreativeType.AdCreativeType.QUEST !== type) {
            str4 = "bounty";
            if (AdCreativeType.AdCreativeType.BOUNTY !== type) {
              if (AdCreativeType.AdCreativeType.QUEST_HOME_HERO === type) {
                str4 = "quest_home_hero";
              }
            }
          }
          str3 = str4;
        }
        str2 = str3;
      }
      let str5 = "null";
      if (null != tmp6) {
        let str6 = "no_serve";
        if (null != tmp6.creative) {
          const type2 = tmp6.creative.type;
          let str7 = "quest";
          if (AdCreativeType.AdCreativeType.QUEST !== type2) {
            str7 = "bounty";
            if (AdCreativeType.AdCreativeType.BOUNTY !== type2) {
              if (AdCreativeType.AdCreativeType.QUEST_HOME_HERO === type2) {
                str7 = "quest_home_hero";
              }
            }
          }
          str6 = str7;
        }
        str5 = str6;
      }
      if (str2 === str5) {
        if ("null" !== str2) {
          let combined1;
          if ("no_serve" !== str2) {
            let combined;
            let creative;
            const getDeliveredAdCreativeId = AdDecisionUtils.getDeliveredAdCreativeId;
            AdDecisionUtils;
            if (previousAdDecision != null) {
              creative = previousAdDecision.creative;
            }
            const deliveredAdCreativeId = getDeliveredAdCreativeId(creative);
            let creative1;
            const getDeliveredAdCreativeId2 = AdDecisionUtils.getDeliveredAdCreativeId;
            AdDecisionUtils;
            if (tmp6 != null) {
              creative1 = tmp6.creative;
            }
            if (deliveredAdCreativeId === getDeliveredAdCreativeId2(creative1)) {
              const _HermesInternal3 = HermesInternal;
              combined = "same_" + str2;
            } else {
              const _HermesInternal2 = HermesInternal;
              combined = "different_" + str2;
            }
            combined1 = combined;
          }
          const obj3 = { apiResponseTimestamp: Date.now(), wasSuccessful, adRequestId };
          const merged = Object.assign(value);
          const _Date = Date;
          trackRoundtrip(obj3, combined1, currentFetchedAt);
          const pendingRequests2 = this.pendingRequests;
          pendingRequests2.delete(arg0);
        }
      }
      const _HermesInternal = HermesInternal;
      combined1 = "" + str2 + "_to_" + str5;
    }
  }
}
const prototype = QuestDecisionRoundtripTracker.prototype;
let merged = Object.assign({ pendingRequests: null });
const map = new Map();
merged[0] = map;
let result = size.fileFinishedImporting("modules/quests/QuestDecisionRoundtripTracker.tsx");

export default merged;
