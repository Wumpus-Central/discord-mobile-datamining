// discord_app/actions/native/EmailVerificationModalActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../ModalActionCreators.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
    ModalActionCreatorsDefault.pushLazy(
      asyncRequireImpl(5622, dependencyMap.paths),
      { isChangeEmail: flag },
      EMAIL_VERIFICATION_MODAL_KEY,
    );
  },
  close() {
    DispatcherDefault.wait(() => {
      ModalActionCreatorsDefault.popWithKey(EMAIL_VERIFICATION_MODAL_KEY);
    });
  },
};
