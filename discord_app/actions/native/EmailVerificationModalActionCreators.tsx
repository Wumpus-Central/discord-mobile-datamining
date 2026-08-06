// discord_app/actions/native/EmailVerificationModalActionCreators.tsx
import { AnalyticEvents } from "ME";
import { asyncRequireImpl } from "../../../_runtime/01988_asyncRequireImpl.js";
import { dispatcher } from "../../Dispatcher.tsx";
import { expandEventProperties } from "../../utils/AnalyticsUtils.tsx";
import { ModalActionCreators } from "../ModalActionCreators.tsx";

const EMAIL_VERIFICATION_MODAL_KEY = "EMAIL_VERIFICATION_MODAL_KEY";
const result = require("module_4490").fileFinishedImporting("actions/native/EmailVerificationModalActionCreators.tsx");

export default {
  open() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    if (flag) {
      expandEventProperties.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED);
      const obj = expandEventProperties;
    }
    ModalActionCreators.pushLazy(asyncRequireImpl(8375, dependencyMap.paths), { isChangeEmail: flag }, EMAIL_VERIFICATION_MODAL_KEY);
  },
  close() {
    dispatcher.wait(() => {
      callback(table[2]).popWithKey(closure_4);
    });
  }
};