// === Module 7467: isSponsoredPlayQuest ===

// Module 7467 (isSponsoredPlayQuest)
import getApplicationIdsByTaskTypes from "getApplicationIdsByTaskTypes" /* 7469 */;
import QuestSharePolicy from "QuestSharePolicy" /* 7470 */;
import canStreamInChannel from "canStreamInChannel" /* 7471 */;
import QuestType2 from "QuestType" /* 7472 */;
import getQuestContentName from "getQuestContentName" /* 7473 */;
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "set" /* 4495 */;
import closure_4 from "createGuildRecordFromRust" /* 1909 */;
import closure_5 from "getUncachedChannelPermissions" /* 4121 */;
import closure_6 from "updateVoiceState" /* 4497 */;
import closure_7 from "keys" /* 7468 */;
import QuestsExperimentLocations from "QuestsExperimentLocations" /* 5387 */;

require = arg1;
function isSponsoredPlayQuest(quest) {
  if (null == quest) {
    return false;
  } else {
    const desktopApplicationIds = getApplicationIdsByTaskTypes.getDesktopApplicationIds(quest);
    let tmp3 = null != desktopApplicationIds;
    if (tmp3) {
      tmp3 = desktopApplicationIds.length > 1;
    }
    return tmp3;
  }
}
function hasVariant(nextResult, NON_GAMING_PLAY_QUEST) {
  return new Set(nextResult.config.features).has(NON_GAMING_PLAY_QUEST);
}
({ DISCORD_APPLICATION_ID: closure_8, QuestVariants: c9, RewardFilterTypes: c10 } = QuestsExperimentLocations);
let result = require("set").fileFinishedImporting("modules/quests/utils/QuestUtils.tsx");

export { isSponsoredPlayQuest };
export const isPlayAnyActivityQuest = function isPlayAnyActivityQuest(quest) {
  return getApplicationIdsByTaskTypes.getPlayActivityApplicationId(quest) === closure_8;
};
export { hasVariant };
export const canLaunchActivity = function canLaunchActivity(quest) {
  let hasPlayActivityTaskResult = getApplicationIdsByTaskTypes.hasPlayActivityTask(quest);
  if (!hasPlayActivityTaskResult) {
    hasPlayActivityTaskResult = getApplicationIdsByTaskTypes.hasAchievementActivityTask(quest);
    const tmpResult = getApplicationIdsByTaskTypes;
  }
  return hasPlayActivityTaskResult;
};
export const filterQuestsForSocialEntrypoints = function filterQuestsForSocialEntrypoints(stateFromStores, closure_1_16) {
  const map = new Map();
  while (tmp !== undefined) {
    let tmp3 = callback;
    let tmp4 = callback(tmp2, 2);
    [tmp5, tmp6] = tmp4;
    let tmp7 = tmp6;
    let tmp8 = isSponsoredPlayQuest;
    if (!isSponsoredPlayQuest(tmp6)) {
      let tmp9 = hasVariant;
      let tmp10 = tmp6;
      let tmp11 = constants;
      if (!hasVariant(tmp7, constants.NON_GAMING_PLAY_QUEST)) {
        let tmp12 = require;
        let tmp13 = dependencyMap;
        let obj2 = getApplicationIdsByTaskTypes;
        let tmp14 = tmp6;
        let questTaskTypes = obj2.getQuestTaskTypes(tmp7);
        let tmp16 = questTaskTypes;
        let tmp17 = questTaskTypes;
        for (const item10038 of questTaskTypes) {
          if (arg1.has(item10038)) {
            let tmp18 = tmp5;
            let tmp19 = tmp6;
            let result = map.set(tmp5, tmp7);
            let tmp21 = obj3;
            obj3.return();
            break;
          }
          continue;
        }
      }
    }
    continue;
  }
  return map;
};
export const isShareableQuest = function isShareableQuest(config) {
  return config.sharePolicy !== QuestSharePolicy.QuestSharePolicy.NOT_SHAREABLE;
};
export const isStreamingAndCanWatch = function isStreamingAndCanWatch(arg0, stateFromStores) {
  let first = null != arg0 && null != stateFromStores;
  if (first) {
    const obj = canStreamInChannel;
    first = obj.canWatchStream(stateFromStores, closure_6, closure_4, closure_5, closure_3)[0];
  }
  return first;
};
export const getQuestType = function getQuestType(config) {
  let obj = getApplicationIdsByTaskTypes;
  obj = { config };
  const QuestType = QuestType2.QuestType;
  return obj.hasWatchVideoTasks(obj) ? QuestType.VIDEO : QuestType.GAMEPLAY;
};
export const isQuestFeaturedByHero = function isQuestFeaturedByHero(questHomeHero, id) {
  const questIds = questHomeHero.questIds;
  let flag;
  if (questIds != null) {
    flag = questIds.includes(id);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
export const shouldShowBountiesGivenFilters = function shouldShowBountiesGivenFilters(filters) {
  const someResult = filters.some((group) => "task" === group.group);
  let tmp2 = !someResult;
  if (!someResult) {
    tmp2 = 0 === filters.length || filters.some((group) => {
      let tmp = "reward" === group.group;
      if (tmp) {
        tmp = group.filter === constants.VIRTUAL_CURRENCY;
      }
      return tmp;
    });
    const tmp3 = 0 === filters.length || filters.some((group) => {
      let tmp = "reward" === group.group;
      if (tmp) {
        tmp = group.filter === constants.VIRTUAL_CURRENCY;
      }
      return tmp;
    });
  }
  return tmp2;
};
export const setQuestHomeUtmContext = function setQuestHomeUtmContext(arg0) {
  ({ questId, fromContent, utmSource, utmMedium } = arg0);
  state = state.getState();
  const obj = { utmSourceCurrent: utmSource, utmMediumCurrent: utmMedium, utmCampaignCurrent: questId, utmContentCurrent: getQuestContentName.getQuestContentName(fromContent) };
  state.setUtmCurrentContext(obj);
};