const result = require("set").fileFinishedImporting("modules/holidays/HolidayEventsUtils.tsx");

export default {
  isEligible() {
    const isExperimentEligible = importDefault(16328).getIsExperimentEligible();
    const timestamp = Date.now();
    const obj = importDefault(16328);
    const tmp = importDefault;
    return timestamp >= importDefault(16328).startTimeMs && timestamp <= importDefault(16328).endTimeMs && isExperimentEligible;
  },
  useHolidaySoundpack() {
    let obj = importDefault(16328);
    const isExperimentEligible = obj.useIsExperimentEligible();
    const timestamp = Date.now();
    let tmp6 = null;
    if (tmp5) {
      tmp6 = null;
      if (null != tmp(16328).soundpack) {
        tmp6 = null;
        if (null != tmp(16328).soundpackLabel) {
          obj = { soundpack: null, soundpackLabel: null };
          obj[0] = tmp(16328).soundpack;
          obj[1] = tmp(16328).soundpackLabel;
          tmp6 = obj;
        }
      }
    }
    return tmp6;
  },
  useIsEligible() {
    const isExperimentEligible = importDefault(16328).useIsExperimentEligible();
    const timestamp = Date.now();
    const obj = importDefault(16328);
    const tmp = importDefault;
    return timestamp >= importDefault(16328).startTimeMs && timestamp <= importDefault(16328).endTimeMs && isExperimentEligible;
  },
  getAppSpinnerSources() {
    const timestamp = Date.now();
    let appSpinnerSources = null;
    if (tmp4) {
      appSpinnerSources = tmp2(16328).appSpinnerSources;
    }
    return appSpinnerSources;
  },
  getLoadingTips() {
    const timestamp = Date.now();
    let tmp5 = null;
    if (tmp4) {
      const getLoadingTips = tmp2(16328).getLoadingTips;
      let loadingTips;
      if (getLoadingTips != null) {
        loadingTips = getLoadingTips();
      }
      tmp5 = loadingTips;
      const tmp2Result = tmp2(16328);
    }
    return tmp5;
  },
  getHolidaySoundpack() {
    const isExperimentEligible = importDefault(16328).getIsExperimentEligible();
    const timestamp = Date.now();
    const obj = importDefault(16328);
    let soundpack = null;
    if (tmp5) {
      soundpack = null;
      if (null != tmp(16328).soundpack) {
        soundpack = tmp(16328).soundpack;
      }
    }
    return soundpack;
  }
};