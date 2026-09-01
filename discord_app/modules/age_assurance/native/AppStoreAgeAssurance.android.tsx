// discord_app/modules/age_assurance/native/AppStoreAgeAssurance.android.tsx
import closure_2 from "../../../../_runtime/00005_asyncGeneratorStep.js";

const require = arg1;
let closure_3 = {
  [arg1(17042).AgeSignalsStatus.SHARED]: "SHARED",
  [arg1(17042).AgeSignalsStatus.NOT_SHARED]: "NOT_SHARED",
  [arg1(17042).AgeSignalsStatus.VERIFICATION_REQUIRED]: "VERIFICATION_REQUIRED",
};
let closure_4 = {
  [arg1(17042).AgeRangeSource.TIER_A]: "TIER_A",
  [arg1(17042).AgeRangeSource.TIER_B]: "TIER_B",
  [arg1(17042).AgeRangeSource.TIER_C]: "TIER_C",
  [arg1(17042).AgeRangeSource.TIER_D]: "TIER_D",
};
let closure_5 = {
  [arg1(17042).SignificantChangeStatus.APPROVED]: "APPROVED",
  [arg1(17042).SignificantChangeStatus.PENDING]: "PENDING",
  [arg1(17042).SignificantChangeStatus.DECLINED]: "DECLINED",
};
const result = require("set").fileFinishedImporting("modules/age_assurance/native/AppStoreAgeAssurance.android.tsx");

export default {
  getAgeSignals() {
    return callback(function* () {
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
          tmp = table[ageSignalsStatus];
        }
        obj[3] = tmp;
        const ageRangeSource = ageLower.ageRangeSource;
        let tmp2;
        if (null != ageRangeSource) {
          tmp2 = table2[ageRangeSource];
        }
        obj[4] = tmp2;
        const significantChangeStatus = ageLower.significantChangeStatus;
        let tmp3;
        if (null != significantChangeStatus) {
          tmp3 = table3[significantChangeStatus];
        }
        obj[5] = tmp3;
        return obj;
      }
      const obj2 = closure_1_0(table[1]);
      yield obj2.getAgeSignals();
      return toAppStoreAgeCheck(arg1);
    })();
  },
};
