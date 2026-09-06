// discord_app/modules/holidays/HolidayEventsUtils.tsx
import HolidayEventsConfigDefault from "HolidayEventsConfig.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/holidays/HolidayEventsUtils.tsx");

export default {
  isEligible() {
    const isExperimentEligible = HolidayEventsConfigDefault.getIsExperimentEligible();
    const timestamp = Date.now();
    return (
      timestamp >= HolidayEventsConfigDefault.startTimeMs &&
      timestamp <= HolidayEventsConfigDefault.endTimeMs &&
      isExperimentEligible
    );
  },
  useHolidaySoundpack() {
    let obj = HolidayEventsConfigDefault;
    const isExperimentEligible = obj.useIsExperimentEligible();
    const timestamp = Date.now();
    let tmp6 = null;
    if (tmp5) {
      tmp6 = null;
      if (null != HolidayEventsConfigDefault.soundpack) {
        tmp6 = null;
        if (null != HolidayEventsConfigDefault.soundpackLabel) {
          obj = {
            soundpack: HolidayEventsConfigDefault.soundpack,
            soundpackLabel: HolidayEventsConfigDefault.soundpackLabel,
          };
          tmp6 = obj;
        }
      }
    }
    return tmp6;
  },
  useIsEligible() {
    const isExperimentEligible = HolidayEventsConfigDefault.useIsExperimentEligible();
    const timestamp = Date.now();
    return (
      timestamp >= HolidayEventsConfigDefault.startTimeMs &&
      timestamp <= HolidayEventsConfigDefault.endTimeMs &&
      isExperimentEligible
    );
  },
  getAppSpinnerSources() {
    const timestamp = Date.now();
    let appSpinnerSources = null;
    if (tmp4) {
      appSpinnerSources = HolidayEventsConfigDefault.appSpinnerSources;
    }
    return appSpinnerSources;
  },
  getLoadingTips() {
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
  },
  getHolidaySoundpack() {
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
  },
};
