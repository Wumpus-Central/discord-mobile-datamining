// === Module 16199: ContextMenuPopout ===

// Module 16199 (ContextMenuPopout)
import logAppStart from "logAppStart" /* 1 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import _modDef1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import native from "native" /* 5201 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5422 */;
import Backdrop from "Backdrop" /* 5728 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5737 */;
import spring_spring from "spring/spring" /* 5763 */;
import useBackPressHandlerDefault from "useBackPressHandler" /* 6156 */;
import ContextMenuState from "ContextMenuState" /* 10003 */;
import ContextMenuConstants from "ContextMenuConstants" /* 10004 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function ContextMenuDivider() {
  return metroImportDefault(hasOwnProperty, { style: closure_10().divider });
}
function ContextMenuBackdrop(hasEntered) {
  hasEntered = hasEntered.hasEntered;
  items = [closure_20, hasEntered, spring_spring.withSpring, ContextMenuConstants.CONTEXT_MENU_SPRING];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp5, tmp6, tmp7, tmp8] = items;
  class ContextMenuPopoutNativeTsx8 {
    constructor() {
      obj = { initialValues: closure_0.get() ? { opacity: 1 } : {}, animations: null };
      obj1 = { opacity: closure_1(0, closure_2) };
      obj.animations = obj1;
      return obj;
    }
  }
  const items1 = [tmp6, tmp7, tmp8];
  ContextMenuPopoutNativeTsx8.__closure = items1;
  ContextMenuPopoutNativeTsx8.__workletHash = 12904450080034;
  ContextMenuPopoutNativeTsx8.__initData = tmp5;
  const items2 = [hasEntered];
  const callback = noop.useCallback(ContextMenuPopoutNativeTsx8, items2);
  let obj = { style: StyleSheet.absoluteFill, pointerEvents: "box-none", entering: backdropEnteringAnimation, exiting: callback, children: null };
  const obj2 = { blur: "none", accessibleDismissStyle: closure_18().accessibleDismiss, onDismiss: hasEntered.onPress, accessibilityLabel: null };
  const tmp = closure_18();
  const tmp3Result = PlatformUtils;
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (isAndroidResult) {
    let stringResult = string(t.hPBScv);
  } else {
    stringResult = string(t.xs0juG);
  }
  obj2.accessibilityLabel = stringResult;
  obj.children = metroImportDefault(Backdrop.Backdrop, obj2);
  return metroImportDefault(_modDef1652.View, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroImportDefault, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
let createStyles = fn(5142);
let obj2 = { container: null, titleContainer: null, divider: null };
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj2.container = { position: "absolute", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.lg, minWidth: fn(10004).CONTEXT_MENU_MIN_WIDTH };
let obj3 = { position: "absolute", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.lg, minWidth: fn(10004).CONTEXT_MENU_MIN_WIDTH };
obj2.titleContainer = { padding: fn(10004).CONTEXT_MENU_ITEM_PADDING };
let obj4 = { padding: fn(10004).CONTEXT_MENU_ITEM_PADDING };
obj2.divider = { borderBottomWidth: fn(10004).CONTEXT_MENU_DIVIDER_HEIGHT, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_10 = createStyles.createStyles(obj2);
let items = [{ code: "(function getCollapsedOffset_ContextMenuPopoutNativeTsx1(width,height,positionX,positionY){let[CONTEXT_MENU_MIN_SCALE]=this.__closure;const scaleOffset=1-CONTEXT_MENU_MIN_SCALE;return{translateX:(positionX==='left'?-1:1)*(width/2)*scaleOffset,translateY:(positionY==='below'?-1:1)*(height/2)*scaleOffset};})" }, fn(10004).CONTEXT_MENU_MIN_SCALE];
let closure_129_0;
[tmp5, tmp6] = items;
function getCollapsedOffset(arg0, arg1, arg2, arg3) {
  let num = 1;
  const diff = 1 - require;
  let num2 = 1;
  const result = arg0 / 2;
  if ("left" === arg2) {
    num2 = -1;
  }
  const obj = { translateX: result * num2 * diff, translateY: null };
  const result1 = arg1 / 2;
  if ("below" === arg3) {
    num = -1;
  }
  obj.translateY = result1 * num * diff;
  return obj;
}
let items1 = [tmp6];
getCollapsedOffset.__closure = items1;
getCollapsedOffset.__workletHash = 16275195086554;
getCollapsedOffset.__initData = tmp5;
let closure_12 = { code: "(function ContextMenuPopoutNativeTsx2(values){let[keyboardDuration,KEYBOARD_EASING,withTiming]=this.__closure;const config={duration:keyboardDuration,easing:KEYBOARD_EASING};return{initialValues:{originY:values.currentOriginY,height:values.currentHeight},animations:{originY:withTiming(values.targetOriginY,config),height:withTiming(values.targetHeight,config)}};})" };
let closure_13 = { code: "(function ContextMenuPopoutNativeTsx3(values){let[getCollapsedOffset,positionX,positionY,CONTEXT_MENU_MIN_SCALE,withSpring,CONTEXT_MENU_SPRING,hasEnteredSV,scheduleOnRN,setHasEntered]=this.__closure;const{translateX:translateX,translateY:translateY}=getCollapsedOffset(values.targetWidth,values.targetHeight,positionX,positionY);return{initialValues:{opacity:0,transform:[{translateX:translateX},{translateY:translateY},{scale:CONTEXT_MENU_MIN_SCALE}]},animations:{opacity:withSpring(1,CONTEXT_MENU_SPRING),transform:[{translateX:withSpring(0,CONTEXT_MENU_SPRING)},{translateY:withSpring(0,CONTEXT_MENU_SPRING)},{scale:withSpring(1,CONTEXT_MENU_SPRING)}]},callback:function(finished){if(finished){hasEnteredSV.set(true);scheduleOnRN(setHasEntered,true);}}};})" };
let closure_14 = { code: "(function ContextMenuPopoutNativeTsx4(values){let[getCollapsedOffset,positionX,positionY,hasEnteredSV,withSpring,CONTEXT_MENU_SPRING,CONTEXT_MENU_MIN_SCALE,scheduleOnRN,onClose]=this.__closure;const{translateX:translateX,translateY:translateY}=getCollapsedOffset(values.currentWidth,values.currentHeight,positionX,positionY);return{initialValues:hasEnteredSV.get()?{opacity:1,transform:[{translateX:0},{translateY:0},{scale:1}]}:{},animations:{opacity:withSpring(0,CONTEXT_MENU_SPRING),transform:[{translateX:withSpring(translateX,CONTEXT_MENU_SPRING)},{translateY:withSpring(translateY,CONTEXT_MENU_SPRING)},{scale:withSpring(CONTEXT_MENU_MIN_SCALE,CONTEXT_MENU_SPRING)}]},callback:function(finished){if(finished){scheduleOnRN(onClose);}}};})" };
let closure_15 = { code: "(function update_ContextMenuPopoutNativeTsx5(e){let[updateContextMenuState,state]=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);})" };
let closure_16 = { code: "(function ContextMenuPopoutNativeTsx6(){let[state,scheduleOnRN,requestClose]=this.__closure;const{activeIndex:activeIndex}=state;const isDismiss=activeIndex.get()===-1;scheduleOnRN(requestClose,isDismiss);})" };
createStyles = fn(5142);
let obj7 = { accessibleDismiss: null };
let obj8 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj8.height = "auto";
obj7.accessibleDismiss = obj8;
let closure_18 = createStyles.createStyles(obj7);
let items2 = [{ code: "(function backdropEnteringAnimation_ContextMenuPopoutNativeTsx7(){let[withSpring,CONTEXT_MENU_SPRING]=this.__closure;return{initialValues:{opacity:0},animations:{opacity:withSpring(1,CONTEXT_MENU_SPRING)}};})" }, fn(5763).withSpring, fn(10004).CONTEXT_MENU_SPRING];
let closure_130_0;
let closure_130_1;
[tmp8, tmp9, tmp10] = items2;
function backdropEnteringAnimation() {
  const obj = { initialValues: { opacity: 0 }, animations: { opacity: logAppStart } };
  return obj;
}
let items3 = [tmp9, tmp10];
backdropEnteringAnimation.__closure = items3;
backdropEnteringAnimation.__workletHash = 10859389175128;
backdropEnteringAnimation.__initData = tmp8;
let closure_20 = { code: "(function ContextMenuPopoutNativeTsx8(){let[hasEntered,withSpring,CONTEXT_MENU_SPRING]=this.__closure;return{initialValues:hasEntered.get()?{opacity:1}:{},animations:{opacity:withSpring(0,CONTEXT_MENU_SPRING)}};})" };
const size = fn(2);
let result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenuPopout.native.tsx");

export function ContextMenuPopout(cleanUp) {
  ({ menu, transitionState } = cleanUp);
  let _require = transitionState;
  cleanUp = cleanUp.cleanUp;
  importDefault = cleanUp;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  closure_9 = undefined;
  let callback4;
  let callback5;
  ({ x, positionX, positionY, items } = menu);
  dependencyMap = items;
  state = menu.state;
  scale = state;
  const requestClose = menu.requestClose;
  noop = requestClose;
  ({ onClose, title } = menu);
  c5 = title;
  const keyboardShouldPersistTaps = menu.keyboardShouldPersistTaps;
  let str = "handled";
  if (undefined !== keyboardShouldPersistTaps) {
    str = keyboardShouldPersistTaps;
  }
  const dividerIndexes = menu.dividerIndexes;
  c6 = dividerIndexes;
  const y = menu.y;
  let items1 = [transitionState, cleanUp];
  const effect = noop.useEffect(() => {
    if (c0 === native.TransitionStates.YEETED) {
      const _requestAnimationFrame = requestAnimationFrame;
      closure_0 = requestAnimationFrame(c1);
      return () => cancelAnimationFrame(closure_0);
    }
  }, items1);
  const tmp2 = callback4();
  ({ top, bottom } = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets);
  let obj2 = { ignoreKeyboard: null };
  const tmp5 = useWindowDimensionsDefault;
  obj2.ignoreKeyboard = require("PlatformUtils").isAndroid();
  let obj3 = require("PlatformUtils");
  ({ width, height } = tmp5(obj2));
  const tmp5Result = tmp5(obj2);
  const keyboardDuration = require("useKeyboardDuration").getKeyboardDuration();
  let items2 = [closure_12, keyboardDuration, require("useKeyboardAnimatedValue").KEYBOARD_EASING, require("timing/timing").withTiming];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp9, tmp10, tmp11, tmp12] = items2;
  class ContextMenuPopoutNativeTsx2 {
    constructor(arg0) {
      obj = { duration: closure_0, easing: closure_1 };
      obj1 = { initialValues: { originY: cleanUp.currentOriginY, height: cleanUp.currentHeight }, animations: null };
      obj4 = { originY: closure_2(cleanUp.targetOriginY, obj), height: closure_2(cleanUp.targetHeight, obj) };
      obj1.animations = obj4;
      return obj1;
    }
  }
  let items3 = [tmp10, tmp11, tmp12];
  ContextMenuPopoutNativeTsx2.__closure = items3;
  ContextMenuPopoutNativeTsx2.__workletHash = 2882646665374;
  ContextMenuPopoutNativeTsx2.__initData = tmp9;
  const items4 = [keyboardDuration];
  let diff = height - y;
  const callback = noop.useCallback(ContextMenuPopoutNativeTsx2, items4);
  if ("below" === positionY) {
    const diff1 = diff - bottom;
    let diff2 = diff1 - tmp6(10004).CONTEXT_MENU_EDGE_OFFSET;
  } else {
    const diff3 = diff - top;
    diff2 = diff3 - tmp6(10004).CONTEXT_MENU_EDGE_OFFSET;
  }
  c7 = diff2;
  const tmp20 = scale(noop.useState(menu.height >= diff2), 2);
  const first = tmp20[0];
  c8 = first;
  closure_9 = tmp20[1];
  let str2 = "bottom";
  if ("below" === positionY) {
    str2 = "top";
  }
  let obj5 = { [str2]: y, [positionX]: x, maxHeight: diff2, maxWidth: width - require("ContextMenuConstants").CONTEXT_MENU_EDGE_OFFSET - x };
  let obj4 = require("useKeyboardDuration");
  [tmp23, tmp24] = scale(noop.useState(false), 2);
  const tmp19Result = scale(noop.useState(false), 2);
  const sharedValue = require("module_1652").useSharedValue(false);
  const items5 = [closure_13, callback5, positionX, positionY, require("ContextMenuConstants").CONTEXT_MENU_MIN_SCALE, require("spring/spring").withSpring, require("ContextMenuConstants").CONTEXT_MENU_SPRING, sharedValue, require("module_1705").scheduleOnRN, tmp24];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  scale = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  [tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36] = items5;
  class ContextMenuPopoutNativeTsx3 {
    constructor(arg0) {
      tmp = closure_0(cleanUp.targetWidth, cleanUp.targetHeight, closure_1, closure_2);
      obj = { initialValues: null, animations: null, callback: null };
      obj1 = { opacity: 0, transform: null };
      obj9 = { translateX: tmp.translateX };
      items = [, , ];
      items[0] = obj9;
      items[1] = { translateY: tmp.translateY };
      obj10 = { scale: closure_3 };
      items[2] = obj10;
      obj1.transform = items;
      obj.initialValues = obj1;
      obj11 = { opacity: closure_4(1, closure_5), transform: null };
      obj12 = { translateX: closure_4(0, closure_5) };
      items1 = [, , ];
      items1[0] = obj12;
      obj13 = { translateY: closure_4(0, closure_5) };
      items1[1] = obj13;
      obj14 = { scale: closure_4(1, closure_5) };
      items1[2] = obj14;
      obj11.transform = items1;
      obj.animations = obj11;
      obj.callback = function callback(arg0) {
        if (arg0) {
          const result = closure_1_6.set(true);
          closure_1_7(closure_1_8, true);
        }
      };
      return obj;
    }
  }
  const items6 = [tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36];
  ContextMenuPopoutNativeTsx3.__closure = items6;
  ContextMenuPopoutNativeTsx3.__workletHash = 10061191148247;
  ContextMenuPopoutNativeTsx3.__initData = tmp27;
  const items7 = [positionX, positionY, sharedValue];
  const items8 = [closure_14, callback5, positionX, positionY, sharedValue, , , , , ];
  const callback1 = obj.useCallback(ContextMenuPopoutNativeTsx3, items7);
  items8[5] = require("spring/spring").withSpring;
  items8[6] = require("ContextMenuConstants").CONTEXT_MENU_SPRING;
  items8[7] = require("ContextMenuConstants").CONTEXT_MENU_MIN_SCALE;
  items8[8] = require("module_1705").scheduleOnRN;
  items8[9] = onClose;
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  scale = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  [tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47] = items8;
  class ContextMenuPopoutNativeTsx4 {
    constructor(arg0) {
      tmp = closure_0(cleanUp.currentWidth, cleanUp.currentHeight, closure_1, closure_2);
      ({ translateX, translateY } = tmp);
      if (closure_3.get()) {
        obj1 = { opacity: 1, transform: null };
        items = [, , ];
        items[0] = { translateX: 0 };
        items[1] = { translateY: 0 };
        items[2] = { scale: 1 };
        obj1.transform = items;
        obj = obj1;
      } else {
        obj = {};
      }
      obj8 = { initialValues: obj, animations: null, callback: null };
      obj9 = { opacity: closure_4(0, closure_5), transform: null };
      obj10 = { translateX: closure_4(translateX, closure_5) };
      items1 = [, , ];
      items1[0] = obj10;
      obj11 = { translateY: closure_4(translateY, closure_5) };
      items1[1] = obj11;
      obj12 = { scale: closure_4(closure_6, closure_5) };
      items1[2] = obj12;
      obj9.transform = items1;
      obj8.animations = obj9;
      obj8.callback = function callback(arg0) {
        if (arg0) {
          closure_1_7(closure_1_8);
        }
      };
      return obj8;
    }
  }
  const items9 = [tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47];
  ContextMenuPopoutNativeTsx4.__closure = items9;
  ContextMenuPopoutNativeTsx4.__workletHash = 15142320178352;
  ContextMenuPopoutNativeTsx4.__initData = tmp38;
  const items10 = [positionX, positionY, onClose, sharedValue];
  const items11 = [state, requestClose, first];
  const callback2 = obj.useCallback(ContextMenuPopoutNativeTsx4, items10);
  const items12 = [diff2];
  const memo = obj.useMemo(() => {
    items = [closure_15, ContextMenuState.updateContextMenuState, c3];
    [tmp4, tmp5, tmp6] = items;
    function update(absoluteX) {
      _undefined(absoluteX.absoluteX, absoluteX.absoluteY, c1);
    }
    const items1 = [tmp5, tmp6];
    update.__closure = items1;
    update.__workletHash = 13202368878205;
    update.__initData = tmp4;
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = Gesture.Pan().enabled(!c8);
    const onStartResult = Gesture.Pan().enabled(!c8).onStart(update);
    const items2 = [closure_16, c3, _mod1705.scheduleOnRN, c4];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    [tmp7, tmp8, tmp9, tmp10] = items2;
    class ContextMenuPopoutNativeTsx6 {
      constructor() {
        activeIndex = closure_0.activeIndex;
        tmp = closure_1(closure_2, -1 === activeIndex.get());
        return;
      }
    }
    const items3 = [tmp8, tmp9, tmp10];
    ContextMenuPopoutNativeTsx6.__closure = items3;
    ContextMenuPopoutNativeTsx6.__workletHash = 8158591233922;
    ContextMenuPopoutNativeTsx6.__initData = tmp7;
    return Gesture.Pan().enabled(!c8).onStart(update).onUpdate(update).onEnd(ContextMenuPopoutNativeTsx6);
  }, items11);
  const items13 = [requestClose];
  const callback3 = obj.useCallback((nativeEvent) => {
    const rounded = Math.round(nativeEvent.nativeEvent.layout.height);
    closure_9(rounded >= Math.round(c7));
  }, items12);
  callback4 = obj.useCallback(() => {
    _undefined2(true);
  }, items13);
  const items14 = [requestClose];
  callback5 = obj.useCallback(() => {
    _undefined2(false);
  }, items14);
  const items15 = [items, title, state, callback5, dividerIndexes];
  const memo1 = obj.useMemo(() => {
    closure_0 = _undefined;
    closure_1 = c5;
    state = c3;
    closure_3 = callback5;
    closure_4 = c6;
    return _undefined.map((item, index) => {
      ({ label, action: closure_0 } = item);
      ({ iconSource, IconComponent, trailingIndicator, variant, accessibilityRole } = item);
      const diff = closure_0.length - 1;
      let obj = { index, label, start: null, end: null, lastInSection: null, iconSource: null, IconComponent: null, trailingIndicator: null, state: null, onPress: null, variant: null, accessibilityRole: null };
      let tmp3 = 0 === index;
      if (tmp3) {
        tmp3 = null == closure_1;
      }
      obj.start = tmp3;
      obj.end = index === diff;
      obj.lastInSection = closure_4.includes(index + 1);
      obj.iconSource = iconSource;
      obj.IconComponent = IconComponent;
      obj.trailingIndicator = trailingIndicator;
      obj.state = state;
      obj.onPress = function onPress(arg0) {
        let isAndroidResult = c0(dependencyMap[10]).isAndroid();
        if (isAndroidResult) {
          isAndroidResult = c0(dependencyMap[22]).getIsScreenReaderEnabled();
          const tmpResult = c0(dependencyMap[22]);
        }
        if (isAndroidResult) {
          closure_1_0();
        }
        if (closure_3 != null) {
          tmp6(arg0);
        }
        const obj = c0(dependencyMap[10]);
      };
      obj.variant = variant;
      obj.accessibilityRole = accessibilityRole;
      const tmp2Result = closure_1_7(closure_0(state[21]).ContextMenuItem, obj, "" + label + "-" + index);
      let tmp7 = tmp2Result;
      if (closure_4.includes(index)) {
        const obj2 = { children: null };
        const _HermesInternal = HermesInternal;
        items = [closure_1_7(closure_1_17, {}, "divider-" + index), tmp2Result];
        obj2.children = items;
        tmp7 = closure_1_9(closure_1_8, obj2);
      }
      return tmp7;
    });
  }, items15);
  useBackPressHandlerDefault(() => {
    callback4();
    return true;
  });
  const items16 = [c7(ContextMenuBackdrop, { onPress: callback4, hasEntered: sharedValue }), ];
  let obj6 = { gesture: memo, children: null };
  let obj7 = { onLayout: callback3, bounces: false, style: null, entering: callback1, exiting: callback2, layout: null, keyboardShouldPersistTaps: null, accessibilityRole: "list", children: null };
  const items17 = [tmp2.container, obj5];
  obj7.style = items17;
  let tmp58;
  if (tmp23) {
    if (!tmp6Result2.isAndroid()) {
      tmp58 = callback;
    }
    tmp6Result2 = tmp6(1377);
  }
  obj7.layout = tmp58;
  obj7.keyboardShouldPersistTaps = str;
  let tmp55Result = null;
  if (null != title) {
    const obj8 = { children: null };
    const obj9 = { style: tmp2.titleContainer, children: null };
    const obj10 = { variant: "body-md/semibold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
    obj9.children = tmp57(tmp6(5753).Text, obj10);
    const items18 = [tmp57(c5, obj9), tmp57(ContextMenuDivider, {})];
    obj8.children = items18;
    tmp55Result = tmp55(tmp56, obj8);
  }
  const obj11 = { children: null };
  const items19 = [tmp55Result, memo1];
  obj7.children = items19;
  obj6.children = closure_9(_modDef1652.ScrollView, obj7);
  items16[1] = c7(require("LegacyBaseButton").GestureDetector, obj6);
  obj11.children = items16;
  return closure_9(c8, obj11);
}