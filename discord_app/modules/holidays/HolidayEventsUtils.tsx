// discord_app/modules/holidays/HolidayEventsUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import HolidayEmojiAnimationTypeDefault from "HolidayEventsConfig.tsx";

const result = obj132.fileFinishedImporting("modules/holidays/HolidayEventsUtils.tsx");

export default {
  isEligible() {
    const isExperimentEligible = HolidayEmojiAnimationTypeDefault.getIsExperimentEligible();
    const timestamp = Date.now();
    return timestamp >= HolidayEmojiAnimationTypeDefault.startTimeMs && timestamp <= HolidayEmojiAnimationTypeDefault.endTimeMs && isExperimentEligible;
  },
  useHolidaySoundpack() {
    let obj = HolidayEmojiAnimationTypeDefault;
    const isExperimentEligible = obj.useIsExperimentEligible();
    const timestamp = Date.now();
    let tmp6 = null;
    if (tmp5) {
      tmp6 = null;
      if (null != HolidayEmojiAnimationTypeDefault.soundpack) {
        tmp6 = null;
        if (null != HolidayEmojiAnimationTypeDefault.soundpackLabel) {
          obj = { soundpack: null, soundpackLabel: null };
          obj[0] = HolidayEmojiAnimationTypeDefault.soundpack;
          obj[1] = HolidayEmojiAnimationTypeDefault.soundpackLabel;
          tmp6 = obj;
        }
      }
    }
    return tmp6;
  },
  useIsEligible() {
    const isExperimentEligible = HolidayEmojiAnimationTypeDefault.useIsExperimentEligible();
    const timestamp = Date.now();
    return timestamp >= HolidayEmojiAnimationTypeDefault.startTimeMs && timestamp <= HolidayEmojiAnimationTypeDefault.endTimeMs && isExperimentEligible;
  },
  getAppSpinnerSources() {
    const timestamp = Date.now();
    let appSpinnerSources = null;
    if (tmp4) {
      appSpinnerSources = HolidayEmojiAnimationTypeDefault.appSpinnerSources;
    }
    return appSpinnerSources;
  },
  getLoadingTips() {
    const timestamp = Date.now();
    let tmp5 = null;
    if (tmp4) {
      const getLoadingTips = HolidayEmojiAnimationTypeDefault.getLoadingTips;
      let loadingTips;
      if (getLoadingTips != null) {
        loadingTips = getLoadingTips();
      }
      tmp5 = loadingTips;
      const tmp2Result = HolidayEmojiAnimationTypeDefault;
    }
    return tmp5;
  },
  getHolidaySoundpack() {
    const isExperimentEligible = HolidayEmojiAnimationTypeDefault.getIsExperimentEligible();
    const timestamp = Date.now();
    let soundpack = null;
    if (tmp5) {
      soundpack = null;
      if (null != HolidayEmojiAnimationTypeDefault.soundpack) {
        soundpack = HolidayEmojiAnimationTypeDefault.soundpack;
      }
    }
    return soundpack;
  }
};