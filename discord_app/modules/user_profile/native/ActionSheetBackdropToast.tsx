// discord_app/modules/user_profile/native/ActionSheetBackdropToast.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const ACTION_SHEET_START_HEIGHT_RATIO = fn(7151).ACTION_SHEET_START_HEIGHT_RATIO;
const jsx = fn(21).jsx;
let PlatformUtils = fn(1115);
const isInIOS = PlatformUtils.isIOS();
fn(4560);
PlatformUtils = { container: null, toast: null };
PlatformUtils = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
PlatformUtils.flex = 1;
PlatformUtils.alignItems = "center";
PlatformUtils.justifyContent = "center";
PlatformUtils.container = PlatformUtils;
const createStyles = {
  position: "absolute",
  bottom: 16,
  backgroundColor: nativeDefault.colors.MOBILE_TOAST_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.round,
  paddingTop: 6,
  paddingBottom: 8,
  paddingHorizontal: 16,
};
PlatformUtils.toast = createStyles;
let closure_8 = createStyles.createStyles(PlatformUtils);
const __initData = {
  code: "function ActionSheetBackdropToastTsx1(){const{isInIOS,isExpanded,maxDynamicContentSize,TOAST_BOTTOM_MARGIN,nonExpandedHeight,ACTION_SHEET_START_HEIGHT_RATIO,TOAST_BOTTOM_GAP,positionDelta,TOAST_ANIMATION_Y_DELTA,opacity}=this.__closure;return{bottom:(isInIOS?isExpanded?maxDynamicContentSize+TOAST_BOTTOM_MARGIN:nonExpandedHeight+TOAST_BOTTOM_MARGIN:isExpanded?maxDynamicContentSize+TOAST_BOTTOM_MARGIN:ACTION_SHEET_START_HEIGHT_RATIO*maxDynamicContentSize+TOAST_BOTTOM_GAP)+ +(1-positionDelta.get())*TOAST_ANIMATION_Y_DELTA,opacity:opacity.get()};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/ActionSheetBackdropToast.tsx");

export const ActionSheetBackdropToast = function ActionSheetBackdropToast(children) {
  const isExpanded = children.isExpanded;
  const tmp = closure_8();
  const height = useWindowDimensionsDefault().height;
  let result = height * ACTION_SHEET_START_HEIGHT_RATIO;
  importDefault = result;
  const diff = height - isExpanded(5682).NAV_BAR_HEIGHT_MULTILINE - useSafeAreaInsetsDefault().top;
  dependencyMap = diff;
  let obj = isExpanded(4296);
  const sharedValue = obj.useSharedValue(0);
  let obj1 = isExpanded(4296);
  const sharedValue1 = obj1.useSharedValue(0);
  const items = [sharedValue, sharedValue1];
  const effect = sharedValue.useEffect(() => {
    let obj = { duration: 200, easing: null };
    let Easing = ReanimatedRexport.Easing;
    obj.easing = Easing.in(ReanimatedRexport.Easing.ease);
    let result = sharedValue.set(obj.withDelay(100, timing.withTiming(1, obj)));
    obj = { duration: 300, easing: null };
    const Easing2 = ReanimatedRexport.Easing;
    obj.easing = Easing2.in(ReanimatedRexport.Easing.linear);
    let result1 = sharedValue1.set(timing.withTiming(1, obj));
    return () => {
      let obj = isExpanded(4296);
      const result = sharedValue.set(obj.withDelay(200, isExpanded(4561).withTiming(0)));
      const obj2 = isExpanded(4561);
      obj = { duration: 200, easing: null };
      const Easing = isExpanded(4296).Easing;
      obj.easing = Easing.out(isExpanded(4296).Easing.exp);
      const result1 = sharedValue1.set(isExpanded(4561).withTiming(0, obj));
    };
  }, items);
  const fn = function x() {
    if (closure_7) {
      if (tmp) {
        let sum = c2 + 24;
      } else {
        sum = c1 + 24;
      }
    } else {
      if (tmp) {
        let sum1 = c2 + 24;
      } else {
        sum1 = closure_5 * c2 + 46;
      }
      const obj = { bottom: sum1 + 15 * (1 - sharedValue.get()), opacity: sharedValue1.get() };
      return obj;
    }
  };
  obj = {
    isInIOS,
    isExpanded,
    maxDynamicContentSize: diff,
    TOAST_BOTTOM_MARGIN: 24,
    nonExpandedHeight: result,
    ACTION_SHEET_START_HEIGHT_RATIO,
    TOAST_BOTTOM_GAP: 46,
    positionDelta: sharedValue,
    TOAST_ANIMATION_Y_DELTA: 15,
    opacity: sharedValue1,
  };
  fn.__closure = obj;
  fn.__workletHash = 9630436597435;
  fn.__initData = __initData;
  obj = { style: null, pointerEvents: "none", children: null };
  const items1 = [tmp.container];
  obj.style = items1;
  const animatedStyle = isExpanded(4296).useAnimatedStyle(fn);
  obj1 = {
    style: null,
    children: jsx(isExpanded(4556).Text, {
      variant: "text-sm/medium",
      color: "mobile-text-heading-primary",
      children: children.text,
    }),
  };
  const items2 = [tmp.toast, animatedStyle];
  obj1.style = items2;
  obj.children = jsx(ReanimatedRexportDefault.View, {
    style: null,
    children: jsx(isExpanded(4556).Text, {
      variant: "text-sm/medium",
      color: "mobile-text-heading-primary",
      children: children.text,
    }),
  });
  return (
    <sharedValue1 style={null} pointerEvents="none">
      {null}
    </sharedValue1>
  );
};
