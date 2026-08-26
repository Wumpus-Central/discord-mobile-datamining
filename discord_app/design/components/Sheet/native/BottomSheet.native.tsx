// === Module 5569: Background ===

// Module 5569 (Background)
import set from "set" /* 500 */;
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ACTION_SHEET_START_HEIGHT_RATIO from "ACTION_SHEET_START_HEIGHT_RATIO" /* 5570 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
function Background(arg0) {
  const merged = Object.assign(arg0);
  return callback(closure_6, {});
}
function GradientBackground(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { style: callback2(false).backgroundOverlay };
  obj.children = callback(closure_6, obj);
  return callback(closure_6, obj);
}
let c4 = importAllResult;
({ StyleSheet: c5, View: closure_6, Platform } = get_ActivityIndicator);
({ ACTION_SHEET_START_HEIGHT_RATIO: error, ACTION_SHEET_MAX_WIDTH: closure_8, ACTION_SHEET_SPRING_CONFIG: c9, ACTION_SHEET_SPRING_CONFIG_REDUCED_MOTION: c10, ACTION_SHEET_GRADIENT_BORDER_WIDTH: unpackModuleId, ACTION_SHEET_GRADIENT_BORDER_RADIUS: closure_12, ACTION_SHEET_BORDER_RADIUS: map1, ACTION_SHEET_INNER_BORDER_RADIUS: closure_14, ACTION_SHEET_MINIMUM_BOTTOM_PADDING: closure_15 } = ACTION_SHEET_START_HEIGHT_RATIO);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
let closure_18 = createCacheKey.createStyles((arg0) => {
  let num = arg1;
  if (arg1 === undefined) {
    num = 0;
  }
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let obj = { background: null, wrapper: null, wrapperWithBorder: null, content: null, gradient: null, handleIndicator: null, backgroundOverlay: null, header: null, body: null };
  obj = { overflow: "hidden", borderTopLeftRadius: closure_13, borderTopRightRadius: closure_13, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
  obj[0] = obj;
  obj[1] = { overflow: "hidden", flex: 1 };
  obj = { overflow: "hidden", marginTop: closure_11, marginHorizontal: closure_11, borderTopLeftRadius: closure_12, borderTopRightRadius: closure_12, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
  obj[2] = obj;
  let tmp4;
  if (arg0) {
    tmp4 = tmp;
  }
  obj1 = { borderTopLeftRadius: tmp4, borderTopRightRadius: null, overflow: null, marginBottom: null, flex: 1 };
  let tmp5;
  if (arg0) {
    tmp5 = tmp;
  }
  obj1[1] = tmp5;
  let str;
  if (arg0) {
    str = "hidden";
  }
  obj1[2] = str;
  let num2 = 0;
  if (!flag) {
    num2 = num + 4;
  }
  obj1[3] = num2;
  obj[3] = obj1;
  let obj4 = set;
  let str2;
  if (obj4.isIOS()) {
    str2 = "hidden";
  }
  obj[4] = { height: "100%", overflow: str2, borderTopLeftRadius: closure_14, borderTopRightRadius: closure_14 };
  obj[5] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG };
  obj4 = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj4.backgroundColor = ThemesDefault.colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT;
  obj[6] = obj4;
  obj[7] = { marginBottom: 16 };
  obj[8] = { flex: 1 };
  return obj;
});
let closure_19 = importAllResult.forwardRef((windowDimensions, ref) => {
  ({ startHeight, hasEverExpanded } = windowDimensions);
  const height = windowDimensions.windowDimensions.height;
  const onChange = windowDimensions.onChange;
  const onExpand = windowDimensions.onExpand;
  let maxDynamicContentSize = windowDimensions.maxDynamicContentSize;
  ({ wrapperStyle, scrollViewStyle, startExpanded, keyboardShouldPersistTaps, children } = windowDimensions);
  const merged = Object.assign(windowDimensions, Object.create(null));
  let isScreenReaderEnabled;
  startHeight = undefined;
  closure_4 = undefined;
  let obj = onChange(isScreenReaderEnabled[9]);
  isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  if (startHeight == null) {
    startHeight = height * closure_7;
  }
  obj1 = closure_4;
  if (!isScreenReaderEnabled) {
    if (!startExpanded) {
      let items = [startHeight];
    }
    const tmp9 = startHeight(tmp7(items), 2);
    closure_4 = tmp9[1];
    const items1 = [isScreenReaderEnabled];
    const effect = obj1.useEffect(() => {
      if (isScreenReaderEnabled) {
        callback([]);
      }
    }, items1);
    const items2 = [startHeight];
    const items3 = [onChange, onExpand];
    const callback = obj1.useCallback((nativeEvent) => {
      if (nativeEvent.nativeEvent.layout.height < startHeight) {
        callback([]);
      }
    }, items2);
    const callback1 = obj1.useCallback((arg0, arg1, arg2) => {
      if (onChange != null) {
        tmp(arg0, arg1, arg2);
      }
      if (0 === arg0) {
        if (onExpand != null) {
          tmp5();
        }
      }
    }, items3);
    obj = {};
    const merged1 = Object.assign(merged);
    obj.enableDynamicSizing = true;
    obj.snapPoints = tmp9[0];
    if (maxDynamicContentSize == null) {
      maxDynamicContentSize = height - tmp4(tmp3[11]).NAV_BAR_HEIGHT_MULTILINE - onExpand(isScreenReaderEnabled[8])().top;
    }
    obj.maxDynamicContentSize = maxDynamicContentSize;
    obj.ref = ref;
    obj.onChange = callback1;
    obj = { bounces: false, keyboardShouldPersistTaps: null, style: null, children: null };
    obj[1] = keyboardShouldPersistTaps;
    obj[2] = scrollViewStyle;
    obj1 = { onLayout: null, style: null, children: null };
    obj1[0] = callback;
    obj1[1] = wrapperStyle;
    obj1[2] = children;
    obj[3] = closure_16(closure_6, obj1);
    obj.children = closure_16(tmp4(tmp3[10]).BottomSheetScrollView, obj);
    return closure_16(onExpand(tmp3[10]), obj);
  }
  items = [];
});
let closure_20 = importAllResult.forwardRef((windowDimensions, ref) => {
  ({ startHeight, contentHeight, maxHeight, hasEverExpanded } = windowDimensions);
  const height = windowDimensions.windowDimensions.height;
  const onChange = windowDimensions.onChange;
  const onExpand = windowDimensions.onExpand;
  const borderGradient = windowDimensions.borderGradient;
  ({ wrapperStyle, children, extraContent } = windowDimensions);
  const merged = Object.assign(windowDimensions, Object.create(null));
  let isScreenReaderEnabled;
  startHeight = undefined;
  maxHeight = undefined;
  c6 = undefined;
  let obj = hasEverExpanded(onExpand[9]);
  isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  if (startHeight == null) {
    startHeight = height * closure_7;
  }
  if (maxHeight == null) {
    maxHeight = contentHeight;
  }
  if (maxHeight == null) {
    maxHeight = height - tmp5(tmp4[11]).NAV_BAR_HEIGHT_MULTILINE - onChange(onExpand[8])().top;
  }
  let items = [hasEverExpanded, isScreenReaderEnabled, maxHeight, startHeight];
  const memo = startHeight.useMemo(() => {
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
  const items2 = [wrapperStyle, { maxHeight }];
  const callback = startHeight.useCallback((arg0, arg1, arg2) => {
    if (onChange != null) {
      tmp(arg0, arg1, arg2);
    }
    if (arg0 === c6) {
      if (onExpand != null) {
        tmp5();
      }
    }
  }, items1);
  const tmp11 = callback(c6, { style: items2, children });
  obj = {};
  let tmp3Result = tmp3(tmp4[10]);
  const merged1 = Object.assign(merged);
  obj.ref = ref;
  obj.enableDynamicSizing = false;
  obj.contentHeight = contentHeight;
  obj.snapPoints = memo;
  obj.onChange = callback;
  let tmp10Result = tmp11;
  if (null != borderGradient) {
    obj = { style: null, start: null, end: null, colors: null, children: null };
    obj[0] = tmp2.gradient;
    tmp3Result = tmp3(tmp4[12]);
    obj[1] = tmp5(tmp4[13]).VerticalGradient.START;
    obj[2] = tmp5(tmp4[13]).VerticalGradient.END;
    obj[3] = borderGradient;
    obj[4] = tmp11;
    tmp10Result = callback(tmp3Result, obj);
  }
  const items3 = [tmp10Result, extraContent];
  obj.children = items3;
  return closure_17(tmp3Result, obj);
});
let closure_23 = { code: "function BottomSheetNativeTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get()<=-1;}" };
let closure_24 = { code: "function BottomSheetNativeTsx2(){const{animatedIsVisuallyClosed}=this.__closure;return animatedIsVisuallyClosed.get();}" };
let closure_25 = { code: "function BottomSheetNativeTsx3(isVisuallyClosed){const{transitionState,runOnJS,onLeave}=this.__closure;if(isVisuallyClosed&&transitionState==='exiting'){runOnJS(onLeave)();}}" };
const forwardRefResult = importAllResult.forwardRef((scrollable, ref) => {
  let flag = scrollable.scrollable;
  if (flag === undefined) {
    flag = false;
  }
  ({ startExpanded, startHeight, maxHeight, containerHeight } = scrollable);
  if (startExpanded === undefined) {
    startExpanded = false;
  }
  const backdropOpacity = scrollable.backdropOpacity;
  let width = backdropOpacity;
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
  let merged = Object.assign(scrollable, Object.create(null));
  let transitionState;
  let close;
  let onLeave;
  let registerDismissHandler;
  ref = undefined;
  closure_11 = undefined;
  closure_12 = undefined;
  closure_13 = undefined;
  let animatedIndex;
  let derivedValue;
  let obj = onExpand;
  const context = onExpand.useContext(backdropChildren(dismissAccessibilityLabel[15]));
  transitionState = context.transitionState;
  close = context.close;
  onLeave = context.onLeave;
  registerDismissHandler = context.registerDismissHandler;
  const rect = backdropChildren(dismissAccessibilityLabel[8])();
  const tmp5 = callback2(handleDisabled, Math.max(rect.bottom, derivedValue), flag);
  ref = onExpand.useRef(null);
  const tmp7 = footer(onExpand.useState(startExpanded), 2);
  closure_11 = tmp7[1];
  closure_12 = onExpand.useRef(false);
  closure_13 = onExpand.useRef(true);
  let items = [onDismiss, registerDismissHandler];
  const layoutEffect = obj.useLayoutEffect(() => {
    registerDismissHandler(onDismiss);
  }, items);
  let tmp8Result = tmp8(tmp3[17]);
  const bottomSheetImperativeHandle = tmp8Result.useBottomSheetImperativeHandle(ref, ref);
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
  tmp8Result = tmp8(tmp3[18]);
  const unmountEffect = tmp8Result.useUnmountEffect(() => {
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
    if (arg4 !== width(dismissAccessibilityLabel[10]).ANIMATION_SOURCE.KEYBOARD) {
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
  animatedIndex = merged.animatedIndex;
  const callback1 = obj.useCallback(() => {
    callback(true);
    if (onExpand != null) {
      onExpand();
    }
  }, items3);
  const tmp9 = onExpand.useContext(width(dismissAccessibilityLabel[16]).AccessibilityPreferencesContext).reducedMotion.enabled ? ref : registerDismissHandler;
  if (animatedIndex == null) {
    animatedIndex = tmp8Result1.useSharedValue(-1);
  }
  tmp8Result1 = width(dismissAccessibilityLabel[14]);
  function ue() {
    return animatedIndex.get() <= -1;
  }
  ue.__closure = { animatedIndex };
  ue.__workletHash = 4341912681188;
  ue.__initData = closure_23;
  derivedValue = width(dismissAccessibilityLabel[14]).useDerivedValue(ue);
  const tmp8Result2 = width(dismissAccessibilityLabel[14]);
  function _e() {
    return derivedValue.get();
  }
  _e.__closure = { animatedIsVisuallyClosed: derivedValue };
  _e.__workletHash = 6995719052506;
  _e.__initData = closure_24;
  function he(arg0) {
    let tmp = arg0;
    if (arg0) {
      tmp = "exiting" === transitionState;
    }
    if (tmp) {
      width(dismissAccessibilityLabel[14]).runOnJS(onLeave)();
      const obj = width(dismissAccessibilityLabel[14]);
    }
  }
  obj = { transitionState, runOnJS: tmp8(tmp3[14]).runOnJS, onLeave };
  he.__closure = obj;
  he.__workletHash = 77590951197;
  he.__initData = closure_25;
  const animatedReaction = width(dismissAccessibilityLabel[14]).useAnimatedReaction(_e, he);
  const items4 = [dismissAccessibilityLabel];
  const items5 = [backdropOpacity, backdropChildren];
  callback2 = obj.useCallback(() => closure_1_16(width(dismissAccessibilityLabel[19]).ActionSheetHeaderBar, {
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
    let obj = { style: items, children: null };
    items = [onDismiss.absoluteFill, animatedIndex.style];
    obj = { animatedIndex: animatedIndex.animatedIndex, opacity: width };
    const items1 = [closure_1_16(width(dismissAccessibilityLabel[20]).BottomSheetBackdrop, obj), backdropChildren];
    obj[1] = items1;
    return closure_1_17(transitionState, obj);
  }, items5);
  const callback4 = obj.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    let tmpResult = footer;
    if (footer == null) {
      tmpResult = tmp(width(dismissAccessibilityLabel[21]).NavScrim, {});
    }
    obj.children = tmpResult;
    return closure_1_16(width(dismissAccessibilityLabel[10]).BottomSheetFooter, obj);
  }, items6);
  const tmp21 = backdropChildren(dismissAccessibilityLabel[22])({ ignoreKeyboard: true });
  width = undefined;
  width = tmp21.width;
  const items7 = [width];
  const memo = obj.useMemo(() => ({ marginHorizontal: Math.max(width - onLeave, 0) / 2 }), items7);
  const tmp24 = backdropChildren(dismissAccessibilityLabel[23])();
  const backgroundComponent = merged.backgroundComponent;
  if (backgroundComponent != null) {
    obj = { ref: null, accessible: null, accessibilityRole: "none", accessibilityLabel: "", startHeight: null, contentHeight: null, maxHeight: null, containerHeight: null, startExpanded: null, hasEverExpanded: null, windowDimensions: null, wrapperStyle: null, onExpand: null, enablePanDownToClose: true, containerStyle: null, backgroundStyle: null, topInset: null, keyboardBehavior: null, keyboardBlurBehavior: "restore", keyboardShouldPersistTaps: null, animationConfigs: null, overrideReduceMotion: null, handleIndicatorStyle: null, handleComponent: null, backdropComponent: null, backgroundComponent: null, renderFooter: null, animatedIndex: null, onAnimate: null, onClose: null, borderGradient: null, extraContent: null, children: null };
    obj[0] = ref;
    const isIOSResult = tmp8(tmp3[7]).isIOS();
    obj[1] = !isIOSResult;
    obj[4] = startHeight;
    obj[5] = contentHeight;
    obj[6] = maxHeight;
    obj[7] = containerHeight;
    obj[8] = startExpanded;
    obj[9] = tmp7[0];
    obj[10] = tmp21;
    const items8 = [tmp5.wrapper, null != borderGradient && tmp5.wrapperWithBorder];
    obj[11] = items8;
    obj[12] = callback1;
    obj[14] = memo;
    const items9 = [tmp5.background, backgroundStyles];
    obj[15] = items9;
    obj[16] = rect.top;
    let str = "interactive";
    if (flag) {
      str = "extend";
    }
    obj[17] = str;
    obj[19] = keyboardShouldPersistTaps;
    obj[20] = tmp9;
    obj[21] = tmp8(tmp3[14]).ReduceMotion.Never;
    obj[22] = tmp5.handleIndicator;
    let tmp29 = null;
    if (!handleDisabled) {
      if (handleComponent == null) {
        handleComponent = callback2;
      }
      tmp29 = handleComponent;
    }
    obj[23] = tmp29;
    obj[24] = callback3;
    obj[25] = backgroundComponent;
    obj[26] = callback4;
    obj[27] = animatedIndex;
    obj[28] = callback;
    obj[29] = onLeave;
    obj[30] = borderGradient;
    obj[31] = extraContent;
    obj1 = { style: null, children: null };
    const items10 = [tmp5.content, contentStyles];
    obj1[0] = items10;
    let tmp26Result = null != header;
    if (tmp26Result) {
      const obj2 = { style: null, children: null };
      obj2[0] = tmp5.header;
      obj2[1] = header;
      tmp26Result = tmp26(tmp31, obj2);
    }
    const obj3 = { children: null };
    const items11 = [tmp26Result, ];
    const obj4 = { style: null, children: null };
    const items12 = [tmp5.body, bodyStyles];
    obj4[0] = items12;
    obj4[1] = children;
    items11[1] = closure_16(transitionState, obj4);
    obj1[1] = items11;
    obj3[0] = closure_17(transitionState, obj1);
    obj[32] = closure_16(tmp8(tmp3[24]).LayerScope, obj3);
    tmp26Result = tmp26(tmp23, obj);
    let tmp26Result1 = tmp26Result;
    if (showGradient) {
      let tmp35 = tmp24;
      if (tmp24 == null) {
        tmp35 = null;
      }
      const obj5 = { gradient: null, children: null };
      obj5[0] = tmp35;
      obj5[1] = tmp26Result;
      tmp26Result1 = tmp26(tmp8(tmp3[25]).ThemeContextProvider, obj5);
    }
    return tmp26Result1;
  }
});
const result = require("set").fileFinishedImporting("design/components/Sheet/native/BottomSheet.native.tsx");

export const BottomSheet = forwardRefResult;