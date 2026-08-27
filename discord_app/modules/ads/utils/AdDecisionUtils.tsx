// discord_app/modules/ads/utils/AdDecisionUtils.tsx
import setDefault from "../../../utils/Durations.tsx";
import AdCreativeType from "../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";

require = arg1;
let result = 6 * setDefault.Millis.HOUR;
const result1 = require("set").fileFinishedImporting("modules/ads/utils/AdDecisionUtils.tsx");

export const MAX_RESPONSE_TTL_MS = result;
export const getDeliveredAdCreativeId = function getDeliveredAdCreativeId(creative) {
  if (null == creative) {
    return null;
  } else {
    const type = creative.type;
    if (AdCreativeType.AdCreativeType.QUEST === type) {
      return creative.questId;
    } else if (tmp(7379).AdCreativeType.BOUNTY === type) {
      return creative.bounty.id;
    } else if (tmp(7379).AdCreativeType.QUEST_HOME_HERO === type) {
      return creative.questHomeHero.id;
    }
  }
};
export const getDeliveredQuestId = function getDeliveredQuestId(creative) {
  let type;
  if (creative != null) {
    type = creative.type;
  }
  let questId = null;
  if (type === AdCreativeType.AdCreativeType.QUEST) {
    questId = creative.questId;
  }
  return questId;
};
export const getDeliveredBounty = function getDeliveredBounty(creative1) {
  let type;
  if (creative1 != null) {
    type = creative1.type;
  }
  let bounty = null;
  if (type === AdCreativeType.AdCreativeType.BOUNTY) {
    bounty = creative1.bounty;
  }
  return bounty;
};
export const resolveResponseTtl = function resolveResponseTtl(responseTtlSeconds) {
  if (null == responseTtlSeconds) {
    return closure_2;
  } else {
    result = 1000 * responseTtlSeconds;
    let tmp3 = closure_2;
    if (result < closure_2) {
      tmp3 = tmp2;
      if (0 < result) {
        tmp3 = result;
      }
    }
    return tmp3;
  }
};
export const questAdDecisionFromAdDecision = function questAdDecisionFromAdDecision(response_ttl_seconds, creative) {
  let obj = { creative: creative.creative, fetchedAt: creative.fetchedAt, ttlMillis: null, adDecisionData: null, adContext: null, metadataSealed: null, trafficMetadataSealed: null };
  response_ttl_seconds = response_ttl_seconds.response_ttl_seconds;
  if (null == response_ttl_seconds) {
    let tmp3 = closure_2;
  } else {
    result = 1000 * response_ttl_seconds;
    tmp3 = closure_2;
    if (result < closure_2) {
      tmp3 = tmp2;
      if (0 < result) {
        tmp3 = result;
      }
    }
  }
  obj[2] = tmp3;
  const ad_identifiers = response_ttl_seconds.ad_identifiers;
  let ad_id;
  if (ad_identifiers != null) {
    ad_id = ad_identifiers.ad_id;
  }
  obj = { ad_id, adset_id: null, ad_set_id: null, campaign_id: null, creative_id: null, creative_type: null, decision_id: null, is_targeted: null };
  const ad_identifiers2 = response_ttl_seconds.ad_identifiers;
  let adset_id;
  if (ad_identifiers2 != null) {
    adset_id = ad_identifiers2.adset_id;
  }
  obj[1] = adset_id;
  const ad_identifiers3 = response_ttl_seconds.ad_identifiers;
  let ad_set_id;
  if (ad_identifiers3 != null) {
    ad_set_id = ad_identifiers3.ad_set_id;
  }
  obj[2] = ad_set_id;
  const ad_identifiers4 = response_ttl_seconds.ad_identifiers;
  let campaign_id;
  if (ad_identifiers4 != null) {
    campaign_id = ad_identifiers4.campaign_id;
  }
  obj[3] = campaign_id;
  const ad_identifiers5 = response_ttl_seconds.ad_identifiers;
  let creative_id;
  if (ad_identifiers5 != null) {
    creative_id = ad_identifiers5.creative_id;
  }
  obj[4] = creative_id;
  const ad_identifiers6 = response_ttl_seconds.ad_identifiers;
  let creative_type;
  if (ad_identifiers6 != null) {
    creative_type = ad_identifiers6.creative_type;
  }
  obj[5] = creative_type;
  obj[6] = creative.requestId;
  obj[7] = null != response_ttl_seconds.ad_identifiers;
  obj[3] = obj;
  ({ ad_context: obj[4], metadata_sealed: obj[5], traffic_metadata_sealed: obj[6] } = response_ttl_seconds);
  return obj;
};