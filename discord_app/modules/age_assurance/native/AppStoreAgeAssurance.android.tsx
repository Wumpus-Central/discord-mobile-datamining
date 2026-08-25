// discord_app/modules/age_assurance/native/AppStoreAgeAssurance.android.tsx
import closure_2 from "../../../../_runtime/00005_asyncGeneratorStep.js";

const require = arg1;
let closure_3 = { [arg1(16804).AgeSignalsVerificationStatus.VERIFIED]: "VERIFIED", [arg1(16804).AgeSignalsVerificationStatus.SUPERVISED]: "SUPERVISED", [arg1(16804).AgeSignalsVerificationStatus.SUPERVISED_APPROVAL_PENDING]: "SUPERVISED_APPROVAL_PENDING", [arg1(16804).AgeSignalsVerificationStatus.SUPERVISED_APPROVAL_DENIED]: "SUPERVISED_APPROVAL_DENIED", [arg1(16804).AgeSignalsVerificationStatus.UNKNOWN]: "UNKNOWN", [arg1(16804).AgeSignalsVerificationStatus.DECLARED]: "DECLARED" };
const result = require("set").fileFinishedImporting("modules/age_assurance/native/AppStoreAgeAssurance.android.tsx");

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
      return toAppStoreAgeCheck(arg1);
    })();
  }
};