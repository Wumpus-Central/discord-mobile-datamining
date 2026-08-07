// discord_app/modules/user_profile/native/ActionSheetBackdropToast.tsx
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { ACTION_SHEET_START_HEIGHT_RATIO as closure_5 } from "ACTION_SHEET_START_HEIGHT_RATIO";
import { jsx } from "jsxProd";
import set from "set";
import createCacheKey from "createCacheKey";
import set from "ACTION_SHEET_START_HEIGHT_RATIO";
import { ReanimatedRexport } from "../../reanimated/ReanimatedRexport.tsx";
import { useSafeAreaInsets } from "../../safe_area/useSafeAreaInsets.native.tsx";
import { useWindowDimensions } from "../../screen/useWindowDimensions.native.tsx";

let StyleSheet;
let c4;
const require = arg1;
({ View: c4, StyleSheet } = get_ActivityIndicator);
set = set.isIOS();
set = { container: null, toast: null };
set = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
set.flex = 1;
set.alignItems = "center";
set.justifyContent = "center";
set[0] = set;
createCacheKey = { position: "absolute", bottom: 16, backgroundColor: require("Themes").colors.MOBILE_TOAST_BACKGROUND_DEFAULT, borderRadius: require("Themes").radii.round, paddingTop: 6, paddingBottom: 8, paddingHorizontal: 16 };
set[1] = createCacheKey;
set = createCacheKey.createStyles(set);
let closure_9 = { code: "function ActionSheetBackdropToastTsx1(){const{isInIOS,isExpanded,maxDynamicContentSize,TOAST_BOTTOM_MARGIN,nonExpandedHeight,ACTION_SHEET_START_HEIGHT_RATIO,TOAST_BOTTOM_GAP,positionDelta,TOAST_ANIMATION_Y_DELTA,opacity}=this.__closure;return{bottom:(isInIOS?isExpanded?maxDynamicContentSize+TOAST_BOTTOM_MARGIN:nonExpandedHeight+TOAST_BOTTOM_MARGIN:isExpanded?maxDynamicContentSize+TOAST_BOTTOM_MARGIN:ACTION_SHEET_START_HEIGHT_RATIO*maxDynamicContentSize+TOAST_BOTTOM_GAP)+ +(1-positionDelta.get())*TOAST_ANIMATION_Y_DELTA,opacity:opacity.get()};}" };
let result = set.fileFinishedImporting("modules/user_profile/native/ActionSheetBackdropToast.tsx");

export const ActionSheetBackdropToast = function ActionSheetBackdropToast(children) {
  const isExpanded = children.isExpanded;
  let importDefault;
  let dependencyMap;
  let sharedValue;
  let sharedValue1;
  const tmp = set();
  const height = useWindowDimensions().height;
  let result = height * closure_5;
  importDefault = result;
  const diff = height - isExpanded(5266).NAV_BAR_HEIGHT_MULTILINE - useSafeAreaInsets().top;
  dependencyMap = diff;
  let obj = isExpanded(4162);
  sharedValue = obj.useSharedValue(0);
  let obj1 = isExpanded(4162);
  sharedValue1 = obj1.useSharedValue(0);
  const items = [sharedValue, sharedValue1];
  const effect = sharedValue.useEffect(() => {
    let obj = isExpanded(_undefined[10]);
    obj = { duration: 200, easing: null };
    let Easing = isExpanded(_undefined[10]).Easing;
    obj[1] = Easing.in(isExpanded(_undefined[10]).Easing.ease);
    let result = sharedValue.set(obj.withDelay(100, isExpanded(_undefined[11]).withTiming(1, obj)));
    let obj2 = isExpanded(_undefined[11]);
    obj = { duration: 300, easing: null };
    const Easing2 = isExpanded(_undefined[10]).Easing;
    obj[1] = Easing2.in(isExpanded(_undefined[10]).Easing.linear);
    let result1 = sharedValue1.set(isExpanded(_undefined[11]).withTiming(1, obj));
    return () => {
      let obj = outer1_0(outer1_2[10]);
      const result = noop.set(obj.withDelay(200, outer1_0(outer1_2[11]).withTiming(0)));
      const obj2 = outer1_0(outer1_2[11]);
      obj = { duration: 200, easing: null };
      const Easing = outer1_0(outer1_2[10]).Easing;
      obj[1] = Easing.out(outer1_0(outer1_2[10]).Easing.exp);
      const result1 = closure_4.set(outer1_0(outer1_2[11]).withTiming(0, obj));
    };
  }, items);
  const fn = function x() {
    if (outer1_7) {
      if (tmp) {
        let sum = c2 + 24;
      } else {
        sum = c1 + 24;
      }
    } else {
      if (tmp) {
        let sum1 = c2 + 24;
      } else {
        sum1 = outer1_5 * c2 + 46;
      }
      const obj = { bottom: null, opacity: null };
      obj[0] = sum1 + 15 * (1 - sharedValue.get());
      obj[1] = sharedValue1.get();
      return obj;
    }
  };
  obj = { isInIOS: set, isExpanded, maxDynamicContentSize: diff, TOAST_BOTTOM_MARGIN: 24, nonExpandedHeight: result, ACTION_SHEET_START_HEIGHT_RATIO: closure_5, TOAST_BOTTOM_GAP: 46, positionDelta: sharedValue, TOAST_ANIMATION_Y_DELTA: 15, opacity: sharedValue1 };
  fn.__closure = obj;
  fn.__workletHash = 9630436597435;
  fn.__initData = closure_9;
  obj = { style: items1, pointerEvents: "none", children: null };
  items1 = [tmp.container];
  const animatedStyle = isExpanded(4162).useAnimatedStyle(fn);
  obj1 = { style: items2, children: null };
  items2 = [tmp.toast, animatedStyle];
  obj1[1] = jsx(isExpanded(4298).Text, { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: children.text });
  obj[2] = jsx(ReanimatedRexport.View, { style: items2, children: null });
  return <sharedValue1 style={items1} pointerEvents="none">{null}</sharedValue1>;
};