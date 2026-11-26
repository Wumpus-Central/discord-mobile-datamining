// === Module 7188: EmailVerificationModalActionCreators ===

// Module 7188 (EmailVerificationModalActionCreators)
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const EMAIL_VERIFICATION_MODAL_KEY = "EMAIL_VERIFICATION_MODAL_KEY";
const result = size.fileFinishedImporting("actions/native/EmailVerificationModalActionCreators.tsx");

export default {
  open() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    if (flag) {
      AnalyticsUtilsDefault.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED);
    }
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7189, dependencyMap.paths), { isChangeEmail: flag }, EMAIL_VERIFICATION_MODAL_KEY);
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(EMAIL_VERIFICATION_MODAL_KEY);
  }
};