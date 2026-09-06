// discord_app/modules/age_assurance/native/AppStoreAgeAssurance.android.tsx
import PlayAgeSignals from "PlayAgeSignals.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_3 = {
  [fn(8572).AgeSignalsStatus.SHARED]: "SHARED",
  [fn(8572).AgeSignalsStatus.NOT_SHARED]: "NOT_SHARED",
  [fn(8572).AgeSignalsStatus.VERIFICATION_REQUIRED]: "VERIFICATION_REQUIRED",
};
let closure_4 = {
  [fn(8572).AgeRangeSource.TIER_A]: "TIER_A",
  [fn(8572).AgeRangeSource.TIER_B]: "TIER_B",
  [fn(8572).AgeRangeSource.TIER_C]: "TIER_C",
  [fn(8572).AgeRangeSource.TIER_D]: "TIER_D",
};
let closure_5 = {
  [fn(8572).SignificantChangeStatus.APPROVED]: "APPROVED",
  [fn(8572).SignificantChangeStatus.PENDING]: "PENDING",
  [fn(8572).SignificantChangeStatus.DECLINED]: "DECLINED",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/AppStoreAgeAssurance.android.tsx");

export default {
  getAgeSignals() {
    return (async () => {
      function toAppStoreAgeCheck(ageLower) {
        const obj = {
          platform: "android",
          ageLower: ageLower.ageLower,
          ageUpper: ageLower.ageUpper,
          googleAgeSignalsStatus: null,
          googleAgeRangeSource: null,
          googleSignificantChangeStatus: null,
        };
        const ageSignalsStatus = ageLower.ageSignalsStatus;
        let tmp;
        if (null != ageSignalsStatus) {
          tmp = closure_1_3[ageSignalsStatus];
        }
        obj.googleAgeSignalsStatus = tmp;
        const ageRangeSource = ageLower.ageRangeSource;
        let tmp2;
        if (null != ageRangeSource) {
          tmp2 = closure_1_4[ageRangeSource];
        }
        obj.googleAgeRangeSource = tmp2;
        const significantChangeStatus = ageLower.significantChangeStatus;
        let tmp3;
        if (null != significantChangeStatus) {
          tmp3 = closure_1_5[significantChangeStatus];
        }
        obj.googleSignificantChangeStatus = tmp3;
        return obj;
      }
      await PlayAgeSignals.getAgeSignals();
      return toAppStoreAgeCheck(arg1);
    })();
  },
};
