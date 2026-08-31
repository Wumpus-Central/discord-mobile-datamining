// discord_app/design/components/ContextMenu/native/ContextMenuPopout.native.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../Styles/native/createStyles.tsx";

const require = arg1;
function ContextMenuDivider() {
  return callback(closure_5, { style: callback2().divider });
}
function ContextMenuBackdrop(onDismiss) {
  const visible = onDismiss.visible;
  let obj = visible(4187);
  const fn = function n() {
    const obj = { opacity: null };
    const value = visible.get();
    obj[0] = visible(closure_1_2[12]).withSpring(value, visible(closure_1_2[6]).CONTEXT_MENU_SPRING);
    return obj;
  };
  obj = { withSpring: visible(4895).withSpring, visible, CONTEXT_MENU_SPRING: visible(8757).CONTEXT_MENU_SPRING };
  fn.__closure = obj;
  fn.__workletHash = 6862317967896;
  fn.__initData = closure_16;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { blur: "none", style: animatedStyle, accessibleDismissStyle: callback3().accessibleDismiss, onDismiss: onDismiss.onPress, accessibilityLabel: null };
  const tmp = callback3();
  const tmp3 = closure_6;
  const obj4 = visible(500);
  const intl = visible(1236).intl;
  const string = intl.string;
  const t = visible(1236).t;
  if (isAndroidResult) {
    let stringResult = string(t.hPBScv);
  } else {
    stringResult = string(t.xs0juG);
  }
  obj[4] = stringResult;
  return tmp3(visible(4884).Backdrop, obj);
}
({ View: c5, StyleSheet } = get_ActivityIndicator);
({ jsx: closure_6, Fragment: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { container: null, titleContainer: null, divider: null };
createCacheKey = { position: "absolute", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, borderRadius: ThemesDefault.radii.lg, minWidth: require("CONTEXT_MENU_LONG_PRESS_DURATION_MS").CONTEXT_MENU_MIN_WIDTH };
const merged = Object.assign(ThemesDefault.shadows.SHADOW_HIGH);
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: require("CONTEXT_MENU_LONG_PRESS_DURATION_MS").CONTEXT_MENU_ITEM_PADDING };
let obj1 = { padding: require("CONTEXT_MENU_LONG_PRESS_DURATION_MS").CONTEXT_MENU_ITEM_PADDING };
createCacheKey[2] = { borderBottomWidth: require("CONTEXT_MENU_LONG_PRESS_DURATION_MS").CONTEXT_MENU_DIVIDER_HEIGHT, borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let closure_10 = { code: "function ContextMenuPopoutNativeTsx1(){const{maxHeight,height,CONTEXT_MENU_MIN_WIDTH,positionY,positionX,CONTEXT_MENU_MIN_SCALE,withSpring,interpolate,visible,CONTEXT_MENU_SPRING,transitionState,TransitionStates,runOnJS,cleanUp,onClose}=this.__closure;const visibleHeight=Math.min(maxHeight,height);const halfHeight=visibleHeight/2;const halfWidth=CONTEXT_MENU_MIN_WIDTH/2;const translateYDirection=positionY==='below'?-1:1;const translateXDirection=positionX==='left'?-1:1;const translateY=translateYDirection*halfHeight+CONTEXT_MENU_MIN_SCALE*-translateYDirection*halfHeight;const translateX=translateXDirection*halfWidth+CONTEXT_MENU_MIN_SCALE*-translateXDirection*halfWidth;return{opacity:withSpring(interpolate(visible.get(),[0,1],[0,1]),CONTEXT_MENU_SPRING,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();runOnJS(onClose)();}}),transform:[{translateX:withSpring(interpolate(visible.get(),[0,1],[translateX,0]),CONTEXT_MENU_SPRING)},{translateY:withSpring(interpolate(visible.get(),[0,1],[translateY,0]),CONTEXT_MENU_SPRING)},{scale:withSpring(interpolate(visible.get(),[0,1],[CONTEXT_MENU_MIN_SCALE,1]),CONTEXT_MENU_SPRING)}]};}" };
let closure_11 = { code: "function ContextMenuPopoutNativeTsx2(finished){const{transitionState,TransitionStates,runOnJS,cleanUp,onClose}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();runOnJS(onClose)();}}" };
let closure_12 = { code: "function update_ContextMenuPopoutNativeTsx3(e){const{updateContextMenuState,state}=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);}" };
let closure_13 = { code: "function ContextMenuPopoutNativeTsx4(){const{state,runOnJS,requestClose}=this.__closure;const{activeIndex:activeIndex}=state;const isDismiss=activeIndex.get()===-1;runOnJS(requestClose)(isDismiss);}" };
let obj3 = { accessibleDismiss: null };
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.height = "auto";
obj3[0] = obj4;
let closure_15 = createCacheKey.createStyles(obj3);
let closure_16 = { code: "function ContextMenuPopoutNativeTsx5(){const{withSpring,visible,CONTEXT_MENU_SPRING}=this.__closure;return{opacity:withSpring(visible.get(),CONTEXT_MENU_SPRING)};}" };
let obj2 = { borderBottomWidth: require("CONTEXT_MENU_LONG_PRESS_DURATION_MS").CONTEXT_MENU_DIVIDER_HEIGHT, borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE };
let result = require("set").fileFinishedImporting("design/components/ContextMenu/native/ContextMenuPopout.native.tsx");

export const ContextMenuPopout = function ContextMenuPopout(cleanUp) {
  ({ menu, transitionState } = cleanUp);
  items = transitionState;
  cleanUp = cleanUp.cleanUp;
  title = cleanUp;
  state = undefined;
  let callback2;
  let dividerIndexes;
  state = undefined;
  let requestClose;
  let onClose;
  let sharedValue;
  let diff2;
  let first;
  closure_11 = undefined;
  ({ x, positionX } = menu);
  state = positionX;
  const positionY = menu.positionY;
  callback2 = positionY;
  const height = menu.height;
  dividerIndexes = height;
  ({ items, state } = menu);
  requestClose = menu.requestClose;
  onClose = menu.onClose;
  ({ title, keyboardShouldPersistTaps } = menu);
  let str = "handled";
  if (undefined !== keyboardShouldPersistTaps) {
    str = keyboardShouldPersistTaps;
  }
  const y = menu.y;
  let obj = items(state[7]);
  let num = 0;
  if (transitionState === items(state[8]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = obj.useSharedValue(num);
  obj1 = dividerIndexes;
  items = [transitionState, sharedValue];
  const effect = dividerIndexes.useEffect(() => {
    if (items === items(state[8]).TransitionStates.YEETED) {
      const result = sharedValue.set(0);
    } else {
      const result1 = sharedValue.set(1);
    }
  }, items);
  const tmp5 = diff2();
  ({ top, bottom } = title(state[9])({ includeKeyboardHeight: true }).insets);
  obj = { ignoreKeyboard: null };
  let tmpResult = tmp(tmp2[11]);
  obj[0] = tmpResult.isAndroid();
  const size = title(state[10])(obj);
  let diff = size.height - y;
  if ("below" === positionY) {
    const diff1 = diff - bottom;
    diff2 = diff1 - tmp(tmp2[6]).CONTEXT_MENU_EDGE_OFFSET;
  } else {
    const diff3 = diff - top;
    diff2 = diff3 - tmp(tmp2[6]).CONTEXT_MENU_EDGE_OFFSET;
  }
  const tmp13 = callback2(obj1.useState(height >= diff2), 2);
  first = tmp13[0];
  closure_11 = tmp13[1];
  let str2 = "bottom";
  if ("below" === positionY) {
    str2 = "top";
  }
  obj = { [str2]: y, [positionX]: x, maxHeight: diff2, maxWidth: size.width - items(state[6]).CONTEXT_MENU_EDGE_OFFSET - x };
  tmpResult = tmp(tmp2[7]);
  class R {
    constructor() {
      result = Math.min(closure_9, dividerIndexes) / 2;
      tmp2 = items;
      tmp3 = state;
      result1 = items(state[6]).CONTEXT_MENU_MIN_WIDTH / 2;
      num = 1;
      if ("below" === closure_3) {
        num = -1;
      }
      num2 = 1;
      if ("left" === state) {
        num2 = -1;
      }
      obj = { opacity: null, transform: null };
      tmp2Result = tmp2(tmp3[12]);
      tmp2Result1 = tmp2(tmp3[7]);
      interpolateResult = tmp2Result1.interpolate(closure_8.get(), [0, 1], [0, 1]);
      fn = function t(arg0) {
        let tmp = arg0;
        if (arg0) {
          tmp = closure_0 === closure_1_0(closure_1_2[8]).TransitionStates.YEETED;
        }
        if (tmp) {
          closure_1_0(closure_1_2[7]).runOnJS(closure_1)();
          const obj = closure_1_0(closure_1_2[7]);
          closure_1_0(closure_1_2[7]).runOnJS(closure_7)();
          const obj2 = closure_1_0(closure_1_2[7]);
        }
      };
      obj = { transitionState: items, TransitionStates: tmp2(tmp3[8]).TransitionStates, runOnJS: tmp2(tmp3[7]).runOnJS, cleanUp: title, onClose };
      fn.__closure = obj;
      fn.__workletHash = 4025068986009;
      fn.__initData = closure_11;
      obj[0] = tmp2Result.withSpring(interpolateResult, tmp2(tmp3[6]).CONTEXT_MENU_SPRING, "respect-motion-settings", fn);
      obj1 = { translateX: null };
      tmp2Result2 = tmp2(tmp3[12]);
      tmp2Result3 = tmp2(tmp3[7]);
      value = closure_8.get();
      items = [, ];
      items[0] = num2 * result1 + tmp2(tmp3[6]).CONTEXT_MENU_MIN_SCALE * -num2 * result1;
      items[1] = 0;
      interpolateResult1 = tmp2Result3.interpolate(value, [0, 1], items);
      obj1[0] = tmp2Result2.withSpring(interpolateResult1, tmp2(tmp3[6]).CONTEXT_MENU_SPRING);
      items1 = [, , ];
      items1[0] = obj1;
      obj2 = { translateY: null };
      tmp2Result4 = tmp2(tmp3[12]);
      tmp2Result5 = tmp2(tmp3[7]);
      value1 = closure_8.get();
      items2 = [, ];
      items2[0] = num * result + tmp2(tmp3[6]).CONTEXT_MENU_MIN_SCALE * -num * result;
      items2[1] = 0;
      interpolateResult2 = tmp2Result5.interpolate(value1, [0, 1], items2);
      obj2[0] = tmp2Result4.withSpring(interpolateResult2, tmp2(tmp3[6]).CONTEXT_MENU_SPRING);
      items1[1] = obj2;
      obj3 = { scale: null };
      tmp2Result6 = tmp2(tmp3[12]);
      tmp2Result7 = tmp2(tmp3[7]);
      value2 = closure_8.get();
      items3 = [, ];
      items3[0] = tmp2(tmp3[6]).CONTEXT_MENU_MIN_SCALE;
      items3[1] = 1;
      interpolateResult3 = tmp2Result7.interpolate(value2, [0, 1], items3);
      obj3[0] = tmp2Result6.withSpring(interpolateResult3, tmp2(tmp3[6]).CONTEXT_MENU_SPRING);
      items1[2] = obj3;
      obj[1] = items1;
      return obj;
    }
  }
  obj1 = { maxHeight: diff2, height, CONTEXT_MENU_MIN_WIDTH: tmp(tmp2[6]).CONTEXT_MENU_MIN_WIDTH, positionY, positionX, CONTEXT_MENU_MIN_SCALE: tmp(tmp2[6]).CONTEXT_MENU_MIN_SCALE, withSpring: tmp(tmp2[12]).withSpring, interpolate: tmp(tmp2[7]).interpolate, visible: sharedValue, CONTEXT_MENU_SPRING: tmp(tmp2[6]).CONTEXT_MENU_SPRING, transitionState, TransitionStates: tmp(tmp2[8]).TransitionStates, runOnJS: tmp(tmp2[7]).runOnJS, cleanUp, onClose };
  R.__closure = obj1;
  R.__workletHash = 16778623591634;
  R.__initData = first;
  let items1 = [state, requestClose, first];
  const animatedStyle = tmpResult.useAnimatedStyle(R);
  let items2 = [diff2];
  const memo = obj1.useMemo(() => {
    function update(absoluteX) {
      const result = closure_1_0(closure_1_2[13]).updateContextMenuState(absoluteX.absoluteX, absoluteX.absoluteY, closure_5);
    }
    let obj = { updateContextMenuState: items(state[13]).updateContextMenuState, state };
    update.__closure = obj;
    update.__workletHash = 4218299258082;
    update.__initData = closure_1_12;
    const Gesture = items(state[14]).Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = Gesture.Pan().enabled(!first);
    const onStartResult = Gesture.Pan().enabled(!first).onStart(update);
    const fn = function t() {
      activeIndex = activeIndex.activeIndex;
      const value = activeIndex.get();
      closure_1_0(closure_1_2[7]).runOnJS(closure_6)(-1 === value);
    };
    obj = { state, runOnJS: items(state[7]).runOnJS, requestClose };
    fn.__closure = obj;
    fn.__workletHash = 14495067009140;
    fn.__initData = closure_1_13;
    return Gesture.Pan().enabled(!first).onStart(update).onUpdate(update).onEnd(fn);
  }, items1);
  let items3 = [requestClose];
  const callback = obj1.useCallback((nativeEvent) => {
    const rounded = Math.round(nativeEvent.nativeEvent.layout.height);
    callback(rounded >= Math.round(diff2));
  }, items2);
  const items4 = [requestClose];
  const callback1 = obj1.useCallback(() => {
    requestClose(true);
  }, items3);
  callback2 = obj1.useCallback(() => {
    requestClose(false);
  }, items4);
  const items5 = [requestClose(ContextMenuBackdrop, { onPress: callback1, visible: sharedValue }), ];
  let obj2 = { gesture: memo, children: null };
  const obj3 = { onLayout: callback, bounces: false, style: items6, keyboardShouldPersistTaps: str, accessibilityRole: "list", children: null };
  items6 = [tmp5.container, obj, animatedStyle];
  let tmp20Result = null;
  if (null != title) {
    const obj4 = { children: null };
    const obj5 = { style: null, children: null };
    obj5[0] = tmp5.titleContainer;
    const obj6 = { variant: "text-md/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: null };
    obj6[3] = title;
    obj5[1] = tmp22(tmp(tmp2[15]).Text, obj6);
    const items7 = [tmp22(state, obj5), tmp22(ContextMenuDivider, {})];
    obj4[0] = items7;
    tmp20Result = tmp20(tmp21, obj4);
  }
  const obj7 = { children: null };
  const items8 = [tmp20Result, ];
  dividerIndexes = menu.dividerIndexes;
  items8[1] = items.map((arg0, index) => {
    ({ label, action: items } = arg0);
    ({ iconSource, IconComponent, trailingIndicator, variant, accessibilityRole } = arg0);
    const diff = items.length - 1;
    let obj = { index, label, start: null, end: null, lastInSection: null, iconSource: null, IconComponent: null, trailingIndicator: null, state: null, onPress: null, variant: null, accessibilityRole: null };
    let tmp3 = 0 === index;
    if (tmp3) {
      tmp3 = null == title;
    }
    obj[2] = tmp3;
    obj[3] = index === diff;
    obj[4] = dividerIndexes.includes(index + 1);
    obj[5] = iconSource;
    obj[6] = IconComponent;
    obj[7] = trailingIndicator;
    obj[8] = state;
    obj[9] = function onPress(arg0) {
      let isAndroidResult = items(state[11]).isAndroid();
      if (isAndroidResult) {
        isAndroidResult = items(state[17]).getIsScreenReaderEnabled();
        const tmpResult = items(state[17]);
      }
      if (isAndroidResult) {
        callback();
      }
      if (closure_1_3 != null) {
        tmp6(arg0);
      }
    };
    obj[10] = variant;
    obj[11] = accessibilityRole;
    const tmp2Result = requestClose(items(state[16]).ContextMenuItem, obj, "" + label + "-" + index);
    let tmp7 = tmp2Result;
    if (dividerIndexes.includes(index)) {
      obj = { children: null };
      const _HermesInternal = HermesInternal;
      items = [tmp2(closure_1_14, {}, "divider-" + index), tmp2Result];
      obj[0] = items;
      tmp7 = sharedValue(onClose, obj);
    }
    return tmp7;
  });
  obj3[5] = items8;
  obj2[1] = sharedValue(title(state[7]).ScrollView, obj3);
  items5[1] = requestClose(items(state[14]).GestureDetector, obj2);
  obj7[0] = items5;
  return sharedValue(onClose, obj7);
};