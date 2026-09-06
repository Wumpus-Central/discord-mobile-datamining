// === Module 11515: QuestMatchingUtils ===

// Module 11515 (QuestMatchingUtils)
import QuestDataUtils from "QuestDataUtils" /* 7699 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7724 */;
import getApplicationIdsForGameDefault from "getApplicationIdsForGame" /* 11516 */;
import _slicedToArray from "module_32" /* 32 */;
import ApplicationStore from "ApplicationStore" /* 4788 */;
import LocalActivityStore from "LocalActivityStore" /* 11457 */;

require = fn;
function questMatchesActivity(arg0, id) {
  let formatted = arg0;
  let tmp2 = null;
  if (null == arg0) {
    return tmp3;
  } else {
    let tmp5 = formatted.application_id === closure_10;
    if (!tmp5) {
      tmp5 = formatted.platform === ActivityGamePlatforms.XBOX;
    }
    if (!tmp5) {
      if (!tmp9) {
        let tmp10 = tmp2 != id;
        if (tmp10) {
          tmp10 = id.id === React5;
        }
        if (tmp10) {
          tmp10 = formatted.application_id === React6;
        }
        if (!tmp10) {
          let tmp13 = tmp2 != formatted.application_id;
          if (tmp13) {
            const application_id = formatted.application_id;
            const allApplicationIds = QuestTaskUtils.getAllApplicationIds(id);
            tmp13 = tmp2 != allApplicationIds && allApplicationIds.some((item) => item === closure_0);
            const tmp16 = tmp2 != allApplicationIds && allApplicationIds.some((item) => item === closure_0);
          }
          tmp10 = tmp13;
        }
      }
      tmp9 = formatted.platform === ActivityGamePlatforms.PS4 || formatted.platform === tmp8.PS5;
    }
    formatted = formatted.name.toLowerCase();
    const consoleApplicationId = QuestTaskUtils.getConsoleApplicationId(id);
    let flag = false;
    if (tmp2 != consoleApplicationId) {
      const application = ApplicationStore.getApplication(consoleApplicationId);
      tmp2 = tmp2 != application;
      if (tmp2) {
        tmp2 = formatted === application.name.toLowerCase();
      }
      flag = tmp2;
    }
    tmp10 = flag;
  }
}
function getQuestByActivity(result, arg1) {
  const obj = result[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp3 = _slicedToArray(tmp, 2);
    [r10011, tmp4] = tmp3;
    let tmp5 = tmp4;
    if (questMatchesActivity(arg1, tmp4)) {
      let obj2 = QuestDataUtils;
      if (!obj2.isQuestExpired(tmp5)) {
        obj.return();
        return tmp5;
      }
    }
    continue;
  }
}
function questMatchesApplicationId(arg0, quest) {
  closure_0 = arg0;
  const allApplicationIds = QuestTaskUtils.getAllApplicationIds(quest);
  return null != allApplicationIds && allApplicationIds.some((item) => item === closure_0);
}
const QuestConstants = fn(5444);
({ DISCORD_APPLICATION_ID: metroRequire, PLAY_ACTIVITY_CLOUD_GAMING_QUEST_ID: closure_7, PLAY_ACTIVITY_SOCIAL_ENTRY_APPLICATION_ID: closure_8 } = QuestConstants);
const ActivityGamePlatforms = fn(1074).ActivityGamePlatforms;
let closure_10 = fn(1920).XBOX_ACTIVITY_APPLICATION_ID;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/utils/QuestMatchingUtils.tsx");

export { questMatchesActivity };
export { getQuestByActivity };
export const getQuestByApplicationId = function getQuestByApplicationId(arg0, arg1) {
  const obj = arg0[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp4 = _slicedToArray(tmp2, 2);
    [r10013, tmp5] = tmp4;
    let tmp6 = tmp5;
    if (questMatchesApplicationId(arg1, tmp5)) {
      let obj2 = QuestDataUtils;
      if (!obj2.isQuestExpired(tmp6)) {
        let tmp = tmp5;
        obj.return();
        break;
      }
      return tmp;
    }
    continue;
  }
};
export const allPlayOnDesktopQuestsByApplicationId = function allPlayOnDesktopQuestsByApplicationId(arr, arg1) {
  closure_0 = arg1;
  return Array.from(arr.values()).filter((quest) => {
    let obj = QuestTaskUtils;
    const allApplicationIds = obj.getAllApplicationIds(quest);
    let hasPlayOnDesktopTaskResult = null != allApplicationIds && allApplicationIds.some((item) => item === closure_0);
    if (hasPlayOnDesktopTaskResult) {
      let tmpResult = tmp(7699);
      hasPlayOnDesktopTaskResult = !tmpResult.isQuestExpired(quest);
    }
    if (hasPlayOnDesktopTaskResult) {
      tmpResult = tmp(7724);
      obj = { quest };
      hasPlayOnDesktopTaskResult = tmpResult.hasPlayOnDesktopTask(obj);
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
      const activityApplicationId = QuestTaskUtils.getActivityApplicationId(userStatus);
      let canLaunchActivityResult = null != userStatus;
      if (canLaunchActivityResult) {
        let tmpResult = tmp(7722);
        canLaunchActivityResult = tmpResult.canLaunchActivity(userStatus);
      }
      if (canLaunchActivityResult) {
        tmpResult = tmp(7699);
        canLaunchActivityResult = !tmpResult.isQuestExpired(userStatus);
      }
      if (canLaunchActivityResult) {
        canLaunchActivityResult = activityApplicationId === closure_0;
      }
      if (canLaunchActivityResult) {
        canLaunchActivityResult = activityApplicationId !== timestampProducer;
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
export const getQuestApplicationIdsForRunningGame = function getQuestApplicationIdsForRunningGame(pid, arg1) {
  const obj = getApplicationIdsForGameDefault(arg1);
  const applicationIdForPID = LocalActivityStore.getApplicationIdForPID(pid.pid);
  if (null != applicationIdForPID) {
    const tmp4 = getApplicationIdsForGameDefault(applicationIdForPID);
    for (const item10019 of tmp4) {
      let addResult = obj.add(item10019);
      continue;
    }
  }
  return obj;
};