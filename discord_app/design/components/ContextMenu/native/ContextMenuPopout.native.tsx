// === Module 14292: ContextMenuPopout ===

// Module 14292 (ContextMenuPopout)
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import native from "native" /* 4350 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4376 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5047 */;
import spring from "spring" /* 5061 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6766 */;
import ContextMenuState from "ContextMenuState" /* 8053 */;
import ContextMenuConstants from "ContextMenuConstants" /* 8054 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function ContextMenuDivider() {
  return timestampProducer(hasOwnProperty, { style: closure_9().divider });
}
function ContextMenuBackdrop(onDismiss) {
  const visible = onDismiss.visible;
  const tmp = closure_15();
  const fn = function n() {
    const obj = { opacity: null };
    value = visible.get();
    obj.opacity = spring.withSpring(value, ContextMenuConstants.CONTEXT_MENU_SPRING);
    return obj;
  };
  let obj = visible(4376);
  fn.__closure = { withSpring: visible(5061).withSpring, visible, CONTEXT_MENU_SPRING: visible(8054).CONTEXT_MENU_SPRING };
  fn.__workletHash = 6862317967896;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { blur: "none", style: animatedStyle, accessibleDismissStyle: tmp.accessibleDismiss, onDismiss: onDismiss.onPress, accessibilityLabel: null };
  const obj2 = { withSpring: visible(5061).withSpring, visible, CONTEXT_MENU_SPRING: visible(8054).CONTEXT_MENU_SPRING };
  const obj4 = visible(1364);
  const intl = visible(1115).intl;
  const string = intl.string;
  const t = visible(1115).t;
  if (isAndroidResult) {
    let stringResult = string(t.hPBScv);
  } else {
    stringResult = string(t.xs0juG);
  }
  obj3.accessibilityLabel = stringResult;
  return closure_6(visible(5048).Backdrop, obj3);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
let createStyles = fn(4640);
let obj2 = { container: null, titleContainer: null, divider: null };
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj2.container = { position: "absolute", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.lg, minWidth: fn(8054).CONTEXT_MENU_MIN_WIDTH };
let obj3 = { position: "absolute", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.lg, minWidth: fn(8054).CONTEXT_MENU_MIN_WIDTH };
obj2.titleContainer = { padding: fn(8054).CONTEXT_MENU_ITEM_PADDING };
let obj4 = { padding: fn(8054).CONTEXT_MENU_ITEM_PADDING };
obj2.divider = { borderBottomWidth: fn(8054).CONTEXT_MENU_DIVIDER_HEIGHT, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_9 = createStyles.createStyles(obj2);
let closure_10 = { code: "function ContextMenuPopoutNativeTsx1(){const{maxHeight,height,CONTEXT_MENU_MIN_WIDTH,positionY,positionX,CONTEXT_MENU_MIN_SCALE,withSpring,interpolate,visible,CONTEXT_MENU_SPRING,transitionState,TransitionStates,runOnJS,cleanUp,onClose}=this.__closure;const visibleHeight=Math.min(maxHeight,height);const halfHeight=visibleHeight/2;const halfWidth=CONTEXT_MENU_MIN_WIDTH/2;const translateYDirection=positionY==='below'?-1:1;const translateXDirection=positionX==='left'?-1:1;const translateY=translateYDirection*halfHeight+CONTEXT_MENU_MIN_SCALE*-translateYDirection*halfHeight;const translateX=translateXDirection*halfWidth+CONTEXT_MENU_MIN_SCALE*-translateXDirection*halfWidth;return{opacity:withSpring(interpolate(visible.get(),[0,1],[0,1]),CONTEXT_MENU_SPRING,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();runOnJS(onClose)();}}),transform:[{translateX:withSpring(interpolate(visible.get(),[0,1],[translateX,0]),CONTEXT_MENU_SPRING)},{translateY:withSpring(interpolate(visible.get(),[0,1],[translateY,0]),CONTEXT_MENU_SPRING)},{scale:withSpring(interpolate(visible.get(),[0,1],[CONTEXT_MENU_MIN_SCALE,1]),CONTEXT_MENU_SPRING)}]};}" };
let __initData = { code: "function ContextMenuPopoutNativeTsx2(finished){const{transitionState,TransitionStates,runOnJS,cleanUp,onClose}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();runOnJS(onClose)();}}" };
let closure_12 = { code: "function update_ContextMenuPopoutNativeTsx3(e){const{updateContextMenuState,state}=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);}" };
let closure_13 = { code: "function ContextMenuPopoutNativeTsx4(){const{state,runOnJS,requestClose}=this.__closure;const{activeIndex:activeIndex}=state;const isDismiss=activeIndex.get()===-1;runOnJS(requestClose)(isDismiss);}" };
createStyles = fn(4640);
let obj7 = { accessibleDismiss: null };
let obj8 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj8.height = "auto";
obj7.accessibleDismiss = obj8;
let closure_15 = createStyles.createStyles(obj7);
const __initData2 = { code: "function ContextMenuPopoutNativeTsx5(){const{withSpring,visible,CONTEXT_MENU_SPRING}=this.__closure;return{opacity:withSpring(visible.get(),CONTEXT_MENU_SPRING)};}" };
let size = fn(2);
let result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenuPopout.native.tsx");

export const ContextMenuPopout = function ContextMenuPopout(cleanUp) {
  ({ menu, transitionState } = cleanUp);
  cleanUp = cleanUp.cleanUp;
  positionX = undefined;
  state = undefined;
  let sharedValue;
  let diff2;
  __initData = undefined;
  ({ x, positionX } = menu);
  const positionY = menu.positionY;
  const height = menu.height;
  ({ items, state } = menu);
  const requestClose = menu.requestClose;
  const onClose = menu.onClose;
  ({ title, keyboardShouldPersistTaps } = menu);
  let str = "handled";
  if (undefined !== keyboardShouldPersistTaps) {
    str = keyboardShouldPersistTaps;
  }
  const y = menu.y;
  let num = 0;
  if (transitionState === transitionState(positionX[8]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = transitionState(positionX[7]).useSharedValue(num);
  let items1 = [transitionState, sharedValue];
  const effect = height.useEffect(() => {
    if (transitionState === native.TransitionStates.YEETED) {
      const result = sharedValue.set(0);
    } else {
      const result1 = sharedValue.set(1);
    }
  }, items1);
  const tmp5 = diff2();
  ({ top, bottom } = cleanUp(positionX[9])({ includeKeyboardHeight: true }).insets);
  let obj3 = { ignoreKeyboard: null };
  let obj = transitionState(positionX[7]);
  const tmp6 = cleanUp;
  let tmp7 = cleanUp(positionX[10]);
  obj3.ignoreKeyboard = transitionState(positionX[11]).isAndroid();
  const size = tmp7(obj3);
  let diff = size.height - y;
  if ("below" === positionY) {
    const diff1 = diff - bottom;
    diff2 = diff1 - transitionState(tmp2[6]).CONTEXT_MENU_EDGE_OFFSET;
  } else {
    const diff3 = diff - top;
    diff2 = diff3 - transitionState(tmp2[6]).CONTEXT_MENU_EDGE_OFFSET;
  }
  const tmp13 = positionY(height.useState(height >= diff2), 2);
  __initData = tmp13[1];
  let str2 = "bottom";
  if ("below" === positionY) {
    str2 = "top";
  }
  let obj4 = { [str2]: y, [positionX]: x, maxHeight: diff2, maxWidth: size.width - transitionState(positionX[6]).CONTEXT_MENU_EDGE_OFFSET - x };
  let tmpResult = transitionState(positionX[11]);
  class R {
    constructor() {
      result = Math.min(closure_9, height) / 2;
      tmp2 = closure_0;
      tmp3 = closure_2;
      result1 = closure_0(closure_2[6]).CONTEXT_MENU_MIN_WIDTH / 2;
      num = 1;
      if ("below" === positionY) {
        num = -1;
      }
      num2 = 1;
      if ("left" === positionX) {
        num2 = -1;
      }
      obj = { opacity: null, transform: null };
      tmp2Result = tmp2(tmp3[12]);
      tmp2Result1 = tmp2(tmp3[7]);
      interpolateResult = tmp2Result1.interpolate(closure_8.get(), [0, 1], [0, 1]);
      fn = function t(arg0) {
        let tmp = arg0;
        if (arg0) {
          tmp = closure_1_0 === transitionState(positionX[8]).TransitionStates.YEETED;
        }
        if (tmp) {
          transitionState(positionX[7]).runOnJS(cleanUp)();
          const obj = transitionState(positionX[7]);
          transitionState(positionX[7]).runOnJS(onClose)();
          const obj2 = transitionState(positionX[7]);
        }
      };
      obj1 = { transitionState, TransitionStates: tmp2(tmp3[8]).TransitionStates, runOnJS: tmp2(tmp3[7]).runOnJS, cleanUp, onClose };
      fn.__closure = obj1;
      fn.__workletHash = 4025068986009;
      fn.__initData = closure_11;
      obj.opacity = tmp2Result.withSpring(interpolateResult, tmp2(tmp3[6]).CONTEXT_MENU_SPRING, "respect-motion-settings", fn);
      obj14 = { translateX: null };
      tmp2Result2 = tmp2(tmp3[12]);
      tmp2Result3 = tmp2(tmp3[7]);
      value = closure_8.get();
      items = [, ];
      items[0] = num2 * result1 + tmp2(tmp3[6]).CONTEXT_MENU_MIN_SCALE * -num2 * result1;
      items[1] = 0;
      interpolateResult1 = tmp2Result3.interpolate(value, [0, 1], items);
      obj14.translateX = tmp2Result2.withSpring(interpolateResult1, tmp2(tmp3[6]).CONTEXT_MENU_SPRING);
      items1 = [, , ];
      items1[0] = obj14;
      obj15 = { translateY: null };
      tmp2Result4 = tmp2(tmp3[12]);
      tmp2Result5 = tmp2(tmp3[7]);
      value1 = closure_8.get();
      items2 = [, ];
      items2[0] = num * result + tmp2(tmp3[6]).CONTEXT_MENU_MIN_SCALE * -num * result;
      items2[1] = 0;
      interpolateResult2 = tmp2Result5.interpolate(value1, [0, 1], items2);
      obj15.translateY = tmp2Result4.withSpring(interpolateResult2, tmp2(tmp3[6]).CONTEXT_MENU_SPRING);
      items1[1] = obj15;
      obj16 = { scale: null };
      tmp2Result6 = tmp2(tmp3[12]);
      tmp2Result7 = tmp2(tmp3[7]);
      value2 = closure_8.get();
      items3 = [, ];
      items3[0] = tmp2(tmp3[6]).CONTEXT_MENU_MIN_SCALE;
      items3[1] = 1;
      interpolateResult3 = tmp2Result7.interpolate(value2, [0, 1], items3);
      obj16.scale = tmp2Result6.withSpring(interpolateResult3, tmp2(tmp3[6]).CONTEXT_MENU_SPRING);
      items1[2] = obj16;
      obj.transform = items1;
      return obj;
    }
  }
  const tmpResult2 = transitionState(positionX[7]);
  R.__closure = { maxHeight: diff2, height, CONTEXT_MENU_MIN_WIDTH: transitionState(positionX[6]).CONTEXT_MENU_MIN_WIDTH, positionY, positionX, CONTEXT_MENU_MIN_SCALE: transitionState(positionX[6]).CONTEXT_MENU_MIN_SCALE, withSpring: transitionState(positionX[12]).withSpring, interpolate: transitionState(positionX[7]).interpolate, visible: sharedValue, CONTEXT_MENU_SPRING: transitionState(positionX[6]).CONTEXT_MENU_SPRING, transitionState, TransitionStates: transitionState(positionX[8]).TransitionStates, runOnJS: transitionState(positionX[7]).runOnJS, cleanUp, onClose };
  R.__workletHash = 16778623591634;
  R.__initData = __initData;
  let items2 = [state, requestClose, __initData];
  const animatedStyle = tmpResult2.useAnimatedStyle(R);
  let items3 = [diff2];
  const memo = obj2.useMemo(() => {
    function update(absoluteX) {
      const result = transitionState(positionX[13]).updateContextMenuState(absoluteX.absoluteX, absoluteX.absoluteY, activeIndex);
    }
    update.__closure = { updateContextMenuState: ContextMenuState.updateContextMenuState, state };
    update.__workletHash = 4218299258082;
    update.__initData = __initData2;
    const Gesture = LegacyBaseButton.Gesture;
    const obj = { updateContextMenuState: ContextMenuState.updateContextMenuState, state };
    const PanResult = Gesture.Pan();
    const enabledResult = Gesture.Pan().enabled(!first);
    const onStartResult = Gesture.Pan().enabled(!first).onStart(update);
    const fn = function t() {
      activeIndex = activeIndex.activeIndex;
      value = activeIndex.get();
      transitionState(positionX[7]).runOnJS(requestClose)(-1 === value);
    };
    const onUpdateResult = Gesture.Pan().enabled(!first).onStart(update).onUpdate(update);
    fn.__closure = { state, runOnJS: ReanimatedRexport.runOnJS, requestClose };
    fn.__workletHash = 14495067009140;
    fn.__initData = __initData3;
    return onUpdateResult.onEnd(fn);
  }, items2);
  const items4 = [requestClose];
  const callback = obj2.useCallback((nativeEvent) => {
    const rounded = Math.round(nativeEvent.nativeEvent.layout.height);
    __initData(rounded >= Math.round(diff2));
  }, items3);
  const items5 = [requestClose];
  const callback1 = obj2.useCallback(() => {
    requestClose(true);
  }, items4);
  const callback2 = obj2.useCallback(() => {
    requestClose(false);
  }, items5);
  const items6 = [requestClose(ContextMenuBackdrop, { onPress: callback1, visible: sharedValue }), ];
  const obj6 = { gesture: memo, children: null };
  const obj7 = { onLayout: callback, bounces: false, style: null, keyboardShouldPersistTaps: str, accessibilityRole: "list", children: null };
  const items7 = [tmp5.container, obj4, animatedStyle];
  obj7.style = items7;
  let tmp20Result = null;
  if (null != title) {
    const obj8 = { children: null };
    const obj9 = { style: tmp5.titleContainer, children: null };
    const obj10 = { variant: "text-md/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
    obj9.children = tmp22(transitionState(tmp2[15]).Text, obj10);
    const items8 = [tmp22(state, obj9), tmp22(ContextMenuDivider, {})];
    obj8.children = items8;
    tmp20Result = tmp20(tmp21, obj8);
  }
  const obj11 = { children: null };
  const items9 = [tmp20Result, ];
  closure_129_0 = items;
  closure_129_1 = title;
  closure_129_2 = state;
  closure_129_3 = callback2;
  const dividerIndexes = menu.dividerIndexes;
  items9[1] = items.map((item, index) => {
    ({ label, action: transitionState } = item);
    ({ iconSource, IconComponent, trailingIndicator, variant, accessibilityRole } = item);
    const diff = transitionState.length - 1;
    let obj = { index, label, start: null, end: null, lastInSection: null, iconSource: null, IconComponent: null, trailingIndicator: null, state: null, onPress: null, variant: null, accessibilityRole: null };
    let tmp3 = 0 === index;
    if (tmp3) {
      tmp3 = null == cleanUp;
    }
    obj.start = tmp3;
    obj.end = index === diff;
    obj.lastInSection = height.includes(index + 1);
    obj.iconSource = iconSource;
    obj.IconComponent = IconComponent;
    obj.trailingIndicator = trailingIndicator;
    obj.state = positionX;
    obj.onPress = function onPress(arg0) {
      let isAndroidResult = PlatformUtils.isAndroid();
      if (isAndroidResult) {
        isAndroidResult = useIsScreenReaderEnabled.getIsScreenReaderEnabled();
        const tmpResult = useIsScreenReaderEnabled;
      }
      if (isAndroidResult) {
        transitionState();
      }
      if (positionY != null) {
        tmp6(arg0);
      }
    };
    obj.variant = variant;
    obj.accessibilityRole = accessibilityRole;
    const tmp2Result = requestClose(transitionState(positionX[16]).ContextMenuItem, obj, "" + label + "-" + index);
    let tmp7 = tmp2Result;
    if (height.includes(index)) {
      const obj2 = { children: null };
      const _HermesInternal = HermesInternal;
      const items = [requestClose(ContextMenuDivider, {}, "divider-" + index), tmp2Result];
      obj2.children = items;
      tmp7 = sharedValue(onClose, obj2);
    }
    return tmp7;
  });
  obj7.children = items9;
  obj6.children = sharedValue(tmp6(positionX[7]).ScrollView, obj7);
  items6[1] = requestClose(transitionState(positionX[14]).GestureDetector, obj6);
  obj11.children = items6;
  return sharedValue(onClose, obj11);
};