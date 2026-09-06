// discord_app/design/components/ContextMenu/native/ContextMenuPopout.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import useIsScreenReaderEnabled from "../../../../modules/a11y/native/useIsScreenReaderEnabled.native.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import LegacyBaseButton from "../../../../../_runtime/06655_LegacyBaseButton.js";
import ContextMenuState from "ContextMenuState.native.tsx";
import ContextMenuConstants from "ContextMenuConstants.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function ContextMenuDivider() {
  return timestampProducer(hasOwnProperty, { style: closure_9().divider });
}
function ContextMenuBackdrop(onDismiss) {
  const visible = onDismiss.visible;
  visible(4296);
  const fn = function n() {
    const obj = { opacity: null };
    value = visible.get();
    obj.opacity = spring.withSpring(value, ContextMenuConstants.CONTEXT_MENU_SPRING);
    return obj;
  };
  let obj = { withSpring: visible(4974).withSpring, visible, CONTEXT_MENU_SPRING: visible(8668).CONTEXT_MENU_SPRING };
  fn.__closure = obj;
  fn.__workletHash = 6862317967896;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = {
    blur: "none",
    style: animatedStyle,
    accessibleDismissStyle: closure_15().accessibleDismiss,
    onDismiss: onDismiss.onPress,
    accessibilityLabel: null,
  };
  const tmp = closure_15();
  const obj4 = visible(1115);
  const intl = visible(1114).intl;
  const string = intl.string;
  const t = visible(1114).t;
  if (isAndroidResult) {
    let stringResult = string(t.hPBScv);
  } else {
    stringResult = string(t.xs0juG);
  }
  obj.accessibilityLabel = stringResult;
  return closure_6(visible(4963).Backdrop, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { container: null, titleContainer: null, divider: null };
createStyles = {
  position: "absolute",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.lg,
  minWidth: fn(8668).CONTEXT_MENU_MIN_WIDTH,
};
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
createStyles.container = createStyles;
createStyles.titleContainer = { padding: fn(8668).CONTEXT_MENU_ITEM_PADDING };
let obj1 = { padding: fn(8668).CONTEXT_MENU_ITEM_PADDING };
createStyles.divider = {
  borderBottomWidth: fn(8668).CONTEXT_MENU_DIVIDER_HEIGHT,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
};
let closure_9 = createStyles.createStyles(createStyles);
let closure_10 = {
  code: "function ContextMenuPopoutNativeTsx1(){const{maxHeight,height,CONTEXT_MENU_MIN_WIDTH,positionY,positionX,CONTEXT_MENU_MIN_SCALE,withSpring,interpolate,visible,CONTEXT_MENU_SPRING,transitionState,TransitionStates,runOnJS,cleanUp,onClose}=this.__closure;const visibleHeight=Math.min(maxHeight,height);const halfHeight=visibleHeight/2;const halfWidth=CONTEXT_MENU_MIN_WIDTH/2;const translateYDirection=positionY==='below'?-1:1;const translateXDirection=positionX==='left'?-1:1;const translateY=translateYDirection*halfHeight+CONTEXT_MENU_MIN_SCALE*-translateYDirection*halfHeight;const translateX=translateXDirection*halfWidth+CONTEXT_MENU_MIN_SCALE*-translateXDirection*halfWidth;return{opacity:withSpring(interpolate(visible.get(),[0,1],[0,1]),CONTEXT_MENU_SPRING,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();runOnJS(onClose)();}}),transform:[{translateX:withSpring(interpolate(visible.get(),[0,1],[translateX,0]),CONTEXT_MENU_SPRING)},{translateY:withSpring(interpolate(visible.get(),[0,1],[translateY,0]),CONTEXT_MENU_SPRING)},{scale:withSpring(interpolate(visible.get(),[0,1],[CONTEXT_MENU_MIN_SCALE,1]),CONTEXT_MENU_SPRING)}]};}",
};
let __initData = {
  code: "function ContextMenuPopoutNativeTsx2(finished){const{transitionState,TransitionStates,runOnJS,cleanUp,onClose}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();runOnJS(onClose)();}}",
};
let closure_12 = {
  code: "function update_ContextMenuPopoutNativeTsx3(e){const{updateContextMenuState,state}=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);}",
};
let closure_13 = {
  code: "function ContextMenuPopoutNativeTsx4(){const{state,runOnJS,requestClose}=this.__closure;const{activeIndex:activeIndex}=state;const isDismiss=activeIndex.get()===-1;runOnJS(requestClose)(isDismiss);}",
};
createStyles = fn(4560);
let obj3 = { accessibleDismiss: null };
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.height = "auto";
obj3.accessibleDismiss = obj4;
let closure_15 = createStyles.createStyles(obj3);
const __initData2 = {
  code: "function ContextMenuPopoutNativeTsx5(){const{withSpring,visible,CONTEXT_MENU_SPRING}=this.__closure;return{opacity:withSpring(visible.get(),CONTEXT_MENU_SPRING)};}",
};
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
  let obj = transitionState(positionX[7]);
  let num = 0;
  if (transitionState === transitionState(positionX[8]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = obj.useSharedValue(num);
  let obj1 = height;
  items = [transitionState, sharedValue];
  const effect = height.useEffect(() => {
    if (transitionState === native.TransitionStates.YEETED) {
      const result = sharedValue.set(0);
    } else {
      const result1 = sharedValue.set(1);
    }
  }, items);
  const tmp5 = diff2();
  ({ top, bottom } = cleanUp(positionX[9])({ includeKeyboardHeight: true }).insets);
  obj = { ignoreKeyboard: null };
  let tmpResult = transitionState(tmp2[11]);
  obj.ignoreKeyboard = tmpResult.isAndroid();
  const size = cleanUp(positionX[10])(obj);
  let diff = size.height - y;
  if ("below" === positionY) {
    const diff1 = diff - bottom;
    diff2 = diff1 - transitionState(tmp2[6]).CONTEXT_MENU_EDGE_OFFSET;
  } else {
    const diff3 = diff - top;
    diff2 = diff3 - transitionState(tmp2[6]).CONTEXT_MENU_EDGE_OFFSET;
  }
  const tmp13 = positionY(obj1.useState(height >= diff2), 2);
  __initData = tmp13[1];
  let str2 = "bottom";
  if ("below" === positionY) {
    str2 = "top";
  }
  obj = {
    [str2]: y,
    [positionX]: x,
    maxHeight: diff2,
    maxWidth: size.width - transitionState(positionX[6]).CONTEXT_MENU_EDGE_OFFSET - x,
  };
  tmpResult = transitionState(tmp2[7]);
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
      obj = {
        transitionState,
        TransitionStates: tmp2(tmp3[8]).TransitionStates,
        runOnJS: tmp2(tmp3[7]).runOnJS,
        cleanUp,
        onClose,
      };
      fn.__closure = obj;
      fn.__workletHash = 4025068986009;
      fn.__initData = closure_11;
      obj.opacity = tmp2Result.withSpring(
        interpolateResult,
        tmp2(tmp3[6]).CONTEXT_MENU_SPRING,
        "respect-motion-settings",
        fn,
      );
      obj1 = { translateX: null };
      tmp2Result2 = tmp2(tmp3[12]);
      tmp2Result3 = tmp2(tmp3[7]);
      value = closure_8.get();
      items = [,];
      items[0] = num2 * result1 + tmp2(tmp3[6]).CONTEXT_MENU_MIN_SCALE * -num2 * result1;
      items[1] = 0;
      interpolateResult1 = tmp2Result3.interpolate(value, [0, 1], items);
      obj1.translateX = tmp2Result2.withSpring(interpolateResult1, tmp2(tmp3[6]).CONTEXT_MENU_SPRING);
      items1 = [, ,];
      items1[0] = obj1;
      obj2 = { translateY: null };
      tmp2Result4 = tmp2(tmp3[12]);
      tmp2Result5 = tmp2(tmp3[7]);
      value1 = closure_8.get();
      items2 = [,];
      items2[0] = num * result + tmp2(tmp3[6]).CONTEXT_MENU_MIN_SCALE * -num * result;
      items2[1] = 0;
      interpolateResult2 = tmp2Result5.interpolate(value1, [0, 1], items2);
      obj2.translateY = tmp2Result4.withSpring(interpolateResult2, tmp2(tmp3[6]).CONTEXT_MENU_SPRING);
      items1[1] = obj2;
      obj3 = { scale: null };
      tmp2Result6 = tmp2(tmp3[12]);
      tmp2Result7 = tmp2(tmp3[7]);
      value2 = closure_8.get();
      items3 = [,];
      items3[0] = tmp2(tmp3[6]).CONTEXT_MENU_MIN_SCALE;
      items3[1] = 1;
      interpolateResult3 = tmp2Result7.interpolate(value2, [0, 1], items3);
      obj3.scale = tmp2Result6.withSpring(interpolateResult3, tmp2(tmp3[6]).CONTEXT_MENU_SPRING);
      items1[2] = obj3;
      obj.transform = items1;
      return obj;
    }
  }
  obj1 = {
    maxHeight: diff2,
    height,
    CONTEXT_MENU_MIN_WIDTH: transitionState(tmp2[6]).CONTEXT_MENU_MIN_WIDTH,
    positionY,
    positionX,
    CONTEXT_MENU_MIN_SCALE: transitionState(tmp2[6]).CONTEXT_MENU_MIN_SCALE,
    withSpring: transitionState(tmp2[12]).withSpring,
    interpolate: transitionState(tmp2[7]).interpolate,
    visible: sharedValue,
    CONTEXT_MENU_SPRING: transitionState(tmp2[6]).CONTEXT_MENU_SPRING,
    transitionState,
    TransitionStates: transitionState(tmp2[8]).TransitionStates,
    runOnJS: transitionState(tmp2[7]).runOnJS,
    cleanUp,
    onClose,
  };
  R.__closure = obj1;
  R.__workletHash = 16778623591634;
  R.__initData = __initData;
  let items1 = [state, requestClose, __initData];
  const animatedStyle = tmpResult.useAnimatedStyle(R);
  let items2 = [diff2];
  const memo = obj1.useMemo(() => {
    function update(absoluteX) {
      const result = transitionState(positionX[13]).updateContextMenuState(
        absoluteX.absoluteX,
        absoluteX.absoluteY,
        activeIndex,
      );
    }
    let obj = { updateContextMenuState: ContextMenuState.updateContextMenuState, state };
    update.__closure = obj;
    update.__workletHash = 4218299258082;
    update.__initData = __initData2;
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = Gesture.Pan().enabled(!first);
    const onStartResult = Gesture.Pan().enabled(!first).onStart(update);
    const fn = function t() {
      activeIndex = activeIndex.activeIndex;
      value = activeIndex.get();
      transitionState(positionX[7]).runOnJS(requestClose)(-1 === value);
    };
    obj = { state, runOnJS: ReanimatedRexport.runOnJS, requestClose };
    fn.__closure = obj;
    fn.__workletHash = 14495067009140;
    fn.__initData = __initData3;
    return Gesture.Pan().enabled(!first).onStart(update).onUpdate(update).onEnd(fn);
  }, items1);
  let items3 = [requestClose];
  const callback = obj1.useCallback((nativeEvent) => {
    const rounded = Math.round(nativeEvent.nativeEvent.layout.height);
    __initData(rounded >= Math.round(diff2));
  }, items2);
  const items4 = [requestClose];
  const callback1 = obj1.useCallback(() => {
    requestClose(true);
  }, items3);
  const callback2 = obj1.useCallback(() => {
    requestClose(false);
  }, items4);
  const items5 = [requestClose(ContextMenuBackdrop, { onPress: callback1, visible: sharedValue })];
  let obj2 = { gesture: memo, children: null };
  const obj3 = {
    onLayout: callback,
    bounces: false,
    style: null,
    keyboardShouldPersistTaps: str,
    accessibilityRole: "list",
    children: null,
  };
  const items6 = [tmp5.container, obj, animatedStyle];
  obj3.style = items6;
  let tmp20Result = null;
  if (null != title) {
    const obj4 = { children: null };
    const obj5 = { style: tmp5.titleContainer, children: null };
    const obj6 = {
      variant: "text-md/bold",
      color: "mobile-text-heading-primary",
      accessibilityRole: "header",
      children: title,
    };
    obj5.children = tmp22(transitionState(tmp2[15]).Text, obj6);
    const items7 = [tmp22(state, obj5), tmp22(ContextMenuDivider, {})];
    obj4.children = items7;
    tmp20Result = tmp20(tmp21, obj4);
  }
  const obj7 = { children: null };
  const items8 = [tmp20Result];
  closure_129_0 = items;
  closure_129_1 = title;
  closure_129_2 = state;
  closure_129_3 = callback2;
  const dividerIndexes = menu.dividerIndexes;
  items8[1] = items.map((item, index) => {
    ({ label, action: transitionState } = item);
    ({ iconSource, IconComponent, trailingIndicator, variant, accessibilityRole } = item);
    const diff = transitionState.length - 1;
    let obj = {
      index,
      label,
      start: null,
      end: null,
      lastInSection: null,
      iconSource: null,
      IconComponent: null,
      trailingIndicator: null,
      state: null,
      onPress: null,
      variant: null,
      accessibilityRole: null,
    };
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
      obj = { children: null };
      const _HermesInternal = HermesInternal;
      const items = [requestClose(ContextMenuDivider, {}, "divider-" + index), tmp2Result];
      obj.children = items;
      tmp7 = sharedValue(onClose, obj);
    }
    return tmp7;
  });
  obj3.children = items8;
  obj2.children = sharedValue(cleanUp(positionX[7]).ScrollView, obj3);
  items5[1] = requestClose(transitionState(positionX[14]).GestureDetector, obj2);
  obj7.children = items5;
  return sharedValue(onClose, obj7);
};
