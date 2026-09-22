// discord_app/design/components/AlertModal/native/AlertModal.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import KeyboardManagerUtils from "../../../../utils/native/KeyboardManagerUtils.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import useAlertStore2 from "useAlertStore.native.tsx";
import OverlayViewDefault from "../../../void/OverlayView/native/OverlayView.tsx";
import Dialog from "../../Dialog/native/Dialog.native.tsx";
import setAccessibilityFocus from "../../../../modules/a11y/native/setAccessibilityFocus.android.tsx";
import Stack_Stack from "../../Stack/native/Stack.native.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import _toArray from "../../../../../_runtime/00718__toArray.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function getAlertModalItemKey(key) {
  return key.key;
}
function dismissTopAlert() {
  const useAlertStore = require("useAlertStore").useAlertStore;
  const arr = _toArray(useAlertStore.getState().alerts);
  const first = arr[0];
  _require = arr.slice(1);
  let tmp4 = null != first;
  if (tmp4) {
    tmp4 = false === first.dismissable;
  }
  if (!tmp4) {
    let key;
    if (first != null) {
      key = first.key;
    }
    tmp(5111).dismissAlert(key);
    const tmpResult = tmp(5111);
    tmp(1248).batchUpdates(() => {
      const useAlertStore = context(context2[10]).useAlertStore;
      return useAlertStore.setState({ alerts });
    });
    const tmpResult2 = tmp(1248);
  }
}
function AlertModalBackdrop() {
  const context = noop.useContext(closure_16);
  const tmp2 = _slicedToArray(useSharedAnimationState(), 2);
  const sharedTransitionState = tmp2[0];
  dependencyMap = tmp4;
  const alertStore = context(5111).useAlertStore((arg0) => {
    const first = arg0.alerts[0];
    let dismissable;
    if (first != null) {
      dismissable = first.dismissable;
    }
    return false !== dismissable;
  });
  let obj = context(5111);
  let fn = function t() {
    value = closure_2.get();
    if (typeof withAlertModalSpring === "function") {
      let obj = { opacity: null };
      const fn = (arg0) => {
        let tmp = true === arg0;
        if (tmp) {
          tmp = 0 === closure_1_2.get();
        }
        if (tmp) {
          value = sharedTransitionState.get();
          tmp = value === context(closure_2[9]).TransitionStates.YEETED;
        }
        if (tmp) {
          context(closure_2[11]).runOnJS(closure_1_0)();
          const obj = context(closure_2[11]);
        }
      };
      const obj2 = spring;
      obj.opacity = obj2.withSpring(value, obj3, "animate-always", fn);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  let obj2 = context(4493);
  fn.__closure = {
    withAlertModalSpring,
    sharedVisible: tmp2[1],
    sharedTransitionState,
    TransitionStates: context(4467).TransitionStates,
    runOnJS: context(4493).runOnJS,
    cleanUp: context,
  };
  fn.__workletHash = 4470729133936;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj4 = { blur: "strong", style: animatedStyle, onDismiss: null, accessibilityLabel: null };
  let tmp10 = null;
  if (alertStore) {
    tmp10 = dismissTopAlert;
  }
  obj4.onDismiss = tmp10;
  const intl = tmp5(1115).intl;
  obj4.accessibilityLabel = intl.string(context(1115).t.Xkfav5);
  return closure_10(context(5173).Backdrop, obj4);
}
class AlertModal {
  constructor(arg0) {
    ({ content, actions } = global);
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    enabled = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    top = undefined;
    bottom = undefined;
    height = undefined;
    ({ header, title, extraContent } = global);
    context = closure_6.useContext(closure_16);
    closure_0 = context;
    context1 = closure_6.useContext(closure_17);
    closure_1 = context1;
    tmp3 = closure_13();
    context2 = closure_6.useContext(closure_19);
    closure_2 = context2;
    tmp5 = closure_0;
    tmp6 = closure_2;
    enabled = closure_6.useContext(closure_0(closure_2[18]).AccessibilityPreferencesContext).reducedMotion.enabled;
    ref = closure_6.useRef(null);
    closure_4 = ref;
    obj = closure_0(closure_2[11]);
    sharedValue = obj.useSharedValue(context1);
    closure_5 = sharedValue;
    tmp9 = closure_4(useSharedAnimationState(), 2);
    first = tmp9[0];
    closure_6 = first;
    tmp11 = tmp9[1];
    closure_7 = tmp11;
    rect = closure_1(closure_2[19])();
    top = rect.top;
    bottom = rect.bottom;
    items = [];
    items[0] = context1;
    effect = closure_6.useEffect(() => {
      if (0 === context1) {
        const obj2 = { ref, delay: 300 };
        const result = setAccessibilityFocus.setAccessibilityFocus(obj2);
      }
    }, items);
    height = closure_1(closure_2[21])().height;
    obj2 = closure_0(closure_2[11]);
    class B {
      constructor() {
        diff = height - 32;
        tmp3 = withAlertModalSpring;
        obj = closure_7;
        result = 2 * Math.max(top, bottom);
        value = closure_7.get();
        if (typeof withAlertModalSpring === "function") {
          obj1 = { position: "absolute", opacity: null, zIndex: null, height: null, maxHeight: null, transform: null };
          tmp5 = closure_0;
          tmp6 = closure_2;
          fn = (arg0) => {
            let tmp = true === arg0;
            if (tmp) {
              tmp = 0 === closure_1_7.get();
            }
            if (tmp) {
              value = sharedTransitionState.get();
              tmp = value === context(context2[9]).TransitionStates.YEETED;
            }
            if (tmp) {
              context(context2[11]).runOnJS(closure_1_0)();
              const obj = context(context2[11]);
            }
          };
          obj3 = closure_0(closure_2[25]);
          tmp7 = closure_14;
          str = "animate-always";
          tmp8 = obj3;
          tmp9 = value;
          tmp10 = closure_14;
          str2 = "animate-always";
          obj1.opacity = obj3.withSpring(value, closure_14, "animate-always", fn);
          obj4 = closure_5;
          num = 10;
          obj1.zIndex = 10 - closure_5.get();
          num2 = 0;
          str3 = "auto";
          if (closure_5.get() > 0) {
            tmp11 = closure_2;
            str3 = closure_2.get();
          }
          obj1.height = str3;
          obj1.maxHeight = diff - result;
          tmp12 = enabled;
          if (enabled) {
            items = [];
          } else {
            num3 = 0.7;
            num4 = 1;
            if (1 === obj.get()) {
              num5 = 0.1;
              num3 = 1 - 0.1 * obj4.get();
            }
            if (typeof tmp3 === "function") {
              obj9 = { scale: null };
              tmp5Result = tmp5(tmp6[25]);
              tmp13 = tmp5Result;
              tmp14 = num3;
              tmp15 = tmp7;
              str4 = "animate-always";
              obj9.scale = tmp5Result.withSpring(num3, tmp7, "animate-always", undefined);
              items = [,];
              items[0] = obj9;
              if (1 === obj.get()) {
                result1 = [0, -20, -34][obj4.get(obj4)];
                tmp18 = null;
                if (result1 == null) {
                  num7 = -12;
                  result1 = -12 * obj.get();
                }
                diff1 = result1;
              } else {
                num6 = 50;
                diff1 = 50 - 50 * obj4.get();
              }
              if (typeof tmp3 === "function") {
                obj10 = { translateY: null };
                tmp5Result1 = tmp5(tmp6[25]);
                tmp19 = tmp5Result1;
                tmp20 = diff1;
                tmp21 = tmp7;
                str5 = "animate-always";
                obj10.translateY = tmp5Result1.withSpring(diff1, tmp7, "animate-always", undefined);
                items[1] = obj10;
              } else {
                str8 = "Trying to call a non-function";
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              str7 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          }
          obj1.transform = items;
          return obj1;
        } else {
          str6 = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
    }
    obj1 = {
      sharedVisible: tmp11,
      sharedTransitionState: first,
      TransitionStates: closure_0(closure_2[9]).TransitionStates,
      runOnJS: closure_0(closure_2[11]).runOnJS,
      cleanUp: context,
      windowHeight: height,
      ALERT_MODAL_MARGIN: 16,
      safeAreaTop: top,
      safeAreaBottom: bottom,
      withAlertModalSpring,
      sharedIndex: sharedValue,
      sharedTopHeight: context2,
      useReducedMotion: enabled,
    };
    B.__closure = obj1;
    B.__workletHash = 655123755546;
    B.__initData = closure_24;
    items1 = [,];
    items1[0] = context1;
    items1[1] = sharedValue;
    animatedStyle = obj2.useAnimatedStyle(B);
    layoutEffect = closure_6.useLayoutEffect(() => {
      const result = sharedValue.set(context1);
    }, items1);
    tmp15 = closure_1(closure_2[22])(() => {
      let useAlertStore = context(context2[10]).useAlertStore;
      const arr = sharedValue(useAlertStore.getState().alerts);
      const first = arr[0];
      context = arr.slice(1);
      let tmp4 = null != first;
      if (tmp4) {
        tmp4 = false === first.dismissable;
      }
      if (!tmp4) {
        let key;
        if (first != null) {
          key = first.key;
        }
        tmp(context2[10]).dismissAlert(key);
        const tmpResult = tmp(context2[10]);
        tmp(context2[15]).batchUpdates(() => {
          const useAlertStore = context(context2[10]).useAlertStore;
          return useAlertStore.setState({ alerts });
        });
        const tmpResult2 = tmp(context2[15]);
      }
      return true;
    });
    tmp16 = height;
    str = "no-hide-descendants";
    if (0 === context1) {
      str = "auto";
    }
    obj10 = {
      importantForAccessibility: str,
      accessibilityElementsHidden: 0 !== context1,
      style: null,
      onLayout(nativeEvent) {
        const result = context2.set(nativeEvent.nativeEvent.layout.height);
      },
      children: null,
    };
    items2 = [,];
    items2[0] = tmp3.content;
    items2[1] = animatedStyle;
    obj10.style = items2;
    obj11 = { style: tmp3.overflow, children: null };
    tmp19 = jsxs;
    tmp17 = bottom;
    tmp18 = closure_7;
    items3 = [, , ,];
    items3[0] = header;
    obj12 = { spacing: 8, style: null, children: null };
    items4 = [];
    items4[0] = tmp3.body;
    obj12.style = items4;
    items5 = [,];
    items5[0] = tmp16(tmp5(tmp6[24]).Text, {
      ref,
      variant: "heading-lg/bold",
      accessibilityRole: "header",
      color: "mobile-text-heading-primary",
      children: title,
    });
    tmp16Result = null;
    if (null != content) {
      str2 = "";
      tmp16Result = null;
      if ("" !== content) {
        obj13 = { variant: "text-md/medium", color: "text-default", style: null, children: null };
        obj13.style = tmp3.contentText;
        obj13.children = content;
        tmp16Result = tmp16(tmp5(tmp6[24]).Text, obj13);
      }
    }
    items5[1] = tmp16Result;
    obj12.children = items5;
    items3[1] = tmp19(tmp5(tmp6[23]).Stack, obj12);
    items3[2] = extraContent;
    tmp16Result1 = null;
    if (null != actions) {
      tmp22 = AlertActions;
      obj14 = { children: null };
      obj14.children = actions;
      tmp16Result1 = tmp16(AlertActions, obj14);
    }
    obj15 = { alwaysBounceVertical: false, children: null };
    items3[3] = tmp16Result1;
    obj11.children = tmp19(tmp5(tmp6[23]).Stack, { spacing: 24, children: items3 });
    obj15.children = tmp16(tmp18, obj11);
    obj10.children = tmp16(tmp17, obj15);
    return tmp16(closure_1(closure_2[11]).View, obj10);
  }
}
function useSharedAnimationState() {
  const context = noop.useContext(closure_15);
  const context1 = noop.useContext(closure_16);
  let num = 0;
  if (context === context(sharedValue[9]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = context(sharedValue[11]).useSharedValue(num);
  const obj2 = context(sharedValue[11]);
  const sharedValue1 = context(sharedValue[11]).useSharedValue(context);
  const items = [sharedValue, context, sharedValue1];
  const layoutEffect = noop.useLayoutEffect(() => {
    const result = sharedValue1.set(context);
  }, items);
  const tmp3Result = context(sharedValue[11]);
  const fn = function n() {
    return sharedValue1.get();
  };
  fn.__closure = { sharedTransitionState: sharedValue1 };
  fn.__workletHash = 14603144870585;
  fn.__initData = __initData3;
  const fn2 = function t(arg0) {
    if (arg0 === native.TransitionStates.YEETED) {
      if (1 === sharedValue.get()) {
        const result = sharedValue.set(0);
      } else {
        ReanimatedRexport.runOnJS(context1)();
        const tmpResult = ReanimatedRexport;
      }
    } else {
      const result1 = sharedValue.set(1);
    }
  };
  const tmp3Result2 = context(sharedValue[11]);
  fn2.__closure = {
    TransitionStates: context(sharedValue[9]).TransitionStates,
    sharedVisible: sharedValue,
    runOnJS: context(sharedValue[11]).runOnJS,
    cleanUp: context1,
  };
  fn2.__workletHash = 9486923983340;
  fn2.__initData = __initData4;
  const animatedReaction = tmp3Result2.useAnimatedReaction(fn, fn2);
  const items1 = [sharedValue1, sharedValue];
  return items1;
}
class AlertActions {
  constructor(arg0) {
    return jsx(closure_0(closure_2[23]).Stack, { spacing: 12, children: global.children });
  }
}
class AlertActionButton {
  constructor(arg0) {
    ({ onPress: closure_0, loading } = global);
    merged = Object.assign(global, Object.assign({ onPress: 0, loading: 0 }));
    closure_1 = undefined;
    closure_2 = undefined;
    tmp2 = closure_4(closure_6.useState(false), 2);
    closure_1 = tmp2[1];
    closure_2 = closure_6.useContext(closure_18);
    tmp3 = jsx;
    obj = {};
    merged1 = Object.assign(merged);
    obj.grow = true;
    if (loading == null) {
      loading = tmp2[0];
    }
    obj.loading = loading;
    closure_0 = undefined;
    closure_0 = closure_3(async (arg0) => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let tmp11;
              if (closure_0 != null) {
                tmp11 = closure_0(closure_0);
              }
              if (null != tmp11) {
                if (tmp11 instanceof Promise) {
                  tmp3(true);
                  c3 = 1;
                  c2 = 2;
                  c4 = 1;
                  const obj5 = { value: tmp11, done: false };
                  return obj5;
                }
              }
              closure_0(dependencyMap[10]).dismissAlert(c2);
              c4 = 3;
              obj3 = closure_0(dependencyMap[10]);
            }
          } else if (1 === tmp7) {
            c3 = 0;
            tmp3(false);
            c4 = 3;
            const obj6 = { value: undefined, done: true };
            return obj6;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 !== 2) {
            c3 = 0;
          }
          c3 = 0;
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } catch (tmp19) {
          if (tmp4 === c3) {
            c4 = tmp2;
            throw tmp19;
          } else {
            c2 = tmp;
          }
        }
      }
    });
    obj.onPress = function () {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    return tmp3(closure_0(closure_2[26]).Button, obj);
  }
}
get_ActivityIndicator = fn(17);
({ View: closure_7, StyleSheet: closure_8, ScrollView: closure_9 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4757);
let obj = {
  root: { flex: 1, position: "relative", justifyContent: "center", alignItems: "center", paddingHorizontal: 16 },
  content: null,
  overflow: null,
  body: null,
  contentText: null,
};
let size = {
  backgroundColor: nativeDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT,
  margin: 16,
  width: "100%",
  maxWidth: 400,
  height: "100%",
  borderRadius: nativeDefault.radii.xl,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
let merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
obj.content = size;
obj.overflow = { width: "100%", height: "100%", overflow: "hidden", padding: 24, position: "relative" };
obj.body = { alignItems: "center" };
obj.contentText = { textAlign: "center" };
createStyles.createStyles(obj);
let obj3 = { overshootClamping: true, damping: 35, stiffness: 450, mass: 0.5, restDisplacementThreshold: 0.001 };
let context = noop.createContext(fn(4467).TransitionStates.YEETED);
let context2 = noop.createContext(fn(1085).NOOP);
const context3 = noop.createContext(0);
const context4 = noop.createContext("");
const context5 = noop.createContext(null);
const __initData = {
  code: "function AlertModalNativeTsx1(){const{withAlertModalSpring,sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withAlertModalSpring(sharedVisible.get(),function(finished){if(finished===true&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}})};}",
};
let __initData4 = {
  code: "function AlertModalNativeTsx2(){const{sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp,windowHeight,ALERT_MODAL_MARGIN,safeAreaTop,safeAreaBottom,withAlertModalSpring,sharedIndex,sharedTopHeight,useReducedMotion}=this.__closure;var _CARD_OFFSETS$sharedI;function onComplete(finished){if(finished===true&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}const CARD_OFFSETS=[0,-20,-34];const maxHeight=windowHeight-ALERT_MODAL_MARGIN*2-Math.max(safeAreaTop,safeAreaBottom)*2;return{position:'absolute',opacity:withAlertModalSpring(sharedVisible.get(),onComplete),zIndex:10-sharedIndex.get(),height:sharedIndex.get()>0?sharedTopHeight.get():'auto',maxHeight:maxHeight,transform:useReducedMotion?[]:[{scale:withAlertModalSpring(sharedVisible.get()===1?1-sharedIndex.get()*0.1:0.7)},{translateY:withAlertModalSpring(sharedVisible.get()===1?(_CARD_OFFSETS$sharedI=CARD_OFFSETS[sharedIndex.get()])!==null&&_CARD_OFFSETS$sharedI!==void 0?_CARD_OFFSETS$sharedI:sharedVisible.get()*-12:50-sharedIndex.get()*50)}]};}",
};
function withAlertModalSpring(value, fn) {
  return spring.withSpring(value, obj3, "animate-always", fn);
}
let obj4 = { withSpring: fn(5186).withSpring, MODAL_SPRING: obj3 };
withAlertModalSpring.__closure = obj4;
withAlertModalSpring.__workletHash = 15556562210180;
withAlertModalSpring.__initData = {
  code: "function withAlertModalSpring_AlertModalNativeTsx3(value,callback){const{withSpring,MODAL_SPRING}=this.__closure;return withSpring(value,MODAL_SPRING,'animate-always',callback);}",
};
const __initData3 = {
  code: "function AlertModalNativeTsx4(){const{sharedTransitionState}=this.__closure;return sharedTransitionState.get();}",
};
__initData4 = {
  code: "function AlertModalNativeTsx5(transitionState){const{TransitionStates,sharedVisible,runOnJS,cleanUp}=this.__closure;if(transitionState===TransitionStates.YEETED){if(sharedVisible.get()===1){sharedVisible.set(0);}else{runOnJS(cleanUp)();}}else{sharedVisible.set(1);}}",
};
size = fn(2);
let result = size.fileFinishedImporting("design/components/AlertModal/native/AlertModal.native.tsx");

export const AlertModalContainer = noop.memo(() => {
  const tmp = closure_13();
  let items = tmp;
  const alertStore = items(items[10]).useAlertStore((alerts) => alerts.alerts);
  let obj = items(items[10]);
  const tmp2 = items;
  const tmp3 = items;
  const sharedValue = items(items[11]).useSharedValue(0);
  items = undefined;
  if (0 === alertStore.length) {
    items = [];
  } else {
    items = [{ type: "backdrop", key: "backdrop" }];
    const substr = alertStore.slice(0, 3);
    const item = substr.forEach((alert, index) => {
      items.push({ type: "alert", alert, key: alert.key, index });
    });
  }
  const items1 = [items];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (items.length > 0) {
      const result = KeyboardManagerUtils.dismissGlobalKeyboard();
    }
  }, items1);
  const items2 = [tmp];
  const items3 = [sharedValue];
  const callback = noop.useCallback((children) => {
    const obj = { style: absoluteFillObject.absoluteFillObject, children: null };
    const obj2 = {
      onDismiss: dismissTopAlert,
      children: closure_2_10(React5, { style: items.root, pointerEvents: "box-none", children }),
    };
    obj.children = closure_2_10(Dialog.Dialog, obj2);
    return closure_2_10(OverlayViewDefault, obj);
  }, items2);
  const callback1 = noop.useCallback((value, type, value2, value3) => {
    if ("alert" === type.type) {
      let node = type.alert.node;
    } else {
      node = closure_2_10(AlertModalBackdrop, {});
    }
    let num = -1;
    if ("alert" === type.type) {
      num = type.index;
    }
    const obj = { value: sharedValue, children: null };
    const obj2 = { value: value3, children: null };
    obj3 = { value: value2, children: null };
    const obj4 = {
      value: num,
      children: closure_2_10(redux4.Provider, {
        value,
        children: closure_2_10(noop.Suspense, { fallback: null, children: node }),
      }),
    };
    obj3.children = closure_2_10(redux3.Provider, obj4);
    obj2.children = closure_2_10(redux.Provider, obj3);
    obj.children = closure_2_10(redux2.Provider, obj2);
    return closure_2_10(redux5.Provider, obj, value);
  }, items3);
  return closure_10(tmp2(tmp3[9]).TransitionGroup, {
    wrapChildren: callback,
    items,
    renderItem: callback1,
    getItemKey: getAlertModalItemKey,
  });
});
export const useDismissModalCallback = function useDismissModalCallback() {
  const context = noop.useContext(closure_18);
  const items = [context];
  return noop.useCallback(() => {
    useAlertStore2.dismissAlert(context);
  }, items);
};
export { AlertModal };
export { AlertActions };
export { AlertActionButton };
export const showConfirmModal = function showConfirmModal(arg0) {
  ({ key, cancelText } = arg0);
  ({ title, content, confirmText } = arg0);
  if (cancelText === undefined) {
    const intl = util.intl;
    cancelText = intl.string(util.t["ETE/oC"]);
  }
  ({ variant, extraContent } = arg0);
  if (variant === undefined) {
    variant = "destructive";
  }
  ({ onConfirm, onCancel, onCloseCallback, dismissable } = arg0);
  const obj2 = { title, content, extraContent, actions: null };
  obj3 = { children: null };
  const items = [
    closure_1_10(AlertActionButton, { variant, text: confirmText, onPress: onConfirm }),
    closure_1_10(AlertActionButton, { variant: "secondary", text: cancelText, onPress: onCancel }),
  ];
  obj3.children = items;
  obj2.actions = closure_1_11(closure_1_12, obj3);
  useAlertStore2.openAlert(key, closure_1_10(AlertModal, obj2), onCloseCallback, { dismissable });
  const obj4 = { dismissable };
};
