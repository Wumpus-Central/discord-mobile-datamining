// discord_app/design/components/Sheet/native/BottomSheet.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../../../ConstantsIOS.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import useWindowDimensionsDefault from "../../../../modules/screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../../../modules/safe_area/useSafeAreaInsets.native.tsx";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import useIsScreenReaderEnabled from "../../../../modules/a11y/native/useIsScreenReaderEnabled.native.tsx";
import BottomSheetModal from "../../../../../_runtime/05275_BottomSheetModal.js";
import NavigatorConstants from "../../Navigator/native/NavigatorConstants.native.tsx";
import LinearGradientDefault from "../../../../../_runtime/05587_LinearGradient.js";
import ActionSheetHeaderBar from "ActionSheetHeaderBar.native.tsx";
import Sheet_BottomSheetBackdrop from "BottomSheetBackdrop.native.tsx";
import NavScrim from "../../Navigator/native/NavScrim.android.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const BottomSheetModalDefault = BottomSheetModal;

require = fn;
function Background(arg0) {
  const merged = Object.assign(arg0);
  return __initData2(timestampProducer, {});
}
function GradientBackground(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  const tmp = closure_18(false);
  obj.children = __initData2(timestampProducer, { style: closure_18(false).backgroundOverlay });
  return __initData2(timestampProducer, obj);
}
function BorderGradientBackground(borderGradient) {
  const merged = Object.assign(borderGradient, Object.assign({ borderGradient: 0 }));
  const tmp2 = closure_18(false);
  let flattenResult = hasOwnProperty.flatten(merged.style);
  if (flattenResult == null) {
    flattenResult = {};
  }
  const obj = {};
  const merged1 = Object.assign(merged);
  const obj2 = {
    style: tmp2.gradient,
    start: ConstantsIOS.VerticalGradient.START,
    end: ConstantsIOS.VerticalGradient.END,
    colors: borderGradient.borderGradient,
  };
  const items = [__initData2(LinearGradientDefault, obj2)];
  const obj3 = { style: null };
  const items1 = [tmp2.gradientInnerFill, { backgroundColor: flattenResult.backgroundColor }];
  obj3.style = items1;
  items[1] = __initData2(timestampProducer, obj3);
  obj.children = items;
  return closure_1_17(timestampProducer, obj);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire, Platform } = get_ActivityIndicator);
const ActionSheetConstants = fn(5273);
({
  ACTION_SHEET_START_HEIGHT_RATIO: closure_7,
  ACTION_SHEET_MAX_WIDTH: closure_8,
  ACTION_SHEET_SPRING_CONFIG: closure_9,
  ACTION_SHEET_SPRING_CONFIG_REDUCED_MOTION: c10,
  ACTION_SHEET_GRADIENT_BORDER_WIDTH: closure_11,
  ACTION_SHEET_GRADIENT_BORDER_RADIUS: closure_12,
  ACTION_SHEET_BORDER_RADIUS: map1,
  ACTION_SHEET_INNER_BORDER_RADIUS: closure_14,
  ACTION_SHEET_MINIMUM_BOTTOM_PADDING: closure_15,
} = ActionSheetConstants);
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
const createStyles = fn(5014);
let closure_18 = createStyles.createStyles((arg0) => {
  let num = arg1;
  if (arg1 === undefined) {
    num = 0;
  }
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const obj = {
    background: {
      overflow: "hidden",
      borderTopLeftRadius: borderTopRightRadius,
      borderTopRightRadius,
      backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
    },
    wrapper: { overflow: "hidden", flex: 1 },
    wrapperWithBorder: null,
    content: null,
    gradient: null,
    gradientInnerFill: null,
    handleIndicator: null,
    backgroundOverlay: null,
    header: null,
    body: null,
  };
  const obj2 = {
    overflow: "hidden",
    borderTopLeftRadius: borderTopRightRadius,
    borderTopRightRadius,
    backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
  };
  obj.wrapperWithBorder = {
    overflow: "hidden",
    marginTop: marginHorizontal,
    marginHorizontal,
    borderTopLeftRadius: borderTopRightRadius,
    borderTopRightRadius,
    backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
  };
  let tmp5;
  if (arg0) {
    tmp5 = borderTopRightRadius;
  }
  const obj4 = { borderTopLeftRadius: tmp5, borderTopRightRadius: null, overflow: null, marginBottom: null, flex: 1 };
  let tmp6;
  if (arg0) {
    tmp6 = borderTopRightRadius;
  }
  obj4.borderTopRightRadius = tmp6;
  let str;
  if (arg0) {
    str = "hidden";
  }
  obj4.overflow = str;
  let num2 = 0;
  if (!flag) {
    num2 = num + 4;
  }
  obj4.marginBottom = num2;
  obj.content = obj4;
  const obj5 = {};
  const merged = Object.assign(hasOwnProperty.absoluteFillObject);
  const obj3 = {
    overflow: "hidden",
    marginTop: marginHorizontal,
    marginHorizontal,
    borderTopLeftRadius: borderTopRightRadius,
    borderTopRightRadius,
    backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
  };
  let str2;
  if (obj6.isIOS()) {
    str2 = "hidden";
  }
  obj5.overflow = str2;
  obj5.borderTopLeftRadius = borderTopRightRadius;
  obj5.borderTopRightRadius = borderTopRightRadius;
  obj.gradient = obj5;
  const rect = {
    position: "absolute",
    top: marginHorizontal,
    left: marginHorizontal,
    right: marginHorizontal,
    bottom: 0,
    borderTopLeftRadius: borderTopRightRadius,
    borderTopRightRadius,
  };
  obj.gradientInnerFill = rect;
  obj6 = PlatformUtils;
  obj.handleIndicator = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
  const obj8 = {};
  const merged1 = Object.assign(hasOwnProperty.absoluteFillObject);
  obj8.backgroundColor = nativeDefault.colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT;
  obj.backgroundOverlay = obj8;
  obj.header = { marginBottom: 16 };
  obj.body = { flex: 1 };
  return obj;
});
function ContentSizeBottomSheetInner(windowDimensions) {
  ({ startHeight, hasEverExpanded } = windowDimensions);
  const height = windowDimensions.windowDimensions.height;
  const onChange = windowDimensions.onChange;
  const onExpand = windowDimensions.onExpand;
  let maxDynamicContentSize = windowDimensions.maxDynamicContentSize;
  ({ wrapperStyle, scrollViewStyle, startExpanded, keyboardShouldPersistTaps, children, ref } = windowDimensions);
  const merged = Object.assign(
    windowDimensions,
    Object.assign({
      startHeight: 0,
      hasEverExpanded: 0,
      windowDimensions: 0,
      wrapperStyle: 0,
      scrollViewStyle: 0,
      startExpanded: 0,
      onChange: 0,
      onExpand: 0,
      keyboardShouldPersistTaps: 0,
      children: 0,
      maxDynamicContentSize: 0,
      ref: 0,
    }),
  );
  startHeight = undefined;
  closure_4 = undefined;
  const isScreenReaderEnabled = useIsScreenReaderEnabled.useIsScreenReaderEnabled();
  if (startHeight == null) {
    startHeight = height * React5;
  }
  if (!isScreenReaderEnabled) {
    if (!startExpanded) {
      let items = [startHeight];
    }
    [obj3.snapPoints, closure_4] = tmp7(items);
    const items1 = [isScreenReaderEnabled];
    const effect = noop.useEffect(() => {
      if (isScreenReaderEnabled) {
        closure_4([]);
      }
    }, items1);
    const items2 = [startHeight];
    const items3 = [onChange, onExpand];
    const callback = noop.useCallback((nativeEvent) => {
      if (nativeEvent.nativeEvent.layout.height < startHeight) {
        closure_4([]);
      }
    }, items2);
    const callback1 = noop.useCallback((arg0, arg1, arg2) => {
      if (onChange != null) {
        tmp(arg0, arg1, arg2);
      }
      if (0 === arg0) {
        if (onExpand != null) {
          tmp5();
        }
      }
    }, items3);
    const obj3 = {};
    const merged1 = Object.assign(merged);
    obj3.enableDynamicSizing = true;
    if (maxDynamicContentSize == null) {
      maxDynamicContentSize = height - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE - useSafeAreaInsetsDefault().top;
    }
    obj3.maxDynamicContentSize = maxDynamicContentSize;
    obj3.ref = ref;
    obj3.onChange = callback1;
    const obj4 = { bounces: false, keyboardShouldPersistTaps, style: scrollViewStyle, children: null };
    const obj5 = { onLayout: callback, style: wrapperStyle, children };
    obj4.children = __initData2(timestampProducer, obj5);
    obj3.children = __initData2(BottomSheetModal.BottomSheetScrollView, obj4);
    return __initData2(BottomSheetModalDefault, obj3);
  }
  items = [];
}
function ScrollableBottomSheetInner(windowDimensions) {
  ({ startHeight, contentHeight, maxHeight, hasEverExpanded } = windowDimensions);
  const height = windowDimensions.windowDimensions.height;
  const onChange = windowDimensions.onChange;
  const onExpand = windowDimensions.onExpand;
  ({ wrapperStyle, children, extraContent, ref } = windowDimensions);
  const merged = Object.assign(
    windowDimensions,
    Object.assign({
      startHeight: 0,
      contentHeight: 0,
      maxHeight: 0,
      hasEverExpanded: 0,
      windowDimensions: 0,
      wrapperStyle: 0,
      onChange: 0,
      onExpand: 0,
      children: 0,
      extraContent: 0,
      ref: 0,
    }),
  );
  startHeight = undefined;
  maxHeight = undefined;
  c6 = undefined;
  const isScreenReaderEnabled = useIsScreenReaderEnabled.useIsScreenReaderEnabled();
  if (startHeight == null) {
    startHeight = height * React5;
  }
  if (maxHeight == null) {
    maxHeight = contentHeight;
  }
  if (maxHeight == null) {
    maxHeight = height - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE - useSafeAreaInsetsDefault().top;
  }
  let items = [hasEverExpanded, isScreenReaderEnabled, maxHeight, startHeight];
  const memo = noop.useMemo(() => {
    let tmp = !isScreenReaderEnabled;
    if (!isScreenReaderEnabled) {
      tmp = !hasEverExpanded;
    }
    if (tmp) {
      tmp = startHeight < maxHeight;
    }
    const items = [];
    if (tmp) {
      items.push(startHeight);
    }
    items.push(maxHeight);
    return items;
  }, items);
  const diff = memo.length - 1;
  c6 = diff;
  const items1 = [onChange, onExpand, diff];
  const obj2 = { style: null, children };
  const items2 = [wrapperStyle, { maxHeight }];
  obj2.style = items2;
  const callback = noop.useCallback((arg0, arg1, arg2) => {
    if (onChange != null) {
      tmp(arg0, arg1, arg2);
    }
    if (arg0 === c6) {
      if (onExpand != null) {
        tmp5();
      }
    }
  }, items1);
  const obj3 = {};
  const tmp9 = __initData2(timestampProducer, obj2);
  const merged1 = Object.assign(merged);
  obj3.ref = ref;
  obj3.enableDynamicSizing = false;
  obj3.contentHeight = contentHeight;
  obj3.snapPoints = memo;
  obj3.onChange = callback;
  const items3 = [tmp9, extraContent];
  obj3.children = items3;
  return closure_1_17(BottomSheetModalDefault, obj3);
}
const __initData = {
  code: "function BottomSheetNativeTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get()<=-1;}",
};
const __initData2 = {
  code: "function BottomSheetNativeTsx2(){const{animatedIsVisuallyClosed}=this.__closure;return animatedIsVisuallyClosed.get();}",
};
const __initData3 = {
  code: "function BottomSheetNativeTsx3(isVisuallyClosed){const{transitionState,runOnJS,onLeave}=this.__closure;if(isVisuallyClosed&&transitionState==='exiting'){runOnJS(onLeave)();}}",
};
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Sheet/native/BottomSheet.native.tsx");

export function useBottomSheetWidth() {
  const tmp = useWindowDimensionsDefault({ ignoreKeyboard: true });
  const rect = useSafeAreaInsetsDefault();
  const left = rect.left;
  const right = rect.right;
  const result = Math.max(tmp.width - React6, 0) / 2;
  c2 = result;
  const items = [result, left, right];
  const memo = noop.useMemo(() => ({ marginLeft: Math.max(c2, left), marginRight: Math.max(c2, right) }), items);
  return tmp.width - memo.marginLeft - memo.marginRight;
}
export function BottomSheet(scrollable) {
  let flag = scrollable.scrollable;
  if (flag === undefined) {
    flag = false;
  }
  ({ startExpanded, startHeight, maxHeight, containerHeight } = scrollable);
  if (startExpanded === undefined) {
    startExpanded = false;
  }
  const backdropOpacity = scrollable.backdropOpacity;
  let left = backdropOpacity;
  const backdropChildren = scrollable.backdropChildren;
  let right = backdropChildren;
  ({ header, handleComponent, handleDisabled } = scrollable);
  if (handleDisabled === undefined) {
    handleDisabled = false;
  }
  const dismissAccessibilityLabel = scrollable.dismissAccessibilityLabel;
  dependencyMap = dismissAccessibilityLabel;
  const footer = scrollable.footer;
  const onExpand = scrollable.onExpand;
  const onDismiss = scrollable.onDismiss;
  const borderGradient = scrollable.borderGradient;
  const showGradient = scrollable.showGradient;
  ({
    keyboardShouldPersistTaps,
    children,
    backgroundStyles,
    contentStyles,
    bodyStyles,
    extraContent,
    contentHeight,
    ref,
  } = scrollable);
  let merged = Object.assign(
    scrollable,
    Object.assign({
      scrollable: 0,
      startHeight: 0,
      maxHeight: 0,
      containerHeight: 0,
      startExpanded: 0,
      backdropOpacity: 0,
      backdropChildren: 0,
      header: 0,
      handleComponent: 0,
      handleDisabled: 0,
      dismissAccessibilityLabel: 0,
      footer: 0,
      onExpand: 0,
      onDismiss: 0,
      keyboardShouldPersistTaps: 0,
      children: 0,
      backgroundStyles: 0,
      contentStyles: 0,
      bodyStyles: 0,
      borderGradient: 0,
      showGradient: 0,
      extraContent: 0,
      contentHeight: 0,
      ref: 0,
    }),
  );
  let animatedIndex;
  let derivedValue;
  const context = onExpand.useContext(right(5591));
  const transitionState = context.transitionState;
  const close = context.close;
  const onLeave = context.onLeave;
  const registerDismissHandler = context.registerDismissHandler;
  const rect = right(1625)();
  const tmp5 = closure_18(handleDisabled, Math.max(rect.bottom, animatedIndex), flag);
  const ref1 = onExpand.useRef(null);
  const tmp7 = footer(onExpand.useState(startExpanded), 2);
  closure_12 = tmp7[1];
  closure_13 = onExpand.useRef(false);
  ref = onExpand.useRef(true);
  let items = [onDismiss, registerDismissHandler];
  const layoutEffect = obj.useLayoutEffect(() => {
    registerDismissHandler(onDismiss);
  }, items);
  const tmp9 = onExpand.useContext(left(5028).AccessibilityPreferencesContext).reducedMotion.enabled
    ? registerDismissHandler
    : onLeave;
  const bottomSheetImperativeHandle = left(5592).useBottomSheetImperativeHandle(ref, ref1);
  let items1 = [transitionState, close];
  const effect = obj.useEffect(() => {
    let current = "exiting" !== transitionState;
    if (!current) {
      current = closure_13.current;
    }
    if (!current) {
      closure_14.current = false;
      const current2 = ref1.current;
      if (current2 != null) {
        current2.forceClose();
      }
    }
    let current3 = "visible" === transitionState;
    if (current3) {
      current3 = closure_13.current;
    }
    if (current3) {
      close();
    }
  }, items1);
  const tmp8Result = left(5592);
  const unmountEffect = left(5593).useUnmountEffect(() => {
    if (ref.current) {
      if (onDismiss != null) {
        tmp();
      }
    }
    onLeave();
  });
  const items2 = [close];
  const items3 = [onExpand];
  const callback = obj.useCallback((arg0, arg1, arg2, arg3, arg4) => {
    if (arg4 !== BottomSheetModal.ANIMATION_SOURCE.KEYBOARD) {
      if (-1 === arg1) {
        if (!closure_13.current) {
          tmp2.current = true;
          close();
        }
      }
      let current = arg1 > -1;
      if (current) {
        current = closure_13.current;
      }
      if (current) {
        const current2 = ref1.current;
        if (current2 != null) {
          current2.forceClose();
        }
      }
    }
  }, items2);
  animatedIndex = merged.animatedIndex;
  const callback1 = obj.useCallback(() => {
    closure_12(true);
    if (onExpand != null) {
      onExpand();
    }
  }, items3);
  const tmp8Result5 = left(5593);
  if (animatedIndex == null) {
    animatedIndex = tmp8Result6.useSharedValue(-1);
  }
  tmp8Result6 = left(5095);
  function ce() {
    return animatedIndex.get() <= -1;
  }
  ce.__closure = { animatedIndex };
  ce.__workletHash = 4341912681188;
  ce.__initData = __initData;
  derivedValue = left(5095).useDerivedValue(ce);
  const tmp8Result7 = left(5095);
  function he() {
    return derivedValue.get();
  }
  he.__closure = { animatedIsVisuallyClosed: derivedValue };
  he.__workletHash = 6995719052506;
  he.__initData = __initData2;
  function ue(arg0) {
    let tmp = arg0;
    if (arg0) {
      tmp = "exiting" === transitionState;
    }
    if (tmp) {
      ReanimatedRexport.runOnJS(onLeave)();
    }
  }
  const tmp8Result8 = left(5095);
  ue.__closure = { transitionState, runOnJS: left(5095).runOnJS, onLeave };
  ue.__workletHash = 77590951197;
  ue.__initData = __initData3;
  const animatedReaction = tmp8Result8.useAnimatedReaction(he, ue);
  const items4 = [dismissAccessibilityLabel];
  const items5 = [backdropOpacity, backdropChildren];
  const callback2 = obj.useCallback(
    () =>
      __initData2(ActionSheetHeaderBar.ActionSheetHeaderBar, {
        accessibilityLabel,
        onPress() {
          const current = ref.current;
          if (current != null) {
            current.close();
          }
        },
      }),
    items4,
  );
  const items6 = [footer];
  const callback3 = obj.useCallback((animatedIndex) => {
    const obj = { style: null, children: null };
    const items = [hasOwnProperty.absoluteFill, animatedIndex.style];
    obj.style = items;
    const items1 = [
      __initData2(Sheet_BottomSheetBackdrop.BottomSheetBackdrop, {
        animatedIndex: animatedIndex.animatedIndex,
        opacity: left,
      }),
      right,
    ];
    obj.children = items1;
    return closure_2_17(timestampProducer, obj);
  }, items5);
  const callback4 = obj.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    let tmpResult = footer;
    if (footer == null) {
      tmpResult = __initData2(NavScrim.NavScrim, {});
    }
    obj.children = tmpResult;
    return __initData2(BottomSheetModal.BottomSheetFooter, obj);
  }, items6);
  const tmp21 = right(1491)({ ignoreKeyboard: true });
  const rect2 = tmp2(1625)();
  left = rect2.left;
  right = rect2.right;
  const result = Math.max(tmp21.width - close, 0) / 2;
  dependencyMap = result;
  const items7 = [result, left, right];
  const memo = obj.useMemo(() => ({ marginLeft: Math.max(c2, left), marginRight: Math.max(c2, right) }), items7);
  const tmp25 = right(5194)();
  const items8 = [borderGradient];
  let backgroundComponent = merged.backgroundComponent;
  if (backgroundComponent == null) {
    if (null != borderGradient) {
      backgroundComponent = obj.useCallback((arg0) => {
        let tmp2 = null;
        if (null != borderGradient) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.borderGradient = tmp;
          tmp2 = __initData2(BorderGradientBackground, obj);
        }
        return tmp2;
      }, items8);
    }
  }
  const obj3 = {
    ref: ref1,
    accessible: false,
    accessibilityRole: "none",
    accessibilityLabel: "",
    startHeight,
    contentHeight,
    maxHeight,
    containerHeight,
    startExpanded,
    hasEverExpanded: tmp7[0],
    windowDimensions: tmp21,
    wrapperStyle: null,
    onExpand: callback1,
    enablePanDownToClose: true,
    containerStyle: memo,
    backgroundStyle: null,
    topInset: rect.top,
    keyboardBehavior: null,
    keyboardBlurBehavior: "restore",
    keyboardShouldPersistTaps: null,
    animationConfigs: null,
    overrideReduceMotion: null,
    handleIndicatorStyle: null,
    handleComponent: null,
    backdropComponent: null,
    backgroundComponent: null,
    renderFooter: null,
    animatedIndex: null,
    onAnimate: null,
    onClose: null,
    extraContent: null,
    children: null,
  };
  const items9 = [tmp5.wrapper, null != borderGradient && tmp5.wrapperWithBorder];
  obj3.wrapperStyle = items9;
  const items10 = [tmp5.background, backgroundStyles];
  obj3.backgroundStyle = items10;
  let str = "interactive";
  if (flag) {
    str = "extend";
  }
  obj3.keyboardBehavior = str;
  obj3.keyboardShouldPersistTaps = keyboardShouldPersistTaps;
  obj3.animationConfigs = tmp9;
  obj3.overrideReduceMotion = left(5095).ReduceMotion.Never;
  obj3.handleIndicatorStyle = tmp5.handleIndicator;
  let tmp28 = null;
  if (!handleDisabled) {
    if (handleComponent == null) {
      handleComponent = callback2;
    }
    tmp28 = handleComponent;
  }
  obj3.handleComponent = tmp28;
  obj3.backdropComponent = callback3;
  obj3.backgroundComponent = backgroundComponent;
  obj3.renderFooter = callback4;
  obj3.animatedIndex = animatedIndex;
  obj3.onAnimate = callback;
  obj3.onClose = onLeave;
  obj3.extraContent = extraContent;
  const obj4 = { style: null, children: null };
  const items11 = [tmp5.content, contentStyles];
  obj4.style = items11;
  let tmp27Result = null != header;
  if (tmp27Result) {
    const obj5 = { style: tmp5.header, children: header };
    tmp27Result = tmp27(tmp30, obj5);
  }
  const obj6 = { children: null };
  const items12 = [tmp27Result];
  const obj7 = { style: null, children };
  const items13 = [tmp5.body, bodyStyles];
  obj7.style = items13;
  items12[1] = derivedValue(borderGradient, obj7);
  obj4.children = items12;
  obj6.children = closure_17(borderGradient, obj4);
  obj3.children = derivedValue(left(5611).LayerScope, obj6);
  const tmp27Result3 = derivedValue(flag ? ScrollableBottomSheetInner : ContentSizeBottomSheetInner, obj3);
  let tmp27Result4 = tmp27Result3;
  if (showGradient) {
    let tmp34 = tmp25;
    if (tmp25 == null) {
      tmp34 = null;
    }
    const obj8 = { gradient: tmp34, children: tmp27Result3 };
    tmp27Result4 = tmp27(tmp8(5080).ThemeContextProvider, obj8);
  }
  return tmp27Result4;
}
