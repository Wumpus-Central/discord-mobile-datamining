// discord_app/modules/holidays/HolidayEventsUtils.tsx
const result = require("set").fileFinishedImporting("modules/holidays/HolidayEventsUtils.tsx");

export default {
  isEligible() {
    const isExperimentEligible = require("HolidayEventsConfig.tsx").getIsExperimentEligible();
    const timestamp = Date.now();
    const obj = require("HolidayEventsConfig.tsx");
    const tmp = importDefault;
    return timestamp >= require("HolidayEventsConfig.tsx").startTimeMs && timestamp <= require("HolidayEventsConfig.tsx").endTimeMs && isExperimentEligible;
  },
  useHolidaySoundpack() {
    let obj = require("HolidayEventsConfig.tsx");
    const isExperimentEligible = obj.useIsExperimentEligible();
    const timestamp = Date.now();
    let tmp6 = null;
    if (tmp5) {
      tmp6 = null;
      if (null != tmp(16327).soundpack) {
        tmp6 = null;
        if (null != tmp(16327).soundpackLabel) {
          obj = { soundpack: null, soundpackLabel: null };
          obj[0] = tmp(16327).soundpack;
          obj[1] = tmp(16327).soundpackLabel;
          tmp6 = obj;
        }
      }
    }
    return tmp6;
  },
  useIsEligible() {
    const isExperimentEligible = require("HolidayEventsConfig.tsx").useIsExperimentEligible();
    const timestamp = Date.now();
    const obj = require("HolidayEventsConfig.tsx");
    const tmp = importDefault;
    return timestamp >= require("HolidayEventsConfig.tsx").startTimeMs && timestamp <= require("HolidayEventsConfig.tsx").endTimeMs && isExperimentEligible;
  },
  getAppSpinnerSources() {
    const timestamp = Date.now();
    let appSpinnerSources = null;
    if (tmp4) {
      appSpinnerSources = tmp2(16327).appSpinnerSources;
    }
    return appSpinnerSources;
  },
  getLoadingTips() {
    const timestamp = Date.now();
    let tmp5 = null;
    if (tmp4) {
      const getLoadingTips = tmp2(16327).getLoadingTips;
      let loadingTips;
      if (getLoadingTips != null) {
        loadingTips = getLoadingTips();
      }
      tmp5 = loadingTips;
      const tmp2Result = tmp2(16327);
    }
    return tmp5;
  },
  getHolidaySoundpack() {
    const isExperimentEligible = require("HolidayEventsConfig.tsx").getIsExperimentEligible();
    const timestamp = Date.now();
    const obj = require("HolidayEventsConfig.tsx");
    let soundpack = null;
    if (tmp5) {
      soundpack = null;
      if (null != tmp(16327).soundpack) {
        soundpack = tmp(16327).soundpack;
      }
    }
    return soundpack;
  }
};