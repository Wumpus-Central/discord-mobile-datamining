// === Module 12132: isActivityJoinableOnCurrentPlatform ===

// Module 12132 (isActivityJoinableOnCurrentPlatform)
import obj132 from "obj132" /* 2 */;
import PlatformTypes from "PlatformTypes" /* 501 */;
import isMetaQuest from "isMetaQuest" /* 1625 */;
import hasFlagDefault from "hasFlag" /* 7260 */;
import ME from "ME" /* 676 */;

({ ActivityFlags: c3, ActivityGamePlatforms: c4, ActivityTypes: c5 } = ME);
const result = obj132.fileFinishedImporting("modules/activities/utils/isActivityJoinableOnCurrentPlatform.tsx");

export default function isActivityJoinableOnCurrentPlatform(type) {
  let tmp = null == type;
  if (!tmp) {
    tmp = !hasFlagDefault(type, constants.JOIN);
  }
  if (!tmp) {
    tmp = type.type !== constants3.PLAYING;
  }
  if (!tmp) {
    if (obj.isIOS()) {
      let DESKTOP = constants2.IOS;
      let tmp9 = constants2;
    } else {
      let tmp6Result = isMetaQuest;
      if (tmp6Result.isMetaQuest()) {
        DESKTOP = constants2.META_QUEST;
        tmp9 = constants2;
      } else {
        tmp6Result = PlatformTypes;
        if (tmp6Result.isAndroid()) {
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
      let hasItem = null != supported_platforms;
      if (hasItem) {
        hasItem = 0 !== supported_platforms.length;
      }
      if (hasItem) {
        hasItem = supported_platforms.includes(DESKTOP);
      }
      return hasItem;
    }
    obj = PlatformTypes;
  } else {
    return false;
  }
};
export const getCurrentActivityGamePlatform = function getCurrentActivityGamePlatform() {
  if (obj.isIOS()) {
    let META_QUEST = constants2.IOS;
  } else {
    let tmpResult = isMetaQuest;
    if (tmpResult.isMetaQuest()) {
      META_QUEST = constants2.META_QUEST;
    } else {
      tmpResult = PlatformTypes;
      META_QUEST = tmpResult.isAndroid() ? constants2.ANDROID : constants2.DESKTOP;
    }
  }
  return META_QUEST;
};
export const isActivityJoinable = function isActivityJoinable(type) {
  let tmp = null == type;
  if (!tmp) {
    tmp = !hasFlagDefault(type, constants.JOIN);
  }
  if (!tmp) {
    tmp = type.type !== constants3.PLAYING;
  }
  return !tmp;
};