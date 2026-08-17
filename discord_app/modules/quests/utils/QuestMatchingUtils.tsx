// discord_app/modules/quests/utils/QuestMatchingUtils.tsx
import getQuestDeliveryDataForPlacement from "getQuestDeliveryDataForPlacement" /* 7451 */;
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "addApplication" /* 4478 */;
import QuestsExperimentLocations from "QuestsExperimentLocations" /* 6716 */;
import { ActivityGamePlatforms } from "ME" /* 676 */;
import { XBOX_ACTIVITY_APPLICATION_ID as closure_8 } from "items3" /* 4481 */;
import { getApplicationIdsByTaskTypes } from "QuestTaskUtils.tsx";

require = arg1;
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
            tmp13 = tmp2 != allApplicationIds && allApplicationIds.some((arg0) => arg0 === closure_0);
            const tmp16 = tmp2 != allApplicationIds && allApplicationIds.some((arg0) => arg0 === closure_0);
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
        const str2 = application.name;
      }
      flag = tmp2;
    }
    tmp10 = flag;
    const obj3 = application_id(7476);
    const str = formatted.name;
  }
}
function getQuestByActivity(result, arg1) {
  const obj = result[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp2 = callback;
    let tmp3 = callback(tmp, 2);
    [r10011, tmp4] = tmp3;
    let tmp5 = tmp4;
    let tmp6 = questMatchesActivity;
    if (questMatchesActivity(arg1, tmp4)) {
      let tmp7 = require;
      let tmp8 = dependencyMap;
      let obj2 = getQuestDeliveryDataForPlacement;
      let tmp9 = tmp4;
      if (!obj2.isQuestExpired(tmp5)) {
        let tmp10 = tmp4;
        let tmp11 = obj;
        obj.return();
        return tmp5;
      }
    }
    continue;
  }
}
function questMatchesApplicationId(arg0, quest) {
  const _require = arg0;
  const allApplicationIds = _getApplicationIdsByTaskTypes.getAllApplicationIds(quest);
  const obj = _getApplicationIdsByTaskTypes;
  return null != allApplicationIds && allApplicationIds.some((arg0) => arg0 === closure_0);
}
({ DISCORD_APPLICATION_ID: c4, PLAY_ACTIVITY_CLOUD_GAMING_QUEST_ID: c5, PLAY_ACTIVITY_SOCIAL_ENTRY_APPLICATION_ID: closure_6 } = QuestsExperimentLocations);
const result = require("set").fileFinishedImporting("modules/quests/utils/QuestMatchingUtils.tsx");

export { questMatchesActivity };
export { getQuestByActivity };
export const getQuestByApplicationId = function getQuestByApplicationId(arg0, arg1) {
  const obj = arg0[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp3 = callback;
    let tmp4 = callback(tmp2, 2);
    [r10013, tmp5] = tmp4;
    let tmp7 = questMatchesApplicationId;
    let tmp6 = tmp5;
    if (questMatchesApplicationId(arg1, tmp5)) {
      let tmp8 = require;
      let tmp9 = dependencyMap;
      let obj2 = getQuestDeliveryDataForPlacement;
      let tmp10 = tmp5;
      if (!obj2.isQuestExpired(tmp6)) {
        let tmp = tmp5;
        let tmp11 = obj;
        obj.return();
        break;
      }
      return tmp;
    }
    continue;
  }
};
export const allPlayOnDesktopQuestsByApplicationId = function allPlayOnDesktopQuestsByApplicationId(arr) {
  closure_0 = arg1;
  return Array.from(arr.values()).filter((quest) => {
    let obj = callback(closure_1_1[5]);
    const allApplicationIds = obj.getAllApplicationIds(quest);
    let hasPlayOnDesktopTaskResult = null != allApplicationIds && allApplicationIds.some((arg0) => arg0 === closure_0);
    if (hasPlayOnDesktopTaskResult) {
      let tmpResult = tmp(tmp2[6]);
      hasPlayOnDesktopTaskResult = !tmpResult.isQuestExpired(quest);
    }
    if (hasPlayOnDesktopTaskResult) {
      tmpResult = tmp(tmp2[5]);
      obj = { quest: null };
      obj[0] = quest;
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
        let tmp6 = getQuestByActivity;
        let tmp7 = getQuestByActivity(result, tmp4);
        let tmp8 = tmp7;
        if (null != tmp7) {
          let tmp9 = obj;
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
    items = Array.from(quests.values()).filter((userStatus) => {
      const activityApplicationId = applicationId(flag[5]).getActivityApplicationId(userStatus);
      let canLaunchActivityResult = null != userStatus;
      if (canLaunchActivityResult) {
        let tmpResult = tmp(tmp2[7]);
        canLaunchActivityResult = tmpResult.canLaunchActivity(userStatus);
      }
      if (canLaunchActivityResult) {
        tmpResult = tmp(tmp2[6]);
        canLaunchActivityResult = !tmpResult.isQuestExpired(userStatus);
      }
      if (canLaunchActivityResult) {
        canLaunchActivityResult = activityApplicationId === applicationId;
      }
      if (canLaunchActivityResult) {
        canLaunchActivityResult = activityApplicationId !== closure_1_4;
      }
      if (canLaunchActivityResult) {
        userStatus = userStatus.userStatus;
        let completedAt;
        if (userStatus != null) {
          completedAt = userStatus.completedAt;
        }
        canLaunchActivityResult = null == completedAt || flag;
        const tmp8 = null == completedAt || flag;
      }
      if (canLaunchActivityResult) {
        const userStatus2 = userStatus.userStatus;
        let enrolledAt;
        if (userStatus2 != null) {
          enrolledAt = userStatus2.enrolledAt;
        }
        canLaunchActivityResult = null == enrolledAt || flag;
        const tmp10 = null == enrolledAt || flag;
      }
      return canLaunchActivityResult;
    });
    const arr = Array.from(quests.values());
  }
  return items;
};