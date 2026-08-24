// discord_app/modules/quests/QuestDecisionRoundtripTracker.tsx
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import receiveNetworkInfoformation from "../network/NetStats.android.tsx";
import isForegrounded from "../analytics_sessions/SessionForegroundUtils.native.tsx";
import getDeviceMetadataDefault from "../device/getDeviceMetadata.native.tsx";
import result2 from "../ads/utils/AdDecisionUtils.tsx";
import AdCreativeType from "../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import closure_3 from "../../stores/NetworkStore.tsx";
import closure_4 from "QuestStore.tsx";
import { AnalyticEvents } from "../../Constants.tsx";
import set from "../../../_runtime/00002_set.js";

require = arg1;
function trackRoundtrip(apiResponseTimestamp, transition_case, fetched_at) {
  if (Math.random() <= 0.1) {
    let diff = null;
    if (null != apiResponseTimestamp.apiResponseTimestamp) {
      diff = apiResponseTimestamp.apiResponseTimestamp - apiResponseTimestamp.initialSendTimestamp;
    }
    let obj = receiveNetworkInfoformation;
    const signalStrength = obj.getSignalStrength();
    obj = {};
    const merged = Object.assign(getDeviceMetadataDefault());
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
    const obj2 = expandEventPropertiesDefault;
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
      closure_1_6(value, "timeout", null);
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
  const value = pendingRequests.get(arg0);
  let tmp5 = null;
  if (null != value) {
    let tmp7 = null;
    if (null !== currentFetchedAt) {
      let obj = { creative: null, fetchedAt: null, ttlMillis: 0, adDecisionData: null };
      obj[0] = currentCreative;
      obj[1] = currentFetchedAt;
      let tmp6;
      if (tmp5 != adRequestId) {
        obj = { decision_id: null };
        obj[0] = adRequestId;
        tmp6 = obj;
      }
      obj[3] = tmp6;
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
          if (tmp8(7469).AdCreativeType.BOUNTY !== type) {
            if (tmp8(7469).AdCreativeType.QUEST_HOME_HERO === type) {
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
          if (tmp10(7469).AdCreativeType.BOUNTY !== type2) {
            if (tmp10(7469).AdCreativeType.QUEST_HOME_HERO === type2) {
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
      const deliveredAdCreativeId = result2.getDeliveredAdCreativeId(creative);
      const obj3 = result2;
      const tmp14 = require;
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
      tmp14Result = result2;
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
let set = Object.create(QuestDecisionRoundtripTracker.prototype);
set[0] = new Map();
let result = set.fileFinishedImporting("modules/quests/QuestDecisionRoundtripTracker.tsx");

export default set;