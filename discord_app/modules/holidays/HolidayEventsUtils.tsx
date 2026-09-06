// === Module 17384: HolidayEventsUtils ===

// Module 17384 (HolidayEventsUtils)
import HolidayEventsConfigDefault from "HolidayEventsConfig" /* 17381 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/holidays/HolidayEventsUtils.tsx");

export default {
  isEligible() {
    const isExperimentEligible = HolidayEventsConfigDefault.getIsExperimentEligible();
    const timestamp = Date.now();
    return timestamp >= HolidayEventsConfigDefault.startTimeMs && timestamp <= HolidayEventsConfigDefault.endTimeMs && isExperimentEligible;
  },
  useHolidaySoundpack() {
    let obj = HolidayEventsConfigDefault;
    const isExperimentEligible = obj.useIsExperimentEligible();
    const timestamp = Date.now();
    let tmp6 = null;
    if (tmp5) {
      tmp6 = null;
      if (null != tmp(17381).soundpack) {
        tmp6 = null;
        if (null != tmp(17381).soundpackLabel) {
          obj = { soundpack: tmp(17381).soundpack, soundpackLabel: tmp(17381).soundpackLabel };
          tmp6 = obj;
        }
      }
    }
    return tmp6;
  },
  useIsEligible() {
    const isExperimentEligible = HolidayEventsConfigDefault.useIsExperimentEligible();
    const timestamp = Date.now();
    return timestamp >= HolidayEventsConfigDefault.startTimeMs && timestamp <= HolidayEventsConfigDefault.endTimeMs && isExperimentEligible;
  },
  getAppSpinnerSources() {
    const timestamp = Date.now();
    let appSpinnerSources = null;
    if (tmp4) {
      appSpinnerSources = tmp2(17381).appSpinnerSources;
    }
    return appSpinnerSources;
  },
  getLoadingTips() {
    const timestamp = Date.now();
    let tmp5 = null;
    if (tmp4) {
      const getLoadingTips = tmp2(17381).getLoadingTips;
      let loadingTips;
      if (getLoadingTips != null) {
        loadingTips = getLoadingTips();
      }
      tmp5 = loadingTips;
      const tmp2Result = tmp2(17381);
    }
    return tmp5;
  },
  getHolidaySoundpack() {
    const isExperimentEligible = HolidayEventsConfigDefault.getIsExperimentEligible();
    const timestamp = Date.now();
    let soundpack = null;
    if (tmp5) {
      soundpack = null;
      if (null != tmp(17381).soundpack) {
        soundpack = tmp(17381).soundpack;
      }
    }
    return soundpack;
  }
};