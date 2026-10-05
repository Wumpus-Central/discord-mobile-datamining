// === Module 17430: HcaptchaModal ===

// Module 17430 (HcaptchaModal)
import Constants from "Constants" /* 1085 */;
import SharedCaptchaUtils from "SharedCaptchaUtils" /* 5407 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, navigation, obj1, tmp3;

let c9;
let closure_12;
let map1;
let metroImportAll;
let metroImportDefault;
let closure_3 = ["onMessage", "onClose"];
let closure_4 = ["onMessage", "onClose"];
({ ActivityIndicator: metroImportDefault, View: metroImportAll, StyleSheet: c9 } = react_native);
const ModalAnimation = Constants.ModalAnimation;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let closure_14 = createStyles.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" }, title: { textAlign: "center" }, closeButtonContainer: { position: "absolute", top: 0, left: 0, zIndex: 2 }, closeButtonHitArea: { minWidth: 44, minHeight: 44, justifyContent: "center", alignItems: "center" } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let currentUser;
  let items1;
  let items3;
  let obj8;
  let onClose;
  let onMessage;
  let tmp10;
  let tmp11;
  let tmp14;
  let tmp18Result;
  let tmp20;
  let tmp4;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(37);
  if (cResult[0] !== arg0) {
    ({ onMessage, onClose } = arg0);
    const tmp8 = _objectWithoutProperties(arg0, closure_3);
    _require = onMessage;
    cResult[0] = arg0;
    cResult[1] = tmp8;
    cResult[2] = onMessage;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    _require = cResult[2];
  }
  const tmp9 = closure_14();
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    class I {
      constructor() {
        return closure_1_11.getCurrentUser();
      }
    }
    cResult[3] = items;
    cResult[4] = I;
    tmp11 = I;
    tmp10 = items;
  } else {
    tmp10 = cResult[3];
    tmp11 = cResult[4];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp10, tmp11);
  const tmpResult3 = tmp(1490);
  navigation = tmpResult3.useNavigation();
  if (cResult[5] !== navigation) {
    const state = navigation.getState();
    cResult[5] = navigation;
    class I {
      constructor() {
        return closure_1_11.getCurrentUser();
      }
    }
    cResult[6] = state;
    tmp14 = state;
  } else {
    tmp14 = cResult[6];
  }
  const routes = tmp14.routes;
  if (!(routes.length > 0 && "auth" === routes[0].name)) {
    if (stateFromStores != null) {
      const ageVerificationStatus = stateFromStores.ageVerificationStatus;
    }
    class I {
      constructor() {
        return closure_1_11.getCurrentUser();
      }
    }
  }
  const tmp19 = H(1618)();
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.wsoPhr);
    class I {
      constructor() {
        return closure_1_11.getCurrentUser();
      }
    }
    cResult[7] = stringResult;
    tmp20 = stringResult;
  } else {
    tmp20 = cResult[7];
  }
  if (cResult[8] !== onMessage) {
    class H {
      constructor() {
        if (closure_0 != null) {
          obj = { nativeEvent: null };
          obj1 = { data: null };
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj1.data = closure_0(closure_2[15]).CaptchaError.CANCEL;
          obj.nativeEvent = obj1;
          tmpResult = tmp(obj);
        }
        return;
      }
    }
    cResult[8] = onMessage;
    class I {
      constructor() {
        return closure_1_11.getCurrentUser();
      }
    }
    cResult[9] = H;
  } else {
    class H {
      constructor() {
        if (closure_0 != null) {
          obj = { nativeEvent: null };
          obj1 = { data: null };
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj1.data = closure_0(closure_2[15]).CaptchaError.CANCEL;
          obj.nativeEvent = obj1;
          tmpResult = tmp(obj);
        }
        return;
      }
    }
  }
  H = tmp22;
  if (cResult[10] !== tmp22) {
    class F {
      constructor() {
        tmp = closure_1();
        return true;
      }
    }
    cResult[10] = tmp22;
    class I {
      constructor() {
        return closure_1_11.getCurrentUser();
      }
    }
    cResult[11] = F;
  } else {
    class F {
      constructor() {
        tmp = closure_1();
        return true;
      }
    }
  }
  H(5780)(F);
  if (cResult[12] === (routes.length > 0 && "auth" === routes[0].name)) {
    class F {
      constructor() {
        tmp = closure_1();
        return true;
      }
    }
    if (cResult[15] === tmp4) {
      class F {
        constructor() {
          tmp = closure_1();
          return true;
        }
      }
      const sum = tmp19.top + tmp18(587).space.PX_8;
      class I {
        constructor() {
          return closure_1_11.getCurrentUser();
        }
      }
      const sum1 = tmp42 + tmp18(587).space.PX_16;
      if (cResult[18] === sum1) {
        class F {
          constructor() {
            tmp = closure_1();
            return true;
          }
        }
        if (cResult[21] === tmp9.closeButtonContainer) {
          let tmp48;
          class F {
            constructor() {
              tmp = closure_1();
              return true;
            }
          }
          const _Symbol = Symbol;
          class I {
            constructor() {
              return closure_1_11.getCurrentUser();
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
            class F {
              constructor() {
                tmp = closure_1();
                return true;
              }
            }
            let obj2 = { color: null };
            const XLargeIcon = tmp(4795).XLargeIcon;
            class I {
              constructor() {
                return closure_1_11.getCurrentUser();
              }
            }
            const tmp49 = closure_12(XLargeIcon, obj2);
            cResult[25] = tmp49;
            tmp48 = tmp49;
          } else {
            class F {
              constructor() {
                tmp = closure_1();
                return true;
              }
            }
          }
          if (cResult[26] === tmp22) {
            class F {
              constructor() {
                tmp = closure_1();
                return true;
              }
            }
            if (cResult[29] === tmp45) {
              class F {
                constructor() {
                  tmp = closure_1();
                  return true;
                }
              }
              if (cResult[32] === tmp9.container) {
                class F {
                  constructor() {
                    tmp = closure_1();
                    return true;
                  }
                }
              }
              class I {
                constructor() {
                  return closure_1_11.getCurrentUser();
                }
              }
              const obj3 = { style: tmp25, children: items1 };
              items1 = [tmp26, tmp32, tmp53];
              cResult[32] = tmp9.container;
              cResult[33] = tmp53;
              cResult[34] = tmp26;
              cResult[35] = tmp32;
              cResult[36] = closure_13(closure_8, obj3);
              const tmp58 = closure_13(closure_8, obj3);
            }
            class I {
              constructor() {
                return closure_1_11.getCurrentUser();
              }
            }
            const obj4 = { style: tmp45, pointerEvents: "box-none", children: tmp50 };
            cResult[29] = tmp45;
            cResult[30] = tmp50;
            cResult[31] = closure_12(closure_8, obj4);
            const tmp55 = closure_12(closure_8, obj4);
          }
          const obj5 = { accessibilityRole: "button", accessibilityLabel: tmp47, onPress: tmp22, style: tmp9.closeButtonHitArea, children: tmp48 };
          cResult[26] = tmp22;
          cResult[27] = tmp9.closeButtonHitArea;
          cResult[28] = closure_12(tmp(5909).PressableOpacity, obj5);
          const tmp52 = closure_12(tmp(5909).PressableOpacity, obj5);
        }
        const items2 = [, ];
        class I {
          constructor() {
            return closure_1_11.getCurrentUser();
          }
        }
        items2[1] = tmp44;
        cResult[21] = tmp9.closeButtonContainer;
        cResult[22] = tmp44;
        cResult[23] = items2;
      }
      const obj6 = { paddingTop: sum, paddingLeft: sum1 };
      cResult[18] = sum1;
      cResult[19] = sum;
      cResult[20] = obj6;
    }
    class I {
      constructor() {
        return closure_1_11.getCurrentUser();
      }
    }
    const obj7 = { style: closure_9.absoluteFillObject, children: closure_12(tmp18Result, obj8) };
    obj8 = { languageCode: LocaleStore.locale, onMessage };
    tmp18Result = H(17429);
    const merged = Object.assign(tmp4);
    cResult[15] = tmp4;
    cResult[16] = onMessage;
    cResult[17] = closure_12(closure_8, obj7);
    const tmp40 = closure_12(closure_8, obj7);
  }
  let tmp28Result = !tmp16;
  if (tmp28Result) {
    class F {
      constructor() {
        tmp = closure_1();
        return true;
      }
    }
    const obj9 = { spacing: null, align: "center", children: items3 };
    const Stack = tmp(5593).Stack;
    class I {
      constructor() {
        return closure_1_11.getCurrentUser();
      }
    }
    const obj10 = { accessibilityRole: "header", variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp9.title, children: tmp20 };
    items3 = [closure_12(tmp(4886).Text, obj10), ];
    const tmpResult4 = tmp(1369);
    if (tmpResult4.isAndroid()) {
      class F {
        constructor() {
          tmp = closure_1();
          return true;
        }
      }
    }
    const obj11 = { size: "small", color: undefined };
    items3[1] = closure_12(closure_7, obj11);
    tmp28Result = tmp28(Stack, obj9);
  }
  cResult[12] = routes.length > 0 && "auth" === routes[0].name;
  cResult[13] = tmp9.title;
  cResult[14] = tmp28Result;
}) : ((onMessage) => {
  let PressableOpacity;
  let XLargeIcon;
  let currentUser;
  let intl2;
  let items2;
  let items3;
  let items4;
  let obj11;
  let obj12;
  let obj8;
  let onPress;
  let tmp9Result;
  onMessage = onMessage.onMessage;
  const tmp = _objectWithoutProperties(onMessage, closure_4);
  const tmp2 = closure_14();
  let obj = onMessage(504);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = onMessage(1490);
  navigation = obj2.useNavigation();
  const routes = navigation.getState().routes;
  let tmp6 = routes.length > 0 && "auth" === routes[0].name;
  if (!tmp6) {
    let prop;
    if (stateFromStores != null) {
      prop = stateFromStores.ageVerificationStatus;
    }
    tmp6 = prop === tmp3(1985).AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  const rect = onPress(1618)();
  const intl = tmp3(1126).intl;
  const items1 = [onMessage];
  const stringResult = intl.string(onMessage(1126).t.wsoPhr);
  onPress = react.useCallback(() => {
    let obj2;
    if (onMessage != null) {
      const obj = { nativeEvent: obj2 };
      obj2 = { data: SharedCaptchaUtils.CaptchaError.CANCEL };
      tmp(obj);
    }
  }, items1);
  onPress(5780)(() => {
    callback();
    return true;
  });
  let tmp13Result = !tmp6;
  const obj3 = { style: tmp2.container, children: items3 };
  if (tmp13Result) {
    const obj4 = { spacing: onPress(587).space.PX_16, align: "center", children: items2 };
    const Stack = tmp3(5593).Stack;
    const obj5 = { accessibilityRole: "header", variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp2.title, children: stringResult };
    items2 = [closure_12(onMessage(4886).Text, obj5), ];
    let WHITE;
    const tmp3Result = onMessage(1369);
    if (tmp3Result.isAndroid()) {
      WHITE = tmp9(587).unsafe_rawColors.WHITE;
    }
    const obj6 = { size: "small", color: WHITE };
    items2[1] = closure_12(closure_7, obj6);
    tmp13Result = closure_13(Stack, obj4);
  }
  items3 = [tmp13Result, , ];
  const obj7 = { style: closure_9.absoluteFillObject, children: closure_12(tmp9Result, obj8) };
  obj8 = { languageCode: LocaleStore.locale, onMessage };
  tmp9Result = onPress(17429);
  const merged = Object.assign(tmp);
  items3[1] = closure_12(closure_8, obj7);
  const obj9 = { style: items4, pointerEvents: "box-none", children: closure_12(PressableOpacity, obj11) };
  items4 = [tmp2.closeButtonContainer, { paddingTop: rect.top + onPress(587).space.PX_8, paddingLeft: rect.left + onPress(587).space.PX_16 }];
  obj11 = { accessibilityRole: "button", accessibilityLabel: intl2.string(onMessage(1126).t.cpT0Cq), onPress, style: tmp2.closeButtonHitArea, children: closure_12(XLargeIcon, obj12) };
  ({ paddingTop: rect.top + onPress(587).space.PX_8, paddingLeft: rect.left + onPress(587).space.PX_16 });
  PressableOpacity = tmp3(5909).PressableOpacity;
  intl2 = tmp3(1126).intl;
  obj12 = { color: onPress(587).colors.INTERACTIVE_ICON_DEFAULT };
  XLargeIcon = tmp3(4795).XLargeIcon;
  items3[2] = closure_12(closure_8, obj9);
  return closure_13(closure_8, obj3);
});
tmp4.modalConfig = { animation: ModalAnimation.FADE };
const result = size.fileFinishedImporting("modules/captcha/native/HcaptchaModal.tsx");

export default tmp4;