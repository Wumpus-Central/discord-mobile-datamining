// discord_app/modules/safety_hub/AutomatedUnderageAppealModalActionCreators.native.tsx
import dispatcherDefault from "../../Dispatcher.tsx";
import asyncRequireImpl from "../../../_runtime/02007_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import _modDef5260 from "../../actions/ModalActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import SafetyHubView from "SafetyHubConstants.tsx";
import { AGE_VERIFICATION_GET_STARTED_MODAL_KEY as closure_6 } from "../age_assurance/AgeVerificationConstants.tsx";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";

require = fn;
({ AGE_APPEAL_ACTION_SHEET_NAME: c4, AGE_CHECK_POLL_DELAY_MS: c5 } = SafetyHubView);
let obj = {
  open(classificationId, onClose) {
    obj = dispatcherDefault;
    obj.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
    obj = { classificationId, onClose };
    ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11079, dependencyMap.paths), closure_4, obj);
  },
  openV2(classificationId, onClose) {
    closure_0 = classificationId;
    importDefault = onClose;
    obj = dispatcherDefault;
    obj.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
    obj = { onClose };
    _modDef5260.pushLazy(callback(function*() {
      yield classificationId(paths[7])(paths[9], paths.paths);
      closure_0 = arg1.default;
      return () => closure_2_7(closure_0, {
        classificationId: closure_0,
        entryPoint: classificationId(table[10]).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS,
        isRetry: false,
        useEmbeddedMethods: true,
        onComplete() {
          closure_1_8.success();
          if (callback != null) {
            callback();
          }
          const result = closure_1_8.start_verification_check();
        }
      });
    }), obj, closure_6);
  },
  close() {
    dispatcherDefault.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE" });
  },
  success() {
    dispatcherDefault.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS" });
  },
  start_verification_check() {
    dispatcherDefault.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL" });
    const timerId = setTimeout(() => callback(table[11]).checkSuspendedUserAgeVerification(), closure_5);
  }
};
let result = require("obj132").fileFinishedImporting("modules/safety_hub/AutomatedUnderageAppealModalActionCreators.native.tsx");

export default obj;