// === Module 16875: HolidayEmojiAnimationType ===

// Module 16875 (HolidayEmojiAnimationType)
import set from "set" /* 2 */;
import HolidayEmojiAnimationTypeDefault from "HolidayEmojiAnimationType" /* 16872 */;

const result = set.fileFinishedImporting("modules/holidays/HolidayEventsUtils.tsx");

export default {
  isEligible() {
    const isExperimentEligible = HolidayEmojiAnimationTypeDefault.getIsExperimentEligible();
    const timestamp = Date.now();
    const obj = HolidayEmojiAnimationTypeDefault;
    const tmp = importDefault;
    return timestamp >= HolidayEmojiAnimationTypeDefault.startTimeMs && timestamp <= HolidayEmojiAnimationTypeDefault.endTimeMs && isExperimentEligible;
  },
  useHolidaySoundpack() {
    let obj = HolidayEmojiAnimationTypeDefault;
    const isExperimentEligible = obj.useIsExperimentEligible();
    const timestamp = Date.now();
    let tmp6 = null;
    if (tmp5) {
      tmp6 = null;
      if (null != tmp(16872).soundpack) {
        tmp6 = null;
        if (null != tmp(16872).soundpackLabel) {
          obj = { soundpack: null, soundpackLabel: null };
          obj[0] = tmp(16872).soundpack;
          obj[1] = tmp(16872).soundpackLabel;
          tmp6 = obj;
        }
      }
    }
    return tmp6;
  },
  useIsEligible() {
    const isExperimentEligible = HolidayEmojiAnimationTypeDefault.useIsExperimentEligible();
    const timestamp = Date.now();
    const obj = HolidayEmojiAnimationTypeDefault;
    const tmp = importDefault;
    return timestamp >= HolidayEmojiAnimationTypeDefault.startTimeMs && timestamp <= HolidayEmojiAnimationTypeDefault.endTimeMs && isExperimentEligible;
  },
  getAppSpinnerSources() {
    const timestamp = Date.now();
    let appSpinnerSources = null;
    if (tmp4) {
      appSpinnerSources = tmp2(16872).appSpinnerSources;
    }
    return appSpinnerSources;
  },
  getLoadingTips() {
    const timestamp = Date.now();
    let tmp5 = null;
    if (tmp4) {
      const getLoadingTips = tmp2(16872).getLoadingTips;
      let loadingTips;
      if (getLoadingTips != null) {
        loadingTips = getLoadingTips();
      }
      tmp5 = loadingTips;
      const tmp2Result = tmp2(16872);
    }
    return tmp5;
  },
  getHolidaySoundpack() {
    const isExperimentEligible = HolidayEmojiAnimationTypeDefault.getIsExperimentEligible();
    const timestamp = Date.now();
    const obj = HolidayEmojiAnimationTypeDefault;
    let soundpack = null;
    if (tmp5) {
      soundpack = null;
      if (null != tmp(16872).soundpack) {
        soundpack = tmp(16872).soundpack;
      }
    }
    return soundpack;
  }
};