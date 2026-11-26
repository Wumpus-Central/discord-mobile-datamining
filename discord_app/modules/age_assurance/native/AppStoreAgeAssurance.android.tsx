// === Module 8063: AppStoreAgeAssurance ===

// Module 8063 (AppStoreAgeAssurance)
import PlayAgeSignals from "PlayAgeSignals" /* 8064 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_3 = { [fn(8064).AgeSignalsStatus.SHARED]: "SHARED", [fn(8064).AgeSignalsStatus.NOT_SHARED]: "NOT_SHARED", [fn(8064).AgeSignalsStatus.VERIFICATION_REQUIRED]: "VERIFICATION_REQUIRED" };
let closure_4 = { [fn(8064).AgeRangeSource.TIER_A]: "TIER_A", [fn(8064).AgeRangeSource.TIER_B]: "TIER_B", [fn(8064).AgeRangeSource.TIER_C]: "TIER_C", [fn(8064).AgeRangeSource.TIER_D]: "TIER_D" };
let closure_5 = { [fn(8064).SignificantChangeStatus.APPROVED]: "APPROVED", [fn(8064).SignificantChangeStatus.PENDING]: "PENDING", [fn(8064).SignificantChangeStatus.DECLINED]: "DECLINED" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/AppStoreAgeAssurance.android.tsx");

export default {
  getAgeSignals() {
    return (async () => {
      function toAppStoreAgeCheck(ageLower) {
        const obj = { platform: "android", ageLower: ageLower.ageLower, ageUpper: ageLower.ageUpper, googleAgeSignalsStatus: null, googleAgeRangeSource: null, googleSignificantChangeStatus: null, googleInstallId: null };
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
        const installId = ageLower.installId;
        let tmp4;
        if (null != installId) {
          if ("" !== installId) {
            tmp4 = installId;
          }
        }
        obj.googleInstallId = tmp4;
        return obj;
      }
      await PlayAgeSignals.getAgeSignals();
      return toAppStoreAgeCheck(value);
    })();
  }
};