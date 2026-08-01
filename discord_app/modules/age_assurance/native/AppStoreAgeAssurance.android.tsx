// === Module 16310: ? ===

// Module 16310
import asyncGeneratorStep from "asyncGeneratorStep";

const require = arg1;
let obj = { [arg1(16311).AgeSignalsVerificationStatus.VERIFIED]: "VERIFIED", [arg1(16311).AgeSignalsVerificationStatus.SUPERVISED]: "SUPERVISED", [arg1(16311).AgeSignalsVerificationStatus.SUPERVISED_APPROVAL_PENDING]: "SUPERVISED_APPROVAL_PENDING", [arg1(16311).AgeSignalsVerificationStatus.SUPERVISED_APPROVAL_DENIED]: "SUPERVISED_APPROVAL_DENIED", [arg1(16311).AgeSignalsVerificationStatus.UNKNOWN]: "UNKNOWN", [arg1(16311).AgeSignalsVerificationStatus.DECLARED]: "DECLARED" };
const entries = Object.entries(obj);
let closure_4 = Object.fromEntries(entries.map((arg0) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = arg0;
  const items = [tmp2, Number(tmp)];
  return items;
}));
obj = {
  getAgeSignals() {
    return callback(function*() {
      if (c2 === 2) {
        c2 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              c2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              function toAppStoreAgeCheck(ageLower) {
                const obj = { platform: "android", ageLower: ageLower.ageLower, ageUpper: ageLower.ageUpper, googleUserStatus: null };
                let tmp;
                if (null != ageLower.userStatus) {
                  tmp = table[ageLower.userStatus];
                }
                obj[3] = tmp;
                return obj;
              }
              let obj2 = outer1_0(table[1]);
              table = 1;
              c2 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = obj2.getAgeSignals();
              return obj1;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = toAppStoreAgeCheck(arg1);
            return obj;
          }
        } catch (tmp8) {
          c2 = tmp;
          throw tmp8;
        }
      }
    })();
  },
  getIsConsideredOlderThan(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    return callback(function*() {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = tmp2;
              let c0 = tmp3;
              c0 = undefined;
              if (null != outer1_1) {
                let tmp7 = (function toPlayAgeSignals(ageLower) {
                  let tmp;
                  if (null != ageLower.googleUserStatus) {
                    tmp = table[ageLower.googleUserStatus];
                  }
                  return { userStatus: tmp, ageLower: ageLower.ageLower, ageUpper: ageLower.ageUpper };
                })(tmp22);
              } else {
                let obj1 = outer1_0(outer1_1[1]);
                c2 = 1;
                c3 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.getAgeSignals();
                return obj1;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else {
            tmp7 = arg1;
            if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
          }
          outer1_0 = tmp7;
          c3 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = outer1_0(outer1_1[1]).isConsideredOlderThan(outer1_0, outer1_0);
          return obj2;
        } catch (tmp16) {
          c3 = tmp;
          throw tmp16;
        }
      }
    })();
  }
};
const result = require("set").fileFinishedImporting("modules/age_assurance/native/AppStoreAgeAssurance.android.tsx");

export default obj;