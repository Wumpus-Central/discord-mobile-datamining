// discord_app/components_native/common/Alerts.tsx
import discord_common_shallowEqualDefault from "../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../modules/reanimated/ReanimatedRexport.tsx";
import timing from "../../design/animation/reanimated/timing/timing.tsx";
import actions_AlertActionCreatorsDefault from "../../actions/native/AlertActionCreators.tsx";
import OverlayViewDefault from "../../design/void/OverlayView/native/OverlayView.tsx";
import spring from "../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../design/animation/reanimated/spring/springPresets.tsx";
import ModalRegistryDefault from "../../lib/ModalRegistry.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../modules/a11y/AccessibilityStore.tsx";
import PermissionSpeakStore from "../../stores/PermissionSpeakStore.tsx";
import PermissionVADStore from "../../stores/PermissionVADStore.tsx";
import SurveyStore from "../../stores/SurveyStore.tsx";
import AlertStore from "../../stores/native/AlertStore.tsx";

const require = globalThis.__r;

require = fn;
function getAlertItemKey(renderKey) {
  return renderKey.renderKey;
}
function wrapAlerts(children) {
  const obj = {
    style: StyleSheet.absoluteFill,
    children: __initData(timestampProducer, { style: StyleSheet.absoluteFill, children }),
  };
  return __initData(OverlayViewDefault, obj);
}
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
({ TouchableWithoutFeedback: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let obj = {
  stores: null,
  center: true,
  isOpen() {
    return PermissionSpeakStore.shouldShowWarning();
  },
  getComponent() {
    return require("Suppressed").default;
  },
};
let items = [PermissionSpeakStore];
obj.stores = items;
let items1 = [obj, ,];
let obj2 = {
  stores: null,
  center: true,
  isOpen() {
    return PermissionVADStore.shouldShowWarning();
  },
  getComponent() {
    return require("VADPermission").default;
  },
};
let items2 = [PermissionVADStore];
obj2.stores = items2;
items1[1] = obj2;
let obj3 = {
  stores: null,
  center: true,
  isOpen() {
    return null != SurveyStore.getCurrentSurvey();
  },
  getComponent() {
    return require("MobileSurvey").default;
  },
};
let items3 = [SurveyStore];
obj3.stores = items3;
items1[2] = obj3;
const stores = new ModalRegistryDefault(items1);
const createStyles = fn(5091);
let obj4 = { alertWrapper: null, alertContentWrapper: null };
let obj6 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj6.backgroundColor = nativeDefault.colors.BACKGROUND_SCRIM;
obj6.justifyContent = "center";
obj6.alignItems = "center";
obj4.alertWrapper = obj6;
obj4.alertContentWrapper = { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" };
let closure_15 = createStyles.createStyles(obj4);
const __initData = {
  code: 'function AlertsTsx1(){const{visible,withTiming,Easing,transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;const isVisible=visible.get()===1;return{opacity:withTiming(visible.get(),{duration:isVisible?250:100,easing:Easing.linear},"animate-always",function(finished){if(finished&&visible.get()===0&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}})};}',
};
const __initData2 = {
  code: "function AlertsTsx2(finished){const{visible,transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&visible.get()===0&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}}",
};
const __initData3 = {
  code: "function AlertsTsx3(){const{useReducedMotion,visible,withSpring,SUBTLE_SPRING,withTiming,Easing}=this.__closure;if(useReducedMotion){return{transform:[{scale:1}]};}return{transform:[{scale:visible.get()===1?withSpring(1,SUBTLE_SPRING):withTiming(0,{duration:100,easing:Easing.in(Easing.ease)})}]};}",
};
const __initData4 = {
  code: "function AlertsTsx4(){const{visible,withTiming,Easing,transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;const isVisible=visible.get()===1;return{opacity:withTiming(visible.get(),{duration:isVisible?250:100,easing:Easing.linear},'animate-always',function(finished){if(finished&&visible.get()===0&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}})};}",
};
let closure_20 = {
  code: "function AlertsTsx5(finished){const{visible,transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&visible.get()===0&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}}",
};
const __initData5 = {
  code: "function AlertsTsx6(){const{useReducedMotion,visible,withSpring,SUBTLE_SPRING,withTiming,Easing}=this.__closure;if(useReducedMotion){return{transform:[{scale:1}]};}return{transform:[{scale:visible.get()===1?withSpring(1,SUBTLE_SPRING):withTiming(0,{duration:100,easing:Easing.in(Easing.ease)})}]};}",
};
let ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AlertWrapper(cleanUp) {
      const cResult = transitionState(isDismissable[15]).c(29);
      ({ item, transitionState } = cleanUp);
      cleanUp = cleanUp.cleanUp;
      ({ renderAlert, renderKey, isDismissable } = item);
      const tmp4 = closure_15();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [AccessibilityStore];
        let fn = function u() {
          return useReducedMotion.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      let obj = transitionState(isDismissable[15]);
      const stateFromStores = transitionState(isDismissable[16]).useStateFromStores(tmp5, tmp6);
      const tmpResult = transitionState(isDismissable[16]);
      let num3 = 0;
      if (transitionState === transitionState(isDismissable[18]).TransitionStates.MOUNTED) {
        num3 = 1;
      }
      const sharedValue = transitionState(isDismissable[17]).useSharedValue(num3);
      if (cResult[2] === transitionState) {
        if (cResult[3] === sharedValue) {
          let tmp10 = cResult[4];
          let tmp11 = cResult[5];
        }
        const effect = stateFromStores.useEffect(tmp10, tmp11);
        class I {
          constructor() {
            tmp = closure_4;
            tmp3 = closure_0;
            tmp4 = closure_2;
            value = closure_4.get();
            obj = closure_0(closure_2[19]);
            value1 = closure_4.get();
            num = 100;
            if (1 === value) {
              num = 250;
            }
            obj1 = { opacity: null };
            obj5 = { duration: num, easing: tmp3(tmp4[17]).Easing.linear };
            fn = function t(arg0) {
              let tmp = arg0;
              if (arg0) {
                tmp = 0 === sharedValue.get();
              }
              if (tmp) {
                tmp = closure_1_0 === transitionState(isDismissable[18]).TransitionStates.YEETED;
              }
              if (tmp) {
                transitionState(isDismissable[17]).runOnJS(cleanUp)();
                const obj = transitionState(isDismissable[17]);
              }
            };
            obj6 = {
              visible: tmp,
              transitionState,
              TransitionStates: tmp3(tmp4[18]).TransitionStates,
              runOnJS: tmp3(tmp4[17]).runOnJS,
              cleanUp,
            };
            fn.__closure = obj6;
            fn.__workletHash = 9063471386550;
            fn.__initData = closure_17;
            obj1.opacity = obj.withTiming(value1, obj5, "animate-always", fn);
            return obj1;
          }
        }
        let obj2 = {
          visible: sharedValue,
          withTiming: transitionState(isDismissable[19]).withTiming,
          Easing: transitionState(isDismissable[17]).Easing,
          transitionState,
          TransitionStates: transitionState(isDismissable[18]).TransitionStates,
          runOnJS: transitionState(isDismissable[17]).runOnJS,
          cleanUp,
        };
        I.__closure = obj2;
        I.__workletHash = 3031596332050;
        I.__initData = __initData;
        const animatedStyle = transitionState(isDismissable[17]).useAnimatedStyle(I);
        const tmpResult5 = transitionState(isDismissable[17]);
        class J {
          constructor() {
            obj = { transform: null };
            if (closure_3) {
              items = [];
              items[0] = { scale: 1 };
              obj.transform = items;
              tmp13 = obj;
            } else {
              tmp = closure_4;
              num = 1;
              if (1 === closure_4.get()) {
                tmp9 = closure_0;
                tmp10 = closure_2;
                obj4 = closure_0(closure_2[20]);
                tmp11 = closure_0;
                tmp12 = closure_2;
                withSpringResult = obj4.withSpring(1, closure_0(closure_2[21]).SUBTLE_SPRING);
              } else {
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj2 = closure_0(closure_2[19]);
                obj1 = { duration: 100, easing: null };
                tmp4 = closure_0;
                tmp5 = closure_2;
                Easing = closure_0(closure_2[17]).Easing;
                tmp6 = closure_0;
                tmp7 = closure_2;
                obj1.easing = Easing.in(closure_0(closure_2[17]).Easing.ease);
                num2 = 0;
                withSpringResult = obj2.withTiming(0, obj1);
              }
              obj6 = { scale: null };
              obj6.scale = withSpringResult;
              items1 = [];
              items1[0] = obj6;
              obj.transform = items1;
              tmp13 = obj;
            }
            return tmp13;
          }
        }
        let obj3 = {
          useReducedMotion: stateFromStores,
          visible: sharedValue,
          withSpring: transitionState(isDismissable[20]).withSpring,
          SUBTLE_SPRING: transitionState(isDismissable[21]).SUBTLE_SPRING,
          withTiming: transitionState(isDismissable[19]).withTiming,
          Easing: transitionState(isDismissable[17]).Easing,
        };
        J.__closure = obj3;
        J.__workletHash = 7591026156474;
        class D {
          constructor() {
            tmp = closure_4;
            num = 1;
            if (transitionState === closure_0(closure_2[18]).TransitionStates.YEETED) {
              num = 0;
            }
            result = closure_4.set(num);
            return;
          }
        }
        J.__initData = __initData3;
        const animatedStyle1 = transitionState(isDismissable[17]).useAnimatedStyle(J);
        if (cResult[6] !== isDismissable) {
          class F {
            constructor() {
              if (isDismissable) {
                tmp = closure_1;
                tmp2 = closure_2;
                obj = closure_1(closure_2[22]);
                closeResult = obj.close();
              }
              return true;
            }
          }
          cResult[6] = isDismissable;
          class I {
            constructor() {
              tmp = closure_4;
              tmp3 = closure_0;
              tmp4 = closure_2;
              value = closure_4.get();
              obj = closure_0(closure_2[19]);
              value1 = closure_4.get();
              num = 100;
              if (1 === value) {
                num = 250;
              }
              obj1 = { opacity: null };
              obj5 = { duration: num, easing: tmp3(tmp4[17]).Easing.linear };
              fn = function t(arg0) {
                let tmp = arg0;
                if (arg0) {
                  tmp = 0 === sharedValue.get();
                }
                if (tmp) {
                  tmp = closure_1_0 === transitionState(isDismissable[18]).TransitionStates.YEETED;
                }
                if (tmp) {
                  transitionState(isDismissable[17]).runOnJS(cleanUp)();
                  const obj = transitionState(isDismissable[17]);
                }
              };
              obj6 = {
                visible: tmp,
                transitionState,
                TransitionStates: tmp3(tmp4[18]).TransitionStates,
                runOnJS: tmp3(tmp4[17]).runOnJS,
                cleanUp,
              };
              fn.__closure = obj6;
              fn.__workletHash = 9063471386550;
              fn.__initData = closure_17;
              obj1.opacity = obj.withTiming(value1, obj5, "animate-always", fn);
              return obj1;
            }
          }
        } else {
          class F {
            constructor() {
              if (isDismissable) {
                tmp = closure_1;
                tmp2 = closure_2;
                obj = closure_1(closure_2[22]);
                closeResult = obj.close();
              }
              return true;
            }
          }
        }
        cleanUp(isDismissable[23])(F);
        if (cResult[8] !== renderAlert) {
          class F {
            constructor() {
              if (isDismissable) {
                tmp = closure_1;
                tmp2 = closure_2;
                obj = closure_1(closure_2[22]);
                closeResult = obj.close();
              }
              return true;
            }
          }
          tmp21[0] = tmp18(isDismissable[22]).close;
          const renderAlertResult = renderAlert(tmp21);
          class I {
            constructor() {
              tmp = closure_4;
              tmp3 = closure_0;
              tmp4 = closure_2;
              value = closure_4.get();
              obj = closure_0(closure_2[19]);
              value1 = closure_4.get();
              num = 100;
              if (1 === value) {
                num = 250;
              }
              obj1 = { opacity: null };
              obj5 = { duration: num, easing: tmp3(tmp4[17]).Easing.linear };
              fn = function t(arg0) {
                let tmp = arg0;
                if (arg0) {
                  tmp = 0 === sharedValue.get();
                }
                if (tmp) {
                  tmp = closure_1_0 === transitionState(isDismissable[18]).TransitionStates.YEETED;
                }
                if (tmp) {
                  transitionState(isDismissable[17]).runOnJS(cleanUp)();
                  const obj = transitionState(isDismissable[17]);
                }
              };
              obj6 = {
                visible: tmp,
                transitionState,
                TransitionStates: tmp3(tmp4[18]).TransitionStates,
                runOnJS: tmp3(tmp4[17]).runOnJS,
                cleanUp,
              };
              fn.__closure = obj6;
              fn.__workletHash = 9063471386550;
              fn.__initData = closure_17;
              obj1.opacity = obj.withTiming(value1, obj5, "animate-always", fn);
              return obj1;
            }
          }
          cResult[9] = renderAlertResult;
        } else {
          class F {
            constructor() {
              if (isDismissable) {
                tmp = closure_1;
                tmp2 = closure_2;
                obj = closure_1(closure_2[22]);
                closeResult = obj.close();
              }
              return true;
            }
          }
        }
        if (cResult[10] !== tmp4.alertContentWrapper) {
          class F {
            constructor() {
              if (isDismissable) {
                tmp = closure_1;
                tmp2 = closure_2;
                obj = closure_1(closure_2[22]);
                closeResult = obj.close();
              }
              return true;
            }
          }
          let items1 = [sharedValue.absoluteFill, tmp4.alertContentWrapper];
          class I {
            constructor() {
              tmp = closure_4;
              tmp3 = closure_0;
              tmp4 = closure_2;
              value = closure_4.get();
              obj = closure_0(closure_2[19]);
              value1 = closure_4.get();
              num = 100;
              if (1 === value) {
                num = 250;
              }
              obj1 = { opacity: null };
              obj5 = { duration: num, easing: tmp3(tmp4[17]).Easing.linear };
              fn = function t(arg0) {
                let tmp = arg0;
                if (arg0) {
                  tmp = 0 === sharedValue.get();
                }
                if (tmp) {
                  tmp = closure_1_0 === transitionState(isDismissable[18]).TransitionStates.YEETED;
                }
                if (tmp) {
                  transitionState(isDismissable[17]).runOnJS(cleanUp)();
                  const obj = transitionState(isDismissable[17]);
                }
              };
              obj6 = {
                visible: tmp,
                transitionState,
                TransitionStates: tmp3(tmp4[18]).TransitionStates,
                runOnJS: tmp3(tmp4[17]).runOnJS,
                cleanUp,
              };
              fn.__closure = obj6;
              fn.__workletHash = 9063471386550;
              fn.__initData = closure_17;
              obj1.opacity = obj.withTiming(value1, obj5, "animate-always", fn);
              return obj1;
            }
          }
          cResult[10] = tmp4.alertContentWrapper;
          cResult[11] = items1;
          const tmp23 = items1;
        } else {
          class F {
            constructor() {
              if (isDismissable) {
                tmp = closure_1;
                tmp2 = closure_2;
                obj = closure_1(closure_2[22]);
                closeResult = obj.close();
              }
              return true;
            }
          }
        }
        if (cResult[12] === animatedStyle) {
          class F {
            constructor() {
              if (isDismissable) {
                tmp = closure_1;
                tmp2 = closure_2;
                obj = closure_1(closure_2[22]);
                closeResult = obj.close();
              }
              return true;
            }
          }
          if (cResult[15] === F) {
            class F {
              constructor() {
                if (isDismissable) {
                  tmp = closure_1;
                  tmp2 = closure_2;
                  obj = closure_1(closure_2[22]);
                  closeResult = obj.close();
                }
                return true;
              }
            }
            if (cResult[18] === tmp20) {
              class F {
                constructor() {
                  if (isDismissable) {
                    tmp = closure_1;
                    tmp2 = closure_2;
                    obj = closure_1(closure_2[22]);
                    closeResult = obj.close();
                  }
                  return true;
                }
              }
              if (cResult[21] === tmp27) {
                class F {
                  constructor() {
                    if (isDismissable) {
                      tmp = closure_1;
                      tmp2 = closure_2;
                      obj = closure_1(closure_2[22]);
                      closeResult = obj.close();
                    }
                    return true;
                  }
                }
              }
              let obj4 = { style: null, children: null };
              class I {
                constructor() {
                  tmp = closure_4;
                  tmp3 = closure_0;
                  tmp4 = closure_2;
                  value = closure_4.get();
                  obj = closure_0(closure_2[19]);
                  value1 = closure_4.get();
                  num = 100;
                  if (1 === value) {
                    num = 250;
                  }
                  obj1 = { opacity: null };
                  obj5 = { duration: num, easing: tmp3(tmp4[17]).Easing.linear };
                  fn = function t(arg0) {
                    let tmp = arg0;
                    if (arg0) {
                      tmp = 0 === sharedValue.get();
                    }
                    if (tmp) {
                      tmp = closure_1_0 === transitionState(isDismissable[18]).TransitionStates.YEETED;
                    }
                    if (tmp) {
                      transitionState(isDismissable[17]).runOnJS(cleanUp)();
                      const obj = transitionState(isDismissable[17]);
                    }
                  };
                  obj6 = {
                    visible: tmp,
                    transitionState,
                    TransitionStates: tmp3(tmp4[18]).TransitionStates,
                    runOnJS: tmp3(tmp4[17]).runOnJS,
                    cleanUp,
                  };
                  fn.__closure = obj6;
                  fn.__workletHash = 9063471386550;
                  fn.__initData = closure_17;
                  obj1.opacity = obj.withTiming(value1, obj5, "animate-always", fn);
                  return obj1;
                }
              }
              const items2 = [tmp27, tmp32];
              obj4.children = items2;
              const tmp37 = closure_13(tmp18(isDismissable[24]), obj4);
              cResult[21] = tmp27;
              cResult[22] = tmp32;
              cResult[23] = tmp23;
              cResult[24] = tmp37;
            }
            let obj5 = { style: null, children: null };
            class I {
              constructor() {
                tmp = closure_4;
                tmp3 = closure_0;
                tmp4 = closure_2;
                value = closure_4.get();
                obj = closure_0(closure_2[19]);
                value1 = closure_4.get();
                num = 100;
                if (1 === value) {
                  num = 250;
                }
                obj1 = { opacity: null };
                obj5 = { duration: num, easing: tmp3(tmp4[17]).Easing.linear };
                fn = function t(arg0) {
                  let tmp = arg0;
                  if (arg0) {
                    tmp = 0 === sharedValue.get();
                  }
                  if (tmp) {
                    tmp = closure_1_0 === transitionState(isDismissable[18]).TransitionStates.YEETED;
                  }
                  if (tmp) {
                    transitionState(isDismissable[17]).runOnJS(cleanUp)();
                    const obj = transitionState(isDismissable[17]);
                  }
                };
                obj6 = {
                  visible: tmp,
                  transitionState,
                  TransitionStates: tmp3(tmp4[18]).TransitionStates,
                  runOnJS: tmp3(tmp4[17]).runOnJS,
                  cleanUp,
                };
                fn.__closure = obj6;
                fn.__workletHash = 9063471386550;
                fn.__initData = closure_17;
                obj1.opacity = obj.withTiming(value1, obj5, "animate-always", fn);
                return obj1;
              }
            }
            obj5.children = tmp20;
            const tmp34 = closure_12(tmp18(isDismissable[17]).View, obj5);
            cResult[18] = tmp20;
            cResult[19] = animatedStyle1;
            cResult[20] = tmp34;
          }
          class I {
            constructor() {
              tmp = closure_4;
              tmp3 = closure_0;
              tmp4 = closure_2;
              value = closure_4.get();
              obj = closure_0(closure_2[19]);
              value1 = closure_4.get();
              num = 100;
              if (1 === value) {
                num = 250;
              }
              obj1 = { opacity: null };
              obj5 = { duration: num, easing: tmp3(tmp4[17]).Easing.linear };
              fn = function t(arg0) {
                let tmp = arg0;
                if (arg0) {
                  tmp = 0 === sharedValue.get();
                }
                if (tmp) {
                  tmp = closure_1_0 === transitionState(isDismissable[18]).TransitionStates.YEETED;
                }
                if (tmp) {
                  transitionState(isDismissable[17]).runOnJS(cleanUp)();
                  const obj = transitionState(isDismissable[17]);
                }
              };
              obj6 = {
                visible: tmp,
                transitionState,
                TransitionStates: tmp3(tmp4[18]).TransitionStates,
                runOnJS: tmp3(tmp4[17]).runOnJS,
                cleanUp,
              };
              fn.__closure = obj6;
              fn.__workletHash = 9063471386550;
              fn.__initData = closure_17;
              obj1.opacity = obj.withTiming(value1, obj5, "animate-always", fn);
              return obj1;
            }
          }
          tmp30[4] = F;
          tmp30[5] = tmp24;
          const tmp31 = closure_12(closure_5, tmp30);
          cResult[15] = F;
          cResult[16] = tmp24;
          cResult[17] = tmp31;
        }
        const obj6 = { style: null };
        const items3 = [tmp4.alertWrapper, animatedStyle];
        obj6.style = items3;
        const tmp26 = closure_12(cleanUp(isDismissable[17]).View, obj6);
        cResult[12] = animatedStyle;
        cResult[13] = tmp4.alertWrapper;
        cResult[14] = tmp26;
        const tmpResult6 = transitionState(isDismissable[17]);
      }
      class D {
        constructor() {
          tmp = closure_4;
          num = 1;
          if (transitionState === closure_0(closure_2[18]).TransitionStates.YEETED) {
            num = 0;
          }
          result = closure_4.set(num);
          return;
        }
      }
      const items4 = [transitionState, sharedValue];
      cResult[2] = transitionState;
      cResult[3] = sharedValue;
      cResult[4] = D;
      cResult[5] = items4;
      tmp11 = items4;
      tmp10 = D;
      const tmpResult4 = transitionState(isDismissable[17]);
    }
  : function AlertWrapper(item) {
      item = item.item;
      const isDismissable = item.isDismissable;
      const transitionState = item.transitionState;
      const cleanUp = item.cleanUp;
      let sharedValue;
      ({ renderAlert, renderKey } = item);
      let tmp = closure_15();
      let items = [AccessibilityStore];
      const stateFromStores = isDismissable(cleanUp[16]).useStateFromStores(
        items,
        () => useReducedMotion.useReducedMotion,
      );
      let obj = isDismissable(cleanUp[16]);
      let num = 0;
      if (transitionState === isDismissable(cleanUp[18]).TransitionStates.MOUNTED) {
        num = 1;
      }
      sharedValue = isDismissable(cleanUp[17]).useSharedValue(num);
      let items1 = [transitionState, sharedValue];
      const effect = stateFromStores.useEffect(() => {
        let num = 1;
        if (transitionState === native.TransitionStates.YEETED) {
          num = 0;
        }
        const result = sharedValue.set(num);
      }, items1);
      let obj2 = isDismissable(cleanUp[17]);
      let fn = function b() {
        value = sharedValue.get();
        value2 = sharedValue.get();
        let num = 100;
        if (1 === value) {
          num = 250;
        }
        const obj2 = { opacity: null };
        let obj = timing;
        const fn = function t(arg0) {
          let tmp = arg0;
          if (arg0) {
            tmp = 0 === sharedValue.get();
          }
          if (tmp) {
            tmp = transitionState === isDismissable(cleanUp[18]).TransitionStates.YEETED;
          }
          if (tmp) {
            isDismissable(cleanUp[17]).runOnJS(closure_1_2)();
            const obj = isDismissable(cleanUp[17]);
          }
        };
        const obj3 = { duration: num, easing: ReanimatedRexport.Easing.linear };
        fn.__closure = {
          visible: sharedValue,
          transitionState,
          TransitionStates: native.TransitionStates,
          runOnJS: ReanimatedRexport.runOnJS,
          cleanUp,
        };
        fn.__workletHash = 1014175478769;
        fn.__initData = __initData;
        obj2.opacity = obj.withTiming(value2, obj3, "animate-always", fn);
        return obj2;
      };
      const tmp2Result = isDismissable(cleanUp[17]);
      fn.__closure = {
        visible: sharedValue,
        withTiming: isDismissable(cleanUp[19]).withTiming,
        Easing: isDismissable(cleanUp[17]).Easing,
        transitionState,
        TransitionStates: isDismissable(cleanUp[18]).TransitionStates,
        runOnJS: isDismissable(cleanUp[17]).runOnJS,
        cleanUp,
      };
      fn.__workletHash = 2573956772599;
      fn.__initData = __initData4;
      const animatedStyle = tmp2Result.useAnimatedStyle(fn);
      let obj3 = {
        visible: sharedValue,
        withTiming: isDismissable(cleanUp[19]).withTiming,
        Easing: isDismissable(cleanUp[17]).Easing,
        transitionState,
        TransitionStates: isDismissable(cleanUp[18]).TransitionStates,
        runOnJS: isDismissable(cleanUp[17]).runOnJS,
        cleanUp,
      };
      const fn2 = function v() {
        const obj = { transform: null };
        if (stateFromStores) {
          const items = [{ scale: 1 }];
          obj.transform = items;
          let tmp13 = obj;
        } else {
          if (1 === sharedValue.get()) {
            let withSpringResult = spring.withSpring(1, springPresets.SUBTLE_SPRING);
          } else {
            const obj3 = { duration: 100, easing: null };
            const Easing = ReanimatedRexport.Easing;
            obj3.easing = Easing.in(ReanimatedRexport.Easing.ease);
            withSpringResult = timing.withTiming(0, obj3);
          }
          const obj5 = { scale: withSpringResult };
          const items1 = [obj5];
          obj.transform = items1;
          tmp13 = obj;
        }
        return tmp13;
      };
      const tmp2Result2 = isDismissable(cleanUp[17]);
      fn2.__closure = {
        useReducedMotion: stateFromStores,
        visible: sharedValue,
        withSpring: isDismissable(cleanUp[20]).withSpring,
        SUBTLE_SPRING: isDismissable(cleanUp[21]).SUBTLE_SPRING,
        withTiming: isDismissable(cleanUp[19]).withTiming,
        Easing: isDismissable(cleanUp[17]).Easing,
      };
      fn2.__workletHash = 3013477716479;
      fn2.__initData = __initData5;
      const items2 = [isDismissable];
      const animatedStyle1 = tmp2Result2.useAnimatedStyle(fn2);
      const callback = stateFromStores.useCallback(() => {
        if (isDismissable) {
          actions_AlertActionCreatorsDefault.close();
        }
        return true;
      }, items2);
      transitionState(cleanUp[23])(callback);
      let obj4 = {
        useReducedMotion: stateFromStores,
        visible: sharedValue,
        withSpring: isDismissable(cleanUp[20]).withSpring,
        SUBTLE_SPRING: isDismissable(cleanUp[21]).SUBTLE_SPRING,
        withTiming: isDismissable(cleanUp[19]).withTiming,
        Easing: isDismissable(cleanUp[17]).Easing,
      };
      let obj5 = { onClose: transitionState(cleanUp[22]).close };
      const obj6 = { dialogKey: renderKey, onDismiss: callback, children: null };
      const obj7 = { style: null, children: null };
      const items3 = [sharedValue.absoluteFill, tmp.alertContentWrapper];
      obj7.style = items3;
      const obj8 = {
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        accessibilityRole: "none",
        accessible: false,
        onPress: callback,
        children: null,
      };
      const renderAlertResult = renderAlert({ onClose: transitionState(cleanUp[22]).close });
      const obj9 = { style: null };
      const items4 = [tmp.alertWrapper, animatedStyle];
      obj9.style = items4;
      obj8.children = closure_12(transitionState(cleanUp[17]).View, obj9);
      const items5 = [
        closure_12(closure_5, obj8),
        closure_12(transitionState(cleanUp[17]).View, { style: animatedStyle1, children: renderAlertResult }),
      ];
      obj7.children = items5;
      obj6.children = closure_13(transitionState(cleanUp[24]), obj7);
      return closure_12(isDismissable(cleanUp[25]).Dialog, obj6);
    };
function renderAlertItem(arg0, item, transitionState, cleanUp) {
  return __initData(closure_22, { item, transitionState, cleanUp }, arg0);
}
let closure_26 = Object.freeze({ renderAlert: "toCharArray$esjava$1", renderKey: "T", props: "code" });
ReactCompilerGating = fn(558);
const tmp7 = new ModalRegistryDefault(items1);
const size = fn(2);
let result = size.fileFinishedImporting("components_native/common/Alerts.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function Alerts() {
        const cResult = require("c").c(12);
        _require = noop.useRef(closure_26);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [AlertStore];
          HermesBuiltin.arraySpread(openModal.getStores(), 1);
          let fn = function s() {
            const _alert = AlertStore.getAlert();
            if (null != _alert) {
              const obj2 = { renderAlert: _alert, renderKey: AlertStore.getAlertKey(), props: null };
              return obj2;
            } else {
              openModal = openModal.getOpenModal();
              if (null != openModal) {
                const props = openModal.props;
                const _HermesInternal = HermesInternal;
                const combined = "alert-registery-" + openModal.key;
                if (combined === ref.current.renderKey) {
                  if (discord_common_shallowEqualDefault(props, ref.current.props)) {
                    let fn = ref.current.renderAlert;
                  }
                  const obj3 = { renderAlert: fn, renderKey: combined, props: openModal.props };
                  return obj3;
                }
                fn = (arg0) => {
                  const merged = Object.assign(arg0);
                  const merged1 = Object.assign(props);
                  return <openModal.component />;
                };
              } else {
                return { renderAlert: "toCharArray$esjava$1", renderKey: "T", props: "code" };
              }
            }
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp4 = items;
          tmp5 = fn;
        } else {
          [tmp4, tmp5] = cResult;
        }
        const obj = require("c");
        const stateFromStoresObject = require("initialize").useStateFromStoresObject(tmp4, tmp5);
        if (cResult[2] !== stateFromStoresObject) {
          const fn2 = function c() {
            closure_0.current = stateFromStoresObject;
          };
          cResult[2] = stateFromStoresObject;
          cResult[3] = fn2;
          let tmp11 = fn2;
        } else {
          tmp11 = cResult[3];
        }
        const effect = noop.useEffect(tmp11);
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [AlertStore];
          class S {
            constructor() {
              return closure_1_11.isAlertDismissable();
            }
          }
          cResult[4] = items1;
          cResult[5] = S;
          let tmp14 = S;
          let tmp13 = items1;
        } else {
          tmp13 = cResult[4];
          tmp14 = cResult[5];
        }
        const tmpResult = require("initialize");
        const stateFromStores = require("initialize").useStateFromStores(tmp13, tmp14);
        ({ renderAlert, renderKey } = stateFromStoresObject);
        if (cResult[6] === stateFromStores) {
          if (cResult[7] === renderAlert) {
            if (cResult[8] === renderKey) {
              if (cResult[10] !== cResult[9]) {
                let obj3 = { items: tmp17, renderItem: null, getItemKey: null, wrapChildren: null };
                class S {
                  constructor() {
                    return closure_1_11.isAlertDismissable();
                  }
                }
                obj3.renderItem = renderAlertItem;
                obj3.getItemKey = getAlertItemKey;
                obj3.wrapChildren = wrapAlerts;
                const tmp22 = closure_12(tmp(4788).TransitionGroup, obj3);
                cResult[10] = tmp17;
                cResult[11] = tmp22;
                let tmp18 = tmp22;
              } else {
                tmp18 = cResult[11];
              }
              return tmp18;
            }
          }
        }
        if (null != renderAlert) {
          const obj4 = { renderAlert, renderKey, isDismissable: null };
          class S {
            constructor() {
              return closure_1_11.isAlertDismissable();
            }
          }
          const items2 = [obj4];
          let items3 = items2;
        } else {
          items3 = [];
        }
        cResult[6] = stateFromStores;
        cResult[7] = renderAlert;
        cResult[8] = renderKey;
        cResult[9] = items3;
        const tmpResult2 = require("initialize");
      }
    : function Alerts() {
        _require = renderAlert.useRef(closure_26);
        let items = [AlertStore, ...closure_14.getStores()];
        const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
          const _alert = AlertStore.getAlert();
          if (null != _alert) {
            const obj2 = { renderAlert: _alert, renderKey: AlertStore.getAlertKey(), props: null };
            return obj2;
          } else {
            openModal = openModal.getOpenModal();
            if (null != openModal) {
              const props = openModal.props;
              const _HermesInternal = HermesInternal;
              const combined = "alert-registery-" + openModal.key;
              if (combined === ref.current.renderKey) {
                if (discord_common_shallowEqualDefault(props, ref.current.props)) {
                  let fn = ref.current.renderAlert;
                }
                const obj3 = { renderAlert: fn, renderKey: combined, props: openModal.props };
                return obj3;
              }
              fn = (arg0) => {
                const merged = Object.assign(arg0);
                const merged1 = Object.assign(props);
                return <openModal.component />;
              };
            } else {
              return { renderAlert: "toCharArray$esjava$1", renderKey: "T", props: "code" };
            }
          }
        });
        const effect = renderAlert.useEffect(() => {
          closure_0.current = stateFromStoresObject;
        });
        let obj = require("initialize");
        let items1 = [AlertStore];
        stateFromStores = require("initialize").useStateFromStores(items1, () => alertDismissable.isAlertDismissable());
        renderAlert = stateFromStoresObject.renderAlert;
        const renderKey = stateFromStoresObject.renderKey;
        const items2 = [renderAlert, renderKey, stateFromStores];
        const memo = renderAlert.useMemo(() => {
          if (null != renderAlert) {
            const obj = { renderAlert: tmp, renderKey, isDismissable: stateFromStores };
            const items = [obj];
            let items1 = items;
          } else {
            items1 = [];
          }
          return items1;
        }, items2);
        return closure_12(require("native").TransitionGroup, {
          items: memo,
          renderItem: renderAlertItem,
          getItemKey: getAlertItemKey,
          wrapChildren: wrapAlerts,
        });
      },
);
