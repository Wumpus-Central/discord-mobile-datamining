// discord_app/modules/user_profile/native/ActionSheetBackdropToast.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import _mod1652 from "../../../../_runtime/metro/01652__.js";
import timing_timing from "../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const _modDef1652 = tmp2(1652);
require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
let closure_5 = fn(5419).ACTION_SHEET_START_HEIGHT_RATIO;
let jsx = fn(21).jsx;
const PlatformUtils = fn(1377);
let closure_7 = PlatformUtils.isIOS();
const createStyles = fn(5170);
let obj3 = { container: null, toast: null };
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.flex = 1;
obj4.alignItems = "center";
obj4.justifyContent = "center";
obj3.container = obj4;
obj3.toast = {
  position: "absolute",
  bottom: 16,
  backgroundColor: nativeDefault.colors.MOBILE_TOAST_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.round,
  paddingTop: 6,
  paddingBottom: 8,
  paddingHorizontal: 16,
};
let closure_8 = createStyles.createStyles(obj3);
let closure_9 = {
  code: "(function ActionSheetBackdropToastTsx1(){let[isInIOS,isExpanded,maxDynamicContentSize,TOAST_BOTTOM_MARGIN,nonExpandedHeight,ACTION_SHEET_START_HEIGHT_RATIO,TOAST_BOTTOM_GAP,positionDelta,TOAST_ANIMATION_Y_DELTA,opacity]=this.__closure;return{bottom:(isInIOS?isExpanded?maxDynamicContentSize+TOAST_BOTTOM_MARGIN:nonExpandedHeight+TOAST_BOTTOM_MARGIN:isExpanded?maxDynamicContentSize+TOAST_BOTTOM_MARGIN:ACTION_SHEET_START_HEIGHT_RATIO*maxDynamicContentSize+TOAST_BOTTOM_GAP)+ +(1-positionDelta.get())*TOAST_ANIMATION_Y_DELTA,opacity:opacity.get()};})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/ActionSheetBackdropToast.tsx");

export function ActionSheetBackdropToast(arg0) {
  _require = undefined;
  importDefault = undefined;
  ({ text, isExpanded } = arg0);
  const tmp = c8();
  const height = useWindowDimensionsDefault().height;
  const sharedValue = require("../../../../_runtime/metro/01652__.js").useSharedValue(0);
  _require = sharedValue;
  let obj = require("../../../../_runtime/metro/01652__.js");
  const tmp4 = _require;
  const sharedValue1 = require("../../../../_runtime/metro/01652__.js").useSharedValue(0);
  items = [sharedValue, sharedValue1];
  const effect = noop.useEffect(() => {
    let obj = _mod1652;
    const obj3 = { duration: 200, easing: null };
    let Easing = _mod1652.Easing;
    obj3.easing = Easing.in(_mod1652.Easing.ease);
    let result = _undefined.set(obj.withDelay(100, timing_timing.withTiming(1, obj3)));
    const obj5 = { duration: 300, easing: null };
    const Easing2 = _mod1652.Easing;
    obj5.easing = Easing2.in(_mod1652.Easing.linear);
    let result1 = _undefined2.set(timing_timing.withTiming(1, obj5));
    return () => {
      const obj = c0(1652);
      const result = _undefined.set(obj.withDelay(200, c0(5400).withTiming(0)));
      const obj2 = c0(5400);
      const obj4 = { duration: 200, easing: null };
      const Easing = c0(1652).Easing;
      obj4.easing = Easing.out(c0(1652).Easing.exp);
      const result1 = _undefined2.set(c0(5400).withTiming(0, obj4));
    };
  }, items);
  let obj2 = require("../../../../_runtime/metro/01652__.js");
  const items1 = [
    c9,
    c7,
    isExpanded,
    height - require("NavigatorConstants").NAV_BAR_HEIGHT_MULTILINE - useSafeAreaInsetsDefault().top,
    24,
    height * c5,
    c5,
    46,
    sharedValue,
    15,
    sharedValue1,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  jsx = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items1;
  class ActionSheetBackdropToastTsx1 {
    constructor() {
      tmp = closure_1;
      if (closure_0) {
        if (tmp) {
          tmp11 = closure_2;
          tmp12 = closure_3;
          sum = closure_2 + closure_3;
        } else {
          tmp8 = closure_4;
          tmp9 = closure_3;
          sum = closure_4 + closure_3;
        }
        tmp13 = sum;
      } else {
        if (tmp) {
          tmp6 = closure_2;
          tmp7 = closure_3;
          sum1 = closure_2 + closure_3;
        } else {
          tmp2 = closure_5;
          tmp3 = closure_2;
          tmp4 = closure_6;
          sum1 = closure_5 * closure_2 + closure_6;
        }
        obj = { bottom: null, opacity: null };
        tmp14 = closure_7;
        num = 1;
        tmp15 = closure_8;
        obj.bottom = sum1 + (1 - closure_7.get()) * closure_8;
        tmp16 = closure_9;
        obj.opacity = closure_9.get();
        return obj;
      }
      return;
    }
  }
  const items2 = [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
  ActionSheetBackdropToastTsx1.__closure = items2;
  ActionSheetBackdropToastTsx1.__workletHash = 8014413461314;
  ActionSheetBackdropToastTsx1.__initData = tmp8;
  let obj4 = { style: tmp.container, pointerEvents: "none", children: null };
  const animatedStyle = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(ActionSheetBackdropToastTsx1);
  let obj5 = {
    style: null,
    accessibilityLiveRegion: "polite",
    children: jsx(tmp4(5781).Text, { variant: "body-sm/medium", color: "mobile-text-heading-primary", children: text }),
  };
  const items3 = [tmp.toast, animatedStyle];
  obj5.style = items3;
  obj4.children = jsx(_modDef1652.View, {
    style: null,
    accessibilityLiveRegion: "polite",
    children: jsx(tmp4(5781).Text, { variant: "body-sm/medium", color: "mobile-text-heading-primary", children: text }),
  });
  return (
    <c4 style={tmp.container} pointerEvents="none">
      {null}
    </c4>
  );
}
