// === Module 16675: ? ===

// Module 16675
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_3 = { [fn(16676).AgeSignalsVerificationStatus.VERIFIED]: "VERIFIED", [fn(16676).AgeSignalsVerificationStatus.SUPERVISED]: "SUPERVISED", [fn(16676).AgeSignalsVerificationStatus.SUPERVISED_APPROVAL_PENDING]: "SUPERVISED_APPROVAL_PENDING", [fn(16676).AgeSignalsVerificationStatus.SUPERVISED_APPROVAL_DENIED]: "SUPERVISED_APPROVAL_DENIED", [fn(16676).AgeSignalsVerificationStatus.UNKNOWN]: "UNKNOWN", [fn(16676).AgeSignalsVerificationStatus.DECLARED]: "DECLARED" };
const result = require("obj132").fileFinishedImporting("modules/age_assurance/native/AppStoreAgeAssurance.android.tsx");

export default {
  getAgeSignals() {
    return callback(function*() {
      function toAppStoreAgeCheck(ageLower) {
        const obj = { platform: "android", ageLower: ageLower.ageLower, ageUpper: ageLower.ageUpper, googleUserStatus: null };
        let tmp;
        if (null != ageLower.userStatus) {
          tmp = table[ageLower.userStatus];
        }
        obj[3] = tmp;
        return obj;
      }
      const obj2 = closure_1_0(table[1]);
      yield obj2.getAgeSignals();
      return toAppStoreAgeCheck(ageLower);
    })();
  }
};