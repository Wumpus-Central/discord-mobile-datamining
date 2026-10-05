// === Module 11495: AutomatedUnderageAppealModalActionCreators ===

// Module 11495 (AutomatedUnderageAppealModalActionCreators)
import Fragment from "Fragment" /* 21 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import AgeVerificationConstants from "AgeVerificationConstants" /* 8085 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import SafetyHubConstants from "SafetyHubConstants" /* 8093 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c2, dependencyMap, importDefault;

let closure_4;
let hasOwnProperty;
let tmp;
const ModalActionCreatorsDefault = tmp(5093);
({ AGE_APPEAL_ACTION_SHEET_NAME: closure_4, AGE_CHECK_POLL_DELAY_MS: hasOwnProperty } = SafetyHubConstants);
let closure_6 = AgeVerificationConstants.AGE_VERIFICATION_GET_STARTED_MODAL_KEY;
const jsx = Fragment.jsx;
let obj = {
  open(classificationId, onClose) {
    obj = DispatcherDefault;
    obj.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
    const obj2 = ActionSheetActionCreatorsDefault;
    const obj3 = { classificationId, onClose };
    obj2.openLazy(asyncRequire(11496, dependencyMap.paths), React3, obj3);
  },
  openV2(classificationId, onClose) {
    let closure_2;
    _require = classificationId;
    importDefault = onClose;
    const tmp2 = dependencyMap;
    let tmp = importDefault;
    obj = DispatcherDefault;
    obj.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
    let tmp4 = _require;
    let obj2 = require("SafetyHubUtils");
    if (obj2.isCurrentUserSuspended()) {
      const tmp4Result = tmp4(8105);
      if (tmp4Result.isExpressiveModalV2Enabled(tmp4(8086).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS)) {
        let tmp6 = globalThis;
        const _Math = Math;
        const _Date = Date;
        let num = 1000;
        dependencyMap = Math.floor(Date.now() / 1000);
        let tmp8 = (async () => {
          let closure_1;
          let v3;
          if (v3 === 2) {
            v3 = 3;
            const str = "Generator functions may not be called on executing generators";
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              let obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              v3 = 2;
              const tmp3 = c2;
              if (0 === c2) {
                if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v3 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  onClose = tmp3;
                  classificationId = tmp3;
                  const obj5 = classificationId(c2[12]);
                  c2 = 1;
                  v3 = 1;
                  const obj6 = { value: obj5.shouldShowManualReviewFallback(classificationId(c2[11]).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS), done: false };
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
                  let obj3 = onClose(c2[13]);
                  const result = obj3.showManualReviewFallbackModal(classificationId(c2[11]).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS, closure_129_1);
                } else {
                  obj = onClose(c2[14]);
                  const obj8 = { onClose: closure_129_1 };
                  obj.pushLazy(v3(async () => {
                    let c1;
                    let tmp;
                    await tmp(paths[8])(paths[15], paths.paths);
                    tmp = value.default;
                    return () => {
                      obj = {
                        entryPoint: closure_3_0(closure_3_2[11]).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS,
                        onClose() {
                          let tmp;
                          if (closure_1_1 != null) {
                            tmp = closure_1_1();
                          }
                          return tmp;
                        },
                        onComplete() {
                          closure_0 = closure_1_2;
                          obj = closure_2_0(paths[4]);
                          obj.resetAgeCheckStatus();
                          const obj2 = closure_2_1(paths[5]);
                          obj2.dispatch({ type: "SAFETY_HUB_EXPRESSIVE_MODAL_V2_VERIFICATION_SUBMITTED" });
                          const obj3 = closure_2_1(paths[5]);
                          obj3.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL" });
                          const timerId = setTimeout(() => {
                            obj = closure_2_0(closure_2_2[4]);
                            return obj.checkSuspendedUserAgeVerificationV2(closure_0);
                          }, closure_2_5);
                        }
                      };
                      return closure_3_7(closure_1_0, obj);
                    };
                  }), obj8, closure_1_6);
                }
                v3 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp23) {
              v3 = 3;
              throw tmp23;
            }
          }
        })();
      }
    }
    let obj3 = { onClose };
    const tmpResult = ModalActionCreatorsDefault;
    tmpResult.pushLazy(_asyncToGenerator(async () => {
      let c1;
      let closure_0;
      let tmp;
      await tmp(paths[8])(paths[16], paths.paths);
      tmp = value.default;
      return () => <closure_1_0 classificationId={classificationId} entryPoint={classificationId(closure_2[11]).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS} isRetry={false} useEmbeddedMethods onComplete={function onComplete() {
        closure_2_8.success();
        if (closure_1_1 != null) {
          closure_1_1();
        }
        const result = closure_2_8.start_verification_check();
      }} />;
    }), obj3, closure_6);
  },
  close() {
    obj = DispatcherDefault;
    obj.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE" });
  },
  success() {
    obj = DispatcherDefault;
    obj.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS" });
  },
  start_verification_check() {
    obj = DispatcherDefault;
    obj.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL" });
    const timerId = setTimeout(() => {
      obj = require("SafetyHubActionCreators");
      return obj.checkSuspendedUserAgeVerification();
    }, hasOwnProperty);
  }
};
let result = size.fileFinishedImporting("modules/safety_hub/AutomatedUnderageAppealModalActionCreators.native.tsx");

export default obj;