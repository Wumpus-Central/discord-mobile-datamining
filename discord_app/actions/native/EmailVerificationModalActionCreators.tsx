// === Module 8561: ? ===

// Module 8561
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import _modDef5260 from "module_5260" /* 5260 */;

const AnalyticEvents = ME.AnalyticEvents;
const EMAIL_VERIFICATION_MODAL_KEY = "EMAIL_VERIFICATION_MODAL_KEY";
const result = obj132.fileFinishedImporting("actions/native/EmailVerificationModalActionCreators.tsx");

export default {
  open() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    if (flag) {
      expandEventPropertiesDefault.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED);
    }
    _modDef5260.pushLazy(asyncRequireImpl(8562, dependencyMap.paths), { isChangeEmail: flag }, EMAIL_VERIFICATION_MODAL_KEY);
  },
  close() {
    dispatcherDefault.wait(() => {
      callback(table[2]).popWithKey(closure_4);
    });
  }
};