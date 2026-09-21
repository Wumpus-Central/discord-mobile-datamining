// === Module 7395: Sheet/BottomSheet ===

// Module 7395 (Sheet/BottomSheet)
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4492 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5171 */;
import LinearGradientDefault from "LinearGradient" /* 5198 */;
import NavigatorConstants from "NavigatorConstants" /* 5899 */;
import BottomSheetModal from "BottomSheetModal" /* 6869 */;
import NavScrim from "NavScrim" /* 7285 */;
import ActionSheetHeaderBar from "ActionSheetHeaderBar" /* 7399 */;
import Sheet_BottomSheetBackdrop from "Sheet/BottomSheetBackdrop" /* 7400 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const BottomSheetModalDefault = BottomSheetModal;

require = fn;
function Background(arg0) {
  const merged = Object.assign(arg0);
  return value2(timestampProducer, {});
}
function GradientBackground(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  const tmp = closure_18(false);
  obj.children = value2(timestampProducer, { style: closure_18(false).backgroundOverlay });
  return value2(timestampProducer, obj);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire, Platform } = get_ActivityIndicator);
const ActionSheetConstants = fn(7396);
({ ACTION_SHEET_START_HEIGHT_RATIO: closure_7, ACTION_SHEET_MAX_WIDTH: closure_8, ACTION_SHEET_SPRING_CONFIG: closure_9, ACTION_SHEET_SPRING_CONFIG_REDUCED_MOTION: c10, ACTION_SHEET_GRADIENT_BORDER_WIDTH: closure_11, ACTION_SHEET_GRADIENT_BORDER_RADIUS: closure_12, ACTION_SHEET_BORDER_RADIUS: map1, ACTION_SHEET_INNER_BORDER_RADIUS: closure_14, ACTION_SHEET_MINIMUM_BOTTOM_PADDING: closure_15 } = ActionSheetConstants);
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
const createStyles = fn(4756);
let closure_18 = createStyles.createStyles((arg0) => {
  let num = arg1;
  if (arg1 === undefined) {
    num = 0;
  }
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const obj = { background: { overflow: "hidden", borderTopLeftRadius: borderTopRightRadius, borderTopRightRadius, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, wrapper: { overflow: "hidden", flex: 1 }, wrapperWithBorder: null, content: null, gradient: null, handleIndicator: null, backgroundOverlay: null, header: null, body: null };
  const obj2 = { overflow: "hidden", borderTopLeftRadius: borderTopRightRadius, borderTopRightRadius, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
  obj.wrapperWithBorder = { overflow: "hidden", marginTop: marginHorizontal, marginHorizontal, borderTopLeftRadius: borderTopRightRadius, borderTopRightRadius, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
  let tmp4;
  if (arg0) {
    tmp4 = borderTopRightRadius;
  }
  const obj4 = { borderTopLeftRadius: tmp4, borderTopRightRadius: null, overflow: null, marginBottom: null, flex: 1 };
  let tmp5;
  if (arg0) {
    tmp5 = borderTopRightRadius;
  }
  obj4.borderTopRightRadius = tmp5;
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
  const obj3 = { overflow: "hidden", marginTop: marginHorizontal, marginHorizontal, borderTopLeftRadius: borderTopRightRadius, borderTopRightRadius, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
  let str2;
  if (obj5.isIOS()) {
    str2 = "hidden";
  }
  obj.gradient = { height: "100%", overflow: str2, borderTopLeftRadius: borderTopRightRadius, borderTopRightRadius };
  obj5 = PlatformUtils;
  const obj6 = { height: "100%", overflow: str2, borderTopLeftRadius: borderTopRightRadius, borderTopRightRadius };
  obj.handleIndicator = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
  const obj8 = {};
  const merged = Object.assign(hasOwnProperty.absoluteFillObject);
  obj8.backgroundColor = nativeDefault.colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT;
  obj.backgroundOverlay = obj8;
  obj.header = { marginBottom: 16 };
  obj.body = { flex: 1 };
  return obj;
});
let closure_19 = noop.forwardRef((windowDimensions, ref) => {
  ({ startHeight, hasEverExpanded } = windowDimensions);
  const height = windowDimensions.windowDimensions.height;
  const onChange = windowDimensions.onChange;
  const onExpand = windowDimensions.onExpand;
  let maxDynamicContentSize = windowDimensions.maxDynamicContentSize;
  ({ wrapperStyle, scrollViewStyle, startExpanded, keyboardShouldPersistTaps, children } = windowDimensions);
  const merged = Object.assign(windowDimensions, Object.assign({ startHeight: 0, hasEverExpanded: 0, windowDimensions: 0, wrapperStyle: 0, scrollViewStyle: 0, startExpanded: 0, onChange: 0, onExpand: 0, keyboardShouldPersistTaps: 0, children: 0, maxDynamicContentSize: 0 }));
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
    obj4.children = value2(timestampProducer, obj5);
    obj3.children = value2(BottomSheetModal.BottomSheetScrollView, obj4);
    return value2(BottomSheetModalDefault, obj3);
  }
  items = [];
});
let closure_20 = noop.forwardRef((windowDimensions, ref) => {
  ({ startHeight, contentHeight, maxHeight, hasEverExpanded } = windowDimensions);
  const height = windowDimensions.windowDimensions.height;
  const onChange = windowDimensions.onChange;
  const onExpand = windowDimensions.onExpand;
  const borderGradient = windowDimensions.borderGradient;
  ({ wrapperStyle, children, extraContent } = windowDimensions);
  const merged = Object.assign(windowDimensions, Object.assign({ startHeight: 0, contentHeight: 0, maxHeight: 0, hasEverExpanded: 0, windowDimensions: 0, wrapperStyle: 0, onChange: 0, onExpand: 0, children: 0, borderGradient: 0, extraContent: 0 }));
  startHeight = undefined;
  maxHeight = undefined;
  c6 = undefined;
  const tmp2 = closure_18(false);
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
  const tmp11 = value2(timestampProducer, obj2);
  const obj3 = {};
  const merged1 = Object.assign(merged);
  obj3.ref = ref;
  obj3.enableDynamicSizing = false;
  obj3.contentHeight = contentHeight;
  obj3.snapPoints = memo;
  obj3.onChange = callback;
  let tmp10Result = tmp11;
  if (null != borderGradient) {
    const obj4 = { style: tmp2.gradient, start: ConstantsIOS.VerticalGradient.START, end: ConstantsIOS.VerticalGradient.END, colors: borderGradient, children: tmp11 };
    tmp10Result = value2(LinearGradientDefault, obj4);
    const tmp3Result2 = LinearGradientDefault;
  }
  const items3 = [tmp10Result, extraContent];
  obj3.children = items3;
  return closure_1_17(BottomSheetModalDefault, obj3);
});
const __initData = { code: "function BottomSheetNativeTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get()<=-1;}" };
const __initData2 = { code: "function BottomSheetNativeTsx2(){const{animatedIsVisuallyClosed}=this.__closure;return animatedIsVisuallyClosed.get();}" };
const __initData3 = { code: "function BottomSheetNativeTsx3(isVisuallyClosed){const{transitionState,runOnJS,onLeave}=this.__closure;if(isVisuallyClosed&&transitionState==='exiting'){runOnJS(onLeave)();}}" };
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Sheet/native/BottomSheet.native.tsx");

export const BottomSheet = noop.forwardRef((scrollable, arg1) => {
  let flag = scrollable.scrollable;
  if (flag === undefined) {
    flag = false;
  }
  ({ startExpanded, startHeight, maxHeight, containerHeight } = scrollable);
  if (startExpanded === undefined) {
    startExpanded = false;
  }
  const backdropOpacity = scrollable.backdropOpacity;
  const backdropChildren = scrollable.backdropChildren;
  ({ header, handleComponent, handleDisabled } = scrollable);
  if (handleDisabled === undefined) {
    handleDisabled = false;
  }
  const dismissAccessibilityLabel = scrollable.dismissAccessibilityLabel;
  const footer = scrollable.footer;
  const onExpand = scrollable.onExpand;
  const onDismiss = scrollable.onDismiss;
  ({ borderGradient, showGradient } = scrollable);
  ({ keyboardShouldPersistTaps, children, backgroundStyles, contentStyles, bodyStyles, extraContent, contentHeight } = scrollable);
  let merged = Object.assign(scrollable, Object.assign({ scrollable: 0, startHeight: 0, maxHeight: 0, containerHeight: 0, startExpanded: 0, backdropOpacity: 0, backdropChildren: 0, header: 0, handleComponent: 0, handleDisabled: 0, dismissAccessibilityLabel: 0, footer: 0, onExpand: 0, onDismiss: 0, keyboardShouldPersistTaps: 0, children: 0, backgroundStyles: 0, contentStyles: 0, bodyStyles: 0, borderGradient: 0, showGradient: 0, extraContent: 0, contentHeight: 0 }));
  let derivedValue;
  const context = onExpand.useContext(backdropChildren(dismissAccessibilityLabel[15]));
  const transitionState = context.transitionState;
  const close = context.close;
  const onLeave = context.onLeave;
  const registerDismissHandler = context.registerDismissHandler;
  const rect = backdropChildren(dismissAccessibilityLabel[8])();
  const tmp5 = closure_18(handleDisabled, Math.max(rect.bottom, derivedValue), flag);
  onExpand.useRef(null);
  const tmp7 = footer(onExpand.useState(startExpanded), 2);
  closure_11 = tmp7[1];
  closure_12 = onExpand.useRef(false);
  const ref = onExpand.useRef(true);
  let items = [onDismiss, registerDismissHandler];
  const layoutEffect = obj.useLayoutEffect(() => {
    registerDismissHandler(onDismiss);
  }, items);
  const tmp9 = onExpand.useContext(backdropOpacity(dismissAccessibilityLabel[16]).AccessibilityPreferencesContext).reducedMotion.enabled ? ref : registerDismissHandler;
  const bottomSheetImperativeHandle = backdropOpacity(dismissAccessibilityLabel[17]).useBottomSheetImperativeHandle(arg1, ref);
  let items1 = [transitionState, close];
  const effect = obj.useEffect(() => {
    let current = "exiting" !== transitionState;
    if (!current) {
      current = closure_12.current;
    }
    if (!current) {
      closure_13.current = false;
      const current2 = ref.current;
      if (current2 != null) {
        current2.forceClose();
      }
    }
    let current3 = "visible" === transitionState;
    if (current3) {
      current3 = closure_12.current;
    }
    if (current3) {
      close();
    }
  }, items1);
  const tmp8Result = backdropOpacity(dismissAccessibilityLabel[17]);
  const unmountEffect = backdropOpacity(dismissAccessibilityLabel[18]).useUnmountEffect(() => {
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
        if (!closure_12.current) {
          tmp2.current = true;
          close();
        }
      }
      let current = arg1 > -1;
      if (current) {
        current = closure_12.current;
      }
      if (current) {
        const current2 = ref.current;
        if (current2 != null) {
          current2.forceClose();
        }
      }
    }
  }, items2);
  let animatedIndex = merged.animatedIndex;
  const callback1 = obj.useCallback(() => {
    closure_11(true);
    if (onExpand != null) {
      onExpand();
    }
  }, items3);
  const tmp8Result6 = backdropOpacity(dismissAccessibilityLabel[18]);
  if (animatedIndex == null) {
    animatedIndex = tmp8Result7.useSharedValue(-1);
  }
  tmp8Result7 = backdropOpacity(dismissAccessibilityLabel[14]);
  function ue() {
    return animatedIndex.get() <= -1;
  }
  ue.__closure = { animatedIndex };
  ue.__workletHash = 4341912681188;
  ue.__initData = __initData;
  derivedValue = backdropOpacity(dismissAccessibilityLabel[14]).useDerivedValue(ue);
  const tmp8Result8 = backdropOpacity(dismissAccessibilityLabel[14]);
  function _e() {
    return derivedValue.get();
  }
  _e.__closure = { animatedIsVisuallyClosed: derivedValue };
  _e.__workletHash = 6995719052506;
  _e.__initData = __initData2;
  function he(arg0) {
    let tmp = arg0;
    if (arg0) {
      tmp = "exiting" === transitionState;
    }
    if (tmp) {
      ReanimatedRexport.runOnJS(onLeave)();
    }
  }
  const tmp8Result9 = backdropOpacity(dismissAccessibilityLabel[14]);
  he.__closure = { transitionState, runOnJS: backdropOpacity(dismissAccessibilityLabel[14]).runOnJS, onLeave };
  he.__workletHash = 77590951197;
  he.__initData = __initData3;
  const animatedReaction = tmp8Result9.useAnimatedReaction(_e, he);
  const items4 = [dismissAccessibilityLabel];
  const items5 = [backdropOpacity, backdropChildren];
  const callback2 = obj.useCallback(() => value2(ActionSheetHeaderBar.ActionSheetHeaderBar, {
    accessibilityLabel: dismissAccessibilityLabel,
    onPress() {
      const current = ref.current;
      if (current != null) {
        current.close();
      }
    }
  }), items4);
  const items6 = [footer];
  const callback3 = obj.useCallback((animatedIndex) => {
    const obj = { style: null, children: null };
    const items = [hasOwnProperty.absoluteFill, animatedIndex.style];
    obj.style = items;
    const items1 = [value2(Sheet_BottomSheetBackdrop.BottomSheetBackdrop, { animatedIndex: animatedIndex.animatedIndex, opacity: backdropOpacity }), backdropChildren];
    obj.children = items1;
    return closure_2_17(timestampProducer, obj);
  }, items5);
  const callback4 = obj.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    let tmpResult = footer;
    if (footer == null) {
      tmpResult = value2(NavScrim.NavScrim, {});
    }
    obj.children = tmpResult;
    return value2(BottomSheetModal.BottomSheetFooter, obj);
  }, items6);
  const tmp21 = backdropChildren(dismissAccessibilityLabel[22])({ ignoreKeyboard: true });
  const width = tmp21.width;
  closure_129_0 = width;
  const items7 = [width];
  const memo = obj.useMemo(() => ({ marginHorizontal: Math.max(backdropOpacity - React6, 0) / 2 }), items7);
  const tmp24 = backdropChildren(dismissAccessibilityLabel[23])();
  const backgroundComponent = merged.backgroundComponent;
  if (backgroundComponent != null) {
    const obj3 = { ref, accessible: null, accessibilityRole: "none", accessibilityLabel: "", startHeight: null, contentHeight: null, maxHeight: null, containerHeight: null, startExpanded: null, hasEverExpanded: null, windowDimensions: null, wrapperStyle: null, onExpand: null, enablePanDownToClose: true, containerStyle: null, backgroundStyle: null, topInset: null, keyboardBehavior: null, keyboardBlurBehavior: "restore", keyboardShouldPersistTaps: null, animationConfigs: null, overrideReduceMotion: null, handleIndicatorStyle: null, handleComponent: null, backdropComponent: null, backgroundComponent: null, renderFooter: null, animatedIndex: null, onAnimate: null, onClose: null, borderGradient: null, extraContent: null, children: null };
    const tmp8Result10 = tmp8(tmp3[7]);
    const isIOSResult = tmp8(tmp3[7]).isIOS();
    obj3.accessible = !tmp8(tmp3[7]).isIOS();
    obj3.startHeight = startHeight;
    obj3.contentHeight = contentHeight;
    obj3.maxHeight = maxHeight;
    obj3.containerHeight = containerHeight;
    obj3.startExpanded = startExpanded;
    obj3.hasEverExpanded = tmp7[0];
    obj3.windowDimensions = tmp21;
    const items8 = [tmp5.wrapper, null != borderGradient && tmp5.wrapperWithBorder];
    obj3.wrapperStyle = items8;
    obj3.onExpand = callback1;
    obj3.containerStyle = memo;
    const items9 = [tmp5.background, backgroundStyles];
    obj3.backgroundStyle = items9;
    obj3.topInset = rect.top;
    let str = "interactive";
    if (flag) {
      str = "extend";
    }
    obj3.keyboardBehavior = str;
    obj3.keyboardShouldPersistTaps = keyboardShouldPersistTaps;
    obj3.animationConfigs = tmp9;
    obj3.overrideReduceMotion = tmp8(tmp3[14]).ReduceMotion.Never;
    obj3.handleIndicatorStyle = tmp5.handleIndicator;
    let tmp29 = null;
    if (!handleDisabled) {
      if (handleComponent == null) {
        handleComponent = callback2;
      }
      tmp29 = handleComponent;
    }
    obj3.handleComponent = tmp29;
    obj3.backdropComponent = callback3;
    obj3.backgroundComponent = backgroundComponent;
    obj3.renderFooter = callback4;
    obj3.animatedIndex = animatedIndex;
    obj3.onAnimate = callback;
    obj3.onClose = onLeave;
    obj3.borderGradient = borderGradient;
    obj3.extraContent = extraContent;
    const obj4 = { style: null, children: null };
    const items10 = [tmp5.content, contentStyles];
    obj4.style = items10;
    let tmp26Result = null != header;
    if (tmp26Result) {
      const obj5 = { style: tmp5.header, children: header };
      tmp26Result = closure_16(tmp31, obj5);
    }
    const obj6 = { children: null };
    const items11 = [tmp26Result, ];
    const obj7 = { style: null, children: null };
    const items12 = [tmp5.body, bodyStyles];
    obj7.style = items12;
    obj7.children = children;
    items11[1] = closure_16(transitionState, obj7);
    obj4.children = items11;
    obj6.children = closure_17(transitionState, obj4);
    obj3.children = closure_16(tmp8(tmp3[24]).LayerScope, obj6);
    const tmp26Result3 = closure_16(tmp23, obj3);
    let tmp26Result4 = tmp26Result3;
    if (showGradient) {
      let tmp35 = tmp24;
      if (tmp24 == null) {
        tmp35 = null;
      }
      const obj8 = { gradient: tmp35, children: tmp26Result3 };
      tmp26Result4 = closure_16(tmp8(tmp3[25]).ThemeContextProvider, obj8);
    }
    return tmp26Result4;
  }
  const obj2 = { transitionState, runOnJS: backdropOpacity(dismissAccessibilityLabel[14]).runOnJS, onLeave };
  tmp23 = flag ? closure_20 : closure_19;
});