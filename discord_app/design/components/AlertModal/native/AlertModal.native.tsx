// === Module 6122: AlertModal ===

// Module 6122 (AlertModal)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 2017 */;
import native from "native" /* 5229 */;
import Backdrop from "Backdrop" /* 5756 */;
import useAlertStore2 from "useAlertStore" /* 6118 */;
import OverlayViewDefault from "OverlayView" /* 6123 */;
import Dialog from "Dialog" /* 6175 */;
import setAccessibilityFocus from "setAccessibilityFocus" /* 6179 */;
import useBackPressHandlerDefault from "useBackPressHandler" /* 6180 */;
import Stack_Stack from "Stack/Stack" /* 6185 */;
import useTrackImpressionDefault from "useTrackImpression" /* 6186 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import _toArray from "_toArray" /* 717 */;
import noop from "module_19" /* 19 */;

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
    tmp(6118).dismissAlert(key);
    const tmpResult = tmp(6118);
    tmp(1259).batchUpdates(() => {
      const useAlertStore = alerts(c2[11]).useAlertStore;
      return useAlertStore.setState({ alerts });
    });
    const tmpResult2 = tmp(1259);
  }
}
function AlertModalBackdrop() {
  const context = noop.useContext(closure_16);
  [tmp3, tmp4] = useSharedAnimationState();
  const tmp2 = _slicedToArray(useSharedAnimationState(), 2);
  const alertStore = useAlertStore2.useAlertStore((arg0) => {
    const first = arg0.alerts[0];
    let dismissable;
    if (first != null) {
      dismissable = first.dismissable;
    }
    return false !== dismissable;
  });
  items = [closure_22, withAlertModalSpring, tmp4, tmp3, native.TransitionStates, _mod1705.scheduleOnRN, context];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
  class AlertModalNativeTsx1 {
    constructor() {
      obj = {
        opacity: closure_0(closure_1.get(), (arg0) => {
              let tmp = true === arg0;
              if (tmp) {
                tmp = 0 === _undefined2.get();
              }
              if (tmp) {
                tmp = closure_1_2.get() === constants.YEETED;
              }
              if (tmp) {
                closure_1_4(closure_1_5);
              }
            })
      };
      return obj;
    }
  }
  const items1 = [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
  AlertModalNativeTsx1.__closure = items1;
  AlertModalNativeTsx1.__workletHash = 8433984846056;
  AlertModalNativeTsx1.__initData = tmp8;
  const animatedStyle = _mod1652.useAnimatedStyle(AlertModalNativeTsx1);
  const obj3 = { blur: "strong", style: animatedStyle, onDismiss: null, accessibilityLabel: null };
  let tmp17 = null;
  if (alertStore) {
    tmp17 = dismissTopAlert;
  }
  obj3.onDismiss = tmp17;
  const intl = util.intl;
  obj3.accessibilityLabel = intl.string(util.t.Xkfav5);
  return closure_1_11(Backdrop.Backdrop, obj3);
}
class AlertModal {
  constructor(arg0) {
    ({ content, actions, trackingProps } = global);
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    obj = closure_6;
    ({ header, title, extraContent } = global);
    context = closure_6.useContext(closure_16);
    context1 = closure_6.useContext(closure_17);
    closure_0 = context1;
    tmp3 = closure_14();
    context2 = closure_6.useContext(closure_19);
    closure_1 = context2;
    tmp5 = closure_0;
    tmp6 = closure_2;
    ref = closure_6.useRef(null);
    closure_2 = ref;
    obj2 = closure_0(closure_2[12]);
    sharedValue = obj2.useSharedValue(context1);
    closure_3 = sharedValue;
    tmp9 = closure_4(useSharedAnimationState(), 2);
    tmp12 = closure_1;
    [tmp10, tmp11] = tmp9;
    tmp13 = closure_1(closure_2[21])();
    items = [];
    items[0] = context1;
    ({ top, bottom } = tmp13);
    effect = closure_6.useEffect(() => {
      if (0 === c0) {
        const obj2 = { ref, delay: 300 };
        const result = setAccessibilityFocus.setAccessibilityFocus(obj2);
      }
    }, items);
    obj3 = closure_0(closure_2[12]);
    items1 = [, , , , , , , , , , , , , ];
    items1[0] = closure_24;
    items1[1] = tmp11;
    items1[2] = tmp10;
    items1[3] = closure_0(closure_2[10]).TransitionStates;
    items1[4] = closure_0(closure_2[17]).scheduleOnRN;
    items1[5] = context;
    items1[6] = closure_1(closure_2[23])().height;
    items1[7] = 16;
    items1[8] = top;
    items1[9] = bottom;
    items1[10] = withAlertModalSpring;
    items1[11] = sharedValue;
    items1[12] = context2;
    items1[13] = closure_6.useContext(closure_0(closure_2[20]).AccessibilityPreferencesContext).reducedMotion.enabled;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    closure_9 = undefined;
    closure_10 = undefined;
    closure_11 = undefined;
    closure_12 = undefined;
    [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28] = items1;
    class AlertModalNativeTsx2 {
      constructor() {
        diff = closure_5 - 2 * closure_6;
        obj = { position: "absolute", opacity: null, zIndex: null, height: null, maxHeight: null, transform: null };
        tmp3 = closure_9;
        obj2 = closure_0;
        result = 2 * Math.max(closure_7, closure_8);
        obj.opacity = closure_9(closure_0.get(), function onComplete(arg0) {
          let tmp = true === arg0;
          if (tmp) {
            tmp = 0 === _undefined.get();
          }
          if (tmp) {
            tmp = _undefined2.get() === constants.YEETED;
          }
          if (tmp) {
            _undefined3(closure_1_4);
          }
        });
        obj3 = closure_10;
        obj.zIndex = 10 - closure_10.get();
        str = "auto";
        if (closure_10.get() > 0) {
          tmp4 = closure_11;
          str = closure_11.get();
        }
        obj.height = str;
        obj.maxHeight = diff - result;
        if (closure_12) {
          items = [];
        } else {
          num = 0.7;
          num2 = 1;
          if (1 === obj2.get()) {
            num3 = 0.1;
            num = 1 - 0.1 * obj3.get();
          }
          obj1 = { scale: null };
          obj1.scale = tmp3(num);
          items = [, ];
          items[0] = obj1;
          if (1 === obj2.get()) {
            result1 = [0, -20, -34][obj3.get(obj3)];
            tmp7 = null;
            if (result1 == null) {
              num5 = -12;
              result1 = -12 * obj2.get();
            }
            diff1 = result1;
          } else {
            num4 = 50;
            diff1 = 50 - 50 * obj3.get();
          }
          obj6 = { translateY: null };
          obj6.translateY = tmp3(diff1);
          items[1] = obj6;
        }
        obj.transform = items;
        return obj;
      }
    }
    items2 = [, , , , , , , , , , , , ];
    items2[0] = tmp16;
    items2[1] = tmp17;
    items2[2] = tmp18;
    items2[3] = tmp19;
    items2[4] = tmp20;
    items2[5] = tmp21;
    items2[6] = tmp22;
    items2[7] = tmp23;
    items2[8] = tmp24;
    items2[9] = tmp25;
    items2[10] = tmp26;
    items2[11] = tmp27;
    items2[12] = tmp28;
    AlertModalNativeTsx2.__closure = items2;
    AlertModalNativeTsx2.__workletHash = 6860087159970;
    AlertModalNativeTsx2.__initData = tmp15;
    items3 = [, ];
    items3[0] = context1;
    items3[1] = sharedValue;
    animatedStyle = obj3.useAnimatedStyle(AlertModalNativeTsx2);
    layoutEffect = obj.useLayoutEffect(() => {
      const result = _undefined3.set(c0);
    }, items3);
    tmp31 = tmp12(tmp6[24])(() => {
      let useAlertStore = _undefined(ref[11]).useAlertStore;
      const arr = _undefined4(useAlertStore.getState().alerts);
      const first = arr[0];
      _undefined = arr.slice(1);
      let tmp4 = null != first;
      if (tmp4) {
        tmp4 = false === first.dismissable;
      }
      if (!tmp4) {
        let key;
        if (first != null) {
          key = first.key;
        }
        tmp(ref[11]).dismissAlert(key);
        const tmpResult = tmp(ref[11]);
        tmp(ref[16]).batchUpdates(() => {
          const useAlertStore = alerts(c2[11]).useAlertStore;
          return useAlertStore.setState({ alerts });
        });
        const tmpResult2 = tmp(ref[16]);
      }
      return true;
    });
    tmp32 = closure_12;
    tmp33 = 0 === context1;
    str = "no-hide-descendants";
    if (tmp33) {
      str = "auto";
    }
    obj1 = {
      importantForAccessibility: str,
      accessibilityElementsHidden: 0 !== context1,
      style: null,
      onLayout(nativeEvent) {
            const result = _undefined2.set(nativeEvent.nativeEvent.layout.height);
          },
      children: null
    };
    items4 = [, ];
    items4[0] = tmp3.content;
    items4[1] = animatedStyle;
    obj1.style = items4;
    tmp34 = null;
    if (tmp33) {
      tmp34 = null;
      if (null != trackingProps) {
        tmp35 = closure_11;
        tmp36 = AlertModalImpression;
        obj11 = { trackingProps: null };
        obj11.trackingProps = trackingProps;
        tmp34 = closure_11(AlertModalImpression, obj11);
      }
    }
    items5 = [, ];
    items5[0] = tmp34;
    tmp37 = closure_11;
    obj12 = { style: tmp3.overflow, children: null };
    tmp38 = closure_9;
    tmp39 = closure_7;
    items6 = [, , , ];
    items6[0] = header;
    obj13 = { spacing: 8, style: tmp3.body, children: null };
    items7 = [, ];
    items7[0] = closure_11(tmp5(tmp6[26]).Text, { ref, variant: "heading-lg/semibold", accessibilityRole: "header", color: "mobile-text-heading-primary", children: title });
    tmp37Result = null;
    if (null != content) {
      str2 = "";
      tmp37Result = null;
      if ("" !== content) {
        obj14 = { variant: "body-md/medium", color: "text-default", style: null, children: null };
        obj14.style = tmp3.contentText;
        obj14.children = content;
        tmp37Result = tmp37(tmp5(tmp6[26]).Text, obj14);
      }
    }
    items7[1] = tmp37Result;
    obj13.children = items7;
    items6[1] = tmp32(tmp5(tmp6[25]).Stack, obj13);
    items6[2] = extraContent;
    tmp37Result1 = null;
    if (null != actions) {
      tmp42 = AlertActions;
      obj15 = { children: null };
      obj15.children = actions;
      tmp37Result1 = tmp37(AlertActions, obj15);
    }
    obj16 = { alwaysBounceVertical: false, children: null };
    items6[3] = tmp37Result1;
    obj12.children = tmp32(tmp5(tmp6[25]).Stack, { spacing: 24, children: items6 });
    obj16.children = tmp37(tmp39, obj12);
    items5[1] = tmp37(tmp38, obj16);
    obj1.children = items5;
    return tmp32(tmp12(tmp6[12]).View, obj1);
  }
}
function AlertModalImpression(trackingProps) {
  trackingProps = trackingProps.trackingProps;
  let MODAL = trackingProps.impressionType;
  if (MODAL == null) {
    MODAL = ImpressionTypes.MODAL;
  }
  const obj = { type: MODAL, name: null, properties: null };
  const impression = trackingProps.impression;
  let impressionName;
  if (impression != null) {
    impressionName = impression.impressionName;
  }
  obj.name = impressionName;
  const impression2 = trackingProps.impression;
  let impressionProperties;
  if (impression2 != null) {
    impressionProperties = impression2.impressionProperties;
  }
  obj.properties = impressionProperties;
  useTrackImpressionDefault(obj, { disableTrack: trackingProps.disableTrack, trackOnInitialLoad: true });
  return null;
}
function useSharedAnimationState() {
  const context = noop.useContext(closure_15);
  c0 = context;
  const context1 = noop.useContext(closure_16);
  let num = 0;
  if (context === native.TransitionStates.MOUNTED) {
    num = 1;
  }
  const sharedValue = _mod1652.useSharedValue(num);
  const sharedValue1 = _mod1652.useSharedValue(context);
  c1 = sharedValue1;
  items = [sharedValue, context, sharedValue1];
  const layoutEffect = noop.useLayoutEffect(() => {
    const result = _undefined2.set(c0);
  }, items);
  const tmp3Result = _mod1652;
  const items1 = [closure_28, sharedValue1];
  c0 = undefined;
  [tmp8, tmp9] = items1;
  class AlertModalNativeTsx4 {
    constructor() {
      return closure_0.get();
    }
  }
  const items2 = [tmp9];
  AlertModalNativeTsx4.__closure = items2;
  AlertModalNativeTsx4.__workletHash = 2986600542944;
  AlertModalNativeTsx4.__initData = tmp8;
  const items3 = [closure_29, native.TransitionStates, sharedValue, _mod1705.scheduleOnRN, context1];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp10, tmp11, tmp12, tmp13, tmp14] = items3;
  class AlertModalNativeTsx5 {
    constructor(arg0) {
      if (arg0 === closure_0.YEETED) {
        obj = closure_1;
        num2 = 1;
        if (1 === closure_1.get()) {
          num3 = 0;
          result = obj.set(0);
        } else {
          tmp3 = closure_2;
          tmp4 = closure_3;
          tmp5 = closure_2(closure_3);
        }
      } else {
        tmp = closure_1;
        num = 1;
        result1 = closure_1.set(1);
      }
      return;
    }
  }
  const items4 = [tmp11, tmp12, tmp13, tmp14];
  AlertModalNativeTsx5.__closure = items4;
  AlertModalNativeTsx5.__workletHash = 3535842432212;
  AlertModalNativeTsx5.__initData = tmp10;
  const animatedReaction = _mod1652.useAnimatedReaction(AlertModalNativeTsx4, AlertModalNativeTsx5);
  const items5 = [sharedValue1, sharedValue];
  return items5;
}
class AlertActions {
  constructor(arg0) {
    return jsx(closure_0(closure_2[25]).Stack, { spacing: 12, children: global.children });
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
              closure_0(dependencyMap[11]).dismissAlert(c2);
              c4 = 3;
              const obj3 = closure_0(dependencyMap[11]);
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
    return tmp3(closure_0(closure_2[29]).Button, obj);
  }
}
get_ActivityIndicator = fn(17);
({ View: metroImportDefault, StyleSheet: closure_8, ScrollView: closure_9 } = get_ActivityIndicator);
const ImpressionTypes = fn(1340).ImpressionTypes;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const createStyles = fn(5170);
let obj = { root: { flex: 1, position: "relative", justifyContent: "center", alignItems: "center", paddingHorizontal: 16 }, content: null, overflow: null, body: null, contentText: null };
let size = { backgroundColor: nativeDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT, margin: 16, width: "100%", maxWidth: 400, height: "100%", borderRadius: nativeDefault.radii.xl, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
let merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
obj.content = size;
obj.overflow = { width: "100%", height: "100%", overflow: "hidden", padding: 24, position: "relative" };
obj.body = { alignItems: "center" };
obj.contentText = { textAlign: "center" };
const gesture = createStyles.createStyles(obj);
let context = noop.createContext(fn(5229).TransitionStates.YEETED);
let context2 = noop.createContext(fn(1083).NOOP);
const context3 = noop.createContext(0);
const context4 = noop.createContext("");
const context5 = noop.createContext(null);
let closure_22 = { code: "(function AlertModalNativeTsx1(){let[withAlertModalSpring,sharedVisible,sharedTransitionState,TransitionStates,scheduleOnRN,cleanUp]=this.__closure;return{opacity:withAlertModalSpring(sharedVisible.get(),function(finished){if(finished===true&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){scheduleOnRN(cleanUp);}})};})" };
let closure_24 = { code: "(function AlertModalNativeTsx2(){let[sharedVisible,sharedTransitionState,TransitionStates,scheduleOnRN,cleanUp,windowHeight,ALERT_MODAL_MARGIN,safeAreaTop,safeAreaBottom,withAlertModalSpring,sharedIndex,sharedTopHeight,useReducedMotion]=this.__closure;var _CARD_OFFSETS$sharedI;function onComplete(finished){if(finished===true&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){scheduleOnRN(cleanUp);}}const CARD_OFFSETS=[0,-20,-34];const maxHeight=windowHeight-ALERT_MODAL_MARGIN*2-Math.max(safeAreaTop,safeAreaBottom)*2;return{position:'absolute',opacity:withAlertModalSpring(sharedVisible.get(),onComplete),zIndex:10-sharedIndex.get(),height:sharedIndex.get()>0?sharedTopHeight.get():'auto',maxHeight:maxHeight,transform:useReducedMotion?[]:[{scale:withAlertModalSpring(sharedVisible.get()===1?1-sharedIndex.get()*0.1:0.7)},{translateY:withAlertModalSpring(sharedVisible.get()===1?(_CARD_OFFSETS$sharedI=CARD_OFFSETS[sharedIndex.get()])!==null&&_CARD_OFFSETS$sharedI!==void 0?_CARD_OFFSETS$sharedI:sharedVisible.get()*-12:50-sharedIndex.get()*50)}]};})" };
let items = [{ code: "(function withAlertModalSpring_AlertModalNativeTsx3(value,callback){let[withSpring,MODAL_SPRING]=this.__closure;return withSpring(value,MODAL_SPRING,'animate-always',callback);})" }, fn(5791).withSpring, { overshootClamping: true, damping: 35, stiffness: 450, mass: 0.5 }];
let closure_129_0;
let closure_129_1;
[tmp6, tmp7, tmp8] = items;
function withAlertModalSpring(arg0, arg1) {
  return require(arg0, importDefault, "animate-always", arg1);
}
let items1 = [tmp7, tmp8];
withAlertModalSpring.__closure = items1;
withAlertModalSpring.__workletHash = 11763504821693;
withAlertModalSpring.__initData = tmp6;
let closure_28 = { code: "(function AlertModalNativeTsx4(){let[sharedTransitionState]=this.__closure;return sharedTransitionState.get();})" };
let closure_29 = { code: "(function AlertModalNativeTsx5(transitionState){let[TransitionStates,sharedVisible,scheduleOnRN,cleanUp]=this.__closure;if(transitionState===TransitionStates.YEETED){if(sharedVisible.get()===1){sharedVisible.set(0);}else{scheduleOnRN(cleanUp);}}else{sharedVisible.set(1);}})" };
size = fn(2);
let result = size.fileFinishedImporting("design/components/AlertModal/native/AlertModal.native.tsx");

export const AlertModalContainer = noop.memo(function AlertModalContainer() {
  const tmp = closure_14();
  items = tmp;
  const alertStore = items(items[11]).useAlertStore((alerts) => alerts.alerts);
  let obj = items(items[11]);
  const tmp2 = items;
  const tmp3 = items;
  const sharedValue = items(items[12]).useSharedValue(0);
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
    const obj2 = { onDismiss: dismissTopAlert, children: closure_2_11(metroImportDefault, { style: items.root, pointerEvents: "box-none", children }) };
    obj.children = closure_2_11(Dialog.Dialog, obj2);
    return closure_2_11(OverlayViewDefault, obj);
  }, items2);
  const callback1 = noop.useCallback((value, type, value2, value3) => {
    if ("alert" === type.type) {
      let node = type.alert.node;
    } else {
      node = closure_2_11(AlertModalBackdrop, {});
    }
    let num = -1;
    if ("alert" === type.type) {
      num = type.index;
    }
    const obj = { value: sharedValue, children: null };
    const obj2 = { value: value3, children: null };
    const obj3 = { value: value2, children: null };
    const obj4 = { value: num, children: closure_2_11(redux4.Provider, { value, children: closure_2_11(noop.Suspense, { fallback: null, children: node }) }) };
    obj3.children = closure_2_11(redux3.Provider, obj4);
    obj2.children = closure_2_11(redux.Provider, obj3);
    obj.children = closure_2_11(redux2.Provider, obj2);
    return closure_2_11(redux5.Provider, obj, value);
  }, items3);
  return closure_11(tmp2(tmp3[10]).TransitionGroup, { wrapChildren: callback, items, renderItem: callback1, getItemKey: getAlertModalItemKey });
});
export function useDismissModalCallback() {
  const context = noop.useContext(closure_18);
  items = [context];
  return noop.useCallback(() => {
    useAlertStore2.dismissAlert(context);
  }, items);
}
export { AlertModal };
export { AlertActions };
export { AlertActionButton };
export function showConfirmModal(arg0) {
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
  const obj3 = { children: null };
  items = [closure_1_11(AlertActionButton, { variant, text: confirmText, onPress: onConfirm }), closure_1_11(AlertActionButton, { variant: "secondary", text: cancelText, onPress: onCancel })];
  obj3.children = items;
  obj2.actions = application_id(state, obj3);
  useAlertStore2.openAlert(key, closure_1_11(AlertModal, obj2), onCloseCallback, { dismissable });
  const obj4 = { dismissable };
}