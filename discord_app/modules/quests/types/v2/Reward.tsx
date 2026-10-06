// === Module 7213: Reward ===

// Module 7213 (Reward)
import QuestTypes from "QuestTypes" /* 5633 */;
import QuestRewardTypes from "QuestRewardTypes" /* 7205 */;
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
      obj[tmp4] = redemption_instructions_by_platform[item10012];
    }
    continue;
  }
  return obj;
}
function _questRewardV2FromServer(type) {
  let obj19;
  let obj21;
  let obj22;
  let obj4;
  let obj8;
  type = type.type;
  if (QuestRewardTypes.QuestRewardTypes.REWARD_CODE === type) {
    ({ sku_id: obj9.skuId, asset: obj9.asset, asset_video: obj9.assetVideo } = type);
    const obj2 = { type: QuestRewardTypes.QuestRewardTypes.REWARD_CODE, skuId: null, asset: null, assetVideo: null, messages: obj4, approximateCount: null, redemptionLink: null };
    ({ approximate_count: obj9.approximateCount, redemption_link: obj9.redemptionLink } = type);
    obj4 = { redemptionInstructionsByPlatform: _rewardRedemptionInstructionsFromServer(type.messages.redemption_instructions_by_platform), name: type.messages.name, nameWithArticle: type.messages.name_with_article };
    return obj2;
  } else if (QuestRewardTypes.QuestRewardTypes.COLLECTIBLE === type) {
    ({ sku_id: obj7.skuId, asset: obj7.asset, asset_video: obj7.assetVideo } = type);
    const obj6 = { type: QuestRewardTypes.QuestRewardTypes.COLLECTIBLE, skuId: null, asset: null, assetVideo: null, messages: obj8, expiresAt: null, expirationMode: null, expiresAtPremium: null };
    ({ expires_at: obj7.expiresAt, expiration_mode: obj7.expirationMode, expires_at_premium: obj7.expiresAtPremium } = type);
    obj8 = { redemptionInstructionsByPlatform: _rewardRedemptionInstructionsFromServer(type.messages.redemption_instructions_by_platform), name: type.messages.name, nameWithArticle: type.messages.name_with_article };
    return obj6;
  } else if (QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY === type) {
    const obj10 = { type: QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY, skuId: type.sku_id, messages: obj19, orbQuantity: null, premiumOrbQuantity: null };
    ({ orb_quantity: obj5.orbQuantity, premium_orb_quantity: obj5.premiumOrbQuantity } = type);
    obj19 = { redemptionInstructionsByPlatform: _rewardRedemptionInstructionsFromServer(type.messages.redemption_instructions_by_platform), name: type.messages.name, nameWithArticle: type.messages.name_with_article };
    return obj10;
  } else if (QuestRewardTypes.QuestRewardTypes.FRACTIONAL_PREMIUM === type) {
    ({ sku_id: obj3.skuId, asset: obj3.asset, asset_video: obj3.assetVideo, quantity: obj3.quantity } = type);
    const obj20 = { type: QuestRewardTypes.QuestRewardTypes.FRACTIONAL_PREMIUM, skuId: null, asset: null, assetVideo: null, quantity: null, messages: obj21 };
    obj21 = { redemptionInstructionsByPlatform: _rewardRedemptionInstructionsFromServer(type.messages.redemption_instructions_by_platform), name: type.messages.name, nameWithArticle: type.messages.name_with_article };
    return obj20;
  } else if (QuestRewardTypes.QuestRewardTypes.IN_GAME === type) {
    const obj = { type: QuestRewardTypes.QuestRewardTypes.IN_GAME, skuId: null, asset: null, assetVideo: null, messages: obj22 };
    ({ sku_id: obj.skuId, asset: obj.asset, asset_video: obj.assetVideo } = type);
    obj22 = { redemptionInstructionsByPlatform: _rewardRedemptionInstructionsFromServer(type.messages.redemption_instructions_by_platform), name: type.messages.name, nameWithArticle: type.messages.name_with_article };
    return obj;
  }
}
const result = size.fileFinishedImporting("modules/quests/types/v2/Reward.tsx");

export const questRewardsConfigV2FromServer = function questRewardsConfigV2FromServer(rewards_config) {
  let rewards;
  const obj = { assignmentMethod: rewards_config.assignment_method, rewards: rewards.map(_questRewardV2FromServer), rewardsExpireAt: rewards_config.rewards_expire_at, platforms: rewards_config.platforms };
  rewards = rewards_config.rewards;
  return obj;
};