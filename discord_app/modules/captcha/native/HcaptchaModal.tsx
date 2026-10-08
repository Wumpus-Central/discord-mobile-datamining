// discord_app/modules/captcha/native/HcaptchaModal.tsx
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import useBackPressHandlerDefault from "../../routing/native/useBackPressHandler.tsx";
import SharedCaptchaUtils from "../SharedCaptchaUtils.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
let closure_3 = ["onMessage", "onClose"];
let closure_4 = ["onMessage", "onClose"];
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_7, View: closure_8, StyleSheet: closure_9 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(5090);
let closure_14 = createStyles.createStyles({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { textAlign: "center" },
  closeButtonContainer: { position: "absolute", top: 0, left: 0, zIndex: 2 },
  closeButtonHitArea: { minWidth: 44, minHeight: 44, justifyContent: "center", alignItems: "center" },
});
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function HcaptchaModal(arg0) {
      const cResult = require("c").c(37);
      if (cResult[0] !== arg0) {
        ({ onMessage, onClose } = arg0);
        const tmp8 = _objectWithoutProperties(arg0, closure_3);
        _require = onMessage;
        cResult[0] = arg0;
        cResult[1] = tmp8;
        cResult[2] = onMessage;
        let tmp4 = tmp8;
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
        let tmp11 = I;
        let tmp10 = items;
      } else {
        tmp10 = cResult[3];
        tmp11 = cResult[4];
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp10, tmp11);
      const tmpResult = require("initialize");
      const navigation = require("useNavigation").useNavigation();
      if (cResult[5] !== navigation) {
        state = navigation.getState();
        cResult[5] = navigation;
        class I {
          constructor() {
            return closure_1_11.getCurrentUser();
          }
        }
        cResult[6] = state;
        let tmp14 = state;
      } else {
        tmp14 = cResult[6];
      }
      const routes = tmp14.routes;
      let tmp16 = routes.length > 0;
      if (tmp16) {
        tmp16 = "auth" === routes[0].name;
      }
      if (!tmp16) {
        if (stateFromStores != null) {
          const ageVerificationStatus = stateFromStores.ageVerificationStatus;
        }
        class I {
          constructor() {
            return closure_1_11.getCurrentUser();
          }
        }
      }
      const tmpResult3 = require("useNavigation");
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.wsoPhr);
        class I {
          constructor() {
            return closure_1_11.getCurrentUser();
          }
        }
        cResult[7] = stringResult;
        let tmp20 = stringResult;
      } else {
        tmp20 = cResult[7];
      }
      if (cResult[8] !== onMessage) {
        class O {
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
        cResult[9] = O;
      } else {
        class O {
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
      importDefault = O;
      if (cResult[10] !== O) {
        class F {
          constructor() {
            tmp = closure_1();
            return true;
          }
        }
        cResult[10] = O;
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
      useBackPressHandlerDefault(F);
      if (cResult[12] === tmp16) {
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
                class I {
                  constructor() {
                    return closure_1_11.getCurrentUser();
                  }
                }
                const tmp49 = closure_12(tmp(4995).XLargeIcon, { color: null });
                cResult[25] = tmp49;
                let obj2 = { color: null };
                const tmp48 = tmp49;
              } else {
                class F {
                  constructor() {
                    tmp = closure_1();
                    return true;
                  }
                }
              }
              if (cResult[26] === O) {
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
                  const obj3 = { style: tmp25, children: null };
                  const items1 = [tmp26, tmp32, tmp53];
                  obj3.children = items1;
                  const tmp58 = closure_13(closure_8, obj3);
                  cResult[32] = tmp9.container;
                  cResult[33] = tmp53;
                  cResult[34] = tmp26;
                  cResult[35] = tmp32;
                  cResult[36] = tmp58;
                }
                class I {
                  constructor() {
                    return closure_1_11.getCurrentUser();
                  }
                }
                const obj4 = { style: tmp45, pointerEvents: "box-none", children: tmp50 };
                const tmp55 = closure_12(closure_8, obj4);
                cResult[29] = tmp45;
                cResult[30] = tmp50;
                cResult[31] = tmp55;
              }
              const obj5 = {
                accessibilityRole: "button",
                accessibilityLabel: tmp47,
                onPress: O,
                style: tmp9.closeButtonHitArea,
                children: tmp48,
              };
              const tmp52 = closure_12(tmp(6189).PressableOpacity, obj5);
              cResult[26] = O;
              cResult[27] = tmp9.closeButtonHitArea;
              cResult[28] = tmp52;
            }
            const items2 = [,];
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
        const obj7 = { style: closure_9.absoluteFillObject, children: null };
        const obj8 = {};
        const merged = Object.assign(tmp4);
        obj8.languageCode = LocaleStore.locale;
        obj8.onMessage = onMessage;
        obj7.children = closure_12(tmp18(17740), obj8);
        const tmp40 = closure_12(closure_8, obj7);
        cResult[15] = tmp4;
        cResult[16] = onMessage;
        cResult[17] = tmp40;
        const tmp18Result = tmp18(17740);
      }
      let tmp28Result = !tmp16;
      if (!tmp16) {
        class F {
          constructor() {
            tmp = closure_1();
            return true;
          }
        }
        const obj9 = { spacing: null, align: "center", children: null };
        class I {
          constructor() {
            return closure_1_11.getCurrentUser();
          }
        }
        const obj10 = {
          accessibilityRole: "header",
          variant: "heading-lg/bold",
          color: "mobile-text-heading-primary",
          style: tmp9.title,
          children: tmp20,
        };
        const items3 = [closure_12(tmp(5086).Text, obj10)];
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
        obj9.children = items3;
        tmp28Result = tmp28(tmp(5373).Stack, obj9);
        tmpResult4 = tmp(1381);
      }
      cResult[12] = tmp16;
      cResult[13] = tmp9.title;
      cResult[14] = tmp28Result;
      tmp19 = useSafeAreaInsetsDefault();
    }
  : function HcaptchaModal(onMessage) {
      onMessage = onMessage.onMessage;
      const tmp2 = closure_14();
      const tmp = _objectWithoutProperties(onMessage, closure_4);
      const items = [UserStore];
      const stateFromStores = onMessage(504).useStateFromStores(items, () => currentUser.getCurrentUser());
      let obj = onMessage(504);
      const navigation = onMessage(1502).useNavigation();
      const routes = navigation.getState().routes;
      let tmp6 = routes.length > 0;
      if (tmp6) {
        tmp6 = "auth" === routes[0].name;
      }
      if (!tmp6) {
        let prop;
        if (stateFromStores != null) {
          prop = stateFromStores.ageVerificationStatus;
        }
        tmp6 = prop === tmp3(1997).AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
      }
      const rect = onPress(1630)();
      const intl = tmp3(1126).intl;
      const items1 = [onMessage];
      let obj2 = onMessage(1502);
      onPress = noop.useCallback(() => {
        if (onMessage != null) {
          const obj = { nativeEvent: null };
          const obj2 = { data: SharedCaptchaUtils.CaptchaError.CANCEL };
          obj.nativeEvent = obj2;
          tmp(obj);
        }
      }, items1);
      onPress(5370)(() => {
        callback();
        return true;
      });
      const obj3 = { style: tmp2.container, children: null };
      let tmp13Result = !tmp6;
      if (!tmp6) {
        const obj4 = { spacing: tmp9(587).space.PX_16, align: "center", children: null };
        const obj5 = {
          accessibilityRole: "header",
          variant: "heading-lg/bold",
          color: "mobile-text-heading-primary",
          style: tmp2.title,
          children: stringResult,
        };
        const items2 = [closure_12(tmp3(5086).Text, obj5)];
        let WHITE;
        if (tmp3Result.isAndroid()) {
          WHITE = tmp9(587).unsafe_rawColors.WHITE;
        }
        const obj6 = { size: "small", color: WHITE };
        items2[1] = closure_12(closure_7, obj6);
        obj4.children = items2;
        tmp13Result = closure_13(tmp3(5373).Stack, obj4);
        tmp3Result = tmp3(1381);
      }
      const items3 = [tmp13Result, ,];
      const obj7 = { style: closure_9.absoluteFillObject, children: null };
      const obj8 = {};
      stringResult = intl.string(onMessage(1126).t.wsoPhr);
      const merged = Object.assign(tmp);
      obj8.languageCode = LocaleStore.locale;
      obj8.onMessage = onMessage;
      obj7.children = closure_12(onPress(17740), obj8);
      items3[1] = closure_12(closure_8, obj7);
      const obj9 = { style: null, pointerEvents: "box-none", children: null };
      const items4 = [tmp2.closeButtonContainer];
      const tmp9Result = onPress(17740);
      items4[1] = { paddingTop: rect.top + onPress(587).space.PX_8, paddingLeft: rect.left + onPress(587).space.PX_16 };
      obj9.style = items4;
      const obj11 = {
        accessibilityRole: "button",
        accessibilityLabel: null,
        onPress: null,
        style: null,
        children: null,
      };
      const intl2 = tmp3(1126).intl;
      obj11.accessibilityLabel = intl2.string(onMessage(1126).t.cpT0Cq);
      obj11.onPress = onPress;
      obj11.style = tmp2.closeButtonHitArea;
      const obj10 = {
        paddingTop: rect.top + onPress(587).space.PX_8,
        paddingLeft: rect.left + onPress(587).space.PX_16,
      };
      obj11.children = closure_12(onMessage(4995).XLargeIcon, { color: onPress(587).colors.INTERACTIVE_ICON_DEFAULT });
      obj9.children = closure_12(onMessage(6189).PressableOpacity, obj11);
      items3[2] = closure_12(closure_8, obj9);
      obj3.children = items3;
      return closure_13(closure_8, obj3);
    };
tmp4.modalConfig = { animation: fn(1085).ModalAnimation.FADE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/captcha/native/HcaptchaModal.tsx");

export default tmp4;
