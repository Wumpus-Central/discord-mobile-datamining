// === Module 10018: QuestRewardUtils ===

// Module 10018 (QuestRewardUtils)
import intl6 from "intl" /* 1126 */;
import _mod4110 from "module_4110" /* 4110 */;
import QuestTypes from "QuestTypes" /* 5633 */;
import QuestDataUtils from "QuestDataUtils" /* 7196 */;
import QuestRewardTypes from "QuestRewardTypes" /* 7205 */;
import QuestRewardExpirationMode from "QuestRewardExpirationMode" /* 10019 */;
import QuestOrbMultiplierHooks from "QuestOrbMultiplierHooks" /* 10020 */;
import QuestOrbMultiplierUtils from "QuestOrbMultiplierUtils" /* 10021 */;
import FractionalPremiumUtils from "FractionalPremiumUtils" /* 10022 */;
import QuestCopyUtils from "QuestCopyUtils" /* 10023 */;
import QuestRewardAssignmentMethods from "QuestRewardAssignmentMethods" /* 10024 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7066 */;
import size from "module_2" /* 2 */;

const f102479 = (type) => type.type === QuestRewardTypes.QuestRewardTypes.FRACTIONAL_PREMIUM;
const f102480 = (type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY;
const f102482 = (type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY;
const f102484 = (type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY;
function _getDefaultRewardName(rewardsConfig, stateFromStores, arg2) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  if (rewards.some(f102479)) {
    const obj4 = FractionalPremiumUtils;
    return obj4.getFractionalPremiumQuestRewardName(rewardsConfig);
  } else {
    const rewards2 = rewardsConfig.rewardsConfig.rewards;
    if (rewards2.some(f102480)) {
      const rewards1 = rewardsConfig.rewardsConfig.rewards;
      const found = rewards1.find(f102484);
      let num = null;
      if (null != found) {
        if (null == stateFromStores) {
          num = found.orbQuantity;
        } else {
          const rewards3 = rewardsConfig.rewardsConfig.rewards;
          const obj5 = QuestOrbMultiplierHooks;
          const questOrbMultiplierEligibilityForUser = obj5.getQuestOrbMultiplierEligibilityForUser(stateFromStores);
          const found1 = rewards3.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY);
          let premiumOrbQuantity;
          if (found1 != null) {
            premiumOrbQuantity = found1.premiumOrbQuantity;
          }
          const tmp8 = null != premiumOrbQuantity && premiumOrbQuantity > 0;
          if (tmp8) {
            let orbQuantity;
            const tmp15Result = QuestOrbMultiplierUtils;
            if (tmp15Result.shouldReceiveQuestOrbMultiplier(questOrbMultiplierEligibilityForUser)) {
              let orbQuantity2 = found.premiumOrbQuantity;
              if (orbQuantity2 == null) {
                orbQuantity2 = found.orbQuantity;
              }
              orbQuantity = orbQuantity2;
            }
            num = orbQuantity;
          }
          orbQuantity = found.orbQuantity;
        }
      }
      if (num == null) {
        const rewards4 = rewardsConfig.rewardsConfig.rewards;
        const found2 = rewards4.find(f102482);
        let orbQuantity1;
        if (found2 != null) {
          orbQuantity1 = found2.orbQuantity;
        }
        num = orbQuantity1;
      }
      if (num == null) {
        num = 0;
      }
      const intl = intl6.intl;
      const obj2 = { orbAmount: num };
      return intl.formatToPlainString(intl6.t["nLXlh+"], obj2);
    } else {
      const obj = QuestCopyUtils;
      const messages = obj.getDefaultReward(rewardsConfig).messages;
      return arg2 ? messages.nameWithArticle : messages.name;
    }
  }
}
let items = [QuestRewardExpirationMode.QuestRewardExpirationMode.PREMIUM_EXTENSION, QuestRewardExpirationMode.QuestRewardExpirationMode.PREMIUM_PERMANENT];
const set = new Set(items);
let result = size.fileFinishedImporting("modules/quests/utils/QuestRewardUtils.tsx");

export const getCollectiblesQuestReward = function getCollectiblesQuestReward(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  const found = rewards.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.COLLECTIBLE);
  let type;
  if (found != null) {
    type = found.type;
  }
  let tmp3 = null;
  if (type === QuestRewardTypes.QuestRewardTypes.COLLECTIBLE) {
    tmp3 = found;
  }
  return tmp3;
};
export const getCollectibleQuestRewardExtendableExpirationDate = function getCollectibleQuestRewardExtendableExpirationDate(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  const found = rewards.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.COLLECTIBLE);
  let type;
  if (found != null) {
    type = found.type;
  }
  let tmp5 = null;
  if (type === QuestRewardTypes.QuestRewardTypes.COLLECTIBLE) {
    tmp5 = found;
  }
  let questFormattedDate = null;
  if (null != tmp5) {
    questFormattedDate = null;
    if ("expiresAtPremium" in tmp5) {
      questFormattedDate = null;
      if (null != tmp5.expiresAtPremium) {
        const tmp3Result = QuestDataUtils;
        questFormattedDate = tmp3Result.getQuestFormattedDate(tmp5.expiresAtPremium);
      }
    }
  }
  return questFormattedDate;
};
export const getCollectibleQuestRewardDuration = function getCollectibleQuestRewardDuration(config) {
  const rewards = config.rewardsConfig.rewards;
  const found = rewards.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.COLLECTIBLE);
  let type;
  if (found != null) {
    type = found.type;
  }
  let tmp5 = null;
  if (type === QuestRewardTypes.QuestRewardTypes.COLLECTIBLE) {
    tmp5 = found;
  }
  if (null != tmp5) {
    if ("expiresAt" in tmp5) {
      if (null != tmp5.expiresAt) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const date = new Date(config.expiresAt);
        const _Date2 = Date;
        const self3 = this;
        const self4 = this;
        const date1 = new Date(tmp5.expiresAt);
        const tmp3Result = _mod4110;
        const differenceInDaysResult = tmp3Result.differenceInDays(date1, date);
        const _Math3 = Math;
        let num = 0;
        const rounded = Math.floor(differenceInDaysResult / 30);
        if (25 <= differenceInDaysResult % 30) {
          num = 1;
        }
        const sum = rounded + num;
        if (sum >= 12) {
          const _Math2 = Math;
          const rounded1 = Math.floor(sum / 12);
          const intl4 = intl6.intl;
          const obj2 = { years: rounded1 };
          return intl4.formatToPlainString(intl6.t.PClsrw, obj2);
        } else if (sum > 0) {
          const intl3 = intl6.intl;
          const obj3 = { months: sum };
          return intl3.formatToPlainString(intl6.t.kridzK, obj3);
        } else {
          const tmp3Result2 = _mod4110;
          const differenceInDaysResult1 = tmp3Result2.differenceInDays(date1, date);
          if (differenceInDaysResult1 >= 7) {
            const _Math = Math;
            const rounded2 = Math.ceil(differenceInDaysResult1 / 7);
            const intl2 = intl6.intl;
            const obj4 = { weeks: rounded2 };
            return intl2.formatToPlainString(intl6.t.EmoBD2, obj4);
          } else {
            const intl = intl6.intl;
            const obj = { days: differenceInDaysResult1 };
            return intl.formatToPlainString(intl6.t["k2UNz+"], obj);
          }
        }
      }
    }
  }
  return null;
};
export const hasFractionalPremiumQuestReward = function hasFractionalPremiumQuestReward(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  return rewards.some(f102479);
};
export const hasVirtualCurrencyReward = function hasVirtualCurrencyReward(config) {
  const rewards = config.rewardsConfig.rewards;
  return rewards.some(f102480);
};
export const hasPremiumOrbQuantity = function hasPremiumOrbQuantity(config) {
  const rewards = config.rewardsConfig.rewards;
  const found = rewards.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY);
  let premiumOrbQuantity;
  if (found != null) {
    premiumOrbQuantity = found.premiumOrbQuantity;
  }
  return null != premiumOrbQuantity && premiumOrbQuantity > 0;
};
export const hasCollectiblesQuestReward = function hasCollectiblesQuestReward(config) {
  const rewards = config.rewardsConfig.rewards;
  const found = rewards.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.COLLECTIBLE);
  let type;
  if (found != null) {
    type = found.type;
  }
  let tmp3 = null;
  if (type === QuestRewardTypes.QuestRewardTypes.COLLECTIBLE) {
    tmp3 = found;
  }
  return null != tmp3;
};
export const hasInGameQuestReward = function hasInGameQuestReward(config) {
  const rewards = config.rewardsConfig.rewards;
  return rewards.some((type) => type.type === QuestRewardTypes.QuestRewardTypes.IN_GAME);
};
export const hasQuestRewardCode = function hasQuestRewardCode(config) {
  const rewards = config.rewardsConfig.rewards;
  return rewards.some((type) => type.type === QuestRewardTypes.QuestRewardTypes.REWARD_CODE);
};
export const getInGameQuestReward = function getInGameQuestReward(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  let found = rewards.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.IN_GAME);
  if (found == null) {
    found = null;
  }
  return found;
};
export const getCollectiblesQuestRewardItem = function getCollectiblesQuestRewardItem(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  const found = rewards.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.COLLECTIBLE);
  let type;
  if (found != null) {
    type = found.type;
  }
  let tmp3 = null;
  if (type === QuestRewardTypes.QuestRewardTypes.COLLECTIBLE) {
    tmp3 = found;
  }
  let skuId;
  if (tmp3 != null) {
    skuId = tmp3.skuId;
  }
  const product = CollectiblesCategoryStore.getProduct(skuId);
  let first;
  if (product != null) {
    const items = product.items;
    if (items != null) {
      first = items[0];
    }
  }
  if (first == null) {
    first = null;
  }
  return first;
};
export const getVirtualCurrencyRewardOrbQuantity = function getVirtualCurrencyRewardOrbQuantity(config) {
  const rewards = config.rewardsConfig.rewards;
  const found = rewards.find(f102482);
  let orbQuantity;
  if (found != null) {
    orbQuantity = found.orbQuantity;
  }
  return orbQuantity;
};
export const getVirtualCurrencyRewardPremiumOrbQuantity = function getVirtualCurrencyRewardPremiumOrbQuantity(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  const found = rewards.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY);
  let type;
  if (found != null) {
    type = found.type;
  }
  if (type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY) {
    return found.premiumOrbQuantity;
  }
};
export const isCollectibleQuestRewardPremiumExtendable = function isCollectibleQuestRewardPremiumExtendable(config) {
  const rewards = config.rewardsConfig.rewards;
  const found = rewards.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.COLLECTIBLE);
  let type;
  if (found != null) {
    type = found.type;
  }
  let tmp3 = null;
  if (type === QuestRewardTypes.QuestRewardTypes.COLLECTIBLE) {
    tmp3 = found;
  }
  let expirationMode;
  if (tmp3 != null) {
    expirationMode = tmp3.expirationMode;
  }
  const hasItem = null != expirationMode && set.has(expirationMode);
  return hasItem;
};
export const isCollectibleQuestRewardPermanentWithPremiumSubscription = function isCollectibleQuestRewardPermanentWithPremiumSubscription(config) {
  const rewards = config.rewardsConfig.rewards;
  const found = rewards.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.COLLECTIBLE);
  let type;
  if (found != null) {
    type = found.type;
  }
  let tmp5 = null;
  if (type === QuestRewardTypes.QuestRewardTypes.COLLECTIBLE) {
    tmp5 = found;
  }
  let expirationMode;
  if (tmp5 != null) {
    expirationMode = tmp5.expirationMode;
  }
  let hasItem = null != expirationMode && set.has(expirationMode);
  if (hasItem) {
    const rewards1 = config.rewardsConfig.rewards;
    const found1 = rewards1.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.COLLECTIBLE);
    let type1;
    if (found1 != null) {
      type1 = found1.type;
    }
    let tmp11 = null;
    if (type1 === QuestRewardTypes.QuestRewardTypes.COLLECTIBLE) {
      tmp11 = found1;
    }
    let expirationMode1;
    if (tmp11 != null) {
      expirationMode1 = tmp11.expirationMode;
    }
    hasItem = expirationMode1 === QuestRewardExpirationMode.QuestRewardExpirationMode.PREMIUM_PERMANENT;
  }
  return hasItem;
};
export const getQuestPrimaryReward = function getQuestPrimaryReward(quest) {
  let tmp;
  const userStatus = quest.userStatus;
  let num;
  if (userStatus != null) {
    num = userStatus.claimedTier;
  }
  if (num == null) {
    num = 0;
  }
  const config = quest.config;
  if ("rewardsConfig" in quest.config) {
    tmp = config.rewardsConfig.rewards[num];
  } else {
    tmp = config.rewards[num];
  }
  return tmp;
};
export const getQuestOrbMultiplier = function getQuestOrbMultiplier(config) {
  let orbQuantity;
  let premiumOrbQuantity;
  const rewards = config.rewardsConfig.rewards;
  const found = rewards.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY);
  let type;
  if (found != null) {
    type = found.type;
  }
  if (type !== QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY) {
    return null;
  } else {
    ({ premiumOrbQuantity, orbQuantity } = found);
    let result = null;
    if (null != premiumOrbQuantity) {
      result = null;
      if (0 !== orbQuantity) {
        const _Math = Math;
        result = Math.round(premiumOrbQuantity / orbQuantity * 100) / 100;
      }
    }
    return result;
  }
};
export const getQuestOrbMultiplierForUser = function getQuestOrbMultiplierForUser(rewardsConfig, isFractionalPremiumWithNoStandardSub) {
  let orbQuantity;
  let premiumOrbQuantity;
  if (null == isFractionalPremiumWithNoStandardSub) {
    return 1;
  } else {
    const rewards = rewardsConfig.rewardsConfig.rewards;
    const found = rewards.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY);
    let type;
    if (found != null) {
      type = found.type;
    }
    let num = null;
    if (type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY) {
      ({ premiumOrbQuantity, orbQuantity } = found);
      let result = null;
      if (null != premiumOrbQuantity) {
        result = null;
        if (0 !== orbQuantity) {
          const _Math = Math;
          result = Math.round(premiumOrbQuantity / orbQuantity * 100) / 100;
        }
      }
      num = result;
    }
    if (num == null) {
      num = 1;
    }
    const rewards1 = rewardsConfig.rewardsConfig.rewards;
    const tmp2Result = QuestOrbMultiplierHooks;
    const questOrbMultiplierEligibilityForUser = tmp2Result.getQuestOrbMultiplierEligibilityForUser(isFractionalPremiumWithNoStandardSub);
    const found1 = rewards1.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY);
    let premiumOrbQuantity1;
    if (found1 != null) {
      premiumOrbQuantity1 = found1.premiumOrbQuantity;
    }
    let num6 = 1;
    const tmp9 = null != premiumOrbQuantity1 && premiumOrbQuantity1 > 0;
    if (tmp9) {
      num6 = 1;
      const tmp2Result2 = QuestOrbMultiplierUtils;
      if (tmp2Result2.shouldReceiveQuestOrbMultiplier(questOrbMultiplierEligibilityForUser)) {
        num6 = num;
      }
    }
    return num6;
  }
};
export const getQuestOrbRewardQuantityForUser = function getQuestOrbRewardQuantityForUser(config, stateFromStores2) {
  const rewards = config.rewardsConfig.rewards;
  const found = rewards.find(f102484);
  if (null == found) {
    return null;
  } else if (null == stateFromStores2) {
    return found.orbQuantity;
  } else {
    const rewards1 = config.rewardsConfig.rewards;
    const obj2 = QuestOrbMultiplierHooks;
    const questOrbMultiplierEligibilityForUser = obj2.getQuestOrbMultiplierEligibilityForUser(stateFromStores2);
    const found1 = rewards1.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY);
    let premiumOrbQuantity;
    if (found1 != null) {
      premiumOrbQuantity = found1.premiumOrbQuantity;
    }
    const tmp3 = null != premiumOrbQuantity && premiumOrbQuantity > 0;
    if (tmp3) {
      let orbQuantity;
      const tmp5Result = QuestOrbMultiplierUtils;
      if (tmp5Result.shouldReceiveQuestOrbMultiplier(questOrbMultiplierEligibilityForUser)) {
        let orbQuantity2 = found.premiumOrbQuantity;
        if (orbQuantity2 == null) {
          orbQuantity2 = found.orbQuantity;
        }
        orbQuantity = orbQuantity2;
      }
      return orbQuantity;
    }
    orbQuantity = found.orbQuantity;
  }
};
export const getDefaultRewardName = function getDefaultRewardName(config, stateFromStores) {
  return _getDefaultRewardName(config, stateFromStores, false);
};
export const getDefaultRewardNameWithArticle = function getDefaultRewardNameWithArticle(config, stateFromStores) {
  return _getDefaultRewardName(config, stateFromStores, true);
};
export const getRewardCodeQuestReward = function getRewardCodeQuestReward(idx) {
  if (null == idx.idx) {
    return null;
  } else {
    let tmp5 = null;
    if (tmp.config.rewardsConfig.rewards[idx.idx].type === QuestRewardTypes.QuestRewardTypes.REWARD_CODE) {
      tmp5 = tmp2;
    }
    return tmp5;
  }
};
export const isTieredRewardCodeQuest = function isTieredRewardCodeQuest(quest) {
  const rewardsConfig = quest.quest.config.rewardsConfig;
  let everyResult = rewardsConfig.assignmentMethod === QuestRewardAssignmentMethods.QuestRewardAssignmentMethods.TIERED && rewardsConfig.rewards.length > 0;
  if (everyResult) {
    const rewards = rewardsConfig.rewards;
    everyResult = rewards.every((type) => type.type === QuestRewardTypes.QuestRewardTypes.REWARD_CODE);
  }
  return everyResult;
};
export const getDefaultPlatform = function getDefaultPlatform(config) {
  let CROSS_PLATFORM;
  const platforms = config.rewardsConfig.platforms;
  if (platforms.length > 0) {
    CROSS_PLATFORM = platforms[0];
  } else {
    CROSS_PLATFORM = QuestTypes.QuestRewardCodePlatforms.CROSS_PLATFORM;
  }
  return CROSS_PLATFORM;
};
export const getPlatformString = function getPlatformString(arg0) {
  if (QuestTypes.QuestRewardCodePlatforms.XBOX === arg0) {
    const intl5 = intl6.intl;
    return intl5.string(intl6.t.G84UWZ);
  } else if (QuestTypes.QuestRewardCodePlatforms.PLAYSTATION === arg0) {
    const intl4 = intl6.intl;
    return intl4.string(intl6.t["6IeKx2"]);
  } else if (QuestTypes.QuestRewardCodePlatforms.SWITCH === arg0) {
    const intl3 = intl6.intl;
    return intl3.string(intl6.t["1pp0su"]);
  } else if (QuestTypes.QuestRewardCodePlatforms.PC === arg0) {
    const intl2 = intl6.intl;
    return intl2.string(intl6.t["YK+wUg"]);
  } else if (QuestTypes.QuestRewardCodePlatforms.CROSS_PLATFORM === arg0) {
    const intl = intl6.intl;
    return intl.string(intl6.t.UWVbzV);
  }
};