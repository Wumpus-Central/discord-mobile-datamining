// === Module 9775: FocusedControlsBottomControls ===

// Module 9775 (FocusedControlsBottomControls)
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4492 */;
import timing from "timing" /* 4757 */;
import TooltipActionCreatorsDefault from "TooltipActionCreators" /* 9778 */;
import CallPTTButton from "CallPTTButton" /* 9779 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import TextStyles from "TextStyles" /* 5736 */;

const ReanimatedRexportDefault = ReanimatedRexport;
const CallPTTButtonDefault = CallPTTButton;

require = fn;
function FocusedControlsExpanded(availableHeight) {
  availableHeight = availableHeight.availableHeight;
  const positionY = availableHeight.positionY;
  let bottom;
  let scrollEnabled;
  noop = undefined;
  bottom = positionY(bottom[12])().bottom;
  const tmp2 = scrollEnabled(noop.useState(false), 2);
  scrollEnabled = tmp2[0];
  noop = tmp2[1];
  const items = [availableHeight, bottom, scrollEnabled];
  const callback = noop.useCallback((nativeEvent) => {
    if (nativeEvent.nativeEvent.layout.height > availableHeight - bottom !== first) {
      closure_4(tmp);
    }
  }, items);
  const tmp = closure_18();
  const fn = function _() {
    const bound = Math.min(-1 * positionY.get() / c15, 1);
    const obj = { opacity: bound, pointerEvents: null };
    let str = "auto";
    if (0 === bound) {
      str = "none";
    }
    obj.pointerEvents = str;
    return obj;
  };
  fn.__closure = { positionY, EXPANDED_DRAWER_SHOW_POSITION };
  fn.__workletHash = 10567472250823;
  fn.__initData = __initData;
  const obj3 = { style: { height: availableHeight }, children: null };
  const obj4 = { scrollEnabled, children: null };
  const animatedStyle = availableHeight(bottom[13]).useAnimatedStyle(fn);
  obj5 = { style: null, onLayout: callback, children: availableHeight.expandedControls };
  const items1 = [tmp.expandedControlsContainer, animatedStyle];
  obj5.style = items1;
  obj4.children = closure_13(positionY(bottom[13]).View, obj5);
  obj3.children = closure_13(closure_7, obj4);
  return closure_13(closure_5, obj3);
}
function FocusedControlsBottomDrawerTooltip(positionY) {
  positionY = positionY.positionY;
  const tmp = closure_18();
  const canShowTooltip = positionY(9776).useCanShowTooltip(positionY(1094).TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS, true);
  positionY(4492);
  const fn = function o() {
    return { opacity: 1 - Math.min(-1 * positionY.get() / c15, 1) };
  };
  fn.__closure = { positionY, EXPANDED_DRAWER_SHOW_POSITION };
  fn.__workletHash = 4429631762525;
  fn.__initData = __initData2;
  let tmp7 = null;
  if (canShowTooltip) {
    const obj3 = { style: tmp6, children: null };
    const obj7 = { style: tmp.tooltipStyle, arrowPosition: tmp2(1177).TooltipArrowPositions.CENTER, arrowDirection: tmp2(1177).TooltipArrowDirections.DOWN, arrowWidth: 8, arrowHeight: 4, containerStyle: null, labelStyle: null, label: null };
    ({ containerStyle: obj4.containerStyle, labelStyle: obj4.labelStyle } = tmp);
    const intl = tmp2(1115).intl;
    obj7.label = intl.string(tmp2(1115).t.zYzy2i);
    obj3.children = closure_13(tmp2(1177).Tooltip, obj7);
    tmp7 = closure_13(ReanimatedRexportDefault.View, obj3);
  }
  return tmp7;
}
function FocusedControlsAboveActionBarView(positionY) {
  positionY = positionY.positionY;
  const offsetY = positionY.offsetY;
  const aboveActionBar = positionY.aboveActionBar;
  ({ onPressHeader, isExpanded } = positionY);
  const tmp = closure_18();
  const fn = function _() {
    return { opacity: 2 - Math.max(Math.abs(positionY.get()) / (offsetY / 3 - c15), 0) };
  };
  fn.__closure = { offsetY, EXPANDED_DRAWER_SHOW_POSITION, positionY };
  fn.__workletHash = 5042367101380;
  fn.__initData = __initData3;
  const obj3 = { accessible: true, onPress: onPressHeader, accessibilityRole: "button", accessibilityLabel: "Group DM", accessibilityHint: "Press to start a new conversation", accessibilityState: { expanded: isExpanded }, children: null };
  const obj4 = { style: tmp.aboveActionBarContainer, children: null };
  const animatedStyle = positionY(4492).useAnimatedStyle(fn);
  const items = [closure_13(FocusedControlsBottomDrawerTooltip, { positionY }), closure_13(positionY(7394).ActionSheetHeaderBar, {}), ];
  let tmp4Result = null != aboveActionBar;
  if (tmp4Result) {
    obj5 = { style: null, children: null };
    const items1 = [tmp.aboveActionBarChildrenContainer, animatedStyle];
    obj5.style = items1;
    obj5.children = aboveActionBar;
    tmp4Result = closure_13(offsetY(4492).View, obj5);
  }
  items[2] = tmp4Result;
  obj4.children = items;
  obj3.children = closure_14(closure_5, obj4);
  return closure_13(closure_6, obj3);
}
class FocusedControlsBottomDrawer {
  constructor(arg0) {
    ({ actionBarControlsHeight, reveal } = global);
    closure_0 = reveal;
    closure_1 = global.onDrawerClose;
    closure_2 = undefined;
    closure_3 = undefined;
    onClose = undefined;
    onDrawerOpen = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    closure_9 = undefined;
    ({ children, expandedControls, aboveActionBar, onDrawerOpen } = global);
    tmp = closure_18();
    tmp2 = closure_1;
    tmp3 = closure_2;
    tmp4 = closure_1(closure_2[12])();
    ({ bottom, right } = tmp4);
    closure_2 = right;
    top = tmp4.top;
    size = closure_1(closure_2[21])();
    height = size.height;
    tmp5 = size.width > closure_10;
    closure_3 = tmp5;
    tmp6 = closure_1(closure_2[22])();
    onClose = tmp6;
    bound = height;
    if (tmp5) {
      tmp8 = globalThis;
      _Math = Math;
      tmp9 = closure_11;
      bound = Math.min(closure_11, height);
    }
    onDrawerOpen = bound;
    sum = actionBarControlsHeight;
    if (!tmp5) {
      sum = actionBarControlsHeight + bottom;
    }
    closure_6 = sum;
    diff = bound - sum;
    closure_7 = diff;
    diff1 = bound - sum;
    if (tmp5) {
      tmp17 = EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y;
      if (typeof EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y === "function") {
        num3 = 54;
        num4 = 12;
        diff2 = diff1 - (top + 54 + 12);
      } else {
        str2 = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      tmp13 = EXTENDED_CONTROLS_OFFSET_Y;
      if (typeof EXTENDED_CONTROLS_OFFSET_Y === "function") {
        num = 54;
        tmp15 = closure_0;
        sum1 = top + 54;
        obj = closure_0(tmp3[7]);
        num2 = 16;
        if (obj.isIOS()) {
          num2 = 48;
        }
        diff2 = diff1 - (sum1 + num2);
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
    if (typeof EXTENDED_CONTROLS_OFFSET_Y === "function") {
      num5 = 54;
      tmp19 = closure_0;
      sum2 = top + 54;
      obj2 = closure_0(tmp3[7]);
      num6 = 16;
      if (obj2.isIOS()) {
        num6 = 48;
      }
      sum3 = sum2 + num6 + bottom;
      tmp21 = EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y;
      if (typeof EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y === "function") {
        num7 = 12;
        sum4 = top + 54 + 12;
        closure_0 = diff;
        closure_1 = tmp5;
        closure_2 = sum3;
        closure_3 = sum4;
        onClose = function onClose() {
          let tmp;
          if (closure_1 != null) {
            tmp = closure_1();
          }
          return tmp;
        };
        closure_6 = undefined;
        closure_7 = undefined;
        closure_8 = undefined;
        closure_9 = undefined;
        closure_10 = undefined;
        closure_11 = undefined;
        closure_12 = undefined;
        handleOpen = function handleOpen() {
          if (!first) {
            if (onDrawerOpen != null) {
              tmp();
            }
            closure_7(true);
          }
        };
        handleClose = function handleClose() {
          if (first) {
            if (importDefault != null) {
              tmp();
            }
            closure_7(false);
          }
        };
        tmp23 = onClose;
        flag = false;
        tmp24 = closure_3;
        num8 = 2;
        tmp25 = closure_3(onClose.useState(false), 2);
        first = tmp25[0];
        closure_6 = first;
        closure_7 = tmp25[1];
        tmp19Result = tmp19(tmp3[13]);
        num9 = 0;
        sharedValue = tmp19Result.useSharedValue(0);
        closure_8 = sharedValue;
        tmp19Result1 = tmp19(tmp3[13]);
        class O {
          constructor() {
            tmp = closure_0;
            if (closure_1) {
              tmp4 = closure_3;
              diff = tmp - closure_3;
            } else {
              tmp2 = closure_2;
              diff = tmp - closure_2;
            }
            return diff;
          }
        }
        obj1 = { isLandscapeMode: null, controlMaxHeight: null, landscapeOffsetY: null, portraitOffsetY: null };
        obj1.isLandscapeMode = tmp5;
        obj1.controlMaxHeight = diff;
        obj1.landscapeOffsetY = sum4;
        obj1.portraitOffsetY = sum3;
        O.__closure = obj1;
        num10 = 13346503100323;
        O.__workletHash = 13346503100323;
        tmp28 = closure_27;
        O.__initData = closure_27;
        derivedValue = tmp19Result1.useDerivedValue(O);
        closure_9 = derivedValue;
        tmp19Result2 = tmp19(tmp3[13]);
        sharedValue1 = tmp19Result2.useSharedValue(0);
        closure_10 = sharedValue1;
        tmp19Result3 = tmp19(tmp3[13]);
        sharedValue2 = tmp19Result3.useSharedValue(false);
        closure_11 = sharedValue2;
        tmp19Result4 = tmp19(tmp3[13]);
        sharedValue3 = tmp19Result4.useSharedValue(0);
        closure_12 = sharedValue3;
        items = [, ];
        items[0] = sharedValue;
        items[1] = derivedValue;
        callback = onClose.useCallback(() => {
          let num = 0;
          const tmp = 0 !== first1.get();
          if (!tmp) {
            num = -closure_9.get();
          }
          const result = first1.set(closure_0(sum3[18]).withTiming(num, closure_3_19));
          if (tmp) {
            closure_9();
          } else {
            closure_8();
          }
          closure_7(!tmp);
          const obj2 = closure_0(sum3[18]);
        }, items);
        Gesture = tmp19(tmp3[19]).Gesture;
        PanResult = Gesture.Pan();
        class N {
          constructor() {
            obj = closure_0(c2[13]);
            tmp = obj.runOnJS(closure_8)();
            obj2 = closure_11;
            result = closure_11.set(0 !== closure_8.get());
            result1 = closure_12.set(0);
            tmp4 = null != closure_8.get() && obj2.get();
            if (!tmp4) {
              tmp5 = closure_10;
              result2 = closure_10.set(0);
            }
            return;
          }
        }
        obj27 = { runOnJS: null, clearFocusTimer: null, drawerOpen: null, positionY: null, CLOSE_DRAWER_POSITION: 0, velocity: null, startY: null };
        obj27.runOnJS = tmp19(tmp3[13]).runOnJS;
        tmp34 = closure_8;
        obj27.clearFocusTimer = closure_8;
        obj27.drawerOpen = sharedValue2;
        obj27.positionY = sharedValue;
        obj27.velocity = sharedValue3;
        obj27.startY = sharedValue1;
        N.__closure = obj27;
        num11 = 9674965708496;
        N.__workletHash = 9674965708496;
        tmp35 = closure_30;
        N.__initData = closure_30;
        onStartResult = PanResult.onStart(N);
        class H {
          constructor(arg0) {
            result = closure_12.set(global.velocityY);
            obj = closure_8;
            result1 = -1 * closure_8.get();
            if (result1 <= closure_9.get() + 16) {
              tmp3 = closure_10;
              num = closure_10.get();
              tmp4 = null;
              if (num == null) {
                num = 0;
              }
              result2 = obj.set(num + global.translationY);
            }
            return;
          }
        }
        obj28 = { velocity: null, positionY: null, maxHeight: null, startY: null };
        obj28.velocity = sharedValue3;
        obj28.positionY = sharedValue;
        obj28.maxHeight = derivedValue;
        obj28.startY = sharedValue1;
        H.__closure = obj28;
        num12 = 16755118181071;
        H.__workletHash = 16755118181071;
        tmp36 = closure_29;
        H.__initData = closure_29;
        onUpdateResult = onStartResult.onUpdate(H);
        class R {
          constructor() {
            obj = closure_11;
            value = closure_11.get();
            obj2 = closure_8;
            result = -1 * closure_8.get();
            result1 = closure_9.get() / 2;
            obj3 = closure_12;
            num = closure_12.get();
            if (num == null) {
              num = 0;
            }
            result2 = -1 * num;
            num2 = obj3.get();
            if (num2 == null) {
              num2 = 0;
            }
            openDrawer = function openDrawer() {
              ReanimatedRexport.runOnJS(handleOpen)();
              const result = sharedValue1.set(-closure_1_9.get());
              const result1 = first1.set(timing.withTiming(sharedValue1.get(), obj5));
              const result2 = sharedValue2.set(true);
              ReanimatedRexport.runOnJS(TooltipActionCreatorsDefault.acknowledgeTooltip)(ConstantsIOS.TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS);
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
                  tmp24 = closure_10;
                  result3 = closure_10.set(0);
                  tmp26 = closure_0;
                  tmp27 = c2;
                  obj7 = closure_0(c2[18]);
                  tmp28 = closure_3_20;
                  result4 = obj2.set(obj7.withTiming(0, closure_3_20));
                  flag2 = false;
                  result5 = obj.set(false);
                  tmp31 = closure_0;
                  tmp32 = c2;
                  obj8 = closure_0(c2[13]);
                  tmp33 = closure_9;
                  tmp34 = obj8.runOnJS(closure_9)();
                  tmp35 = closure_0;
                  tmp36 = c2;
                  obj9 = closure_0(c2[13]);
                  tmp37 = handleClose;
                  tmp38 = obj9.runOnJS(handleClose)();
                }
              }
              tmp9 = closure_10;
              result6 = closure_10.set(0);
              tmp11 = closure_0;
              tmp12 = c2;
              obj4 = closure_0(c2[18]);
              tmp13 = closure_3_20;
              result7 = obj2.set(obj4.withTiming(0, closure_3_20));
              flag = false;
              result8 = obj.set(false);
              tmp16 = closure_0;
              tmp17 = c2;
              obj5 = closure_0(c2[13]);
              tmp18 = closure_9;
              tmp19 = obj5.runOnJS(closure_9)();
              tmp20 = closure_0;
              tmp21 = c2;
              obj6 = closure_0(c2[13]);
              tmp22 = handleClose;
              tmp23 = obj6.runOnJS(handleClose)();
            }
            openDrawerResult1 = openDrawer();
            return;
          }
        }
        obj29 = { drawerOpen: null, positionY: null, maxHeight: null, velocity: null, MIN_GESTURE_TRIGGER_VELOCITY: 500, CLOSE_DRAWER_POSITION: 0, runOnJS: null, handleOpen: null, startY: null, withTiming: null, TIMING_CONFIG: null, TooltipActionCreators: null, TooltipNames: null, TIMING_CONFIG_EXIT: null, resetFocusTimer: null, handleClose: null };
        obj29.drawerOpen = sharedValue2;
        obj29.positionY = sharedValue;
        obj29.maxHeight = derivedValue;
        obj29.velocity = sharedValue3;
        obj29.runOnJS = tmp19(tmp3[13]).runOnJS;
        obj29.handleOpen = handleOpen;
        obj29.startY = sharedValue1;
        obj29.withTiming = tmp19(tmp3[18]).withTiming;
        tmp37 = closure_19;
        obj29.TIMING_CONFIG = closure_19;
        obj29.TooltipActionCreators = tmp2(tmp3[20]);
        obj29.TooltipNames = tmp19(tmp3[15]).TooltipNames;
        tmp38 = closure_20;
        obj29.TIMING_CONFIG_EXIT = closure_20;
        tmp39 = closure_9;
        obj29.resetFocusTimer = closure_9;
        obj29.handleClose = handleClose;
        R.__closure = obj29;
        num13 = 6790759206787;
        R.__workletHash = 6790759206787;
        tmp40 = closure_28;
        R.__initData = closure_28;
        items1 = [, , , ];
        items1[0] = sharedValue;
        items1[1] = onUpdateResult.onEnd(R);
        items1[2] = callback;
        items1[3] = first;
        num14 = 4;
        tmp41 = closure_3(items1, 4);
        first1 = tmp41[0];
        closure_8 = first1;
        tmp43 = tmp41[2];
        closure_9 = tmp43;
        tmp19Result5 = tmp19(tmp3[13]);
        class C {
          constructor() {
            num = 0;
            if (!closure_0) {
              num = closure_6;
            }
            size = { position: "absolute", height: onDrawerOpen, overflow: "hidden", bottom: null, right: null, borderRadius: null, width: null, transform: null };
            tmp = closure_3;
            num2 = 0;
            if (closure_3) {
              num2 = 16;
            }
            size.bottom = num2;
            num3 = 0;
            if (tmp) {
              tmp2 = closure_2;
              num4 = 16;
              num3 = 16 + closure_2;
            }
            size.right = num3;
            num5 = 0;
            if (tmp) {
              num5 = 8;
            }
            size.borderRadius = num5;
            size.width = onClose;
            obj1 = { translateY: null };
            obj3 = closure_0(closure_2[18]);
            obj1.translateY = obj3.withTiming(num, closure_19);
            items = [];
            items[0] = obj1;
            size.transform = items;
            return size;
          }
        }
        obj30 = { reveal: null, controlHeightWithOffset: null, sheetHeight: null, isLandscapeMode: null, safeAreaRight: null, sheetWidth: null, withTiming: null, TIMING_CONFIG: null };
        obj30.reveal = reveal;
        obj30.controlHeightWithOffset = sum;
        obj30.sheetHeight = bound;
        obj30.isLandscapeMode = tmp5;
        obj30.safeAreaRight = right;
        obj30.sheetWidth = tmp6;
        obj30.withTiming = tmp19(tmp3[18]).withTiming;
        obj30.TIMING_CONFIG = closure_19;
        C.__closure = obj30;
        num15 = 608185354082;
        C.__workletHash = 608185354082;
        tmp44 = closure_31;
        C.__initData = closure_31;
        items2 = [, ];
        items2[0] = tmp5;
        items2[1] = first1;
        animatedStyle = tmp19Result5.useAnimatedStyle(C);
        effect = onClose.useEffect(() => {
          const result = first1.set(timing.withTiming(0, obj6));
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
          function handleSelectActivity() {
            const result = first1.set(reveal(sum3[18]).withTiming(0, obj6));
          }
          let ComponentDispatch = reveal(sum3[23]).ComponentDispatch;
          const subscription = ComponentDispatch.subscribe(sharedValue3.SELECT_ACTIVITY, handleSelectActivity);
          return () => {
            const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
            ComponentDispatch.unsubscribe(closure_3_12.SELECT_ACTIVITY, handleSelectActivity);
          };
        }, items4);
        tmp19Result6 = tmp19(tmp3[13]);
        class Z {
          constructor() {
            obj = { height: onDrawerOpen, transform: null };
            obj1 = { translateY: closure_7 + closure_8.get() };
            items = [];
            items[0] = obj1;
            obj.transform = items;
            return obj;
          }
        }
        obj31 = { sheetHeight: null, offsetY: null, positionY: null };
        obj31.sheetHeight = bound;
        obj31.offsetY = diff;
        obj31.positionY = first1;
        Z.__closure = obj31;
        num16 = 4471821639301;
        Z.__workletHash = 4471821639301;
        tmp49 = closure_32;
        Z.__initData = closure_32;
        items5 = [];
        items5[0] = tmp43;
        animatedStyle1 = tmp19Result6.useAnimatedStyle(Z);
        effect3 = onClose.useEffect(() => {
          let ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
          const subscription = ComponentDispatch.subscribe(closure_2_12.TOGGLE_CALL_CONTROL_DRAWER, closure_9);
          return () => {
            const ComponentDispatch = reveal(sum3[23]).ComponentDispatch;
            ComponentDispatch.unsubscribe(sharedValue3.TOGGLE_CALL_CONTROL_DRAWER, closure_1_9);
          };
        }, items5);
        tmp19Result7 = tmp19(tmp3[24]);
        theme = tmp19Result7.useThemeContext().theme;
        tmp52 = handleOpen;
        obj32 = { style: null, pointerEvents: "box-none", children: null };
        obj32.style = animatedStyle;
        obj33 = { gesture: null, children: null };
        obj33.gesture = tmp41[1];
        tmp53 = handleClose;
        obj34 = { style: null, children: null };
        items6 = [, ];
        items6[0] = tmp.bottomDrawerContainer;
        items6[1] = animatedStyle1;
        obj34.style = items6;
        obj35 = { blurTheme: null, style: null };
        obj35.blurTheme = theme;
        items7 = [, ];
        items7[0] = tmp.visualEffectView;
        tmp2Result = tmp2(tmp3[25]);
        tmp19Result8 = tmp19(tmp3[26]);
        prop = null;
        if (tmp19Result8.isThemeLight(theme)) {
          prop = tmp.visualEffectViewBackground;
        }
        items7[1] = prop;
        obj35.style = items7;
        items8 = [, , , ];
        items8[0] = tmp52(tmp2Result, obj35);
        tmp56 = FocusedControlsAboveActionBarView;
        obj36 = { onPressHeader: null, aboveActionBar: null, positionY: null, offsetY: null, isExpanded: null };
        obj36.onPressHeader = tmp43;
        obj36.aboveActionBar = aboveActionBar;
        obj36.positionY = first1;
        obj36.offsetY = diff;
        obj36.isExpanded = tmp41[3];
        items8[1] = tmp52(FocusedControlsAboveActionBarView, obj36);
        items8[2] = children;
        tmp57 = FocusedControlsExpanded;
        obj37 = { expandedControls: null, availableHeight: null, positionY: null };
        obj37.expandedControls = expandedControls;
        obj37.availableHeight = diff2;
        obj37.positionY = first1;
        items8[3] = tmp52(FocusedControlsExpanded, obj37);
        obj34.children = items8;
        obj33.children = tmp53(tmp2(tmp3[13]).View, obj34);
        obj32.children = tmp52(tmp19(tmp3[19]).GestureDetector, obj33);
        return tmp52(tmp2(tmp3[13]).View, obj32);
      } else {
        str4 = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      str3 = "Trying to call a non-function";
      throw new TypeError("Trying to call a non-function");
    }
  }
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, TouchableWithoutFeedback: metroRequire, ScrollView: closure_7, StyleSheet } = get_ActivityIndicator);
const ChannelCallStore = fn(9639);
({ clearFocusTimer: closure_8, resetFocusTimer: closure_9 } = ChannelCallStore);
const ChannelCallConstants = fn(9640);
({ BOX_MODE_THRESHOLD_WIDTH: c10, BOX_MODE_ACTIONSHEET_HEIGHT: closure_11 } = ChannelCallConstants);
const Constants = fn(1074);
({ ComponentActions: closure_12, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let c15 = 20;
function EXTENDED_CONTROLS_OFFSET_Y(arg0) {

}
function EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y(arg0) {

}
const createStyles = fn(4756);
let obj2 = { bottomDrawerContainer: null, visualEffectView: null, visualEffectViewBackground: null, expandedControlsContainer: null, aboveActionBarContainer: null, aboveActionBarChildrenContainer: null, ptbButton: null, tooltipStyle: null, containerStyle: null, labelStyle: null };
const rect = { position: "absolute", left: 0, right: 0, bottom: 0, borderRadius: nativeDefault.radii.sm };
obj2.bottomDrawerContainer = rect;
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.borderRadius = nativeDefault.radii.sm;
obj3.overflow = "hidden";
obj2.visualEffectView = obj3;
obj2.visualEffectViewBackground = { backgroundColor: "rgba(0, 0, 0, .15)" };
obj2.expandedControlsContainer = { marginHorizontal: 16 };
obj2.aboveActionBarContainer = { position: "absolute", left: 0, right: 0, top: -32, paddingTop: 4, paddingBottom: 8 };
obj2.aboveActionBarChildrenContainer = { position: "absolute", left: 16, right: 16, top: -64 };
obj2.ptbButton = { margin: 0, marginHorizontal: 16, marginBottom: 8 };
obj2.tooltipStyle = { alignSelf: "center", position: "absolute", top: -28 };
obj2.containerStyle = { paddingHorizontal: 8, paddingVertical: 4 };
const merged1 = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.unsafe_rawColors.WHITE, 12, { uppercase: true }));
obj2.labelStyle = {};
const collapsedCategories = createStyles.createStyles(obj2);
let obj5 = { easing: fn(1177).STANDARD_EASING, duration: 250 };
let obj6 = { easing: fn(1177).STANDARD_EASING, duration: 400 };
const __initData = { code: "function FocusedControlsBottomControlsTsx1(){const{positionY,EXPANDED_DRAWER_SHOW_POSITION}=this.__closure;const opacity=Math.min(positionY.get()*-1/EXPANDED_DRAWER_SHOW_POSITION,1);return{opacity:opacity,pointerEvents:opacity===0?'none':'auto'};}" };
const __initData2 = { code: "function FocusedControlsBottomControlsTsx2(){const{positionY,EXPANDED_DRAWER_SHOW_POSITION}=this.__closure;return{opacity:1-Math.min(positionY.get()*-1/EXPANDED_DRAWER_SHOW_POSITION,1)};}" };
const __initData3 = { code: "function FocusedControlsBottomControlsTsx3(){const{offsetY,EXPANDED_DRAWER_SHOW_POSITION,positionY}=this.__closure;const maxHeightRange=offsetY/3-EXPANDED_DRAWER_SHOW_POSITION;const opacity=2-Math.max(Math.abs(positionY.get())/maxHeightRange,0);return{opacity:opacity};}" };
const __initData5 = { code: "function FocusedControlsBottomControlsTsx4(){const{isLandscapeMode,controlMaxHeight,landscapeOffsetY,portraitOffsetY}=this.__closure;return isLandscapeMode?controlMaxHeight-landscapeOffsetY:controlMaxHeight-portraitOffsetY;}" };
const __initData6 = { code: "function FocusedControlsBottomControlsTsx5(){const{drawerOpen,positionY,maxHeight,velocity,MIN_GESTURE_TRIGGER_VELOCITY,CLOSE_DRAWER_POSITION,runOnJS,handleOpen,startY,withTiming,TIMING_CONFIG,TooltipActionCreators,TooltipNames,TIMING_CONFIG_EXIT,resetFocusTimer,handleClose}=this.__closure;var _velocity$get,_velocity$get2;const isDrawerAlreadyOpen=drawerOpen.get();const isPassedTriggerThreshold=positionY.get()*-1>=maxHeight.get()/2;const isHighOpenVelocity=((_velocity$get=velocity.get())!==null&&_velocity$get!==void 0?_velocity$get:0)*-1>=MIN_GESTURE_TRIGGER_VELOCITY;const isHighCloseVelocity=((_velocity$get2=velocity.get())!==null&&_velocity$get2!==void 0?_velocity$get2:0)>=MIN_GESTURE_TRIGGER_VELOCITY;const isLowerThanMinHeight=positionY.get()>CLOSE_DRAWER_POSITION;function openDrawer(){runOnJS(handleOpen)();startY.set(-maxHeight.get());positionY.set(withTiming(startY.get(),TIMING_CONFIG));drawerOpen.set(true);runOnJS(TooltipActionCreators.acknowledgeTooltip)(TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS);}function closeDrawer(){startY.set(0);positionY.set(withTiming(CLOSE_DRAWER_POSITION,TIMING_CONFIG_EXIT));drawerOpen.set(false);runOnJS(resetFocusTimer)();runOnJS(handleClose)();}if(isHighOpenVelocity&&!isDrawerAlreadyOpen||isPassedTriggerThreshold&&!isDrawerAlreadyOpen){openDrawer();}else if(isLowerThanMinHeight||isHighCloseVelocity&&isDrawerAlreadyOpen){closeDrawer();}else if(isPassedTriggerThreshold){openDrawer();}else{closeDrawer();}}" };
const __initData7 = { code: "function FocusedControlsBottomControlsTsx6(event){const{velocity,positionY,maxHeight,startY}=this.__closure;var _startY$get;velocity.set(event.velocityY);if(positionY.get()*-1>maxHeight.get()+16){return;}positionY.set(((_startY$get=startY.get())!==null&&_startY$get!==void 0?_startY$get:0)+event.translationY);}" };
const __initData8 = { code: "function FocusedControlsBottomControlsTsx7(){const{runOnJS,clearFocusTimer,drawerOpen,positionY,CLOSE_DRAWER_POSITION,velocity,startY}=this.__closure;runOnJS(clearFocusTimer)();drawerOpen.set(positionY.get()!==CLOSE_DRAWER_POSITION);velocity.set(0);if(positionY.get()==null||!drawerOpen.get()){startY.set(0);}}" };
const __initData9 = { code: "function FocusedControlsBottomControlsTsx8(){const{reveal,controlHeightWithOffset,sheetHeight,isLandscapeMode,safeAreaRight,sheetWidth,withTiming,TIMING_CONFIG}=this.__closure;const revealOffset=reveal?0:controlHeightWithOffset;return{position:'absolute',height:sheetHeight,overflow:'hidden',bottom:isLandscapeMode?16:0,right:isLandscapeMode?16+safeAreaRight:0,borderRadius:isLandscapeMode?8:0,width:sheetWidth,transform:[{translateY:withTiming(revealOffset,TIMING_CONFIG)}]};}" };
const __initData10 = { code: "function FocusedControlsBottomControlsTsx9(){const{sheetHeight,offsetY,positionY}=this.__closure;return{height:sheetHeight,transform:[{translateY:offsetY+positionY.get()}]};}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/FocusedControlsBottomControls.tsx");

export default function FocusedControlsBottomControls(omitPTT) {
  let flag = omitPTT.omitPTT;
  ({ children, actionBar, expandedControls, reveal, header, onDrawerClose } = omitPTT);
  if (flag === undefined) {
    flag = false;
  }
  c0 = undefined;
  const tmp = closure_18();
  [tmp3, c0] = noop.useState(0);
  const obj = { aboveActionBar: children, actionBarControlsHeight: tmp3, expandedControls, reveal, onDrawerClose, onDrawerOpen: omitPTT.onDrawerOpen, children: null };
  const obj2 = {
    onLayout: noop.useCallback((nativeEvent) => {
      _undefined(nativeEvent.nativeEvent.layout.height);
    }, []),
    children: null
  };
  const items = [header, actionBar, ];
  let tmp4Result = null;
  if (!flag) {
    const obj3 = { look: CallPTTButton.CallPTTButtonLooks.BLUR, style: tmp.ptbButton, sendCallback, stopCallback };
    tmp4Result = map1(CallPTTButtonDefault, obj3);
  }
  items[2] = tmp4Result;
  obj2.children = items;
  obj.children = closure_1_14(hasOwnProperty, obj2);
  return map1(FocusedControlsBottomDrawer, obj);
};
export const FOCUSED_CONTROLS_HEADER_HEIGHT = 54;
export { FocusedControlsBottomDrawer };