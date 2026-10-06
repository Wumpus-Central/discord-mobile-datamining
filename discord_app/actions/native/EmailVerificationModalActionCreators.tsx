// discord_app/actions/native/EmailVerificationModalActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import asyncRequire from "../../../_runtime/01987_asyncRequire.js";
import ModalActionCreatorsDefault from "../ModalActionCreators.tsx";
import size from "../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const EMAIL_VERIFICATION_MODAL_KEY = "EMAIL_VERIFICATION_MODAL_KEY";
let obj = {
  open() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    if (flag) {
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED);
    }
    const obj2 = ModalActionCreatorsDefault;
    obj2.pushLazy(asyncRequire(6015, dependencyMap.paths), { isChangeEmail: flag }, EMAIL_VERIFICATION_MODAL_KEY);
  },
  close() {
    let obj = DispatcherDefault;
    obj.wait(() => {
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(EMAIL_VERIFICATION_MODAL_KEY);
    });
  },
};
const result = size.fileFinishedImporting("actions/native/EmailVerificationModalActionCreators.tsx");

export default obj;
