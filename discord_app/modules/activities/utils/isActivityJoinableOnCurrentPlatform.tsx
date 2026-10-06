// === Module 12877: isActivityJoinableOnCurrentPlatform ===

// Module 12877 (isActivityJoinableOnCurrentPlatform)
import utils_PlatformUtils from "utils/PlatformUtils" /* 1370 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1615 */;
import hasFlagDefault from "hasFlag" /* 6826 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
({ ActivityFlags: c3, ActivityGamePlatforms: closure_4, ActivityTypes: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/activities/utils/isActivityJoinableOnCurrentPlatform.tsx");

export default function isActivityJoinableOnCurrentPlatform(type) {
  const tmp = null == type || !hasFlagDefault(type, constants.JOIN) || type.type !== hasOwnProperty.PLAYING;
  if (!tmp) {
    let DESKTOP;
    let tmp9;
    const obj = utils_PlatformUtils;
    if (obj.isIOS()) {
      DESKTOP = constants2.IOS;
      tmp9 = constants2;
    } else {
      const tmp6Result = MetaQuestUtils;
      if (tmp6Result.isMetaQuest()) {
        DESKTOP = constants2.META_QUEST;
        tmp9 = constants2;
      } else {
        const tmp6Result2 = utils_PlatformUtils;
        if (tmp6Result2.isAndroid()) {
          DESKTOP = constants2.ANDROID;
          tmp9 = constants2;
        } else {
          DESKTOP = constants2.DESKTOP;
          tmp9 = constants2;
        }
      }
    }
    let platform;
    if (type != null) {
      platform = type.platform;
    }
    if ((null != platform ? type.platform : tmp9.DESKTOP) === DESKTOP) {
      return true;
    } else {
      let supported_platforms;
      if (type != null) {
        supported_platforms = type.supported_platforms;
      }
      const hasItem = null != supported_platforms && 0 !== supported_platforms.length && supported_platforms.includes(DESKTOP);
      return hasItem;
    }
  } else {
    return false;
  }
};
export const getCurrentActivityGamePlatform = function getCurrentActivityGamePlatform() {
  let META_QUEST;
  const obj = utils_PlatformUtils;
  if (obj.isIOS()) {
    META_QUEST = constants2.IOS;
  } else {
    const tmpResult = MetaQuestUtils;
    if (tmpResult.isMetaQuest()) {
      META_QUEST = constants2.META_QUEST;
    } else {
      const tmpResult2 = utils_PlatformUtils;
      META_QUEST = tmpResult2.isAndroid() ? constants2.ANDROID : constants2.DESKTOP;
    }
  }
  return META_QUEST;
};
export const isActivityJoinable = function isActivityJoinable(type) {
  const tmp = null == type || !hasFlagDefault(type, constants.JOIN) || type.type !== hasOwnProperty.PLAYING;
  return !tmp;
};