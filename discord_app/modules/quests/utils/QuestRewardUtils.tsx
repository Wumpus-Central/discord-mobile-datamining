// === Module 9850: QuestRewardUtils ===

// Module 9850 (QuestRewardUtils)
import util from "util" /* 1113 */;
import _mod4567 from "module_4567" /* 4567 */;
import QuestTypes from "QuestTypes" /* 6919 */;
import QuestDataUtils from "QuestDataUtils" /* 7982 */;
import QuestRewardTypes from "QuestRewardTypes" /* 7991 */;
import QuestRewardExpirationMode from "QuestRewardExpirationMode" /* 9851 */;
import QuestOrbMultiplierHooks from "QuestOrbMultiplierHooks" /* 9852 */;
import QuestOrbMultiplierUtils from "QuestOrbMultiplierUtils" /* 9853 */;
import FractionalPremiumUtils from "FractionalPremiumUtils" /* 9854 */;
import QuestCopyUtils from "QuestCopyUtils" /* 9855 */;
import QuestRewardAssignmentMethods from "QuestRewardAssignmentMethods" /* 9856 */;
import size from "module_2" /* 2 */;

function _getDefaultRewardName(rewardsConfig, stateFromStores, arg2) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  if (rewards.some((type) => type.type === QuestRewardTypes.QuestRewardTypes.FRACTIONAL_PREMIUM)) {
    return FractionalPremiumUtils.getFractionalPremiumQuestRewardName(rewardsConfig);
  } else {
    const rewards2 = rewardsConfig.rewardsConfig.rewards;
    if (rewards2.some((type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY)) {
      const rewards1 = rewardsConfig.rewardsConfig.rewards;
      const found = rewards1.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY);
      let num = null;
      if (null != found) {
        if (null == stateFromStores) {
          num = found.orbQuantity;
        } else {
          const rewards3 = rewardsConfig.rewardsConfig.rewards;
          const questOrbMultiplierEligibilityForUser = QuestOrbMultiplierHooks.getQuestOrbMultiplierEligibilityForUser(stateFromStores);
          const found1 = rewards3.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY);
          let premiumOrbQuantity;
          if (found1 != null) {
            premiumOrbQuantity = found1.premiumOrbQuantity;
          }
          let tmp8 = null != premiumOrbQuantity;
          if (tmp8) {
            tmp8 = premiumOrbQuantity > 0;
          }
          if (tmp8) {
            if (tmp15Result.shouldReceiveQuestOrbMultiplier(questOrbMultiplierEligibilityForUser)) {
              let orbQuantity2 = found.premiumOrbQuantity;
              if (orbQuantity2 == null) {
                orbQuantity2 = found.orbQuantity;
              }
              let orbQuantity = orbQuantity2;
            }
            num = orbQuantity;
            tmp15Result = QuestOrbMultiplierUtils;
          }
          orbQuantity = found.orbQuantity;
        }
      }
      if (num == null) {
        const rewards4 = rewardsConfig.rewardsConfig.rewards;
        const found2 = rewards4.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY);
        let orbQuantity1;
        if (found2 != null) {
          orbQuantity1 = found2.orbQuantity;
        }
        num = orbQuantity1;
      }
      if (num == null) {
        num = 0;
      }
      const intl = util.intl;
      const obj2 = { orbAmount: num };
      return intl.formatToPlainString(util.t["nLXlh+"], obj2);
    } else {
      const messages = QuestCopyUtils.getDefaultReward(rewardsConfig).messages;
      return arg2 ? messages.nameWithArticle : messages.name;
    }
  }
}
const items = [QuestRewardExpirationMode.QuestRewardExpirationMode.PREMIUM_EXTENSION, QuestRewardExpirationMode.QuestRewardExpirationMode.PREMIUM_PERMANENT];
const set = new Set(items);
let result = size.fileFinishedImporting("modules/quests/utils/QuestRewardUtils.tsx");

export function getCollectiblesQuestReward(rewardsConfig) {
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
}
export function getCollectibleQuestRewardExtendableExpirationDate(rewardsConfig) {
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
        questFormattedDate = QuestDataUtils.getQuestFormattedDate(tmp5.expiresAtPremium);
        const tmp3Result = QuestDataUtils;
      }
    }
  }
  return questFormattedDate;
}
export function getCollectibleQuestRewardDuration(config) {
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
        const date = new Date(config.expiresAt);
        const _Date2 = Date;
        const date1 = new Date(tmp5.expiresAt);
        const differenceInDaysResult = _mod4567.differenceInDays(date1, date);
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
          const intl4 = util.intl;
          const obj2 = { years: rounded1 };
          return intl4.formatToPlainString(util.t.PClsrw, obj2);
        } else if (sum > 0) {
          const intl3 = util.intl;
          const obj3 = { months: sum };
          return intl3.formatToPlainString(util.t.kridzK, obj3);
        } else {
          const differenceInDaysResult1 = _mod4567.differenceInDays(date1, date);
          if (differenceInDaysResult1 >= 7) {
            const _Math = Math;
            const rounded2 = Math.ceil(differenceInDaysResult1 / 7);
            const intl2 = util.intl;
            const obj4 = { weeks: rounded2 };
            return intl2.formatToPlainString(util.t.EmoBD2, obj4);
          } else {
            const intl = util.intl;
            const obj = { days: differenceInDaysResult1 };
            return intl.formatToPlainString(util.t["k2UNz+"], obj);
          }
          const tmp3Result2 = _mod4567;
        }
        const tmp3Result = _mod4567;
      }
    }
  }
  return null;
}
export function hasFractionalPremiumQuestReward(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  return rewards.some((type) => type.type === QuestRewardTypes.QuestRewardTypes.FRACTIONAL_PREMIUM);
}
export function hasVirtualCurrencyReward(config) {
  const rewards = config.rewardsConfig.rewards;
  return rewards.some((type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY);
}
export function hasPremiumOrbQuantity(config) {
  const rewards = config.rewardsConfig.rewards;
  const found = rewards.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY);
  let premiumOrbQuantity;
  if (found != null) {
    premiumOrbQuantity = found.premiumOrbQuantity;
  }
  let tmp3 = null != premiumOrbQuantity;
  if (tmp3) {
    tmp3 = premiumOrbQuantity > 0;
  }
  return tmp3;
}
export function hasCollectiblesQuestReward(config) {
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
}
export function hasInGameQuestReward(config) {
  const rewards = config.rewardsConfig.rewards;
  return rewards.some((type) => type.type === QuestRewardTypes.QuestRewardTypes.IN_GAME);
}
export function hasQuestRewardCode(config) {
  const rewards = config.rewardsConfig.rewards;
  return rewards.some((type) => type.type === QuestRewardTypes.QuestRewardTypes.REWARD_CODE);
}
export function getInGameQuestReward(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  let found = rewards.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.IN_GAME);
  if (found == null) {
    found = null;
  }
  return found;
}
export function getVirtualCurrencyRewardOrbQuantity(config) {
  const rewards = config.rewardsConfig.rewards;
  const found = rewards.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY);
  let orbQuantity;
  if (found != null) {
    orbQuantity = found.orbQuantity;
  }
  return orbQuantity;
}
export function isCollectibleQuestRewardPremiumExtendable(config) {
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
  let hasItem = null != expirationMode;
  if (hasItem) {
    hasItem = set.has(expirationMode);
  }
  return hasItem;
}
export function isCollectibleQuestRewardPermanentWithPremiumSubscription(config) {
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
  let hasItem = null != expirationMode;
  if (hasItem) {
    hasItem = set.has(expirationMode);
  }
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
}
export function getQuestPrimaryReward(quest) {
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
    let tmp = config.rewardsConfig.rewards[num];
  } else {
    tmp = config.rewards[num];
  }
  return tmp;
}
export function getQuestOrbMultiplier(config) {
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
}
export function getQuestOrbRewardQuantityForUser(config, stateFromStores) {
  const rewards = config.rewardsConfig.rewards;
  const found = rewards.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY);
  if (null == found) {
    return null;
  } else if (null == stateFromStores) {
    return found.orbQuantity;
  } else {
    const rewards1 = config.rewardsConfig.rewards;
    const questOrbMultiplierEligibilityForUser = QuestOrbMultiplierHooks.getQuestOrbMultiplierEligibilityForUser(stateFromStores);
    const found1 = rewards1.find((type) => type.type === QuestRewardTypes.QuestRewardTypes.VIRTUAL_CURRENCY);
    let premiumOrbQuantity;
    if (found1 != null) {
      premiumOrbQuantity = found1.premiumOrbQuantity;
    }
    let tmp3 = null != premiumOrbQuantity;
    if (tmp3) {
      tmp3 = premiumOrbQuantity > 0;
    }
    if (tmp3) {
      if (tmp5Result.shouldReceiveQuestOrbMultiplier(questOrbMultiplierEligibilityForUser)) {
        let orbQuantity2 = found.premiumOrbQuantity;
        if (orbQuantity2 == null) {
          orbQuantity2 = found.orbQuantity;
        }
        let orbQuantity = orbQuantity2;
      }
      return orbQuantity;
    }
    orbQuantity = found.orbQuantity;
  }
}
export function getDefaultRewardName(config, stateFromStores) {
  return _getDefaultRewardName(config, stateFromStores, false);
}
export function getDefaultRewardNameWithArticle(config, stateFromStores) {
  return _getDefaultRewardName(config, stateFromStores, true);
}
export function getRewardCodeQuestReward(idx) {
  if (null == idx.idx) {
    return null;
  } else {
    let tmp5 = null;
    if (tmp.config.rewardsConfig.rewards[idx].type === QuestRewardTypes.QuestRewardTypes.REWARD_CODE) {
      tmp5 = tmp2;
    }
    return tmp5;
  }
}
export function isTieredRewardCodeQuest(quest) {
  const rewardsConfig = quest.quest.config.rewardsConfig;
  let everyResult = rewardsConfig.assignmentMethod === QuestRewardAssignmentMethods.QuestRewardAssignmentMethods.TIERED;
  if (everyResult) {
    everyResult = rewardsConfig.rewards.length > 0;
  }
  if (everyResult) {
    const rewards = rewardsConfig.rewards;
    everyResult = rewards.every((type) => type.type === QuestRewardTypes.QuestRewardTypes.REWARD_CODE);
  }
  return everyResult;
}
export function getDefaultPlatform(config) {
  const platforms = config.rewardsConfig.platforms;
  if (platforms.length > 0) {
    let CROSS_PLATFORM = platforms[0];
  } else {
    CROSS_PLATFORM = QuestTypes.QuestRewardCodePlatforms.CROSS_PLATFORM;
  }
  return CROSS_PLATFORM;
}