// === Module 14259: ContextMenuPopout ===

// Module 14259 (ContextMenuPopout)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 4589 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import spring from "spring" /* 5597 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6140 */;
import ContextMenuState from "ContextMenuState" /* 7580 */;
import ContextMenuConstants from "ContextMenuConstants" /* 7581 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let activeIndex;

let StyleSheet;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj6;
({ View: hasOwnProperty, StyleSheet } = react_native);
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, titleContainer: obj3, divider: obj4 };
obj2 = { position: "absolute", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.lg, minWidth: ContextMenuConstants.CONTEXT_MENU_MIN_WIDTH };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj3 = { padding: ContextMenuConstants.CONTEXT_MENU_ITEM_PADDING };
obj4 = { borderBottomWidth: ContextMenuConstants.CONTEXT_MENU_DIVIDER_HEIGHT, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_9 = createStyles(obj);
let closure_10 = { code: "function ContextMenuPopoutNativeTsx1(){const{maxHeight,height,CONTEXT_MENU_MIN_WIDTH,positionY,positionX,CONTEXT_MENU_MIN_SCALE,withSpring,interpolate,visible,CONTEXT_MENU_SPRING,transitionState,TransitionStates,runOnJS,cleanUp,onClose}=this.__closure;const visibleHeight=Math.min(maxHeight,height);const halfHeight=visibleHeight/2;const halfWidth=CONTEXT_MENU_MIN_WIDTH/2;const translateYDirection=positionY==='below'?-1:1;const translateXDirection=positionX==='left'?-1:1;const translateY=translateYDirection*halfHeight+CONTEXT_MENU_MIN_SCALE*-translateYDirection*halfHeight;const translateX=translateXDirection*halfWidth+CONTEXT_MENU_MIN_SCALE*-translateXDirection*halfWidth;return{opacity:withSpring(interpolate(visible.get(),[0,1],[0,1]),CONTEXT_MENU_SPRING,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();runOnJS(onClose)();}}),transform:[{translateX:withSpring(interpolate(visible.get(),[0,1],[translateX,0]),CONTEXT_MENU_SPRING)},{translateY:withSpring(interpolate(visible.get(),[0,1],[translateY,0]),CONTEXT_MENU_SPRING)},{scale:withSpring(interpolate(visible.get(),[0,1],[CONTEXT_MENU_MIN_SCALE,1]),CONTEXT_MENU_SPRING)}]};}" };
let __initData = { code: "function ContextMenuPopoutNativeTsx2(finished){const{transitionState,TransitionStates,runOnJS,cleanUp,onClose}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();runOnJS(onClose)();}}" };
let closure_12 = { code: "function update_ContextMenuPopoutNativeTsx3(e){const{updateContextMenuState,state}=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);}" };
let closure_13 = { code: "function ContextMenuPopoutNativeTsx4(){const{state,runOnJS,requestClose}=this.__closure;const{activeIndex:activeIndex}=state;const isDismiss=activeIndex.get()===-1;runOnJS(requestClose)(isDismiss);}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = closure_9();
  if (cResult[0] !== tmp2.divider) {
    const obj2 = { style: tmp2.divider };
    const tmp6 = metroRequire(hasOwnProperty, obj2);
    cResult[0] = tmp2.divider;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  const obj = { style: closure_9().divider };
  return metroRequire(hasOwnProperty, obj);
});
createStyles = createStyles_mod;
let obj5 = { accessibleDismiss: obj6 };
obj6 = { height: "auto" };
const createStyles2 = createStyles.createStyles;
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
let closure_15 = createStyles2(obj5);
const __initData2 = { code: "function ContextMenuPopoutNativeTsx5(){const{withSpring,visible,CONTEXT_MENU_SPRING}=this.__closure;return{opacity:withSpring(visible.get(),CONTEXT_MENU_SPRING)};}" };
const __initData3 = { code: "function ContextMenuPopoutNativeTsx6(){const{withSpring,visible,CONTEXT_MENU_SPRING}=this.__closure;return{opacity:withSpring(visible.get(),CONTEXT_MENU_SPRING)};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let onPress;
  let visible;
  let obj = visible(576);
  const cResult = obj.c(5);
  ({ onPress, visible } = arg0);
  const tmp4 = closure_15();
  const fn = function e() {
    let value;
    let withSpring;
    const obj = { opacity: withSpring(value, ContextMenuConstants.CONTEXT_MENU_SPRING) };
    withSpring = spring.withSpring;
    spring;
    value = visible.get();
    return obj;
  };
  const obj2 = visible(4612);
  fn.__closure = { withSpring: visible(5597).withSpring, visible, CONTEXT_MENU_SPRING: visible(7581).CONTEXT_MENU_SPRING };
  fn.__workletHash = 6862317967896;
  fn.__initData = __initData2;
  ({ withSpring: visible(5597).withSpring, visible, CONTEXT_MENU_SPRING: visible(7581).CONTEXT_MENU_SPRING });
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let stringResult;
    const tmpResult = visible(1369);
    const isAndroidResult = tmpResult.isAndroid();
    const intl = visible(1126).intl;
    const string = intl.string;
    const t = visible(1126).t;
    if (isAndroidResult) {
      stringResult = string(t.hPBScv);
    } else {
      stringResult = string(t.xs0juG);
    }
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === animatedStyle) {
    if (cResult[2] === onPress) {
      let tmp9;
      if (cResult[3] === tmp4.accessibleDismiss) {
        tmp9 = cResult[4];
      }
      return tmp9;
    }
  }
  const obj4 = { blur: "none", style: animatedStyle, accessibleDismissStyle: tmp4.accessibleDismiss, onDismiss: onPress, accessibilityLabel: first };
  const tmp10 = closure_6(visible(5771).Backdrop, obj4);
  cResult[1] = animatedStyle;
  cResult[2] = onPress;
  cResult[3] = tmp4.accessibleDismiss;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : ((visible) => {
  let stringResult;
  visible = visible.visible;
  const onPress = visible.onPress;
  const tmp = closure_15();
  let obj = visible(4612);
  const fn = function n() {
    let value;
    let withSpring;
    const obj = { opacity: withSpring(value, ContextMenuConstants.CONTEXT_MENU_SPRING) };
    withSpring = spring.withSpring;
    spring;
    value = visible.get();
    return obj;
  };
  fn.__closure = { withSpring: visible(5597).withSpring, visible, CONTEXT_MENU_SPRING: visible(7581).CONTEXT_MENU_SPRING };
  fn.__workletHash = 7758377027899;
  fn.__initData = __initData3;
  ({ withSpring: visible(5597).withSpring, visible, CONTEXT_MENU_SPRING: visible(7581).CONTEXT_MENU_SPRING });
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { blur: "none", style: animatedStyle, accessibleDismissStyle: tmp.accessibleDismiss, onDismiss: onPress, accessibilityLabel: stringResult };
  const Backdrop = visible(5771).Backdrop;
  const obj4 = visible(1369);
  const isAndroidResult = obj4.isAndroid();
  const intl = visible(1126).intl;
  const string = intl.string;
  const t = visible(1126).t;
  if (isAndroidResult) {
    stringResult = string(t.hPBScv);
  } else {
    stringResult = string(t.xs0juG);
  }
  return closure_6(Backdrop, obj3);
});
let size = size_mod;
let result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenuPopout.native.tsx");

export const ContextMenuPopout = function ContextMenuPopout(cleanUp) {
  let ScrollView;
  let bottom;
  let items;
  let items7;
  let items8;
  let items9;
  let keyboardShouldPersistTaps;
  let menu;
  let obj6;
  let obj9;
  let positionX;
  let state;
  let title;
  let tmpResult;
  let top;
  let transitionState;
  let x;
  ({ menu, transitionState } = cleanUp);
  cleanUp = cleanUp.cleanUp;
  positionX = undefined;
  state = undefined;
  let sharedValue;
  let diff2;
  __initData = undefined;
  let callback1;
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
  const dividerIndexes = menu.dividerIndexes;
  let tmp3 = transitionState(positionX[7]);
  const useSharedValue = tmp3.useSharedValue;
  let num = 0;
  if (transitionState === transitionState(positionX[8]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  let obj = height;
  let items1 = [transitionState, sharedValue];
  const effect = height.useEffect(() => {
    if (transitionState === native.TransitionStates.YEETED) {
      const result = sharedValue.set(0);
    } else {
      const result1 = sharedValue.set(1);
    }
  }, items1);
  const tmp6 = diff2();
  let tmp7 = cleanUp;
  ({ top, bottom } = cleanUp(positionX[9])({ includeKeyboardHeight: true }).insets);
  let obj2 = { ignoreKeyboard: tmpResult.isAndroid() };
  const tmp8 = cleanUp(positionX[10]);
  tmpResult = transitionState(tmp2[11]);
  size = tmp8(obj2);
  let diff = size.height - y;
  const width = size.width;
  if ("below" === positionY) {
    const diff1 = diff - bottom;
    diff2 = diff1 - transitionState(tmp2[6]).CONTEXT_MENU_EDGE_OFFSET;
  } else {
    const diff3 = diff - top;
    diff2 = diff3 - transitionState(tmp2[6]).CONTEXT_MENU_EDGE_OFFSET;
  }
  const tmp14 = positionY(obj.useState(height >= diff2), 2);
  __initData = tmp14[1];
  let str2 = "bottom";
  if ("below" === positionY) {
    str2 = "top";
  }
  let obj3 = { [str2]: y, [positionX]: x, maxHeight: diff2, maxWidth: width - transitionState(tmp2[6]).CONTEXT_MENU_EDGE_OFFSET - x };
  const tmpResult2 = transitionState(positionX[7]);
  class G {
    constructor() {
      let CONTEXT_MENU_SPRING;
      let fn;
      let interpolate2Result;
      let interpolate3Result;
      let interpolateResult;
      let interpolateResult1;
      let items1;
      let withSpring;
      let withSpring2;
      let withSpring3;
      let withSpring4;
      const result = Math.min(diff2, height) / 2;
      const result1 = ContextMenuConstants.CONTEXT_MENU_MIN_WIDTH / 2;
      let num = 1;
      if ("below" === positionY) {
        num = -1;
      }
      let num2 = 1;
      if ("left" === positionX) {
        num2 = -1;
      }
      let obj = { opacity: withSpring(interpolateResult, CONTEXT_MENU_SPRING, "respect-motion-settings", fn), transform: items1 };
      withSpring = spring.withSpring;
      spring;
      fn = function t(arg0) {
        const tmp = arg0 && closure_1_0 === transitionState(positionX[8]).TransitionStates.YEETED;
        if (tmp) {
          const obj = transitionState(positionX[7]);
          obj.runOnJS(cleanUp)();
          const obj2 = transitionState(positionX[7]);
          obj2.runOnJS(onClose)();
        }
      };
      const tmp2Result8 = ReanimatedRexport;
      let obj2 = { transitionState, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp, onClose };
      interpolateResult = tmp2Result8.interpolate(sharedValue.get(), [0, 1], [0, 1]);
      CONTEXT_MENU_SPRING = ContextMenuConstants.CONTEXT_MENU_SPRING;
      fn.__closure = obj2;
      fn.__workletHash = 4025068986009;
      fn.__initData = __initData;
      const obj3 = { translateX: withSpring2(interpolateResult1, ContextMenuConstants.CONTEXT_MENU_SPRING) };
      withSpring2 = spring.withSpring;
      spring;
      const interpolate = ReanimatedRexport.interpolate;
      ReanimatedRexport;
      const value = sharedValue.get();
      const items = [num2 * result1 + ContextMenuConstants.CONTEXT_MENU_MIN_SCALE * -num2 * result1, 0];
      items1 = [obj3, , ];
      interpolateResult1 = interpolate(value, [0, 1], items);
      const obj4 = { translateY: withSpring3(interpolate2Result, ContextMenuConstants.CONTEXT_MENU_SPRING) };
      withSpring3 = spring.withSpring;
      spring;
      const interpolate2 = ReanimatedRexport.interpolate;
      ReanimatedRexport;
      const value3 = sharedValue.get();
      const items2 = [num * result + ContextMenuConstants.CONTEXT_MENU_MIN_SCALE * -num * result, 0];
      items1[1] = obj4;
      interpolate2Result = interpolate2(value3, [0, 1], items2);
      const obj5 = { scale: withSpring4(interpolate3Result, ContextMenuConstants.CONTEXT_MENU_SPRING) };
      withSpring4 = spring.withSpring;
      spring;
      const interpolate3 = ReanimatedRexport.interpolate;
      ReanimatedRexport;
      const value4 = sharedValue.get();
      const items3 = [ContextMenuConstants.CONTEXT_MENU_MIN_SCALE, 1];
      items1[2] = obj5;
      interpolate3Result = interpolate3(value4, [0, 1], items3);
      return obj;
    }
  }
  let obj4 = { maxHeight: diff2, height, CONTEXT_MENU_MIN_WIDTH: transitionState(tmp2[6]).CONTEXT_MENU_MIN_WIDTH, positionY, positionX, CONTEXT_MENU_MIN_SCALE: transitionState(tmp2[6]).CONTEXT_MENU_MIN_SCALE, withSpring: transitionState(tmp2[12]).withSpring, interpolate: transitionState(tmp2[7]).interpolate, visible: sharedValue, CONTEXT_MENU_SPRING: transitionState(tmp2[6]).CONTEXT_MENU_SPRING, transitionState, TransitionStates: transitionState(tmp2[8]).TransitionStates, runOnJS: transitionState(tmp2[7]).runOnJS, cleanUp, onClose };
  G.__closure = obj4;
  G.__workletHash = 16778623591634;
  G.__initData = __initData;
  let items2 = [state, requestClose, __initData];
  const animatedStyle = tmpResult2.useAnimatedStyle(G);
  let items3 = [diff2];
  const memo = obj.useMemo(() => {
    function update(absoluteX) {
      const obj = transitionState(positionX[13]);
      const result = obj.updateContextMenuState(absoluteX.absoluteX, absoluteX.absoluteY, activeIndex);
    }
    let obj = { updateContextMenuState: ContextMenuState.updateContextMenuState, state };
    update.__closure = obj;
    update.__workletHash = 4218299258082;
    update.__initData = __initData2;
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = PanResult.enabled(!first);
    const fn = function t() {
      activeIndex = activeIndex.activeIndex;
      const value = activeIndex.get();
      const obj = transitionState(positionX[7]);
      obj.runOnJS(requestClose)(-1 === value);
    };
    const onStartResult = enabledResult.onStart(update);
    const onUpdateResult = onStartResult.onUpdate(update);
    fn.__closure = { state, runOnJS: ReanimatedRexport.runOnJS, requestClose };
    fn.__workletHash = 14495067009140;
    fn.__initData = __initData3;
    ({ state, runOnJS: ReanimatedRexport.runOnJS, requestClose });
    return onUpdateResult.onEnd(fn);
  }, items2);
  const items4 = [requestClose];
  const callback = obj.useCallback((nativeEvent) => {
    const rounded = Math.round(nativeEvent.nativeEvent.layout.height);
    __initData(rounded >= Math.round(diff2));
  }, items3);
  callback1 = obj.useCallback(() => {
    requestClose(true);
  }, items4);
  const items5 = [requestClose];
  const callback2 = obj.useCallback(() => {
    requestClose(false);
  }, items5);
  tmp7(positionX[15])(() => {
    callback1();
    return true;
  });
  const items6 = [requestClose(closure_18, { onPress: callback1, visible: sharedValue }), ];
  let obj5 = { gesture: memo, children: sharedValue(ScrollView, obj6) };
  const GestureDetector = transitionState(tmp2[14]).GestureDetector;
  obj6 = { onLayout: callback, bounces: false, style: items7, keyboardShouldPersistTaps: str, accessibilityRole: "list", children: items9 };
  items7 = [tmp6.container, obj3, animatedStyle];
  let tmp22Result = null;
  ScrollView = tmp7(tmp2[7]).ScrollView;
  if (null != title) {
    const obj7 = { children: items8 };
    const obj8 = { style: tmp6.titleContainer, children: requestClose(transitionState(positionX[16]).Text, obj9) };
    obj9 = { variant: "text-md/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
    items8 = [requestClose(state, obj8), requestClose(closure_14, {})];
    tmp22Result = tmp22(tmp23, obj7);
  }
  const obj10 = { children: items6 };
  items9 = [
    tmp22Result,
    items.map((item, index) => {
      let IconComponent;
      let accessibilityRole;
      let iconSource;
      let label;
      let tmp3;
      let trailingIndicator;
      let variant;
      ({ label, action: items } = item);
      ({ iconSource, IconComponent, trailingIndicator, variant, accessibilityRole } = item);
      const diff = items.length - 1;
      let obj = {
        index,
        label,
        start: tmp3,
        end: index === diff,
        lastInSection: dividerIndexes.includes(index + 1),
        iconSource,
        IconComponent,
        trailingIndicator,
        state,
        onPress(arg0) {
          const obj = transitionState(positionX[11]);
          let isAndroidResult = obj.isAndroid();
          if (isAndroidResult) {
            const tmpResult = transitionState(positionX[20]);
            isAndroidResult = tmpResult.getIsScreenReaderEnabled();
          }
          if (isAndroidResult) {
            items();
          }
          if (callback2 != null) {
            tmp6(arg0);
          }
        },
        variant,
        accessibilityRole
      };
      tmp3 = 0 === index;
      const ContextMenuItem = items(state[19]).ContextMenuItem;
      if (tmp3) {
        tmp3 = null == title;
      }
      const tmp2Result = requestClose(ContextMenuItem, obj, "" + label + "-" + index);
      let tmp7 = tmp2Result;
      if (dividerIndexes.includes(index)) {
        const _HermesInternal = HermesInternal;
        const obj2 = { children: items };
        items = [requestClose(closure_1_14, {}, "divider-" + index), tmp2Result];
        tmp7 = sharedValue(onClose, obj2);
      }
      return tmp7;
    })
  ];
  items6[1] = requestClose(GestureDetector, obj5);
  return sharedValue(onClose, obj10);
};