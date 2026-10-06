// === Module 5108: AgeVerificationUtils ===

// Module 5108 (AgeVerificationUtils)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import intl7 from "intl" /* 1126 */;
import Server from "Server" /* 1985 */;
import _modDef3073 from "module_3073" /* 3073 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5587 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5588 */;
import usePreviousDefault from "usePrevious" /* 7957 */;
import Constants2 from "Constants" /* 8108 */;
import AgeVerificationConstants from "AgeVerificationConstants" /* 8118 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8119 */;
import AgeVerificationURLActionCreators from "AgeVerificationURLActionCreators" /* 8124 */;
import ManualAgeAssuranceFallbackExperiment from "ManualAgeAssuranceFallbackExperiment" /* 8145 */;
import ReactiveCheckActionCreators from "ReactiveCheckActionCreators" /* 13591 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import FamilyCenterPendingConnectionStore from "FamilyCenterPendingConnectionStore" /* 5109 */;
import RegionalFeatureConfigStore from "RegionalFeatureConfigStore" /* 5110 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MessageStore from "MessageStore" /* 5116 */;
import UserStore from "UserStore" /* 1377 */;
import AgeVerificationStore from "AgeVerificationStore" /* 8164 */;
import Constants from "Constants" /* 1085 */;
import AgeGateConstants from "AgeGateConstants" /* 1110 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0, c1, code, dependencyMap, importDefault, v2;

let AgeGateSource;
let closure_14;
let closure_15;
let map1;
function useAgeVerificationRunner(onComplete) {
  let closure_4;
  let currentUser;
  let first;
  onComplete = onComplete.onComplete;
  let entryPoint = onComplete.entryPoint;
  let flag = onComplete.shouldShowExpressiveModal;
  if (flag === undefined) {
    flag = false;
  }
  const onMethodUnavailable = onComplete.onMethodUnavailable;
  _slicedToArray = undefined;
  let current;
  let callback;
  obj = current;
  [first, _slicedToArray] = current.useState(false);
  obj2 = onComplete(flag[18]);
  const items = [UserStore];
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  let prop;
  const useRef = current.useRef;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  current = useRef(prop).current;
  const items1 = [current];
  callback = obj.useCallback(() => {
    obj = DispatcherDefault;
    obj2 = { type: "CLOSE_AGE_VERIFICATION_MODAL", status: current };
    obj.dispatch(obj2);
  }, items1);
  const useCallback = obj.useCallback;
  let closure_0 = onMethodUnavailable((onComplete, entryPoint) => {
    let closure_3;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0, value) {
      let externalWindow;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === v2) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              onComplete = entryPoint;
              entryPoint = undefined;
              tmp64(true);
              c5 = 2;
              const obj5 = closure_2_1(true[21]);
              obj5.dispatch({ type: "INITIATE_AGE_VERIFICATION" });
              code = onComplete();
              v2 = 3;
              c7 = 1;
              return { value: code, done: false };
            }
          } else if (1 === v2) {
            c5 = 0;
            code = tmp64(false);
            throw tmp64;
          } else {
            if (2 === v2) {
              c5 = 1;
              code = v2();
              if (null != tmp) {
                code = undefined;
                if (code != null) {
                  const body = code.body;
                  if (body != null) {
                    code = body.code;
                  }
                }
                if (code === constants.AGE_VERIFICATION_METHOD_UNAVAILABLE) {
                  const obj4 = closure_2_1(true[23]);
                  code = obj4.showFailedToast(constants2.AGE_VERIFICATION_METHOD_UNAVAILABLE);
                  tmp();
                }
              }
              code = closure_2_1(true[23]).showFailedToast;
              closure_2_1(true[23]);
              code(constants2.TIGGER_PAWTECT_ERROR);
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              tmp64(false);
              c7 = 3;
              return { value, done: true };
            } else {
              entryPoint = value;
              code = closure_2_1(true[22]).showAgeVerification;
              let method;
              closure_2_1(true[22]);
              if (onComplete != null) {
                method = onComplete.method;
              }
              obj = { method, externalWindow, webviewUrl: entryPoint.verification_webview_url, verificationRequestId: entryPoint.verification_request_id, verificationVendorName: entryPoint.verification_vendor_name, incodeParameters: entryPoint.incode_parameters, onComplete, onClose: v2, onCancel: v2, entryPoint, shouldShowExpressiveModal: code };
              externalWindow = undefined;
              if (onComplete != null) {
                externalWindow = onComplete.externalWindow;
              }
              if (false === code(obj)) {
                obj2 = closure_2_1(true[23]);
                code = obj2.showFailedToast(constants2.TIGGER_PAWTECT_ERROR);
                v2();
              }
              c5 = 1;
            }
            c5 = 0;
            tmp64(false);
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp64) {
          if (0 === c5) {
            c7 = 3;
            throw tmp64;
          } else if (1 === tmp66) {
            v2 = 1;
          } else {
            v2 = 2;
          }
        }
      }
    })();
  });
  const items2 = [onComplete, callback, flag, entryPoint, onMethodUnavailable];
  const obj3 = {
    loading: first,
    startVerification: useCallback(function() {
      return closure_0(...arguments);
    }, items2)
  };
  return obj3;
}
function shouldCallReactiveCheck() {
  const currentUser = UserStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  let tmp5 = prop !== Server.AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
  if (tmp5) {
    let prop1;
    if (currentUser != null) {
      prop1 = currentUser.ageVerificationStatus;
    }
    tmp5 = prop1 !== Server.AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  let tmp7 = !tmp5;
  if (tmp7) {
    tmp7 = RegionalFeatureConfigStore.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK) && AgeVerificationStore.shouldCallReactiveCheck();
    const isFeatureAgeGatedResult = RegionalFeatureConfigStore.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK) && AgeVerificationStore.shouldCallReactiveCheck();
  }
  return tmp7;
}
let obj = function _maybePerformReactiveCheck() {
  obj = _asyncToGenerator(async () => {
    let obj3;
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let tmp4;
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            tmp4 = null;
            if (shouldCallReactiveCheck()) {
              c1 = 1;
              c0 = 1;
              const obj5 = { value: obj3.fetchReactiveCheckResult(), done: false };
              obj3 = require("ReactiveCheckActionCreators");
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else {
          tmp4 = value;
          if (arg0 === 2) {
            c0 = 3;
            obj = { value, done: true };
            return obj;
          }
        }
        c0 = 3;
        const obj6 = { value: tmp4, done: true };
        return obj6;
      } catch (tmp8) {
        c0 = 3;
        throw tmp8;
      }
    }
  });
  return obj(...arguments);
};
let _slicedToArray = _slicedToArray_mod;
({ AbortCodes: map1, MessageEmbedTypes: closure_14 } = Constants);
({ AgeGateSource, REACTIVE_CHECK_AGE_GATE_SOURCES: closure_15 } = AgeGateConstants);
const SafetyToastType = Constants2.SafetyToastType;
let items = [AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT, AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.START_STAGE_PROMPT, AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND];
const set = new Set(items);
let items1 = [, , , , , ];
({ NSFW_SERVER: arr2[0], NSFW_SERVER_INVITE: arr2[1], NSFW_SERVER_INVITE_EMBED: arr2[2], LARGE_GUILD: arr2[3], JOIN_LARGE_GUILD_UNDERAGE: arr2[4], ACCESS_LARGE_GUILD_UNDERAGE: arr2[5] } = AgeGateSource);
const set1 = new Set(items1);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function t() {
      currentUser = currentUser.getCurrentUser();
      let prop;
      if (currentUser != null) {
        prop = currentUser.ageVerificationStatus;
      }
      const tmp5 = prop === require("Server").AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN || prop === require("Server").AgeVerificationStatusUkAndAusOnly.INFERRED_TEEN;
      return tmp5;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = fn;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [UserStore];
  obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let prop;
    if (currentUser != null) {
      prop = currentUser.ageVerificationStatus;
    }
    const tmp5 = prop === require("Server").AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN || prop === require("Server").AgeVerificationStatusUkAndAusOnly.INFERRED_TEEN;
    return tmp5;
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let currentUser;
  let tmp4;
  let tmp5;
  obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function t() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  let tmp9 = prop === Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
  if (!tmp9) {
    let prop1;
    if (stateFromStores != null) {
      prop1 = stateFromStores.ageVerificationStatus;
    }
    tmp9 = prop1 === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  }
  return tmp9;
}) : (() => {
  let currentUser;
  const items = [UserStore];
  obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  let tmp5 = prop === Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
  if (!tmp5) {
    let prop1;
    if (stateFromStores != null) {
      prop1 = stateFromStores.ageVerificationStatus;
    }
    tmp5 = prop1 === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  }
  return tmp5;
});
let closure_19 = tmp8;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function t() {
      currentUser = currentUser.getCurrentUser();
      let prop;
      if (currentUser != null) {
        prop = currentUser.ageVerificationStatus;
      }
      const tmp5 = prop === require("Server").AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT || prop === require("Server").AgeVerificationStatusUkAndAusOnly.INFERRED_TEEN;
      return tmp5;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = fn;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [UserStore];
  obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let prop;
    if (currentUser != null) {
      prop = currentUser.ageVerificationStatus;
    }
    const tmp5 = prop === require("Server").AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT || prop === require("Server").AgeVerificationStatusUkAndAusOnly.INFERRED_TEEN;
    return tmp5;
  });
});
let closure_20 = tmp9;
ReactCompilerGating = ReactCompilerGating_mod;
obj = { CTAS: "ctas", CONTENT_TYPE: "content_type" };
let obj2 = { RETRY: "retry", CONNECT_TO_TEEN: "connect_to_teen", REQUEST_MANUAL_REVIEW: "request_manual_review" };
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const tmp = closure_20();
  obj = RegionalFeatureConfigUtils;
  const tmp2 = obj.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK) && tmp;
  return tmp2;
}) : (() => {
  const tmp = closure_20();
  obj = RegionalFeatureConfigUtils;
  const tmp2 = obj.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK) && tmp;
  return tmp2;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let currentUser;
  let tmp4;
  let tmp5;
  obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function t() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  let tmp9 = prop !== Server.AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
  if (tmp9) {
    let prop1;
    if (stateFromStores != null) {
      prop1 = stateFromStores.ageVerificationStatus;
    }
    tmp9 = prop1 !== Server.AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  return tmp9;
}) : (() => {
  let currentUser;
  const items = [UserStore];
  obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  let tmp5 = prop !== Server.AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
  if (tmp5) {
    let prop1;
    if (stateFromStores != null) {
      prop1 = stateFromStores.ageVerificationStatus;
    }
    tmp5 = prop1 !== Server.AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  return tmp5;
});
let closure_23 = tmp11;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let classificationId;
  let entryPoint;
  let loading;
  let onComplete;
  let shouldShowExpressiveModal;
  let startVerification;
  obj = classificationId(576);
  const cResult = obj.c(10);
  ({ onComplete, entryPoint, shouldShowExpressiveModal, classificationId } = arg0);
  let tmp3 = null;
  if (undefined !== classificationId) {
    tmp3 = classificationId;
  }
  classificationId = tmp3;
  if (cResult[0] === entryPoint) {
    if (cResult[1] === onComplete) {
      let tmp4;
      if (cResult[2] === (undefined !== shouldShowExpressiveModal && shouldShowExpressiveModal)) {
        tmp4 = cResult[3];
      }
      ({ loading, startVerification } = useAgeVerificationRunner(tmp4));
      useAgeVerificationRunner(tmp4);
      if (cResult[4] === tmp3) {
        let tmp7;
        if (cResult[5] === startVerification) {
          tmp7 = cResult[6];
        }
        if (cResult[7] === tmp7) {
          let tmp8;
          if (cResult[8] === loading) {
            tmp8 = cResult[9];
          }
          return tmp8;
        }
        obj2 = { loading, initiateAgeVerification: tmp7 };
        cResult[7] = tmp7;
        class A {
          constructor(arg0, arg1) {
            closure_0 = arg0;
            closure_1 = arg1;
            return closure_1(() => { /* body not rendered: F136896 */ });
          }
        }
        cResult[9] = obj2;
        tmp8 = obj2;
      }
      class A {
        constructor(arg0, arg1) {
          closure_0 = arg0;
          closure_1 = arg1;
          return closure_1(() => { /* body not rendered: F136896 */ });
        }
      }
      cResult[4] = tmp3;
      cResult[5] = startVerification;
      cResult[6] = A;
      tmp7 = A;
    }
  }
  const obj3 = { onComplete, entryPoint, shouldShowExpressiveModal: undefined !== shouldShowExpressiveModal && shouldShowExpressiveModal };
  cResult[0] = entryPoint;
  cResult[1] = onComplete;
  cResult[2] = undefined !== shouldShowExpressiveModal && shouldShowExpressiveModal;
  cResult[3] = obj3;
  tmp4 = obj3;
}) : ((shouldShowExpressiveModal) => {
  let entryPoint;
  let items;
  let onComplete;
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
  obj = {
    loading: tmp2.loading,
    initiateAgeVerification: react.useCallback((method, vendor) => {
      startVerification = vendor;
      return startVerification(() => {
        obj = { method, classificationId, vendor };
        const requestAgeVerification = AgeVerificationURLActionCreators.requestAgeVerification;
        AgeVerificationURLActionCreators;
        return requestAgeVerification(obj);
      });
    }, items)
  };
  items = [startVerification, classificationId];
  return obj;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp13 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let entryPoint;
  let loading;
  let onComplete;
  let onMethodUnavailable;
  let startVerification;
  obj = startVerification(576);
  const cResult = obj.c(9);
  ({ onComplete, entryPoint, onMethodUnavailable } = arg0);
  if (cResult[0] === entryPoint) {
    if (cResult[1] === onComplete) {
      let tmp2;
      let tmp5;
      if (cResult[2] === onMethodUnavailable) {
        tmp2 = cResult[3];
      }
      ({ loading, startVerification } = useAgeVerificationRunner(tmp2));
      useAgeVerificationRunner(tmp2);
      if (cResult[4] !== startVerification) {
        const fn = function l(arg0) {
          let closure_0 = arg0;
          return startVerification(() => {
            obj = startVerification(closure_2_2[24]);
            return obj.requestAgeVerificationV2(closure_0.method, closure_0.vendor);
          }, arg0);
        };
        cResult[4] = startVerification;
        cResult[5] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[5];
      }
      if (cResult[6] === tmp5) {
        let tmp6;
        if (cResult[7] === loading) {
          tmp6 = cResult[8];
        }
        return tmp6;
      }
      obj2 = { loading, initiateAgeVerificationV2: tmp5 };
      cResult[6] = tmp5;
      cResult[7] = loading;
      cResult[8] = obj2;
      tmp6 = obj2;
    }
  }
  const obj3 = { onComplete, entryPoint, shouldShowExpressiveModal: true, onMethodUnavailable };
  cResult[0] = entryPoint;
  cResult[1] = onComplete;
  cResult[2] = onMethodUnavailable;
  cResult[3] = obj3;
  tmp2 = obj3;
}) : ((onComplete) => {
  let items;
  obj = { onComplete: onComplete.onComplete, entryPoint: onComplete.entryPoint, shouldShowExpressiveModal: true, onMethodUnavailable: onComplete.onMethodUnavailable };
  const tmp = useAgeVerificationRunner(obj);
  const startVerification = tmp.startVerification;
  obj2 = {
    loading: tmp.loading,
    initiateAgeVerificationV2: react.useCallback((arg0) => {
      let closure_0 = arg0;
      return startVerification(() => {
        obj = startVerification(closure_2_2[24]);
        return obj.requestAgeVerificationV2(closure_0.method, closure_0.vendor);
      }, arg0);
    }, items)
  };
  items = [startVerification];
  return obj2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let closure_1;
  let closure_2;
  let tmp10;
  let tmp13;
  let tmp14;
  let tmp4;
  let tmp5;
  let tmp9;
  _require = arg0;
  let tmp = _require;
  obj = require("react");
  const cResult = obj.c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function o() {
      currentUser = currentUser.getCurrentUser();
      let prop;
      if (currentUser != null) {
        prop = currentUser.ageVerificationStatus;
      }
      return prop;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const tmp8 = usePreviousDefault(stateFromStores);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AuthenticationStore];
    const fn2 = function f() {
      return null != AuthenticationStore.getSuspendedUserToken();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp10 = fn2;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult3 = tmp(504);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [AuthenticationStore];
    class V {
      constructor() {
        return AuthenticationStore.isAuthenticated();
      }
    }
    cResult[4] = items2;
    cResult[5] = V;
    tmp14 = V;
    tmp13 = items2;
  } else {
    tmp13 = cResult[4];
    tmp14 = cResult[5];
  }
  let tmp17 = null != tmp8;
  const tmpResult4 = tmp(504);
  const stateFromStores2 = tmpResult4.useStateFromStores(tmp13, tmp14);
  if (tmp17) {
    tmp17 = null != stateFromStores;
  }
  if (tmp17) {
    tmp17 = tmp8 !== stateFromStores;
  }
  importDefault = tmp17;
  dependencyMap = tmp18;
  if (cResult[6] === arg0) {
    if (cResult[7] === tmp17) {
      let tmp19;
      let tmp20;
      if (cResult[8] === (!stateFromStores1 && !stateFromStores2)) {
        tmp19 = cResult[9];
        tmp20 = cResult[10];
      }
      const effect = react.useEffect(tmp19, tmp20);
      class V {
        constructor() {
          return AuthenticationStore.isAuthenticated();
        }
      }
    }
  }
  const fn3 = function _() {
    const tmp = closure_1 || closure_2;
    if (tmp) {
      closure_0();
    }
  };
  const items3 = [arg0, tmp17, !stateFromStores1 && !stateFromStores2];
  cResult[6] = arg0;
  cResult[7] = tmp17;
  cResult[8] = !stateFromStores1 && !stateFromStores2;
  cResult[9] = fn3;
  cResult[10] = items3;
  tmp20 = items3;
  tmp19 = fn3;
}) : ((arg0) => {
  let closure_0;
  let closure_1;
  let closure_2;
  _require = arg0;
  const items = [UserStore];
  obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let prop;
    if (currentUser != null) {
      prop = currentUser.ageVerificationStatus;
    }
    return prop;
  });
  const tmp2 = usePreviousDefault(stateFromStores);
  const items1 = [AuthenticationStore];
  obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => null != AuthenticationStore.getSuspendedUserToken());
  const items2 = [AuthenticationStore];
  let tmp5 = null != tmp2;
  const obj3 = require("get initialized");
  const stateFromStores2 = obj3.useStateFromStores(items2, () => AuthenticationStore.isAuthenticated());
  if (tmp5) {
    tmp5 = null != stateFromStores;
  }
  if (tmp5) {
    tmp5 = tmp2 !== stateFromStores;
  }
  importDefault = tmp5;
  dependencyMap = tmp6;
  const items3 = [arg0, tmp5, !stateFromStores1 && !stateFromStores2];
  const effect = react.useEffect(() => {
    const tmp = closure_1 || closure_2;
    if (tmp) {
      closure_0();
    }
  }, items3);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp15 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_0;
  let first;
  let tmp = _require;
  obj = require("react");
  const cResult = obj.c(5);
  const tmp4 = closure_23();
  _require = tmp4;
  obj2 = require("RegionalFeatureConfigUtils");
  const isFeatureAgeGated = obj2.useIsFeatureAgeGated(require("AgeGatedFeature").AgeGatedFeature.REACTIVE_CHECK);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AgeVerificationStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === isFeatureAgeGated) {
    let tmp8;
    let tmp9;
    if (cResult[2] === tmp4) {
      tmp8 = cResult[3];
      tmp9 = cResult[4];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(first, tmp8, tmp9);
  }
  const fn = function t() {
    let tmp = !closure_0;
    if (tmp) {
      const result = isFeatureAgeGated && AgeVerificationStore.shouldCallReactiveCheck();
      tmp = result;
    }
    return tmp;
  };
  const items1 = [tmp4, isFeatureAgeGated];
  cResult[1] = isFeatureAgeGated;
  cResult[2] = tmp4;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp9 = items1;
  tmp8 = fn;
}) : (() => {
  let closure_0;
  let tmp = closure_23();
  _require = tmp;
  obj = require("RegionalFeatureConfigUtils");
  const isFeatureAgeGated = obj.useIsFeatureAgeGated(require("AgeGatedFeature").AgeGatedFeature.REACTIVE_CHECK);
  const items = [AgeVerificationStore];
  const items1 = [tmp, isFeatureAgeGated];
  obj2 = require("get initialized");
  return obj2.useStateFromStores(items, () => {
    let tmp = !closure_0;
    if (tmp) {
      const result = isFeatureAgeGated && AgeVerificationStore.shouldCallReactiveCheck();
      tmp = result;
    }
    return tmp;
  }, items1);
});
let closure_25 = tmp15;
ReactCompilerGating = ReactCompilerGating_mod;
function isVerifiedAdult() {
  const currentUser = UserStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  const tmp5 = prop === Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT || prop === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  return tmp5;
}
function isAgeVerified() {
  const currentUser = UserStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  let tmp5 = prop !== Server.AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
  if (tmp5) {
    let prop1;
    if (currentUser != null) {
      prop1 = currentUser.ageVerificationStatus;
    }
    tmp5 = prop1 !== Server.AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  return tmp5;
}
let fn = () => !closure_19();
const tmp16 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  _require = arg0;
  obj = require("react");
  const cResult = obj.c(4);
  const tmp2 = closure_25();
  let closure_1 = tmp2;
  if (cResult[0] === tmp2) {
    let tmp3;
    let tmp4;
    if (cResult[1] === arg0) {
      tmp3 = cResult[2];
      tmp4 = cResult[3];
    }
    const effect = react.useEffect(tmp3, tmp4);
  }
  const fn = function t() {
    const hasItem = closure_1 && set.has(closure_0);
    if (hasItem) {
      obj = ReactiveCheckActionCreators;
      obj.fetchReactiveCheckResult();
    }
  };
  const items = [tmp2, arg0];
  cResult[0] = tmp2;
  cResult[1] = arg0;
  cResult[2] = fn;
  cResult[3] = items;
  tmp4 = items;
  tmp3 = fn;
}) : ((arg0) => {
  let closure_0 = arg0;
  const tmp = closure_25();
  let closure_1 = tmp;
  const items = [tmp, arg0];
  const effect = react.useEffect(() => {
    const hasItem = closure_1 && set.has(closure_0);
    if (hasItem) {
      obj = ReactiveCheckActionCreators;
      obj.fetchReactiveCheckResult();
    }
  }, items);
});
const result1 = size.fileFinishedImporting("modules/age_assurance/AgeVerificationUtils.tsx");

export const ageGateSourceHasLightboxBackdrop = function ageGateSourceHasLightboxBackdrop(arg0) {
  return set1.has(arg0);
};
export const shouldShowTiggerPawtect = function shouldShowTiggerPawtect() {
  const currentUser = UserStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  const tmp5 = prop === Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT || prop === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  return !tmp5;
};
export const useShouldShowTiggerPawtect = fn;
export const isVerifiedTeen = function isVerifiedTeen() {
  const currentUser = UserStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  const tmp5 = prop === Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN || prop === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_TEEN;
  return tmp5;
};
export const useIsVerifiedTeen = tmp7;
export { isVerifiedAdult };
export const useIsVerifiedAdult = tmp8;
export const isAssignedByDiscord = function isAssignedByDiscord() {
  const currentUser = UserStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  const tmp5 = prop === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT || prop === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_TEEN;
  return tmp5;
};
export const useIsAssignedByDiscord = tmp9;
export const useShowAssignedAgeGroupSettings = tmp10;
export const AgeVerificationSystemNotificationEmbedKeys = obj;
export const AgeVerificationSystemNotificationCtaTypes = obj2;
export const AgeVerificationSystemNotificationContentType = { VERIFIED_ADULT: "verified_adult", VERIFIED_TEEN: "verified_teen", ERROR: "error", FAE_FAILED: "fae_failed", ID_FAILED: "id_failed", UNDERAGE: "underage", MANUAL_REVIEW_SUBMITTED: "manual_review_submitted" };
export const isAgeVerificationMessageWithRetryCta = function isAgeVerificationMessageWithRetryCta(channel_id, id) {
  const message = MessageStore.getMessage(channel_id, id);
  if (null != message) {
    if (null != message.embeds) {
      if (0 !== message.embeds.length) {
        if (null != message.embeds[0].fields) {
          if (message.embeds[0].type === constants.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
            const fields = message.embeds[0].fields;
            const found = fields.find((rawName) => rawName.rawName === constants.CTAS);
            let hasItem;
            if (found != null) {
              const str = found.rawValue;
              const parts = str.split(",");
              hasItem = parts.includes(obj2.RETRY);
            }
            return hasItem;
          }
        }
      }
    }
  }
  return false;
};
export const isAgeVerificationMessageWithManualReviewCta = function isAgeVerificationMessageWithManualReviewCta(channel_id, id) {
  const message = MessageStore.getMessage(channel_id, id);
  if (null != message) {
    if (null != message.embeds) {
      if (0 !== message.embeds.length) {
        if (null != message.embeds[0].fields) {
          if (message.embeds[0].type === constants.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
            const fields = message.embeds[0].fields;
            const found = fields.find((rawName) => rawName.rawName === constants.CTAS);
            let hasItem;
            if (found != null) {
              const str = found.rawValue;
              const parts = str.split(",");
              hasItem = parts.includes(obj2.REQUEST_MANUAL_REVIEW);
            }
            let result = true === hasItem;
            if (result) {
              obj2 = ManualAgeAssuranceFallbackExperiment;
              result = obj2.isManualAgeAssuranceFallbackEnabled("isAgeVerificationMessageWithManualReviewCta");
            }
            return result;
          }
        }
      }
    }
  }
  return false;
};
export const isAgeVerificationMessageWithConnectToTeenCta = function isAgeVerificationMessageWithConnectToTeenCta(channel_id, id) {
  if (null == FamilyCenterPendingConnectionStore.getPendingConnection()) {
    return false;
  } else {
    const message = MessageStore.getMessage(channel_id, id);
    if (null != message) {
      if (null != message.embeds) {
        if (0 !== message.embeds.length) {
          if (null != message.embeds[0].fields) {
            if (message.embeds[0].type === constants.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
              const fields = message.embeds[0].fields;
              const found = fields.find((rawName) => rawName.rawName === constants.CTAS);
              let hasItem;
              if (found != null) {
                const str = found.rawValue;
                const parts = str.split(",");
                hasItem = parts.includes(obj2.CONNECT_TO_TEEN);
              }
              return true === hasItem;
            }
          }
        }
      }
    }
    return false;
  }
};
export { isAgeVerified };
export const useIsAgeVerified = tmp11;
export const useInitiateAgeVerification = tmp12;
export const useInitiateAgeVerificationV2 = tmp13;
export const useWatchAgeVerificationStatusChange = tmp14;
export const isFullscreenAgeVerificationEntryPoint = function isFullscreenAgeVerificationEntryPoint(arg0) {
  const hasItem = null != arg0 && set.has(arg0);
  return hasItem;
};
export const getAgeVerificationGetStartedTitle = function getAgeVerificationGetStartedTitle(entryPoint, arg1) {
  let stringResult;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const hasItem = set.has(entryPoint);
  const intl = intl7.intl;
  const string = intl.string;
  if (hasItem) {
    stringResult = string(intl7.t.lSWVTM);
  } else if (flag) {
    stringResult = string(_modDef3073["/kgWIg"]);
  } else {
    stringResult = string(intl7.t.xYXsr6);
  }
  return stringResult;
};
export const getAgeVerificationGetStartedSubtitle = function getAgeVerificationGetStartedSubtitle(entryPoint, handleOnHelpUrlHook) {
  let stringResult;
  let flag = isSuspendedUser;
  if (isSuspendedUser === undefined) {
    flag = false;
  }
  let flag2 = arg4;
  if (arg4 === undefined) {
    flag2 = false;
  }
  if (set.has(entryPoint)) {
    const intl6 = intl7.intl;
    stringResult = intl6.string(intl7.t["S/xS/w"]);
  } else if (flag) {
    const intl5 = intl7.intl;
    stringResult = intl5.string(_modDef3073.h7qzoa);
  } else {
    if (flag2) {
      if (null != handleOnHelpUrlHook) {
        if (null != fn) {
          const intl4 = intl7.intl;
          obj2 = { handleOnHelpUrlHook, handleOnTrustedProvidersHook: fn };
          stringResult = intl4.format(_modDef3073["+Ft5ch"], obj2);
        }
      }
    }
    if (flag2) {
      if (null != handleOnHelpUrlHook) {
        const intl3 = intl7.intl;
        const obj3 = { handleOnHelpUrlHook };
        stringResult = intl3.format(_modDef3073["22HSSI"], obj3);
      }
    }
    if (null != handleOnHelpUrlHook) {
      const intl2 = intl7.intl;
      obj = { handleOnHelpUrlHook };
      stringResult = intl2.format(_modDef3073.RpMIT0, obj);
    } else {
      const intl = intl7.intl;
      stringResult = intl.string(intl7.t.HxS3oQ);
    }
  }
  return stringResult;
};
export const useShouldCallReactiveCheck = tmp15;
export const useMaybePerformReactiveCheckForSource = tmp16;
export { shouldCallReactiveCheck };
export const maybePerformReactiveCheck = function maybePerformReactiveCheck() {
  return obj(...arguments);
};