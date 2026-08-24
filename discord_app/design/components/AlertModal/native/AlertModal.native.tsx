// discord_app/design/components/AlertModal/native/AlertModal.native.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import useAlertStore2 from "useAlertStore.native.tsx";
import Stack from "../../Stack/native/Stack.native.tsx";
import CONFIG_NEVER_ANIMATE from "../../../animation/reanimated/spring/spring.tsx";
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../../_runtime/00853__toArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../Styles/native/createStyles.tsx";
import context3 from "../../../../index.native.tsx";

require = arg1;
function getAlertModalItemKey(key) {
  return key.key;
}
function dismissTopAlert() {
  const useAlertStore = require("useAlertStore.native.tsx").useAlertStore;
  const arr = callback3(useAlertStore.getState().alerts);
  const first = arr[0];
  _require = arr.slice(1);
  let tmp4 = null != first;
  if (tmp4) {
    tmp4 = false === first.dismissable;
  }
  if (!tmp4) {
    let tmpResult = tmp(4663);
    let key;
    if (first != null) {
      key = first.key;
    }
    tmpResult.dismissAlert(key);
    tmpResult = tmp(705);
    tmpResult.batchUpdates(() => {
      const useAlertStore = callback(closure_1_2[10]).useAlertStore;
      return useAlertStore.setState({ alerts: callback });
    });
  }
}
function AlertModalBackdrop() {
  const context = importAllResult.useContext(closure_16);
  const tmp2 = callback2(useSharedAnimationState(), 2);
  let first = tmp2[0];
  dependencyMap = tmp4;
  let obj = context(4663);
  const alertStore = obj.useAlertStore((arg0) => {
    first = arg0.alerts[0];
    let dismissable;
    if (first != null) {
      dismissable = first.dismissable;
    }
    return false !== dismissable;
  });
  let fn = function t() {
    let value = closure_2.get();
    if (typeof closure_1_26 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let obj = { opacity: context(closure_2[25]).withSpring(value, closure_1_14, "animate-always", fn) };
    fn = (arg0) => {
      let tmp = true === arg0;
      if (tmp) {
        tmp = 0 === closure_2.get();
      }
      if (tmp) {
        const value = closure_1.get();
        tmp = value === closure_1_0(closure_1_2[9]).TransitionStates.YEETED;
      }
      if (tmp) {
        closure_1_0(closure_1_2[11]).runOnJS(closure_0)();
        const obj = closure_1_0(closure_1_2[11]);
      }
    };
    return obj;
  };
  obj = { withAlertModalSpring, sharedVisible: tmp4, sharedTransitionState: first, TransitionStates: context(4107).TransitionStates, runOnJS: context(4119).runOnJS, cleanUp: context };
  fn.__closure = obj;
  fn.__workletHash = 4470729133936;
  fn.__initData = closure_22;
  const animatedStyle = context(4119).useAnimatedStyle(fn);
  obj = { blur: "strong", style: animatedStyle, onDismiss: null, accessibilityLabel: null };
  let tmp10 = null;
  if (alertStore) {
    tmp10 = dismissTopAlert;
  }
  obj[2] = tmp10;
  const intl = tmp5(1236).intl;
  obj[3] = intl.string(context(1236).t.Xkfav5);
  return closure_10(context(4728).Backdrop, obj);
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
    enabled = closure_6.useContext(require("context").AccessibilityPreferencesContext).reducedMotion.enabled;
    ref = closure_6.useRef(null);
    closure_4 = ref;
    obj = require("../../../../modules/reanimated/ReanimatedRexport.tsx");
    sharedValue = obj.useSharedValue(context1);
    closure_5 = sharedValue;
    tmp9 = closure_4(useSharedAnimationState(), 2);
    first = tmp9[0];
    closure_6 = first;
    tmp11 = tmp9[1];
    closure_7 = tmp11;
    rect = require("useSafeAreaInsets")();
    top = rect.top;
    bottom = rect.bottom;
    items = [];
    items[0] = context1;
    effect = closure_6.useEffect(() => {
      if (0 === context1) {
        let obj = context(context2[20]);
        obj = { ref: null, delay: 300 };
        obj[0] = ref;
        const result = obj.setAccessibilityFocus(obj);
      }
    }, items);
    height = require("useWindowDimensions")().height;
    obj2 = require("../../../../modules/reanimated/ReanimatedRexport.tsx");
    class B {
      constructor() {
        diff = height - 32;
        tmp3 = closure_1_26;
        obj = closure_7;
        result = 2 * Math.max(top, bottom);
        value = closure_7.get();
        if (typeof closure_1_26 !== "function") {
          str4 = "Trying to call a non-function";
          throwTypeErrorResult = HermesBuiltin.throwTypeError();
        }
        obj = { position: "absolute", opacity: null, zIndex: null, height: null, maxHeight: null, transform: null };
        tmp5 = closure_0;
        tmp6 = closure_2;
        fn = (arg0) => {
          let tmp = true === arg0;
          if (tmp) {
            tmp = 0 === closure_7.get();
          }
          if (tmp) {
            const value = closure_6.get();
            tmp = value === closure_1_0(closure_1_2[9]).TransitionStates.YEETED;
          }
          if (tmp) {
            closure_1_0(closure_1_2[11]).runOnJS(closure_0)();
            const obj = closure_1_0(closure_1_2[11]);
          }
        };
        obj3 = require("CONFIG_NEVER_ANIMATE");
        tmp7 = closure_1_14;
        obj[1] = obj3.withSpring(value, closure_1_14, "animate-always", fn);
        obj4 = closure_5;
        obj[2] = 10 - closure_5.get();
        str = "auto";
        if (closure_5.get() > 0) {
          tmp8 = closure_2;
          str = closure_2.get();
        }
        obj[3] = str;
        obj[4] = diff - result;
        if (enabled) {
          items = [];
        } else {
          num = 0.7;
          num2 = 1;
          if (1 === obj.get()) {
            num3 = 0.1;
            num = 1 - 0.1 * obj4.get();
          }
          if (typeof tmp3 !== "function") {
            str5 = "Trying to call a non-function";
            throwTypeErrorResult1 = HermesBuiltin.throwTypeError();
          }
          obj1 = { scale: null };
          tmp5Result = require("CONFIG_NEVER_ANIMATE");
          tmp9 = tmp5Result;
          tmp10 = num;
          tmp11 = tmp7;
          str2 = "animate-always";
          obj1[0] = tmp5Result.withSpring(num, tmp7, "animate-always", undefined);
          items = [, ];
          items[0] = obj1;
          if (1 === obj.get()) {
            result1 = [0, -20, -34][obj4.get(obj4)];
            tmp14 = null;
            if (result1 == null) {
              num5 = -12;
              result1 = -12 * obj.get();
            }
            diff1 = result1;
          } else {
            num4 = 50;
            diff1 = 50 - 50 * obj4.get();
          }
          if (typeof tmp3 !== "function") {
            str6 = "Trying to call a non-function";
            throwTypeErrorResult2 = HermesBuiltin.throwTypeError();
          }
          obj2 = { translateY: null };
          tmp5Result1 = require("CONFIG_NEVER_ANIMATE");
          tmp15 = tmp5Result1;
          tmp16 = diff1;
          tmp17 = tmp7;
          str3 = "animate-always";
          obj2[0] = tmp5Result1.withSpring(diff1, tmp7, "animate-always", undefined);
          items[1] = obj2;
        }
        obj[5] = items;
        return obj;
      }
    }
    obj = { sharedVisible: tmp11, sharedTransitionState: first, TransitionStates: require("ManaContext").TransitionStates, runOnJS: require("../../../../modules/reanimated/ReanimatedRexport.tsx").runOnJS, cleanUp: context, windowHeight: height, ALERT_MODAL_MARGIN: 16, safeAreaTop: top, safeAreaBottom: bottom, withAlertModalSpring, sharedIndex: sharedValue, sharedTopHeight: context2, useReducedMotion: enabled };
    B.__closure = obj;
    B.__workletHash = 655123755546;
    B.__initData = closure_24;
    items1 = [, ];
    items1[0] = context1;
    items1[1] = sharedValue;
    animatedStyle = obj2.useAnimatedStyle(B);
    layoutEffect = closure_6.useLayoutEffect(() => {
      const result = sharedValue.set(context1);
    }, items1);
    tmp15 = require("useBackPressHandler")(() => {
      let useAlertStore = context(context2[10]).useAlertStore;
      const arr = sharedValue(useAlertStore.getState().alerts);
      first = arr[0];
      context = arr.slice(1);
      let tmp4 = null != first;
      if (tmp4) {
        tmp4 = false === first.dismissable;
      }
      if (!tmp4) {
        let tmpResult = tmp(tmp2[10]);
        let key;
        if (first != null) {
          key = first.key;
        }
        tmpResult.dismissAlert(key);
        tmpResult = tmp(tmp2[15]);
        tmpResult.batchUpdates(() => {
          const useAlertStore = callback(closure_1_2[10]).useAlertStore;
          return useAlertStore.setState({ alerts: callback });
        });
      }
      return true;
    });
    tmp16 = height;
    str = "no-hide-descendants";
    if (0 === context1) {
      str = "auto";
    }
    obj1 = {
      importantForAccessibility: str,
      accessibilityElementsHidden: 0 !== context1,
      style: items2,
      onLayout(nativeEvent) {
            const result = context2.set(nativeEvent.nativeEvent.layout.height);
          },
      children: null
    };
    items2 = [, ];
    items2[0] = tmp3.content;
    items2[1] = animatedStyle;
    obj2 = { style: tmp3.overflow, children: null };
    tmp19 = jsxs;
    tmp17 = bottom;
    tmp18 = closure_7;
    items3 = [, , , ];
    items3[0] = header;
    obj3 = { spacing: 8, style: items4, children: null };
    items4 = [];
    items4[0] = tmp3.body;
    items5 = [, ];
    items5[0] = tmp16(require("Text").Text, { ref, variant: "heading-lg/bold", accessibilityRole: "header", color: "mobile-text-heading-primary", children: title });
    tmp16Result = null;
    if (null != content) {
      str2 = "";
      tmp16Result = null;
      if ("" !== content) {
        obj4 = { variant: "text-md/medium", color: "text-default", style: null, children: null };
        obj4[2] = tmp3.contentText;
        obj4[3] = content;
        tmp16Result = tmp16(require("Text").Text, obj4);
      }
    }
    items5[1] = tmp16Result;
    obj3[2] = items5;
    items3[1] = tmp19(require("Stack").Stack, obj3);
    items3[2] = extraContent;
    tmp16Result1 = null;
    if (null != actions) {
      tmp22 = AlertActions;
      obj5 = { children: null };
      obj5[0] = actions;
      tmp16Result1 = tmp16(AlertActions, obj5);
    }
    obj6 = { alwaysBounceVertical: false, children: null };
    items3[3] = tmp16Result1;
    obj2[1] = tmp19(require("Stack").Stack, { spacing: 24, children: items3 });
    obj6[1] = tmp16(tmp18, obj2);
    obj1[4] = tmp16(tmp17, obj6);
    return tmp16(require("../../../../modules/reanimated/ReanimatedRexport.tsx").View, obj1);
  }
}
function useSharedAnimationState() {
  let obj = importAllResult;
  const context = importAllResult.useContext(closure_15);
  const context1 = importAllResult.useContext(closure_16);
  let num = 0;
  if (context === context(sharedValue[9]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = context(sharedValue[11]).useSharedValue(num);
  let tmp3Result = tmp3(tmp4[11]);
  const sharedValue1 = tmp3Result.useSharedValue(context);
  const items = [sharedValue, context, sharedValue1];
  const layoutEffect = obj.useLayoutEffect(() => {
    const result = sharedValue1.set(context);
  }, items);
  tmp3Result = tmp3(tmp4[11]);
  const fn = function n() {
    return sharedValue1.get();
  };
  fn.__closure = { sharedTransitionState: sharedValue1 };
  fn.__workletHash = 14603144870585;
  fn.__initData = closure_27;
  const fn2 = function t(arg0) {
    if (arg0 === context(sharedValue[9]).TransitionStates.YEETED) {
      if (1 === sharedValue.get()) {
        const result = obj.set(0);
      } else {
        context(sharedValue[11]).runOnJS(context1)();
        const tmpResult = context(sharedValue[11]);
      }
      obj = sharedValue;
    } else {
      const result1 = sharedValue.set(1);
    }
  };
  obj = { TransitionStates: tmp3(tmp4[9]).TransitionStates, sharedVisible: sharedValue, runOnJS: tmp3(tmp4[11]).runOnJS, cleanUp: context1 };
  fn2.__closure = obj;
  fn2.__workletHash = 9486923983340;
  fn2.__initData = closure_28;
  const animatedReaction = tmp3Result.useAnimatedReaction(fn, fn2);
  const items1 = [sharedValue1, sharedValue];
  return items1;
}
class AlertActions {
  constructor(arg0) {
    return jsx(require("Stack").Stack, { spacing: 12, children: global.children });
  }
}
class AlertActionButton {
  constructor(arg0) {
    ({ onPress: closure_0, loading } = global);
    merged = Object.assign(global, Object.create(null));
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
    closure_0 = closure_3((arg0) => {
      closure_0 = arg0;
      c2 = 0;
      c4 = 0;
      c3 = 0;
      return (function*(arg0) {
        if (c4 === 2) {
          c4 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c4 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_1 = tmp3;
                let tmp11;
                if (callback != null) {
                  tmp11 = callback(callback);
                }
                if (null != tmp11) {
                  if (tmp11 instanceof Promise) {
                    closure_1_1(true);
                    c3 = 1;
                    c2 = 2;
                    c4 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = tmp11;
                    return obj1;
                  }
                }
                let obj2 = callback(table[10]);
                obj2.dismissAlert(c2);
                c4 = 3;
              }
            } else if (1 === tmp7) {
              c3 = 0;
              closure_1_1(false);
              c4 = 3;
              obj2 = { value: null, done: true };
              obj2[0] = undefined;
              return obj2;
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              c3 = 0;
            }
            c3 = 0;
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
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
      })();
    });
    obj.onPress = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    return tmp3(require("Button").Button, obj);
  }
}
({ View: error, StyleSheet: closure_8, ScrollView: c9 } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
let obj = { root: { flex: 1, position: "relative", justifyContent: "center", alignItems: "center", paddingHorizontal: 16 }, content: null, overflow: null, body: null, contentText: null };
obj = { backgroundColor: ThemesDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT, margin: 16, width: "100%", maxWidth: 400, height: "100%", borderRadius: ThemesDefault.radii.xl, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE };
let merged = Object.assign(ThemesDefault.shadows.SHADOW_TOP_HIGH);
obj[1] = obj;
obj[2] = { width: "100%", height: "100%", overflow: "hidden", padding: 24, position: "relative" };
obj[3] = { alignItems: "center" };
obj[4] = { textAlign: "center" };
let closure_13 = createCacheKey.createStyles(obj);
createCacheKey = { overshootClamping: true, damping: 35, stiffness: 450, mass: 0.5, restDisplacementThreshold: 0.001 };
let context = importAllResult.createContext(require("ManaContext").TransitionStates.YEETED);
let context2 = importAllResult.createContext(require("sum").NOOP);
const context4 = importAllResult.createContext("");
const context5 = importAllResult.createContext(null);
let closure_22 = { code: "function AlertModalNativeTsx1(){const{withAlertModalSpring,sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withAlertModalSpring(sharedVisible.get(),function(finished){if(finished===true&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}})};}" };
let closure_24 = { code: "function AlertModalNativeTsx2(){const{sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp,windowHeight,ALERT_MODAL_MARGIN,safeAreaTop,safeAreaBottom,withAlertModalSpring,sharedIndex,sharedTopHeight,useReducedMotion}=this.__closure;var _CARD_OFFSETS$sharedI;function onComplete(finished){if(finished===true&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}const CARD_OFFSETS=[0,-20,-34];const maxHeight=windowHeight-ALERT_MODAL_MARGIN*2-Math.max(safeAreaTop,safeAreaBottom)*2;return{position:'absolute',opacity:withAlertModalSpring(sharedVisible.get(),onComplete),zIndex:10-sharedIndex.get(),height:sharedIndex.get()>0?sharedTopHeight.get():'auto',maxHeight:maxHeight,transform:useReducedMotion?[]:[{scale:withAlertModalSpring(sharedVisible.get()===1?1-sharedIndex.get()*0.1:0.7)},{translateY:withAlertModalSpring(sharedVisible.get()===1?(_CARD_OFFSETS$sharedI=CARD_OFFSETS[sharedIndex.get()])!==null&&_CARD_OFFSETS$sharedI!==void 0?_CARD_OFFSETS$sharedI:sharedVisible.get()*-12:50-sharedIndex.get()*50)}]};}" };
function withAlertModalSpring(value, fn2) {
  return CONFIG_NEVER_ANIMATE.withSpring(value, createCacheKey, "animate-always", fn2);
}
let obj2 = { withSpring: require("CONFIG_NEVER_ANIMATE").withSpring, MODAL_SPRING: createCacheKey };
withAlertModalSpring.__closure = obj2;
withAlertModalSpring.__workletHash = 15556562210180;
withAlertModalSpring.__initData = { code: "function withAlertModalSpring_AlertModalNativeTsx3(value,callback){const{withSpring,MODAL_SPRING}=this.__closure;return withSpring(value,MODAL_SPRING,'animate-always',callback);}" };
let closure_27 = { code: "function AlertModalNativeTsx4(){const{sharedTransitionState}=this.__closure;return sharedTransitionState.get();}" };
let closure_28 = { code: "function AlertModalNativeTsx5(transitionState){const{TransitionStates,sharedVisible,runOnJS,cleanUp}=this.__closure;if(transitionState===TransitionStates.YEETED){if(sharedVisible.get()===1){sharedVisible.set(0);}else{runOnJS(cleanUp)();}}else{sharedVisible.set(1);}}" };
const memoResult = importAllResult.memo(() => {
  const tmp = callback6();
  let items = tmp;
  let obj = items(items[10]);
  const alertStore = obj.useAlertStore((alerts) => alerts.alerts);
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
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    if (items.length > 0) {
      const result = items(items[12]).dismissGlobalKeyboard();
      const obj = items(items[12]);
    }
  }, items1);
  const items2 = [tmp];
  const items3 = [sharedValue];
  const callback = importAllResult.useCallback((children) => {
    let obj = { style: closure_1_8.absoluteFillObject, children: null };
    obj = { onDismiss: closure_1_21, children: closure_1_10(closure_1_7, obj) };
    obj = { style: items.root, pointerEvents: "box-none", children };
    obj[1] = closure_1_10(items(items[14]).Dialog, obj);
    return closure_1_10(sharedValue(items[13]), obj);
  }, items2);
  const callback1 = importAllResult.useCallback((value, type, value2, value3) => {
    if ("alert" === type.type) {
      let node = type.alert.node;
    } else {
      node = closure_1_10(closure_1_23, {});
    }
    let num = -1;
    if ("alert" === type.type) {
      num = type.index;
    }
    let obj = { value: sharedValue, children: null };
    obj = { value: value3, children: null };
    obj = { value: value2, children: null };
    obj1 = { value: num, children: closure_1_10(closure_1_18.Provider, { value, children: closure_1_10(closure_1_6.Suspense, { fallback: null, children: node }) }) };
    obj[1] = closure_1_10(closure_1_17.Provider, obj1);
    obj[1] = closure_1_10(closure_1_15.Provider, obj);
    obj[1] = closure_1_10(closure_1_16.Provider, obj);
    return closure_1_10(closure_1_19.Provider, obj, value);
  }, items3);
  obj = { wrapChildren: callback, items, renderItem: callback1, getItemKey: getAlertModalItemKey };
  return callback4(items(items[9]).TransitionGroup, obj);
});
let result = require("set").fileFinishedImporting("design/components/AlertModal/native/AlertModal.native.tsx");

export const AlertModalContainer = memoResult;
export const useDismissModalCallback = function useDismissModalCallback() {
  const context = importAllResult.useContext(closure_18);
  const items = [context];
  return importAllResult.useCallback(() => {
    context(closure_1_2[10]).dismissAlert(context);
  }, items);
};
export { AlertModal };
export { AlertActions };
export { AlertActionButton };
export const showConfirmModal = function showConfirmModal(arg0) {
  ({ key, cancelText } = arg0);
  ({ title, content, confirmText } = arg0);
  if (cancelText === undefined) {
    const intl = getSystemLocale.intl;
    cancelText = intl.string(getSystemLocale.t["ETE/oC"]);
  }
  ({ variant, extraContent } = arg0);
  if (variant === undefined) {
    variant = "destructive";
  }
  ({ onConfirm, onCancel, onCloseCallback, dismissable } = arg0);
  let obj = useAlertStore2;
  obj = { title, content, extraContent, actions: null };
  obj = { children: null };
  const items = [callback4(AlertActionButton, { variant, text: confirmText, onPress: onConfirm }), callback4(AlertActionButton, { variant: "secondary", text: cancelText, onPress: onCancel })];
  obj[0] = items;
  obj[3] = callback5(closure_12, obj);
  obj.openAlert(key, callback4(AlertModal, obj), onCloseCallback, { dismissable });
};