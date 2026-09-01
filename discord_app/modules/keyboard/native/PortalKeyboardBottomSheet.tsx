// discord_app/modules/keyboard/native/PortalKeyboardBottomSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef4217 from "../../reanimated/ReanimatedRexport.tsx";
import SCREEN_READER_ENABLED_GETTER from "../../a11y/native/useIsScreenReaderEnabled.native.tsx";
import TwinButtons from "../../../design/components/experimental/native.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../native_menu/native/NativeMenuStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import set from "../../../utils/PlatformUtils.tsx";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function PortalKeyboardBottomSheetHeader(arg0) {
  ({ style, handleCollapse } = arg0);
  const tmp = callback2();
  let obj = SCREEN_READER_ENABLED_GETTER;
  const items = [tmp.headerContainer, ,];
  let prop;
  if (obj.useIsScreenReaderEnabled()) {
    prop = tmp.headerContainerScreenReaderEnabled;
  }
  obj = { style: items, children: tmp4(TwinButtons.ActionSheetDragHandle, { onPress: handleCollapse }) };
  items[1] = prop;
  items[2] = style;
  return closure_7(closure_5, obj);
}
function PortalKeyboardBackground(arg0) {
  ({ pointerEvents, style, roundingStyle } = arg0);
  style = [, ,];
  style[0] = style;
  style[1] = callback2().background;
  style[2] = roundingStyle;
  return callback(_modDef4217.View, { pointerEvents, style });
}
let c4 = importAllResult;
({ Platform, View: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = set.isIOS();
let obj = {
  container: { position: "absolute", top: 0, left: 0 },
  background: null,
  headerContainer: null,
  headerContainerScreenReaderEnabled: null,
  roundingView: null,
};
obj = { backgroundColor: ThemesDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, overflow: "hidden" };
obj[1] = obj;
set = {
  borderTopLeftRadius: ThemesDefault.radii.none,
  borderTopRightRadius: ThemesDefault.radii.none,
  width: "100%",
  height: require("TwinButtons").ACTION_SHEET_DRAG_HANDLE_HEIGHT,
  marginBottom: -require("TwinButtons").ACTION_SHEET_DRAG_HANDLE_HEIGHT,
};
obj[2] = set;
createCacheKey = { marginBottom: -ThemesDefault.space.PX_8 };
obj[3] = createCacheKey;
obj[4] = { overflow: "hidden", display: "flex" };
let closure_10 = createCacheKey.createStyles(obj);
let closure_13 = {
  code: "function PortalKeyboardBottomSheetTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get()>0.975;}",
};
let closure_14 = {
  code: "function PortalKeyboardBottomSheetTsx2(){const{isFullyExpanded}=this.__closure;return isFullyExpanded.get();}",
};
let closure_15 = {
  code: "function PortalKeyboardBottomSheetTsx3(isFullyExpanded,isFullExpandedPrevious){const{forceMaxHeight,runOnJS,dismissGlobalKeyboard}=this.__closure;if(isFullExpandedPrevious==null){return;}if(!isFullyExpanded&&!forceMaxHeight){runOnJS(dismissGlobalKeyboard)();}}",
};
let closure_16 = {
  code: "function PortalKeyboardBottomSheetTsx4(){const{interpolate,animatedIndex,cornerRadiusInputStart,cornerRadiusInputEnd,cornerRadius}=this.__closure;return{borderTopLeftRadius:interpolate(animatedIndex.get(),[cornerRadiusInputStart,cornerRadiusInputEnd],[0,cornerRadius],'clamp'),borderTopRightRadius:interpolate(animatedIndex.get(),[cornerRadiusInputStart,cornerRadiusInputEnd],[0,cornerRadius],'clamp')};}",
};
let closure_17 = {
  code: "function PortalKeyboardBottomSheetTsx5(){const{animatedIndex}=this.__closure;return Math.max(animatedIndex.get(),0)>0;}",
};
let closure_18 = {
  code: "function PortalKeyboardBottomSheetTsx6(result,previous){const{runOnJS,setAccessibilityViewIsModal}=this.__closure;if(result===previous)return;runOnJS(setAccessibilityViewIsModal)(result);}",
};
let result = set.fileFinishedImporting("modules/keyboard/native/PortalKeyboardBottomSheet.tsx");

export default importAllResult.forwardRef(function PortalKeyboardBottomSheet(animatedIndex, ref) {
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
  ref = undefined;
  closure_9 = undefined;
  let isScreenReaderEnabled;
  let derivedValue;
  let token;
  let animatedStyle;
  closure_14 = undefined;
  let tmp = isScreenReaderEnabled();
  let obj = headerStyle;
  ref = headerStyle.useRef(null);
  const tmp5 = chatInputRef(flag[11])({ forceMaxHeight, enablePanDownToClose: flag2 });
  const tmp7 = transitionState === animatedIndex(flag[12]).TransitionStates.YEETED;
  closure_9 = tmp7;
  obj1 = animatedIndex(flag[13]);
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
  obj = {
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
        if (arg4 !== animatedIndex(flag[16]).ANIMATION_SOURCE.KEYBOARD) {
          const result = animatedIndex(flag[17]).triggerHapticFeedback(
            animatedIndex(flag[17]).HapticFeedbackTypes.IMPACT_LIGHT,
          );
          const obj2 = animatedIndex(flag[17]);
        }
      } else {
        let tmp6 = 1 === arg0 && 0 === arg1;
        if (tmp6) {
          tmp6 = !animatedIndex(flag[18]).isChannelFocused();
          const obj = animatedIndex(flag[18]);
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
  fn.__initData = closure_14;
  class Y {
    constructor(arg0, arg1) {
      if (null != ref) {
        tmp = animatedIndex;
        if (!animatedIndex) {
          tmp = c7;
        }
        if (!tmp) {
          tmp2 = animatedIndex;
          tmp3 = c2;
          obj = animatedIndex(c2[10]);
          tmp4 = obj.runOnJS(animatedIndex(c2[19]).dismissGlobalKeyboard)();
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
  Y.__initData = closure_15;
  const animatedReaction = animatedIndex(flag[10]).useAnimatedReaction(fn, Y);
  chatInputRef(flag[20])(() => () => {
    if (closure_3 != null) {
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
      const obj = { style: null, handleCollapse: null, isFullyExpanded: null };
      obj[0] = headerStyle;
      obj[1] = function handleCollapse() {
        const current = ref.current;
        if (current != null) {
          current.collapse();
        }
        if (closure_10) {
          const current2 = ref.current;
          if (current2 != null) {
            current2.forceClose();
          }
        }
      };
      obj[2] = derivedValue;
      tmp = forceMaxHeight(derivedValue, obj);
    }
    return tmp;
  }, items3);
  const tmp6Result1 = animatedIndex(flag[10]);
  token = animatedIndex(flag[21]).useToken(tmp3(tmp4[7]).modules.mobile.MOBILE_KEYBOARD_TOP_BORDER_RADIUS);
  const tmp6Result2 = animatedIndex(flag[21]);
  class W {
    constructor() {
      obj = { borderTopLeftRadius: null, borderTopRightRadius: null };
      obj2 = animatedIndex(c2[10]);
      items = [0];
      items[1] = closure_12;
      obj[0] = obj2.interpolate(animatedIndex.get(), [-1, 0], items, "clamp");
      obj3 = animatedIndex(c2[10]);
      items1 = [0];
      items1[1] = closure_12;
      obj[1] = obj3.interpolate(animatedIndex.get(), [-1, 0], items1, "clamp");
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
  W.__initData = closure_16;
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
    return forceMaxHeight(token, obj);
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
  closure_14 = tmp27;
  const tmp24 = chatInputRef(flag[23])({ ignoreKeyboard: true });
  const fn2 = function $() {
    return Math.max(animatedIndex.get(), 0) > 0;
  };
  fn2.__closure = { animatedIndex };
  fn2.__workletHash = 8952872079740;
  fn2.__initData = closure_17;
  class Z {
    constructor(arg0, arg1) {
      if (animatedIndex !== ref) {
        tmp = animatedIndex;
        tmp2 = c2;
        obj = animatedIndex(c2[10]);
        tmp3 = closure_14;
        tmp4 = obj.runOnJS(closure_14)(animatedIndex);
      }
      return;
    }
  }
  const tmp6Result4 = animatedIndex(flag[10]);
  Z.__closure = { runOnJS: animatedIndex(flag[10]).runOnJS, setAccessibilityViewIsModal: tmp26[1] };
  Z.__workletHash = 16051387075966;
  Z.__initData = closure_18;
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
  const tmp30 = chatInputRef(flag[25])();
  const tmp32 = ref;
  items5[2] = { width: Math.min(width, width2 - left - right), height };
  obj4[1] = items5;
  const obj6 = {
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
  const obj5 = { width: Math.min(width, width2 - left - right), height };
  const tmp3Result = chatInputRef(flag[16]);
  let tmp34;
  if (tmp6Result5.isAndroid()) {
    if (flag3) {
      tmp34 = callback4;
    }
  }
  obj6[9] = tmp34;
  obj6[10] = callback3;
  obj6[11] = tmp.background;
  if (backdropComponent == null) {
    backdropComponent = callback1;
  }
  obj6[12] = backdropComponent;
  obj6[13] = [-10, 10];
  let num = 0;
  if (rendersHandle) {
    num = tmp6(tmp4[8]).ACTION_SHEET_DRAG_HANDLE_HEIGHT;
  }
  obj6[14] = num;
  let merged = Object.assign(tmp5);
  const items6 = [tmp.roundingView, ,];
  let tmp36 = !disableHeaderRoundingAnimation;
  if (!disableHeaderRoundingAnimation) {
    tmp36 = animatedStyle;
  }
  items6[1] = tmp36;
  items6[2] = roundingViewStyle;
  obj6.children = forceMaxHeight(animatedIndex(flag[26]).AccessibilityViewAnimated, {
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
  const items7 = [forceMaxHeight(tmp3Result, obj6), ,];
  let tmp31Result = closure_9;
  if (closure_9) {
    tmp31Result = flag3;
  }
  if (tmp31Result) {
    const obj8 = { animatedSheetIndex: null };
    obj8[0] = animatedIndex;
    tmp31Result = tmp31(tmp3(tmp4[27]), obj8);
  }
  items7[1] = tmp31Result;
  items7[2] = forceMaxHeight(animatedIndex(flag[28]).NavScrim, {});
  obj4[3] = items7;
  obj3[1] = tmp32(chatInputRef(flag[10]).View, obj4);
  return forceMaxHeight(animatedIndex(flag[12]).ThemeContextProvider, obj3);
});
