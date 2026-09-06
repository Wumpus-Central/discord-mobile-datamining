// === Module 11883: ? ===

// Module 11883
import dispatcherDefault from "dispatcher" /* 573 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import SafetyHubView from "SafetyHubView" /* 8419 */;
import { AGE_VERIFICATION_GET_STARTED_MODAL_KEY as closure_6 } from "set" /* 8412 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
({ AGE_APPEAL_ACTION_SHEET_NAME: c4, AGE_CHECK_POLL_DELAY_MS: c5 } = SafetyHubView);
let obj = {
  open(classificationId, onClose) {
    obj = dispatcherDefault;
    obj.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
    obj = { classificationId, onClose };
    ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11884, dependencyMap.paths), closure_4, obj);
  },
  openV2(arg0, onClose) {
    const _require = arg0;
    importDefault = onClose;
    obj = dispatcherDefault;
    obj.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
    if (obj2.isCurrentUserSuspended()) {
      if (tmp4Result.isExpressiveModalV2Enabled(tmp4(8413).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS)) {
        const _Math = Math;
        const _Date = Date;
        dependencyMap = Math.floor(Date.now() / 1000);
        let tmpResult = tmp(4763);
        obj = { onClose: null };
        obj[0] = onClose;
        tmpResult.pushLazy(callback(function*() {
          closure_0 = tmp2;
          yield closure_1_0(paths[8])(paths[13], paths.paths);
          closure_0 = arg1.default;
          return () => closure_2_7(closure_0, {
            entryPoint: closure_2_0(table[11]).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS,
            onClose() {
              let tmp;
              if (callback != null) {
                tmp = callback();
              }
              return tmp;
            },
            onComplete() {
              closure_0 = closure_2;
              closure_1_0(closure_1_2[4]).resetAgeCheckStatus();
              obj = closure_1_0(closure_1_2[4]);
              closure_1_1(closure_1_2[5]).dispatch({ type: "SAFETY_HUB_EXPRESSIVE_MODAL_V2_VERIFICATION_SUBMITTED" });
              const obj2 = closure_1_1(closure_1_2[5]);
              closure_1_1(closure_1_2[5]).dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL" });
              const timerId = setTimeout(() => callback(closure_1_2[4]).checkSuspendedUserAgeVerificationV2(callback), closure_1_5);
            }
          });
        }), obj, closure_6);
      }
    }
    tmpResult = tmp(4763);
    obj = { onClose };
    tmpResult.pushLazy(callback(function*() {
      closure_0 = tmp2;
      yield closure_1_0(paths[8])(paths[14], paths.paths);
      closure_0 = arg1.default;
      return () => closure_2_7(closure_0, {
        classificationId: closure_0,
        entryPoint: closure_2_0(table[11]).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS,
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
    const timerId = setTimeout(() => callback(table[4]).checkSuspendedUserAgeVerification(), closure_5);
  }
};
let result = require("set").fileFinishedImporting("modules/safety_hub/AutomatedUnderageAppealModalActionCreators.native.tsx");

export default obj;