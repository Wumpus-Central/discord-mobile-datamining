// === Module 7194: QuestServerUtils ===

// Module 7194 (QuestServerUtils)
import merged5 from "merged5" /* 5075 */;
import QuestRewardTypes from "QuestRewardTypes" /* 7192 */;
import Quest from "Quest" /* 7195 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const f94489 = (id) => {
  const obj = Quest;
  return obj.questFromServerV2(id);
};
function progressFromServer(progress) {
  let first;
  let heartbeat;
  let tmp8;
  const obj = {};
  const entries = Object.entries(progress);
  const tmp2 = entries[Symbol.iterator]();
  while (tmp2 !== undefined) {
    [first, { event_name: obj2.eventName, value: obj2.value, updated_at: obj2.updatedAt, completed_at: obj2.completedAt, heartbeat }] = tmp3;
    let obj5 = { eventName: null, value: null, updatedAt: null, completedAt: null, heartbeat: tmp8 };
    tmp8 = null;
    if (null != heartbeat) {
      let obj6 = { lastBeatAt: null, expiresAt: null };
      ({ last_beat_at: obj3.lastBeatAt, expires_at: obj3.expiresAt } = heartbeat);
      tmp8 = obj6;
    }
    obj[first] = obj5;
    continue;
  }
  return obj;
}
function getSimpleRewardFromServer(type) {
  let obj;
  if (type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY) {
    const obj3 = { skuId: null, type: null, name: null, nameWithArticle: null, collectibleProduct: null, orbQuantity: null };
    ({ sku_id: obj2.skuId, type: obj2.type, name: obj2.name, name_with_article: obj2.nameWithArticle, collectible_product: obj2.collectibleProduct, orb_quantity: obj2.orbQuantity } = type);
    obj = obj3;
  } else {
    obj = { skuId: null, type: null, name: null, nameWithArticle: null, asset: null, assetVideo: null, collectibleProduct: null };
    ({ sku_id: obj.skuId, type: obj.type, name: obj.name, name_with_article: obj.nameWithArticle, asset: obj.asset, asset_video: obj.assetVideo, collectible_product: obj.collectibleProduct } = type);
  }
  return obj;
}
function _questsEntitlementFromServer(skuId) {
  let obj15;
  let obj3;
  let obj4;
  let obj6;
  let tier;
  let tmp2;
  const tenant_metadata = skuId.tenant_metadata;
  let quest_rewards1;
  const obj = { skuId: skuId.sku_id, tenantMetadata: tmp2, consumed: skuId.consumed };
  if (tenant_metadata != null) {
    quest_rewards1 = tenant_metadata.quest_rewards;
  }
  tmp2 = null;
  if (null != quest_rewards1) {
    const quest_rewards = tenant_metadata.quest_rewards;
    const tag = quest_rewards.reward.tag;
    if (QuestRewardTypes.QuestRewardTypes.IN_GAME === tag) {
      const obj2 = { questRewards: obj3 };
      obj3 = { reward: obj4 };
      tmp2 = obj2;
      obj4 = { tag: quest_rewards.reward.tag };
    } else if (QuestRewardTypes.QuestRewardTypes.REWARD_CODE === tag) {
      const obj5 = { tag: quest_rewards.reward.tag, rewardCode: obj6 };
      obj6 = { userId: null, questId: null, code: null, platform: null, claimedAt: null, tier };
      ({ user_id: obj8.userId, quest_id: obj8.questId, code: obj8.code, platform: obj8.platform, claimed_at: obj8.claimedAt, tier } = quest_rewards.reward.reward_code);
      if (tier == null) {
        tier = null;
      }
      const obj7 = { questRewards: obj15 };
      tmp2 = obj7;
      obj15 = { reward: obj5 };
    }
  }
  return obj;
}
const result = size.fileFinishedImporting("modules/quests/utils/QuestServerUtils.tsx");

export const isQuestWithKnownConfigVersion = function isQuestWithKnownConfigVersion(config) {
  try {
    const str = merged5;
    const match = str.match(config.config);
    const withResult = match.with({ config_version: 2 }, () => true);
    return withResult.exhaustive();
  } catch (err) {
    return false;
  }
};
export const questConfigFromServer = function questConfigFromServer(body) {
  const str = merged5;
  const match = str.match(body);
  const withResult = match.with({ config_version: 2 }, f94489);
  return withResult.exhaustive();
};
export const questUserStatusFromServer = function questUserStatusFromServer(body) {
  let claimed_tier;
  let orb_quantity_claimed;
  const obj = { userId: body.user_id, questId: body.quest_id, enrolledAt: body.enrolled_at, completedAt: body.completed_at, claimedAt: body.claimed_at, claimedTier: claimed_tier, orbQuantityClaimed: orb_quantity_claimed, lastStreamHeartbeatAt: null, streamProgressSeconds: null, dismissedQuestContent: null, progress: progressFromServer(body.progress) };
  claimed_tier = body.claimed_tier;
  if (claimed_tier == null) {
    claimed_tier = null;
  }
  orb_quantity_claimed = body.orb_quantity_claimed;
  if (orb_quantity_claimed == null) {
    orb_quantity_claimed = null;
  }
  ({ last_stream_heartbeat_at: obj.lastStreamHeartbeatAt, stream_progress_seconds: obj.streamProgressSeconds, dismissed_quest_content: obj.dismissedQuestContent } = body);
  return obj;
};
export const questWithUserStatusFromServer = function questWithUserStatusFromServer(body) {
  let claimed_tier;
  let orb_quantity_claimed;
  let tmp;
  let withResult;
  let obj = { id: body.id, preview: body.preview, config: withResult.exhaustive(), userStatus: tmp, targetedContent: null, trafficMetadataSealed: null };
  const config = body.config;
  const str = merged5;
  const match = str.match(config);
  tmp = null;
  withResult = match.with({ config_version: 2 }, f94489);
  if (null != body.user_status) {
    const user_status = body.user_status;
    const obj2 = { userId: null, questId: null, enrolledAt: null, completedAt: null, claimedAt: null, claimedTier: claimed_tier, orbQuantityClaimed: orb_quantity_claimed, lastStreamHeartbeatAt: null, streamProgressSeconds: null, dismissedQuestContent: null, progress: progressFromServer(user_status.progress) };
    ({ user_id: obj4.userId, quest_id: obj4.questId, enrolled_at: obj4.enrolledAt, completed_at: obj4.completedAt, claimed_at: obj4.claimedAt, claimed_tier } = user_status);
    if (claimed_tier == null) {
      claimed_tier = null;
    }
    orb_quantity_claimed = user_status.orb_quantity_claimed;
    if (orb_quantity_claimed == null) {
      orb_quantity_claimed = null;
    }
    ({ last_stream_heartbeat_at: obj4.lastStreamHeartbeatAt, stream_progress_seconds: obj4.streamProgressSeconds, dismissed_quest_content: obj4.dismissedQuestContent } = user_status);
    tmp = obj2;
  }
  ({ targeted_content: obj.targetedContent, traffic_metadata_sealed: obj.trafficMetadataSealed } = body);
  return obj;
};
export const excludedQuestFromServer = function excludedQuestFromServer(id) {
  return { id: id.id, replacementId: id.replacement_id };
};
export const getClaimedQuestWithUserStatusFromServer = function getClaimedQuestWithUserStatusFromServer(id) {
  let claimed_tier;
  let obj2;
  let obj3;
  let orb_quantity_claimed;
  let rewards;
  let tmp;
  const config = id.config;
  const obj = { id: id.id, config: obj2, userStatus: tmp };
  obj2 = { id: config.id, startsAt: config.starts_at, expiresAt: config.expires_at, features: config.features, messages: { questName: config.messages.quest_name, gamePublisher: config.messages.game_publisher, gameTitle: config.messages.game_title }, assets: { hero: config.assets.hero, heroVideo: config.assets.hero_video, questBarHero: config.assets.quest_bar_hero, questBarHeroVideo: config.assets.quest_bar_hero_video, gameTile: config.assets.game_tile, logotype: config.assets.logotype, logotypeLight: config.assets.logotype_light, logotypeDark: config.assets.logotype_dark, gameTileLight: config.assets.game_tile_light, gameTileDark: config.assets.game_tile_dark }, colors: { primary: config.colors.primary, secondary: config.colors.secondary }, rewards: rewards.map(getSimpleRewardFromServer), cosponsorMetadata: obj3.questCosponsorMetadataFromServer(config.cosponsor_metadata) };
  rewards = config.rewards;
  tmp = null;
  obj3 = Quest;
  if (null != id.user_status) {
    const user_status = id.user_status;
    const obj6 = { userId: null, questId: null, enrolledAt: null, completedAt: null, claimedAt: null, claimedTier: claimed_tier, orbQuantityClaimed: orb_quantity_claimed, lastStreamHeartbeatAt: null, streamProgressSeconds: null, dismissedQuestContent: null, progress: progressFromServer(user_status.progress) };
    ({ user_id: obj4.userId, quest_id: obj4.questId, enrolled_at: obj4.enrolledAt, completed_at: obj4.completedAt, claimed_at: obj4.claimedAt, claimed_tier } = user_status);
    if (claimed_tier == null) {
      claimed_tier = null;
    }
    orb_quantity_claimed = user_status.orb_quantity_claimed;
    if (orb_quantity_claimed == null) {
      orb_quantity_claimed = null;
    }
    ({ last_stream_heartbeat_at: obj4.lastStreamHeartbeatAt, stream_progress_seconds: obj4.streamProgressSeconds, dismissed_quest_content: obj4.dismissedQuestContent } = user_status);
    tmp = obj6;
  }
  return obj;
};
export const questsRewardCodeFromServer = function questsRewardCodeFromServer(body) {
  let tier;
  const obj = { userId: body.user_id, questId: body.quest_id, code: body.code, platform: body.platform, claimedAt: body.claimed_at, tier };
  tier = body.tier;
  if (tier == null) {
    tier = null;
  }
  return obj;
};
export const questsEntitlementsFromServer = function questsEntitlementsFromServer(body) {
  let entitlements;
  const obj = { claimedAt: body.claimed_at, items: entitlements.map(_questsEntitlementFromServer), errors: body.errors };
  entitlements = body.entitlements;
  return obj;
};