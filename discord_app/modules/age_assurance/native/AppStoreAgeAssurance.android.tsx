// discord_app/modules/age_assurance/native/AppStoreAgeAssurance.android.tsx
import PlayAgeSignals from "PlayAgeSignals.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../../_runtime/metro/00002__.js";

let c1, c2;

let closure_3 = {
  [PlayAgeSignals.AgeSignalsStatus.SHARED]: "SHARED",
  [PlayAgeSignals.AgeSignalsStatus.NOT_SHARED]: "NOT_SHARED",
  [PlayAgeSignals.AgeSignalsStatus.VERIFICATION_REQUIRED]: "VERIFICATION_REQUIRED",
};
let closure_4 = {
  [PlayAgeSignals.AgeRangeSource.TIER_A]: "TIER_A",
  [PlayAgeSignals.AgeRangeSource.TIER_B]: "TIER_B",
  [PlayAgeSignals.AgeRangeSource.TIER_C]: "TIER_C",
  [PlayAgeSignals.AgeRangeSource.TIER_D]: "TIER_D",
};
let closure_5 = {
  [PlayAgeSignals.SignificantChangeStatus.APPROVED]: "APPROVED",
  [PlayAgeSignals.SignificantChangeStatus.PENDING]: "PENDING",
  [PlayAgeSignals.SignificantChangeStatus.DECLINED]: "DECLINED",
};
let obj = {
  getAgeSignals() {
    return (async () => {
      let obj3;
      let tmp2;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let toAppStoreAgeCheck;
          c2 = 2;
          let tmp3 = c1;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              toAppStoreAgeCheck = function toAppStoreAgeCheck(ageLower) {
                let tmp;
                let tmp2;
                let tmp3;
                const ageSignalsStatus = ageLower.ageSignalsStatus;
                const obj = {
                  platform: "android",
                  ageLower: ageLower.ageLower,
                  ageUpper: ageLower.ageUpper,
                  googleAgeSignalsStatus: tmp,
                  googleAgeRangeSource: tmp2,
                  googleSignificantChangeStatus: tmp3,
                };
                tmp = undefined;
                if (null != ageSignalsStatus) {
                  tmp = closure_1_3[ageSignalsStatus];
                }
                const ageRangeSource = ageLower.ageRangeSource;
                tmp2 = undefined;
                if (null != ageRangeSource) {
                  tmp2 = closure_1_4[ageRangeSource];
                }
                const significantChangeStatus = ageLower.significantChangeStatus;
                tmp3 = undefined;
                if (null != significantChangeStatus) {
                  tmp3 = closure_1_5[significantChangeStatus];
                }
                return obj;
              };
              c1 = 1;
              c2 = 1;
              const obj5 = { value: obj3.getAgeSignals(), done: false };
              obj3 = PlayAgeSignals;
              return obj5;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            c2 = 3;
            let obj = { value: toAppStoreAgeCheck(value), done: true };
            return obj;
          }
        } catch (tmp7) {
          c2 = 3;
          throw tmp7;
        }
      }
    })();
  },
};
const result = size.fileFinishedImporting("modules/age_assurance/native/AppStoreAgeAssurance.android.tsx");

export default obj;
