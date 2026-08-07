// discord_app/modules/video_calls/native/components/FocusedControlsBottomControls.tsx
import _slicedToArray from "_slicedToArray";
import DismissibleContent from "DismissibleContent";
import get_ActivityIndicator from "ActionSheetHeaderBar";
import VoiceChatDrawerState from "VoiceChatDrawerState";
import BOX_MODE_ACTIONSHEET_WIDTH from "BOX_MODE_ACTIONSHEET_WIDTH";
import ME from "ME";
import jsxProd from "Directions";
import createCacheKey from "createCacheKey";
import importDefaultResult from "createTextStyle";
import { CallPTTButtonLooks } from "../../../../components_native/calls/CallPTTButton.tsx";
import { CONFIG_NEVER_ANIMATE_TIMING } from "../../../../design/animation/reanimated/timing/timing.tsx";
import { ReanimatedRexport } from "../../../reanimated/ReanimatedRexport.tsx";

let Fonts;
let StyleSheet;
let c10;
let c5;
let c9;
let closure_12;
let closure_14;
let closure_6;
let error;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function FocusedControlsExpanded(children) {
  const availableHeight = children.availableHeight;
  const positionY = children.positionY;
  let bottom;
  let first;
  let React;
  bottom = positionY(bottom[12])().bottom;
  const tmp2 = first(React.useState(false), 2);
  first = tmp2[0];
  React = tmp2[1];
  const items = [availableHeight, bottom, first];
  const callback = React.useCallback((nativeEvent) => {
    if (nativeEvent.nativeEvent.layout.height > availableHeight - bottom !== first) {
      callback(tmp);
    }
  }, items);
  let obj = availableHeight(bottom[13]);
  const fn = function _() {
    const bound = Math.min(-1 * positionY.get() / outer1_15, 1);
    const obj = { opacity: bound, pointerEvents: null };
    let str = "auto";
    if (0 === bound) {
      str = "none";
    }
    obj[1] = str;
    return obj;
  };
  obj = { positionY, EXPANDED_DRAWER_SHOW_POSITION: c15 };
  fn.__closure = obj;
  fn.__workletHash = 10567472250823;
  fn.__initData = closure_21;
  obj = { style: { height: availableHeight }, children: null };
  const obj1 = { scrollEnabled: first, children: null };
  const animatedStyle = obj.useAnimatedStyle(fn);
  const items1 = [createCacheKey().expandedControlsContainer, animatedStyle];
  obj1[1] = callback2(positionY(bottom[13]).View, { style: items1, onLayout: callback, children: children.expandedControls });
  obj[1] = callback2(closure_7, obj1);
  return callback2(closure_5, obj);
}
function FocusedControlsBottomDrawerTooltip(positionY) {
  positionY = positionY.positionY;
  const tmp = createCacheKey();
  let obj = positionY(10711);
  const canShowTooltip = obj.useCanShowTooltip(positionY(691).TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS, true);
  positionY(4162);
  const fn = function o() {
    return { opacity: 1 - Math.min(-1 * positionY.get() / outer1_15, 1) };
  };
  obj = { positionY, EXPANDED_DRAWER_SHOW_POSITION: c15 };
  fn.__closure = obj;
  fn.__workletHash = 4429631762525;
  fn.__initData = closure_23;
  let tmp7 = null;
  if (canShowTooltip) {
    obj = { style: null, children: null };
    obj[0] = tmp6;
    const obj1 = { style: null, arrowPosition: null, arrowDirection: null, arrowWidth: 8, arrowHeight: 4, containerStyle: null, labelStyle: null, label: null };
    obj1[0] = tmp.tooltipStyle;
    obj1[1] = tmp2(1297).TooltipArrowPositions.CENTER;
    obj1[2] = tmp2(1297).TooltipArrowDirections.DOWN;
    ({ containerStyle: obj4[5], labelStyle: obj4[6] } = tmp);
    const intl = tmp2(1236).intl;
    obj1[7] = intl.string(tmp2(1236).t.zYzy2i);
    obj[1] = callback2(tmp2(1297).Tooltip, obj1);
    tmp7 = callback2(ReanimatedRexport.View, obj);
  }
  return tmp7;
}
function FocusedControlsAboveActionBarView(positionY) {
  let isExpanded;
  let onPressHeader;
  positionY = positionY.positionY;
  const offsetY = positionY.offsetY;
  const aboveActionBar = positionY.aboveActionBar;
  ({ onPressHeader, isExpanded } = positionY);
  const tmp = createCacheKey();
  let obj = positionY(4162);
  const fn = function _() {
    return { opacity: 2 - Math.max(Math.abs(positionY.get()) / (offsetY / 3 - outer1_15), 0) };
  };
  obj = { offsetY, EXPANDED_DRAWER_SHOW_POSITION: c15, positionY };
  fn.__closure = obj;
  fn.__workletHash = 5042367101380;
  fn.__initData = closure_25;
  obj = { accessible: true, onPress: onPressHeader, accessibilityRole: "button", accessibilityLabel: "Group DM", accessibilityHint: "Press to start a new conversation", accessibilityState: { expanded: isExpanded }, children: null };
  const obj1 = { style: tmp.aboveActionBarContainer, children: null };
  const animatedStyle = obj.useAnimatedStyle(fn);
  const items = [callback2(FocusedControlsBottomDrawerTooltip, { positionY }), callback2(positionY(5652).ActionSheetHeaderBar, {}), ];
  let tmp4Result = null != aboveActionBar;
  if (tmp4Result) {
    const obj2 = { style: null, children: null };
    const items1 = [tmp.aboveActionBarChildrenContainer, animatedStyle];
    obj2[0] = items1;
    obj2[1] = aboveActionBar;
    tmp4Result = tmp4(offsetY(4162).View, obj2);
  }
  items[2] = tmp4Result;
  obj1[1] = items;
  obj[6] = closure_14(closure_5, obj1);
  return callback2(closure_6, obj);
}
class FocusedControlsBottomDrawer {
  constructor(arg0) {
    ({ actionBarControlsHeight, reveal } = global);
    onDrawerClose = global.onDrawerClose;
    right = undefined;
    c3 = undefined;
    onClose = undefined;
    onDrawerOpen = undefined;
    bottom = undefined;
    isIOS = undefined;
    Math = undefined;
    c9 = undefined;
    ({ children, expandedControls, aboveActionBar, onDrawerOpen } = global);
    tmp = EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y();
    tmp2 = onDrawerClose;
    tmp3 = right;
    tmp4 = require("useSafeAreaInsets")();
    ({ bottom, right } = tmp4);
    top = tmp4.top;
    size = require("useWindowDimensions")();
    height = size.height;
    tmp5 = size.width > height;
    c3 = tmp5;
    tmp6 = require("useBottomVoiceControlsSheetWidth")();
    onClose = tmp6;
    bound = height;
    if (tmp5) {
      tmp8 = globalThis;
      _Math = Math;
      tmp9 = c11;
      bound = Math.min(c11, height);
    }
    onDrawerOpen = bound;
    sum = actionBarControlsHeight;
    if (!tmp5) {
      sum = actionBarControlsHeight + bottom;
    }
    bottom = sum;
    diff = bound - sum;
    isIOS = diff;
    diff1 = bound - sum;
    if (tmp5) {
      tmp17 = EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y;
      if (typeof EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y !== "function") {
        str2 = "Trying to call a non-function";
        throwTypeErrorResult = HermesBuiltin.throwTypeError();
      }
      num3 = 54;
      num4 = 12;
      diff2 = diff1 - (top + 54 + 12);
    } else {
      tmp13 = EXTENDED_CONTROLS_OFFSET_Y;
      if (typeof EXTENDED_CONTROLS_OFFSET_Y !== "function") {
        str = "Trying to call a non-function";
        throwTypeErrorResult1 = HermesBuiltin.throwTypeError();
      }
      num = 54;
      tmp15 = reveal;
      sum1 = top + 54;
      obj = require("set");
      num2 = 16;
      if (obj.isIOS()) {
        num2 = 48;
      }
      diff2 = diff1 - (sum1 + num2);
    }
    if (typeof EXTENDED_CONTROLS_OFFSET_Y !== "function") {
      str3 = "Trying to call a non-function";
      throwTypeErrorResult2 = HermesBuiltin.throwTypeError();
    }
    tmp19 = reveal;
    sum2 = top + 54;
    obj2 = require("set");
    num5 = 16;
    if (obj2.isIOS()) {
      num5 = 48;
    }
    sum3 = sum2 + num5 + bottom;
    if (typeof EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y !== "function") {
      str4 = "Trying to call a non-function";
      throwTypeErrorResult3 = HermesBuiltin.throwTypeError();
    }
    sum4 = top + 54 + 12;
    reveal = diff;
    onDrawerClose = tmp5;
    right = sum3;
    c3 = sum4;
    onClose = function onClose() {
      let tmp;
      if (onDrawerClose != null) {
        tmp = onDrawerClose();
      }
      return tmp;
    };
    bottom = undefined;
    isIOS = undefined;
    Math = undefined;
    c9 = undefined;
    height = undefined;
    c11 = undefined;
    c12 = undefined;
    f108238 = undefined;
    handleOpen = function handleOpen() {
      if (!first) {
        if (onDrawerOpen != null) {
          tmp();
        }
        callback(true);
      }
    };
    handleClose = function handleClose() {
      if (first) {
        if (onDrawerClose != null) {
          tmp();
        }
        callback(false);
        callback();
      }
    };
    tmp22 = c3(onClose.useState(false), 2);
    first = tmp22[0];
    bottom = first;
    isIOS = tmp22[1];
    tmp19Result = require("module_4162");
    sharedValue = require("_slicedToArray");
    Math = sharedValue;
    tmp19Result1 = require("module_4162");
    class O {
      constructor() {
        tmp = reveal;
        if (onDrawerClose) {
          tmp4 = c3;
          diff = tmp - c3;
        } else {
          tmp2 = right;
          diff = tmp - right;
        }
        return diff;
      }
    }
    O.__closure = { isLandscapeMode: tmp5, controlMaxHeight: diff, landscapeOffsetY: sum4, portraitOffsetY: sum3 };
    O.__workletHash = 13346503100323;
    O.__initData = EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y;
    derivedValue = tmp19Result1.useDerivedValue(O);
    c9 = derivedValue;
    tmp19Result2 = require("module_4162");
    sharedValue1 = require("_slicedToArray");
    height = sharedValue1;
    tmp19Result3 = require("module_4162");
    sharedValue2 = tmp19Result3.useSharedValue(false);
    c11 = sharedValue2;
    tmp19Result4 = require("module_4162");
    sharedValue3 = require("_slicedToArray");
    c12 = sharedValue3;
    callback = onClose.useCallback(() => {
      const result = reveal(sum3[18]).UNSAFE_markDismissibleContentAsDismissed(reveal(sum3[19]).DismissibleContent.SOUNDBOARD_MOBILE_NEW_BADGE);
    }, []);
    f108238 = callback;
    items = [, , ];
    items[0] = sharedValue;
    items[1] = derivedValue;
    items[2] = callback;
    callback1 = onClose.useCallback(() => {
      let num = 0;
      const tmp = 0 !== first1.get();
      if (!tmp) {
        num = -derivedValue.get();
      }
      const result = first1.set(CONFIG_NEVER_ANIMATE_TIMING.withTiming(num, obj3));
      if (tmp) {
        outer2_9();
        callback();
      } else {
        outer2_8();
      }
      callback(!tmp);
    }, items);
    Gesture = require("Directions").Gesture;
    PanResult = Gesture.Pan();
    class M {
      constructor() {
        obj = require("module_4162");
        tmp = obj.runOnJS(clearFocusTimer)();
        obj2 = c11;
        result = c11.set(0 !== Math.get());
        result1 = require("_slicedToArray");
        tmp4 = null != Math.get() && obj2.get();
        if (!tmp4) {
          tmp5 = height;
          result2 = require("_slicedToArray");
        }
        return;
      }
    }
    obj = { runOnJS: require("module_4162").runOnJS, clearFocusTimer: Math, drawerOpen: sharedValue2, positionY: sharedValue, CLOSE_DRAWER_POSITION: 0, velocity: sharedValue3, startY: sharedValue1 };
    M.__closure = obj;
    M.__workletHash = 9674965708496;
    M.__initData = EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y;
    onStartResult = PanResult.onStart(M);
    class N {
      constructor(arg0) {
        result = c12.set(global.velocityY);
        obj = Math;
        result1 = -1 * Math.get();
        if (result1 <= c9.get() + 16) {
          tmp3 = height;
          num = height.get();
          tmp4 = null;
          if (num == null) {
            num = 0;
          }
          result2 = obj.set(num + global.translationY);
        }
        return;
      }
    }
    N.__closure = { velocity: sharedValue3, positionY: sharedValue, maxHeight: derivedValue, startY: sharedValue1 };
    N.__workletHash = 16755118181071;
    N.__initData = EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y;
    onUpdateResult = onStartResult.onUpdate(N);
    class H {
      constructor() {
        obj = c11;
        value = c11.get();
        obj2 = Math;
        result = -1 * Math.get();
        result1 = c9.get() / 2;
        obj3 = c12;
        num = c12.get();
        if (num == null) {
          num = 0;
        }
        result2 = -1 * num;
        num2 = obj3.get();
        if (num2 == null) {
          num2 = 0;
        }
        openDrawer = function openDrawer() {
          reveal(sum3[13]).runOnJS(closure_14)();
          const result = store.set(-closure_9.get());
          const obj = reveal(sum3[13]);
          const result1 = closure_8.set(reveal(sum3[20]).withTiming(store.get(), outer2_19));
          const result2 = closure_11.set(true);
          const obj2 = reveal(sum3[20]);
          const obj3 = reveal(sum3[13]);
          reveal(sum3[13]).runOnJS(onDrawerClose(sum3[22]).acknowledgeTooltip)(reveal(sum3[15]).TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS);
        };
        tmp5 = num2 >= 500;
        if (500 > result2) {
          if (result1 <= result) {
            return;
          }
          if (!tmp6) {
            if (tmp5) {
            }
            if (result1 <= result) {
              openDrawerResult = openDrawer();
            } else {
              tmp24 = height;
              result3 = require("_slicedToArray");
              tmp26 = closure_0;
              tmp27 = closure_2;
              obj7 = require("CONFIG_NEVER_ANIMATE_TIMING");
              tmp28 = EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y;
              result4 = obj2.set(require("_slicedToArray"));
              flag2 = false;
              result5 = obj.set(false);
              tmp31 = closure_0;
              tmp32 = closure_2;
              obj8 = require("module_4162");
              tmp33 = resetFocusTimer;
              tmp34 = obj8.runOnJS(resetFocusTimer)();
              tmp35 = closure_0;
              tmp36 = closure_2;
              obj9 = require("module_4162");
              tmp37 = handleClose;
              tmp38 = obj9.runOnJS(handleClose)();
            }
          }
          tmp9 = height;
          result6 = require("_slicedToArray");
          tmp11 = closure_0;
          tmp12 = closure_2;
          obj4 = require("CONFIG_NEVER_ANIMATE_TIMING");
          tmp13 = EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y;
          result7 = obj2.set(require("_slicedToArray"));
          flag = false;
          result8 = obj.set(false);
          tmp16 = closure_0;
          tmp17 = closure_2;
          obj5 = require("module_4162");
          tmp18 = resetFocusTimer;
          tmp19 = obj5.runOnJS(resetFocusTimer)();
          tmp20 = closure_0;
          tmp21 = closure_2;
          obj6 = require("module_4162");
          tmp22 = handleClose;
          tmp23 = obj6.runOnJS(handleClose)();
        }
        openDrawerResult1 = openDrawer();
        return;
      }
    }
    obj1 = { drawerOpen: sharedValue2, positionY: sharedValue, maxHeight: derivedValue, velocity: sharedValue3, MIN_GESTURE_TRIGGER_VELOCITY: 500, CLOSE_DRAWER_POSITION: 0, runOnJS: require("module_4162").runOnJS, handleOpen, startY: sharedValue1, withTiming: require("CONFIG_NEVER_ANIMATE_TIMING").withTiming, TIMING_CONFIG: EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y, TooltipActionCreators: require("dispatcher"), TooltipNames: require("keys").TooltipNames, TIMING_CONFIG_EXIT: EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y, resetFocusTimer: c9, handleClose };
    H.__closure = obj1;
    H.__workletHash = 6790759206787;
    H.__initData = EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y;
    items1 = [, , , ];
    items1[0] = sharedValue;
    items1[1] = onUpdateResult.onEnd(H);
    items1[2] = callback1;
    items1[3] = first;
    tmp31 = c3(items1, 4);
    first1 = tmp31[0];
    Math = first1;
    tmp33 = tmp31[2];
    c9 = tmp33;
    tmp19Result5 = require("module_4162");
    fn = function f() {
      let num = 0;
      if (!reveal) {
        num = first;
      }
      let obj = { position: "absolute", height: onDrawerOpen, overflow: "hidden", bottom: null, right: null, borderRadius: null, width: null, transform: null };
      let num2 = 0;
      if (sum4) {
        num2 = 16;
      }
      obj[3] = num2;
      let num3 = 0;
      if (sum4) {
        num3 = 16 + sum3;
      }
      obj[4] = num3;
      let num5 = 0;
      if (sum4) {
        num5 = 8;
      }
      obj[5] = num5;
      obj[6] = onClose;
      obj = { translateY: null };
      obj[0] = reveal(sum3[20]).withTiming(num, outer1_19);
      const items = [obj];
      obj[7] = items;
      return obj;
    };
    obj2 = { reveal, controlHeightWithOffset: sum, sheetHeight: bound, isLandscapeMode: tmp5, safeAreaRight: right, sheetWidth: tmp6, withTiming: require("CONFIG_NEVER_ANIMATE_TIMING").withTiming, TIMING_CONFIG: EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y };
    fn.__closure = obj2;
    fn.__workletHash = 608185354082;
    fn.__initData = EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y;
    items2 = [, ];
    items2[0] = tmp5;
    items2[1] = first1;
    animatedStyle = tmp19Result5.useAnimatedStyle(fn);
    effect = onClose.useEffect(() => {
      const result = first1.set(reveal(sum3[20]).withTiming(0, outer1_20));
    }, items2);
    items3 = [, ];
    items3[0] = reveal;
    items3[1] = first1;
    effect1 = onClose.useEffect(() => {
      if (reveal) {
        const result = first1.set(0);
      }
    }, items3);
    items4 = [];
    items4[0] = first1;
    effect2 = onClose.useEffect(() => {
      function handleSelectActivity(arg0) {
        const result = closure_8.set(handleSelectActivity(outer1_2[20]).withTiming(0, outer1_20));
      }
      let ComponentDispatch = reveal(sum3[25]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(sharedValue3.SELECT_ACTIVITY, handleSelectActivity);
      return () => {
        const ComponentDispatch = reveal(sum3[25]).ComponentDispatch;
        ComponentDispatch.unsubscribe(sharedValue3.SELECT_ACTIVITY, handleSelectActivity);
      };
    }, items4);
    tmp19Result6 = require("module_4162");
    class Z {
      constructor() {
        obj = { height: onDrawerOpen, transform: null };
        obj = { translateY: isIOS + Math.get() };
        items = [];
        items[0] = obj;
        obj[1] = items;
        return obj;
      }
    }
    Z.__closure = { sheetHeight: bound, offsetY: diff, positionY: first1 };
    Z.__workletHash = 4471821639301;
    Z.__initData = EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y;
    items5 = [];
    items5[0] = tmp33;
    animatedStyle1 = tmp19Result6.useAnimatedStyle(Z);
    effect3 = onClose.useEffect(() => {
      let ComponentDispatch = reveal(sum3[25]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(sharedValue3.TOGGLE_CALL_CONTROL_DRAWER, derivedValue);
      return () => {
        const ComponentDispatch = outer1_0(outer1_2[25]).ComponentDispatch;
        ComponentDispatch.unsubscribe(outer1_12.TOGGLE_CALL_CONTROL_DRAWER, closure_9);
      };
    }, items5);
    tmp19Result7 = require("ManaContext");
    theme = tmp19Result7.useThemeContext().theme;
    tmp40 = f108238;
    obj3 = { style: animatedStyle, pointerEvents: "box-none", children: null };
    obj4 = { gesture: tmp31[1], children: null };
    tmp41 = handleOpen;
    obj5 = { style: items6, children: null };
    items6 = [, ];
    items6[0] = tmp.bottomDrawerContainer;
    items6[1] = animatedStyle1;
    obj6 = { blurTheme: theme, style: null };
    items7 = [, ];
    items7[0] = tmp.visualEffectView;
    tmp2Result = require("isBlurDisabled");
    tmp19Result8 = require("AccessibilityAnnouncer");
    prop = null;
    if (tmp19Result8.isThemeLight(theme)) {
      prop = tmp.visualEffectViewBackground;
    }
    items7[1] = prop;
    obj6[1] = items7;
    items8 = [, , , ];
    items8[0] = tmp40(tmp2Result, obj6);
    items8[1] = tmp40(FocusedControlsAboveActionBarView, { onPressHeader: tmp33, aboveActionBar, positionY: first1, offsetY: diff, isExpanded: tmp31[3] });
    items8[2] = children;
    items8[3] = tmp40(FocusedControlsExpanded, { expandedControls, availableHeight: diff2, positionY: first1 });
    obj5[1] = items8;
    obj4[1] = tmp41(require("module_4162").View, obj5);
    obj3[2] = tmp40(require("Directions").GestureDetector, obj4);
    return tmp40(require("module_4162").View, obj3);
  }
}
({ View: c5, TouchableWithoutFeedback: closure_6, ScrollView: error, StyleSheet } = get_ActivityIndicator);
({ clearFocusTimer: metroImportAll, resetFocusTimer: c9 } = VoiceChatDrawerState);
({ BOX_MODE_THRESHOLD_WIDTH: c10, BOX_MODE_ACTIONSHEET_HEIGHT: unpackModuleId } = BOX_MODE_ACTIONSHEET_WIDTH);
({ ComponentActions: closure_12, Fonts } = ME);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let c15 = 20;
function EXTENDED_CONTROLS_OFFSET_Y(arg0) {

}
function EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y(arg0) {

}
createCacheKey = { bottomDrawerContainer: null, visualEffectView: null, visualEffectViewBackground: null, expandedControlsContainer: null, aboveActionBarContainer: null, aboveActionBarChildrenContainer: null, ptbButton: null, tooltipStyle: null, containerStyle: null, labelStyle: null };
createCacheKey = { position: "absolute", left: 0, right: 0, bottom: 0, borderRadius: require("Themes").radii.sm };
createCacheKey[0] = createCacheKey;
let obj1 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj1.borderRadius = require("Themes").radii.sm;
obj1.overflow = "hidden";
createCacheKey[1] = obj1;
createCacheKey[2] = { backgroundColor: "rgba(0, 0, 0, .15)" };
createCacheKey[3] = { marginHorizontal: 16 };
createCacheKey[4] = { position: "absolute", left: 0, right: 0, top: -32, paddingTop: 4, paddingBottom: 8 };
createCacheKey[5] = { position: "absolute", left: 16, right: 16, top: -64 };
createCacheKey[6] = { margin: 0, marginHorizontal: 16, marginBottom: 8 };
createCacheKey[7] = { alignSelf: "center", position: "absolute", top: -28 };
createCacheKey[8] = { paddingHorizontal: 8, paddingVertical: 4 };
const merged1 = Object.assign(require("createTextStyle")(Fonts.DISPLAY_EXTRABOLD, require("Themes").unsafe_rawColors.WHITE, 12, { uppercase: true }));
createCacheKey[9] = {};
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { easing: require("Button").STANDARD_EASING, duration: 250 };
let obj4 = { easing: require("Button").STANDARD_EASING, duration: 400 };
let closure_21 = { code: "function FocusedControlsBottomControlsTsx1(){const{positionY,EXPANDED_DRAWER_SHOW_POSITION}=this.__closure;const opacity=Math.min(positionY.get()*-1/EXPANDED_DRAWER_SHOW_POSITION,1);return{opacity:opacity,pointerEvents:opacity===0?'none':'auto'};}" };
let closure_23 = { code: "function FocusedControlsBottomControlsTsx2(){const{positionY,EXPANDED_DRAWER_SHOW_POSITION}=this.__closure;return{opacity:1-Math.min(positionY.get()*-1/EXPANDED_DRAWER_SHOW_POSITION,1)};}" };
let closure_25 = { code: "function FocusedControlsBottomControlsTsx3(){const{offsetY,EXPANDED_DRAWER_SHOW_POSITION,positionY}=this.__closure;const maxHeightRange=offsetY/3-EXPANDED_DRAWER_SHOW_POSITION;const opacity=2-Math.max(Math.abs(positionY.get())/maxHeightRange,0);return{opacity:opacity};}" };
let closure_27 = { code: "function FocusedControlsBottomControlsTsx4(){const{isLandscapeMode,controlMaxHeight,landscapeOffsetY,portraitOffsetY}=this.__closure;return isLandscapeMode?controlMaxHeight-landscapeOffsetY:controlMaxHeight-portraitOffsetY;}" };
let closure_28 = { code: "function FocusedControlsBottomControlsTsx5(){const{drawerOpen,positionY,maxHeight,velocity,MIN_GESTURE_TRIGGER_VELOCITY,CLOSE_DRAWER_POSITION,runOnJS,handleOpen,startY,withTiming,TIMING_CONFIG,TooltipActionCreators,TooltipNames,TIMING_CONFIG_EXIT,resetFocusTimer,handleClose}=this.__closure;var _velocity$get,_velocity$get2;const isDrawerAlreadyOpen=drawerOpen.get();const isPassedTriggerThreshold=positionY.get()*-1>=maxHeight.get()/2;const isHighOpenVelocity=((_velocity$get=velocity.get())!==null&&_velocity$get!==void 0?_velocity$get:0)*-1>=MIN_GESTURE_TRIGGER_VELOCITY;const isHighCloseVelocity=((_velocity$get2=velocity.get())!==null&&_velocity$get2!==void 0?_velocity$get2:0)>=MIN_GESTURE_TRIGGER_VELOCITY;const isLowerThanMinHeight=positionY.get()>CLOSE_DRAWER_POSITION;function openDrawer(){runOnJS(handleOpen)();startY.set(-maxHeight.get());positionY.set(withTiming(startY.get(),TIMING_CONFIG));drawerOpen.set(true);runOnJS(TooltipActionCreators.acknowledgeTooltip)(TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS);}function closeDrawer(){startY.set(0);positionY.set(withTiming(CLOSE_DRAWER_POSITION,TIMING_CONFIG_EXIT));drawerOpen.set(false);runOnJS(resetFocusTimer)();runOnJS(handleClose)();}if(isHighOpenVelocity&&!isDrawerAlreadyOpen||isPassedTriggerThreshold&&!isDrawerAlreadyOpen){openDrawer();}else if(isLowerThanMinHeight||isHighCloseVelocity&&isDrawerAlreadyOpen){closeDrawer();}else if(isPassedTriggerThreshold){openDrawer();}else{closeDrawer();}}" };
let closure_29 = { code: "function FocusedControlsBottomControlsTsx6(event){const{velocity,positionY,maxHeight,startY}=this.__closure;var _startY$get;velocity.set(event.velocityY);if(positionY.get()*-1>maxHeight.get()+16){return;}positionY.set(((_startY$get=startY.get())!==null&&_startY$get!==void 0?_startY$get:0)+event.translationY);}" };
let closure_30 = { code: "function FocusedControlsBottomControlsTsx7(){const{runOnJS,clearFocusTimer,drawerOpen,positionY,CLOSE_DRAWER_POSITION,velocity,startY}=this.__closure;runOnJS(clearFocusTimer)();drawerOpen.set(positionY.get()!==CLOSE_DRAWER_POSITION);velocity.set(0);if(positionY.get()==null||!drawerOpen.get()){startY.set(0);}}" };
let closure_31 = { code: "function FocusedControlsBottomControlsTsx8(){const{reveal,controlHeightWithOffset,sheetHeight,isLandscapeMode,safeAreaRight,sheetWidth,withTiming,TIMING_CONFIG}=this.__closure;const revealOffset=reveal?0:controlHeightWithOffset;return{position:'absolute',height:sheetHeight,overflow:'hidden',bottom:isLandscapeMode?16:0,right:isLandscapeMode?16+safeAreaRight:0,borderRadius:isLandscapeMode?8:0,width:sheetWidth,transform:[{translateY:withTiming(revealOffset,TIMING_CONFIG)}]};}" };
let closure_32 = { code: "function FocusedControlsBottomControlsTsx9(){const{sheetHeight,offsetY,positionY}=this.__closure;return{height:sheetHeight,transform:[{translateY:offsetY+positionY.get()}]};}" };
let obj2 = {};
let result = require("get ActivityIndicator").fileFinishedImporting("modules/video_calls/native/components/FocusedControlsBottomControls.tsx");

export default function FocusedControlsBottomControls(omitPTT) {
  let actionBar;
  let c0;
  let children;
  let expandedControls;
  let header;
  let onDrawerClose;
  let reveal;
  let tmp3;
  let flag = omitPTT.omitPTT;
  ({ children, actionBar, expandedControls, reveal, header, onDrawerClose } = omitPTT);
  if (flag === undefined) {
    flag = false;
  }
  let _require;
  const tmp = createCacheKey();
  [tmp3, c0] = callback(React.useState(0), 2);
  let obj = { aboveActionBar: children, actionBarControlsHeight: tmp3, expandedControls, reveal, onDrawerClose, onDrawerOpen: omitPTT.onDrawerOpen, children: null };
  obj = {
    onLayout: React.useCallback((nativeEvent) => {
      _undefined(nativeEvent.nativeEvent.layout.height);
    }, []),
    children: null
  };
  const items = [header, actionBar, ];
  let tmp4Result = null;
  if (!flag) {
    obj = { look: null, style: null, sendCallback: null, stopCallback: null };
    obj[0] = _CallPTTButtonLooks.CallPTTButtonLooks.BLUR;
    obj[1] = tmp.ptbButton;
    obj[2] = closure_8;
    obj[3] = closure_9;
    tmp4Result = tmp4(CallPTTButtonLooks, obj);
    const tmp11 = CallPTTButtonLooks;
  }
  items[2] = tmp4Result;
  obj[1] = items;
  obj[6] = closure_14(closure_5, obj);
  return closure_13(FocusedControlsBottomDrawer, obj);
};
export const FOCUSED_CONTROLS_HEADER_HEIGHT = 54;
export { FocusedControlsBottomDrawer };