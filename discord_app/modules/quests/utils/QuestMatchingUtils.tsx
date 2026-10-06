// === Module 9077: QuestMatchingUtils ===

// Module 9077 (QuestMatchingUtils)
import Constants from "Constants" /* 1085 */;
import Constants2 from "Constants" /* 2011 */;
import QuestDataUtils from "QuestDataUtils" /* 7196 */;
import utils_QuestUtils from "utils/QuestUtils" /* 7219 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7221 */;
import getApplicationIdsForGameDefault from "getApplicationIdsForGame" /* 9079 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ApplicationStore from "ApplicationStore" /* 5124 */;
import SocialSdkApplicationStore from "SocialSdkApplicationStore" /* 9078 */;
import QuestConstants from "QuestConstants" /* 5630 */;
import size from "module_2" /* 2 */;

let userStatus;

let metroImportAll;
let metroImportDefault;
let metroRequire;
function questMatchesActivity(application_id, id) {
  let tmp = null != application_id;
  if (tmp) {
    const tmp3 = application_id.application_id === closure_10 || application_id.platform === ActivityGamePlatforms.XBOX;
    if (!tmp3) {
      let tmp8;
      const tmp7 = application_id.platform === ActivityGamePlatforms.PS4 || application_id.platform === tmp6.PS5;
      if (!tmp7) {
        tmp8 = null != id && id.id === metroImportDefault && application_id.application_id === metroImportAll;
        if (!tmp8) {
          let tmp11 = null != application_id.application_id;
          if (tmp11) {
            application_id = application_id.application_id;
            const obj = QuestTaskUtils;
            const allApplicationIds = obj.getAllApplicationIds(id);
            tmp11 = null != allApplicationIds && allApplicationIds.some((item) => item === closure_0);
            null != allApplicationIds && allApplicationIds.some((item) => item === closure_0);
          }
          tmp8 = tmp11;
        }
      }
      tmp = tmp8;
    }
    const str = application_id.name;
    const formatted = str.toLowerCase();
    const obj3 = QuestTaskUtils;
    const consoleApplicationId = obj3.getConsoleApplicationId(id);
    let flag = false;
    if (null != consoleApplicationId) {
      const application = ApplicationStore.getApplication(consoleApplicationId);
      let tmp21 = null != application;
      if (tmp21) {
        const str2 = application.name;
        tmp21 = formatted === str2.toLowerCase();
      }
      flag = tmp21;
    }
    tmp8 = flag;
  }
  return tmp;
}
function getQuestByActivity(result, application_id) {
  let tmp4;
  const obj = result[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp3 = _slicedToArray(tmp, 2);
    [r10011, tmp4] = tmp3;
    if (questMatchesActivity(application_id, tmp4)) {
      let obj2 = QuestDataUtils;
      if (!obj2.isQuestExpired(tmp4)) {
        obj.return();
        return tmp4;
      }
    }
    continue;
  }
}
function questMatchesApplicationId(arg0, quest) {
  let closure_0 = arg0;
  const obj = QuestTaskUtils;
  const allApplicationIds = obj.getAllApplicationIds(quest);
  const tmp = null != allApplicationIds && allApplicationIds.some((item) => item === closure_0);
  return tmp;
}
({ DISCORD_APPLICATION_ID: metroRequire, PLAY_ACTIVITY_CLOUD_GAMING_QUEST_ID: metroImportDefault, PLAY_ACTIVITY_SOCIAL_ENTRY_APPLICATION_ID: metroImportAll } = QuestConstants);
const ActivityGamePlatforms = Constants.ActivityGamePlatforms;
let closure_10 = Constants2.XBOX_ACTIVITY_APPLICATION_ID;
const result = size.fileFinishedImporting("modules/quests/utils/QuestMatchingUtils.tsx");

export { questMatchesActivity };
export { getQuestByActivity };
export const getQuestByApplicationId = function getQuestByApplicationId(arg0, arg1) {
  let tmp5;
  const obj = arg0[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp4 = _slicedToArray(tmp2, 2);
    [r10013, tmp5] = tmp4;
    if (questMatchesApplicationId(arg1, tmp5)) {
      let obj2 = QuestDataUtils;
      if (!obj2.isQuestExpired(tmp5)) {
        obj.return();
        break;
      }
      return tmp5;
    }
    continue;
  }
};
export const allPlayOnDesktopQuestsByApplicationId = function allPlayOnDesktopQuestsByApplicationId(arr, arg1) {
  let closure_0 = arg1;
  arr = Array.from(arr.values());
  return arr.filter((quest) => {
    const obj = QuestTaskUtils;
    const allApplicationIds = obj.getAllApplicationIds(quest);
    let hasPlayOnDesktopTaskResult = null != allApplicationIds && allApplicationIds.some((item) => item === closure_0);
    if (hasPlayOnDesktopTaskResult) {
      const tmpResult = QuestDataUtils;
      hasPlayOnDesktopTaskResult = !tmpResult.isQuestExpired(quest);
    }
    if (hasPlayOnDesktopTaskResult) {
      const obj2 = { quest };
      const tmpResult2 = QuestTaskUtils;
      hasPlayOnDesktopTaskResult = tmpResult2.hasPlayOnDesktopTask(obj2);
    }
    return hasPlayOnDesktopTaskResult;
  });
};
export const getQuestsFromActivities = function getQuestsFromActivities(result, arg1) {
  if (null != arg1) {
    if (null != result) {
      const obj = arg1[Symbol.iterator]();
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
  let items;
  let closure_0 = applicationId;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  if (null == applicationId) {
    items = [];
  } else {
    const _Array = Array;
    const arr = Array.from(quests.values());
    items = arr.filter((userStatus) => {
      const obj = QuestTaskUtils;
      const activityApplicationId = obj.getActivityApplicationId(userStatus);
      let canLaunchActivityResult = null != userStatus;
      if (canLaunchActivityResult) {
        const tmpResult = utils_QuestUtils;
        canLaunchActivityResult = tmpResult.canLaunchActivity(userStatus);
      }
      if (canLaunchActivityResult) {
        const tmpResult2 = QuestDataUtils;
        canLaunchActivityResult = !tmpResult2.isQuestExpired(userStatus);
      }
      if (canLaunchActivityResult) {
        canLaunchActivityResult = activityApplicationId === applicationId;
      }
      if (canLaunchActivityResult) {
        canLaunchActivityResult = activityApplicationId !== metroRequire;
      }
      if (canLaunchActivityResult) {
        userStatus = userStatus.userStatus;
        let completedAt;
        if (userStatus != null) {
          completedAt = userStatus.completedAt;
        }
        canLaunchActivityResult = null == completedAt || flag;
      }
      if (canLaunchActivityResult) {
        const userStatus2 = userStatus.userStatus;
        let enrolledAt;
        if (userStatus2 != null) {
          enrolledAt = userStatus2.enrolledAt;
        }
        canLaunchActivityResult = null == enrolledAt || flag;
      }
      return canLaunchActivityResult;
    });
  }
  return items;
};
export const getQuestApplicationIdsForRunningGame = function getQuestApplicationIdsForRunningGame(pid, arg1) {
  const obj = getApplicationIdsForGameDefault(arg1);
  const applicationIdForPID = SocialSdkApplicationStore.getApplicationIdForPID(pid.pid);
  if (null != applicationIdForPID) {
    const tmp4 = getApplicationIdsForGameDefault(applicationIdForPID);
    for (const item10019 of tmp4) {
      let addResult = obj.add(item10019);
      continue;
    }
  }
  return obj;
};