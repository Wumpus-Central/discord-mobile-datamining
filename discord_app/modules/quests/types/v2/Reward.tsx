// discord_app/modules/quests/types/v2/Reward.tsx
import set from "../../../../../_runtime/00002_set.js";
import QuestsVisibleMessagesChangedSource from "../../QuestTypes.tsx";
import QuestRewardTypes from "../../../../../discord_common/js/shared/shared-constants/QuestRewardTypes.tsx";

function _rewardRedemptionInstructionsFromServer(redemption_instructions_by_platform) {
  const obj = {};
  const keys = Object.keys(redemption_instructions_by_platform);
  for (const item10012 of keys) {
    let _parseInt = parseInt;
    let tmp2 = item10012;
    let parsed = parseInt(item10012);
    let tmp5 = require;
    let tmp6 = dependencyMap;
    let tmp4 = parsed;
    let QUEST_REWARD_CODE_PLATFORMS_SET = QuestsVisibleMessagesChangedSource.QUEST_REWARD_CODE_PLATFORMS_SET;
    if (QUEST_REWARD_CODE_PLATFORMS_SET.has(parsed)) {
      let tmp7 = parsed;
      let tmp8 = item10012;
      obj[tmp4] = arg0[tmp2];
    }
    continue;
  }
  return obj;
}
function _questRewardV2FromServer(type) {
  type = type.type;
  if (QuestRewardTypes.QuestRewardTypes.REWARD_CODE === type) {
    let obj = {
      type: null,
      skuId: null,
      asset: null,
      assetVideo: null,
      messages: null,
      approximateCount: null,
      redemptionLink: null,
    };
    obj[0] = tmp(7463).QuestRewardTypes.REWARD_CODE;
    ({ sku_id: obj9[1], asset: obj9[2], asset_video: obj9[3] } = type);
    obj = { redemptionInstructionsByPlatform: null, name: null, nameWithArticle: null };
    obj[0] = _rewardRedemptionInstructionsFromServer(type.messages.redemption_instructions_by_platform);
    obj[1] = type.messages.name;
    obj[2] = type.messages.name_with_article;
    obj[4] = obj;
    ({ approximate_count: obj9[5], redemption_link: obj9[6] } = type);
    return obj;
  } else if (tmp(7463).QuestRewardTypes.COLLECTIBLE === type) {
    obj1 = {
      type: null,
      skuId: null,
      asset: null,
      assetVideo: null,
      messages: null,
      expiresAt: null,
      expirationMode: null,
      expiresAtPremium: null,
    };
    obj1[0] = tmp(7463).QuestRewardTypes.COLLECTIBLE;
    ({ sku_id: obj7[1], asset: obj7[2], asset_video: obj7[3] } = type);
    const obj2 = { redemptionInstructionsByPlatform: null, name: null, nameWithArticle: null };
    obj2[0] = _rewardRedemptionInstructionsFromServer(type.messages.redemption_instructions_by_platform);
    obj2[1] = type.messages.name;
    obj2[2] = type.messages.name_with_article;
    obj1[4] = obj2;
    ({ expires_at: obj7[5], expiration_mode: obj7[6], expires_at_premium: obj7[7] } = type);
    return obj1;
  } else if (tmp(7463).QuestRewardTypes.VIRTUAL_CURRENCY === type) {
    const obj3 = { type: null, skuId: null, messages: null, orbQuantity: null, premiumOrbQuantity: null };
    obj3[0] = tmp(7463).QuestRewardTypes.VIRTUAL_CURRENCY;
    obj3[1] = type.sku_id;
    const obj4 = { redemptionInstructionsByPlatform: null, name: null, nameWithArticle: null };
    obj4[0] = _rewardRedemptionInstructionsFromServer(type.messages.redemption_instructions_by_platform);
    obj4[1] = type.messages.name;
    obj4[2] = type.messages.name_with_article;
    obj3[2] = obj4;
    ({ orb_quantity: obj5[3], premium_orb_quantity: obj5[4] } = type);
    return obj3;
  } else if (tmp(7463).QuestRewardTypes.FRACTIONAL_PREMIUM === type) {
    const obj5 = { type: null, skuId: null, asset: null, assetVideo: null, quantity: null, messages: null };
    obj5[0] = tmp(7463).QuestRewardTypes.FRACTIONAL_PREMIUM;
    ({ sku_id: obj3[1], asset: obj3[2], asset_video: obj3[3], quantity: obj3[4] } = type);
    const obj6 = { redemptionInstructionsByPlatform: null, name: null, nameWithArticle: null };
    obj6[0] = _rewardRedemptionInstructionsFromServer(type.messages.redemption_instructions_by_platform);
    obj6[1] = type.messages.name;
    obj6[2] = type.messages.name_with_article;
    obj5[5] = obj6;
    return obj5;
  } else if (tmp(7463).QuestRewardTypes.IN_GAME === type) {
    obj = { type: null, skuId: null, asset: null, assetVideo: null, messages: null };
    obj[0] = tmp(7463).QuestRewardTypes.IN_GAME;
    ({ sku_id: obj[1], asset: obj[2], asset_video: obj[3] } = type);
    const obj7 = { redemptionInstructionsByPlatform: null, name: null, nameWithArticle: null };
    obj7[0] = _rewardRedemptionInstructionsFromServer(type.messages.redemption_instructions_by_platform);
    obj7[1] = type.messages.name;
    obj7[2] = type.messages.name_with_article;
    obj[4] = obj7;
    return obj;
  }
}
const result = set.fileFinishedImporting("modules/quests/types/v2/Reward.tsx");

export const questRewardsConfigV2FromServer = function questRewardsConfigV2FromServer(rewards_config) {
  const rewards = rewards_config.rewards;
  return {
    assignmentMethod: rewards_config.assignment_method,
    rewards: rewards.map(_questRewardV2FromServer),
    rewardsExpireAt: rewards_config.rewards_expire_at,
    platforms: rewards_config.platforms,
  };
};
