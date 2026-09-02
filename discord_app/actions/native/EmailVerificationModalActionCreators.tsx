// === Module 7696: ? ===

// Module 7696
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4723 from "module_4723" /* 4723 */;

const AnalyticEvents = ME.AnalyticEvents;
const EMAIL_VERIFICATION_MODAL_KEY = "EMAIL_VERIFICATION_MODAL_KEY";
const result = set.fileFinishedImporting("actions/native/EmailVerificationModalActionCreators.tsx");

export default {
  open() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    if (flag) {
      expandEventPropertiesDefault.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED);
      const obj = expandEventPropertiesDefault;
    }
    _modDef4723.pushLazy(asyncRequireImpl(7697, dependencyMap.paths), { isChangeEmail: flag }, EMAIL_VERIFICATION_MODAL_KEY);
  },
  close() {
    dispatcherDefault.wait(() => {
      callback(table[2]).popWithKey(closure_4);
    });
  }
};