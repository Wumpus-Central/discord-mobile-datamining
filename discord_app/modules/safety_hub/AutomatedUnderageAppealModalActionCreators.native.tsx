import ACTION_SHEET_HEIGHT_HALF from "ACTION_SHEET_HEIGHT_HALF";
import SafetyHubView from "SafetyHubView";
import { AGE_VERIFICATION_GET_STARTED_MODAL_KEY as closure_6 } from "set";
import { jsx } from "jsxProd";

let c4;
let c5;
const require = arg1;
({ AGE_APPEAL_ACTION_SHEET_NAME: c4, AGE_CHECK_POLL_DELAY_MS: c5 } = SafetyHubView);
let obj = {
  open(classificationId, onClose) {
    let obj = importDefault(709);
    obj.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
    obj = { classificationId, onClose };
    importDefault(4253).openLazy(require(1959) /* asyncRequireImpl */(11211, dependencyMap.paths), closure_4, obj);
  },
  openV2(arg0, onClose) {
    let closure_0 = arg0;
    const importDefault = onClose;
    let obj = importDefault(709);
    obj.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
    obj = { onClose };
    importDefault(4490).pushLazy(callback(function*() {
      let closure_0 = tmp2;
      yield outer1_0(paths[7])(paths[9], paths.paths);
      closure_0 = arg1.default;
      return () => outer2_7(closure_0, {
        classificationId: closure_0,
        entryPoint: outer2_0(table[10]).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS,
        isRetry: false,
        useEmbeddedMethods: true,
        onComplete() {
          outer1_8.success();
          if (closure_1 != null) {
            closure_1();
          }
          const result = outer1_8.start_verification_check();
        }
      });
    }), obj, closure_6);
  },
  close() {
    importDefault(709).dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE" });
  },
  success() {
    importDefault(709).dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS" });
  },
  start_verification_check() {
    importDefault(709).dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL" });
    const timerId = setTimeout(() => callback(table[11]).checkSuspendedUserAgeVerification(), closure_5);
  }
};
let result = require("set").fileFinishedImporting("modules/safety_hub/AutomatedUnderageAppealModalActionCreators.native.tsx");

export default obj;