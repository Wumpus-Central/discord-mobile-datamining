// === Module 7206: utils/QuestUtils ===

// Module 7206 (utils/QuestUtils)
import QuestTaskUtils from "QuestTaskUtils" /* 7208 */;
import QuestSharePolicy from "QuestSharePolicy" /* 7209 */;
import StreamPermissionUtils from "StreamPermissionUtils" /* 7210 */;
import QuestType2 from "QuestType" /* 7211 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7212 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import GameConsoleStore from "GameConsoleStore" /* 4907 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;
import QuestUtmStore from "QuestUtmStore" /* 7207 */;
import QuestConstants from "QuestConstants" /* 5623 */;
import size from "module_2" /* 2 */;

let map, set;

let c10;
let c9;
let metroImportAll;
function isSponsoredPlayQuest(quest) {
  if (null == quest) {
    return false;
  } else {
    const obj = QuestTaskUtils;
    const desktopApplicationIds = obj.getDesktopApplicationIds(quest);
    return null != desktopApplicationIds && desktopApplicationIds.length > 1;
  }
}
function hasVariant(nextResult, MOBILE_ACTIVITY_QUEST) {
  set = new Set(nextResult.config.features);
  return set.has(MOBILE_ACTIVITY_QUEST);
}
({ DISCORD_APPLICATION_ID: metroImportAll, QuestVariants: c9, RewardFilterTypes: c10 } = QuestConstants);
let result = size.fileFinishedImporting("modules/quests/utils/QuestUtils.tsx");

export { isSponsoredPlayQuest };
export const isPlayAnyActivityQuest = function isPlayAnyActivityQuest(quest) {
  const obj = QuestTaskUtils;
  return obj.getPlayActivityApplicationId(quest) === metroImportAll;
};
export { hasVariant };
export const canLaunchActivity = function canLaunchActivity(quest) {
  const obj = QuestTaskUtils;
  let hasPlayActivityTaskResult = obj.hasPlayActivityTask(quest);
  if (!hasPlayActivityTaskResult) {
    const tmpResult = QuestTaskUtils;
    hasPlayActivityTaskResult = tmpResult.hasAchievementActivityTask(quest);
  }
  return hasPlayActivityTaskResult;
};
export const filterQuestsForSocialEntrypoints = function filterQuestsForSocialEntrypoints(stateFromStores, has) {
  let tmp5;
  let tmp6;
  map = new Map();
  const tmp = stateFromStores[Symbol.iterator]();
  while (tmp !== undefined) {
    let tmp4 = _slicedToArray(tmp2, 2);
    [tmp5, tmp6] = tmp4;
    if (!isSponsoredPlayQuest(tmp6)) {
      if (!hasVariant(tmp6, constants.NON_GAMING_PLAY_QUEST)) {
        let obj2 = QuestTaskUtils;
        let questTaskTypes = obj2.getQuestTaskTypes(tmp6);
        for (const item10038 of questTaskTypes) {
          if (has.has(item10038)) {
            let result = map.set(tmp5, tmp6);
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
    const obj = StreamPermissionUtils;
    first = obj.canWatchStream(stateFromStores, VoiceStateStore, GuildStore, PermissionStore, GameConsoleStore)[0];
  }
  return first;
};
export const getQuestType = function getQuestType(config) {
  const obj = QuestTaskUtils;
  const obj2 = { config };
  const hasWatchVideoTasksResult = obj.hasWatchVideoTasks(obj2);
  const QuestType = QuestType2.QuestType;
  return hasWatchVideoTasksResult ? QuestType.VIDEO : QuestType.GAMEPLAY;
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
  const f94500 = (group) => "task" === group.group;
  const f94501 = (group) => "reward" === group.group && group.filter === constants.VIRTUAL_CURRENCY;
  let tmp2 = !filters.some(f94500);
  filters.some(f94500);
  if (tmp2) {
    tmp2 = 0 === filters.length || filters.some(f94501);
    0 === filters.length || filters.some(f94501);
  }
  return tmp2;
};
export const setQuestHomeUtmContext = function setQuestHomeUtmContext(arg0) {
  let fromContent;
  let obj2;
  let questId;
  let utmMedium;
  let utmSource;
  ({ questId, fromContent, utmSource, utmMedium } = arg0);
  const state = QuestUtmStore.getState();
  const setUtmCurrentContext = state.setUtmCurrentContext;
  const obj = { utmSourceCurrent: utmSource, utmMediumCurrent: utmMedium, utmCampaignCurrent: questId, utmContentCurrent: obj2.getQuestContentName(fromContent) };
  obj2 = AnalyticsTypes;
  setUtmCurrentContext(obj);
};