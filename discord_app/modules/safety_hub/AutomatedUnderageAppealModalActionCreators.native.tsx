// discord_app/modules/safety_hub/AutomatedUnderageAppealModalActionCreators.native.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import asyncRequireImpl from "../../../_runtime/01981_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

const ModalActionCreatorsDefault = tmp(5039);
require = fn;
const SafetyHubConstants = fn(7868);
({ AGE_APPEAL_ACTION_SHEET_NAME: closure_4, AGE_CHECK_POLL_DELAY_MS: hasOwnProperty } = SafetyHubConstants);
let closure_6 = fn(7860).AGE_VERIFICATION_GET_STARTED_MODAL_KEY;
const jsx = fn(21).jsx;
let obj = {
  open(classificationId, onClose) {
    DispatcherDefault.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11363, dependencyMap.paths), React4, { classificationId, onClose });
  },
  openV2(classificationId, onClose) {
    _require = classificationId;
    importDefault = onClose;
    DispatcherDefault.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
    if (obj2.isCurrentUserSuspended()) {
      if (tmp4Result.isExpressiveModalV2Enabled(tmp4(7861).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS)) {
        const _Math = Math;
        const _Date = Date;
        dependencyMap = Math.floor(Date.now() / 1000);
        (async () => {
          if (v3 === 2) {
            v3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              let obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              v3 = 2;
              if (0 === dependencyMap) {
                if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v3 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  onClose = tmp4;
                  classificationId = tmp4;
                  dependencyMap = 1;
                  v3 = 1;
                  const obj6 = { value: classificationId(7886).shouldShowManualReviewFallback(classificationId(7861).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS), done: false };
                  return obj6;
                }
              } else if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                v3 = 3;
                const obj7 = { value, done: true };
                return obj7;
              } else {
                if (value) {
                  const result = onClose(7859).showManualReviewFallbackModal(classificationId(7861).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS, closure_129_1);
                  const obj3 = onClose(7859);
                } else {
                  const obj8 = { onClose: closure_129_1 };
                  onClose(5039).pushLazy(v3(async () => {
                    await tmp2(paths[8])(paths[15], paths.paths);
                    closure_128_0 = value.default;
                    return () => closure_3_7(closure_1_0, {
                      entryPoint: closure_3_0(dependencyMap[11]).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS,
                      onClose() {
                        let tmp;
                        if (closure_1_1 != null) {
                          tmp = closure_1_1();
                        }
                        return tmp;
                      },
                      onComplete() {
                        closure_0 = dependencyMap;
                        closure_2_0(11360).resetAgeCheckStatus();
                        obj = closure_2_0(11360);
                        closure_2_1(573).dispatch({ type: "SAFETY_HUB_EXPRESSIVE_MODAL_V2_VERIFICATION_SUBMITTED" });
                        const obj2 = closure_2_1(573);
                        closure_2_1(573).dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL" });
                        const timerId = setTimeout(() => { ... }, closure_2_5);
                      }
                    });
                  }), obj8, closure_1_6);
                  obj = onClose(5039);
                }
                v3 = 3;
              }
            } catch (tmp24) {
              v3 = tmp;
              throw tmp24;
            }
          }
        })();
      }
      tmp4Result = tmp4(7880);
    }
    obj2 = require("SafetyHubUtils");
    ModalActionCreatorsDefault.pushLazy(asyncGeneratorStep(async () => {
      await tmp2(paths[8])(paths[16], paths.paths);
      closure_128_0 = value.default;
      return () => <closure_1_0 classificationId={classificationId} entryPoint={classificationId(closure_2[11]).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS} isRetry={false} useEmbeddedMethods onComplete={function onComplete() {
        closure_2_8.success();
        if (closure_1_1 != null) {
          closure_1_1();
        }
        const result = closure_2_8.start_verification_check();
      }} />;
    }), { onClose }, closure_6);
    let obj3 = { onClose };
    const tmpResult = ModalActionCreatorsDefault;
  },
  close() {
    DispatcherDefault.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE" });
  },
  success() {
    DispatcherDefault.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS" });
  },
  start_verification_check() {
    DispatcherDefault.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL" });
    const timerId = setTimeout(() => require("SafetyHubActionCreators").checkSuspendedUserAgeVerification(), hasOwnProperty);
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/safety_hub/AutomatedUnderageAppealModalActionCreators.native.tsx");

export default obj;