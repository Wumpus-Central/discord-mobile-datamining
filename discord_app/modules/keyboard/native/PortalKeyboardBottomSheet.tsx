// discord_app/modules/keyboard/native/PortalKeyboardBottomSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import KeyboardManagerUtils from "../../../utils/native/KeyboardManagerUtils.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import useIsScreenReaderEnabled from "../../a11y/native/useIsScreenReaderEnabled.native.tsx";
import BottomSheetModal from "../../../../_runtime/06627_BottomSheetModal.js";
import native from "../../../design/components/experimental/native.tsx";
import isChannelFocused from "../../panels/isChannelFocused.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import NativeMenuStore from "../../native_menu/native/NativeMenuStore.tsx";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
function PortalKeyboardBottomSheetHeader(arg0) {
  ({ style, handleCollapse } = arg0);
  const tmp = closure_10();
  let obj = useIsScreenReaderEnabled;
  const items = [tmp.headerContainer, ,];
  let prop;
  if (obj.useIsScreenReaderEnabled()) {
    prop = tmp.headerContainerScreenReaderEnabled;
  }
  obj = { style: items, children: tmp4(native.ActionSheetDragHandle, { onPress: handleCollapse }) };
  items[1] = prop;
  items[2] = style;
  return React5(hasOwnProperty, obj);
}
function PortalKeyboardBackground(arg0) {
  ({ pointerEvents, style, roundingStyle } = arg0);
  const obj = { pointerEvents, style: null };
  const items = [style, closure_10().background, roundingStyle];
  obj.style = items;
  return React5(ReanimatedRexportDefault.View, obj);
}
get_ActivityIndicator = fn(17);
({ Platform, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let PlatformUtils = fn(1115);
let closure_9 = PlatformUtils.isIOS();
const createStyles = fn(4560);
let obj = {
  container: { position: "absolute", top: 0, left: 0 },
  background: null,
  headerContainer: null,
  headerContainerScreenReaderEnabled: null,
  roundingView: null,
};
obj = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, overflow: "hidden" };
obj.background = obj;
let size = {
  borderTopLeftRadius: nativeDefault.radii.none,
  borderTopRightRadius: nativeDefault.radii.none,
  width: "100%",
  height: fn(8902).ACTION_SHEET_DRAG_HANDLE_HEIGHT,
  marginBottom: -fn(8902).ACTION_SHEET_DRAG_HANDLE_HEIGHT,
};
obj.headerContainer = size;
PlatformUtils = { marginBottom: -nativeDefault.space.PX_8 };
obj.headerContainerScreenReaderEnabled = PlatformUtils;
obj.roundingView = { overflow: "hidden", display: "flex" };
let closure_10 = createStyles.createStyles(obj);
let closure_13 = {
  code: "function PortalKeyboardBottomSheetTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get()>0.975;}",
};
let __initData = {
  code: "function PortalKeyboardBottomSheetTsx2(){const{isFullyExpanded}=this.__closure;return isFullyExpanded.get();}",
};
const __initData2 = {
  code: "function PortalKeyboardBottomSheetTsx3(isFullyExpanded,isFullExpandedPrevious){const{forceMaxHeight,runOnJS,dismissGlobalKeyboard}=this.__closure;if(isFullExpandedPrevious==null){return;}if(!isFullyExpanded&&!forceMaxHeight){runOnJS(dismissGlobalKeyboard)();}}",
};
const __initData3 = {
  code: "function PortalKeyboardBottomSheetTsx4(){const{interpolate,animatedIndex,cornerRadiusInputStart,cornerRadiusInputEnd,cornerRadius}=this.__closure;return{borderTopLeftRadius:interpolate(animatedIndex.get(),[cornerRadiusInputStart,cornerRadiusInputEnd],[0,cornerRadius],'clamp'),borderTopRightRadius:interpolate(animatedIndex.get(),[cornerRadiusInputStart,cornerRadiusInputEnd],[0,cornerRadius],'clamp')};}",
};
const __initData4 = {
  code: "function PortalKeyboardBottomSheetTsx5(){const{animatedIndex}=this.__closure;return Math.max(animatedIndex.get(),0)>0;}",
};
const __initData5 = {
  code: "function PortalKeyboardBottomSheetTsx6(result,previous){const{runOnJS,setAccessibilityViewIsModal}=this.__closure;if(result===previous)return;runOnJS(setAccessibilityViewIsModal)(result);}",
};
size = fn(2);
let result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardBottomSheet.tsx");

export default noop.forwardRef(function PortalKeyboardBottomSheet(animatedIndex, ref) {
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
  __initData = undefined;
  let tmp = isScreenReaderEnabled();
  ref = headerStyle.useRef(null);
  const tmp5 = chatInputRef(flag[11])({ forceMaxHeight, enablePanDownToClose: flag2 });
  const tmp7 = transitionState === animatedIndex(flag[12]).TransitionStates.YEETED;
  closure_9 = tmp7;
  let obj1 = animatedIndex(flag[13]);
  const bottomSheetImperativeHandle = obj1.useBottomSheetImperativeHandle(ref, ref);
  let items = [ref, tmp7];
  const layoutEffect = headerStyle.useLayoutEffect(() => {
    if (closure_9) {
      const current = ref.current;
      if (current != null) {
        current.forceClose();
      }
    }
  }, items);
  let obj = {
    animatedIndex,
    bottomSheetRef: ref,
    containerHeight: tmp5.containerHeight,
    forceMaxHeight,
    isYeeted: tmp7,
    snapPoints: tmp5.snapPoints,
  };
  chatInputRef(flag[14])(obj);
  let obj3 = animatedIndex(flag[15]);
  let items1 = [rendersHandle];
  const stateFromStores = obj3.useStateFromStores(items1, () => rendersHandle.isOpen());
  if (flag3) {
    flag3 = !tmp7;
  }
  let tmp6Result = tmp6(tmp4[9]);
  isScreenReaderEnabled = tmp6Result.useIsScreenReaderEnabled();
  const items2 = [chatInputRef, tmp7, onAnimate, onClose, flag];
  const callback = obj.useCallback((arg0, arg1, arg2, arg3, arg4) => {
    if (closure_9) {
      if (-1 !== arg1) {
        if (onClose != null) {
          tmp17();
        }
      }
    }
    let tmp = arg0 !== arg1;
    if (tmp) {
      tmp = -1 !== arg1;
    }
    if (tmp) {
      if (onAnimate != null) {
        tmp3(arg0, arg1, arg4);
      }
      if (0 === arg0) {
        if (arg4 !== BottomSheetModal.ANIMATION_SOURCE.KEYBOARD) {
          const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
        }
      } else {
        let tmp6 = 1 === arg0 && 0 === arg1;
        if (tmp6) {
          tmp6 = !isChannelFocused.isChannelFocused();
        }
        if (tmp6) {
          tmp6 = flag;
        }
        if (tmp6) {
          const current = chatInputRef.current;
          if (current != null) {
            current.closeCustomKeyboard();
          }
        }
      }
    }
  }, items2);
  tmp6Result = tmp6(tmp4[10]);
  class J {
    constructor() {
      return animatedIndex.get() > 0.975;
    }
  }
  J.__closure = { animatedIndex };
  J.__workletHash = 2001839633402;
  J.__initData = animatedStyle;
  derivedValue = tmp6Result.useDerivedValue(J);
  const fn = function j() {
    return derivedValue.get();
  };
  fn.__closure = { isFullyExpanded: derivedValue };
  fn.__workletHash = 9531298805666;
  fn.__initData = __initData;
  class Y {
    constructor(arg0, arg1) {
      if (null != ref) {
        tmp = animatedIndex;
        if (!animatedIndex) {
          tmp = c7;
        }
        if (!tmp) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[10]);
          tmp4 = obj.runOnJS(closure_0(closure_2[19]).dismissGlobalKeyboard)();
        }
      }
      return;
    }
  }
  obj = {
    forceMaxHeight,
    runOnJS: tmp6(tmp4[10]).runOnJS,
    dismissGlobalKeyboard: tmp6(tmp4[19]).dismissGlobalKeyboard,
  };
  Y.__closure = obj;
  Y.__workletHash = 14649856286006;
  Y.__initData = __initData2;
  const animatedReaction = animatedIndex(flag[10]).useAnimatedReaction(fn, Y);
  chatInputRef(flag[20])(() => () => {
    if (onClose != null) {
      tmp();
    }
  });
  const items3 = [headerStyle, ref, rendersHandle, derivedValue, isScreenReaderEnabled];
  const callback1 = obj.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.pressBehavior = "collapse";
    return forceMaxHeight(animatedIndex(flag[16]).BottomSheetBackdrop, obj);
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
        isFullyExpanded: derivedValue,
      };
      tmp = React5(PortalKeyboardBottomSheetHeader, obj);
    }
    return tmp;
  }, items3);
  const tmp6Result1 = animatedIndex(flag[10]);
  token = animatedIndex(flag[21]).useToken(tmp3(tmp4[7]).modules.mobile.MOBILE_KEYBOARD_TOP_BORDER_RADIUS);
  const tmp6Result2 = animatedIndex(flag[21]);
  class W {
    constructor() {
      obj = { borderTopLeftRadius: null, borderTopRightRadius: null };
      obj2 = closure_0(closure_2[10]);
      items = [0];
      items[1] = closure_12;
      obj.borderTopLeftRadius = obj2.interpolate(animatedIndex.get(), [-1, 0], items, "clamp");
      obj3 = closure_0(closure_2[10]);
      items1 = [0];
      items1[1] = closure_12;
      obj.borderTopRightRadius = obj3.interpolate(animatedIndex.get(), [-1, 0], items1, "clamp");
      return obj;
    }
  }
  obj1 = {
    interpolate: tmp6(tmp4[10]).interpolate,
    animatedIndex,
    cornerRadiusInputStart: -1,
    cornerRadiusInputEnd: 0,
    cornerRadius: token,
  };
  W.__closure = obj1;
  W.__workletHash = 6979425892410;
  W.__initData = __initData3;
  animatedStyle = animatedIndex(flag[10]).useAnimatedStyle(W);
  let tmp21;
  if (!disableHeaderRoundingAnimation) {
    tmp21 = animatedStyle;
  }
  animatedStyle = tmp21;
  const items4 = [tmp21];
  const callback3 = obj.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.roundingStyle = animatedStyle;
    return React5(PortalKeyboardBackground, obj);
  }, items4);
  const tmp6Result3 = animatedIndex(flag[10]);
  ({ left, right } = chatInputRef(flag[22])());
  const tmp23 = chatInputRef(flag[22])();
  ({ height, width: width2 } = chatInputRef(flag[23])({ ignoreKeyboard: true }));
  const callback4 = obj.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.children = forceMaxHeight(animatedIndex(flag[24]).PortalHost, { name: "expression-footer" });
    return forceMaxHeight(animatedIndex(flag[16]).BottomSheetFooter, obj);
  }, []);
  const tmp26 = onClose(obj.useState(false), 2);
  __initData = tmp27;
  const tmp24 = chatInputRef(flag[23])({ ignoreKeyboard: true });
  const fn2 = function $() {
    return Math.max(animatedIndex.get(), 0) > 0;
  };
  fn2.__closure = { animatedIndex };
  fn2.__workletHash = 8952872079740;
  fn2.__initData = __initData4;
  class Z {
    constructor(arg0, arg1) {
      if (animatedIndex !== ref) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[10]);
        tmp3 = closure_14;
        tmp4 = obj.runOnJS(closure_14)(animatedIndex);
      }
      return;
    }
  }
  const tmp6Result4 = animatedIndex(flag[10]);
  Z.__closure = { runOnJS: animatedIndex(flag[10]).runOnJS, setAccessibilityViewIsModal: tmp26[1] };
  Z.__workletHash = 16051387075966;
  Z.__initData = __initData5;
  const animatedReaction1 = tmp6Result4.useAnimatedReaction(fn2, Z);
  let tmp29 = isScreenReaderEnabled;
  if (!isScreenReaderEnabled) {
    tmp29 = tmp7;
  }
  let obj2 = { runOnJS: animatedIndex(flag[10]).runOnJS, setAccessibilityViewIsModal: tmp26[1] };
  obj3 = { gradient: chatInputRef(flag[25])(), children: null };
  let str;
  if (stateFromStores) {
    str = "no-hide-descendants";
  }
  const obj4 = { importantForAccessibility: str, style: null, pointerEvents: "box-none", children: null };
  const items5 = [tmp.container, { marginLeft: left, marginRight: right }];
  if (width == null) {
    const _Number = Number;
    width = Number.MAX_SAFE_INTEGER;
  }
  const size = { width: Math.min(width, width2 - left - right), height };
  items5[2] = size;
  obj4.style = items5;
  const obj5 = {
    ref,
    animatedIndex,
    animatedPosition,
    animationConfigs,
    onClose,
    onAnimate: callback,
    enableContentPanningGesture: !tmp29,
    enableHandlePanningGesture: !tmp29,
    handleComponent: callback2,
    renderFooter: null,
    backgroundComponent: null,
    backgroundStyle: null,
    backdropComponent: null,
    activeOffsetY: null,
    handleHeight: null,
  };
  const tmp30 = chatInputRef(flag[25])();
  const tmp32 = ref;
  const tmp3Result = chatInputRef(flag[16]);
  let tmp34;
  if (tmp6Result5.isAndroid()) {
    if (flag3) {
      tmp34 = callback4;
    }
  }
  obj5.renderFooter = tmp34;
  obj5.backgroundComponent = callback3;
  obj5.backgroundStyle = tmp.background;
  if (backdropComponent == null) {
    backdropComponent = callback1;
  }
  obj5.backdropComponent = backdropComponent;
  obj5.activeOffsetY = [-10, 10];
  let num = 0;
  if (rendersHandle) {
    num = tmp6(tmp4[8]).ACTION_SHEET_DRAG_HANDLE_HEIGHT;
  }
  obj5.handleHeight = num;
  let merged = Object.assign(tmp5);
  const items6 = [tmp.roundingView, ,];
  let tmp36 = !disableHeaderRoundingAnimation;
  if (!disableHeaderRoundingAnimation) {
    tmp36 = animatedStyle;
  }
  items6[1] = tmp36;
  items6[2] = roundingViewStyle;
  obj5.children = forceMaxHeight(animatedIndex(flag[26]).AccessibilityViewAnimated, {
    nativeID: "portal-keyboard-sheet",
    style: items6,
    onAccessibilityEscape() {
      const current = ref.current;
      if (current != null) {
        current.collapse();
      }
    },
    accessibilityViewIsModal: tmp26[0],
    children,
  });
  const items7 = [forceMaxHeight(tmp3Result, obj5), ,];
  let tmp31Result = closure_9;
  if (closure_9) {
    tmp31Result = flag3;
  }
  if (tmp31Result) {
    const obj7 = { animatedSheetIndex: animatedIndex };
    tmp31Result = tmp31(tmp3(tmp4[27]), obj7);
  }
  items7[1] = tmp31Result;
  items7[2] = forceMaxHeight(animatedIndex(flag[28]).NavScrim, {});
  obj4.children = items7;
  obj3.children = tmp32(chatInputRef(flag[10]).View, obj4);
  return forceMaxHeight(animatedIndex(flag[12]).ThemeContextProvider, obj3);
});
