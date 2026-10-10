// discord_app/design/components/AlertModal/native/AlertModal.native.tsx
import c from "../../../../../_runtime/00576_c.js";
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
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import _toArray from "../../../../../_runtime/00729__toArray.js";
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
    tmp(5301).dismissAlert(key);
    const tmpResult = tmp(5301);
    tmp(1272).batchUpdates(() => {
      const useAlertStore = context(context2[13]).useAlertStore;
      return useAlertStore.setState({ alerts });
    });
    const tmpResult2 = tmp(1272);
  }
}
let closure_3 = ["onPress", "loading"];
get_ActivityIndicator = fn(17);
({ View: closure_9, StyleSheet: c10, ScrollView: closure_11 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(5092);
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
let closure_15 = createStyles.createStyles(obj);
let obj3 = { overshootClamping: true, damping: 35, stiffness: 450, mass: 0.5, restDisplacementThreshold: 0.001 };
let context = noop.createContext(fn(4827).TransitionStates.YEETED);
let context2 = noop.createContext(fn(1096).NOOP);
const context3 = noop.createContext(0);
const context4 = noop.createContext("");
const context5 = noop.createContext(null);
fn(558);
const __initData = {
  code: "function AlertModalNativeTsx1(){const{withAlertModalSpring,sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withAlertModalSpring(sharedVisible.get(),function(finished){if(finished===true&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}})};}",
};
const __initData2 = {
  code: "function AlertModalNativeTsx2(){const{withAlertModalSpring,sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withAlertModalSpring(sharedVisible.get(),function(finished){if(finished===true&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}})};}",
};
let ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AlertModalBackdrop() {
      const cResult = context(576).c(5);
      context = noop.useContext(closure_18);
      const tmp5 = _slicedToArray(closure_35(), 2);
      const sharedTransitionState = tmp5[0];
      dependencyMap = tmp7;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let fn = function t(arg0) {
          const first = arg0.alerts[0];
          let dismissable;
          if (first != null) {
            dismissable = first.dismissable;
          }
          return false !== dismissable;
        };
        cResult[0] = fn;
        let first1 = fn;
      } else {
        first1 = cResult[0];
      }
      let obj = context(576);
      const alertStore = context(5301).useAlertStore(first1);
      const tmpResult = context(5301);
      const fn2 = function f() {
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
              tmp = value === context(closure_2[10]).TransitionStates.YEETED;
            }
            if (tmp) {
              context(closure_2[14]).runOnJS(closure_1_0)();
              const obj = context(closure_2[14]);
            }
          };
          const obj2 = spring;
          obj.opacity = obj2.withSpring(value, obj3, "animate-always", fn);
          return obj;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      };
      const tmpResult2 = context(4850);
      fn2.__closure = {
        withAlertModalSpring,
        sharedVisible: tmp5[1],
        sharedTransitionState,
        TransitionStates: context(4827).TransitionStates,
        runOnJS: context(4850).runOnJS,
        cleanUp: context,
      };
      fn2.__workletHash = 4470729133936;
      fn2.__initData = __initData;
      const animatedStyle = tmpResult2.useAnimatedStyle(fn2);
      let tmp11 = null;
      if (alertStore) {
        tmp11 = dismissTopAlert;
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.Xkfav5);
        cResult[1] = stringResult;
        let tmp12 = stringResult;
      } else {
        tmp12 = cResult[1];
      }
      if (cResult[2] === animatedStyle) {
        if (cResult[3] === tmp11) {
          let tmp14 = cResult[4];
        }
        return tmp14;
      }
      const tmp15 = closure_12(context(5363).Backdrop, {
        blur: "strong",
        style: animatedStyle,
        onDismiss: tmp11,
        accessibilityLabel: tmp12,
      });
      cResult[2] = animatedStyle;
      cResult[3] = tmp11;
      cResult[4] = tmp15;
      tmp14 = tmp15;
    }
  : function AlertModalBackdrop() {
      const context = noop.useContext(closure_18);
      const tmp2 = _slicedToArray(closure_35(), 2);
      const sharedTransitionState = tmp2[0];
      dependencyMap = tmp4;
      const alertStore = context(5301).useAlertStore((arg0) => {
        const first = arg0.alerts[0];
        let dismissable;
        if (first != null) {
          dismissable = first.dismissable;
        }
        return false !== dismissable;
      });
      let obj = context(5301);
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
              tmp = value === context(closure_2[10]).TransitionStates.YEETED;
            }
            if (tmp) {
              context(closure_2[14]).runOnJS(closure_1_0)();
              const obj = context(closure_2[14]);
            }
          };
          const obj2 = spring;
          obj.opacity = obj2.withSpring(value, obj3, "animate-always", fn);
          return obj;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      };
      let obj2 = context(4850);
      fn.__closure = {
        withAlertModalSpring,
        sharedVisible: tmp2[1],
        sharedTransitionState,
        TransitionStates: context(4827).TransitionStates,
        runOnJS: context(4850).runOnJS,
        cleanUp: context,
      };
      fn.__workletHash = 10548540937715;
      fn.__initData = __initData2;
      const animatedStyle = obj2.useAnimatedStyle(fn);
      const obj4 = { blur: "strong", style: animatedStyle, onDismiss: null, accessibilityLabel: null };
      let tmp10 = null;
      if (alertStore) {
        tmp10 = dismissTopAlert;
      }
      obj4.onDismiss = tmp10;
      const intl = tmp5(1126).intl;
      obj4.accessibilityLabel = intl.string(context(1126).t.Xkfav5);
      return closure_12(context(5363).Backdrop, obj4);
    };
ReactCompilerGating = fn(558);
const __initData3 = {
  code: 'function AlertModalNativeTsx3(){const{sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp,windowHeight,ALERT_MODAL_MARGIN,safeAreaTop,safeAreaBottom,withAlertModalSpring,sharedIndex,sharedTopHeight,useReducedMotion}=this.__closure;var _CARD_OFFSETS$sharedI;const onComplete=function onComplete(finished){if(finished===true&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}};const CARD_OFFSETS=[0,-20,-34];const maxHeight=windowHeight-ALERT_MODAL_MARGIN*2-Math.max(safeAreaTop,safeAreaBottom)*2;return{position:"absolute",opacity:withAlertModalSpring(sharedVisible.get(),onComplete),zIndex:10-sharedIndex.get(),height:sharedIndex.get()>0?sharedTopHeight.get():"auto",maxHeight:maxHeight,transform:useReducedMotion?[]:[{scale:withAlertModalSpring(sharedVisible.get()===1?1-sharedIndex.get()*0.1:0.7)},{translateY:withAlertModalSpring(sharedVisible.get()===1?(_CARD_OFFSETS$sharedI=CARD_OFFSETS[sharedIndex.get()])!==null&&_CARD_OFFSETS$sharedI!==void 0?_CARD_OFFSETS$sharedI:sharedVisible.get()*-12:50-sharedIndex.get()*50)}]};}',
};
const __initData4 = {
  code: "function AlertModalNativeTsx4(){const{sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp,windowHeight,ALERT_MODAL_MARGIN,safeAreaTop,safeAreaBottom,withAlertModalSpring,sharedIndex,sharedTopHeight,useReducedMotion}=this.__closure;var _CARD_OFFSETS$sharedI;function onComplete(finished){if(finished===true&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}const CARD_OFFSETS=[0,-20,-34];const maxHeight=windowHeight-ALERT_MODAL_MARGIN*2-Math.max(safeAreaTop,safeAreaBottom)*2;return{position:'absolute',opacity:withAlertModalSpring(sharedVisible.get(),onComplete),zIndex:10-sharedIndex.get(),height:sharedIndex.get()>0?sharedTopHeight.get():'auto',maxHeight:maxHeight,transform:useReducedMotion?[]:[{scale:withAlertModalSpring(sharedVisible.get()===1?1-sharedIndex.get()*0.1:0.7)},{translateY:withAlertModalSpring(sharedVisible.get()===1?(_CARD_OFFSETS$sharedI=CARD_OFFSETS[sharedIndex.get()])!==null&&_CARD_OFFSETS$sharedI!==void 0?_CARD_OFFSETS$sharedI:sharedVisible.get()*-12:50-sharedIndex.get()*50)}]};}",
};
const memoResult = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function AlertModalContainer() {
        const cResult = items(576).c(14);
        const tmp4 = closure_15();
        items = tmp4;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function t(alerts) {
            return alerts.alerts;
          };
          cResult[0] = fn;
          let first = fn;
        } else {
          first = cResult[0];
        }
        let obj = items(576);
        const alertStore = items(5301).useAlertStore(first);
        const tmpResult = items(5301);
        const sharedValue = items(4850).useSharedValue(0);
        if (cResult[1] !== alertStore) {
          if (0 === alertStore.length) {
            items = [];
          } else {
            items = [{ type: "backdrop", key: "backdrop" }];
            const substr = alertStore.slice(0, 3);
            const item = substr.forEach((alert, index) => {
              items.push({ type: "alert", alert, key: alert.key, index });
            });
          }
          cResult[1] = alertStore;
          cResult[2] = items;
        } else {
          dependencyMap = tmp7;
          if (cResult[3] !== cResult[2]) {
            const fn2 = function f() {
              if (length.length > 0) {
                const result = KeyboardManagerUtils.dismissGlobalKeyboard();
              }
            };
            const items1 = [tmp7];
            cResult[3] = tmp7;
            cResult[4] = fn2;
            cResult[5] = items1;
            let tmp11 = items1;
            let tmp10 = fn2;
          } else {
            tmp10 = cResult[4];
            tmp11 = cResult[5];
          }
          const layoutEffect = noop.useLayoutEffect(tmp10, tmp11);
          if (cResult[6] !== tmp4.root) {
            class A {
              constructor(arg0) {
                obj = { style: StyleSheet.absoluteFillObject, children: null };
                tmp = closure_1(closure_2[16]);
                obj1 = { onDismiss: dismissTopAlert, children: null };
                obj4 = { style: closure_0.root, pointerEvents: "box-none", children: arg0 };
                obj1.children = jsx(View, obj4);
                obj.children = jsx(closure_0(closure_2[17]).Dialog, obj1);
                return jsx(tmp, obj);
              }
            }
            cResult[6] = tmp4.root;
            cResult[7] = A;
          } else {
            class A {
              constructor(arg0) {
                obj = { style: StyleSheet.absoluteFillObject, children: null };
                tmp = closure_1(closure_2[16]);
                obj1 = { onDismiss: dismissTopAlert, children: null };
                obj4 = { style: closure_0.root, pointerEvents: "box-none", children: arg0 };
                obj1.children = jsx(View, obj4);
                obj.children = jsx(closure_0(closure_2[17]).Dialog, obj1);
                return jsx(tmp, obj);
              }
            }
          }
          if (cResult[8] !== sharedValue) {
            class A {
              constructor(arg0) {
                obj = { style: StyleSheet.absoluteFillObject, children: null };
                tmp = closure_1(closure_2[16]);
                obj1 = { onDismiss: dismissTopAlert, children: null };
                obj4 = { style: closure_0.root, pointerEvents: "box-none", children: arg0 };
                obj1.children = jsx(View, obj4);
                obj.children = jsx(closure_0(closure_2[17]).Dialog, obj1);
                return jsx(tmp, obj);
              }
            }
            cResult[8] = sharedValue;
            cResult[9] = tmp16;
          } else {
            class A {
              constructor(arg0) {
                obj = { style: StyleSheet.absoluteFillObject, children: null };
                tmp = closure_1(closure_2[16]);
                obj1 = { onDismiss: dismissTopAlert, children: null };
                obj4 = { style: closure_0.root, pointerEvents: "box-none", children: arg0 };
                obj1.children = jsx(View, obj4);
                obj.children = jsx(closure_0(closure_2[17]).Dialog, obj1);
                return jsx(tmp, obj);
              }
            }
          }
          if (cResult[10] === cResult[2]) {
            class A {
              constructor(arg0) {
                obj = { style: StyleSheet.absoluteFillObject, children: null };
                tmp = closure_1(closure_2[16]);
                obj1 = { onDismiss: dismissTopAlert, children: null };
                obj4 = { style: closure_0.root, pointerEvents: "box-none", children: arg0 };
                obj1.children = jsx(View, obj4);
                obj.children = jsx(closure_0(closure_2[17]).Dialog, obj1);
                return jsx(tmp, obj);
              }
            }
          }
          let obj2 = { wrapChildren: A, items: cResult[2], renderItem: tmp16, getItemKey: getAlertModalItemKey };
          const tmp20 = closure_12(tmp(4827).TransitionGroup, obj2);
          cResult[10] = cResult[2];
          cResult[11] = tmp16;
          cResult[12] = A;
          cResult[13] = tmp20;
        }
        const tmpResult2 = items(4850);
      }
    : function AlertModalContainer() {
        const tmp = closure_15();
        let items = tmp;
        const alertStore = items(items[13]).useAlertStore((alerts) => alerts.alerts);
        let obj = items(items[13]);
        const tmp2 = items;
        const tmp3 = items;
        const sharedValue = items(items[14]).useSharedValue(0);
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
          const obj = { style: collapsed.absoluteFillObject, children: null };
          const obj2 = {
            onDismiss: dismissTopAlert,
            children: __initData(options, { style: items.root, pointerEvents: "box-none", children }),
          };
          obj.children = __initData(Dialog.Dialog, obj2);
          return __initData(OverlayViewDefault, obj);
        }, items2);
        const callback1 = noop.useCallback((value, type, value2, value3) => {
          if ("alert" === type.type) {
            let node = type.alert.node;
          } else {
            node = __initData(closure_26, {});
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
            children: __initData(redux4.Provider, {
              value,
              children: __initData(noop.Suspense, { fallback: null, children: node }),
            }),
          };
          obj3.children = __initData(redux3.Provider, obj4);
          obj2.children = __initData(redux.Provider, obj3);
          obj.children = __initData(redux2.Provider, obj2);
          return __initData(redux5.Provider, obj, value);
        }, items3);
        return closure_12(tmp2(tmp3[10]).TransitionGroup, {
          wrapChildren: callback,
          items,
          renderItem: callback1,
          getItemKey: getAlertModalItemKey,
        });
      },
);
ReactCompilerGating = fn(558);
const tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AlertModal(arg0) {
      const cResult = context(context2[12]).c(38);
      ({ header, title, content, actions, extraContent } = arg0);
      context = top.useContext(closure_18);
      const context1 = top.useContext(closure_19);
      const tmp6 = closure_15();
      context2 = top.useContext(closure_21);
      const enabled = top.useContext(context(context2[21]).AccessibilityPreferencesContext).reducedMotion.enabled;
      let obj = context(context2[12]);
      const ref = top.useRef(null);
      const sharedValue = context(context2[14]).useSharedValue(context1);
      const tmp10 = sharedTransitionState(closure_35(), 2);
      sharedTransitionState = tmp10[0];
      closure_7 = tmp12;
      const rect = context1(context2[22])();
      top = rect.top;
      const bottom = rect.bottom;
      if (cResult[0] !== context1) {
        const fn = function n() {
          if (0 === context1) {
            const obj2 = { ref, delay: 300 };
            const result = setAccessibilityFocus.setAccessibilityFocus(obj2);
          }
        };
        let items = [context1];
        cResult[0] = context1;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp15 = items;
        let tmp14 = fn;
      } else {
        tmp14 = cResult[1];
        tmp15 = cResult[2];
      }
      const effect = obj2.useEffect(tmp14, tmp15);
      const height = tmp13(tmp2[24])().height;
      obj3 = context(context2[14]);
      class B {
        constructor() {
          diff = height - 32;
          tmp3 = withAlertModalSpring;
          obj = closure_7;
          result = 2 * Math.max(top, bottom);
          value = closure_7.get();
          if (typeof withAlertModalSpring === "function") {
            obj1 = {
              position: "absolute",
              opacity: null,
              zIndex: null,
              height: null,
              maxHeight: null,
              transform: null,
            };
            tmp5 = closure_0;
            tmp6 = closure_2;
            onComplete = function onComplete(arg0) {
              let tmp = true === arg0;
              if (tmp) {
                tmp = 0 === closure_1_7.get();
              }
              if (tmp) {
                value = sharedTransitionState.get();
                tmp = value === context(context2[10]).TransitionStates.YEETED;
              }
              if (tmp) {
                context(context2[14]).runOnJS(closure_1_0)();
                const obj = context(context2[14]);
              }
            };
            obj3 = closure_0(closure_2[28]);
            tmp7 = closure_16;
            str = "animate-always";
            tmp8 = obj3;
            tmp9 = value;
            tmp10 = closure_16;
            str2 = "animate-always";
            obj1.opacity = obj3.withSpring(value, closure_16, "animate-always", onComplete);
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
                tmp5Result = tmp5(tmp6[28]);
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
                  tmp5Result1 = tmp5(tmp6[28]);
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
      let tmpResult = context(context2[14]);
      B.__closure = {
        sharedVisible: tmp10[1],
        sharedTransitionState,
        TransitionStates: context(context2[10]).TransitionStates,
        runOnJS: context(context2[14]).runOnJS,
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
      B.__workletHash = 15768220325168;
      B.__initData = __initData3;
      const animatedStyle = tmpResult.useAnimatedStyle(B);
      if (cResult[3] === context1) {
        if (cResult[4] === sharedValue) {
          let tmp18 = cResult[5];
          let tmp19 = cResult[6];
        }
        const layoutEffect = obj2.useLayoutEffect(tmp18, tmp19);
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function j() {
            const useAlertStore = context(context2[13]).useAlertStore;
            const arr = closure_7(useAlertStore.getState().alerts);
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
              tmp(context2[13]).dismissAlert(key);
              const tmpResult = tmp(context2[13]);
              tmp(context2[18]).batchUpdates(() => {
                const useAlertStore = context(context2[13]).useAlertStore;
                return useAlertStore.setState({ alerts });
              });
              const tmpResult2 = tmp(context2[18]);
            }
            return true;
          };
          cResult[7] = fn2;
          let tmp22 = fn2;
        } else {
          tmp22 = cResult[7];
        }
        tmp13(tmp2[25])(tmp22);
        let str2 = "no-hide-descendants";
        if (0 === context1) {
          str2 = "auto";
        }
        if (cResult[8] === animatedStyle) {
          if (cResult[9] === tmp6.content) {
            let tmp24 = cResult[10];
          }
          if (cResult[11] !== context2) {
            const fn3 = function q(nativeEvent) {
              const result = context2.set(nativeEvent.nativeEvent.layout.height);
            };
            cResult[11] = context2;
            cResult[12] = fn3;
            let tmp25 = fn3;
          } else {
            tmp25 = cResult[12];
          }
          if (cResult[13] !== title) {
            let obj5 = {
              ref,
              variant: "heading-lg/bold",
              accessibilityRole: "header",
              color: "mobile-text-heading-primary",
              children: title,
            };
            const tmp28 = closure_12(tmp(tmp2[26]).Text, obj5);
            cResult[13] = title;
            cResult[14] = tmp28;
            let tmp26 = tmp28;
          } else {
            tmp26 = cResult[14];
          }
          if (cResult[15] === content) {
            if (cResult[16] === tmp6.contentText) {
              let tmp29 = cResult[17];
            }
            if (cResult[18] === tmp6.body) {
              if (cResult[19] === tmp26) {
                if (cResult[20] === tmp29) {
                  let tmp32 = cResult[21];
                }
                if (cResult[22] !== actions) {
                  let tmp36 = null;
                  if (null != actions) {
                    let obj6 = { children: actions };
                    tmp36 = closure_12(closure_36, obj6);
                  }
                  cResult[22] = actions;
                  cResult[23] = tmp36;
                  let tmp35 = tmp36;
                } else {
                  tmp35 = cResult[23];
                }
                if (cResult[24] === extraContent) {
                  if (cResult[25] === header) {
                    if (cResult[26] === tmp32) {
                      if (cResult[27] === tmp35) {
                        let tmp39 = cResult[28];
                      }
                      if (cResult[29] === tmp6.overflow) {
                        if (cResult[30] === tmp39) {
                          let tmp42 = cResult[31];
                        }
                        if (cResult[32] === tmp25) {
                          if (cResult[33] === tmp42) {
                            if (cResult[34] === str2) {
                              if (cResult[35] === tmp47) {
                                if (cResult[36] === tmp24) {
                                  let tmp48 = cResult[37];
                                }
                                return tmp48;
                              }
                            }
                          }
                        }
                        const obj7 = {
                          importantForAccessibility: str2,
                          accessibilityElementsHidden: 0 !== context1,
                          style: tmp24,
                          onLayout: tmp25,
                          children: tmp42,
                        };
                        const tmp50 = closure_12(tmp13(tmp2[14]).View, obj7);
                        cResult[32] = tmp25;
                        cResult[33] = tmp42;
                        cResult[34] = str2;
                        cResult[35] = 0 !== context1;
                        cResult[36] = tmp24;
                        cResult[37] = tmp50;
                        tmp48 = tmp50;
                      }
                      const obj8 = { alwaysBounceVertical: false, children: null };
                      const obj9 = { style: tmp6.overflow, children: tmp39 };
                      obj8.children = closure_12(bottom, obj9);
                      const tmp46 = closure_12(closure_11, obj8);
                      cResult[29] = tmp6.overflow;
                      cResult[30] = tmp39;
                      cResult[31] = tmp46;
                      tmp42 = tmp46;
                    }
                  }
                }
                const obj10 = { spacing: 24, children: null };
                const items1 = [header, tmp32, extraContent, tmp35];
                obj10.children = items1;
                const tmp41 = closure_13(tmp(tmp2[27]).Stack, obj10);
                cResult[24] = extraContent;
                cResult[25] = header;
                cResult[26] = tmp32;
                cResult[27] = tmp35;
                cResult[28] = tmp41;
                tmp39 = tmp41;
              }
            }
            const obj11 = { spacing: 8, style: tmp6.body, children: null };
            const items2 = [tmp26, tmp29];
            obj11.children = items2;
            const tmp34 = closure_13(tmp(tmp2[27]).Stack, obj11);
            cResult[18] = tmp6.body;
            cResult[19] = tmp26;
            cResult[20] = tmp29;
            cResult[21] = tmp34;
            tmp32 = tmp34;
          }
          let tmp30 = null;
          if (null != content) {
            tmp30 = null;
            if ("" !== content) {
              const obj12 = {
                variant: "text-md/medium",
                color: "text-default",
                style: tmp6.contentText,
                children: content,
              };
              tmp30 = closure_12(tmp(tmp2[26]).Text, obj12);
            }
          }
          cResult[15] = content;
          cResult[16] = tmp6.contentText;
          cResult[17] = tmp30;
          tmp29 = tmp30;
        }
        const items3 = [tmp6.content, animatedStyle];
        cResult[8] = animatedStyle;
        cResult[9] = tmp6.content;
        cResult[10] = items3;
        tmp24 = items3;
      }
      class K {
        constructor() {
          result = closure_5.set(closure_1);
          return;
        }
      }
      const items4 = [context1, sharedValue];
      cResult[3] = context1;
      cResult[4] = sharedValue;
      cResult[5] = K;
      cResult[6] = items4;
      tmp19 = items4;
      tmp18 = K;
      const obj4 = {
        sharedVisible: tmp10[1],
        sharedTransitionState,
        TransitionStates: context(context2[10]).TransitionStates,
        runOnJS: context(context2[14]).runOnJS,
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
    }
  : function AlertModal(arg0) {
      ({ content, actions } = arg0);
      let sharedTransitionState;
      let top;
      ({ header, title, extraContent } = arg0);
      let context = top.useContext(closure_18);
      const context1 = top.useContext(closure_19);
      const tmp3 = closure_15();
      const context2 = top.useContext(closure_21);
      const enabled = top.useContext(context(context2[21]).AccessibilityPreferencesContext).reducedMotion.enabled;
      const ref = top.useRef(null);
      const sharedValue = context(context2[14]).useSharedValue(context1);
      const tmp9 = sharedTransitionState(closure_35(), 2);
      sharedTransitionState = tmp9[0];
      closure_7 = tmp11;
      const rect = context1(context2[22])();
      top = rect.top;
      const bottom = rect.bottom;
      let items = [context1];
      const effect = top.useEffect(() => {
        if (0 === context1) {
          const obj2 = { ref, delay: 300 };
          const result = setAccessibilityFocus.setAccessibilityFocus(obj2);
        }
      }, items);
      const height = context1(context2[24])().height;
      let obj = context(context2[14]);
      class J {
        constructor() {
          diff = height - 32;
          tmp3 = withAlertModalSpring;
          obj = closure_7;
          result = 2 * Math.max(top, bottom);
          value = closure_7.get();
          if (typeof withAlertModalSpring === "function") {
            obj1 = {
              position: "absolute",
              opacity: null,
              zIndex: null,
              height: null,
              maxHeight: null,
              transform: null,
            };
            tmp5 = closure_0;
            tmp6 = closure_2;
            onComplete = function onComplete(arg0) {
              let tmp = true === arg0;
              if (tmp) {
                tmp = 0 === closure_1_7.get();
              }
              if (tmp) {
                value = sharedTransitionState.get();
                tmp = value === context(context2[10]).TransitionStates.YEETED;
              }
              if (tmp) {
                context(context2[14]).runOnJS(closure_1_0)();
                const obj = context(context2[14]);
              }
            };
            obj3 = closure_0(closure_2[28]);
            tmp7 = closure_16;
            str = "animate-always";
            tmp8 = obj3;
            tmp9 = value;
            tmp10 = closure_16;
            str2 = "animate-always";
            obj1.opacity = obj3.withSpring(value, closure_16, "animate-always", onComplete);
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
                tmp5Result = tmp5(tmp6[28]);
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
                  tmp5Result1 = tmp5(tmp6[28]);
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
      let obj2 = context(context2[14]);
      J.__closure = {
        sharedVisible: tmp9[1],
        sharedTransitionState,
        TransitionStates: context(context2[10]).TransitionStates,
        runOnJS: context(context2[14]).runOnJS,
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
      J.__workletHash = 13605485290396;
      J.__initData = __initData4;
      const items1 = [context1, sharedValue];
      const animatedStyle = obj2.useAnimatedStyle(J);
      const layoutEffect = top.useLayoutEffect(() => {
        const result = sharedValue.set(context1);
      }, items1);
      context1(context2[25])(() => {
        let useAlertStore = context(context2[13]).useAlertStore;
        const arr = closure_7(useAlertStore.getState().alerts);
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
          tmp(context2[13]).dismissAlert(key);
          const tmpResult = tmp(context2[13]);
          tmp(context2[18]).batchUpdates(() => {
            const useAlertStore = context(context2[13]).useAlertStore;
            return useAlertStore.setState({ alerts });
          });
          const tmpResult2 = tmp(context2[18]);
        }
        return true;
      });
      let str = "no-hide-descendants";
      if (0 === context1) {
        str = "auto";
      }
      const obj4 = {
        importantForAccessibility: str,
        accessibilityElementsHidden: 0 !== context1,
        style: null,
        onLayout(nativeEvent) {
          const result = context2.set(nativeEvent.nativeEvent.layout.height);
        },
        children: null,
      };
      const items2 = [tmp3.content, animatedStyle];
      obj4.style = items2;
      let obj5 = { style: tmp3.overflow, children: null };
      const items3 = [header, , ,];
      let obj6 = { spacing: 8, style: tmp3.body, children: null };
      const items4 = [
        closure_12(context(context2[26]).Text, {
          ref,
          variant: "heading-lg/bold",
          accessibilityRole: "header",
          color: "mobile-text-heading-primary",
          children: title,
        }),
      ];
      let tmp16Result = null;
      if (null != content) {
        tmp16Result = null;
        if ("" !== content) {
          const obj7 = { variant: "text-md/medium", color: "text-default", style: tmp3.contentText, children: content };
          tmp16Result = closure_12(tmp5(tmp6[26]).Text, obj7);
        }
      }
      items4[1] = tmp16Result;
      obj6.children = items4;
      items3[1] = closure_13(context(context2[27]).Stack, obj6);
      items3[2] = extraContent;
      let tmp16Result2 = null;
      if (null != actions) {
        const obj8 = { children: actions };
        tmp16Result2 = closure_12(closure_36, obj8);
      }
      const obj9 = { alwaysBounceVertical: false, children: null };
      items3[3] = tmp16Result2;
      obj5.children = closure_13(context(context2[27]).Stack, { spacing: 24, children: items3 });
      obj9.children = closure_12(bottom, obj5);
      obj4.children = closure_12(closure_11, obj9);
      return closure_12(context1(context2[14]).View, obj4);
    };
let closure_29 = tmp7;
function withAlertModalSpring(value, fn) {
  return spring.withSpring(value, obj3, "animate-always", fn);
}
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useDismissModalCallback() {
      const cResult = context(576).c(2);
      context = noop.useContext(closure_20);
      if (cResult[0] !== context) {
        const fn = function t() {
          useAlertStore2.dismissAlert(context);
        };
        cResult[0] = context;
        cResult[1] = fn;
        let tmp3 = fn;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : function useDismissModalCallback() {
      const context = noop.useContext(closure_20);
      const items = [context];
      return noop.useCallback(() => {
        useAlertStore2.dismissAlert(context);
      }, items);
    };
withAlertModalSpring.__closure = { withSpring: fn(5378).withSpring, MODAL_SPRING: obj3 };
withAlertModalSpring.__workletHash = 7851172244290;
withAlertModalSpring.__initData = {
  code: "function withAlertModalSpring_AlertModalNativeTsx5(value,callback){const{withSpring,MODAL_SPRING}=this.__closure;return withSpring(value,MODAL_SPRING,'animate-always',callback);}",
};
const __initData5 = {
  code: "function AlertModalNativeTsx6(){const{sharedTransitionState}=this.__closure;return sharedTransitionState.get();}",
};
const __initData6 = {
  code: "function AlertModalNativeTsx7(transitionState_0){const{TransitionStates,sharedVisible,runOnJS,cleanUp}=this.__closure;if(transitionState_0===TransitionStates.YEETED){if(sharedVisible.get()===1){sharedVisible.set(0);}else{runOnJS(cleanUp)();}}else{sharedVisible.set(1);}}",
};
const __initData7 = {
  code: "function AlertModalNativeTsx8(){const{sharedTransitionState}=this.__closure;return sharedTransitionState.get();}",
};
const __initData8 = {
  code: "function AlertModalNativeTsx9(transitionState_0){const{TransitionStates,sharedVisible,runOnJS,cleanUp}=this.__closure;if(transitionState_0===TransitionStates.YEETED){if(sharedVisible.get()===1){sharedVisible.set(0);}else{runOnJS(cleanUp)();}}else{sharedVisible.set(1);}}",
};
ReactCompilerGating = fn(558);
let closure_35 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSharedAnimationState() {
      const cResult = context(sharedValue[12]).c(10);
      context = noop.useContext(closure_17);
      const context1 = noop.useContext(closure_18);
      const obj = context(sharedValue[12]);
      let num = 0;
      if (context === context(sharedValue[10]).TransitionStates.MOUNTED) {
        num = 1;
      }
      sharedValue = context(sharedValue[14]).useSharedValue(num);
      obj3 = context(sharedValue[14]);
      const sharedValue1 = context(sharedValue[14]).useSharedValue(context);
      if (cResult[0] === sharedValue1) {
        if (cResult[1] === context) {
          let tmp8 = cResult[2];
        }
        if (cResult[3] === sharedValue1) {
          if (cResult[4] === sharedValue) {
            if (cResult[5] === context) {
              let tmp9 = cResult[6];
            }
            const layoutEffect = noop.useLayoutEffect(tmp8, tmp9);
            const fn2 = function o() {
              return sharedValue1.get();
            };
            const obj4 = { sharedTransitionState: sharedValue1 };
            fn2.__closure = obj4;
            fn2.__workletHash = 11706255444795;
            fn2.__initData = __initData5;
            const fn3 = function s(arg0) {
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
            const obj5 = {
              TransitionStates: tmp(tmp2[10]).TransitionStates,
              sharedVisible: sharedValue,
              runOnJS: tmp(tmp2[14]).runOnJS,
              cleanUp: context1,
            };
            fn3.__closure = obj5;
            fn3.__workletHash = 819342653838;
            fn3.__initData = __initData6;
            const animatedReaction = tmp(tmp2[14]).useAnimatedReaction(fn2, fn3);
            if (cResult[7] === sharedValue1) {
              if (cResult[8] === sharedValue) {
                let tmp14 = cResult[9];
              }
              return tmp14;
            }
            const items = [sharedValue1, sharedValue];
            cResult[7] = sharedValue1;
            cResult[8] = sharedValue;
            cResult[9] = items;
            tmp14 = items;
            const tmpResult2 = tmp(tmp2[14]);
          }
        }
        const items1 = [sharedValue, context, sharedValue1];
        cResult[3] = sharedValue1;
        cResult[4] = sharedValue;
        cResult[5] = context;
        cResult[6] = items1;
        tmp9 = items1;
      }
      const fn = function t() {
        const result = sharedValue1.set(context);
      };
      cResult[0] = sharedValue1;
      cResult[1] = context;
      cResult[2] = fn;
      tmp8 = fn;
      let tmpResult = context(sharedValue[14]);
    }
  : function useSharedAnimationState() {
      const context = noop.useContext(closure_17);
      const context1 = noop.useContext(closure_18);
      let num = 0;
      if (context === context(sharedValue[10]).TransitionStates.MOUNTED) {
        num = 1;
      }
      sharedValue = context(sharedValue[14]).useSharedValue(num);
      const obj2 = context(sharedValue[14]);
      const sharedValue1 = context(sharedValue[14]).useSharedValue(context);
      const items = [sharedValue, context, sharedValue1];
      const layoutEffect = noop.useLayoutEffect(() => {
        const result = sharedValue1.set(context);
      }, items);
      const tmp3Result = context(sharedValue[14]);
      const fn = function n() {
        return sharedValue1.get();
      };
      fn.__closure = { sharedTransitionState: sharedValue1 };
      fn.__workletHash = 1529466560437;
      fn.__initData = __initData7;
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
      const tmp3Result2 = context(sharedValue[14]);
      fn2.__closure = {
        TransitionStates: context(sharedValue[10]).TransitionStates,
        sharedVisible: sharedValue,
        runOnJS: context(sharedValue[14]).runOnJS,
        cleanUp: context1,
      };
      fn2.__workletHash = 15761977288448;
      fn2.__initData = __initData8;
      const animatedReaction = tmp3Result2.useAnimatedReaction(fn, fn2);
      const items1 = [sharedValue1, sharedValue];
      return items1;
    };
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AlertActions(children) {
      const cResult = c.c(2);
      children = children.children;
      if (cResult[0] !== children) {
        const obj2 = { spacing: 12, children };
        const tmp6 = __initData(Stack_Stack.Stack, obj2);
        cResult[0] = children;
        cResult[1] = tmp6;
        let tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : function AlertActions(children) {
      return __initData(Stack_Stack.Stack, { spacing: 12, children: children.children });
    };
let closure_36 = tmp8;
ReactCompilerGating = fn(558);
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AlertActionButton(onPress) {
      const cResult = require("c").c(11);
      if (cResult[0] !== onPress) {
        onPress = onPress.onPress;
        _require = onPress;
        const loading = onPress.loading;
        const tmp9 = _objectWithoutProperties(onPress, closure_3);
        cResult[0] = onPress;
        cResult[1] = loading;
        cResult[2] = onPress;
        cResult[3] = tmp9;
        let tmp6 = tmp9;
        let first = loading;
      } else {
        first = cResult[1];
        _require = cResult[2];
        tmp6 = cResult[3];
      }
      const tmp10 = _slicedToArray(noop.useState(false), 2);
      closure_1 = tmp10[1];
      context = noop.useContext(closure_20);
      if (first == null) {
        first = tmp10[0];
      }
      if (cResult[4] === context) {
        if (cResult[5] === tmp5) {
          let tmp12 = cResult[6];
        }
        if (cResult[7] === tmp6) {
          if (cResult[8] === first) {
            if (cResult[9] === tmp12) {
              let tmp13 = cResult[10];
            }
            return tmp13;
          }
        }
        let obj2 = {};
        const merged = Object.assign(tmp6);
        obj2.grow = true;
        obj2.loading = first;
        obj2.onPress = tmp12;
        const tmp18 = closure_12(tmp(tmp2[29]).Button, obj2);
        cResult[7] = tmp6;
        cResult[8] = first;
        cResult[9] = tmp12;
        cResult[10] = tmp18;
        tmp13 = tmp18;
      }
      _require = asyncGeneratorStep(async (arg0) => {
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
            return { value: "IconComponent", done: "+51" };
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
                closure_0(context[13]).dismissAlert(c2);
                c4 = 3;
                obj3 = closure_0(context[13]);
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
      function t2() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      cResult[4] = context;
      cResult[5] = tmp5;
      cResult[6] = t2;
      tmp12 = t2;
      let obj = require("c");
      tmp = _require;
      tmp2 = context;
    }
  : function AlertActionButton(arg0) {
      ({ onPress: closure_0, loading } = arg0);
      const merged = Object.assign(arg0, Object.assign({ onPress: 0, loading: 0 }));
      const tmp2 = _slicedToArray(noop.useState(false), 2);
      closure_1 = tmp2[1];
      dependencyMap = noop.useContext(closure_20);
      let obj = {};
      const merged1 = Object.assign(merged);
      obj.grow = true;
      if (loading == null) {
        loading = tmp2[0];
      }
      obj.loading = loading;
      _require = asyncGeneratorStep(async (arg0) => {
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
            return { value: "IconComponent", done: "+51" };
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
                closure_0(dependencyMap[13]).dismissAlert(c2);
                c4 = 3;
                obj3 = closure_0(dependencyMap[13]);
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
      return closure_12(require("components/Button/Button").Button, obj);
    };
let closure_37 = tmp9;
size = fn(2);
let result = size.fileFinishedImporting("design/components/AlertModal/native/AlertModal.native.tsx");

export const AlertModalContainer = memoResult;
export const useDismissModalCallback = tmp6;
export const AlertModal = tmp7;
export const AlertActions = tmp8;
export const AlertActionButton = tmp9;
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
    __initData(closure_37, { variant, text: confirmText, onPress: onConfirm }),
    __initData(closure_37, { variant: "secondary", text: cancelText, onPress: onCancel }),
  ];
  obj3.children = items;
  obj2.actions = map1(closure_1_14, obj3);
  useAlertStore2.openAlert(key, __initData(closure_29, obj2), onCloseCallback, { dismissable });
  const obj4 = { dismissable };
};
