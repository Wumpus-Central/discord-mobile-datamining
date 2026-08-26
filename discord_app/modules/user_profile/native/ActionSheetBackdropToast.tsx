// discord_app/modules/user_profile/native/ActionSheetBackdropToast.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import _modDef4184 from "../../reanimated/ReanimatedRexport.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { ACTION_SHEET_START_HEIGHT_RATIO as closure_5 } from "../../action_sheet/native/ActionSheetConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import set from "../../../utils/PlatformUtils.tsx";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ View: c4, StyleSheet } = get_ActivityIndicator);
let closure_7 = set.isIOS();
set = { container: null, toast: null };
set = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
set.flex = 1;
set.alignItems = "center";
set.justifyContent = "center";
set[0] = set;
createCacheKey = { position: "absolute", bottom: 16, backgroundColor: ThemesDefault.colors.MOBILE_TOAST_BACKGROUND_DEFAULT, borderRadius: ThemesDefault.radii.round, paddingTop: 6, paddingBottom: 8, paddingHorizontal: 16 };
set[1] = createCacheKey;
let closure_8 = createCacheKey.createStyles(set);
let closure_9 = { code: "function ActionSheetBackdropToastTsx1(){const{isInIOS,isExpanded,maxDynamicContentSize,TOAST_BOTTOM_MARGIN,nonExpandedHeight,ACTION_SHEET_START_HEIGHT_RATIO,TOAST_BOTTOM_GAP,positionDelta,TOAST_ANIMATION_Y_DELTA,opacity}=this.__closure;return{bottom:(isInIOS?isExpanded?maxDynamicContentSize+TOAST_BOTTOM_MARGIN:nonExpandedHeight+TOAST_BOTTOM_MARGIN:isExpanded?maxDynamicContentSize+TOAST_BOTTOM_MARGIN:ACTION_SHEET_START_HEIGHT_RATIO*maxDynamicContentSize+TOAST_BOTTOM_GAP)+ +(1-positionDelta.get())*TOAST_ANIMATION_Y_DELTA,opacity:opacity.get()};}" };
let result = set.fileFinishedImporting("modules/user_profile/native/ActionSheetBackdropToast.tsx");

export const ActionSheetBackdropToast = function ActionSheetBackdropToast(children) {
  const isExpanded = children.isExpanded;
  importDefault = undefined;
  dependencyMap = undefined;
  let sharedValue;
  let sharedValue1;
  const tmp = callback();
  const height = useWindowDimensionsDefault().height;
  let result = height * closure_5;
  importDefault = result;
  const diff = height - isExpanded(5439).NAV_BAR_HEIGHT_MULTILINE - useSafeAreaInsetsDefault().top;
  dependencyMap = diff;
  let obj = isExpanded(4184);
  sharedValue = obj.useSharedValue(0);
  obj1 = isExpanded(4184);
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
      let obj = closure_1_0(closure_1_2[10]);
      const result = closure_3.set(obj.withDelay(200, closure_1_0(closure_1_2[11]).withTiming(0)));
      const obj2 = closure_1_0(closure_1_2[11]);
      obj = { duration: 200, easing: null };
      const Easing = closure_1_0(closure_1_2[10]).Easing;
      obj[1] = Easing.out(closure_1_0(closure_1_2[10]).Easing.exp);
      const result1 = closure_4.set(closure_1_0(closure_1_2[11]).withTiming(0, obj));
    };
  }, items);
  const fn = function x() {
    if (closure_1_7) {
      if (tmp) {
        let sum = c2 + 24;
      } else {
        sum = c1 + 24;
      }
    } else {
      if (tmp) {
        let sum1 = c2 + 24;
      } else {
        sum1 = closure_1_5 * c2 + 46;
      }
      const obj = { bottom: null, opacity: null };
      obj[0] = sum1 + 15 * (1 - sharedValue.get());
      obj[1] = sharedValue1.get();
      return obj;
    }
  };
  obj = { isInIOS: closure_7, isExpanded, maxDynamicContentSize: diff, TOAST_BOTTOM_MARGIN: 24, nonExpandedHeight: result, ACTION_SHEET_START_HEIGHT_RATIO: closure_5, TOAST_BOTTOM_GAP: 46, positionDelta: sharedValue, TOAST_ANIMATION_Y_DELTA: 15, opacity: sharedValue1 };
  fn.__closure = obj;
  fn.__workletHash = 9630436597435;
  fn.__initData = closure_9;
  obj = { style: items1, pointerEvents: "none", children: null };
  items1 = [tmp.container];
  const animatedStyle = isExpanded(4184).useAnimatedStyle(fn);
  obj1 = { style: items2, children: jsx(isExpanded(4440).Text, { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: children.text }) };
  items2 = [tmp.toast, animatedStyle];
  obj[2] = jsx(_modDef4184.View, { style: items2, children: jsx(isExpanded(4440).Text, { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: children.text }) });
  return <sharedValue1 style={items1} pointerEvents="none">{null}</sharedValue1>;
};