// === Module 15252: QuestMatchingUtils ===

// Module 15252 (QuestMatchingUtils)
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 7472 */;
import QuestExpirationUtils from "QuestExpirationUtils" /* 8815 */;
import utils_QuestUtils from "utils/QuestUtils" /* 8829 */;
import QuestTaskUtils from "QuestTaskUtils" /* 8831 */;
import getApplicationIdsForGameDefault from "getApplicationIdsForGame" /* 15137 */;
import _slicedToArray from "module_32" /* 32 */;
import ApplicationStore from "ApplicationStore" /* 2165 */;
import SocialSdkApplicationStore from "SocialSdkApplicationStore" /* 7318 */;

require = fn;
function questMatchesActivity(arg0, id) {
  let formatted = arg0;
  let tmp2 = null;
  if (null == arg0) {
    return tmp3;
  } else {
    let tmp5 = formatted.application_id === closure_9;
    if (!tmp5) {
      tmp5 = formatted.platform === ActivityGamePlatforms.ActivityGamePlatforms.XBOX;
    }
    if (!tmp5) {
      let tmp11 = formatted.platform === ActivityGamePlatforms.ActivityGamePlatforms.PLAYSTATION_4;
      if (!tmp11) {
        tmp11 = formatted.platform === ActivityGamePlatforms.ActivityGamePlatforms.PLAYSTATION_5;
      }
      if (!tmp11) {
        let tmp12 = tmp2 != id;
        if (tmp12) {
          tmp12 = id.id === metroImportDefault;
        }
        if (tmp12) {
          tmp12 = formatted.application_id === React5;
        }
        if (!tmp12) {
          let tmp15 = tmp2 != formatted.application_id;
          if (tmp15) {
            application_id = formatted.application_id;
            const allApplicationIds = QuestTaskUtils.getAllApplicationIds(id);
            const tmp9Result = QuestTaskUtils;
            tmp15 = tmp2 != allApplicationIds && allApplicationIds.some((item) => item === closure_0);
            const tmp16 = tmp2 != allApplicationIds && allApplicationIds.some((item) => item === closure_0);
          }
          tmp12 = tmp15;
        }
      }
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
    tmp12 = flag;
  }
}
function getQuestByActivity(result, arg1) {
  const obj = result[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp3 = _slicedToArray(tmp, 2);
    [r10011, tmp4] = tmp3;
    if (questMatchesActivity(arg1, tmp4)) {
      let obj2 = QuestExpirationUtils;
      if (!obj2.isQuestExpired(tmp4)) {
        obj.return();
        return tmp4;
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
const QuestConstants = fn(5338);
({ DISCORD_APPLICATION_ID: closure_6, PLAY_ACTIVITY_CLOUD_GAMING_QUEST_ID: metroImportDefault, PLAY_ACTIVITY_SOCIAL_ENTRY_APPLICATION_ID: closure_8 } = QuestConstants);
let closure_9 = fn(2145).XBOX_ACTIVITY_APPLICATION_ID;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/utils/QuestMatchingUtils.tsx");

export { questMatchesActivity };
export { getQuestByActivity };
export function getQuestByApplicationId(arg0, arg1) {
  const obj = arg0[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp4 = _slicedToArray(tmp2, 2);
    [r10013, tmp5] = tmp4;
    if (questMatchesApplicationId(arg1, tmp5)) {
      let obj2 = QuestExpirationUtils;
      if (!obj2.isQuestExpired(tmp5)) {
        obj.return();
        break;
      }
      return tmp5;
    }
    continue;
  }
}
export function getQuestsFromActivities(result, arg1) {
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
}
export function getEligibleQuestsForApplicationId(quests, applicationId, arg2) {
  closure_0 = applicationId;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  if (null == applicationId) {
    items = [];
  } else {
    const _Array = Array;
    items = Array.from(quests.values()).filter((userStatus) => {
      const activityApplicationId = QuestTaskUtils.getActivityApplicationId(userStatus);
      let canLaunchActivityResult = null != userStatus;
      if (canLaunchActivityResult) {
        canLaunchActivityResult = utils_QuestUtils.canLaunchActivity(userStatus);
        const tmpResult = utils_QuestUtils;
      }
      if (canLaunchActivityResult) {
        canLaunchActivityResult = !QuestExpirationUtils.isQuestExpired(userStatus);
        const tmpResult2 = QuestExpirationUtils;
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
        canLaunchActivityResult = null == completedAt || c1;
        const tmp8 = null == completedAt || c1;
      }
      if (canLaunchActivityResult) {
        const userStatus2 = userStatus.userStatus;
        let enrolledAt;
        if (userStatus2 != null) {
          enrolledAt = userStatus2.enrolledAt;
        }
        canLaunchActivityResult = null == enrolledAt || c1;
        const tmp10 = null == enrolledAt || c1;
      }
      return canLaunchActivityResult;
    });
    const arr = Array.from(quests.values());
  }
  return items;
}
export function getActivityQuestForApplicationId(quests, validateApplicationResult) {
  closure_0 = validateApplicationResult;
  c1 = true;
  if (null == validateApplicationResult) {
    items = [];
  } else {
    const _Array = Array;
    items = Array.from(quests.values()).filter((userStatus) => {
      const activityApplicationId = QuestTaskUtils.getActivityApplicationId(userStatus);
      let canLaunchActivityResult = null != userStatus;
      if (canLaunchActivityResult) {
        canLaunchActivityResult = utils_QuestUtils.canLaunchActivity(userStatus);
        const tmpResult = utils_QuestUtils;
      }
      if (canLaunchActivityResult) {
        canLaunchActivityResult = !QuestExpirationUtils.isQuestExpired(userStatus);
        const tmpResult2 = QuestExpirationUtils;
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
        canLaunchActivityResult = null == completedAt || c1;
        const tmp8 = null == completedAt || c1;
      }
      if (canLaunchActivityResult) {
        const userStatus2 = userStatus.userStatus;
        let enrolledAt;
        if (userStatus2 != null) {
          enrolledAt = userStatus2.enrolledAt;
        }
        canLaunchActivityResult = null == enrolledAt || c1;
        const tmp10 = null == enrolledAt || c1;
      }
      return canLaunchActivityResult;
    });
    const arr = Array.from(quests.values());
  }
  return items.sort((userStatus, userStatus2) => {
    userStatus = userStatus.userStatus;
    let enrolledAt1;
    if (userStatus != null) {
      enrolledAt1 = userStatus.enrolledAt;
    }
    userStatus2 = userStatus2.userStatus;
    if (userStatus2 != null) {
      const enrolledAt = userStatus2.enrolledAt;
    }
    if (null != enrolledAt1) {
      let num2 = 1;
      if (null != enrolledAt1) {
        let num3 = -1;
        if (null != enrolledAt) {
          const _Date = Date;
          const date = new Date(enrolledAt1);
          const _Date2 = Date;
          const time = date.getTime();
          const date1 = new Date(enrolledAt);
          num3 = time - date1.getTime();
        }
        num2 = num3;
      }
      let num = num2;
    } else {
      num = 0;
    }
    return num;
  })[0];
}
export function getQuestApplicationIdsForRunningGame(pid, arg1) {
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
}