// === Module 5388: Sheet/BottomSheet ===

// Module 5388 (Sheet/BottomSheet)
import nativeDefault from "native" /* 575 */;
import ConstantsIOS from "ConstantsIOS" /* 1092 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5390 */;
import BottomSheetSnapPoints from "BottomSheetSnapPoints" /* 5391 */;
import BottomSheetModal from "BottomSheetModal" /* 5392 */;
import NavigatorConstants from "NavigatorConstants" /* 5714 */;
import LinearGradientDefault from "LinearGradient" /* 5715 */;
import ActionSheetHeaderBar from "ActionSheetHeaderBar" /* 5723 */;
import Sheet_BottomSheetBackdrop from "Sheet/BottomSheetBackdrop" /* 5725 */;
import NavScrim from "NavScrim" /* 5734 */;
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
function BorderGradientBackground(borderGradient) {
  const merged = Object.assign(borderGradient, Object.assign({ borderGradient: 0 }));
  const tmp2 = closure_18(false);
  let flattenResult = hasOwnProperty.flatten(merged.style);
  if (flattenResult == null) {
    flattenResult = {};
  }
  const obj = {};
  const merged1 = Object.assign(merged);
  const obj2 = { style: tmp2.gradient, start: ConstantsIOS.VerticalGradient.START, end: ConstantsIOS.VerticalGradient.END, colors: borderGradient.borderGradient };
  items = [value2(LinearGradientDefault, obj2), ];
  const obj3 = { style: null };
  const items1 = [tmp2.gradientInnerFill, { backgroundColor: flattenResult.backgroundColor }];
  obj3.style = items1;
  items[1] = value2(timestampProducer, obj3);
  obj.children = items;
  return closure_1_17(timestampProducer, obj);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: closure_6, Platform } = get_ActivityIndicator);
const ActionSheetConstants = fn(5389);
({ ACTION_SHEET_START_HEIGHT_RATIO: metroImportDefault, ACTION_SHEET_MAX_WIDTH: closure_8, ACTION_SHEET_SPRING_CONFIG: closure_9, ACTION_SHEET_SPRING_CONFIG_REDUCED_MOTION: closure_10, ACTION_SHEET_GRADIENT_BORDER_WIDTH: closure_11, ACTION_SHEET_GRADIENT_BORDER_RADIUS: closure_12, ACTION_SHEET_BORDER_RADIUS: map1, ACTION_SHEET_INNER_BORDER_RADIUS: closure_14, ACTION_SHEET_MINIMUM_BOTTOM_PADDING: closure_15 } = ActionSheetConstants);
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
const createStyles = fn(5140);
let closure_18 = createStyles.createStyles((arg0) => {
  let num = arg1;
  if (arg1 === undefined) {
    num = 0;
  }
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const obj = { background: { overflow: "hidden", borderTopLeftRadius: borderTopRightRadius, borderTopRightRadius, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, wrapper: { overflow: "hidden", flex: 1 }, wrapperWithBorder: null, content: null, gradient: null, gradientInnerFill: null, handleIndicator: null, backgroundOverlay: null, header: null, body: null };
  const obj2 = { overflow: "hidden", borderTopLeftRadius: borderTopRightRadius, borderTopRightRadius, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
  obj.wrapperWithBorder = { overflow: "hidden", marginTop: marginHorizontal, marginHorizontal, borderTopLeftRadius: borderTopRightRadius, borderTopRightRadius, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
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
  const obj3 = { overflow: "hidden", marginTop: marginHorizontal, marginHorizontal, borderTopLeftRadius: borderTopRightRadius, borderTopRightRadius, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
  let str2;
  if (obj6.isIOS()) {
    str2 = "hidden";
  }
  obj5.overflow = str2;
  obj5.borderTopLeftRadius = borderTopRightRadius;
  obj5.borderTopRightRadius = borderTopRightRadius;
  obj.gradient = obj5;
  const rect = { position: "absolute", top: marginHorizontal, left: marginHorizontal, right: marginHorizontal, bottom: 0, borderTopLeftRadius: borderTopRightRadius, borderTopRightRadius };
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
  let height = windowDimensions.windowDimensions.height;
  const onChange = windowDimensions.onChange;
  const onExpand = windowDimensions.onExpand;
  ({ maxDynamicContentSize, followWindowHeight } = windowDimensions);
  ({ wrapperStyle, scrollViewStyle, startExpanded, keyboardShouldPersistTaps, children, ref } = windowDimensions);
  const merged = Object.assign(windowDimensions, Object.assign({ startHeight: 0, hasEverExpanded: 0, windowDimensions: 0, wrapperStyle: 0, scrollViewStyle: 0, startExpanded: 0, onChange: 0, onExpand: 0, keyboardShouldPersistTaps: 0, children: 0, maxDynamicContentSize: 0, followWindowHeight: 0, ref: 0 }));
  startHeight = undefined;
  let first1;
  closure_6 = undefined;
  c7 = undefined;
  let droppedStartHeight;
  const isScreenReaderEnabled = onChange(followWindowHeight[9]).useIsScreenReaderEnabled();
  if (startHeight == null) {
    startHeight = height * c7;
  }
  startHeight = isScreenReaderEnabled(startHeight.useState(startHeight), 1)[0];
  let tmp9 = isScreenReaderEnabled;
  if (!isScreenReaderEnabled) {
    tmp9 = true === startExpanded;
  }
  const tmp7Result = isScreenReaderEnabled(startHeight.useState(tmp9), 2);
  first1 = tmp7Result[0];
  closure_6 = tmp7Result[1];
  const obj = onChange(followWindowHeight[9]);
  const tmp2 = onExpand;
  [tmp13, c7] = isScreenReaderEnabled(startHeight.useState({ contentHeight: null, droppedStartHeight: null }), 2);
  items = [isScreenReaderEnabled];
  const effect = obj2.useEffect(() => {
    if (isScreenReaderEnabled) {
      closure_6(true);
    }
  }, items);
  const tmp7Result2 = isScreenReaderEnabled(startHeight.useState({ contentHeight: null, droppedStartHeight: null }), 2);
  let obj3 = {};
  const merged1 = Object.assign(tmp13);
  obj3.startHeight = startHeight;
  droppedStartHeight = onChange(followWindowHeight[10]).resolveDroppedStartHeight(obj3);
  const items1 = [startHeight, droppedStartHeight, first1];
  const items2 = [followWindowHeight, startHeight];
  const memo = obj2.useMemo(() => BottomSheetSnapPoints.getContentSizeSnapPoints({ startHeight, droppedStartHeight, forceFullHeight: first1 }), items1);
  const items3 = [onChange, onExpand];
  const callback = obj2.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    _undefined((droppedStartHeight) => {
      let tmp = droppedStartHeight;
      droppedStartHeight = BottomSheetSnapPoints.resolveDroppedStartHeight({ droppedStartHeight: droppedStartHeight.droppedStartHeight, contentHeight: height, startHeight });
      let tmp4 = null;
      if (followWindowHeight) {
        tmp4 = height;
      }
      if (tmp.contentHeight !== tmp4) {
        const obj3 = { contentHeight: tmp4, droppedStartHeight };
        tmp = obj3;
      }
      return tmp;
    });
  }, items2);
  const callback1 = obj2.useCallback((arg0, arg1, arg2) => {
    if (onChange != null) {
      tmp(arg0, arg1, arg2);
    }
    if (0 === arg0) {
      if (onExpand != null) {
        tmp5();
      }
    }
  }, items3);
  const obj4 = {};
  const tmp4Result = onChange(followWindowHeight[10]);
  const merged2 = Object.assign(merged);
  obj4.enableDynamicSizing = true;
  obj4.snapPoints = memo;
  if (maxDynamicContentSize == null) {
    maxDynamicContentSize = height - tmp4(followWindowHeight[12]).NAV_BAR_HEIGHT_MULTILINE - onExpand(followWindowHeight[8])().top;
  }
  obj4.maxDynamicContentSize = maxDynamicContentSize;
  obj4.ref = ref;
  obj4.onChange = callback1;
  const tmp2Result = tmp2(followWindowHeight[11]);
  obj4.children = closure_16(onChange(followWindowHeight[11]).BottomSheetScrollView, { bounces: false, keyboardShouldPersistTaps, style: scrollViewStyle, children: closure_16(closure_6, { onLayout: callback, style: wrapperStyle, children }) });
  return closure_16(tmp2Result, obj4);
}
function ScrollableBottomSheetInner(windowDimensions) {
  ({ startHeight, contentHeight, maxHeight, hasEverExpanded } = windowDimensions);
  const height = windowDimensions.windowDimensions.height;
  const onChange = windowDimensions.onChange;
  const onExpand = windowDimensions.onExpand;
  ({ wrapperStyle, children, extraContent, ref } = windowDimensions);
  const merged = Object.assign(windowDimensions, Object.assign({ startHeight: 0, contentHeight: 0, maxHeight: 0, hasEverExpanded: 0, windowDimensions: 0, wrapperStyle: 0, onChange: 0, onExpand: 0, children: 0, extraContent: 0, followWindowHeight: 0, ref: 0 }));
  startHeight = undefined;
  maxHeight = undefined;
  c6 = undefined;
  const isScreenReaderEnabled = useIsScreenReaderEnabled.useIsScreenReaderEnabled();
  if (startHeight == null) {
    startHeight = height * metroImportDefault;
  }
  if (maxHeight == null) {
    maxHeight = contentHeight;
  }
  if (maxHeight == null) {
    maxHeight = height - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE - useSafeAreaInsetsDefault().top;
  }
  items = [hasEverExpanded, isScreenReaderEnabled, maxHeight, startHeight];
  const memo = noop.useMemo(() => {
    let tmp = !isScreenReaderEnabled;
    if (!isScreenReaderEnabled) {
      tmp = !hasEverExpanded;
    }
    if (tmp) {
      tmp = startHeight < maxHeight;
    }
    items = [];
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
  const tmp9 = value2(timestampProducer, obj2);
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
let closure_24 = { code: "(function BottomSheetNativeTsx1(){let[animatedIndex]=this.__closure;return animatedIndex.get()<=-1;})" };
let closure_25 = { code: "(function BottomSheetNativeTsx2(){let[animatedIsVisuallyClosed]=this.__closure;return animatedIsVisuallyClosed.get();})" };
let closure_26 = { code: "(function BottomSheetNativeTsx3(isVisuallyClosed){let[transitionState,scheduleOnRN,onLeave]=this.__closure;if(isVisuallyClosed&&transitionState==='exiting'){scheduleOnRN(onLeave);}})" };
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Sheet/native/BottomSheet.native.tsx");

export function useBottomSheetContainerStyle(width) {
  const rect = useSafeAreaInsetsDefault();
  const left = rect.left;
  const right = rect.right;
  const result = Math.max(width.width - React5, 0) / 2;
  c2 = result;
  items = [result, left, right];
  return noop.useMemo(() => ({ marginLeft: Math.max(c2, left), marginRight: Math.max(c2, right) }), items);
}
export function useBottomSheetWidth() {
  const tmp = useWindowDimensionsDefault({ ignoreKeyboard: true });
  const rect = useSafeAreaInsetsDefault();
  const left = rect.left;
  const right = rect.right;
  const result = Math.max(tmp.width - React5, 0) / 2;
  c2 = result;
  items = [result, left, right];
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
  ({ showGradient, resyncOnRotation, keyboardShouldPersistTaps, children, backgroundStyles, contentStyles, bodyStyles, extraContent, contentHeight } = scrollable);
  if (resyncOnRotation === undefined) {
    resyncOnRotation = false;
  }
  let merged = Object.assign(scrollable, Object.assign({ scrollable: 0, startHeight: 0, maxHeight: 0, containerHeight: 0, startExpanded: 0, backdropOpacity: 0, backdropChildren: 0, header: 0, handleComponent: 0, handleDisabled: 0, dismissAccessibilityLabel: 0, footer: 0, onExpand: 0, onDismiss: 0, keyboardShouldPersistTaps: 0, children: 0, backgroundStyles: 0, contentStyles: 0, bodyStyles: 0, borderGradient: 0, showGradient: 0, extraContent: 0, contentHeight: 0, resyncOnRotation: 0, ref: 0 }));
  const context = onExpand.useContext(right(5719));
  const transitionState = context.transitionState;
  const close = context.close;
  const onLeave = context.onLeave;
  const registerDismissHandler = context.registerDismissHandler;
  const rect = right(1627)();
  const tmp5 = closure_18(handleDisabled, Math.max(rect.bottom, closure_15), flag);
  onExpand.useRef(null);
  const tmp7 = footer(onExpand.useState(startExpanded), 2);
  closure_12 = tmp7[1];
  const ref1 = onExpand.useRef(false);
  const ref = onExpand.useRef(true);
  items = [onDismiss, registerDismissHandler];
  const layoutEffect = obj.useLayoutEffect(() => {
    registerDismissHandler(onDismiss);
  }, items);
  const tmp10 = onExpand.useContext(left(5154).AccessibilityPreferencesContext).reducedMotion.enabled ? registerDismissHandler : onLeave;
  const bottomSheetImperativeHandle = left(5720).useBottomSheetImperativeHandle(scrollable.ref, ref);
  let items1 = [transitionState, close];
  const effect = obj.useEffect(() => {
    let current = "exiting" !== transitionState;
    if (!current) {
      current = ref1.current;
    }
    if (!current) {
      closure_14.current = false;
      const current2 = ref.current;
      if (current2 != null) {
        current2.forceClose();
      }
    }
    let current3 = "visible" === transitionState;
    if (current3) {
      current3 = ref1.current;
    }
    if (current3) {
      close();
    }
  }, items1);
  const tmp9Result = left(5720);
  const unmountEffect = left(5721).useUnmountEffect(() => {
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
        if (!ref1.current) {
          tmp2.current = true;
          close();
        }
      }
      let current = arg1 > -1;
      if (current) {
        current = ref1.current;
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
    closure_12(true);
    if (onExpand != null) {
      onExpand();
    }
  }, items3);
  const tmp9Result6 = left(5721);
  if (animatedIndex == null) {
    animatedIndex = tmp9Result7.useSharedValue(-1);
  }
  tmp9Result7 = left(1652);
  const items4 = [closure_24, animatedIndex];
  left = undefined;
  [tmp17, tmp18] = items4;
  class BottomSheetNativeTsx1 {
    constructor() {
      return left.get() <= -1;
    }
  }
  const items5 = [tmp18];
  BottomSheetNativeTsx1.__closure = items5;
  BottomSheetNativeTsx1.__workletHash = 4031587621117;
  BottomSheetNativeTsx1.__initData = tmp17;
  const derivedValue = left(1652).useDerivedValue(BottomSheetNativeTsx1);
  const tmp9Result8 = left(1652);
  const items6 = [closure_25, derivedValue];
  left = undefined;
  [tmp20, tmp21] = items6;
  class BottomSheetNativeTsx2 {
    constructor() {
      return left.get();
    }
  }
  const items7 = [tmp21];
  BottomSheetNativeTsx2.__closure = items7;
  BottomSheetNativeTsx2.__workletHash = 8974006408707;
  BottomSheetNativeTsx2.__initData = tmp20;
  const items8 = [closure_26, transitionState, left(1705).scheduleOnRN, onLeave];
  left = undefined;
  right = undefined;
  dependencyMap = undefined;
  [tmp22, tmp23, tmp24, tmp25] = items8;
  class BottomSheetNativeTsx3 {
    constructor(arg0) {
      tmp = scrollable;
      if (scrollable) {
        tmp2 = left;
        str = "exiting";
        tmp = "exiting" === left;
      }
      if (tmp) {
        tmp3 = right;
        tmp4 = closure_2;
        tmp5 = right(closure_2);
      }
      return;
    }
  }
  const items9 = [tmp23, tmp24, tmp25];
  BottomSheetNativeTsx3.__closure = items9;
  BottomSheetNativeTsx3.__workletHash = 15635557182085;
  BottomSheetNativeTsx3.__initData = tmp22;
  const animatedReaction = left(1652).useAnimatedReaction(BottomSheetNativeTsx2, BottomSheetNativeTsx3);
  const items10 = [dismissAccessibilityLabel];
  const items11 = [backdropOpacity, backdropChildren];
  const callback2 = obj.useCallback(() => value2(ActionSheetHeaderBar.ActionSheetHeaderBar, {
    accessibilityLabel,
    onPress() {
      const current = ref.current;
      if (current != null) {
        current.close();
      }
    }
  }), items10);
  const items12 = [footer];
  const callback3 = obj.useCallback((animatedIndex) => {
    const obj = { style: null, children: null };
    items = [hasOwnProperty.absoluteFill, animatedIndex.style];
    obj.style = items;
    const items1 = [value2(Sheet_BottomSheetBackdrop.BottomSheetBackdrop, { animatedIndex: animatedIndex.animatedIndex, opacity: left }), right];
    obj.children = items1;
    return closure_2_17(timestampProducer, obj);
  }, items11);
  const callback4 = obj.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    let tmpResult = footer;
    if (footer == null) {
      tmpResult = value2(NavScrim.NavScrim, {});
    }
    obj.children = tmpResult;
    return value2(BottomSheetModal.BottomSheetFooter, obj);
  }, items12);
  const tmp30 = right(1493)({ ignoreKeyboard: true });
  const rect2 = tmp2(1627)();
  left = rect2.left;
  right = rect2.right;
  const result = Math.max(tmp30.width - close, 0) / 2;
  dependencyMap = result;
  const items13 = [result, left, right];
  const memo = obj.useMemo(() => ({ marginLeft: Math.max(c2, left), marginRight: Math.max(c2, right) }), items13);
  if (resyncOnRotation) {
    resyncOnRotation = tmp9(1377).isAndroid();
    const tmp9Result10 = tmp9(1377);
  }
  const tmp34 = right(5310)();
  const items14 = [borderGradient];
  let backgroundComponent = merged.backgroundComponent;
  if (backgroundComponent == null) {
    if (null != borderGradient) {
      backgroundComponent = obj.useCallback((arg0) => {
        let tmp2 = null;
        if (null != borderGradient) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.borderGradient = tmp;
          tmp2 = value2(BorderGradientBackground, obj);
        }
        return tmp2;
      }, items14);
    }
  }
  const obj2 = { ref, accessible: false, accessibilityRole: "none", accessibilityLabel: "", startHeight, contentHeight, maxHeight, containerHeight, startExpanded, hasEverExpanded: tmp7[0], windowDimensions: tmp30, followWindowHeight: resyncOnRotation, wrapperStyle: null, onExpand: callback1, enablePanDownToClose: true, containerStyle: memo, backgroundStyle: null, topInset: rect.top, keyboardBehavior: null, keyboardBlurBehavior: "restore", keyboardShouldPersistTaps: null, animationConfigs: null, overrideReduceMotion: null, handleIndicatorStyle: null, handleComponent: null, backdropComponent: null, backgroundComponent: null, renderFooter: null, animatedIndex: null, onAnimate: null, onClose: null, extraContent: null, children: null };
  const items15 = [tmp5.wrapper, null != borderGradient && tmp5.wrapperWithBorder];
  obj2.wrapperStyle = items15;
  const items16 = [tmp5.background, backgroundStyles];
  obj2.backgroundStyle = items16;
  let str = "interactive";
  if (flag) {
    str = "extend";
  }
  obj2.keyboardBehavior = str;
  obj2.keyboardShouldPersistTaps = keyboardShouldPersistTaps;
  obj2.animationConfigs = tmp10;
  obj2.overrideReduceMotion = left(1652).ReduceMotion.Never;
  obj2.handleIndicatorStyle = tmp5.handleIndicator;
  let tmp37 = null;
  if (!handleDisabled) {
    if (handleComponent == null) {
      handleComponent = callback2;
    }
    tmp37 = handleComponent;
  }
  obj2.handleComponent = tmp37;
  obj2.backdropComponent = callback3;
  obj2.backgroundComponent = backgroundComponent;
  obj2.renderFooter = callback4;
  obj2.animatedIndex = animatedIndex;
  obj2.onAnimate = callback;
  obj2.onClose = onLeave;
  obj2.extraContent = extraContent;
  if (resyncOnRotation) {
    const obj3 = { bottomSheetRef: ref, isExitingRef: ref1 };
    resyncOnRotation = closure_16(tmp9(5737).BottomSheetRotationResync, obj3);
  }
  const items17 = [resyncOnRotation, ];
  const obj4 = { style: null, children: null };
  const items18 = [tmp5.content, contentStyles];
  obj4.style = items18;
  let tmp39Result = null != header;
  if (tmp39Result) {
    const obj5 = { style: tmp5.header, children: header };
    tmp39Result = closure_16(tmp40, obj5);
  }
  const obj6 = { children: null };
  const items19 = [tmp39Result, ];
  const obj7 = { style: null, children };
  const items20 = [tmp5.body, bodyStyles];
  obj7.style = items20;
  items19[1] = closure_16(borderGradient, obj7);
  obj4.children = items19;
  obj6.children = closure_17(borderGradient, obj4);
  items17[1] = closure_16(left(5738).LayerScope, obj6);
  obj2.children = items17;
  const tmp36Result = closure_17(flag ? ScrollableBottomSheetInner : ContentSizeBottomSheetInner, obj2);
  let tmp39Result2 = tmp36Result;
  if (showGradient) {
    let tmp44 = tmp34;
    if (tmp34 == null) {
      tmp44 = null;
    }
    const obj8 = { gradient: tmp44, children: tmp36Result };
    tmp39Result2 = closure_16(tmp9(5199).ThemeContextProvider, obj8);
  }
  return tmp39Result2;
}