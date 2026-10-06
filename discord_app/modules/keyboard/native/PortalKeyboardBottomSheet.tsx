// === Module 11836: PortalKeyboardBottomSheet ===

// Module 11836 (PortalKeyboardBottomSheet)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1881 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import HapticUtils from "HapticUtils" /* 4861 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5777 */;
import BottomSheetModal from "BottomSheetModal" /* 6119 */;
import native from "native" /* 8602 */;
import isChannelFocused from "isChannelFocused" /* 11839 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import NativeMenuStore from "NativeMenuStore" /* 9625 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
let forceCloseResult, ref;

let Platform;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let size;
({ Platform, View: hasOwnProperty } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = PlatformUtils.isIOS();
let createStyles = createStyles_mod;
let obj = { container: { position: "absolute", top: 0, left: 0 }, background: obj2, headerContainer: size, headerContainerScreenReaderEnabled: obj3, roundingView: { overflow: "hidden", display: "flex" } };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, overflow: "hidden" };
createStyles = createStyles.createStyles;
size = { borderTopLeftRadius: nativeDefault.radii.none, borderTopRightRadius: nativeDefault.radii.none, width: "100%", height: native.ACTION_SHEET_DRAG_HANDLE_HEIGHT, marginBottom: -native.ACTION_SHEET_DRAG_HANDLE_HEIGHT };
obj3 = { marginBottom: -nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let handleCollapse;
  let style;
  const obj = react2;
  const cResult = obj.c(9);
  ({ style, handleCollapse } = arg0);
  const tmp4 = closure_10();
  let prop;
  const obj2 = useIsScreenReaderEnabled;
  if (obj2.useIsScreenReaderEnabled()) {
    prop = tmp4.headerContainerScreenReaderEnabled;
  }
  if (cResult[0] === style) {
    if (cResult[1] === tmp4.headerContainer) {
      let tmp6;
      let tmp7;
      if (cResult[2] === prop) {
        tmp6 = cResult[3];
      }
      if (cResult[4] !== handleCollapse) {
        const obj3 = { onPress: handleCollapse };
        const tmp9 = metroImportDefault(native.ActionSheetDragHandle, obj3);
        cResult[4] = handleCollapse;
        cResult[5] = tmp9;
        tmp7 = tmp9;
      } else {
        tmp7 = cResult[5];
      }
      if (cResult[6] === tmp6) {
        let tmp10;
        if (cResult[7] === tmp7) {
          tmp10 = cResult[8];
        }
        return tmp10;
      }
      const obj4 = { style: tmp6, children: tmp7 };
      const tmp13 = metroImportDefault(hasOwnProperty, obj4);
      cResult[6] = tmp6;
      cResult[7] = tmp7;
      cResult[8] = tmp13;
      tmp10 = tmp13;
    }
  }
  const items = [tmp4.headerContainer, prop, style];
  cResult[0] = style;
  cResult[1] = tmp4.headerContainer;
  cResult[2] = prop;
  cResult[3] = items;
  tmp6 = items;
}) : ((arg0) => {
  let handleCollapse;
  let style;
  ({ style, handleCollapse } = arg0);
  const tmp = closure_10();
  const items = [tmp.headerContainer, , ];
  let prop;
  const obj = useIsScreenReaderEnabled;
  if (obj.useIsScreenReaderEnabled()) {
    prop = tmp.headerContainerScreenReaderEnabled;
  }
  items[1] = prop;
  items[2] = style;
  const obj2 = { style: items, children: metroImportDefault(native.ActionSheetDragHandle, { onPress: handleCollapse }) };
  return metroImportDefault(hasOwnProperty, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let pointerEvents;
  let roundingStyle;
  let style;
  const obj = react2;
  const cResult = obj.c(7);
  ({ pointerEvents, style, roundingStyle } = arg0);
  const tmp3 = closure_10();
  if (cResult[0] === roundingStyle) {
    if (cResult[1] === style) {
      let tmp4;
      if (cResult[2] === tmp3.background) {
        tmp4 = cResult[3];
      }
      if (cResult[4] === pointerEvents) {
        let tmp5;
        if (cResult[5] === tmp4) {
          tmp5 = cResult[6];
        }
        return tmp5;
      }
      const obj2 = { pointerEvents, style: tmp4 };
      const tmp8 = metroImportDefault(ReanimatedRexportDefault.View, obj2);
      cResult[4] = pointerEvents;
      cResult[5] = tmp4;
      cResult[6] = tmp8;
      tmp5 = tmp8;
    }
  }
  const items = [style, tmp3.background, roundingStyle];
  cResult[0] = roundingStyle;
  cResult[1] = style;
  cResult[2] = tmp3.background;
  cResult[3] = items;
  tmp4 = items;
}) : ((arg0) => {
  let items;
  let pointerEvents;
  let roundingStyle;
  let style;
  ({ pointerEvents, style, roundingStyle } = arg0);
  const obj = { pointerEvents, style: items };
  items = [style, closure_10().background, roundingStyle];
  closure_10();
  return metroImportDefault(ReanimatedRexportDefault.View, obj);
});
let closure_13 = { code: "function PortalKeyboardBottomSheetTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get()>0.975;}" };
let closure_14 = { code: "function PortalKeyboardBottomSheetTsx2(){const{isFullyExpanded}=this.__closure;return isFullyExpanded.get();}" };
let closure_15 = { code: "function PortalKeyboardBottomSheetTsx3(isFullyExpanded_0,isFullExpandedPrevious){const{forceMaxHeight,runOnJS,dismissGlobalKeyboard}=this.__closure;if(isFullExpandedPrevious==null){return;}if(!isFullyExpanded_0&&!forceMaxHeight){runOnJS(dismissGlobalKeyboard)();}}" };
let closure_16 = { code: "function PortalKeyboardBottomSheetTsx4(){const{interpolate,animatedIndex,cornerRadius}=this.__closure;return{borderTopLeftRadius:interpolate(animatedIndex.get(),[-1,0],[0,cornerRadius],\"clamp\"),borderTopRightRadius:interpolate(animatedIndex.get(),[-1,0],[0,cornerRadius],\"clamp\")};}" };
let closure_17 = { code: "function PortalKeyboardBottomSheetTsx5(){const{animatedIndex}=this.__closure;return Math.max(animatedIndex.get(),0)>0;}" };
let closure_18 = { code: "function PortalKeyboardBottomSheetTsx6(result,previous){const{runOnJS,setAccessibilityViewIsModal}=this.__closure;if(result===previous){return;}runOnJS(setAccessibilityViewIsModal)(result);}" };
const __initData = { code: "function PortalKeyboardBottomSheetTsx7(){const{animatedIndex}=this.__closure;return animatedIndex.get()>0.975;}" };
const __initData2 = { code: "function PortalKeyboardBottomSheetTsx8(){const{isFullyExpanded}=this.__closure;return isFullyExpanded.get();}" };
const __initData3 = { code: "function PortalKeyboardBottomSheetTsx9(isFullyExpanded_0,isFullExpandedPrevious){const{forceMaxHeight,runOnJS,dismissGlobalKeyboard}=this.__closure;if(isFullExpandedPrevious==null){return;}if(!isFullyExpanded_0&&!forceMaxHeight){runOnJS(dismissGlobalKeyboard)();}}" };
const __initData4 = { code: "function PortalKeyboardBottomSheetTsx10(){const{interpolate,animatedIndex,cornerRadiusInputStart,cornerRadiusInputEnd,cornerRadius}=this.__closure;return{borderTopLeftRadius:interpolate(animatedIndex.get(),[cornerRadiusInputStart,cornerRadiusInputEnd],[0,cornerRadius],'clamp'),borderTopRightRadius:interpolate(animatedIndex.get(),[cornerRadiusInputStart,cornerRadiusInputEnd],[0,cornerRadius],'clamp')};}" };
const __initData5 = { code: "function PortalKeyboardBottomSheetTsx11(){const{animatedIndex}=this.__closure;return Math.max(animatedIndex.get(),0)>0;}" };
const __initData6 = { code: "function PortalKeyboardBottomSheetTsx12(result,previous){const{runOnJS,setAccessibilityViewIsModal}=this.__closure;if(result===previous)return;runOnJS(setAccessibilityViewIsModal)(result);}" };
ReactCompilerGating = ReactCompilerGating_mod;
const forwardRefResult = react.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((animatedIndex, arg1) => {
  let animatedPosition;
  let animationConfigs;
  let backdropComponent;
  let chatInputRef;
  let children;
  let disableHeaderRoundingAnimation;
  let enablePanDownToClose;
  let forceMaxHeight;
  let headerStyle;
  let isAppsKeyboard;
  let isFullyExpanded;
  let onAnimate;
  let onClose;
  let renderExpressionFooter;
  let rendersHandle;
  let roundingStyle;
  let roundingViewStyle;
  let width;
  let tmp = animatedIndex;
  let obj = animatedIndex(onClose[10]);
  const cResult = obj.c(82);
  animatedIndex = animatedIndex.animatedIndex;
  ({ animatedPosition, chatInputRef } = animatedIndex);
  ({ children, isAppsKeyboard, animationConfigs, onClose } = animatedIndex);
  ({ backdropComponent, headerStyle } = animatedIndex);
  ({ disableHeaderRoundingAnimation, roundingViewStyle, onAnimate } = animatedIndex);
  ({ rendersHandle, width, forceMaxHeight, enablePanDownToClose, renderExpressionFooter } = animatedIndex);
  let tmp4 = undefined !== isAppsKeyboard;
  const transitionState = animatedIndex.transitionState;
  if (tmp4) {
    tmp4 = isAppsKeyboard;
  }
  isAppsKeyboard = tmp4;
  const open = undefined === rendersHandle || rendersHandle;
  let closure_7 = tmp5;
  let tmp7 = closure_10();
  ref = onAnimate.useRef(null);
  if (cResult[0] === (undefined !== enablePanDownToClose && enablePanDownToClose)) {
    let tmp9;
    let tmp16;
    if (cResult[1] === (undefined !== forceMaxHeight && forceMaxHeight)) {
      tmp9 = cResult[2];
    }
    const tmp12 = chatInputRef(onClose[13])(tmp9);
    const tmp13 = transitionState === tmp(onClose[14]).TransitionStates.YEETED;
    closure_9 = tmp13;
    const tmpResult = tmp(onClose[15]);
    const bottomSheetImperativeHandle = tmpResult.useBottomSheetImperativeHandle(arg1, ref);
    if (cResult[3] !== tmp13) {
      class W {
        constructor() {
          tmp = closure_9;
          if (tmp) {
            tmp2 = closure_8;
            current = closure_8.current;
            tmp3 = null;
            if (current != null) {
              forceCloseResult = current.forceClose();
            }
          }
          return;
        }
      }
      let items = [ref, tmp13];
      cResult[3] = tmp13;
      cResult[4] = W;
      cResult[5] = items;
      tmp16 = items;
    } else {
      class W {
        constructor() {
          tmp = closure_9;
          if (tmp) {
            tmp2 = closure_8;
            current = closure_8.current;
            tmp3 = null;
            if (current != null) {
              forceCloseResult = current.forceClose();
            }
          }
          return;
        }
      }
      tmp16 = cResult[5];
    }
    const layoutEffect = onAnimate.useLayoutEffect(W, tmp16);
    if (cResult[6] === animatedIndex) {
      class W {
        constructor() {
          tmp = closure_9;
          if (tmp) {
            tmp2 = closure_8;
            current = closure_8.current;
            tmp3 = null;
            if (current != null) {
              forceCloseResult = current.forceClose();
            }
          }
          return;
        }
      }
    }
    let obj3 = { animatedIndex, bottomSheetRef: ref, containerHeight: tmp12.containerHeight, forceMaxHeight: tmp5, isYeeted: tmp13, snapPoints: tmp12.snapPoints };
    cResult[6] = animatedIndex;
    cResult[7] = tmp12.containerHeight;
    cResult[8] = tmp12.snapPoints;
    cResult[9] = undefined !== forceMaxHeight && forceMaxHeight;
    cResult[10] = tmp13;
    cResult[11] = obj3;
    const tmp18 = obj3;
  }
  const obj4 = { forceMaxHeight: undefined !== forceMaxHeight && forceMaxHeight, enablePanDownToClose: undefined !== enablePanDownToClose && enablePanDownToClose };
  cResult[0] = undefined !== enablePanDownToClose && enablePanDownToClose;
  cResult[1] = undefined !== forceMaxHeight && forceMaxHeight;
  cResult[2] = obj4;
  tmp9 = obj4;
}) : ((animatedIndex, arg1) => {
  let AccessibilityViewAnimated;
  let View;
  let animatedPosition;
  let animationConfigs;
  let backdropComponent;
  let children;
  let disableHeaderRoundingAnimation;
  let forceMaxHeight;
  let headerStyle;
  let height;
  let items5;
  let items7;
  let left;
  let num;
  let obj11;
  let obj9;
  let onAnimate;
  let rendersHandle;
  let right;
  let roundingViewStyle;
  let tmp33;
  let tmp35;
  let transitionState;
  let width;
  let width2;
  animatedIndex = animatedIndex.animatedIndex;
  const chatInputRef = animatedIndex.chatInputRef;
  let flag = animatedIndex.isAppsKeyboard;
  ({ animatedPosition, children } = animatedIndex);
  if (flag === undefined) {
    flag = false;
  }
  const onClose = animatedIndex.onClose;
  ({ backdropComponent, headerStyle } = animatedIndex);
  ({ disableHeaderRoundingAnimation, onAnimate } = animatedIndex);
  ({ rendersHandle, animationConfigs, transitionState, roundingViewStyle } = animatedIndex);
  if (rendersHandle === undefined) {
    rendersHandle = true;
  }
  ({ width, forceMaxHeight } = animatedIndex);
  if (forceMaxHeight === undefined) {
    forceMaxHeight = false;
  }
  let flag2 = animatedIndex.enablePanDownToClose;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = animatedIndex.renderExpressionFooter;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let isScreenReaderEnabled;
  let derivedValue;
  let token;
  let animatedStyle;
  closure_14 = undefined;
  let tmp = isScreenReaderEnabled();
  let obj = headerStyle;
  ref = headerStyle.useRef(null);
  const tmp4 = flag;
  const tmp5 = chatInputRef(flag[13])({ forceMaxHeight, enablePanDownToClose: flag2 });
  let tmp7 = transitionState === animatedIndex(flag[14]).TransitionStates.YEETED;
  closure_9 = tmp7;
  let obj2 = animatedIndex(flag[15]);
  const bottomSheetImperativeHandle = obj2.useBottomSheetImperativeHandle(arg1, ref);
  let items = [ref, tmp7];
  const layoutEffect = headerStyle.useLayoutEffect(() => {
    if (closure_9) {
      const current = ref.current;
      if (current != null) {
        current.forceClose();
      }
    }
  }, items);
  let obj3 = { animatedIndex, bottomSheetRef: ref, containerHeight: tmp5.containerHeight, forceMaxHeight, isYeeted: tmp7, snapPoints: tmp5.snapPoints };
  chatInputRef(flag[16])(obj3);
  let items1 = [rendersHandle];
  const obj4 = animatedIndex(flag[17]);
  const stateFromStores = obj4.useStateFromStores(items1, () => rendersHandle.isOpen());
  if (flag3) {
    flag3 = !tmp7;
  }
  const tmp6Result = animatedIndex(tmp4[11]);
  isScreenReaderEnabled = tmp6Result.useIsScreenReaderEnabled();
  const items2 = [chatInputRef, tmp7, onAnimate, onClose, flag];
  const callback = obj.useCallback((arg0, arg1, arg2, arg3, arg4) => {
    if (closure_9) {
      if (-1 !== arg1) {
        if (onClose != null) {
          tmp18();
        }
      }
    }
    const tmp2 = arg0 !== arg1 && -1 !== arg1;
    if (tmp2) {
      if (onAnimate != null) {
        tmp4(arg0, arg1, arg4);
      }
      if (0 === arg0) {
        if (arg4 !== BottomSheetModal.ANIMATION_SOURCE.KEYBOARD) {
          const obj2 = HapticUtils;
          const result = obj2.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
        }
      } else {
        let tmp7 = 1 === arg0 && 0 === arg1;
        if (tmp7) {
          const obj = isChannelFocused;
          tmp7 = !obj.isChannelFocused();
        }
        if (tmp7) {
          tmp7 = flag;
        }
        if (tmp7) {
          const current = chatInputRef.current;
          if (current != null) {
            current.closeCustomKeyboard();
          }
        }
      }
    }
  }, items2);
  const tmp6Result7 = animatedIndex(tmp4[12]);
  class U {
    constructor() {
      return animatedIndex.get() > 0.975;
    }
  }
  U.__closure = { animatedIndex };
  U.__workletHash = 5453397517372;
  U.__initData = __initData;
  derivedValue = tmp6Result7.useDerivedValue(U);
  const tmp6Result8 = animatedIndex(tmp4[12]);
  class X {
    constructor() {
      return derivedValue.get();
    }
  }
  X.__closure = { isFullyExpanded: derivedValue };
  X.__workletHash = 1398001493096;
  X.__initData = __initData2;
  const fn = function j(arg0, arg1) {
    if (null != arg1) {
      const tmp = arg0 || forceMaxHeight;
      if (!tmp) {
        const obj = ReanimatedRexport;
        obj.runOnJS(KeyboardManagerUtils.dismissGlobalKeyboard)();
      }
    }
  };
  fn.__closure = { forceMaxHeight, runOnJS: animatedIndex(tmp4[12]).runOnJS, dismissGlobalKeyboard: animatedIndex(tmp4[21]).dismissGlobalKeyboard };
  fn.__workletHash = 9419386260028;
  fn.__initData = __initData3;
  ({ forceMaxHeight, runOnJS: animatedIndex(tmp4[12]).runOnJS, dismissGlobalKeyboard: animatedIndex(tmp4[21]).dismissGlobalKeyboard });
  const animatedReaction = tmp6Result8.useAnimatedReaction(X, fn);
  chatInputRef(tmp4[22])(() => () => {
    if (onClose != null) {
      tmp();
    }
  });
  const items3 = [headerStyle, ref, rendersHandle, derivedValue, isScreenReaderEnabled];
  const callback1 = obj.useCallback((arg0) => {
    const obj = { pressBehavior: "collapse" };
    const BottomSheetBackdrop = animatedIndex(flag[18]).BottomSheetBackdrop;
    const merged = Object.assign(arg0);
    return forceMaxHeight(BottomSheetBackdrop, obj);
  }, []);
  const callback2 = obj.useCallback(() => {
    let tmp = null;
    if (false !== rendersHandle) {
      const obj = {
        style: headerStyle,
        handleCollapse() {
            const current = ref.current;
            if (current != null) {
              current.collapse();
            }
            if (isScreenReaderEnabled) {
              const current2 = ref.current;
              if (current2 != null) {
                current2.forceClose();
              }
            }
          },
        isFullyExpanded: derivedValue
      };
      tmp = metroImportDefault(closure_11, obj);
    }
    return tmp;
  }, items3);
  const tmp6Result9 = animatedIndex(tmp4[23]);
  token = tmp6Result9.useToken(tmp3(tmp4[7]).modules.mobile.MOBILE_KEYBOARD_TOP_BORDER_RADIUS);
  const fn2 = function $() {
    let items;
    let items1;
    let obj2;
    let obj3;
    const obj = { borderTopLeftRadius: obj2.interpolate(animatedIndex.get(), [-1, 0], items, "clamp"), borderTopRightRadius: obj3.interpolate(animatedIndex.get(), [-1, 0], items1, "clamp") };
    items = [0, token];
    items1 = [0, token];
    obj2 = ReanimatedRexport;
    obj3 = ReanimatedRexport;
    return obj;
  };
  const tmp6Result10 = animatedIndex(tmp4[12]);
  fn2.__closure = { interpolate: animatedIndex(tmp4[12]).interpolate, animatedIndex, cornerRadiusInputStart: -1, cornerRadiusInputEnd: 0, cornerRadius: token };
  fn2.__workletHash = 13785401018735;
  fn2.__initData = __initData4;
  ({ interpolate: animatedIndex(tmp4[12]).interpolate, animatedIndex, cornerRadiusInputStart: -1, cornerRadiusInputEnd: 0, cornerRadius: token });
  animatedStyle = tmp6Result10.useAnimatedStyle(fn2);
  let tmp21;
  if (!disableHeaderRoundingAnimation) {
    tmp21 = animatedStyle;
  }
  animatedStyle = tmp21;
  const items4 = [tmp21];
  const callback3 = obj.useCallback((arg0) => {
    const obj = { roundingStyle: animatedStyle };
    const merged = Object.assign(arg0);
    return metroImportDefault(closure_12, obj);
  }, items4);
  ({ left, right } = chatInputRef(tmp4[24])());
  chatInputRef(tmp4[24])();
  ({ height, width: width2 } = chatInputRef(tmp4[25])({ ignoreKeyboard: true }));
  chatInputRef(tmp4[25])({ ignoreKeyboard: true });
  const callback4 = obj.useCallback((arg0) => {
    const obj = { children: forceMaxHeight(animatedIndex(flag[26]).PortalHost, { name: "expression-footer" }) };
    const BottomSheetFooter = animatedIndex(flag[18]).BottomSheetFooter;
    const merged = Object.assign(arg0);
    return forceMaxHeight(BottomSheetFooter, obj);
  }, []);
  const tmp26 = onClose(obj.useState(false), 2);
  closure_14 = tmp28;
  const first = tmp26[0];
  function ne() {
    return Math.max(animatedIndex.get(), 0) > 0;
  }
  ne.__closure = { animatedIndex };
  ne.__workletHash = 3058608499945;
  ne.__initData = __initData5;
  function ee(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(closure_14)(arg0);
    }
  }
  const tmp6Result11 = animatedIndex(tmp4[12]);
  ee.__closure = { runOnJS: animatedIndex(tmp4[12]).runOnJS, setAccessibilityViewIsModal: tmp26[1] };
  ee.__workletHash = 15997614745643;
  ee.__initData = __initData6;
  ({ runOnJS: animatedIndex(tmp4[12]).runOnJS, setAccessibilityViewIsModal: tmp26[1] });
  const animatedReaction1 = tmp6Result11.useAnimatedReaction(ne, ee);
  const obj8 = { gradient: chatInputRef(tmp4[27])(), children: tmp33(View, obj9) };
  const ThemeContextProvider = tmp6(tmp4[14]).ThemeContextProvider;
  let str;
  View = tmp3(tmp4[12]).View;
  tmp33 = ref;
  if (stateFromStores) {
    str = "no-hide-descendants";
  }
  obj9 = { importantForAccessibility: str, style: items5, pointerEvents: "box-none", children: items7 };
  items5 = [tmp.container, { marginLeft: left, marginRight: right }, ];
  const _Math = Math;
  if (width == null) {
    const _Number = Number;
    width = Number.MAX_SAFE_INTEGER;
  }
  size = { width: min(width, width2 - left - right), height };
  items5[2] = size;
  const obj10 = { ref, animatedIndex, animatedPosition, animationConfigs, onClose, onAnimate: callback, enableContentPanningGesture: !(isScreenReaderEnabled || tmp7), enableHandlePanningGesture: !(isScreenReaderEnabled || tmp7), handleComponent: callback2, renderFooter: tmp35, backgroundComponent: callback3, backgroundStyle: tmp.background, backdropComponent, activeOffsetY: [-10, 10], handleHeight: num, children: forceMaxHeight(AccessibilityViewAnimated, obj11) };
  tmp35 = undefined;
  const tmp3Result = chatInputRef(tmp4[18]);
  const tmp6Result12 = animatedIndex(tmp4[5]);
  if (tmp6Result12.isAndroid()) {
    if (flag3) {
      tmp35 = callback4;
    }
  }
  if (backdropComponent == null) {
    backdropComponent = callback1;
  }
  num = 0;
  if (rendersHandle) {
    num = tmp6(tmp4[8]).ACTION_SHEET_DRAG_HANDLE_HEIGHT;
  }
  let merged = Object.assign(tmp5);
  const items6 = [tmp.roundingView, , ];
  let tmp37 = !disableHeaderRoundingAnimation;
  AccessibilityViewAnimated = tmp6(tmp4[28]).AccessibilityViewAnimated;
  if (!disableHeaderRoundingAnimation) {
    tmp37 = animatedStyle;
  }
  obj11 = {
    nativeID: "portal-keyboard-sheet",
    style: items6,
    onAccessibilityEscape() {
      const current = ref.current;
      if (current != null) {
        current.collapse();
      }
    },
    accessibilityViewIsModal: first,
    children
  };
  items6[1] = tmp37;
  items6[2] = roundingViewStyle;
  items7 = [forceMaxHeight(tmp3Result, obj10), , ];
  let tmp32Result = closure_9 && flag3;
  if (tmp32Result) {
    const obj12 = { animatedSheetIndex: animatedIndex };
    tmp32Result = tmp32(tmp3(tmp4[29]), obj12);
  }
  items7[1] = tmp32Result;
  items7[2] = forceMaxHeight(animatedIndex(tmp4[30]).NavScrim, {});
  return forceMaxHeight(ThemeContextProvider, obj8);
}));
size = size_mod;
let result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardBottomSheet.tsx");

export default forwardRefResult;