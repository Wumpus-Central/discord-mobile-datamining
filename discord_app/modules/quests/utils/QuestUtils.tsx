// discord_app/modules/quests/utils/QuestUtils.tsx
import QuestTaskUtils from "QuestTaskUtils.tsx";
import QuestSharePolicy from "../../../../discord_common/js/shared/shared-constants/QuestSharePolicy.tsx";
import StreamPermissionUtils from "../../go_live/utils/StreamPermissionUtils.tsx";
import QuestType2 from "../../../../discord_common/js/shared/shared-constants/QuestType.tsx";
import AnalyticsTypes from "../lib/analytics/AnalyticsTypes.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import GameConsoleStore from "../../game_console/GameConsoleStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import VoiceStateStore from "../../../stores/VoiceStateStore.tsx";
import QuestUtmStore from "../QuestUtmStore.tsx";

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
    let tmp7 = tmp6;
    if (!isSponsoredPlayQuest(tmp6)) {
      if (!hasVariant(tmp7, constants.NON_GAMING_PLAY_QUEST)) {
        let obj2 = QuestTaskUtils;
        let questTaskTypes = obj2.getQuestTaskTypes(tmp7);
        for (const item10038 of questTaskTypes) {
          if (arg1.has(item10038)) {
            let result = map.set(tmp5, tmp7);
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
    tmp2 =
      0 === filters.length ||
      filters.some((group) => {
        let tmp = "reward" === group.group;
        if (tmp) {
          tmp = group.filter === constants.VIRTUAL_CURRENCY;
        }
        return tmp;
      });
    const tmp3 =
      0 === filters.length ||
      filters.some((group) => {
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
  const obj = {
    utmSourceCurrent: utmSource,
    utmMediumCurrent: utmMedium,
    utmCampaignCurrent: questId,
    utmContentCurrent: AnalyticsTypes.getQuestContentName(fromContent),
  };
  state.setUtmCurrentContext(obj);
};
