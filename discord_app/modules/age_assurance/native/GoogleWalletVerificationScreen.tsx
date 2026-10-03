// === Module 8249: GoogleWalletVerificationScreen ===

// Module 8249 (GoogleWalletVerificationScreen)
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8086 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function getFailureReason(status) {
  status = undefined;
  if (status != null) {
    status = status.status;
  }
  let str = "rate_limited";
  if (429 !== status) {
    let code;
    if (status != null) {
      code = status.code;
    }
    let str3 = "unknown";
    if (null != code) {
      str3 = "unknown";
      if (status.code in closure_9) {
        str3 = tmp3[status.code];
      }
    }
    str = str3;
  }
  return str;
}
const ActivityIndicator = fn(17).ActivityIndicator;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = { NOT_AVAILABLE: "not_available", FAILED: "credential_error" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/native/GoogleWalletVerificationScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onClose) => {
  const cResult = require("c").c(24);
  onClose = onClose.onClose;
  _require = onClose;
  const onComplete = onClose.onComplete;
  modalSessionId = onClose.modalSessionId;
  let obj = require("c");
  const navigation = require("useNavigation").useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { type: "loading" };
    cResult[0] = obj3;
    let first = obj3;
  } else {
    first = cResult[0];
  }
  const obj2 = require("useNavigation");
  [tmp7, _slicedToArray] = noop.useState(first);
  if (cResult[1] === onClose) {
    if (cResult[2] === onComplete) {
      let tmp8 = cResult[3];
    }
    noop = tmp8;
    const watchAgeVerificationStatusChange = tmp(tmp2[8]).useWatchAgeVerificationStatusChange(tmp8);
    if (cResult[4] !== navigation) {
      const fn = function h() {
        navigation.goBack();
      };
      cResult[4] = navigation;
      cResult[5] = fn;
      let tmp10 = fn;
    } else {
      tmp10 = cResult[5];
    }
    closure_6 = tmp10;
    if (cResult[6] === tmp10) {
      if (cResult[7] === tmp8) {
        let tmp11 = cResult[8];
      }
      closure_7 = tmp11;
      closure_8 = obj4.useRef(false);
      if (cResult[9] === navigation) {
        if (cResult[10] === tmp11) {
          let tmp13 = cResult[11];
          let tmp14 = cResult[12];
        }
        const effect = obj4.useEffect(tmp13, tmp14);
        if ("loading" === tmp7.type) {
          const _Symbol2 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            cResult[13] = closure_7(closure_6, { size: "large" });
            class O {
              constructor() {
                closure_0 = closure_3.addListener("transitionEnd", (data) => {
                  let current = ref.current;
                  if (!current) {
                    current = true === data.data.closing;
                  }
                  if (!current) {
                    ref.current = true;
                    closure_1_7();
                  }
                });
                closure_1 = setTimeout(() => {
                  if (!ref.current) {
                    tmp.current = true;
                    closure_1_7();
                  }
                }, 1000);
                return () => {
                  closure_0();
                  clearTimeout(closure_1);
                };
              }
            }
            const tmp32 = closure_7(closure_6, { size: "large" });
          }
          const _Symbol3 = Symbol;
          class O {
            constructor() {
              closure_0 = closure_3.addListener("transitionEnd", (data) => {
                let current = ref.current;
                if (!current) {
                  current = true === data.data.closing;
                }
                if (!current) {
                  ref.current = true;
                  closure_1_7();
                }
              });
              closure_1 = setTimeout(() => {
                if (!ref.current) {
                  tmp.current = true;
                  closure_1_7();
                }
              }, 1000);
              return () => {
                closure_0();
                clearTimeout(closure_1);
              };
            }
          }
        } else {
          if (cResult[15] !== tmp7.message) {
            const obj5 = { variant: "text-md/medium", color: "text-strong", children: tmp7.message };
            const tmp18 = closure_7(tmp(tmp2[18]).Text, obj5);
            class O {
              constructor() {
                closure_0 = closure_3.addListener("transitionEnd", (data) => {
                  let current = ref.current;
                  if (!current) {
                    current = true === data.data.closing;
                  }
                  if (!current) {
                    ref.current = true;
                    closure_1_7();
                  }
                });
                closure_1 = setTimeout(() => {
                  if (!ref.current) {
                    tmp.current = true;
                    closure_1_7();
                  }
                }, 1000);
                return () => {
                  closure_0();
                  clearTimeout(closure_1);
                };
              }
            }
            cResult[16] = tmp18;
            let tmp16 = tmp18;
          } else {
            tmp16 = cResult[16];
          }
          const _Symbol = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            let intl = tmp(tmp2[13]).intl;
            class O {
              constructor() {
                closure_0 = closure_3.addListener("transitionEnd", (data) => {
                  let current = ref.current;
                  if (!current) {
                    current = true === data.data.closing;
                  }
                  if (!current) {
                    ref.current = true;
                    closure_1_7();
                  }
                });
                closure_1 = setTimeout(() => {
                  if (!ref.current) {
                    tmp.current = true;
                    closure_1_7();
                  }
                }, 1000);
                return () => {
                  closure_0();
                  clearTimeout(closure_1);
                };
              }
            }
            let tmp19 = intl.string(onComplete(tmp2[14]).fEUKEv);
            const stringResult = intl.string(onComplete(tmp2[14]).fEUKEv);
          } else {
            tmp19 = cResult[17];
          }
          if (cResult[18] === tmp10) {
            if (cResult[19] === modalSessionId) {
              let tmp22 = cResult[20];
            }
            if (cResult[21] === tmp16) {
              if (cResult[22] === tmp22) {
                let tmp24 = cResult[23];
              }
              return tmp24;
            }
            const obj6 = { children: null };
            class O {
              constructor() {
                closure_0 = closure_3.addListener("transitionEnd", (data) => {
                  let current = ref.current;
                  if (!current) {
                    current = true === data.data.closing;
                  }
                  if (!current) {
                    ref.current = true;
                    closure_1_7();
                  }
                });
                closure_1 = setTimeout(() => {
                  if (!ref.current) {
                    tmp.current = true;
                    closure_1_7();
                  }
                }, 1000);
                return () => {
                  closure_0();
                  clearTimeout(closure_1);
                };
              }
            }
            const obj7 = { align: "center", justify: "center", spacing: 16, children: null };
            let items = [tmp16, tmp22];
            obj7.children = items;
            tmp26[0] = closure_8(tmp(tmp2[17]).Stack, obj7);
            obj6.children = closure_7(tmp(tmp2[16]).ModalContent, tmp26);
            const tmp28 = closure_7(tmp(tmp2[15]).ModalScreen, obj6);
            cResult[21] = tmp16;
            cResult[22] = tmp22;
            cResult[23] = tmp28;
            tmp24 = tmp28;
          }
          class O {
            constructor() {
              closure_0 = closure_3.addListener("transitionEnd", (data) => {
                let current = ref.current;
                if (!current) {
                  current = true === data.data.closing;
                }
                if (!current) {
                  ref.current = true;
                  closure_1_7();
                }
              });
              closure_1 = setTimeout(() => {
                if (!ref.current) {
                  tmp.current = true;
                  closure_1_7();
                }
              }, 1000);
              return () => {
                closure_0();
                clearTimeout(closure_1);
              };
            }
          }
          const obj8 = { children: null };
          const obj9 = {
            variant: "primary",
            size: "lg",
            text: tmp19,
            onPress() {
                      const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.METHOD_SELECT);
                      closure_6();
                    }
          };
          obj8.children = closure_7(tmp(tmp2[20]).Button, obj9);
          const tmp23 = closure_7(tmp(tmp2[19]).ButtonGroup, obj8);
          cResult[18] = tmp10;
          cResult[19] = modalSessionId;
          cResult[20] = tmp23;
          tmp22 = tmp23;
        }
      }
      class O {
        constructor() {
          closure_0 = closure_3.addListener("transitionEnd", (data) => {
            let current = ref.current;
            if (!current) {
              current = true === data.data.closing;
            }
            if (!current) {
              ref.current = true;
              closure_1_7();
            }
          });
          closure_1 = setTimeout(() => {
            if (!ref.current) {
              tmp.current = true;
              closure_1_7();
            }
          }, 1000);
          return () => {
            closure_0();
            clearTimeout(closure_1);
          };
        }
      }
      const items1 = [navigation, tmp11];
      cResult[9] = navigation;
      cResult[10] = tmp11;
      cResult[11] = O;
      cResult[12] = items1;
      tmp14 = items1;
      tmp13 = O;
    }
    _require = navigation(function*() {
      closure_1 = tmp3;
      yield closure_0(modalSessionId[9]).requestGoogleWalletVerification();
      if (1 === tmp7) {
        c3 = 0;
        closure_128_2 = closure_2;
        let code;
        if (closure_128_2 != null) {
          code = closure_128_2.code;
        }
        if ("CANCELLED" === code) {
          onComplete(modalSessionId[11]).increment({ name: closure_0(modalSessionId[12]).MetricEvents.GOOGLE_WALLET_VERIFICATION_FAILED, tags: ["reason:user_cancelled"] });
          closure_1_6();
          let v3 = 3;
          return { value: undefined, done: true };
        } else {
          let reason;
          if (closure_128_2 != null) {
            const body = closure_128_2.body;
            if (body != null) {
              reason = body.reason;
            }
          }
          if ("unsupported_issuing_country" === reason) {
            onComplete(modalSessionId[11]).increment({ name: closure_0(modalSessionId[12]).MetricEvents.GOOGLE_WALLET_VERIFICATION_FAILED, tags: ["reason:unsupported_issuing_country"] });
            const obj11 = { type: "error", message: null };
            const intl = closure_0(modalSessionId[13]).intl;
            obj11.message = intl.string(onComplete(modalSessionId[14]).Pf5xUq);
            v4(obj11);
            v3 = 3;
            return { value: undefined, done: true };
          } else {
            closure_128_3 = getFailureReason(closure_128_2);
            const obj14 = { name: closure_0(modalSessionId[12]).MetricEvents.GOOGLE_WALLET_VERIFICATION_FAILED, tags: null };
            const _HermesInternal = HermesInternal;
            const items = ["reason:" + closure_128_3];
            obj14.tags = items;
            onComplete(modalSessionId[11]).increment(obj14);
            const obj15 = { type: "error", message: null };
            const intl2 = closure_0(modalSessionId[13]).intl;
            obj15.message = intl2.string(onComplete(modalSessionId[14])["+pwfOA"]);
            v4(obj15);
            v3 = 3;
            onComplete(modalSessionId[11]);
          }
        }
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          v3 = 3;
          return { value, done: true };
        } else {
          const request_json = value.request_json;
          v4 = 3;
          v3 = 1;
          return { value: closure_0(modalSessionId[9]).getGoogleWalletCredential(request_json), done: false };
        }
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          v3 = 3;
          return { value, done: true };
        } else {
          closure_128_1 = value;
          v4 = 4;
          v3 = 1;
          return { value: closure_0(modalSessionId[9]).verifyGoogleWalletCredential(closure_128_1), done: false };
        }
      } else if (arg0 === 1) {
        v3 = 3;
        throw value;
      } else if (arg0 !== 2) {
        if (obj.isCurrentUserSuspended()) {
          v3();
        }
        c3 = 0;
        obj = closure_0(modalSessionId[10]);
      }
      return value;
    });
    const fn2 = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    cResult[6] = tmp10;
    cResult[7] = tmp8;
    cResult[8] = fn2;
    tmp11 = fn2;
    const tmpResult = tmp(tmp2[8]);
  }
  class A {
    constructor() {
      if (onComplete != null) {
        tmpResult = tmp();
      }
      tmp3 = closure_0();
      return;
    }
  }
  cResult[1] = onClose;
  cResult[2] = onComplete;
  cResult[3] = A;
  tmp8 = A;
  const tmp6 = _slicedToArray(noop.useState(first), 2);
}) : ((onClose) => {
  onClose = onClose.onClose;
  const onComplete = onClose.onComplete;
  const modalSessionId = onClose.modalSessionId;
  _slicedToArray = undefined;
  let callback;
  const navigation = onClose(modalSessionId[7]).useNavigation();
  let obj = onClose(modalSessionId[7]);
  [tmp5, c4] = callback.useState({ type: "loading" });
  let items = [onComplete, onClose];
  callback = callback.useCallback(() => {
    if (onComplete != null) {
      tmp();
    }
    onClose();
  }, items);
  const tmp4 = _slicedToArray(callback.useState({ type: "loading" }), 2);
  const watchAgeVerificationStatusChange = onClose(modalSessionId[8]).useWatchAgeVerificationStatusChange(callback);
  const items1 = [navigation];
  const callback1 = callback.useCallback(() => {
    navigation.goBack();
  }, items1);
  const items2 = [callback1, callback];
  const callback2 = callback.useCallback(navigation(function*() {
    yield closure_0(tmp51[9]).requestGoogleWalletVerification();
    if (1 === tmp7) {
      c3 = 0;
      closure_128_2 = tmp51;
      let code;
      if (closure_128_2 != null) {
        code = closure_128_2.code;
      }
      if ("CANCELLED" === code) {
        tmp3(tmp51[11]).increment({ name: onClose(tmp51[12]).MetricEvents.GOOGLE_WALLET_VERIFICATION_FAILED, tags: ["reason:user_cancelled"] });
        closure_129_6();
        c5 = 3;
        return { value: undefined, done: true };
      } else {
        let reason;
        if (closure_128_2 != null) {
          const body = closure_128_2.body;
          if (body != null) {
            reason = body.reason;
          }
        }
        if ("unsupported_issuing_country" === reason) {
          tmp3(tmp51[11]).increment({ name: onClose(tmp51[12]).MetricEvents.GOOGLE_WALLET_VERIFICATION_FAILED, tags: ["reason:unsupported_issuing_country"] });
          const obj11 = { type: "error", message: null };
          const intl = onClose(tmp51[13]).intl;
          obj11.message = intl.string(tmp3(tmp51[14]).Pf5xUq);
          closure_129_4(obj11);
          c5 = 3;
          return { value: undefined, done: true };
        } else {
          closure_128_3 = getFailureReason(closure_128_2);
          const obj14 = { name: onClose(tmp51[12]).MetricEvents.GOOGLE_WALLET_VERIFICATION_FAILED, tags: null };
          const _HermesInternal = HermesInternal;
          const items = ["reason:" + closure_128_3];
          obj14.tags = items;
          tmp3(tmp51[11]).increment(obj14);
          const obj15 = { type: "error", message: null };
          const intl2 = onClose(tmp51[13]).intl;
          obj15.message = intl2.string(tmp3(tmp51[14])["+pwfOA"]);
          closure_129_4(obj15);
          c5 = 3;
          tmp3(tmp51[11]);
        }
      }
    } else if (2 === tmp7) {
      if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        return { value, done: true };
      } else {
        const request_json = value.request_json;
        c4 = 3;
        c5 = 1;
        return { value: onClose(tmp51[9]).getGoogleWalletCredential(request_json), done: false };
      }
    } else if (3 === tmp7) {
      if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        return { value, done: true };
      } else {
        closure_128_1 = value;
        c4 = 4;
        c5 = 1;
        return { value: onClose(tmp51[9]).verifyGoogleWalletCredential(closure_128_1), done: false };
      }
    } else if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 !== 2) {
      if (obj.isCurrentUserSuspended()) {
        closure_129_5();
      }
      c3 = 0;
      obj = onClose(tmp51[10]);
    }
    return value;
  }), items2);
  closure_8 = callback.useRef(false);
  const items3 = [navigation, callback2];
  const effect = callback.useEffect(() => {
    closure_0 = navigation.addListener("transitionEnd", (data) => {
      let current = ref.current;
      if (!current) {
        current = true === data.data.closing;
      }
      if (!current) {
        ref.current = true;
        callback2();
      }
    });
    const timeout = setTimeout(() => {
      if (!ref.current) {
        tmp.current = true;
        callback2();
      }
    }, 1000);
    return () => {
      closure_0();
      clearTimeout(closure_1);
    };
  }, items3);
  if ("loading" === tmp5.type) {
    const obj3 = { children: null };
    const obj4 = { children: null };
    const obj5 = { align: "center", justify: "center", spacing: 16, children: null };
    const items4 = [callback2(callback1, { size: "large" }), ];
    const obj6 = { variant: "text-md/medium", color: "text-strong", children: null };
    let intl = tmp(tmp2[13]).intl;
    obj6.children = intl.string(onComplete(tmp2[14]).MlFuBI);
    items4[1] = callback2(tmp(tmp2[18]).Text, obj6);
    obj5.children = items4;
    obj4.children = closure_8(tmp(tmp2[17]).Stack, obj5);
    obj3.children = callback2(tmp(tmp2[16]).ModalContent, obj4);
    let tmp15 = callback2(tmp(tmp2[15]).ModalScreen, obj3);
  } else {
    const obj7 = { children: null };
    const obj8 = { children: null };
    const obj9 = { align: "center", justify: "center", spacing: 16, children: null };
    const obj10 = { variant: "text-md/medium", color: "text-strong", children: tmp5.message };
    const items5 = [callback2(tmp(tmp2[18]).Text, obj10), ];
    let obj11 = { children: null };
    const obj12 = { variant: "primary", size: "lg", text: null, onPress: null };
    let intl2 = tmp(tmp2[13]).intl;
    obj12.text = intl2.string(onComplete(tmp2[14]).fEUKEv);
    obj12.onPress = function onPress() {
      const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.METHOD_SELECT);
      callback1();
    };
    obj11.children = callback2(tmp(tmp2[20]).Button, obj12);
    items5[1] = callback2(tmp(tmp2[19]).ButtonGroup, obj11);
    obj9.children = items5;
    obj8.children = closure_8(tmp(tmp2[17]).Stack, obj9);
    obj7.children = callback2(tmp(tmp2[16]).ModalContent, obj8);
    tmp15 = callback2(tmp(tmp2[15]).ModalScreen, obj7);
  }
  return tmp15;
});