// discord_app/actions/native/EmailVerificationModalActionCreators.tsx
import { AnalyticEvents } from "ME";

const EMAIL_VERIFICATION_MODAL_KEY = "EMAIL_VERIFICATION_MODAL_KEY";
const result = require("module_4490").fileFinishedImporting("actions/native/EmailVerificationModalActionCreators.tsx");

export default {
  open() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    if (flag) {
      require("../../utils/AnalyticsUtils.tsx").track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED);
      const obj = require("../../utils/AnalyticsUtils.tsx");
    }
    require("../ModalActionCreators.tsx").pushLazy(require("../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(8263, dependencyMap.paths), { isChangeEmail: flag }, EMAIL_VERIFICATION_MODAL_KEY);
  },
  close() {
    require("../../Dispatcher.tsx").wait(() => {
      callback(table[2]).popWithKey(closure_4);
    });
  }
};