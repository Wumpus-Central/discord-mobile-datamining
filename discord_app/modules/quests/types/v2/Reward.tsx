// === Module 8039: Reward ===

// Module 8039 (Reward)
import QuestTypes from "QuestTypes" /* 5752 */;
import QuestRewardTypes from "QuestRewardTypes" /* 8031 */;
import size from "module_2" /* 2 */;

function _rewardRedemptionInstructionsFromServer(redemption_instructions_by_platform) {
  const obj = {};
  const keys = Object.keys(redemption_instructions_by_platform);
  for (const item10012 of keys) {
    let _parseInt = parseInt;
    let parsed = parseInt(item10012);
    let tmp4 = parsed;
    let QUEST_REWARD_CODE_PLATFORMS_SET = QuestTypes.QUEST_REWARD_CODE_PLATFORMS_SET;
    if (QUEST_REWARD_CODE_PLATFORMS_SET.has(parsed)) {
      obj[tmp4] = arg0[item10012];
    }
    continue;
  }
  return obj;
}
function _questRewardV2FromServer(type) {
  type = type.type;
  if (QuestRewardTypes.QuestRewardTypes.REWARD_CODE === type) {
    const obj2 = { type: QuestRewardTypes.QuestRewardTypes.REWARD_CODE, skuId: null, asset: null, assetVideo: null, messages: null, approximateCount: null, redemptionLink: null };
    ({ sku_id: obj9.skuId, asset: obj9.asset, asset_video: obj9.assetVideo } = type);
    const obj4 = { redemptionInstructionsByPlatform: _rewardRedemptionInstructionsFromServer(type.messages.redemption_instructions_by_platform), name: type.messages.name, nameWithArticle: type.messages.name_with_article };
    obj2.messages = obj4;
    ({ approximate_count: obj9.approximateCount, redemption_link: obj9.redemptionLink } = type);
    return obj2;
  } else if (QuestRewardTypes.QuestRewardTypes.COLLECTIBLE === type) {
    const obj6 = { type: QuestRewardTypes.QuestRewardTypes.COLLECTIBLE, skuId: null, asset: null, assetVideo: null, messages: null, expiresAt: null, expirationMode: null, expiresAtPremium: null };
    ({ sku_id: obj7.skuId, asset: obj7.asset, asset_video: obj7.assetVideo } = type);
    const obj8 = { redemptionInstructionsByPlatform: _rewardRedemptionInstructionsFromServer(type.messages.redemption_instructions_by_platform), name: type.messages.name, nameWithArticle: type.messages.name_with_article };
    obj6.messages = obj8;
    ({ expires_at: obj7.expiresAt, expiration_mode: obj7.expirationMode, expires_at_premium: obj7.expiresAtPremium } = type);
    return obj6;
  } else if (QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY === type) {
    const obj10 = { type: QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY, skuId: type.sku_id, messages: null, orbQuantity: null, premiumOrbQuantity: null };
    const obj19 = { redemptionInstructionsByPlatform: _rewardRedemptionInstructionsFromServer(type.messages.redemption_instructions_by_platform), name: type.messages.name, nameWithArticle: type.messages.name_with_article };
    obj10.messages = obj19;
    ({ orb_quantity: obj5.orbQuantity, premium_orb_quantity: obj5.premiumOrbQuantity } = type);
    return obj10;
  } else if (QuestRewardTypes.QuestRewardTypes.FRACTIONAL_PREMIUM === type) {
    const obj20 = { type: QuestRewardTypes.QuestRewardTypes.FRACTIONAL_PREMIUM, skuId: null, asset: null, assetVideo: null, quantity: null, messages: null };
    ({ sku_id: obj3.skuId, asset: obj3.asset, asset_video: obj3.assetVideo, quantity: obj3.quantity } = type);
    const obj21 = { redemptionInstructionsByPlatform: _rewardRedemptionInstructionsFromServer(type.messages.redemption_instructions_by_platform), name: type.messages.name, nameWithArticle: type.messages.name_with_article };
    obj20.messages = obj21;
    return obj20;
  } else if (QuestRewardTypes.QuestRewardTypes.IN_GAME === type) {
    const obj = { type: QuestRewardTypes.QuestRewardTypes.IN_GAME, skuId: null, asset: null, assetVideo: null, messages: null };
    ({ sku_id: obj.skuId, asset: obj.asset, asset_video: obj.assetVideo } = type);
    const obj22 = { redemptionInstructionsByPlatform: _rewardRedemptionInstructionsFromServer(type.messages.redemption_instructions_by_platform), name: type.messages.name, nameWithArticle: type.messages.name_with_article };
    obj.messages = obj22;
    return obj;
  }
}
const result = size.fileFinishedImporting("modules/quests/types/v2/Reward.tsx");

export const questRewardsConfigV2FromServer = function questRewardsConfigV2FromServer(rewards_config) {
  const obj = { assignmentMethod: rewards_config.assignment_method, rewards: null, rewardsExpireAt: rewards_config.rewards_expire_at, platforms: rewards_config.platforms };
  const rewards = rewards_config.rewards;
  obj.rewards = rewards.map(_questRewardV2FromServer);
  return obj;
};