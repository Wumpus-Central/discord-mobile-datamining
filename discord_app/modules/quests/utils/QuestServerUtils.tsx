// === Module 7075: progressFromServer ===

// Module 7075 (progressFromServer)
import _slicedToArray from "_slicedToArray";

const require = arg1;
function progressFromServer(progress) {
  let heartbeat;
  let obj = {};
  const entries = Object.entries(progress);
  while (tmp2 !== undefined) {
    let tmp4 = callback;
    let tmp5 = callback(tmp3, 2);
    obj = { eventName: null, value: null, updatedAt: null, completedAt: null, heartbeat: null };
    ({ event_name: obj2[0], value: obj2[1], updated_at: obj2[2], completed_at: obj2[3], heartbeat } = tmp5[1]);
    let tmp6 = heartbeat;
    let tmp7 = null;
    if (null != heartbeat) {
      obj = { lastBeatAt: null, expiresAt: null };
      let tmp8 = heartbeat;
      ({ last_beat_at: obj3[0], expires_at: obj3[1] } = tmp6);
      tmp7 = obj;
    }
    obj[4] = tmp7;
    obj[tmp5[0]] = obj;
    continue;
  }
  return obj;
}
function getSimpleRewardFromServer(type) {
  if (type.type === require(7073) /* QuestRewardTypes */.QuestRewardTypes.VIRTUAL_CURRENCY) {
    let obj = { skuId: null, type: null, name: null, nameWithArticle: null, collectibleProduct: null, orbQuantity: null };
    ({ sku_id: obj2[0], type: obj2[1], name: obj2[2], name_with_article: obj2[3], collectible_product: obj2[4], orb_quantity: obj2[5] } = type);
  } else {
    obj = { skuId: null, type: null, name: null, nameWithArticle: null, asset: null, assetVideo: null, collectibleProduct: null };
    ({ sku_id: obj[0], type: obj[1], name: obj[2], name_with_article: obj[3], asset: obj[4], asset_video: obj[5], collectible_product: obj[6] } = type);
  }
  return obj;
}
function _questsEntitlementFromServer(skuId) {
  let tier;
  let obj = { skuId: skuId.sku_id, tenantMetadata: null, consumed: null };
  const tenant_metadata = skuId.tenant_metadata;
  let quest_rewards;
  if (tenant_metadata != null) {
    quest_rewards = tenant_metadata.quest_rewards;
  }
  let tmp2 = null;
  if (null != quest_rewards) {
    quest_rewards = tenant_metadata.quest_rewards;
    const tag = quest_rewards.reward.tag;
    if (require(7073) /* QuestRewardTypes */.QuestRewardTypes.IN_GAME === tag) {
      obj = { questRewards: null };
      obj = { reward: null };
      const obj1 = { tag: null };
      obj1[0] = quest_rewards.reward.tag;
      obj[0] = obj1;
      obj[0] = obj;
      tmp2 = obj;
    } else if (tmp3(7073).QuestRewardTypes.REWARD_CODE === tag) {
      const obj2 = { tag: null, rewardCode: null };
      obj2[0] = quest_rewards.reward.tag;
      const obj3 = { userId: null, questId: null, code: null, platform: null, claimedAt: null, tier: null };
      ({ user_id: obj8[0], quest_id: obj8[1], code: obj8[2], platform: obj8[3], claimed_at: obj8[4], tier } = quest_rewards.reward.reward_code);
      if (tier == null) {
        tier = null;
      }
      const obj4 = { questRewards: null };
      const obj5 = { reward: null };
      obj3[5] = tier;
      obj2[1] = obj3;
      obj5[0] = obj2;
      obj4[0] = obj5;
      tmp2 = obj4;
    }
    tmp3 = require;
  }
  obj[1] = tmp2;
  obj[2] = skuId.consumed;
  return obj;
}
const result = require("questFromServerV2").fileFinishedImporting("modules/quests/utils/QuestServerUtils.tsx");

export const isQuestWithKnownConfigVersion = function isQuestWithKnownConfigVersion(config) {
  try {
    const match = require(4455) /* t */.match(config.config);
    const str = require(4455) /* t */;
    return match.with({ config_version: 2 }, () => true).exhaustive();
  } catch (err) {
    return false;
  }
};
export const questConfigFromServer = function questConfigFromServer(body) {
  const match = require(4455) /* t */.match(body);
  const str = require(4455) /* t */;
  return match.with({ config_version: 2 }, (id) => callback(table[2]).questFromServerV2(id)).exhaustive();
};
export const questUserStatusFromServer = function questUserStatusFromServer(body) {
  const obj = { userId: body.user_id, questId: body.quest_id, enrolledAt: body.enrolled_at, completedAt: body.completed_at, claimedAt: body.claimed_at, claimedTier: null, orbQuantityClaimed: null, lastStreamHeartbeatAt: null, streamProgressSeconds: null, dismissedQuestContent: null, progress: null };
  let claimed_tier = body.claimed_tier;
  if (claimed_tier == null) {
    claimed_tier = null;
  }
  obj[5] = claimed_tier;
  let orb_quantity_claimed = body.orb_quantity_claimed;
  if (orb_quantity_claimed == null) {
    orb_quantity_claimed = null;
  }
  obj[6] = orb_quantity_claimed;
  ({ last_stream_heartbeat_at: obj[7], stream_progress_seconds: obj[8], dismissed_quest_content: obj[9] } = body);
  obj[10] = progressFromServer(body.progress);
  return obj;
};
export const questWithUserStatusFromServer = function questWithUserStatusFromServer(body) {
  let claimed_tier;
  let obj = { id: body.id, preview: body.preview, config: null, userStatus: null, targetedContent: null, trafficMetadataSealed: null };
  const match = require(4455) /* t */.match(body.config);
  const str = require(4455) /* t */;
  obj[2] = match.with({ config_version: 2 }, (id) => callback(table[2]).questFromServerV2(id)).exhaustive();
  let tmp = null;
  if (null != body.user_status) {
    const user_status = body.user_status;
    obj = { userId: null, questId: null, enrolledAt: null, completedAt: null, claimedAt: null, claimedTier: null, orbQuantityClaimed: null, lastStreamHeartbeatAt: null, streamProgressSeconds: null, dismissedQuestContent: null, progress: null };
    ({ user_id: obj4[0], quest_id: obj4[1], enrolled_at: obj4[2], completed_at: obj4[3], claimed_at: obj4[4], claimed_tier } = user_status);
    if (claimed_tier == null) {
      claimed_tier = null;
    }
    obj[5] = claimed_tier;
    let orb_quantity_claimed = user_status.orb_quantity_claimed;
    if (orb_quantity_claimed == null) {
      orb_quantity_claimed = null;
    }
    obj[6] = orb_quantity_claimed;
    ({ last_stream_heartbeat_at: obj4[7], stream_progress_seconds: obj4[8], dismissed_quest_content: obj4[9] } = user_status);
    obj[10] = progressFromServer(user_status.progress);
    tmp = obj;
  }
  obj[3] = tmp;
  ({ targeted_content: obj[4], traffic_metadata_sealed: obj[5] } = body);
  return obj;
};
export const excludedQuestFromServer = function excludedQuestFromServer(id) {
  return { id: id.id, replacementId: id.replacement_id };
};
export const getClaimedQuestWithUserStatusFromServer = function getClaimedQuestWithUserStatusFromServer(id) {
  let claimed_tier;
  let obj = { id: id.id, config: null, userStatus: null };
  const config = id.config;
  obj = { id: config.id, startsAt: config.starts_at, expiresAt: config.expires_at, features: config.features, messages: obj, assets: obj1, colors: obj2, rewards: rewards.map(getSimpleRewardFromServer), cosponsorMetadata: null };
  obj = { questName: config.messages.quest_name, gamePublisher: config.messages.game_publisher, gameTitle: config.messages.game_title };
  rewards = config.rewards;
  obj[8] = require(7076) /* questFromServerV2 */.questCosponsorMetadataFromServer(config.cosponsor_metadata);
  obj[1] = obj;
  let tmp = null;
  if (null != id.user_status) {
    const user_status = id.user_status;
    const obj3 = { userId: null, questId: null, enrolledAt: null, completedAt: null, claimedAt: null, claimedTier: null, orbQuantityClaimed: null, lastStreamHeartbeatAt: null, streamProgressSeconds: null, dismissedQuestContent: null, progress: null };
    ({ user_id: obj7[0], quest_id: obj7[1], enrolled_at: obj7[2], completed_at: obj7[3], claimed_at: obj7[4], claimed_tier } = user_status);
    if (claimed_tier == null) {
      claimed_tier = null;
    }
    obj3[5] = claimed_tier;
    let orb_quantity_claimed = user_status.orb_quantity_claimed;
    if (orb_quantity_claimed == null) {
      orb_quantity_claimed = null;
    }
    obj3[6] = orb_quantity_claimed;
    ({ last_stream_heartbeat_at: obj7[7], stream_progress_seconds: obj7[8], dismissed_quest_content: obj7[9] } = user_status);
    obj3[10] = progressFromServer(user_status.progress);
    tmp = obj3;
  }
  obj[2] = tmp;
  return obj;
};
export const questsRewardCodeFromServer = function questsRewardCodeFromServer(body) {
  const obj = { userId: body.user_id, questId: body.quest_id, code: body.code, platform: body.platform, claimedAt: body.claimed_at, tier: null };
  let tier = body.tier;
  if (tier == null) {
    tier = null;
  }
  obj[5] = tier;
  return obj;
};
export const questsEntitlementsFromServer = function questsEntitlementsFromServer(body) {
  const entitlements = body.entitlements;
  return { claimedAt: body.claimed_at, items: entitlements.map(_questsEntitlementFromServer), errors: body.errors };
};