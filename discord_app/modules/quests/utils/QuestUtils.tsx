// discord_app/modules/quests/utils/QuestUtils.tsx
import getApplicationIdsByTaskTypes from "QuestTaskUtils.tsx";
import QuestSharePolicy from "../../../../discord_common/js/shared/shared-constants/QuestSharePolicy.tsx";
import canStreamInChannel from "../../go_live/utils/StreamPermissionUtils.tsx";
import QuestType2 from "../../../../discord_common/js/shared/shared-constants/QuestType.tsx";
import getQuestContentName from "../lib/analytics/AnalyticsTypes.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import set from "../../game_console/GameConsoleStore.tsx";
import createGuildRecordFromRust from "../../../stores/GuildStore.tsx";
import getUncachedChannelPermissions from "../../../stores/PermissionStore.tsx";
import updateVoiceState from "../../../stores/VoiceStateStore.tsx";
import keys from "../QuestUtmStore.tsx";
import QuestsExperimentLocations from "../QuestConstants.tsx";

require = fn;
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
let result = require("obj132").fileFinishedImporting("modules/quests/utils/QuestUtils.tsx");

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
export const filterQuestsForSocialEntrypoints = function filterQuestsForSocialEntrypoints(stateFromStores, closure_1_15) {
  const map = new Map();
  while (tmp !== undefined) {
    let tmp4 = callback(tmp2, 2);
    [tmp5, tmp6] = tmp4;
    if (!isSponsoredPlayQuest(tmp6)) {
      if (!hasVariant(tmp6, constants.NON_GAMING_PLAY_QUEST)) {
        let obj2 = getApplicationIdsByTaskTypes;
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
    const obj = canStreamInChannel;
    first = obj.canWatchStream(stateFromStores, closure_6, closure_4, closure_5, closure_3)[0];
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
  const someResult = filters.some((item, index) => "task" === item.group);
  let tmp2 = !someResult;
  if (!someResult) {
    tmp2 = 0 === filters.length || filters.some((item, index) => {
      let tmp = "reward" === item.group;
      if (tmp) {
        tmp = item.filter === constants.VIRTUAL_CURRENCY;
      }
      return tmp;
    });
    const tmp3 = 0 === filters.length || filters.some((item, index) => {
      let tmp = "reward" === item.group;
      if (tmp) {
        tmp = item.filter === constants.VIRTUAL_CURRENCY;
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