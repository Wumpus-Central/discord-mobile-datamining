// === Module 11255: PortalKeyboardBottomSheetHeader ===

// Module 11255 (PortalKeyboardBottomSheetHeader)
import ThemesDefault from "Themes" /* 712 */;
import _modDef4115 from "module_4115" /* 4115 */;
import SCREEN_READER_ENABLED_GETTER from "SCREEN_READER_ENABLED_GETTER" /* 4721 */;
import TwinButtons from "TwinButtons" /* 8811 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import initialize from "initialize" /* 10046 */;
import jsxProd from "jsxProd" /* 21 */;
import obj132 from "obj132" /* 500 */;
import "createCacheKey";

require = fn;
function PortalKeyboardBottomSheetHeader(arg0) {
  ({ style, handleCollapse } = arg0);
  const tmp = callback2();
  let obj = SCREEN_READER_ENABLED_GETTER;
  const items = [tmp.headerContainer, , ];
  let prop;
  if (obj.useIsScreenReaderEnabled()) {
    prop = tmp.headerContainerScreenReaderEnabled;
  }
  obj = { style: items, children: callback(TwinButtons.ActionSheetDragHandle, { onPress: handleCollapse }) };
  items[1] = prop;
  items[2] = style;
  return callback(closure_5, obj);
}
function PortalKeyboardBackground(arg0) {
  ({ pointerEvents, style, roundingStyle } = arg0);
  style = [, , ];
  style[0] = style;
  style[1] = callback2().background;
  style[2] = roundingStyle;
  return callback(_modDef4115.View, { pointerEvents, style });
}
let c4 = importAllResult;
({ Platform, View: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = obj132.isIOS();
let obj = { backgroundColor: ThemesDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, overflow: "hidden" };
obj[1] = obj;
obj132 = { borderTopLeftRadius: ThemesDefault.radii.none, borderTopRightRadius: ThemesDefault.radii.none, width: "100%", height: require("TwinButtons").ACTION_SHEET_DRAG_HANDLE_HEIGHT, marginBottom: -require("TwinButtons").ACTION_SHEET_DRAG_HANDLE_HEIGHT };
obj[2] = obj132;
const createCacheKey = { marginBottom: -ThemesDefault.space.PX_8 };
obj[3] = createCacheKey;
obj[4] = { overflow: "hidden", display: "flex" };
let closure_10 = createCacheKey.createStyles(obj);
let closure_13 = { code: "function PortalKeyboardBottomSheetTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get()>0.975;}" };
let closure_14 = { code: "function PortalKeyboardBottomSheetTsx2(){const{isFullyExpanded}=this.__closure;return isFullyExpanded.get();}" };
let closure_15 = { code: "function PortalKeyboardBottomSheetTsx3(isFullyExpanded,isFullExpandedPrevious){const{forceMaxHeight,runOnJS,dismissGlobalKeyboard}=this.__closure;if(isFullExpandedPrevious==null){return;}if(!isFullyExpanded&&!forceMaxHeight){runOnJS(dismissGlobalKeyboard)();}}" };
let closure_16 = { code: "function PortalKeyboardBottomSheetTsx4(){const{interpolate,animatedIndex,cornerRadiusInputStart,cornerRadiusInputEnd,cornerRadius}=this.__closure;return{borderTopLeftRadius:interpolate(animatedIndex.get(),[cornerRadiusInputStart,cornerRadiusInputEnd],[0,cornerRadius],'clamp'),borderTopRightRadius:interpolate(animatedIndex.get(),[cornerRadiusInputStart,cornerRadiusInputEnd],[0,cornerRadius],'clamp')};}" };
let closure_17 = { code: "function PortalKeyboardBottomSheetTsx5(){const{animatedIndex}=this.__closure;return Math.max(animatedIndex.get(),0)>0;}" };
let closure_18 = { code: "function PortalKeyboardBottomSheetTsx6(result,previous){const{runOnJS,setAccessibilityViewIsModal}=this.__closure;if(result===previous)return;runOnJS(setAccessibilityViewIsModal)(result);}" };
let result = obj132.fileFinishedImporting("modules/keyboard/native/PortalKeyboardBottomSheet.tsx");

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
  let isScreenReaderEnabled;
  let derivedValue;
  let token;
  let num;
  let num2;
  let animatedStyle;
  closure_16 = undefined;
  let tmp = isScreenReaderEnabled();
  let obj = headerStyle;
  ref = headerStyle.useRef(null);
  obj1 = animatedIndex(flag[11]);
  const mobileVisualRefreshConfig = obj1.useMobileVisualRefreshConfig({ location: "AutocompleteWrapper" });
  const chatInputFloating = mobileVisualRefreshConfig.chatInputFloating;
  const tmp8 = transitionState === animatedIndex(flag[13]).TransitionStates.YEETED;
  closure_9 = tmp8;
  let obj2 = animatedIndex(flag[14]);
  const bottomSheetImperativeHandle = obj2.useBottomSheetImperativeHandle(ref, ref);
  let items = [ref, tmp8];
  const layoutEffect = headerStyle.useLayoutEffect(() => {
    if (closure_9) {
      const current = ref.current;
      if (current != null) {
        current.forceClose();
      }
    }
  }, items);
  let obj3 = animatedIndex(flag[15]);
  let items1 = [rendersHandle];
  const stateFromStores = obj3.useStateFromStores(items1, () => rendersHandle.isOpen());
  if (flag3) {
    flag3 = !tmp8;
  }
  let tmp3Result = tmp3(tmp4[9]);
  isScreenReaderEnabled = tmp3Result.useIsScreenReaderEnabled();
  let items2 = [chatInputRef, tmp8, onAnimate, onClose, flag];
  const callback = obj.useCallback((arg0, arg1, arg2) => {
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
        tmp3(arg0, arg1, arg2);
      }
      if (0 === arg0) {
        if (arg2 !== animatedIndex(flag[16]).ANIMATION_SOURCE.KEYBOARD) {
          const result = animatedIndex(flag[17]).triggerHapticFeedback(animatedIndex(flag[17]).HapticFeedbackTypes.IMPACT_LIGHT);
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
  tmp3Result = tmp3(tmp4[10]);
  class U {
    constructor() {
      return animatedIndex.get() > 0.975;
    }
  }
  U.__closure = { animatedIndex };
  U.__workletHash = 2001839633402;
  U.__initData = num;
  derivedValue = tmp3Result.useDerivedValue(U);
  const tmp7 = chatInputRef(flag[12])({ forceMaxHeight, enablePanDownToClose: flag2 });
  class W {
    constructor() {
      return closure_11.get();
    }
  }
  W.__closure = { isFullyExpanded: derivedValue };
  W.__workletHash = 9531298805666;
  W.__initData = num2;
  class X {
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
  obj = { forceMaxHeight, runOnJS: tmp3(tmp4[10]).runOnJS, dismissGlobalKeyboard: tmp3(tmp4[19]).dismissGlobalKeyboard };
  X.__closure = obj;
  X.__workletHash = 14649856286006;
  X.__initData = animatedStyle;
  const animatedReaction = animatedIndex(flag[10]).useAnimatedReaction(W, X);
  chatInputRef(flag[20])(() => () => {
    if (closure_3 != null) {
      tmp();
    }
  });
  let items3 = [headerStyle, ref, rendersHandle, derivedValue, isScreenReaderEnabled];
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
  const tmp3Result1 = animatedIndex(flag[10]);
  token = animatedIndex(flag[21]).useToken(tmp6(tmp4[7]).modules.mobile.MOBILE_KEYBOARD_TOP_BORDER_RADIUS);
  num = 0;
  if (chatInputFloating) {
    num = -1;
  }
  num2 = 1;
  if (chatInputFloating) {
    num2 = 0;
  }
  const tmp3Result2 = animatedIndex(flag[21]);
  function ee() {
    const obj = { borderTopLeftRadius: animatedIndex(flag[10]).interpolate(animatedIndex.get(), items, items1, "clamp"), borderTopRightRadius: null };
    items = [num, num2];
    items1 = [0, token];
    const obj2 = animatedIndex(flag[10]);
    const items2 = [num, num2];
    const items3 = [0, token];
    obj[1] = animatedIndex(flag[10]).interpolate(animatedIndex.get(), items2, items3, "clamp");
    return obj;
  }
  obj = { interpolate: tmp3(tmp4[10]).interpolate, animatedIndex, cornerRadiusInputStart: num, cornerRadiusInputEnd: num2, cornerRadius: token };
  ee.__closure = obj;
  ee.__workletHash = 6979425892410;
  ee.__initData = closure_16;
  animatedStyle = animatedIndex(flag[10]).useAnimatedStyle(ee);
  let tmp21;
  if (chatInputFloating) {
    if (!disableHeaderRoundingAnimation) {
      tmp21 = animatedStyle;
    }
  }
  animatedStyle = tmp21;
  const items4 = [tmp21];
  const callback3 = obj.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.roundingStyle = animatedStyle;
    return forceMaxHeight(token, obj);
  }, items4);
  const tmp3Result3 = animatedIndex(flag[10]);
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
  closure_16 = tmp27;
  const tmp24 = chatInputRef(flag[23])({ ignoreKeyboard: true });
  function ne() {
    return Math.max(animatedIndex.get(), 0) > 0;
  }
  ne.__closure = { animatedIndex };
  ne.__workletHash = 8952872079740;
  ne.__initData = closure_17;
  function te(arg0, arg1) {
    if (arg0 !== arg1) {
      animatedIndex(flag[10]).runOnJS(closure_16)(arg0);
      const obj = animatedIndex(flag[10]);
    }
  }
  obj1 = { runOnJS: tmp3(tmp4[10]).runOnJS, setAccessibilityViewIsModal: tmp27 };
  te.__closure = obj1;
  te.__workletHash = 16051387075966;
  te.__initData = closure_18;
  const animatedReaction1 = animatedIndex(flag[10]).useAnimatedReaction(ne, te);
  let tmp29 = isScreenReaderEnabled;
  if (!isScreenReaderEnabled) {
    tmp29 = tmp8;
  }
  const tmp3Result4 = animatedIndex(flag[10]);
  let tmp32 = null;
  if (mobileVisualRefreshConfig.enabled) {
    tmp32 = tmp30;
  }
  obj2 = { gradient: tmp32, children: null };
  let str;
  if (stateFromStores) {
    str = "no-hide-descendants";
  }
  obj3 = { importantForAccessibility: str, style: null, pointerEvents: "box-none", children: null };
  const items5 = [tmp.container, { marginLeft: left, marginRight: right }, ];
  if (width == null) {
    const _Number = Number;
    width = Number.MAX_SAFE_INTEGER;
  }
  tmp30 = chatInputRef(flag[25])();
  const tmp33 = ref;
  items5[2] = { width: Math.min(width, width2 - left - right), height };
  obj3[1] = items5;
  const obj5 = { ref, animatedIndex, animatedPosition, animationConfigs, onClose, onAnimate: callback, enableContentPanningGesture: !tmp29, enableHandlePanningGesture: !tmp29, handleComponent: callback2, renderFooter: null, backgroundComponent: null, backgroundStyle: null, backdropComponent: null, activeOffsetY: null, handleHeight: null };
  const obj4 = { width: Math.min(width, width2 - left - right), height };
  const tmp6Result = chatInputRef(flag[16]);
  let tmp35;
  if (tmp3Result5.isAndroid()) {
    if (flag3) {
      tmp35 = callback4;
    }
  }
  obj5[9] = tmp35;
  obj5[10] = callback3;
  obj5[11] = tmp.background;
  if (backdropComponent == null) {
    backdropComponent = callback1;
  }
  obj5[12] = backdropComponent;
  obj5[13] = [-10, 10];
  let num3 = 0;
  if (rendersHandle) {
    num3 = tmp3(tmp4[8]).ACTION_SHEET_DRAG_HANDLE_HEIGHT;
  }
  obj5[14] = num3;
  let merged = Object.assign(tmp7);
  const items6 = [tmp.roundingView, , ];
  let tmp37 = !disableHeaderRoundingAnimation;
  if (!disableHeaderRoundingAnimation) {
    tmp37 = animatedStyle;
  }
  items6[1] = tmp37;
  items6[2] = roundingViewStyle;
  obj5.children = forceMaxHeight(animatedIndex(flag[27]).AccessibilityViewAnimated, {
    nativeID: "portal-keyboard-sheet",
    style: items6,
    onAccessibilityEscape() {
      const current = ref.current;
      if (current != null) {
        current.collapse();
      }
    },
    accessibilityViewIsModal: tmp26[0],
    children
  });
  const items7 = [forceMaxHeight(tmp6Result, obj5), , ];
  let tmp31Result = closure_9;
  if (closure_9) {
    tmp31Result = flag3;
  }
  if (tmp31Result) {
    const obj7 = { animatedSheetIndex: null };
    obj7[0] = animatedIndex;
    tmp31Result = tmp31(tmp6(tmp4[28]), obj7);
  }
  items7[1] = tmp31Result;
  items7[2] = forceMaxHeight(animatedIndex(flag[29]).NavScrim, {});
  obj3[3] = items7;
  obj2[1] = tmp33(chatInputRef(flag[10]).View, obj3);
  return forceMaxHeight(animatedIndex(flag[26]).ThemeContextProvider, obj2);
});