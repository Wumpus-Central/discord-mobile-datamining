// discord_app/modules/quests/utils/QuestUtils.tsx
import _slicedToArray from "_slicedToArray";
import set from "set";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import updateVoiceState from "updateVoiceState";
import keys from "keys";
import QuestsExperimentLocations from "QuestsExperimentLocations";

let c10;
let c9;
let metroImportAll;
const require = arg1;
function isSponsoredPlayQuest(quest) {
  if (null == quest) {
    return false;
  } else {
    const desktopApplicationIds = require(6012) /* getApplicationIdsByTaskTypes */.getDesktopApplicationIds(quest);
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
({ DISCORD_APPLICATION_ID: metroImportAll, QuestVariants: c9, RewardFilterTypes: c10 } = QuestsExperimentLocations);
let result = require("createGuildRecordFromRust").fileFinishedImporting("modules/quests/utils/QuestUtils.tsx");

export { isSponsoredPlayQuest };
export const isPlayAnyActivityQuest = function isPlayAnyActivityQuest(quest) {
  return require(6012) /* getApplicationIdsByTaskTypes */.getPlayActivityApplicationId(quest) === closure_8;
};
export { hasVariant };
export const canLaunchActivity = function canLaunchActivity(quest) {
  let hasPlayActivityTaskResult = require(6012) /* getApplicationIdsByTaskTypes */.hasPlayActivityTask(quest);
  if (!hasPlayActivityTaskResult) {
    hasPlayActivityTaskResult = require(6012) /* getApplicationIdsByTaskTypes */.hasAchievementActivityTask(quest);
    const tmpResult = require(6012) /* getApplicationIdsByTaskTypes */;
  }
  return hasPlayActivityTaskResult;
};
export const filterQuestsForSocialEntrypoints = function filterQuestsForSocialEntrypoints(stateFromStores, outer1_15) {
  let tmp5;
  let tmp6;
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
        let obj2 = require(6012) /* getApplicationIdsByTaskTypes */;
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
  return config.sharePolicy !== require(6013) /* QuestSharePolicy */.QuestSharePolicy.NOT_SHAREABLE;
};
export const isStreamingAndCanWatch = function isStreamingAndCanWatch(arg0, stateFromStores) {
  let first = null != arg0 && null != stateFromStores;
  if (first) {
    const obj = require(6014) /* canStreamInChannel */;
    first = obj.canWatchStream(stateFromStores, updateVoiceState, createGuildRecordFromRust, getUncachedChannelPermissions, set)[0];
  }
  return first;
};
export const getQuestType = function getQuestType(config) {
  let obj = require(6012) /* getApplicationIdsByTaskTypes */;
  obj = { config };
  const QuestType = require(6015) /* QuestType */.QuestType;
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
  let fromContent;
  let questId;
  let utmMedium;
  let utmSource;
  ({ questId, fromContent, utmSource, utmMedium } = arg0);
  state = state.getState();
  const obj = { utmSourceCurrent: utmSource, utmMediumCurrent: utmMedium, utmCampaignCurrent: questId, utmContentCurrent: null };
  obj[3] = require(6016) /* getQuestContentName */.getQuestContentName(fromContent);
  state.setUtmCurrentContext(obj);
};