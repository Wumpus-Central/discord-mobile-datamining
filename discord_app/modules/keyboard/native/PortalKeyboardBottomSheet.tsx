// discord_app/modules/keyboard/native/PortalKeyboardBottomSheet.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import KeyboardManagerUtils from "../../../utils/native/KeyboardManagerUtils.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import useIsScreenReaderEnabled from "../../a11y/native/useIsScreenReaderEnabled.native.tsx";
import isChannelFocused from "../../panels/isChannelFocused.native.tsx";
import BottomSheetModal from "../../../../_runtime/06305_BottomSheetModal.js";
import native from "../../../design/components/experimental/native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import NativeMenuStore from "../../native_menu/native/NativeMenuStore.tsx";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
get_ActivityIndicator = fn(17);
({ Platform, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const PlatformUtils = fn(1382);
let closure_9 = PlatformUtils.isIOS();
const createStyles = fn(5091);
let obj3 = {
  container: { position: "absolute", top: 0, left: 0 },
  background: { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, overflow: "hidden" },
  headerContainer: null,
  headerContainerScreenReaderEnabled: null,
  roundingView: null,
};
let size = {
  borderTopLeftRadius: nativeDefault.radii.none,
  borderTopRightRadius: nativeDefault.radii.none,
  width: "100%",
  height: fn(8525).ACTION_SHEET_DRAG_HANDLE_HEIGHT,
  marginBottom: -fn(8525).ACTION_SHEET_DRAG_HANDLE_HEIGHT,
};
obj3.headerContainer = size;
let obj4 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, overflow: "hidden" };
obj3.headerContainerScreenReaderEnabled = { marginBottom: -nativeDefault.space.PX_8 };
obj3.roundingView = { overflow: "hidden", display: "flex" };
let closure_10 = createStyles.createStyles(obj3);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PortalKeyboardBottomSheetHeader(arg0) {
      const cResult = c.c(9);
      ({ style, handleCollapse } = arg0);
      const tmp4 = closure_10();
      let prop;
      if (obj2.useIsScreenReaderEnabled()) {
        prop = tmp4.headerContainerScreenReaderEnabled;
      }
      if (cResult[0] === style) {
        if (cResult[1] === tmp4.headerContainer) {
          if (cResult[2] === prop) {
            let tmp6 = cResult[3];
          }
          if (cResult[4] !== handleCollapse) {
            const obj3 = { onPress: handleCollapse };
            const tmp9 = React5(native.ActionSheetDragHandle, obj3);
            cResult[4] = handleCollapse;
            cResult[5] = tmp9;
            let tmp7 = tmp9;
          } else {
            tmp7 = cResult[5];
          }
          if (cResult[6] === tmp6) {
            if (cResult[7] === tmp7) {
              let tmp10 = cResult[8];
            }
            return tmp10;
          }
          const obj4 = { style: tmp6, children: tmp7 };
          const tmp13 = React5(hasOwnProperty, obj4);
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
      obj2 = useIsScreenReaderEnabled;
    }
  : function PortalKeyboardBottomSheetHeader(arg0) {
      ({ style, handleCollapse } = arg0);
      const tmp = closure_10();
      const items = [tmp.headerContainer, ,];
      let prop;
      if (obj.useIsScreenReaderEnabled()) {
        prop = tmp.headerContainerScreenReaderEnabled;
      }
      obj = useIsScreenReaderEnabled;
      items[1] = prop;
      items[2] = style;
      return React5(hasOwnProperty, {
        style: items,
        children: React5(native.ActionSheetDragHandle, { onPress: handleCollapse }),
      });
    };
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PortalKeyboardBackground(arg0) {
      const cResult = c.c(7);
      ({ pointerEvents, style, roundingStyle } = arg0);
      const tmp3 = closure_10();
      if (cResult[0] === roundingStyle) {
        if (cResult[1] === style) {
          if (cResult[2] === tmp3.background) {
            let tmp4 = cResult[3];
          }
          if (cResult[4] === pointerEvents) {
            if (cResult[5] === tmp4) {
              let tmp5 = cResult[6];
            }
            return tmp5;
          }
          const obj2 = { pointerEvents, style: tmp4 };
          const tmp8 = React5(ReanimatedRexportDefault.View, obj2);
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
    }
  : function PortalKeyboardBackground(arg0) {
      ({ pointerEvents, style, roundingStyle } = arg0);
      const obj = { pointerEvents, style: null };
      const items = [style, closure_10().background, roundingStyle];
      obj.style = items;
      return React5(ReanimatedRexportDefault.View, obj);
    };
let closure_13 = {
  code: "function PortalKeyboardBottomSheetTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get()>0.975;}",
};
let closure_14 = {
  code: "function PortalKeyboardBottomSheetTsx2(){const{isFullyExpanded}=this.__closure;return isFullyExpanded.get();}",
};
let closure_15 = {
  code: "function PortalKeyboardBottomSheetTsx3(isFullyExpanded_0,isFullExpandedPrevious){const{forceMaxHeight,runOnJS,dismissGlobalKeyboard}=this.__closure;if(isFullExpandedPrevious==null){return;}if(!isFullyExpanded_0&&!forceMaxHeight){runOnJS(dismissGlobalKeyboard)();}}",
};
let closure_16 = {
  code: 'function PortalKeyboardBottomSheetTsx4(){const{interpolate,animatedIndex,cornerRadius}=this.__closure;return{borderTopLeftRadius:interpolate(animatedIndex.get(),[-1,0],[0,cornerRadius],"clamp"),borderTopRightRadius:interpolate(animatedIndex.get(),[-1,0],[0,cornerRadius],"clamp")};}',
};
let closure_17 = {
  code: "function PortalKeyboardBottomSheetTsx5(){const{animatedIndex}=this.__closure;return Math.max(animatedIndex.get(),0)>0;}",
};
let closure_18 = {
  code: "function PortalKeyboardBottomSheetTsx6(result,previous){const{runOnJS,setAccessibilityViewIsModal}=this.__closure;if(result===previous){return;}runOnJS(setAccessibilityViewIsModal)(result);}",
};
const __initData = {
  code: "function PortalKeyboardBottomSheetTsx7(){const{animatedIndex}=this.__closure;return animatedIndex.get()>0.975;}",
};
const __initData2 = {
  code: "function PortalKeyboardBottomSheetTsx8(){const{isFullyExpanded}=this.__closure;return isFullyExpanded.get();}",
};
const __initData3 = {
  code: "function PortalKeyboardBottomSheetTsx9(isFullyExpanded_0,isFullExpandedPrevious){const{forceMaxHeight,runOnJS,dismissGlobalKeyboard}=this.__closure;if(isFullExpandedPrevious==null){return;}if(!isFullyExpanded_0&&!forceMaxHeight){runOnJS(dismissGlobalKeyboard)();}}",
};
const __initData4 = {
  code: "function PortalKeyboardBottomSheetTsx10(){const{interpolate,animatedIndex,cornerRadiusInputStart,cornerRadiusInputEnd,cornerRadius}=this.__closure;return{borderTopLeftRadius:interpolate(animatedIndex.get(),[cornerRadiusInputStart,cornerRadiusInputEnd],[0,cornerRadius],'clamp'),borderTopRightRadius:interpolate(animatedIndex.get(),[cornerRadiusInputStart,cornerRadiusInputEnd],[0,cornerRadius],'clamp')};}",
};
const __initData5 = {
  code: "function PortalKeyboardBottomSheetTsx11(){const{animatedIndex}=this.__closure;return Math.max(animatedIndex.get(),0)>0;}",
};
const __initData6 = {
  code: "function PortalKeyboardBottomSheetTsx12(result,previous){const{runOnJS,setAccessibilityViewIsModal}=this.__closure;if(result===previous)return;runOnJS(setAccessibilityViewIsModal)(result);}",
};
ReactCompilerGating = fn(558);
let obj5 = { marginBottom: -nativeDefault.space.PX_8 };
size = fn(2);
let result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardBottomSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function PortalKeyboardBottomSheet(animatedIndex) {
      const cResult = animatedIndex(onClose[10]).c(82);
      animatedIndex = animatedIndex.animatedIndex;
      ({ animatedPosition, chatInputRef } = animatedIndex);
      ({ children, isAppsKeyboard, animationConfigs, onClose } = animatedIndex);
      ({ backdropComponent, headerStyle } = animatedIndex);
      ({ disableHeaderRoundingAnimation, roundingViewStyle, onAnimate } = animatedIndex);
      ({ rendersHandle, width, forceMaxHeight, enablePanDownToClose, renderExpressionFooter } = animatedIndex);
      let tmp4 = undefined !== isAppsKeyboard;
      ({ transitionState, ref } = animatedIndex);
      if (tmp4) {
        tmp4 = isAppsKeyboard;
      }
      isAppsKeyboard = tmp4;
      const open = undefined === rendersHandle || rendersHandle;
      closure_7 = tmp5;
      closure_10();
      const ref1 = onAnimate.useRef(null);
      if (cResult[0] === (undefined !== enablePanDownToClose && enablePanDownToClose)) {
        if (cResult[1] === tmp5) {
          let tmp9 = cResult[2];
        }
        const tmp11 = chatInputRef(onClose[13])(tmp9);
        const tmp12 = transitionState === tmp(onClose[14]).TransitionStates.YEETED;
        closure_9 = tmp12;
        const bottomSheetImperativeHandle = tmp(onClose[15]).useBottomSheetImperativeHandle(ref, ref1);
        if (cResult[3] !== tmp12) {
          class W {
            constructor() {
              if (closure_9) {
                tmp = closure_8;
                current = closure_8.current;
                tmp2 = null;
                if (current != null) {
                  forceCloseResult = current.forceClose();
                }
              }
              return;
            }
          }
          let items = [ref1, tmp12];
          cResult[3] = tmp12;
          cResult[4] = W;
          cResult[5] = items;
          let tmp15 = items;
        } else {
          class W {
            constructor() {
              if (closure_9) {
                tmp = closure_8;
                current = closure_8.current;
                tmp2 = null;
                if (current != null) {
                  forceCloseResult = current.forceClose();
                }
              }
              return;
            }
          }
          tmp15 = cResult[5];
        }
        const layoutEffect = onAnimate.useLayoutEffect(W, tmp15);
        if (cResult[6] === animatedIndex) {
          class W {
            constructor() {
              if (closure_9) {
                tmp = closure_8;
                current = closure_8.current;
                tmp2 = null;
                if (current != null) {
                  forceCloseResult = current.forceClose();
                }
              }
              return;
            }
          }
        }
        const obj3 = {
          animatedIndex,
          bottomSheetRef: ref1,
          containerHeight: tmp11.containerHeight,
          forceMaxHeight: tmp5,
          isYeeted: tmp12,
          snapPoints: tmp11.snapPoints,
        };
        cResult[6] = animatedIndex;
        cResult[7] = tmp11.containerHeight;
        cResult[8] = tmp11.snapPoints;
        cResult[9] = tmp5;
        cResult[10] = tmp12;
        cResult[11] = obj3;
        const tmpResult = tmp(onClose[15]);
      }
      const obj4 = {
        forceMaxHeight: undefined !== forceMaxHeight && forceMaxHeight,
        enablePanDownToClose: undefined !== enablePanDownToClose && enablePanDownToClose,
      };
      cResult[0] = undefined !== enablePanDownToClose && enablePanDownToClose;
      cResult[1] = undefined !== forceMaxHeight && forceMaxHeight;
      cResult[2] = obj4;
      tmp9 = obj4;
      let obj = animatedIndex(onClose[10]);
    }
  : function PortalKeyboardBottomSheet(animatedIndex) {
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
      ref = headerStyle.useRef(null);
      const tmp5 = chatInputRef(flag[13])({ forceMaxHeight, enablePanDownToClose: flag2 });
      const tmp7 = transitionState === animatedIndex(flag[14]).TransitionStates.YEETED;
      closure_9 = tmp7;
      const bottomSheetImperativeHandle = animatedIndex(flag[15]).useBottomSheetImperativeHandle(
        animatedIndex.ref,
        ref,
      );
      let items = [ref, tmp7];
      const layoutEffect = headerStyle.useLayoutEffect(() => {
        if (closure_9) {
          const current = ref.current;
          if (current != null) {
            current.forceClose();
          }
        }
      }, items);
      chatInputRef(flag[16])({
        animatedIndex,
        bottomSheetRef: ref,
        containerHeight: tmp5.containerHeight,
        forceMaxHeight,
        isYeeted: tmp7,
        snapPoints: tmp5.snapPoints,
      });
      let obj2 = animatedIndex(flag[15]);
      const obj3 = {
        animatedIndex,
        bottomSheetRef: ref,
        containerHeight: tmp5.containerHeight,
        forceMaxHeight,
        isYeeted: tmp7,
        snapPoints: tmp5.snapPoints,
      };
      let items1 = [rendersHandle];
      const stateFromStores = animatedIndex(flag[17]).useStateFromStores(items1, () => rendersHandle.isOpen());
      if (flag3) {
        flag3 = !tmp7;
      }
      const obj4 = animatedIndex(flag[17]);
      isScreenReaderEnabled = animatedIndex(flag[11]).useIsScreenReaderEnabled();
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
      const tmp6Result = animatedIndex(flag[11]);
      class U {
        constructor() {
          return animatedIndex.get() > 0.975;
        }
      }
      U.__closure = { animatedIndex };
      U.__workletHash = 5453397517372;
      U.__initData = __initData;
      derivedValue = animatedIndex(flag[12]).useDerivedValue(U);
      const tmp6Result7 = animatedIndex(flag[12]);
      class X {
        constructor() {
          return closure_11.get();
        }
      }
      X.__closure = { isFullyExpanded: derivedValue };
      X.__workletHash = 1398001493096;
      X.__initData = __initData2;
      const fn = function j(arg0, arg1) {
        if (null != arg1) {
          let tmp = arg0;
          if (!arg0) {
            tmp = forceMaxHeight;
          }
          if (!tmp) {
            ReanimatedRexport.runOnJS(KeyboardManagerUtils.dismissGlobalKeyboard)();
          }
        }
      };
      const tmp6Result8 = animatedIndex(flag[12]);
      fn.__closure = {
        forceMaxHeight,
        runOnJS: animatedIndex(flag[12]).runOnJS,
        dismissGlobalKeyboard: animatedIndex(flag[21]).dismissGlobalKeyboard,
      };
      fn.__workletHash = 9419386260028;
      fn.__initData = __initData3;
      const animatedReaction = tmp6Result8.useAnimatedReaction(X, fn);
      chatInputRef(flag[22])(() => () => {
        if (onClose != null) {
          tmp();
        }
      });
      const items3 = [headerStyle, ref, rendersHandle, derivedValue, isScreenReaderEnabled];
      const callback1 = obj.useCallback((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.pressBehavior = "collapse";
        return forceMaxHeight(animatedIndex(flag[18]).BottomSheetBackdrop, obj);
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
          tmp = React5(closure_11, obj);
        }
        return tmp;
      }, items3);
      const obj5 = {
        forceMaxHeight,
        runOnJS: animatedIndex(flag[12]).runOnJS,
        dismissGlobalKeyboard: animatedIndex(flag[21]).dismissGlobalKeyboard,
      };
      token = animatedIndex(flag[23]).useToken(tmp3(tmp4[7]).modules.mobile.MOBILE_KEYBOARD_TOP_BORDER_RADIUS);
      const tmp6Result9 = animatedIndex(flag[23]);
      const fn2 = function $() {
        const obj = { borderTopLeftRadius: null, borderTopRightRadius: null };
        const items = [0, token];
        obj.borderTopLeftRadius = ReanimatedRexport.interpolate(animatedIndex.get(), [-1, 0], items, "clamp");
        const items1 = [0, token];
        obj.borderTopRightRadius = ReanimatedRexport.interpolate(animatedIndex.get(), [-1, 0], items1, "clamp");
        return obj;
      };
      const tmp6Result10 = animatedIndex(flag[12]);
      fn2.__closure = {
        interpolate: animatedIndex(flag[12]).interpolate,
        animatedIndex,
        cornerRadiusInputStart: -1,
        cornerRadiusInputEnd: 0,
        cornerRadius: token,
      };
      fn2.__workletHash = 13785401018735;
      fn2.__initData = __initData4;
      animatedStyle = tmp6Result10.useAnimatedStyle(fn2);
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
        return React5(closure_12, obj);
      }, items4);
      const obj6 = {
        interpolate: animatedIndex(flag[12]).interpolate,
        animatedIndex,
        cornerRadiusInputStart: -1,
        cornerRadiusInputEnd: 0,
        cornerRadius: token,
      };
      ({ left, right } = chatInputRef(flag[24])());
      const tmp23 = chatInputRef(flag[24])();
      ({ height, width: width2 } = chatInputRef(flag[25])({ ignoreKeyboard: true }));
      const callback4 = obj.useCallback((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.children = forceMaxHeight(animatedIndex(flag[26]).PortalHost, { name: "expression-footer" });
        return forceMaxHeight(animatedIndex(flag[18]).BottomSheetFooter, obj);
      }, []);
      const tmp26 = onClose(headerStyle.useState(false), 2);
      closure_14 = tmp27;
      const tmp24 = chatInputRef(flag[25])({ ignoreKeyboard: true });
      function te() {
        return Math.max(animatedIndex.get(), 0) > 0;
      }
      te.__closure = { animatedIndex };
      te.__workletHash = 3058608499945;
      te.__initData = __initData5;
      function ee(arg0, arg1) {
        if (arg0 !== arg1) {
          ReanimatedRexport.runOnJS(closure_14)(arg0);
        }
      }
      const tmp6Result11 = animatedIndex(flag[12]);
      ee.__closure = { runOnJS: animatedIndex(flag[12]).runOnJS, setAccessibilityViewIsModal: tmp26[1] };
      ee.__workletHash = 15997614745643;
      ee.__initData = __initData6;
      const animatedReaction1 = tmp6Result11.useAnimatedReaction(te, ee);
      let tmp29 = isScreenReaderEnabled;
      if (!isScreenReaderEnabled) {
        tmp29 = tmp7;
      }
      const obj7 = { runOnJS: animatedIndex(flag[12]).runOnJS, setAccessibilityViewIsModal: tmp26[1] };
      const obj8 = { gradient: chatInputRef(flag[27])(), children: null };
      let str;
      if (stateFromStores) {
        str = "no-hide-descendants";
      }
      const obj9 = { importantForAccessibility: str, style: null, pointerEvents: "box-none", children: null };
      const items5 = [tmp.container, { marginLeft: left, marginRight: right }];
      if (width == null) {
        const _Number = Number;
        width = Number.MAX_SAFE_INTEGER;
      }
      const size = { width: Math.min(width, width2 - left - right), height };
      items5[2] = size;
      obj9.style = items5;
      const obj10 = {
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
      const tmp30 = chatInputRef(flag[27])();
      const tmp32 = ref;
      const tmp3Result = chatInputRef(flag[18]);
      let tmp34;
      if (tmp6Result12.isAndroid()) {
        if (flag3) {
          tmp34 = callback4;
        }
      }
      obj10.renderFooter = tmp34;
      obj10.backgroundComponent = callback3;
      obj10.backgroundStyle = tmp.background;
      if (backdropComponent == null) {
        backdropComponent = callback1;
      }
      obj10.backdropComponent = backdropComponent;
      obj10.activeOffsetY = [-10, 10];
      let num = 0;
      if (rendersHandle) {
        num = tmp6(tmp4[8]).ACTION_SHEET_DRAG_HANDLE_HEIGHT;
      }
      obj10.handleHeight = num;
      let merged = Object.assign(tmp5);
      const items6 = [tmp.roundingView, ,];
      let tmp36 = !disableHeaderRoundingAnimation;
      if (!disableHeaderRoundingAnimation) {
        tmp36 = animatedStyle;
      }
      items6[1] = tmp36;
      items6[2] = roundingViewStyle;
      obj10.children = forceMaxHeight(animatedIndex(flag[28]).AccessibilityViewAnimated, {
        nativeID: "portal-keyboard-sheet",
        style: items6,
        onAccessibilityEscape: function handleClose() {
          const current = ref.current;
          if (current != null) {
            current.collapse();
          }
        },
        accessibilityViewIsModal: tmp26[0],
        children,
      });
      const items7 = [forceMaxHeight(tmp3Result, obj10), ,];
      let tmp31Result = closure_9;
      if (closure_9) {
        tmp31Result = flag3;
      }
      if (tmp31Result) {
        const obj12 = { animatedSheetIndex: animatedIndex };
        tmp31Result = tmp31(tmp3(tmp4[29]), obj12);
      }
      items7[1] = tmp31Result;
      items7[2] = forceMaxHeight(animatedIndex(flag[30]).NavScrim, {});
      obj9.children = items7;
      obj8.children = tmp32(chatInputRef(flag[12]).View, obj9);
      return forceMaxHeight(animatedIndex(flag[14]).ThemeContextProvider, obj8);
    };
