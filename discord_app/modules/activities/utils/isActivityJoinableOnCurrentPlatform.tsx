// === Module 14849: isActivityJoinableOnCurrentPlatform ===

// Module 14849 (isActivityJoinableOnCurrentPlatform)
import Constants from "Constants" /* 1072 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1377 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1623 */;
import ActivityTypes from "ActivityTypes" /* 5757 */;
import hasFlagDefault from "hasFlag" /* 7477 */;
import ActivityGamePlatforms2 from "ActivityGamePlatforms" /* 9718 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/isActivityJoinableOnCurrentPlatform.tsx");

export default function isActivityJoinableOnCurrentPlatform(type) {
  let tmp = null == type;
  if (!tmp) {
    tmp = !hasFlagDefault(type, ActivityFlags.JOIN);
  }
  if (!tmp) {
    tmp = type.type !== ActivityTypes.ActivityTypes.PLAYING;
  }
  if (!tmp) {
    if (obj.isIOS()) {
      let META_QUEST = ActivityGamePlatforms2.ActivityGamePlatforms.IOS;
    } else {
      if (tmp7Result.isMetaQuest()) {
        META_QUEST = ActivityGamePlatforms2.ActivityGamePlatforms.META_QUEST;
      } else {
        const tmp7Result2 = utils_PlatformUtils;
        const ActivityGamePlatforms = ActivityGamePlatforms2.ActivityGamePlatforms;
        META_QUEST = utils_PlatformUtils.isAndroid() ? ActivityGamePlatforms.ANDROID : ActivityGamePlatforms.DESKTOP;
        const isAndroidResult = utils_PlatformUtils.isAndroid();
      }
      tmp7Result = MetaQuestUtils;
    }
    let platform;
    if (type != null) {
      platform = type.platform;
    }
    if (null != platform) {
      let DESKTOP = type.platform;
    } else {
      DESKTOP = ActivityGamePlatforms2.ActivityGamePlatforms.DESKTOP;
    }
    if (DESKTOP === META_QUEST) {
      return true;
    } else {
      let supported_platforms;
      if (type != null) {
        supported_platforms = type.supported_platforms;
      }
      let hasItem = null != supported_platforms;
      if (hasItem) {
        hasItem = 0 !== supported_platforms.length;
      }
      if (hasItem) {
        hasItem = supported_platforms.includes(META_QUEST);
      }
      return hasItem;
    }
    obj = utils_PlatformUtils;
  } else {
    return false;
  }
};
export function getCurrentActivityGamePlatform() {
  if (obj.isIOS()) {
    let META_QUEST = ActivityGamePlatforms2.ActivityGamePlatforms.IOS;
  } else {
    if (tmpResult.isMetaQuest()) {
      META_QUEST = ActivityGamePlatforms2.ActivityGamePlatforms.META_QUEST;
    } else {
      const tmpResult2 = utils_PlatformUtils;
      const ActivityGamePlatforms = ActivityGamePlatforms2.ActivityGamePlatforms;
      META_QUEST = utils_PlatformUtils.isAndroid() ? ActivityGamePlatforms.ANDROID : ActivityGamePlatforms.DESKTOP;
      const isAndroidResult = utils_PlatformUtils.isAndroid();
    }
    tmpResult = MetaQuestUtils;
  }
  return META_QUEST;
}
export function isActivityJoinable(type) {
  let tmp = null == type;
  if (!tmp) {
    tmp = !hasFlagDefault(type, ActivityFlags.JOIN);
  }
  if (!tmp) {
    tmp = type.type !== ActivityTypes.ActivityTypes.PLAYING;
  }
  return !tmp;
}