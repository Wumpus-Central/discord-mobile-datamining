// === Module 8282: GoogleWalletVerificationScreen ===

// Module 8282 (GoogleWalletVerificationScreen)
import react_native from "react-native" /* 17 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8119 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c5, navigation, onClose;

let metroImportAll;
let metroImportDefault;
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
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const ActivityIndicator = react_native.ActivityIndicator;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = { NOT_AVAILABLE: "not_available", FAILED: "credential_error" };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((onClose) => {
  let ModalContent;
  let closure_5;
  let first;
  let items;
  let modalSessionId;
  let obj9;
  let tmp7;
  const tmp = onClose;
  let obj = onClose(modalSessionId[6]);
  const cResult = obj.c(24);
  onClose = onClose.onClose;
  const onComplete = onClose.onComplete;
  modalSessionId = onClose.modalSessionId;
  let obj2 = onClose(modalSessionId[7]);
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { type: "loading" };
    cResult[0] = obj3;
    first = obj3;
  } else {
    first = cResult[0];
  }
  let obj4 = react;
  const tmp6 = _slicedToArray(react.useState(first), 2);
  [tmp7, _slicedToArray] = tmp6;
  if (cResult[1] === onClose) {
    let tmp8;
    let tmp10;
    if (cResult[2] === onComplete) {
      tmp8 = cResult[3];
    }
    react = tmp8;
    const tmpResult = tmp(modalSessionId[8]);
    const watchAgeVerificationStatusChange = tmpResult.useWatchAgeVerificationStatusChange(tmp8);
    if (cResult[4] !== navigation) {
      const fn = function h() {
        navigation.goBack();
      };
      cResult[4] = navigation;
      cResult[5] = fn;
      tmp10 = fn;
    } else {
      tmp10 = cResult[5];
    }
    let closure_6 = tmp10;
    if (cResult[6] === tmp10) {
      let tmp11;
      if (cResult[7] === tmp8) {
        tmp11 = cResult[8];
      }
      let closure_7 = tmp11;
      let closure_8 = obj4.useRef(false);
      if (cResult[9] === navigation) {
        let tmp13;
        let tmp14;
        let tmp24;
        if (cResult[10] === tmp11) {
          tmp13 = cResult[11];
          tmp14 = cResult[12];
        }
        const effect = obj4.useEffect(tmp13, tmp14);
        if ("loading" === tmp7.type) {
          const _Symbol2 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            cResult[13] = closure_7(closure_6, { size: "large" });
            closure_7(closure_6, { size: "large" });
            class O {
              constructor() {
                closure_0 = closure_3.addListener("transitionEnd", (data) => {
                  const current = ref.current || true === data.data.closing;
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
            let tmp29 = cResult[13];
          }
          const _Symbol3 = Symbol;
          class O {
            constructor() {
              closure_0 = closure_3.addListener("transitionEnd", (data) => {
                const current = ref.current || true === data.data.closing;
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
          tmp24 = tmp34;
        } else {
          let tmp16;
          let tmp19;
          if (cResult[15] !== tmp7.message) {
            let obj5 = { variant: "text-md/medium", color: "text-strong", children: tmp7.message };
            const tmp18 = closure_7(tmp(modalSessionId[18]).Text, obj5);
            class O {
              constructor() {
                closure_0 = closure_3.addListener("transitionEnd", (data) => {
                  const current = ref.current || true === data.data.closing;
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
            tmp16 = tmp18;
          } else {
            tmp16 = cResult[16];
          }
          const _Symbol = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            let intl = tmp(tmp2[13]).intl;
            const stringResult = intl.string(onComplete(modalSessionId[14]).fEUKEv);
            class O {
              constructor() {
                closure_0 = closure_3.addListener("transitionEnd", (data) => {
                  const current = ref.current || true === data.data.closing;
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
            tmp19 = stringResult;
          } else {
            tmp19 = cResult[17];
          }
          if (cResult[18] === tmp10) {
            let tmp22;
            if (cResult[19] === modalSessionId) {
              tmp22 = cResult[20];
            }
            if (cResult[21] === tmp16) {
              if (cResult[22] === tmp22) {
                tmp24 = cResult[23];
              }
            }
            let obj6 = { children: closure_7(ModalContent, tmp26) };
            const ModalScreen = tmp(tmp2[15]).ModalScreen;
            class O {
              constructor() {
                closure_0 = closure_3.addListener("transitionEnd", (data) => {
                  const current = ref.current || true === data.data.closing;
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
            ModalContent = tmp(tmp2[16]).ModalContent;
            let obj7 = { align: "center", justify: "center", spacing: 16, children: items };
            items = [tmp16, tmp22];
            tmp26[0] = closure_8(tmp(modalSessionId[17]).Stack, obj7);
            const tmp28 = closure_7(ModalScreen, obj6);
            cResult[21] = tmp16;
            cResult[22] = tmp22;
            cResult[23] = tmp28;
            tmp24 = tmp28;
          }
          class O {
            constructor() {
              closure_0 = closure_3.addListener("transitionEnd", (data) => {
                const current = ref.current || true === data.data.closing;
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
          let obj8 = { children: closure_7(tmp(tmp2[20]).Button, obj9) };
          const ButtonGroup = tmp(tmp2[19]).ButtonGroup;
          obj9 = {
            variant: "primary",
            size: "lg",
            text: tmp19,
            onPress() {
                      const trackAgeVerificationModalClicked = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked;
                      AgeVerificationAnalyticsUtils;
                      const result = trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.METHOD_SELECT);
                      closure_6();
                    }
          };
          const tmp23 = closure_7(ButtonGroup, obj8);
          cResult[18] = tmp10;
          cResult[19] = modalSessionId;
          cResult[20] = tmp23;
          tmp22 = tmp23;
        }
        return tmp24;
      }
      class O {
        constructor() {
          closure_0 = closure_3.addListener("transitionEnd", (data) => {
            const current = ref.current || true === data.data.closing;
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
    let closure_0 = navigation(function*() {
      let closure_2;
      let intl;
      let intl2;
      let items;
      let obj14;
      let obj3;
      let obj6;
      let v1;
      let v3;
      if (v3 === 2) {
        v3 = 3;
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
        let c3;
        try {
          let request_json;
          let closure_1;
          let closure_3;
          v3 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_0 = tmp4;
              request_json = undefined;
              closure_1 = undefined;
              closure_3 = undefined;
              c3 = 1;
              v1 = 2;
              v3 = 1;
              const obj5 = { value: obj14.requestGoogleWalletVerification(), done: false };
              obj14 = closure_0(modalSessionId[9]);
              return obj5;
            }
          } else {
            if (1 === v1) {
              c3 = 0;
              let code;
              if (tmp50 != null) {
                code = tmp50.code;
              }
              if ("CANCELLED" === code) {
                const obj7 = { name: closure_0(modalSessionId[12]).MetricEvents.GOOGLE_WALLET_VERIFICATION_FAILED, tags: ["reason:user_cancelled"] };
                const increment2 = onComplete(modalSessionId[11]).increment;
                const tmp42 = onComplete(modalSessionId[11]);
                increment2(obj7);
                closure_1_6();
                v3 = 3;
                const obj8 = { value: undefined, done: true };
                return obj8;
              } else {
                let reason;
                if (tmp50 != null) {
                  const body = tmp50.body;
                  if (body != null) {
                    reason = body.reason;
                  }
                }
                if ("unsupported_issuing_country" === reason) {
                  const obj9 = { name: closure_0(modalSessionId[12]).MetricEvents.GOOGLE_WALLET_VERIFICATION_FAILED, tags: ["reason:unsupported_issuing_country"] };
                  const increment = onComplete(modalSessionId[11]).increment;
                  const tmp29 = onComplete(modalSessionId[11]);
                  increment(obj9);
                  const obj10 = { type: "error", message: intl.string(onComplete(modalSessionId[14]).Pf5xUq) };
                  intl = closure_0(modalSessionId[13]).intl;
                  v1(obj10);
                  v3 = 3;
                  const obj11 = { value: undefined, done: true };
                  return obj11;
                } else {
                  closure_3 = getFailureReason(tmp50);
                  const obj12 = { name: closure_0(modalSessionId[12]).MetricEvents.GOOGLE_WALLET_VERIFICATION_FAILED, tags: items };
                  const increment3 = onComplete(modalSessionId[11]).increment;
                  const tmp65 = onComplete(modalSessionId[11]);
                  const _HermesInternal = HermesInternal;
                  items = ["reason:" + closure_3];
                  increment3(obj12);
                  const obj13 = { type: "error", message: intl2.string(onComplete(modalSessionId[14])["+pwfOA"]) };
                  intl2 = closure_0(modalSessionId[13]).intl;
                  v1(obj13);
                }
              }
            } else if (2 === v1) {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                v3 = 3;
                const obj15 = { value, done: true };
                return obj15;
              } else {
                request_json = value.request_json;
                v1 = 3;
                v3 = 1;
                const obj16 = { value: obj6.getGoogleWalletCredential(request_json), done: false };
                obj6 = closure_0(modalSessionId[9]);
                return obj16;
              }
            } else if (3 === v1) {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                v3 = 3;
                const obj17 = { value, done: true };
                return obj17;
              } else {
                closure_1 = value;
                v1 = 4;
                v3 = 1;
                const obj18 = { value: obj3.verifyGoogleWalletCredential(closure_1), done: false };
                obj3 = closure_0(modalSessionId[9]);
                return obj18;
              }
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              v3 = 3;
              const obj19 = { value, done: true };
              return obj19;
            } else {
              const obj = closure_0(modalSessionId[10]);
              if (obj.isCurrentUserSuspended()) {
                v3();
              }
              c3 = 0;
            }
            v3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp50) {
          if (0 === c3) {
            v3 = 3;
            throw tmp50;
          } else {
            v1 = 1;
          }
        }
      }
    });
    const fn2 = function() {
      return closure_0(...arguments);
    };
    cResult[6] = tmp10;
    cResult[7] = tmp8;
    cResult[8] = fn2;
    tmp11 = fn2;
  }
  class A {
    constructor() {
      if (onComplete != null) {
        tmp();
      }
      onClose();
    }
  }
  cResult[1] = onClose;
  cResult[2] = onComplete;
  cResult[3] = A;
  tmp8 = A;
}) : ((onClose) => {
  let Button;
  let ModalContent;
  let ModalContent2;
  let Stack;
  let Stack2;
  let c4;
  let intl;
  let intl2;
  let items4;
  let items5;
  let obj12;
  let obj4;
  let obj5;
  let obj8;
  let obj9;
  let tmp15;
  let tmp5;
  onClose = onClose.onClose;
  const onComplete = onClose.onComplete;
  const modalSessionId = onClose.modalSessionId;
  _slicedToArray = undefined;
  let callback;
  let tmp = onClose;
  let obj = onClose(modalSessionId[7]);
  navigation = obj.useNavigation();
  const tmp4 = _slicedToArray(callback.useState({ type: "loading" }), 2);
  [tmp5, c4] = tmp4;
  let items = [onComplete, onClose];
  callback = callback.useCallback(() => {
    if (onComplete != null) {
      tmp();
    }
    onClose();
  }, items);
  let obj2 = onClose(modalSessionId[8]);
  const watchAgeVerificationStatusChange = obj2.useWatchAgeVerificationStatusChange(callback);
  const items1 = [navigation];
  const callback1 = callback.useCallback(() => {
    navigation.goBack();
  }, items1);
  const items2 = [callback1, callback];
  const callback2 = callback.useCallback(navigation(function*() {
    let closure_0;
    let closure_1;
    let closure_2;
    let intl;
    let intl2;
    let items;
    let obj14;
    let obj3;
    let obj6;
    if (c5 === 2) {
      c5 = 3;
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
      let c3;
      try {
        let request_json;
        let tmp;
        let closure_3;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            onClose = tmp4;
            request_json = undefined;
            tmp = undefined;
            closure_3 = undefined;
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj5 = { value: obj14.requestGoogleWalletVerification(), done: false };
            obj14 = onClose(undefined[9]);
            return obj5;
          }
        } else {
          if (1 === c4) {
            c3 = 0;
            let code;
            if (tmp50 != null) {
              code = tmp50.code;
            }
            if ("CANCELLED" === code) {
              const obj7 = { name: onClose(tmp50[12]).MetricEvents.GOOGLE_WALLET_VERIFICATION_FAILED, tags: ["reason:user_cancelled"] };
              const increment2 = tmp(tmp50[11]).increment;
              const tmp42 = tmp(tmp50[11]);
              increment2(obj7);
              closure_129_6();
              c5 = 3;
              const obj8 = { value: undefined, done: true };
              return obj8;
            } else {
              let reason;
              if (tmp50 != null) {
                const body = tmp50.body;
                if (body != null) {
                  reason = body.reason;
                }
              }
              if ("unsupported_issuing_country" === reason) {
                const obj9 = { name: onClose(tmp50[12]).MetricEvents.GOOGLE_WALLET_VERIFICATION_FAILED, tags: ["reason:unsupported_issuing_country"] };
                const increment = tmp(tmp50[11]).increment;
                const tmp29 = tmp(tmp50[11]);
                increment(obj9);
                const obj10 = { type: "error", message: intl.string(tmp(tmp50[14]).Pf5xUq) };
                intl = onClose(tmp50[13]).intl;
                closure_129_4(obj10);
                c5 = 3;
                const obj11 = { value: undefined, done: true };
                return obj11;
              } else {
                closure_3 = getFailureReason(tmp50);
                const obj12 = { name: onClose(tmp50[12]).MetricEvents.GOOGLE_WALLET_VERIFICATION_FAILED, tags: items };
                const increment3 = tmp(tmp50[11]).increment;
                const tmp65 = tmp(tmp50[11]);
                const _HermesInternal = HermesInternal;
                items = ["reason:" + closure_3];
                increment3(obj12);
                const obj13 = { type: "error", message: intl2.string(tmp(tmp50[14])["+pwfOA"]) };
                intl2 = onClose(tmp50[13]).intl;
                closure_129_4(obj13);
              }
            }
          } else if (2 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj15 = { value, done: true };
              return obj15;
            } else {
              request_json = value.request_json;
              c4 = 3;
              c5 = 1;
              const obj16 = { value: obj6.getGoogleWalletCredential(request_json), done: false };
              obj6 = onClose(tmp50[9]);
              return obj16;
            }
          } else if (3 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj17 = { value, done: true };
              return obj17;
            } else {
              tmp = value;
              c4 = 4;
              c5 = 1;
              const obj18 = { value: obj3.verifyGoogleWalletCredential(tmp), done: false };
              obj3 = onClose(tmp50[9]);
              return obj18;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj19 = { value, done: true };
            return obj19;
          } else {
            const obj = onClose(tmp50[10]);
            if (obj.isCurrentUserSuspended()) {
              closure_129_5();
            }
            c3 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp50) {
        if (0 === c3) {
          c5 = 3;
          throw tmp50;
        } else {
          c4 = 1;
        }
      }
    }
  }), items2);
  let closure_8 = callback.useRef(false);
  const items3 = [navigation, callback2];
  const effect = callback.useEffect(() => {
    let closure_1;
    let ref;
    let closure_0 = navigation.addListener("transitionEnd", (data) => {
      const current = ref.current || true === data.data.closing;
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
    let obj3 = { children: callback2(ModalContent, obj4) };
    const ModalScreen = tmp(tmp2[15]).ModalScreen;
    obj4 = { children: closure_8(Stack, obj5) };
    ModalContent = tmp(tmp2[16]).ModalContent;
    obj5 = { align: "center", justify: "center", spacing: 16, children: items4 };
    Stack = tmp(tmp2[17]).Stack;
    items4 = [callback2(callback1, { size: "large" }), ];
    let obj6 = { variant: "text-md/medium", color: "text-strong", children: intl.string(onComplete(tmp2[14]).MlFuBI) };
    const Text = tmp(tmp2[18]).Text;
    intl = tmp(tmp2[13]).intl;
    items4[1] = callback2(Text, obj6);
    tmp15 = callback2(ModalScreen, obj3);
  } else {
    let obj7 = { children: callback2(ModalContent2, obj8) };
    const ModalScreen2 = tmp(tmp2[15]).ModalScreen;
    obj8 = { children: closure_8(Stack2, obj9) };
    ModalContent2 = tmp(tmp2[16]).ModalContent;
    obj9 = { align: "center", justify: "center", spacing: 16, children: items5 };
    Stack2 = tmp(tmp2[17]).Stack;
    let obj10 = { variant: "text-md/medium", color: "text-strong", children: tmp5.message };
    items5 = [callback2(tmp(tmp2[18]).Text, obj10), ];
    let obj11 = { children: callback2(Button, obj12) };
    const ButtonGroup = tmp(tmp2[19]).ButtonGroup;
    obj12 = {
      variant: "primary",
      size: "lg",
      text: intl2.string(onComplete(tmp2[14]).fEUKEv),
      onPress() {
          const trackAgeVerificationModalClicked = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked;
          AgeVerificationAnalyticsUtils;
          const result = trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.METHOD_SELECT);
          callback1();
        }
    };
    Button = tmp(tmp2[20]).Button;
    intl2 = tmp(tmp2[13]).intl;
    items5[1] = callback2(ButtonGroup, obj11);
    tmp15 = callback2(ModalScreen2, obj7);
  }
  return tmp15;
});
let result = size.fileFinishedImporting("modules/age_assurance/native/GoogleWalletVerificationScreen.tsx");

export default tmp3;