// === Module 13795: AgeKeyReturnHandler ===

// Module 13795 (AgeKeyReturnHandler)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4736 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import AgeVerificationCustomTab from "AgeVerificationCustomTab" /* 8100 */;
import AgeVerificationConstants from "AgeVerificationConstants" /* 8085 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ AGE_VERIFICATION_GET_STARTED_MODAL_KEY: c3, AGE_VERIFICATION_MODAL_KEY: closure_4 } = AgeVerificationConstants);
const set = new Set();
let result = size.fileFinishedImporting("modules/age_assurance/native/AgeKeyReturnHandler.tsx");

export const handleAgeKeyReturn = function handleAgeKeyReturn(arg0) {
  let ageKeySaved;
  let result;
  let verificationId;
  ({ result, ageKeySaved, verificationId } = arg0);
  if (verificationId == null) {
    verificationId = "";
  }
  if (result == null) {
    result = "";
  }
  if (ageKeySaved == null) {
    ageKeySaved = "";
  }
  const combined = "" + verificationId + ":" + result + ":" + ageKeySaved;
  if (!set.has(combined)) {
    set.add(combined);
    const obj2 = AgeVerificationCustomTab;
    if (obj2.getIsAgeVerificationCustomTabOpen()) {
      const tmp3Result = AgeVerificationCustomTab;
      const result1 = tmp3Result.releaseAgeVerificationCustomTab();
      const tmp3Result3 = NavigationRouteUtils;
      if (tmp3Result3.isModalOpen(_false)) {
        const arr = ModalActionCreatorsDefault;
        arr.pop();
      }
    }
    const tmp3Result4 = NavigationRouteUtils;
    if (tmp3Result4.isModalOpen(React3)) {
      const arr2 = ModalActionCreatorsDefault;
      arr2.pop();
      const arr3 = ModalActionCreatorsDefault;
      arr3.pop();
    }
  }
};