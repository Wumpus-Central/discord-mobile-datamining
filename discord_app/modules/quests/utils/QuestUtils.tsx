// === Module 7859: utils/QuestUtils ===

// Module 7859 (utils/QuestUtils)
import StreamPermissionUtils from "StreamPermissionUtils" /* 6718 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7861 */;
import QuestSharePolicy from "QuestSharePolicy" /* 7862 */;
import QuestType2 from "QuestType" /* 7863 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7864 */;
import _slicedToArray from "module_32" /* 32 */;
import GameConsoleStore from "GameConsoleStore" /* 5760 */;
import GuildStore from "GuildStore" /* 4880 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import VoiceStateStore from "VoiceStateStore" /* 5674 */;
import QuestUtmStore from "QuestUtmStore" /* 7860 */;

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
function hasVariant(nextResult, MOBILE_ACTIVITY_QUEST) {
  return new Set(nextResult.config.features).has(MOBILE_ACTIVITY_QUEST);
}
const QuestConstants = fn(6775);
({ DISCORD_APPLICATION_ID: closure_8, QuestVariants: closure_9, RewardFilterTypes: c10 } = QuestConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/utils/QuestUtils.tsx");

export { isSponsoredPlayQuest };
export function isPlayAnyActivityQuest(quest) {
  return QuestTaskUtils.getPlayActivityApplicationId(quest) === React6;
}
export { hasVariant };
export function canLaunchActivity(quest) {
  let hasPlayActivityTaskResult = QuestTaskUtils.hasPlayActivityTask(quest);
  if (!hasPlayActivityTaskResult) {
    hasPlayActivityTaskResult = QuestTaskUtils.hasAchievementActivityTask(quest);
    const tmpResult = QuestTaskUtils;
  }
  return hasPlayActivityTaskResult;
}
export function filterQuestsForSocialEntrypoints(stateFromStores, has) {
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
}
export function isShareableQuest(config) {
  return config.sharePolicy !== QuestSharePolicy.QuestSharePolicy.NOT_SHAREABLE;
}
export function isStreamingAndCanWatch(arg0, stateFromStores) {
  let first = null != arg0 && null != stateFromStores;
  if (first) {
    const obj = StreamPermissionUtils;
    first = obj.canWatchStream(stateFromStores, VoiceStateStore, GuildStore, PermissionStore, GameConsoleStore)[0];
  }
  return first;
}
export function getQuestType(config) {
  const obj2 = { config };
  const QuestType = QuestType2.QuestType;
  return QuestTaskUtils.hasWatchVideoTasks({ config }) ? QuestType.VIDEO : QuestType.GAMEPLAY;
}
export function isQuestFeaturedByHero(questHomeHero, id) {
  const questIds = questHomeHero.questIds;
  let flag;
  if (questIds != null) {
    flag = questIds.includes(id);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}
export function shouldShowBountiesGivenFilters(filters) {
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
}
export function setQuestHomeUtmContext(arg0) {
  ({ questId, fromContent, utmSource, utmMedium } = arg0);
  const state = QuestUtmStore.getState();
  const obj = { utmSourceCurrent: utmSource, utmMediumCurrent: utmMedium, utmCampaignCurrent: questId, utmContentCurrent: AnalyticsTypes.getQuestContentName(fromContent) };
  state.setUtmCurrentContext(obj);
}