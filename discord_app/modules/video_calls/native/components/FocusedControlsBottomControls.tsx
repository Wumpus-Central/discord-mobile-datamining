// === Module 12063: FocusedControlsBottomControls ===

// Module 12063 (FocusedControlsBottomControls)
import nativeDefault from "native" /* 575 */;
import ConstantsIOS from "ConstantsIOS" /* 1092 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import util from "util" /* 1113 */;
import native from "native" /* 1187 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5378 */;
import ActionSheetHeaderBar from "ActionSheetHeaderBar" /* 5731 */;
import CallPTTButton from "CallPTTButton" /* 11398 */;
import useBottomVoiceControlsSheetWidthDefault from "useBottomVoiceControlsSheetWidth" /* 11913 */;
import useCanShowTooltip from "useCanShowTooltip" /* 12064 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import TextStyles from "TextStyles" /* 6858 */;

const _modDef1652 = _mod1652;
const CallPTTButtonDefault = CallPTTButton;

require = fn;
function FocusedControlsExpanded(availableHeight) {
  availableHeight = availableHeight.availableHeight;
  scrollEnabled = undefined;
  closure_3 = undefined;
  ({ expandedControls, positionY } = availableHeight);
  const bottom = useSafeAreaInsetsDefault().bottom;
  [scrollEnabled, closure_3] = noop.useState(false);
  items = [availableHeight, bottom, scrollEnabled];
  const callback = noop.useCallback((nativeEvent) => {
    if (nativeEvent.nativeEvent.layout.height > c0 - c1 !== first) {
      closure_3(tmp);
    }
  }, items);
  const tmp = closure_17();
  const items1 = [closure_20, positionY, 20];
  c0 = undefined;
  c1 = undefined;
  [tmp7, tmp8, tmp9] = items1;
  class FocusedControlsBottomControlsTsx1 {
    constructor() {
      bound = Math.min(-1 * closure_0.get() / closure_1, 1);
      obj = { opacity: bound, pointerEvents: null };
      str = "auto";
      if (0 === bound) {
        str = "none";
      }
      obj.pointerEvents = str;
      return obj;
    }
  }
  const items2 = [tmp8, tmp9];
  FocusedControlsBottomControlsTsx1.__closure = items2;
  FocusedControlsBottomControlsTsx1.__workletHash = 1609383098366;
  FocusedControlsBottomControlsTsx1.__initData = tmp7;
  const obj2 = { style: { height: availableHeight }, children: null };
  const obj3 = { scrollEnabled, children: null };
  const animatedStyle = _mod1652.useAnimatedStyle(FocusedControlsBottomControlsTsx1);
  const obj4 = { style: null, onLayout: callback, children: expandedControls };
  const items3 = [tmp.expandedControlsContainer, animatedStyle];
  obj4.style = items3;
  obj3.children = state(_modDef1652.View, obj4);
  obj2.children = state(metroImportDefault, obj3);
  return state(width, obj2);
}
function FocusedControlsBottomDrawerTooltip(positionY) {
  const tmp = closure_17();
  const canShowTooltip = useCanShowTooltip.useCanShowTooltip(ConstantsIOS.TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS, true);
  _mod1652;
  items = [closure_22, positionY.positionY, 20];
  c0 = undefined;
  c1 = undefined;
  [tmp6, tmp7, tmp8] = items;
  class FocusedControlsBottomControlsTsx2 {
    constructor() {
      obj = { opacity: 1 - Math.min(-1 * closure_0.get() / closure_1, 1) };
      return obj;
    }
  }
  const items1 = [tmp7, tmp8];
  FocusedControlsBottomControlsTsx2.__closure = items1;
  FocusedControlsBottomControlsTsx2.__workletHash = 9789816419236;
  FocusedControlsBottomControlsTsx2.__initData = tmp6;
  let tmp10 = null;
  if (canShowTooltip) {
    const obj2 = { style: tmp9, children: null };
    obj5 = { style: tmp.tooltipStyle, arrowPosition: native.TooltipArrowPositions.CENTER, arrowDirection: native.TooltipArrowDirections.DOWN, arrowWidth: 8, arrowHeight: 4, containerStyle: null, labelStyle: null, label: null };
    ({ containerStyle: obj3.containerStyle, labelStyle: obj3.labelStyle } = tmp);
    const intl = util.intl;
    obj5.label = intl.string(util.t.zYzy2i);
    obj2.children = state(native.Tooltip, obj5);
    tmp10 = state(_modDef1652.View, obj2);
  }
  return tmp10;
}
function FocusedControlsAboveActionBarView(arg0) {
  ({ positionY, aboveActionBar } = arg0);
  ({ offsetY, onPressHeader, isExpanded } = arg0);
  const tmp = closure_17();
  items = [closure_24, offsetY, 20, positionY];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp4, tmp5, tmp6, tmp7] = items;
  class FocusedControlsBottomControlsTsx3 {
    constructor() {
      obj = { opacity: 2 - Math.max(Math.abs(closure_2.get()) / (closure_0 / 3 - closure_1), 0) };
      return obj;
    }
  }
  const items1 = [tmp5, tmp6, tmp7];
  FocusedControlsBottomControlsTsx3.__closure = items1;
  FocusedControlsBottomControlsTsx3.__workletHash = 14335129954941;
  FocusedControlsBottomControlsTsx3.__initData = tmp4;
  const obj2 = { accessible: true, onPress: onPressHeader, accessibilityRole: "button", accessibilityLabel: "Group DM", accessibilityHint: "Press to start a new conversation", accessibilityState: { expanded: isExpanded }, children: null };
  const obj3 = { style: tmp.aboveActionBarContainer, children: null };
  const animatedStyle = _mod1652.useAnimatedStyle(FocusedControlsBottomControlsTsx3);
  const items2 = [state(FocusedControlsBottomDrawerTooltip, { positionY }), state(ActionSheetHeaderBar.ActionSheetHeaderBar, {}), ];
  let tmp9Result = null != aboveActionBar;
  if (tmp9Result) {
    const obj4 = { style: null, children: null };
    const items3 = [tmp.aboveActionBarChildrenContainer, animatedStyle];
    obj4.style = items3;
    obj4.children = aboveActionBar;
    tmp9Result = state(_modDef1652.View, obj4);
  }
  items2[2] = tmp9Result;
  obj3.children = items2;
  obj2.children = gesture(width, obj3);
  return state(timestampProducer, obj2);
}
class FocusedControlsBottomDrawer {
  constructor(arg0) {
    ({ actionBarControlsHeight, reveal } = global);
    closure_0 = reveal;
    closure_1 = global.onDrawerClose;
    closure_2 = undefined;
    closure_3 = undefined;
    ({ children, expandedControls, aboveActionBar, onDrawerOpen } = global);
    tmp = closure_17();
    tmp2 = closure_1;
    tmp3 = closure_2;
    tmp4 = closure_1(closure_2[12])();
    ({ bottom, top, right } = tmp4);
    size = closure_1(closure_2[22])();
    height = size.height;
    tmp5 = size.width > closure_10;
    bound = height;
    tmp6 = closure_1(closure_2[23])();
    if (tmp5) {
      tmp8 = globalThis;
      _Math = Math;
      tmp9 = closure_11;
      bound = Math.min(closure_11, height);
    }
    sum = actionBarControlsHeight;
    if (!tmp5) {
      sum = actionBarControlsHeight + bottom;
    }
    diff = bound - sum;
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
      tmp13 = closure_15;
      if (typeof closure_15 === "function") {
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
    if (typeof closure_15 === "function") {
      num5 = 54;
      tmp19 = closure_0;
      sum2 = top + 54;
      obj2 = closure_0(tmp3[7]);
      num6 = 16;
      if (obj2.isIOS()) {
        num6 = 48;
      }
      tmp21 = EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y;
      if (typeof EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y === "function") {
        closure_0 = function onClose() {
          let tmp;
          if (_undefined != null) {
            tmp = _undefined();
          }
          return tmp;
        };
        closure_1 = onDrawerOpen;
        closure_2 = undefined;
        closure_3 = undefined;
        closure_4 = undefined;
        closure_5 = undefined;
        obj3 = closure_4;
        flag = false;
        sum3 = top + 54;
        num7 = 2;
        tmp23 = closure_3;
        tmp24 = closure_3(closure_4.useState(false), 2);
        first = tmp24[0];
        closure_2 = first;
        closure_3 = tmp24[1];
        tmp19Result = tmp19(tmp3[13]);
        num8 = 0;
        sharedValue = tmp19Result.useSharedValue(0);
        closure_4 = sharedValue;
        tmp19Result1 = tmp19(tmp3[13]);
        tmp27 = closure_26;
        items = [, , , , ];
        items[0] = closure_26;
        items[1] = tmp5;
        items[2] = diff;
        num9 = 12;
        items[3] = sum3 + 12;
        items[4] = tmp20;
        closure_0 = undefined;
        closure_1 = undefined;
        closure_2 = undefined;
        closure_3 = undefined;
        tmp28 = items;
        [tmp29, tmp30, tmp31, tmp32, tmp33] = items;
        class FocusedControlsBottomControlsTsx4 {
          constructor() {
            tmp = closure_1;
            if (closure_0) {
              tmp4 = closure_2;
              diff = tmp - closure_2;
            } else {
              tmp2 = closure_3;
              diff = tmp - closure_3;
            }
            return diff;
          }
        }
        items1 = [, , , ];
        items1[0] = tmp30;
        items1[1] = tmp31;
        items1[2] = tmp32;
        items1[3] = tmp33;
        FocusedControlsBottomControlsTsx4.__closure = items1;
        num10 = 1549735131258;
        FocusedControlsBottomControlsTsx4.__workletHash = 1549735131258;
        FocusedControlsBottomControlsTsx4.__initData = tmp29;
        derivedValue = tmp19Result1.useDerivedValue(FocusedControlsBottomControlsTsx4);
        closure_5 = derivedValue;
        tmp19Result2 = tmp19(tmp3[13]);
        sharedValue1 = tmp19Result2.useSharedValue(0);
        tmp19Result3 = tmp19(tmp3[13]);
        sharedValue2 = tmp19Result3.useSharedValue(false);
        tmp19Result4 = tmp19(tmp3[13]);
        sharedValue3 = tmp19Result4.useSharedValue(0);
        items2 = [, ];
        items2[0] = sharedValue;
        items2[1] = derivedValue;
        callback = obj3.useCallback(() => {
          let num = 0;
          const tmp = 0 !== _undefined3.get();
          if (!tmp) {
            num = -width.get();
          }
          const result = _undefined3.set(height(height2[18]).withTiming(num, collapsedCategories));
          if (tmp) {
            _undefined6();
          } else {
            _undefined5();
          }
          _undefined2(!tmp);
          const obj2 = height(height2[18]);
        }, items2);
        Gesture = tmp19(tmp3[19]).Gesture;
        PanResult = Gesture.Pan();
        tmp39 = closure_27;
        items3 = [, , , , , , , ];
        items3[0] = closure_27;
        items3[1] = tmp19(tmp3[20]).scheduleOnRN;
        tmp40 = closure_8;
        items3[2] = closure_8;
        items3[3] = sharedValue2;
        items3[4] = sharedValue;
        items3[5] = 0;
        items3[6] = sharedValue3;
        items3[7] = sharedValue1;
        closure_0 = undefined;
        closure_1 = undefined;
        closure_2 = undefined;
        closure_3 = undefined;
        closure_4 = undefined;
        closure_5 = undefined;
        closure_6 = undefined;
        tmp41 = items3;
        [tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49] = items3;
        class FocusedControlsBottomControlsTsx5 {
          constructor() {
            tmp = closure_0(closure_1);
            obj = closure_2;
            result = closure_2.set(closure_3.get() !== closure_4);
            result1 = closure_5.set(0);
            tmp4 = null != closure_3.get() && obj.get();
            if (!tmp4) {
              tmp5 = closure_6;
              result2 = closure_6.set(0);
            }
            return;
          }
        }
        items4 = [, , , , , , ];
        items4[0] = tmp43;
        items4[1] = tmp44;
        items4[2] = tmp45;
        items4[3] = tmp46;
        items4[4] = tmp47;
        items4[5] = tmp48;
        items4[6] = tmp49;
        FocusedControlsBottomControlsTsx5.__closure = items4;
        num11 = 927560176042;
        FocusedControlsBottomControlsTsx5.__workletHash = 927560176042;
        FocusedControlsBottomControlsTsx5.__initData = tmp42;
        onStartResult = PanResult.onStart(FocusedControlsBottomControlsTsx5);
        tmp50 = closure_28;
        items5 = [, , , , ];
        items5[0] = closure_28;
        items5[1] = sharedValue3;
        items5[2] = sharedValue;
        items5[3] = derivedValue;
        items5[4] = sharedValue1;
        closure_0 = undefined;
        closure_1 = undefined;
        closure_2 = undefined;
        closure_3 = undefined;
        tmp51 = items5;
        [tmp52, tmp53, tmp54, tmp55, tmp56] = items5;
        class FocusedControlsBottomControlsTsx6 {
          constructor(arg0) {
            result = closure_0.set(global.velocityY);
            obj = closure_1;
            result1 = -1 * closure_1.get();
            if (result1 <= closure_2.get() + 16) {
              tmp3 = closure_3;
              num = closure_3.get();
              tmp4 = null;
              if (num == null) {
                num = 0;
              }
              result2 = obj.set(num + global.translationY);
            }
            return;
          }
        }
        items6 = [, , , ];
        items6[0] = tmp53;
        items6[1] = tmp54;
        items6[2] = tmp55;
        items6[3] = tmp56;
        FocusedControlsBottomControlsTsx6.__closure = items6;
        num12 = 14749766068982;
        FocusedControlsBottomControlsTsx6.__workletHash = 14749766068982;
        FocusedControlsBottomControlsTsx6.__initData = tmp52;
        onUpdateResult = onStartResult.onUpdate(FocusedControlsBottomControlsTsx6);
        tmp57 = closure_29;
        items7 = [, , , , , , , , , , , , , , , , ];
        items7[0] = closure_29;
        items7[1] = sharedValue2;
        items7[2] = sharedValue;
        items7[3] = derivedValue;
        items7[4] = sharedValue3;
        num13 = 500;
        items7[5] = 500;
        items7[6] = 0;
        items7[7] = tmp19(tmp3[20]).scheduleOnRN;
        items7[8] = function handleOpen() {
          if (!c2) {
            if (c1 != null) {
              tmp();
            }
            _undefined2(true);
          }
        };
        items7[9] = sharedValue1;
        items7[10] = tmp19(tmp3[18]).withTiming;
        items7[11] = closure_18;
        tmp58 = closure_18;
        items7[12] = tmp2(tmp3[21]);
        items7[13] = tmp19(tmp3[15]).TooltipNames;
        tmp59 = closure_19;
        items7[14] = closure_19;
        tmp60 = closure_9;
        items7[15] = closure_9;
        items7[16] = function handleClose() {
          if (c2) {
            if (importDefault != null) {
              tmp();
            }
            _undefined2(false);
          }
        };
        closure_0 = undefined;
        closure_1 = undefined;
        closure_2 = undefined;
        closure_3 = undefined;
        closure_4 = undefined;
        closure_5 = undefined;
        closure_6 = undefined;
        closure_7 = undefined;
        closure_8 = undefined;
        closure_9 = undefined;
        closure_10 = undefined;
        closure_11 = undefined;
        closure_12 = undefined;
        closure_13 = undefined;
        closure_14 = undefined;
        closure_15 = undefined;
        tmp61 = items7;
        [tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78] = items7;
        class FocusedControlsBottomControlsTsx7 {
          constructor() {
            obj = closure_0;
            value = closure_0.get();
            obj2 = closure_1;
            result = -1 * closure_1.get();
            obj3 = closure_2;
            result1 = closure_2.get() / 2;
            obj4 = closure_3;
            num = closure_3.get();
            if (num == null) {
              num = 0;
            }
            tmp4 = closure_4;
            tmp5 = -1 * num >= closure_4;
            num2 = obj4.get();
            if (num2 == null) {
              num2 = 0;
            }
            tmp6 = num2 >= tmp4;
            tmp7 = closure_5;
            if (!tmp5) {
              if (result1 <= result) {
                return;
              }
              if (!tmp8) {
                if (tmp6) {
                }
                if (result1 <= result) {
                  tmp25 = closure_6;
                  tmp26 = closure_7;
                  tmp27 = closure_6(closure_7);
                  tmp28 = closure_8;
                  result2 = closure_8.set(-obj3.get());
                  tmp30 = closure_9;
                  tmp31 = closure_10;
                  result3 = obj2.set(closure_9(closure_8.get(), closure_10));
                  flag2 = true;
                  result4 = obj.set(true);
                  tmp34 = closure_11;
                  tmp35 = closure_12;
                  tmp36 = closure_6(closure_11.acknowledgeTooltip, closure_12.SCREENSHARE_SWIPE_UP_CONTROLS);
                } else {
                  tmp14 = closure_8;
                  num3 = 0;
                  result5 = closure_8.set(0);
                  tmp16 = closure_9;
                  tmp17 = closure_13;
                  result6 = obj2.set(closure_9(tmp7, closure_13));
                  flag = false;
                  result7 = obj.set(false);
                  tmp20 = closure_6;
                  tmp21 = closure_14;
                  tmp22 = closure_6(closure_14);
                  tmp23 = closure_15;
                  tmp24 = closure_6(closure_15);
                }
              }
              tmp37 = closure_8;
              num4 = 0;
              result8 = closure_8.set(0);
              tmp39 = closure_9;
              tmp40 = closure_13;
              result9 = obj2.set(closure_9(tmp7, closure_13));
              flag3 = false;
              result10 = obj.set(false);
              tmp43 = closure_6;
              tmp44 = closure_14;
              tmp45 = closure_6(closure_14);
              tmp46 = closure_15;
              tmp47 = closure_6(closure_15);
            }
            tmp9 = closure_6(closure_7);
            result11 = closure_8.set(-obj3.get());
            result12 = obj2.set(closure_9(closure_8.get(), closure_10));
            result13 = obj.set(true);
            tmp13 = closure_6(closure_11.acknowledgeTooltip, closure_12.SCREENSHARE_SWIPE_UP_CONTROLS);
            return;
          }
        }
        items8 = [, , , , , , , , , , , , , , , ];
        items8[0] = tmp63;
        items8[1] = tmp64;
        items8[2] = tmp65;
        items8[3] = tmp66;
        items8[4] = tmp67;
        items8[5] = tmp68;
        items8[6] = tmp69;
        items8[7] = tmp70;
        items8[8] = tmp71;
        items8[9] = tmp72;
        items8[10] = tmp73;
        items8[11] = tmp74;
        items8[12] = tmp75;
        items8[13] = tmp76;
        items8[14] = tmp77;
        items8[15] = tmp78;
        FocusedControlsBottomControlsTsx7.__closure = items8;
        num14 = 17091420502877;
        FocusedControlsBottomControlsTsx7.__workletHash = 17091420502877;
        FocusedControlsBottomControlsTsx7.__initData = tmp62;
        items9 = [, , , ];
        items9[0] = sharedValue;
        items9[1] = onUpdateResult.onEnd(FocusedControlsBottomControlsTsx7);
        items9[2] = callback;
        items9[3] = first;
        num15 = 4;
        tmp23Result = tmp23(items9, 4);
        first1 = tmp23Result[0];
        closure_2 = first1;
        tmp81 = tmp23Result[2];
        closure_3 = tmp81;
        tmp19Result5 = tmp19(tmp3[13]);
        tmp82 = closure_30;
        items10 = [, , , , , , , , ];
        items10[0] = closure_30;
        items10[1] = reveal;
        items10[2] = sum;
        items10[3] = bound;
        items10[4] = tmp5;
        items10[5] = right;
        items10[6] = tmp6;
        items10[7] = tmp19(tmp3[18]).withTiming;
        items10[8] = tmp58;
        closure_0 = undefined;
        closure_1 = undefined;
        closure_2 = undefined;
        closure_3 = undefined;
        closure_4 = undefined;
        closure_5 = undefined;
        closure_6 = undefined;
        closure_7 = undefined;
        tmp83 = items10;
        [tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92] = items10;
        class FocusedControlsBottomControlsTsx8 {
          constructor() {
            size = { position: "absolute", height: closure_2, overflow: "hidden", bottom: null, right: null, borderRadius: null, width: null, transform: null };
            tmp = closure_3;
            num = 0;
            if (closure_3) {
              num = 16;
            }
            size.bottom = num;
            num2 = 0;
            if (tmp) {
              tmp2 = closure_4;
              num3 = 16;
              num2 = 16 + closure_4;
            }
            size.right = num2;
            num4 = 0;
            if (tmp) {
              num4 = 8;
            }
            size.borderRadius = num4;
            size.width = closure_5;
            num5 = 0;
            tmp3 = closure_6;
            if (!closure_0) {
              num5 = closure_1;
            }
            obj1 = { translateY: tmp3(num5, closure_7) };
            items = [];
            items[0] = obj1;
            size.transform = items;
            return size;
          }
        }
        items11 = [, , , , , , , ];
        items11[0] = tmp85;
        items11[1] = tmp86;
        items11[2] = tmp87;
        items11[3] = tmp88;
        items11[4] = tmp89;
        items11[5] = tmp90;
        items11[6] = tmp91;
        items11[7] = tmp92;
        FocusedControlsBottomControlsTsx8.__closure = items11;
        num16 = 4296419497467;
        FocusedControlsBottomControlsTsx8.__workletHash = 4296419497467;
        FocusedControlsBottomControlsTsx8.__initData = tmp84;
        items12 = [, ];
        items12[0] = tmp5;
        items12[1] = first1;
        animatedStyle = tmp19Result5.useAnimatedStyle(FocusedControlsBottomControlsTsx8);
        effect = obj3.useEffect(() => {
          const result = height2.set(timing_timing.withTiming(0, obj6));
        }, items12);
        items13 = [, ];
        items13[0] = reveal;
        items13[1] = first1;
        effect1 = obj3.useEffect(() => {
          if (c0) {
            const result = height2.set(0);
          }
        }, items13);
        items14 = [];
        items14[0] = first1;
        effect2 = obj3.useEffect(() => {
          function handleSelectActivity() {
            const result = height2.set(handleSelectActivity(c2[18]).withTiming(0, obj6));
          }
          let ComponentDispatch = height(height2[24]).ComponentDispatch;
          const subscription = ComponentDispatch.subscribe(_undefined8.SELECT_ACTIVITY, handleSelectActivity);
          return () => {
            const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
            ComponentDispatch.unsubscribe(constants.SELECT_ACTIVITY, handleSelectActivity);
          };
        }, items14);
        tmp19Result6 = tmp19(tmp3[13]);
        tmp97 = closure_31;
        items15 = [, , , ];
        items15[0] = closure_31;
        items15[1] = bound;
        items15[2] = diff;
        items15[3] = first1;
        closure_0 = undefined;
        closure_1 = undefined;
        closure_2 = undefined;
        tmp98 = items15;
        [tmp99, tmp100, tmp101, tmp102] = items15;
        class FocusedControlsBottomControlsTsx9 {
          constructor() {
            obj = { height: closure_0, transform: null };
            obj1 = { translateY: closure_1 + closure_2.get() };
            items = [];
            items[0] = obj1;
            obj.transform = items;
            return obj;
          }
        }
        items16 = [, , ];
        items16[0] = tmp100;
        items16[1] = tmp101;
        items16[2] = tmp102;
        FocusedControlsBottomControlsTsx9.__closure = items16;
        num17 = 5137539977884;
        FocusedControlsBottomControlsTsx9.__workletHash = 5137539977884;
        FocusedControlsBottomControlsTsx9.__initData = tmp99;
        items17 = [];
        items17[0] = tmp81;
        animatedStyle1 = tmp19Result6.useAnimatedStyle(FocusedControlsBottomControlsTsx9);
        effect3 = obj3.useEffect(() => {
          let ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
          const subscription = ComponentDispatch.subscribe(constants.TOGGLE_CALL_CONTROL_DRAWER, c3);
          return () => {
            const ComponentDispatch = c0(c2[24]).ComponentDispatch;
            ComponentDispatch.unsubscribe(constants.TOGGLE_CALL_CONTROL_DRAWER, _undefined2);
          };
        }, items17);
        tmp19Result7 = tmp19(tmp3[25]);
        theme = tmp19Result7.useThemeContext().theme;
        tmp105 = closure_13;
        obj1 = { style: null, pointerEvents: "box-none", children: null };
        obj1.style = animatedStyle;
        obj22 = { gesture: null, children: null };
        obj22.gesture = tmp23Result[1];
        tmp106 = closure_14;
        obj23 = { style: null, children: null };
        items18 = [, ];
        items18[0] = tmp.bottomDrawerContainer;
        items18[1] = animatedStyle1;
        obj23.style = items18;
        obj24 = { blurTheme: null, style: null };
        obj24.blurTheme = theme;
        items19 = [, ];
        items19[0] = tmp.visualEffectView;
        tmp2Result = tmp2(tmp3[26]);
        tmp19Result8 = tmp19(tmp3[27]);
        prop = null;
        if (tmp19Result8.isThemeLight(theme)) {
          prop = tmp.visualEffectViewBackground;
        }
        items19[1] = prop;
        obj24.style = items19;
        items20 = [, , , ];
        items20[0] = tmp105(tmp2Result, obj24);
        tmp109 = FocusedControlsAboveActionBarView;
        obj25 = { onPressHeader: null, aboveActionBar: null, positionY: null, offsetY: null, isExpanded: null };
        obj25.onPressHeader = tmp81;
        obj25.aboveActionBar = aboveActionBar;
        obj25.positionY = first1;
        obj25.offsetY = diff;
        obj25.isExpanded = tmp23Result[3];
        items20[1] = tmp105(FocusedControlsAboveActionBarView, obj25);
        items20[2] = children;
        tmp110 = FocusedControlsExpanded;
        obj26 = { expandedControls: null, availableHeight: null, positionY: null };
        obj26.expandedControls = expandedControls;
        obj26.availableHeight = diff2;
        obj26.positionY = first1;
        items20[3] = tmp105(FocusedControlsExpanded, obj26);
        obj23.children = items20;
        obj22.children = tmp106(tmp2(tmp3[13]).View, obj23);
        obj1.children = tmp105(tmp19(tmp3[19]).GestureDetector, obj22);
        return tmp105(tmp2(tmp3[13]).View, obj1);
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
({ View: hasOwnProperty, TouchableWithoutFeedback: closure_6, ScrollView: metroImportDefault, StyleSheet } = get_ActivityIndicator);
const ChannelCallStore = fn(11181);
({ clearFocusTimer: closure_8, resetFocusTimer: closure_9 } = ChannelCallStore);
const ChannelCallConstants = fn(11182);
({ BOX_MODE_THRESHOLD_WIDTH: closure_10, BOX_MODE_ACTIONSHEET_HEIGHT: closure_11 } = ChannelCallConstants);
const Constants = fn(1072);
({ ComponentActions: closure_12, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
function EXTENDED_CONTROLS_OFFSET_Y(arg0) {

}
function EXTENDED_CONTROLS_LANDSCAPE_OFFSET_Y(arg0) {

}
const createStyles = fn(5141);
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
let closure_17 = createStyles.createStyles(obj2);
let obj5 = { easing: fn(1187).STANDARD_EASING, duration: 250 };
let obj6 = { easing: fn(1187).STANDARD_EASING, duration: 400 };
let closure_20 = { code: "(function FocusedControlsBottomControlsTsx1(){let[positionY,EXPANDED_DRAWER_SHOW_POSITION]=this.__closure;const opacity=Math.min(positionY.get()*-1/EXPANDED_DRAWER_SHOW_POSITION,1);return{opacity:opacity,pointerEvents:opacity===0?'none':'auto'};})" };
let closure_22 = { code: "(function FocusedControlsBottomControlsTsx2(){let[positionY,EXPANDED_DRAWER_SHOW_POSITION]=this.__closure;return{opacity:1-Math.min(positionY.get()*-1/EXPANDED_DRAWER_SHOW_POSITION,1)};})" };
let closure_24 = { code: "(function FocusedControlsBottomControlsTsx3(){let[offsetY,EXPANDED_DRAWER_SHOW_POSITION,positionY]=this.__closure;const maxHeightRange=offsetY/3-EXPANDED_DRAWER_SHOW_POSITION;const opacity=2-Math.max(Math.abs(positionY.get())/maxHeightRange,0);return{opacity:opacity};})" };
let closure_26 = { code: "(function FocusedControlsBottomControlsTsx4(){let[isLandscapeMode,controlMaxHeight,landscapeOffsetY,portraitOffsetY]=this.__closure;return isLandscapeMode?controlMaxHeight-landscapeOffsetY:controlMaxHeight-portraitOffsetY;})" };
let closure_27 = { code: "(function FocusedControlsBottomControlsTsx5(){let[scheduleOnRN,clearFocusTimer,drawerOpen,positionY,CLOSE_DRAWER_POSITION,velocity,startY]=this.__closure;scheduleOnRN(clearFocusTimer);drawerOpen.set(positionY.get()!==CLOSE_DRAWER_POSITION);velocity.set(0);if(positionY.get()==null||!drawerOpen.get()){startY.set(0);}})" };
let closure_28 = { code: "(function FocusedControlsBottomControlsTsx6(event){let[velocity,positionY,maxHeight,startY]=this.__closure;var _startY$get;velocity.set(event.velocityY);if(positionY.get()*-1>maxHeight.get()+16){return;}positionY.set(((_startY$get=startY.get())!==null&&_startY$get!==void 0?_startY$get:0)+event.translationY);})" };
let closure_29 = { code: "(function FocusedControlsBottomControlsTsx7(){let[drawerOpen,positionY,maxHeight,velocity,MIN_GESTURE_TRIGGER_VELOCITY,CLOSE_DRAWER_POSITION,scheduleOnRN,handleOpen,startY,withTiming,TIMING_CONFIG,TooltipActionCreators,TooltipNames,TIMING_CONFIG_EXIT,resetFocusTimer,handleClose]=this.__closure;var _velocity$get,_velocity$get2;const isDrawerAlreadyOpen=drawerOpen.get();const isPassedTriggerThreshold=positionY.get()*-1>=maxHeight.get()/2;const isHighOpenVelocity=((_velocity$get=velocity.get())!==null&&_velocity$get!==void 0?_velocity$get:0)*-1>=MIN_GESTURE_TRIGGER_VELOCITY;const isHighCloseVelocity=((_velocity$get2=velocity.get())!==null&&_velocity$get2!==void 0?_velocity$get2:0)>=MIN_GESTURE_TRIGGER_VELOCITY;const isLowerThanMinHeight=positionY.get()>CLOSE_DRAWER_POSITION;function openDrawer(){scheduleOnRN(handleOpen);startY.set(-maxHeight.get());positionY.set(withTiming(startY.get(),TIMING_CONFIG));drawerOpen.set(true);scheduleOnRN(TooltipActionCreators.acknowledgeTooltip,TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS);}function closeDrawer(){startY.set(0);positionY.set(withTiming(CLOSE_DRAWER_POSITION,TIMING_CONFIG_EXIT));drawerOpen.set(false);scheduleOnRN(resetFocusTimer);scheduleOnRN(handleClose);}if(isHighOpenVelocity&&!isDrawerAlreadyOpen||isPassedTriggerThreshold&&!isDrawerAlreadyOpen){openDrawer();}else if(isLowerThanMinHeight||isHighCloseVelocity&&isDrawerAlreadyOpen){closeDrawer();}else if(isPassedTriggerThreshold){openDrawer();}else{closeDrawer();}})" };
let closure_30 = { code: "(function FocusedControlsBottomControlsTsx8(){let[reveal,controlHeightWithOffset,sheetHeight,isLandscapeMode,safeAreaRight,sheetWidth,withTiming,TIMING_CONFIG]=this.__closure;const revealOffset=reveal?0:controlHeightWithOffset;return{position:'absolute',height:sheetHeight,overflow:'hidden',bottom:isLandscapeMode?16:0,right:isLandscapeMode?16+safeAreaRight:0,borderRadius:isLandscapeMode?8:0,width:sheetWidth,transform:[{translateY:withTiming(revealOffset,TIMING_CONFIG)}]};})" };
let closure_31 = { code: "(function FocusedControlsBottomControlsTsx9(){let[sheetHeight,offsetY,positionY]=this.__closure;return{height:sheetHeight,transform:[{translateY:offsetY+positionY.get()}]};})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/FocusedControlsBottomControls.tsx");

export default function FocusedControlsBottomControls(omitPTT) {
  let flag = omitPTT.omitPTT;
  ({ children, actionBar, expandedControls, reveal, header, onDrawerClose } = omitPTT);
  if (flag === undefined) {
    flag = false;
  }
  c0 = undefined;
  const tmp = closure_17();
  [tmp3, c0] = noop.useState(0);
  const obj = { aboveActionBar: children, actionBarControlsHeight: tmp3, expandedControls, reveal, onDrawerClose, onDrawerOpen: omitPTT.onDrawerOpen, children: null };
  const obj2 = {
    onLayout: noop.useCallback((nativeEvent) => {
      _undefined(nativeEvent.nativeEvent.layout.height);
    }, []),
    children: null
  };
  items = [header, actionBar, ];
  let tmp4Result = null;
  if (!flag) {
    const obj3 = { look: CallPTTButton.CallPTTButtonLooks.BLUR, style: tmp.ptbButton, sendCallback, stopCallback };
    tmp4Result = state(CallPTTButtonDefault, obj3);
  }
  items[2] = tmp4Result;
  obj2.children = items;
  obj.children = gesture(width, obj2);
  return state(FocusedControlsBottomDrawer, obj);
};
export const FOCUSED_CONTROLS_HEADER_HEIGHT = 54;
export { FocusedControlsBottomDrawer };