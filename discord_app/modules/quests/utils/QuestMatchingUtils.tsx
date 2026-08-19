// discord_app/modules/quests/utils/QuestMatchingUtils.tsx
import getQuestDeliveryDataForPlacement from "QuestDataUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import addApplication from "../../applications/ApplicationStore.tsx";
import QuestsExperimentLocations from "../QuestConstants.tsx";
import { ActivityGamePlatforms } from "../../../Constants.tsx";
import { XBOX_ACTIVITY_APPLICATION_ID as closure_8 } from "../../activities/Constants.tsx";
import { getApplicationIdsByTaskTypes } from "QuestTaskUtils.tsx";

require = fn;
function questMatchesActivity(arg0, id) {
  let formatted = arg0;
  let tmp2 = null;
  if (null == arg0) {
    return tmp3;
  } else {
    let tmp5 = formatted.application_id === closure_8;
    if (!tmp5) {
      tmp5 = formatted.platform === ActivityGamePlatforms.XBOX;
    }
    if (!tmp5) {
      if (!tmp9) {
        let tmp10 = tmp2 != id;
        if (tmp10) {
          tmp10 = id.id === closure_5;
        }
        if (tmp10) {
          tmp10 = formatted.application_id === closure_6;
        }
        if (!tmp10) {
          let tmp13 = tmp2 != formatted.application_id;
          if (tmp13) {
            const application_id = formatted.application_id;
            const allApplicationIds = application_id(7476).getAllApplicationIds(id);
            const obj = application_id(7476);
            tmp13 = tmp2 != allApplicationIds && allApplicationIds.some((item, index) => item === closure_0);
            const tmp16 = tmp2 != allApplicationIds && allApplicationIds.some((item, index) => item === closure_0);
          }
          tmp10 = tmp13;
        }
      }
      tmp9 = formatted.platform === ActivityGamePlatforms.PS4 || formatted.platform === tmp8.PS5;
    }
    formatted = formatted.name.toLowerCase();
    const consoleApplicationId = application_id(7476).getConsoleApplicationId(id);
    let flag = false;
    if (tmp2 != consoleApplicationId) {
      application = application.getApplication(consoleApplicationId);
      tmp2 = tmp2 != application;
      if (tmp2) {
        tmp2 = formatted === application.name.toLowerCase();
      }
      flag = tmp2;
    }
    tmp10 = flag;
    const obj3 = application_id(7476);
  }
}
function getQuestByActivity(result, arg1) {
  const obj = result[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp3 = callback(tmp, 2);
    [r10011, tmp4] = tmp3;
    if (questMatchesActivity(arg1, tmp4)) {
      let obj2 = getQuestDeliveryDataForPlacement;
      if (!obj2.isQuestExpired(tmp4)) {
        obj.return();
        return tmp4;
      }
    }
    continue;
  }
}
function questMatchesApplicationId(arg0, quest) {
  const _require = arg0;
  const allApplicationIds = require("QuestTaskUtils.tsx").getAllApplicationIds(quest);
  const obj = getApplicationIdsByTaskTypes;
  return null != allApplicationIds && allApplicationIds.some((item, index) => item === closure_0);
}
({ DISCORD_APPLICATION_ID: c4, PLAY_ACTIVITY_CLOUD_GAMING_QUEST_ID: c5, PLAY_ACTIVITY_SOCIAL_ENTRY_APPLICATION_ID: closure_6 } = QuestsExperimentLocations);
const result = require("obj132").fileFinishedImporting("modules/quests/utils/QuestMatchingUtils.tsx");

export { questMatchesActivity };
export { getQuestByActivity };
export const getQuestByApplicationId = function getQuestByApplicationId(arg0, arg1) {
  const obj = arg0[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp4 = callback(tmp2, 2);
    [r10013, tmp5] = tmp4;
    if (questMatchesApplicationId(arg1, tmp5)) {
      let obj2 = getQuestDeliveryDataForPlacement;
      if (!obj2.isQuestExpired(tmp5)) {
        obj.return();
        break;
      }
      return tmp5;
    }
    continue;
  }
};
export const allPlayOnDesktopQuestsByApplicationId = function allPlayOnDesktopQuestsByApplicationId(arr) {
  closure_0 = arg1;
  arr = Array.from(arr.values());
  return arr.filter((item, index) => {
    let obj = callback(dependencyMap[5]);
    const allApplicationIds = obj.getAllApplicationIds(item);
    let hasPlayOnDesktopTaskResult = null != allApplicationIds && allApplicationIds.some((item, index) => item === closure_0);
    if (hasPlayOnDesktopTaskResult) {
      let tmpResult = callback(dependencyMap[6]);
      hasPlayOnDesktopTaskResult = !tmpResult.isQuestExpired(item);
    }
    if (hasPlayOnDesktopTaskResult) {
      tmpResult = callback(dependencyMap[5]);
      obj = { quest: null };
      obj[0] = item;
      hasPlayOnDesktopTaskResult = tmpResult.hasPlayOnDesktopTask(obj);
    }
    return hasPlayOnDesktopTaskResult;
  });
};
export const getQuestsFromActivities = function getQuestsFromActivities(result, memo1) {
  if (null != memo1) {
    if (null != result) {
      const obj = memo1[Symbol.iterator]();
      while (obj !== undefined) {
        let tmp7 = getQuestByActivity(result, tmp4);
        if (null != tmp7) {
          obj.return();
          return tmp7;
        }
      }
      return null;
    }
  }
  return null;
};
export const getEligibleQuestsForApplicationId = function getEligibleQuestsForApplicationId(quests, applicationId, arg2) {
  closure_0 = applicationId;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  if (null == applicationId) {
    let items = [];
  } else {
    const _Array = Array;
    items = Array.from(quests.values()).filter((item, index) => {
      const activityApplicationId = applicationId(flag[5]).getActivityApplicationId(item);
      let canLaunchActivityResult = null != item;
      if (canLaunchActivityResult) {
        let tmpResult = applicationId(flag[7]);
        canLaunchActivityResult = tmpResult.canLaunchActivity(item);
      }
      if (canLaunchActivityResult) {
        tmpResult = applicationId(flag[6]);
        canLaunchActivityResult = !tmpResult.isQuestExpired(item);
      }
      if (canLaunchActivityResult) {
        canLaunchActivityResult = activityApplicationId === applicationId;
      }
      if (canLaunchActivityResult) {
        canLaunchActivityResult = activityApplicationId !== closure_1_4;
      }
      if (canLaunchActivityResult) {
        const userStatus = item.userStatus;
        let completedAt;
        if (userStatus != null) {
          completedAt = userStatus.completedAt;
        }
        canLaunchActivityResult = null == completedAt || flag;
      }
      if (canLaunchActivityResult) {
        const userStatus2 = item.userStatus;
        let enrolledAt;
        if (userStatus2 != null) {
          enrolledAt = userStatus2.enrolledAt;
        }
        canLaunchActivityResult = null == enrolledAt || flag;
      }
      return canLaunchActivityResult;
    });
    const arr = Array.from(quests.values());
  }
  return items;
};