// === Module 14984: ActionSheetBackdropToast ===

// Module 14984 (ActionSheetBackdropToast)
import nativeDefault from "native" /* 575 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1492 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1626 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import timing from "timing" /* 5249 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const ACTION_SHEET_START_HEIGHT_RATIO = fn(5268).ACTION_SHEET_START_HEIGHT_RATIO;
const jsx = fn(21).jsx;
const PlatformUtils = fn(1376);
const isInIOS = PlatformUtils.isIOS();
const createStyles = fn(5009);
let obj3 = { container: null, toast: null };
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.flex = 1;
obj4.alignItems = "center";
obj4.justifyContent = "center";
obj3.container = obj4;
obj3.toast = { position: "absolute", bottom: 16, backgroundColor: nativeDefault.colors.MOBILE_TOAST_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round, paddingTop: 6, paddingBottom: 8, paddingHorizontal: 16 };
let closure_8 = createStyles.createStyles(obj3);
const __initData = { code: "function ActionSheetBackdropToastTsx1(){const{isInIOS,isExpanded,maxDynamicContentSize,TOAST_BOTTOM_MARGIN,nonExpandedHeight,ACTION_SHEET_START_HEIGHT_RATIO,TOAST_BOTTOM_GAP,positionDelta,TOAST_ANIMATION_Y_DELTA,opacity}=this.__closure;return{bottom:(isInIOS?isExpanded?maxDynamicContentSize+TOAST_BOTTOM_MARGIN:nonExpandedHeight+TOAST_BOTTOM_MARGIN:isExpanded?maxDynamicContentSize+TOAST_BOTTOM_MARGIN:ACTION_SHEET_START_HEIGHT_RATIO*maxDynamicContentSize+TOAST_BOTTOM_GAP)+ +(1-positionDelta.get())*TOAST_ANIMATION_Y_DELTA,opacity:opacity.get()};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/ActionSheetBackdropToast.tsx");

export function ActionSheetBackdropToast(children) {
  const isExpanded = children.isExpanded;
  const tmp = closure_8();
  const height = useWindowDimensionsDefault().height;
  let result = height * ACTION_SHEET_START_HEIGHT_RATIO;
  importDefault = result;
  const diff = height - isExpanded(5581).NAV_BAR_HEIGHT_MULTILINE - useSafeAreaInsetsDefault().top;
  dependencyMap = diff;
  const sharedValue = isExpanded(5090).useSharedValue(0);
  let obj = isExpanded(5090);
  const sharedValue1 = isExpanded(5090).useSharedValue(0);
  const items = [sharedValue, sharedValue1];
  const effect = sharedValue.useEffect(() => {
    let obj = ReanimatedRexport;
    const obj3 = { duration: 200, easing: null };
    let Easing = ReanimatedRexport.Easing;
    obj3.easing = Easing.in(ReanimatedRexport.Easing.ease);
    let result = sharedValue.set(obj.withDelay(100, timing.withTiming(1, obj3)));
    const obj5 = { duration: 300, easing: null };
    const Easing2 = ReanimatedRexport.Easing;
    obj5.easing = Easing2.in(ReanimatedRexport.Easing.linear);
    let result1 = sharedValue1.set(timing.withTiming(1, obj5));
    return () => {
      const obj = isExpanded(5090);
      const result = sharedValue.set(obj.withDelay(200, isExpanded(5249).withTiming(0)));
      const obj2 = isExpanded(5249);
      const obj4 = { duration: 200, easing: null };
      const Easing = isExpanded(5090).Easing;
      obj4.easing = Easing.out(isExpanded(5090).Easing.exp);
      const result1 = sharedValue1.set(isExpanded(5249).withTiming(0, obj4));
    };
  }, items);
  let obj2 = isExpanded(5090);
  const fn = function x() {
    if (closure_7) {
      if (isExpanded) {
        let sum = c2 + 24;
      } else {
        sum = c1 + 24;
      }
    } else {
      if (isExpanded) {
        let sum1 = c2 + 24;
      } else {
        sum1 = closure_5 * c2 + 46;
      }
      const obj = { bottom: sum1 + 15 * (1 - sharedValue.get()), opacity: sharedValue1.get() };
      return obj;
    }
  };
  fn.__closure = { isInIOS, isExpanded, maxDynamicContentSize: diff, TOAST_BOTTOM_MARGIN: 24, nonExpandedHeight: result, ACTION_SHEET_START_HEIGHT_RATIO, TOAST_BOTTOM_GAP: 46, positionDelta: sharedValue, TOAST_ANIMATION_Y_DELTA: 15, opacity: sharedValue1 };
  fn.__workletHash = 9630436597435;
  fn.__initData = __initData;
  let obj5 = { style: tmp.container, pointerEvents: "none", children: null };
  const animatedStyle = isExpanded(5090).useAnimatedStyle(fn);
  const obj6 = { style: null, accessibilityLiveRegion: "polite", children: jsx(isExpanded(5619).Text, { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: children.text }) };
  const items1 = [tmp.toast, animatedStyle];
  obj6.style = items1;
  obj5.children = jsx(ReanimatedRexportDefault.View, { style: null, accessibilityLiveRegion: "polite", children: jsx(isExpanded(5619).Text, { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: children.text }) });
  return <sharedValue1 style={tmp.container} pointerEvents="none">{null}</sharedValue1>;
}