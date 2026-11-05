// discord_app/design/components/ContextMenu/native/ContextMenuPopout.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import useWindowDimensionsDefault from "../../../../modules/screen/useWindowDimensions.native.tsx";
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import _mod1705 from "../../../../../_runtime/metro/01705__.js";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import useIsScreenReaderEnabled from "../../../../modules/a11y/native/useIsScreenReaderEnabled.native.tsx";
import LegacyBaseButton from "../../../../../_runtime/05430_LegacyBaseButton.js";
import Backdrop from "../../Backdrop/native/Backdrop.native.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../../modules/safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import spring_spring from "../../../animation/reanimated/spring/spring.tsx";
import useBackPressHandlerDefault from "../../../../modules/routing/native/useBackPressHandler.tsx";
import ContextMenuState from "ContextMenuState.native.tsx";
import ContextMenuConstants from "ContextMenuConstants.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;
const _modDef1652 = _mod1652;

require = fn;
function ContextMenuDivider() {
  return timestampProducer(hasOwnProperty, { style: closure_9().divider });
}
function ContextMenuBackdrop(arg0) {
  ({ onPress, visible } = arg0);
  const tmp = closure_15();
  items = [closure_16, spring_spring.withSpring, visible, ContextMenuConstants.CONTEXT_MENU_SPRING];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp4, tmp5, tmp6, tmp7] = items;
  class ContextMenuPopoutNativeTsx5 {
    constructor() {
      obj = { opacity: closure_0(closure_1.get(), closure_2) };
      return obj;
    }
  }
  const items1 = [tmp5, tmp6, tmp7];
  ContextMenuPopoutNativeTsx5.__closure = items1;
  ContextMenuPopoutNativeTsx5.__workletHash = 16904658975809;
  ContextMenuPopoutNativeTsx5.__initData = tmp4;
  const animatedStyle = _mod1652.useAnimatedStyle(ContextMenuPopoutNativeTsx5);
  const obj2 = {
    blur: "none",
    style: animatedStyle,
    accessibleDismissStyle: tmp.accessibleDismiss,
    onDismiss: onPress,
    accessibilityLabel: null,
  };
  const tmp2Result = PlatformUtils;
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (isAndroidResult) {
    let stringResult = string(t.hPBScv);
  } else {
    stringResult = string(t.xs0juG);
  }
  obj2.accessibilityLabel = stringResult;
  return timestampProducer(Backdrop.Backdrop, obj2);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_6, Fragment: metroImportDefault, jsxs: closure_8 } = jsxProd);
let createStyles = fn(5143);
let obj2 = { container: null, titleContainer: null, divider: null };
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj2.container = {
  position: "absolute",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.lg,
  minWidth: fn(10063).CONTEXT_MENU_MIN_WIDTH,
};
let obj3 = {
  position: "absolute",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.lg,
  minWidth: fn(10063).CONTEXT_MENU_MIN_WIDTH,
};
obj2.titleContainer = { padding: fn(10063).CONTEXT_MENU_ITEM_PADDING };
let obj4 = { padding: fn(10063).CONTEXT_MENU_ITEM_PADDING };
obj2.divider = {
  borderBottomWidth: fn(10063).CONTEXT_MENU_DIVIDER_HEIGHT,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
};
let closure_9 = createStyles.createStyles(obj2);
let closure_10 = {
  code: "(function ContextMenuPopoutNativeTsx1(finished){let[transitionState,TransitionStates,scheduleOnRN,cleanUp,onClose]=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){scheduleOnRN(cleanUp);scheduleOnRN(onClose);}})",
};
let closure_11 = {
  code: "(function ContextMenuPopoutNativeTsx2(){let[maxHeight,height,CONTEXT_MENU_MIN_WIDTH,positionY,positionX,CONTEXT_MENU_MIN_SCALE,withSpring,interpolate,visible,CONTEXT_MENU_SPRING,_worklet_13810141093226_init_data,transitionState,TransitionStates,scheduleOnRN,cleanUp,onClose]=this.__closure;const visibleHeight=Math.min(maxHeight,height);const halfHeight=visibleHeight/2;const halfWidth=CONTEXT_MENU_MIN_WIDTH/2;const translateYDirection=positionY==='below'?-1:1;const translateXDirection=positionX==='left'?-1:1;const translateY=translateYDirection*halfHeight+CONTEXT_MENU_MIN_SCALE*-translateYDirection*halfHeight;const translateX=translateXDirection*halfWidth+CONTEXT_MENU_MIN_SCALE*-translateXDirection*halfWidth;return{opacity:withSpring(interpolate(visible.get(),[0,1],[0,1]),CONTEXT_MENU_SPRING,'respect-motion-settings',function ContextMenuPopoutNativeTsx1Factory([_worklet_13810141093226_init_data,transitionState,TransitionStates,scheduleOnRN,cleanUp,onClose]){const ContextMenuPopoutNativeTsx1=function(finished){if(finished&&transitionState===TransitionStates.YEETED){scheduleOnRN(cleanUp);scheduleOnRN(onClose);}};ContextMenuPopoutNativeTsx1.__closure=[transitionState,TransitionStates,scheduleOnRN,cleanUp,onClose];ContextMenuPopoutNativeTsx1.__workletHash=13810141093226;ContextMenuPopoutNativeTsx1.__initData=_worklet_13810141093226_init_data;return ContextMenuPopoutNativeTsx1;}([_worklet_13810141093226_init_data,transitionState,TransitionStates,scheduleOnRN,cleanUp,onClose])),transform:[{translateX:withSpring(interpolate(visible.get(),[0,1],[translateX,0]),CONTEXT_MENU_SPRING)},{translateY:withSpring(interpolate(visible.get(),[0,1],[translateY,0]),CONTEXT_MENU_SPRING)},{scale:withSpring(interpolate(visible.get(),[0,1],[CONTEXT_MENU_MIN_SCALE,1]),CONTEXT_MENU_SPRING)}]};})",
};
let closure_12 = {
  code: "(function update_ContextMenuPopoutNativeTsx3(e){let[updateContextMenuState,state]=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);})",
};
let closure_13 = {
  code: "(function ContextMenuPopoutNativeTsx4(){let[state,scheduleOnRN,requestClose]=this.__closure;const{activeIndex:activeIndex}=state;const isDismiss=activeIndex.get()===-1;scheduleOnRN(requestClose,isDismiss);})",
};
createStyles = fn(5143);
let obj7 = { accessibleDismiss: null };
let obj8 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj8.height = "auto";
obj7.accessibleDismiss = obj8;
let closure_15 = createStyles.createStyles(obj7);
let closure_16 = {
  code: "(function ContextMenuPopoutNativeTsx5(){let[withSpring,visible,CONTEXT_MENU_SPRING]=this.__closure;return{opacity:withSpring(visible.get(),CONTEXT_MENU_SPRING)};})",
};
let size = fn(2);
let result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenuPopout.native.tsx");

export function ContextMenuPopout(cleanUp) {
  ({ menu, transitionState } = cleanUp);
  _require = transitionState;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  let callback1;
  ({ x, positionX, positionY, height, items, state } = menu);
  importDefault = state;
  const requestClose = menu.requestClose;
  dependencyMap = requestClose;
  ({ title, keyboardShouldPersistTaps } = menu);
  let str = "handled";
  if (undefined !== keyboardShouldPersistTaps) {
    str = keyboardShouldPersistTaps;
  }
  const y = menu.y;
  let num = 0;
  if (transitionState === require("native").TransitionStates.MOUNTED) {
    num = 1;
  }
  const sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(num);
  _slicedToArray = sharedValue;
  let items1 = [transitionState, sharedValue];
  const effect = noop.useEffect(() => {
    if (c0 === native.TransitionStates.YEETED) {
      const result = _undefined3.set(0);
    } else {
      const result1 = _undefined3.set(1);
    }
  }, items1);
  const tmp5 = c9();
  ({ top, bottom } = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets);
  let obj3 = { ignoreKeyboard: null };
  let obj = require("../../../../../_runtime/metro/01652__.js");
  let tmp7 = useWindowDimensionsDefault;
  obj3.ignoreKeyboard = require("PlatformUtils").isAndroid();
  const size = tmp7(obj3);
  let diff = size.height - y;
  if ("below" === positionY) {
    const diff1 = diff - bottom;
    let diff2 = diff1 - tmp(10063).CONTEXT_MENU_EDGE_OFFSET;
  } else {
    const diff3 = diff - top;
    diff2 = diff3 - tmp(10063).CONTEXT_MENU_EDGE_OFFSET;
  }
  noop = diff2;
  [first, c6] = noop.useState(height >= diff2);
  c5 = first;
  let str2 = "bottom";
  if ("below" === positionY) {
    str2 = "top";
  }
  let obj4 = {
    [str2]: y,
    [positionX]: x,
    maxHeight: diff2,
    maxWidth: size.width - require("ContextMenuConstants").CONTEXT_MENU_EDGE_OFFSET - x,
  };
  let tmpResult = require("PlatformUtils");
  let items2 = [
    c11,
    diff2,
    height,
    require("ContextMenuConstants").CONTEXT_MENU_MIN_WIDTH,
    positionY,
    positionX,
    require("ContextMenuConstants").CONTEXT_MENU_MIN_SCALE,
    require("spring/spring").withSpring,
    require("../../../../../_runtime/metro/01652__.js").interpolate,
    sharedValue,
    require("ContextMenuConstants").CONTEXT_MENU_SPRING,
    c10,
    transitionState,
    require("native").TransitionStates,
    require("../../../../../_runtime/metro/01705__.js").scheduleOnRN,
    cleanUp.cleanUp,
    menu.onClose,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  callback1 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  c13 = undefined;
  c14 = undefined;
  c15 = undefined;
  [
    tmp15,
    tmp16,
    tmp17,
    tmp18,
    tmp19,
    tmp20,
    tmp21,
    tmp22,
    tmp23,
    tmp24,
    tmp25,
    tmp26,
    tmp27,
    tmp28,
    tmp29,
    tmp30,
    tmp31,
  ] = items2;
  class ContextMenuPopoutNativeTsx2 {
    constructor() {
      result = Math.min(closure_0, closure_1) / 2;
      result1 = closure_2 / 2;
      num = 1;
      if ("below" === closure_3) {
        num = -1;
      }
      num2 = 1;
      if ("left" === closure_4) {
        num2 = -1;
      }
      tmp3 = closure_6;
      tmp4 = closure_7;
      obj = closure_8;
      tmp5 = closure_7(closure_8.get(), [0, 1], [0, 1]);
      tmp6 = closure_9;
      items = [, , , , ,];
      items[0] = closure_10;
      items[1] = closure_11;
      items[2] = closure_12;
      items[3] = closure_13;
      items[4] = closure_14;
      items[5] = closure_15;
      closure_0 = undefined;
      closure_1 = undefined;
      closure_2 = undefined;
      closure_3 = undefined;
      closure_4 = undefined;
      [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      obj1 = { opacity: null, transform: null };
      class ContextMenuPopoutNativeTsx1 {
        constructor(arg0) {
          tmp = cleanUp;
          if (cleanUp) {
            tmp2 = closure_0;
            tmp3 = closure_1;
            tmp = closure_0 === closure_1.YEETED;
          }
          if (tmp) {
            tmp4 = closure_2;
            tmp5 = closure_3;
            tmp6 = closure_2(closure_3);
            tmp7 = closure_4;
            tmp8 = closure_2(closure_4);
          }
          return;
        }
      }
      items1 = [, , , ,];
      items1[0] = tmp8;
      items1[1] = tmp9;
      items1[2] = tmp10;
      items1[3] = tmp11;
      items1[4] = tmp12;
      ContextMenuPopoutNativeTsx1.__closure = items1;
      ContextMenuPopoutNativeTsx1.__workletHash = 13810141093226;
      ContextMenuPopoutNativeTsx1.__initData = tmp7;
      obj1.opacity = tmp3(tmp5, tmp6, "respect-motion-settings", ContextMenuPopoutNativeTsx1);
      obj6 = { translateX: null };
      items2 = [,];
      items2[0] = num2 * result1 + closure_5 * -num2 * result1;
      items2[1] = 0;
      obj6.translateX = tmp3(tmp4(obj.get(), [0, 1], items2), tmp6);
      items3 = [, ,];
      items3[0] = obj6;
      obj7 = { translateY: null };
      items4 = [,];
      items4[0] = num * result + closure_5 * -num * result;
      items4[1] = 0;
      obj7.translateY = tmp3(tmp4(obj.get(), [0, 1], items4), tmp6);
      items3[1] = obj7;
      obj8 = { scale: null };
      items5 = [,];
      items5[0] = closure_5;
      items5[1] = 1;
      obj8.scale = tmp3(tmp4(obj.get(), [0, 1], items5), tmp6);
      items3[2] = obj8;
      obj1.transform = items3;
      return obj1;
    }
  }
  let items3 = [
    tmp16,
    tmp17,
    tmp18,
    tmp19,
    tmp20,
    tmp21,
    tmp22,
    tmp23,
    tmp24,
    tmp25,
    tmp26,
    tmp27,
    tmp28,
    tmp29,
    tmp30,
    tmp31,
  ];
  ContextMenuPopoutNativeTsx2.__closure = items3;
  ContextMenuPopoutNativeTsx2.__workletHash = 221976609707;
  ContextMenuPopoutNativeTsx2.__initData = tmp15;
  let items4 = [state, requestClose, first];
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    ContextMenuPopoutNativeTsx2,
  );
  let items5 = [diff2];
  const memo = obj2.useMemo(() => {
    items = [closure_12, ContextMenuState.updateContextMenuState, c1];
    c1 = undefined;
    [tmp4, tmp5, tmp6] = items;
    function update(absoluteX) {
      _undefined(absoluteX.absoluteX, absoluteX.absoluteY, c1);
    }
    const items1 = [tmp5, tmp6];
    update.__closure = items1;
    update.__workletHash = 16389563863227;
    update.__initData = tmp4;
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const tmp3 = c1;
    const enabledResult = Gesture.Pan().enabled(!c5);
    const onStartResult = Gesture.Pan().enabled(!c5).onStart(update);
    const items2 = [closure_13, tmp3, _mod1705.scheduleOnRN, c2];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    [tmp7, tmp8, tmp9, tmp10] = items2;
    class ContextMenuPopoutNativeTsx4 {
      constructor() {
        activeIndex = closure_0.activeIndex;
        tmp = closure_1(closure_2, -1 === activeIndex.get());
        return;
      }
    }
    const items3 = [tmp8, tmp9, tmp10];
    ContextMenuPopoutNativeTsx4.__closure = items3;
    ContextMenuPopoutNativeTsx4.__workletHash = 3496590121856;
    ContextMenuPopoutNativeTsx4.__initData = tmp7;
    return Gesture.Pan().enabled(!c5).onStart(update).onUpdate(update).onEnd(ContextMenuPopoutNativeTsx4);
  }, items4);
  const items6 = [requestClose];
  const callback = obj2.useCallback((nativeEvent) => {
    const rounded = Math.round(nativeEvent.nativeEvent.layout.height);
    _undefined5(rounded >= Math.round(c4));
  }, items5);
  callback1 = obj2.useCallback(() => {
    state(true);
  }, items6);
  const items7 = [requestClose];
  const callback2 = obj2.useCallback(() => {
    state(false);
  }, items7);
  useBackPressHandlerDefault(() => {
    callback1();
    return true;
  });
  const items8 = [c6(ContextMenuBackdrop, { onPress: callback1, visible: sharedValue })];
  let obj5 = { gesture: memo, children: null };
  const obj6 = {
    onLayout: callback,
    bounces: false,
    style: null,
    keyboardShouldPersistTaps: str,
    accessibilityRole: "list",
    children: null,
  };
  const items9 = [tmp5.container, obj4, animatedStyle];
  obj6.style = items9;
  let tmp38Result = null;
  if (null != title) {
    const obj7 = { children: null };
    const obj8 = { style: tmp5.titleContainer, children: null };
    const obj9 = {
      variant: "body-md/semibold",
      color: "mobile-text-heading-primary",
      accessibilityRole: "header",
      children: title,
    };
    obj8.children = tmp40(tmp(5763).Text, obj9);
    const items10 = [tmp40(c5, obj8), tmp40(c14, {})];
    obj7.children = items10;
    tmp38Result = tmp38(tmp39, obj7);
  }
  const obj10 = { children: null };
  const items11 = [tmp38Result];
  closure_129_0 = items;
  closure_129_1 = title;
  closure_129_2 = state;
  closure_129_3 = callback2;
  const dividerIndexes = menu.dividerIndexes;
  items11[1] = items.map((item, index) => {
    ({ label, action: c0 } = item);
    ({ iconSource, IconComponent, trailingIndicator, variant, accessibilityRole } = item);
    const diff = _undefined.length - 1;
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
      tmp3 = null == c1;
    }
    obj.start = tmp3;
    obj.end = index === diff;
    obj.lastInSection = _undefined4.includes(index + 1);
    obj.iconSource = iconSource;
    obj.IconComponent = IconComponent;
    obj.trailingIndicator = trailingIndicator;
    obj.state = state;
    obj.onPress = function onPress(arg0) {
      let isAndroidResult = PlatformUtils.isAndroid();
      if (isAndroidResult) {
        isAndroidResult = useIsScreenReaderEnabled.getIsScreenReaderEnabled();
        const tmpResult = useIsScreenReaderEnabled;
      }
      if (isAndroidResult) {
        _undefined();
      }
      if (c3 != null) {
        tmp6(arg0);
      }
    };
    obj.variant = variant;
    obj.accessibilityRole = accessibilityRole;
    const tmp2Result = _undefined5(_undefined(state[18]).ContextMenuItem, obj, "" + label + "-" + index);
    let tmp7 = tmp2Result;
    if (_undefined4.includes(index)) {
      const obj2 = { children: null };
      const _HermesInternal = HermesInternal;
      items = [_undefined5(c14, {}, "divider-" + index), tmp2Result];
      obj2.children = items;
      tmp7 = _undefined6(callback1, obj2);
    }
    return tmp7;
  });
  obj6.children = items11;
  obj5.children = c8(_modDef1652.ScrollView, obj6);
  items8[1] = c6(require("LegacyBaseButton").GestureDetector, obj5);
  obj10.children = items8;
  return c8(callback1, obj10);
}
