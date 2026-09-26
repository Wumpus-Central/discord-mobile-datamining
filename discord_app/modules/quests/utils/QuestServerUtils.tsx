// discord_app/modules/quests/utils/QuestServerUtils.tsx
import _mod5021 from "module_5021" /* 5021 */;
import QuestRewardTypes from "../../../../discord_common/js/shared/shared-constants/QuestRewardTypes.tsx";
import Quest from "../types/v2/Quest.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

require = fn;
function progressFromServer(progress) {
  const obj = {};
  const entries = Object.entries(progress);
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    let obj5 = { eventName: null, value: null, updatedAt: null, completedAt: null, heartbeat: null };
    ({
      event_name: obj2.eventName,
      value: obj2.value,
      updated_at: obj2.updatedAt,
      completed_at: obj2.completedAt,
      heartbeat,
    } = tmp5[1]);
    let tmp7 = null;
    if (null != heartbeat) {
      let obj6 = { lastBeatAt: null, expiresAt: null };
      ({ last_beat_at: obj3.lastBeatAt, expires_at: obj3.expiresAt } = heartbeat);
      tmp7 = obj6;
    }
    obj5.heartbeat = tmp7;
    obj[tmp5[0]] = obj5;
    continue;
  }
  return obj;
}
function getSimpleRewardFromServer(type) {
  if (type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY) {
    ({
      sku_id: obj2.skuId,
      type: obj2.type,
      name: obj2.name,
      name_with_article: obj2.nameWithArticle,
      collectible_product: obj2.collectibleProduct,
      orb_quantity: obj2.orbQuantity,
    } = type);
    let obj = {
      skuId: null,
      type: null,
      name: null,
      nameWithArticle: null,
      collectibleProduct: null,
      orbQuantity: null,
    };
    const obj3 = {
      skuId: null,
      type: null,
      name: null,
      nameWithArticle: null,
      collectibleProduct: null,
      orbQuantity: null,
    };
  } else {
    obj = {
      skuId: null,
      type: null,
      name: null,
      nameWithArticle: null,
      asset: null,
      assetVideo: null,
      collectibleProduct: null,
    };
    ({
      sku_id: obj.skuId,
      type: obj.type,
      name: obj.name,
      name_with_article: obj.nameWithArticle,
      asset: obj.asset,
      asset_video: obj.assetVideo,
      collectible_product: obj.collectibleProduct,
    } = type);
  }
  return obj;
}
function _questsEntitlementFromServer(skuId) {
  const obj = { skuId: skuId.sku_id, tenantMetadata: null, consumed: null };
  const tenant_metadata = skuId.tenant_metadata;
  let quest_rewards1;
  if (tenant_metadata != null) {
    quest_rewards1 = tenant_metadata.quest_rewards;
  }
  let tmp2 = null;
  if (null != quest_rewards1) {
    const quest_rewards = tenant_metadata.quest_rewards;
    const tag = quest_rewards.reward.tag;
    if (QuestRewardTypes.QuestRewardTypes.IN_GAME === tag) {
      const obj2 = { questRewards: null };
      const obj3 = { reward: null };
      const obj4 = { tag: quest_rewards.reward.tag };
      obj3.reward = obj4;
      obj2.questRewards = obj3;
      tmp2 = obj2;
    } else if (QuestRewardTypes.QuestRewardTypes.REWARD_CODE === tag) {
      const obj5 = { tag: quest_rewards.reward.tag, rewardCode: null };
      const obj6 = { userId: null, questId: null, code: null, platform: null, claimedAt: null, tier: null };
      ({
        user_id: obj8.userId,
        quest_id: obj8.questId,
        code: obj8.code,
        platform: obj8.platform,
        claimed_at: obj8.claimedAt,
        tier,
      } = quest_rewards.reward.reward_code);
      if (tier == null) {
        tier = null;
      }
      const obj7 = { questRewards: null };
      const obj15 = { reward: null };
      obj6.tier = tier;
      obj5.rewardCode = obj6;
      obj15.reward = obj5;
      obj7.questRewards = obj15;
      tmp2 = obj7;
    }
  }
  obj.tenantMetadata = tmp2;
  obj.consumed = skuId.consumed;
  return obj;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/utils/QuestServerUtils.tsx");

export const isQuestWithKnownConfigVersion = function isQuestWithKnownConfigVersion(config) {
  try {
    const match = _mod5021.match(config.config);
    return match.with({ config_version: 2 }, () => true).exhaustive();
  } catch (err) {
    return false;
  }
};
export const questConfigFromServer = function questConfigFromServer(body) {
  const match = _mod5021.match(body);
  return match.with({ config_version: 2 }, (id) => Quest.questFromServerV2(id)).exhaustive();
};
export const questUserStatusFromServer = function questUserStatusFromServer(body) {
  const obj = {
    userId: body.user_id,
    questId: body.quest_id,
    enrolledAt: body.enrolled_at,
    completedAt: body.completed_at,
    claimedAt: body.claimed_at,
    claimedTier: null,
    orbQuantityClaimed: null,
    lastStreamHeartbeatAt: null,
    streamProgressSeconds: null,
    dismissedQuestContent: null,
    progress: null,
  };
  let claimed_tier = body.claimed_tier;
  if (claimed_tier == null) {
    claimed_tier = null;
  }
  obj.claimedTier = claimed_tier;
  let orb_quantity_claimed = body.orb_quantity_claimed;
  if (orb_quantity_claimed == null) {
    orb_quantity_claimed = null;
  }
  obj.orbQuantityClaimed = orb_quantity_claimed;
  ({
    last_stream_heartbeat_at: obj.lastStreamHeartbeatAt,
    stream_progress_seconds: obj.streamProgressSeconds,
    dismissed_quest_content: obj.dismissedQuestContent,
  } = body);
  obj.progress = progressFromServer(body.progress);
  return obj;
};
export const questWithUserStatusFromServer = function questWithUserStatusFromServer(body) {
  const obj = {
    id: body.id,
    preview: body.preview,
    config: null,
    userStatus: null,
    targetedContent: null,
    trafficMetadataSealed: null,
  };
  const match = _mod5021.match(body.config);
  obj.config = match.with({ config_version: 2 }, (id) => Quest.questFromServerV2(id)).exhaustive();
  let tmp = null;
  if (null != body.user_status) {
    const user_status = body.user_status;
    const obj2 = {
      userId: null,
      questId: null,
      enrolledAt: null,
      completedAt: null,
      claimedAt: null,
      claimedTier: null,
      orbQuantityClaimed: null,
      lastStreamHeartbeatAt: null,
      streamProgressSeconds: null,
      dismissedQuestContent: null,
      progress: null,
    };
    ({
      user_id: obj4.userId,
      quest_id: obj4.questId,
      enrolled_at: obj4.enrolledAt,
      completed_at: obj4.completedAt,
      claimed_at: obj4.claimedAt,
      claimed_tier,
    } = user_status);
    if (claimed_tier == null) {
      claimed_tier = null;
    }
    obj2.claimedTier = claimed_tier;
    let orb_quantity_claimed = user_status.orb_quantity_claimed;
    if (orb_quantity_claimed == null) {
      orb_quantity_claimed = null;
    }
    obj2.orbQuantityClaimed = orb_quantity_claimed;
    ({
      last_stream_heartbeat_at: obj4.lastStreamHeartbeatAt,
      stream_progress_seconds: obj4.streamProgressSeconds,
      dismissed_quest_content: obj4.dismissedQuestContent,
    } = user_status);
    obj2.progress = progressFromServer(user_status.progress);
    tmp = obj2;
  }
  obj.userStatus = tmp;
  ({ targeted_content: obj.targetedContent, traffic_metadata_sealed: obj.trafficMetadataSealed } = body);
  return obj;
};
export const excludedQuestFromServer = function excludedQuestFromServer(id) {
  return { id: id.id, replacementId: id.replacement_id };
};
export const getClaimedQuestWithUserStatusFromServer = function getClaimedQuestWithUserStatusFromServer(id) {
  const obj = { id: id.id, config: null, userStatus: null };
  const config = id.config;
  const obj2 = {
    id: config.id,
    startsAt: config.starts_at,
    expiresAt: config.expires_at,
    features: config.features,
    messages: {
      questName: config.messages.quest_name,
      gamePublisher: config.messages.game_publisher,
      gameTitle: config.messages.game_title,
    },
    assets: {
      hero: config.assets.hero,
      heroVideo: config.assets.hero_video,
      questBarHero: config.assets.quest_bar_hero,
      questBarHeroVideo: config.assets.quest_bar_hero_video,
      gameTile: config.assets.game_tile,
      logotype: config.assets.logotype,
      logotypeLight: config.assets.logotype_light,
      logotypeDark: config.assets.logotype_dark,
      gameTileLight: config.assets.game_tile_light,
      gameTileDark: config.assets.game_tile_dark,
    },
    colors: { primary: config.colors.primary, secondary: config.colors.secondary },
    rewards: null,
    cosponsorMetadata: Quest.questCosponsorMetadataFromServer(config.cosponsor_metadata),
  };
  const rewards = config.rewards;
  obj2.rewards = rewards.map(getSimpleRewardFromServer);
  obj.config = obj2;
  let tmp = null;
  if (null != id.user_status) {
    const user_status = id.user_status;
    const obj6 = {
      userId: null,
      questId: null,
      enrolledAt: null,
      completedAt: null,
      claimedAt: null,
      claimedTier: null,
      orbQuantityClaimed: null,
      lastStreamHeartbeatAt: null,
      streamProgressSeconds: null,
      dismissedQuestContent: null,
      progress: null,
    };
    ({
      user_id: obj4.userId,
      quest_id: obj4.questId,
      enrolled_at: obj4.enrolledAt,
      completed_at: obj4.completedAt,
      claimed_at: obj4.claimedAt,
      claimed_tier,
    } = user_status);
    if (claimed_tier == null) {
      claimed_tier = null;
    }
    obj6.claimedTier = claimed_tier;
    let orb_quantity_claimed = user_status.orb_quantity_claimed;
    if (orb_quantity_claimed == null) {
      orb_quantity_claimed = null;
    }
    obj6.orbQuantityClaimed = orb_quantity_claimed;
    ({
      last_stream_heartbeat_at: obj4.lastStreamHeartbeatAt,
      stream_progress_seconds: obj4.streamProgressSeconds,
      dismissed_quest_content: obj4.dismissedQuestContent,
    } = user_status);
    obj6.progress = progressFromServer(user_status.progress);
    tmp = obj6;
  }
  obj.userStatus = tmp;
  return obj;
};
export const questsRewardCodeFromServer = function questsRewardCodeFromServer(body) {
  const obj = {
    userId: body.user_id,
    questId: body.quest_id,
    code: body.code,
    platform: body.platform,
    claimedAt: body.claimed_at,
    tier: null,
  };
  let tier = body.tier;
  if (tier == null) {
    tier = null;
  }
  obj.tier = tier;
  return obj;
};
export const questsEntitlementsFromServer = function questsEntitlementsFromServer(body) {
  const obj = { claimedAt: body.claimed_at, items: null, errors: body.errors };
  const entitlements = body.entitlements;
  obj.items = entitlements.map(_questsEntitlementFromServer);
  return obj;
};
