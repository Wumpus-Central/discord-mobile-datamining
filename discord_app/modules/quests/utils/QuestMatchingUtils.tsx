// discord_app/modules/quests/utils/QuestMatchingUtils.tsx
import QuestExpirationUtils from "QuestExpirationUtils.tsx";
import utils_QuestUtils from "QuestUtils.tsx";
import QuestTaskUtils from "QuestTaskUtils.tsx";
import ActivityGamePlatforms from "../../../../discord_common/js/shared/shared-constants/ActivityGamePlatforms.tsx";
import getApplicationIdsForGameDefault from "../../games/utils/getApplicationIdsForGame.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import SocialSdkApplicationStore from "../../game_detection/SocialSdkApplicationStore.tsx";

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
          tmp12 = id.id === React5;
        }
        if (tmp12) {
          tmp12 = formatted.application_id === React6;
        }
        if (!tmp12) {
          let tmp15 = tmp2 != formatted.application_id;
          if (tmp15) {
            const application_id = formatted.application_id;
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
const QuestConstants = fn(6775);
({
  DISCORD_APPLICATION_ID: metroRequire,
  PLAY_ACTIVITY_CLOUD_GAMING_QUEST_ID: closure_7,
  PLAY_ACTIVITY_SOCIAL_ENTRY_APPLICATION_ID: closure_8,
} = QuestConstants);
let closure_9 = fn(2019).XBOX_ACTIVITY_APPLICATION_ID;
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
export function allPlayOnDesktopQuestsByApplicationId(arr, arg1) {
  closure_0 = arg1;
  arr = Array.from(arr.values());
  return arr.filter((quest) => {
    const allApplicationIds = QuestTaskUtils.getAllApplicationIds(quest);
    let hasPlayOnDesktopTaskResult = null != allApplicationIds && allApplicationIds.some((item) => item === closure_0);
    if (hasPlayOnDesktopTaskResult) {
      hasPlayOnDesktopTaskResult = !QuestExpirationUtils.isQuestExpired(quest);
      const tmpResult = QuestExpirationUtils;
    }
    if (hasPlayOnDesktopTaskResult) {
      const obj2 = { quest };
      hasPlayOnDesktopTaskResult = QuestTaskUtils.hasPlayOnDesktopTask(obj2);
      const tmpResult2 = QuestTaskUtils;
    }
    return hasPlayOnDesktopTaskResult;
  });
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
    let items = [];
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
