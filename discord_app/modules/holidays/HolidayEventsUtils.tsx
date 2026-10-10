// === Module 18067: HolidayEventsUtils ===

// Module 18067 (HolidayEventsUtils)
import c from "c" /* 576 */;
import HolidayEventsConfigDefault from "HolidayEventsConfig" /* 18063 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsEligible() {
  const cResult = c.c(2);
  const isExperimentEligible = HolidayEventsConfigDefault.useIsExperimentEligible();
  if (cResult[0] !== isExperimentEligible) {
    const _Date = Date;
    const timestamp = Date.now();
    const tmp8 = timestamp >= HolidayEventsConfigDefault.startTimeMs && timestamp <= HolidayEventsConfigDefault.endTimeMs && isExperimentEligible;
    cResult[0] = isExperimentEligible;
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (function useIsEligible() {
  const isExperimentEligible = HolidayEventsConfigDefault.useIsExperimentEligible();
  const timestamp = Date.now();
  return timestamp >= HolidayEventsConfigDefault.startTimeMs && timestamp <= HolidayEventsConfigDefault.endTimeMs && isExperimentEligible;
});
let closure_3 = tmp2;
let obj = {
  isEligible() {
    const isExperimentEligible = HolidayEventsConfigDefault.getIsExperimentEligible();
    const timestamp = Date.now();
    return timestamp >= HolidayEventsConfigDefault.startTimeMs && timestamp <= HolidayEventsConfigDefault.endTimeMs && isExperimentEligible;
  },
  useHolidaySoundpack: null,
  useIsEligible: null,
  getAppSpinnerSources: null,
  getLoadingTips: null,
  getHolidaySoundpack: null
};
let ReactCompilerGating = ReactCompilerGating_mod;
obj.useHolidaySoundpack = ReactCompilerGating.isReactCompilerEnabled() ? (function useHolidaySoundpack() {
  const cResult = c.c(2);
  const tmp3 = closure_3();
  if (cResult[0] !== tmp3) {
    let tmp6 = null;
    if (tmp3) {
      tmp6 = null;
      if (null != HolidayEventsConfigDefault.soundpack) {
        tmp6 = null;
        if (null != HolidayEventsConfigDefault.soundpackLabel) {
          const obj2 = { soundpack: HolidayEventsConfigDefault.soundpack, soundpackLabel: HolidayEventsConfigDefault.soundpackLabel };
          tmp6 = obj2;
        }
      }
    }
    cResult[0] = tmp3;
    cResult[1] = tmp6;
    let tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function useHolidaySoundpack() {
  let tmp = null;
  if (closure_3()) {
    tmp = null;
    if (null != HolidayEventsConfigDefault.soundpack) {
      tmp = null;
      if (null != HolidayEventsConfigDefault.soundpackLabel) {
        const obj = { soundpack: HolidayEventsConfigDefault.soundpack, soundpackLabel: HolidayEventsConfigDefault.soundpackLabel };
        tmp = obj;
      }
    }
  }
  return tmp;
});
obj.useIsEligible = tmp2;
obj.getAppSpinnerSources = function getAppSpinnerSources() {
  const timestamp = Date.now();
  let appSpinnerSources = null;
  if (tmp4) {
    appSpinnerSources = HolidayEventsConfigDefault.appSpinnerSources;
  }
  return appSpinnerSources;
};
obj.getLoadingTips = function getLoadingTips() {
  const timestamp = Date.now();
  let tmp5 = null;
  if (tmp4) {
    const getLoadingTips = HolidayEventsConfigDefault.getLoadingTips;
    let loadingTips;
    if (getLoadingTips != null) {
      loadingTips = getLoadingTips();
    }
    tmp5 = loadingTips;
    const tmp2Result = HolidayEventsConfigDefault;
  }
  return tmp5;
};
obj.getHolidaySoundpack = function getHolidaySoundpack() {
  const isExperimentEligible = HolidayEventsConfigDefault.getIsExperimentEligible();
  const timestamp = Date.now();
  let soundpack = null;
  if (tmp5) {
    soundpack = null;
    if (null != HolidayEventsConfigDefault.soundpack) {
      soundpack = HolidayEventsConfigDefault.soundpack;
    }
  }
  return soundpack;
};
const result = size.fileFinishedImporting("modules/holidays/HolidayEventsUtils.tsx");

export default obj;