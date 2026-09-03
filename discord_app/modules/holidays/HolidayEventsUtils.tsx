// === Module 17218: HolidayEmojiAnimationType ===

// Module 17218 (HolidayEmojiAnimationType)
import set from "set" /* 2 */;
import HolidayEmojiAnimationTypeDefault from "HolidayEmojiAnimationType" /* 17215 */;

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
      if (null != tmp(17215).soundpack) {
        tmp6 = null;
        if (null != tmp(17215).soundpackLabel) {
          obj = { soundpack: null, soundpackLabel: null };
          obj[0] = tmp(17215).soundpack;
          obj[1] = tmp(17215).soundpackLabel;
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
      appSpinnerSources = tmp2(17215).appSpinnerSources;
    }
    return appSpinnerSources;
  },
  getLoadingTips() {
    const timestamp = Date.now();
    let tmp5 = null;
    if (tmp4) {
      const getLoadingTips = tmp2(17215).getLoadingTips;
      let loadingTips;
      if (getLoadingTips != null) {
        loadingTips = getLoadingTips();
      }
      tmp5 = loadingTips;
      const tmp2Result = tmp2(17215);
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
      if (null != tmp(17215).soundpack) {
        soundpack = tmp(17215).soundpack;
      }
    }
    return soundpack;
  }
};