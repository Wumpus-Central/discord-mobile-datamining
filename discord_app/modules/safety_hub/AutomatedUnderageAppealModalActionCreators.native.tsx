// === Module 11404: ? ===

// Module 11404
import dispatcherDefault from "dispatcher" /* 709 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4413 */;
import _modDef4689 from "module_4689" /* 4689 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import SafetyHubView from "SafetyHubView" /* 8636 */;
import { AGE_VERIFICATION_GET_STARTED_MODAL_KEY as closure_6 } from "set" /* 8629 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
({ AGE_APPEAL_ACTION_SHEET_NAME: c4, AGE_CHECK_POLL_DELAY_MS: c5 } = SafetyHubView);
let obj = {
  open(classificationId, onClose) {
    obj = dispatcherDefault;
    obj.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
    obj = { classificationId, onClose };
    ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11405, dependencyMap.paths), closure_4, obj);
  },
  openV2(arg0, onClose) {
    closure_0 = arg0;
    importDefault = onClose;
    obj = dispatcherDefault;
    obj.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
    obj = { onClose };
    _modDef4689.pushLazy(callback(function*() {
      closure_0 = tmp2;
      yield closure_1_0(paths[7])(paths[9], paths.paths);
      closure_0 = arg1.default;
      return () => closure_2_7(closure_0, {
        classificationId: closure_0,
        entryPoint: closure_2_0(table[10]).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS,
        isRetry: false,
        useEmbeddedMethods: true,
        onComplete() {
          closure_1_8.success();
          if (closure_1 != null) {
            closure_1();
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
let result = require("set").fileFinishedImporting("modules/safety_hub/AutomatedUnderageAppealModalActionCreators.native.tsx");

export default obj;