// === Module 7561: useInitiateAgeVerification ===

// Module 7561 (useInitiateAgeVerification)
import DispatcherDefault from "Dispatcher" /* 584 */;
import AgeVerificationURLActionCreators from "AgeVerificationURLActionCreators" /* 7510 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
function useAgeVerificationRunner(onComplete) {
  onComplete = onComplete.onComplete;
  _require = onComplete;
  let entryPoint = onComplete.entryPoint;
  let flag = onComplete.shouldShowExpressiveModal;
  if (flag === undefined) {
    flag = false;
  }
  const onMethodUnavailable = onComplete.onMethodUnavailable;
  _slicedToArray = undefined;
  let current;
  let callback;
  const tmp = _slicedToArray(current.useState(false), 2);
  _slicedToArray = tmp[1];
  const items = [callback];
  const stateFromStores = require("initialize").useStateFromStores(items, () => callback.getCurrentUser());
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  current = current.useRef(prop).current;
  const items1 = [current];
  callback = obj.useCallback(() => {
    DispatcherDefault.dispatch({ type: "CLOSE_AGE_VERIFICATION_MODAL", status: current });
  }, items1);
  _require = onMethodUnavailable((onComplete, entryPoint) => {
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, value) {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp8 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          c7 = 2;
          if (0 === v3) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              shouldShowExpressiveModal = tmp6;
              closure_130_0 = entryPoint;
              closure_130_1 = undefined;
              tmp72(true);
              c5 = 2;
              entryPoint(flag[7]).dispatch({ type: "INITIATE_AGE_VERIFICATION" });
              v3 = 3;
              c7 = 1;
              const obj8 = { value: onComplete(), done: false };
              return obj8;
            }
          } else if (1 === tmp9) {
            c5 = 0;
            tmp72(false);
            throw tmp72;
          } else {
            if (2 === tmp9) {
              c5 = 1;
              closure_130_2 = tmp72;
              v3();
              if (null != tmp4) {
                let code;
                if (closure_130_2 != null) {
                  const body = closure_130_2.body;
                  if (body != null) {
                    code = body.code;
                  }
                }
                if (code === constants.AGE_VERIFICATION_METHOD_UNAVAILABLE) {
                  entryPoint(flag[9]).showFailedToast(constants2.AGE_VERIFICATION_METHOD_UNAVAILABLE);
                  tmp4();
                  const obj5 = entryPoint(flag[9]);
                }
                c5 = 0;
                tmp72(false);
                c7 = 3;
              }
              entryPoint(flag[9]).showFailedToast(constants2.TIGGER_PAWTECT_ERROR);
              const obj4 = entryPoint(flag[9]);
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_130_1 = value;
              let method;
              if (closure_130_0 != null) {
                method = closure_130_0.method;
              }
              const obj = { method, externalWindow: null, webviewUrl: null, verificationRequestId: null, verificationVendorName: null, incodeParameters: null, onComplete: null, onClose: null, onCancel: null, entryPoint: null, shouldShowExpressiveModal: null };
              let externalWindow;
              if (closure_130_0 != null) {
                externalWindow = closure_130_0.externalWindow;
              }
              obj.externalWindow = externalWindow;
              obj.webviewUrl = closure_130_1.verification_webview_url;
              obj.verificationRequestId = closure_130_1.verification_request_id;
              obj.verificationVendorName = closure_130_1.verification_vendor_name;
              obj.incodeParameters = closure_130_1.incode_parameters;
              obj.onComplete = onComplete;
              obj.onClose = v3;
              obj.onCancel = v3;
              obj.entryPoint = entryPoint;
              obj.shouldShowExpressiveModal = shouldShowExpressiveModal;
              if (false === obj10.showAgeVerification(obj)) {
                entryPoint(flag[9]).showFailedToast(constants2.TIGGER_PAWTECT_ERROR);
                v3();
                const obj2 = entryPoint(flag[9]);
              }
              c5 = 1;
              obj10 = entryPoint(flag[8]);
            }
            c5 = 0;
            tmp72(false);
            c7 = 3;
            const obj9 = { value, done: true };
            return obj9;
          }
        } catch (tmp72) {
          if (tmp5 === c5) {
            c7 = tmp3;
            throw tmp72;
          } else if (tmp2 === tmp74) {
            v3 = tmp2;
          } else {
            v3 = tmp;
          }
        }
      }
    })();
  });
  const items2 = [onComplete, callback, flag, entryPoint, onMethodUnavailable];
  let obj2 = require("initialize");
  return {
    loading: tmp[0],
    startVerification: current.useCallback(function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, items2)
  };
}
const AbortCodes = fn(1085).AbortCodes;
const SafetyToastType = fn(7019).SafetyToastType;
fn(558);
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useInitiateAgeVerification(arg0) {
  const cResult = classificationId(576).c(10);
  ({ onComplete, entryPoint, shouldShowExpressiveModal, classificationId } = arg0);
  let tmp3 = null;
  if (undefined !== classificationId) {
    tmp3 = classificationId;
  }
  classificationId = tmp3;
  if (cResult[0] === entryPoint) {
    if (cResult[1] === onComplete) {
      if (cResult[2] === tmp2) {
        let tmp4 = cResult[3];
      }
      ({ loading, startVerification } = useAgeVerificationRunner(tmp4));
      if (cResult[4] === tmp3) {
        if (cResult[5] === startVerification) {
          let tmp7 = cResult[6];
        }
        if (cResult[7] === tmp7) {
          if (cResult[8] === loading) {
            let tmp8 = cResult[9];
          }
          return tmp8;
        }
        let obj2 = { loading, initiateAgeVerification: tmp7 };
        cResult[7] = tmp7;
        cResult[8] = loading;
        cResult[9] = obj2;
        tmp8 = obj2;
      }
      const fn = function v(method, vendor) {
        startVerification = vendor;
        return startVerification(() => {
          const obj2 = { method, classificationId, vendor };
          return AgeVerificationURLActionCreators.requestAgeVerification(obj2);
        });
      };
      cResult[4] = tmp3;
      cResult[5] = startVerification;
      cResult[6] = fn;
      tmp7 = fn;
      const tmp6 = useAgeVerificationRunner(tmp4);
    }
  }
  const obj3 = { onComplete, entryPoint, shouldShowExpressiveModal: undefined !== shouldShowExpressiveModal && shouldShowExpressiveModal };
  cResult[0] = entryPoint;
  cResult[1] = onComplete;
  cResult[2] = undefined !== shouldShowExpressiveModal && shouldShowExpressiveModal;
  cResult[3] = obj3;
  tmp4 = obj3;
  const obj = classificationId(576);
}) : (function useInitiateAgeVerification(shouldShowExpressiveModal) {
  let flag = shouldShowExpressiveModal.shouldShowExpressiveModal;
  ({ onComplete, entryPoint } = shouldShowExpressiveModal);
  if (flag === undefined) {
    flag = false;
  }
  let classificationId = shouldShowExpressiveModal.classificationId;
  if (classificationId === undefined) {
    classificationId = null;
  }
  const tmp2 = useAgeVerificationRunner({ onComplete, entryPoint, shouldShowExpressiveModal: flag });
  let startVerification = tmp2.startVerification;
  const obj = { loading: tmp2.loading, initiateAgeVerification: null };
  const items = [startVerification, classificationId];
  obj.initiateAgeVerification = noop.useCallback((method, vendor) => {
    startVerification = vendor;
    return startVerification(() => {
      const obj2 = { method, classificationId, vendor };
      return AgeVerificationURLActionCreators.requestAgeVerification(obj2);
    });
  }, items);
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/hooks/useInitiateAgeVerification.tsx");

export const useInitiateAgeVerification = tmp2;
export const useInitiateAgeVerificationV2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useInitiateAgeVerificationV2(arg0) {
  const cResult = startVerification(576).c(9);
  ({ onComplete, entryPoint, onMethodUnavailable } = arg0);
  if (cResult[0] === entryPoint) {
    if (cResult[1] === onComplete) {
      if (cResult[2] === onMethodUnavailable) {
        let tmp2 = cResult[3];
      }
      ({ loading, startVerification } = useAgeVerificationRunner(tmp2));
      if (cResult[4] !== startVerification) {
        const fn = function c(arg0) {
          closure_0 = arg0;
          return startVerification(() => startVerification(dependencyMap[12]).requestAgeVerificationV2(closure_0.method, closure_0.vendor), arg0);
        };
        cResult[4] = startVerification;
        cResult[5] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[5];
      }
      if (cResult[6] === tmp5) {
        if (cResult[7] === loading) {
          let tmp6 = cResult[8];
        }
        return tmp6;
      }
      const obj2 = { loading, initiateAgeVerificationV2: tmp5 };
      cResult[6] = tmp5;
      cResult[7] = loading;
      cResult[8] = obj2;
      tmp6 = obj2;
      const tmp4 = useAgeVerificationRunner(tmp2);
    }
  }
  const obj3 = { onComplete, entryPoint, shouldShowExpressiveModal: true, onMethodUnavailable };
  cResult[0] = entryPoint;
  cResult[1] = onComplete;
  cResult[2] = onMethodUnavailable;
  cResult[3] = obj3;
  tmp2 = obj3;
  const obj = startVerification(576);
}) : (function useInitiateAgeVerificationV2(onComplete) {
  const tmp = useAgeVerificationRunner({ onComplete: onComplete.onComplete, entryPoint: onComplete.entryPoint, shouldShowExpressiveModal: true, onMethodUnavailable: onComplete.onMethodUnavailable });
  const startVerification = tmp.startVerification;
  const obj2 = { loading: tmp.loading, initiateAgeVerificationV2: null };
  const items = [startVerification];
  obj2.initiateAgeVerificationV2 = noop.useCallback((arg0) => {
    closure_0 = arg0;
    return startVerification(() => startVerification(dependencyMap[12]).requestAgeVerificationV2(closure_0.method, closure_0.vendor), arg0);
  }, items);
  return obj2;
});