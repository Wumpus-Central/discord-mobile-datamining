// discord_app/modules/ads/utils/AdDecisionUtils.tsx
import DurationsDefault from "../../../utils/Durations.tsx";
import AdCreativeType from "../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = 6 * DurationsDefault.Millis.HOUR;
let c2 = result;
const result1 = size.fileFinishedImporting("modules/ads/utils/AdDecisionUtils.tsx");

export const MAX_RESPONSE_TTL_MS = result;
export const getDeliveredAdCreativeId = function getDeliveredAdCreativeId(creative) {
  if (null == creative) {
    return null;
  } else {
    const type = creative.type;
    if (AdCreativeType.AdCreativeType.QUEST === type) {
      return creative.questId;
    } else if (AdCreativeType.AdCreativeType.BOUNTY === type) {
      return creative.bounty.id;
    } else if (AdCreativeType.AdCreativeType.QUEST_HOME_HERO === type) {
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
export const getDeliveredBounty = function getDeliveredBounty(creative) {
  let type;
  if (creative != null) {
    type = creative.type;
  }
  let bounty = null;
  if (type === AdCreativeType.AdCreativeType.BOUNTY) {
    bounty = creative.bounty;
  }
  return bounty;
};
export const resolveResponseTtl = function resolveResponseTtl(responseTtlSeconds) {
  if (null == responseTtlSeconds) {
    return c2;
  } else {
    c2 = 1000 * responseTtlSeconds;
    let tmp3 = c2;
    if (c2 < c2) {
      tmp3 = tmp2;
      if (0 < c2) {
        tmp3 = c2;
      }
    }
    return tmp3;
  }
};
export const questAdDecisionFromAdDecision = function questAdDecisionFromAdDecision(response_ttl_seconds, creative) {
  let ad_set_id;
  let adset_id;
  let campaign_id;
  let creative_id;
  let creative_type;
  let obj2;
  let tmp3;
  const obj = {
    creative: creative.creative,
    fetchedAt: creative.fetchedAt,
    ttlMillis: tmp3,
    adDecisionData: obj2,
    adContext: null,
    metadataSealed: null,
    trafficMetadataSealed: null,
    provenanceMetadataSealed: null,
  };
  response_ttl_seconds = response_ttl_seconds.response_ttl_seconds;
  const requestId = creative.requestId;
  if (null == response_ttl_seconds) {
    tmp3 = c2;
  } else {
    c2 = 1000 * response_ttl_seconds;
    tmp3 = c2;
    if (c2 < c2) {
      tmp3 = tmp2;
      if (0 < c2) {
        tmp3 = c2;
      }
    }
  }
  const ad_identifiers = response_ttl_seconds.ad_identifiers;
  let ad_id;
  if (ad_identifiers != null) {
    ad_id = ad_identifiers.ad_id;
  }
  const ad_identifiers2 = response_ttl_seconds.ad_identifiers;
  obj2 = {
    ad_id,
    adset_id,
    ad_set_id,
    campaign_id,
    creative_id,
    creative_type,
    decision_id: requestId,
    is_targeted: null != response_ttl_seconds.ad_identifiers,
  };
  adset_id = undefined;
  if (ad_identifiers2 != null) {
    adset_id = ad_identifiers2.adset_id;
  }
  const ad_identifiers3 = response_ttl_seconds.ad_identifiers;
  ad_set_id = undefined;
  if (ad_identifiers3 != null) {
    ad_set_id = ad_identifiers3.ad_set_id;
  }
  const ad_identifiers4 = response_ttl_seconds.ad_identifiers;
  campaign_id = undefined;
  if (ad_identifiers4 != null) {
    campaign_id = ad_identifiers4.campaign_id;
  }
  const ad_identifiers5 = response_ttl_seconds.ad_identifiers;
  creative_id = undefined;
  if (ad_identifiers5 != null) {
    creative_id = ad_identifiers5.creative_id;
  }
  const ad_identifiers6 = response_ttl_seconds.ad_identifiers;
  creative_type = undefined;
  if (ad_identifiers6 != null) {
    creative_type = ad_identifiers6.creative_type;
  }
  ({
    ad_context: obj.adContext,
    metadata_sealed: obj.metadataSealed,
    traffic_metadata_sealed: obj.trafficMetadataSealed,
    provenance_metadata_sealed: obj.provenanceMetadataSealed,
  } = response_ttl_seconds);
  return obj;
};
