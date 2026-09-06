// === Module 7722: utils/QuestUtils ===

// Module 7722 (utils/QuestUtils)
import QuestTaskUtils from "QuestTaskUtils" /* 7724 */;
import QuestSharePolicy from "QuestSharePolicy" /* 7725 */;
import StreamPermissionUtils from "StreamPermissionUtils" /* 7726 */;
import QuestType2 from "QuestType" /* 7727 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7728 */;
import _slicedToArray from "module_32" /* 32 */;
import GameConsoleStore from "GameConsoleStore" /* 4577 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;
import QuestUtmStore from "QuestUtmStore" /* 7723 */;

require = fn;
function isSponsoredPlayQuest(quest) {
  if (null == quest) {
    return false;
  } else {
    const desktopApplicationIds = QuestTaskUtils.getDesktopApplicationIds(quest);
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
const QuestConstants = fn(5444);
({ DISCORD_APPLICATION_ID: closure_8, QuestVariants: closure_9, RewardFilterTypes: c10 } = QuestConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/utils/QuestUtils.tsx");

export { isSponsoredPlayQuest };
export const isPlayAnyActivityQuest = function isPlayAnyActivityQuest(quest) {
  return QuestTaskUtils.getPlayActivityApplicationId(quest) === React6;
};
export { hasVariant };
export const canLaunchActivity = function canLaunchActivity(quest) {
  let hasPlayActivityTaskResult = QuestTaskUtils.hasPlayActivityTask(quest);
  if (!hasPlayActivityTaskResult) {
    hasPlayActivityTaskResult = QuestTaskUtils.hasAchievementActivityTask(quest);
    const tmpResult = QuestTaskUtils;
  }
  return hasPlayActivityTaskResult;
};
export const filterQuestsForSocialEntrypoints = function filterQuestsForSocialEntrypoints(stateFromStores, has) {
  const map = new Map();
  while (tmp !== undefined) {
    let tmp4 = _slicedToArray(tmp2, 2);
    [tmp5, tmp6] = tmp4;
    if (!isSponsoredPlayQuest(tmp6)) {
      if (!hasVariant(tmp6, constants.NON_GAMING_PLAY_QUEST)) {
        let obj2 = QuestTaskUtils;
        let questTaskTypes = obj2.getQuestTaskTypes(tmp6);
        for (const item10038 of questTaskTypes) {
          if (arg1.has(item10038)) {
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
  const obj = { config };
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
  const state = QuestUtmStore.getState();
  const obj = { utmSourceCurrent: utmSource, utmMediumCurrent: utmMedium, utmCampaignCurrent: questId, utmContentCurrent: AnalyticsTypes.getQuestContentName(fromContent) };
  state.setUtmCurrentContext(obj);
};