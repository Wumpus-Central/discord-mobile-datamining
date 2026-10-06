// === Module 17559: HolidayEventsUtils ===

// Module 17559 (HolidayEventsUtils)
import react from "react" /* 576 */;
import HolidayEventsConfigDefault from "HolidayEventsConfig" /* 17555 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  const obj2 = HolidayEventsConfigDefault;
  const isExperimentEligible = obj2.useIsExperimentEligible();
  if (cResult[0] !== isExperimentEligible) {
    const _Date = Date;
    const timestamp = Date.now();
    const tmp8 = timestamp >= HolidayEventsConfigDefault.startTimeMs && timestamp <= HolidayEventsConfigDefault.endTimeMs && isExperimentEligible;
    cResult[0] = isExperimentEligible;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  const obj = HolidayEventsConfigDefault;
  const isExperimentEligible = obj.useIsExperimentEligible();
  const timestamp = Date.now();
  const tmp5 = timestamp >= HolidayEventsConfigDefault.startTimeMs && timestamp <= HolidayEventsConfigDefault.endTimeMs && isExperimentEligible;
  return tmp5;
});
let closure_3 = tmp2;
let obj = {
  isEligible() {
    const obj = HolidayEventsConfigDefault;
    const isExperimentEligible = obj.getIsExperimentEligible();
    const timestamp = Date.now();
    const tmp5 = timestamp >= HolidayEventsConfigDefault.startTimeMs && timestamp <= HolidayEventsConfigDefault.endTimeMs && isExperimentEligible;
    return tmp5;
  },
  useHolidaySoundpack: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    let tmp4;
    const obj = react;
    const cResult = obj.c(2);
    const tmp3 = closure_3();
    if (cResult[0] !== tmp3) {
      let tmp6 = null;
      if (tmp3) {
        tmp6 = null;
        if (null != HolidayEventsConfigDefault.soundpack) {
          tmp6 = null;
          if (null != HolidayEventsConfigDefault.soundpackLabel) {
            tmp6 = { soundpack: HolidayEventsConfigDefault.soundpack, soundpackLabel: HolidayEventsConfigDefault.soundpackLabel };
            const obj2 = { soundpack: HolidayEventsConfigDefault.soundpack, soundpackLabel: HolidayEventsConfigDefault.soundpackLabel };
          }
        }
      }
      cResult[0] = tmp3;
      cResult[1] = tmp6;
      tmp4 = tmp6;
    } else {
      tmp4 = cResult[1];
    }
    return tmp4;
  }) : (() => {
    let tmp = null;
    if (closure_3()) {
      tmp = null;
      if (null != HolidayEventsConfigDefault.soundpack) {
        tmp = null;
        if (null != HolidayEventsConfigDefault.soundpackLabel) {
          tmp = { soundpack: HolidayEventsConfigDefault.soundpack, soundpackLabel: HolidayEventsConfigDefault.soundpackLabel };
          const obj = { soundpack: HolidayEventsConfigDefault.soundpack, soundpackLabel: HolidayEventsConfigDefault.soundpackLabel };
        }
      }
    }
    return tmp;
  }),
  useIsEligible: tmp2,
  getAppSpinnerSources() {
    const timestamp = Date.now();
    let appSpinnerSources = null;
    const tmp4 = timestamp >= HolidayEventsConfigDefault.startTimeMs && timestamp <= HolidayEventsConfigDefault.endTimeMs;
    if (tmp4) {
      appSpinnerSources = HolidayEventsConfigDefault.appSpinnerSources;
    }
    return appSpinnerSources;
  },
  getLoadingTips() {
    const timestamp = Date.now();
    let tmp5 = null;
    const tmp4 = timestamp >= HolidayEventsConfigDefault.startTimeMs && timestamp <= HolidayEventsConfigDefault.endTimeMs;
    if (tmp4) {
      const getLoadingTips = HolidayEventsConfigDefault.getLoadingTips;
      let loadingTips;
      HolidayEventsConfigDefault;
      if (getLoadingTips != null) {
        loadingTips = getLoadingTips();
      }
      tmp5 = loadingTips;
    }
    return tmp5;
  },
  getHolidaySoundpack() {
    const obj = HolidayEventsConfigDefault;
    const isExperimentEligible = obj.getIsExperimentEligible();
    const timestamp = Date.now();
    let soundpack = null;
    const tmp5 = timestamp >= HolidayEventsConfigDefault.startTimeMs && timestamp <= HolidayEventsConfigDefault.endTimeMs && isExperimentEligible;
    if (tmp5) {
      soundpack = null;
      if (null != HolidayEventsConfigDefault.soundpack) {
        soundpack = HolidayEventsConfigDefault.soundpack;
      }
    }
    return soundpack;
  }
};
ReactCompilerGating = ReactCompilerGating_mod;
const result = size.fileFinishedImporting("modules/holidays/HolidayEventsUtils.tsx");

export default obj;