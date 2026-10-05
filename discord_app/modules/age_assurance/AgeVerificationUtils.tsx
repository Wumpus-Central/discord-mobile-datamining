// discord_app/modules/age_assurance/AgeVerificationUtils.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../_runtime/00576_c.js";
import DispatcherDefault from "../../Dispatcher.tsx";
import util from "../../intl/index.native.tsx";
import Server from "../../flow/Server.tsx";
import _modDef3045 from "AgeAssurance.messages.js";
import RegionalFeatureConfigUtils from "../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import AgeGatedFeature from "../../../discord_common/js/shared/shared-constants/AgeGatedFeature.tsx";
import usePreviousDefault from "../../hooks/usePrevious.tsx";
import AgeVerificationURLActionCreators from "AgeVerificationURLActionCreators.tsx";
import ManualAgeAssuranceFallbackExperiment from "ManualAgeAssuranceFallbackExperiment.tsx";
import ReactiveCheckActionCreators from "ReactiveCheckActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import FamilyCenterPendingConnectionStore from "../parent_tools/FamilyCenterPendingConnectionStore.tsx";
import RegionalFeatureConfigStore from "../regional_feature_config/RegionalFeatureConfigStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import MessageStore from "../../stores/MessageStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import AgeVerificationStore from "AgeVerificationStore.tsx";

const require = globalThis.__r;

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
  const items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
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
          return { value: "IconComponent", done: null };
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
              obj7 = { value, done: true };
              return obj7;
            } else {
              shouldShowExpressiveModal = tmp6;
              closure_130_0 = entryPoint;
              closure_130_1 = undefined;
              tmp72(true);
              c5 = 2;
              entryPoint(flag[21]).dispatch({ type: "INITIATE_AGE_VERIFICATION" });
              v3 = 3;
              c7 = 1;
              obj8 = { value: onComplete(), done: false };
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
                  entryPoint(flag[23]).showFailedToast(constants2.AGE_VERIFICATION_METHOD_UNAVAILABLE);
                  tmp4();
                  const obj5 = entryPoint(flag[23]);
                }
                c5 = 0;
                tmp72(false);
                c7 = 3;
              }
              entryPoint(flag[23]).showFailedToast(constants2.TIGGER_PAWTECT_ERROR);
              const obj4 = entryPoint(flag[23]);
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
                entryPoint(flag[23]).showFailedToast(constants2.TIGGER_PAWTECT_ERROR);
                v3();
                const obj2 = entryPoint(flag[23]);
              }
              c5 = 1;
              obj10 = entryPoint(flag[22]);
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
  if (!tmp5) {
    let isFeatureAgeGatedResult = RegionalFeatureConfigStore.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK);
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = AgeVerificationStore.shouldCallReactiveCheck();
    }
    tmp7 = isFeatureAgeGatedResult;
  }
  return tmp7;
}
let closure_27 = async function _maybePerformReactiveCheck() {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
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
          let tmp5 = null;
          if (shouldCallReactiveCheck()) {
            c1 = 1;
            c0 = 1;
            const obj5 = { value: require("ReactiveCheckActionCreators").fetchReactiveCheckResult(), done: false };
            return obj5;
          }
        }
      } else if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else {
        tmp5 = value;
        if (arg0 === 2) {
          c0 = 3;
          const obj = { value, done: true };
          return obj;
        }
      }
      c0 = 3;
      const obj6 = { value: tmp5, done: true };
      return obj6;
    } catch (tmp9) {
      c0 = tmp;
      throw tmp9;
    }
  }
};
fn(8085).FULLSCREEN_AGE_VERIFICATION_ENTRY_POINTS;
const Constants = fn(1085);
({ AbortCodes: map1, MessageEmbedTypes: closure_14 } = Constants);
const AgeGateConstants = fn(1110);
({ AgeGateSource, REACTIVE_CHECK_AGE_GATE_SOURCES: closure_15 } = AgeGateConstants);
const SafetyToastType = fn(8075).SafetyToastType;
let items = [fn(8086).AgeVerificationModalEntryPoint.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT, fn(8086).AgeVerificationModalEntryPoint.START_STAGE_PROMPT, fn(8086).AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND];
const set = new Set(items);
let items1 = [, , , , , ];
({ NSFW_SERVER: arr2[0], NSFW_SERVER_INVITE: arr2[1], NSFW_SERVER_INVITE_EMBED: arr2[2], LARGE_GUILD: arr2[3], JOIN_LARGE_GUILD_UNDERAGE: arr2[4], ACCESS_LARGE_GUILD_UNDERAGE: arr2[5] } = AgeGateSource);
const set1 = new Set(items1);
let ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
fn(558);
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
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
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
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
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
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
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function t() {
      currentUser = currentUser.getCurrentUser();
      let prop;
      if (currentUser != null) {
        prop = currentUser.ageVerificationStatus;
      }
      return prop === require("Server").AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN || prop === require("Server").AgeVerificationStatusUkAndAusOnly.INFERRED_TEEN;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [UserStore];
  return initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let prop;
    if (currentUser != null) {
      prop = currentUser.ageVerificationStatus;
    }
    return prop === require("Server").AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN || prop === require("Server").AgeVerificationStatusUkAndAusOnly.INFERRED_TEEN;
  });
});
ReactCompilerGating = fn(558);
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function t() {
      currentUser = currentUser.getCurrentUser();
      let prop;
      if (currentUser != null) {
        prop = currentUser.ageVerificationStatus;
      }
      return prop === require("Server").AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT || prop === require("Server").AgeVerificationStatusUkAndAusOnly.INFERRED_TEEN;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [UserStore];
  return initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let prop;
    if (currentUser != null) {
      prop = currentUser.ageVerificationStatus;
    }
    return prop === require("Server").AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT || prop === require("Server").AgeVerificationStatusUkAndAusOnly.INFERRED_TEEN;
  });
});
let closure_20 = tmp10;
ReactCompilerGating = fn(558);
let obj7 = { CTAS: "ctas", CONTENT_TYPE: "content_type" };
let obj8 = { RETRY: "retry", CONNECT_TO_TEEN: "connect_to_teen", REQUEST_MANUAL_REVIEW: "request_manual_review" };
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
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
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  return prop === Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
}) : (() => {
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  return prop === Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
});
ReactCompilerGating = fn(558);
const tmp12 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
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
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
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
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
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
let closure_23 = tmp12;
ReactCompilerGating = fn(558);
const tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const tmp = closure_20();
  return RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK) && tmp;
}) : (() => {
  const tmp = closure_20();
  return RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK) && tmp;
});
ReactCompilerGating = fn(558);
let tmp13 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
        class A {
          constructor(arg0, arg1) {
            closure_0 = arg0;
            closure_1 = arg1;
            return closure_1(() => { ... });
          }
        }
        cResult[9] = obj2;
        tmp8 = obj2;
      }
      class A {
        constructor(arg0, arg1) {
          closure_0 = arg0;
          closure_1 = arg1;
          return closure_1(() => { ... });
        }
      }
      cResult[4] = tmp3;
      cResult[5] = startVerification;
      cResult[6] = A;
      tmp7 = A;
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
}) : ((shouldShowExpressiveModal) => {
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
ReactCompilerGating = fn(558);
let tmp14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = startVerification(576).c(9);
  ({ onComplete, entryPoint, onMethodUnavailable } = arg0);
  if (cResult[0] === entryPoint) {
    if (cResult[1] === onComplete) {
      if (cResult[2] === onMethodUnavailable) {
        let tmp2 = cResult[3];
      }
      ({ loading, startVerification } = useAgeVerificationRunner(tmp2));
      if (cResult[4] !== startVerification) {
        const fn = function l(arg0) {
          closure_0 = arg0;
          return startVerification(() => startVerification(dependencyMap[24]).requestAgeVerificationV2(closure_0.method, closure_0.vendor), arg0);
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
}) : ((onComplete) => {
  const tmp = useAgeVerificationRunner({ onComplete: onComplete.onComplete, entryPoint: onComplete.entryPoint, shouldShowExpressiveModal: true, onMethodUnavailable: onComplete.onMethodUnavailable });
  const startVerification = tmp.startVerification;
  const obj2 = { loading: tmp.loading, initiateAgeVerificationV2: null };
  const items = [startVerification];
  obj2.initiateAgeVerificationV2 = noop.useCallback((arg0) => {
    closure_0 = arg0;
    return startVerification(() => startVerification(dependencyMap[24]).requestAgeVerificationV2(closure_0.method, closure_0.vendor), arg0);
  }, items);
  return obj2;
});
ReactCompilerGating = fn(558);
const tmp16 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(5);
  const tmp4 = closure_23();
  _require = tmp4;
  const obj = require("c");
  let tmp = _require;
  const isFeatureAgeGated = require("RegionalFeatureConfigUtils").useIsFeatureAgeGated(require("AgeGatedFeature").AgeGatedFeature.REACTIVE_CHECK);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AgeVerificationStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === isFeatureAgeGated) {
    if (cResult[2] === tmp4) {
      let tmp8 = cResult[3];
      let tmp9 = cResult[4];
    }
    return tmp(504).useStateFromStores(first, tmp8, tmp9);
  }
  const fn = function t() {
    let tmp = !closure_0;
    if (!closure_0) {
      let result = isFeatureAgeGated;
      if (isFeatureAgeGated) {
        result = AgeVerificationStore.shouldCallReactiveCheck();
      }
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
  const obj2 = require("RegionalFeatureConfigUtils");
}) : (() => {
  let tmp = closure_23();
  _require = tmp;
  const isFeatureAgeGated = require("RegionalFeatureConfigUtils").useIsFeatureAgeGated(require("AgeGatedFeature").AgeGatedFeature.REACTIVE_CHECK);
  const obj = require("RegionalFeatureConfigUtils");
  const items = [AgeVerificationStore];
  const items1 = [tmp, isFeatureAgeGated];
  return require("initialize").useStateFromStores(items, () => {
    let tmp = !closure_0;
    if (!closure_0) {
      let result = isFeatureAgeGated;
      if (isFeatureAgeGated) {
        result = AgeVerificationStore.shouldCallReactiveCheck();
      }
      tmp = result;
    }
    return tmp;
  }, items1);
});
let closure_25 = tmp16;
ReactCompilerGating = fn(558);
const tmp15 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(11);
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
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5);
  const tmp8 = usePreviousDefault(stateFromStores);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AuthenticationStore];
    const fn2 = function f() {
      return null != AuthenticationStore.getSuspendedUserToken();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp10 = fn2;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [AuthenticationStore];
    class V {
      constructor() {
        return closure_1_8.isAuthenticated();
      }
    }
    cResult[4] = items2;
    cResult[5] = V;
    let tmp14 = V;
    let tmp13 = items2;
  } else {
    tmp13 = cResult[4];
    tmp14 = cResult[5];
  }
  const tmpResult3 = require("initialize");
  let tmp17 = null != tmp8;
  const stateFromStores2 = require("initialize").useStateFromStores(tmp13, tmp14);
  if (tmp17) {
    tmp17 = null != stateFromStores;
  }
  if (tmp17) {
    tmp17 = tmp8 !== stateFromStores;
  }
  importDefault = tmp17;
  let tmp18 = !stateFromStores1;
  if (!stateFromStores1) {
    tmp18 = !stateFromStores2;
  }
  dependencyMap = tmp18;
  if (cResult[6] === arg0) {
    if (cResult[7] === tmp17) {
      if (cResult[8] === tmp18) {
        let tmp19 = cResult[9];
        let tmp20 = cResult[10];
      }
      const effect = noop.useEffect(tmp19, tmp20);
      class V {
        constructor() {
          return closure_1_8.isAuthenticated();
        }
      }
    }
  }
  const fn3 = function _() {
    let tmp = closure_1;
    if (!closure_1) {
      tmp = closure_2;
    }
    if (tmp) {
      closure_0();
    }
  };
  const items3 = [arg0, tmp17, tmp18];
  cResult[6] = arg0;
  cResult[7] = tmp17;
  cResult[8] = tmp18;
  cResult[9] = fn3;
  cResult[10] = items3;
  tmp20 = items3;
  tmp19 = fn3;
  const tmpResult4 = require("initialize");
}) : ((arg0) => {
  _require = arg0;
  const items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let prop;
    if (currentUser != null) {
      prop = currentUser.ageVerificationStatus;
    }
    return prop;
  });
  const tmp2 = usePreviousDefault(stateFromStores);
  const obj = require("initialize");
  const items1 = [AuthenticationStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => null != AuthenticationStore.getSuspendedUserToken());
  const obj2 = require("initialize");
  const items2 = [AuthenticationStore];
  let tmp5 = null != tmp2;
  const stateFromStores2 = require("initialize").useStateFromStores(items2, () => AuthenticationStore.isAuthenticated());
  if (tmp5) {
    tmp5 = null != stateFromStores;
  }
  if (tmp5) {
    tmp5 = tmp2 !== stateFromStores;
  }
  importDefault = tmp5;
  let tmp6 = !stateFromStores1;
  if (!stateFromStores1) {
    tmp6 = !stateFromStores2;
  }
  dependencyMap = tmp6;
  const items3 = [arg0, tmp5, tmp6];
  const effect = noop.useEffect(() => {
    let tmp = closure_1;
    if (!closure_1) {
      tmp = closure_2;
    }
    if (tmp) {
      closure_0();
    }
  }, items3);
});
function isVerifiedAdult() {
  const currentUser = UserStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  return prop === Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT || prop === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
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
fn = () => !closure_19();
const size = fn(2);
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
  return !(prop === Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT || prop === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT);
};
export const useShouldShowTiggerPawtect = fn;
export const isVerifiedTeen = function isVerifiedTeen() {
  const currentUser = UserStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  return prop === Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN || prop === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_TEEN;
};
export const useIsVerifiedTeen = tmp7;
export { isVerifiedAdult };
export const useIsVerifiedAdult = tmp8;
export const useIsExplicitlyVerifiedAdult = tmp9;
export const isAssignedByDiscord = function isAssignedByDiscord() {
  const currentUser = UserStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  return prop === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT || prop === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_TEEN;
};
export const useIsAssignedByDiscord = tmp10;
export const useShowAssignedAgeGroupSettings = tmp11;
export const AgeVerificationSystemNotificationEmbedKeys = obj7;
export const AgeVerificationSystemNotificationCtaTypes = obj8;
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
              const parts = found.rawValue.split(",");
              hasItem = parts.includes(obj8.RETRY);
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
              const parts = found.rawValue.split(",");
              hasItem = parts.includes(obj8.REQUEST_MANUAL_REVIEW);
            }
            let result = true === hasItem;
            if (result) {
              result = ManualAgeAssuranceFallbackExperiment.isManualAgeAssuranceFallbackEnabled("isAgeVerificationMessageWithManualReviewCta");
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
                const parts = found.rawValue.split(",");
                hasItem = parts.includes(obj8.CONNECT_TO_TEEN);
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
export const useIsAgeVerified = tmp12;
export const useInitiateAgeVerification = tmp13;
export const useInitiateAgeVerificationV2 = tmp14;
export const useWatchAgeVerificationStatusChange = tmp15;
export const isFullscreenAgeVerificationEntryPoint = function isFullscreenAgeVerificationEntryPoint(arg0) {
  let hasItem = null != arg0;
  if (hasItem) {
    hasItem = set.has(arg0);
  }
  return hasItem;
};
export const getAgeVerificationGetStartedTitle = function getAgeVerificationGetStartedTitle(entryPoint, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const hasItem = set.has(entryPoint);
  const intl = util.intl;
  const string = intl.string;
  if (hasItem) {
    let stringResult = string(util.t.lSWVTM);
  } else if (flag) {
    stringResult = string(_modDef3045["/kgWIg"]);
  } else {
    stringResult = string(util.t.xYXsr6);
  }
  return stringResult;
};
export const getAgeVerificationGetStartedSubtitle = function getAgeVerificationGetStartedSubtitle(entryPoint, handleOnHelpUrlHook) {
  let flag = isSuspendedUser;
  if (isSuspendedUser === undefined) {
    flag = false;
  }
  let flag2 = arg4;
  if (arg4 === undefined) {
    flag2 = false;
  }
  if (set.has(entryPoint)) {
    const intl6 = util.intl;
    let stringResult = intl6.string(util.t["S/xS/w"]);
  } else if (flag) {
    const intl5 = util.intl;
    stringResult = intl5.string(_modDef3045.h7qzoa);
  } else {
    if (flag2) {
      if (null != handleOnHelpUrlHook) {
        if (null != fn) {
          const intl4 = util.intl;
          const obj2 = { handleOnHelpUrlHook, handleOnTrustedProvidersHook: fn };
          stringResult = intl4.format(_modDef3045["+Ft5ch"], obj2);
        }
      }
    }
    if (flag2) {
      if (null != handleOnHelpUrlHook) {
        const intl3 = util.intl;
        const obj3 = { handleOnHelpUrlHook };
        stringResult = intl3.format(_modDef3045["22HSSI"], obj3);
      }
    }
    if (null != handleOnHelpUrlHook) {
      const intl2 = util.intl;
      const obj = { handleOnHelpUrlHook };
      stringResult = intl2.format(_modDef3045.RpMIT0, obj);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t.HxS3oQ);
    }
  }
  return stringResult;
};
export const useShouldCallReactiveCheck = tmp16;
export const useMaybePerformReactiveCheckForSource = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  const tmp2 = closure_25();
  closure_1 = tmp2;
  if (cResult[0] === tmp2) {
    if (cResult[1] === arg0) {
      let tmp3 = cResult[2];
      let tmp4 = cResult[3];
    }
    const effect = noop.useEffect(tmp3, tmp4);
  }
  const fn = function t() {
    let hasItem = closure_1;
    if (closure_1) {
      hasItem = set2.has(closure_0);
    }
    if (hasItem) {
      ReactiveCheckActionCreators.fetchReactiveCheckResult();
    }
  };
  const items = [tmp2, arg0];
  cResult[0] = tmp2;
  cResult[1] = arg0;
  cResult[2] = fn;
  cResult[3] = items;
  tmp4 = items;
  tmp3 = fn;
  let obj = require("c");
}) : ((arg0) => {
  closure_0 = arg0;
  const tmp = closure_25();
  closure_1 = tmp;
  const items = [tmp, arg0];
  const effect = noop.useEffect(() => {
    let hasItem = closure_1;
    if (closure_1) {
      hasItem = set2.has(closure_0);
    }
    if (hasItem) {
      ReactiveCheckActionCreators.fetchReactiveCheckResult();
    }
  }, items);
});
export { shouldCallReactiveCheck };
export const maybePerformReactiveCheck = function maybePerformReactiveCheck() {
  const self = this;
  const apply = closure_27.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};