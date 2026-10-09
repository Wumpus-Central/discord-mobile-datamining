// === Module 13354: ActionSheetBackdropToast ===

// Module 13354 (ActionSheetBackdropToast)
import nativeDefault from "native" /* 587 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1497 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import timing from "timing" /* 5092 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = tmp5(4811);
require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const ACTION_SHEET_START_HEIGHT_RATIO = fn(6837).ACTION_SHEET_START_HEIGHT_RATIO;
const jsx = fn(21).jsx;
let c7 = 24;
let c8 = 200;
const PlatformUtils = fn(1382);
const isInIOS = PlatformUtils.isIOS();
const createStyles = fn(5091);
let obj3 = { container: null, toast: null };
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.flex = 1;
obj4.alignItems = "center";
obj4.justifyContent = "center";
obj3.container = obj4;
obj3.toast = { position: "absolute", bottom: 16, backgroundColor: nativeDefault.colors.MOBILE_TOAST_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round, paddingTop: 6, paddingBottom: 8, paddingHorizontal: 16 };
let closure_10 = createStyles.createStyles(obj3);
const __initData = { code: "function ActionSheetBackdropToastTsx1(){const{isInIOS,isExpanded,maxDynamicContentSize,TOAST_BOTTOM_MARGIN,nonExpandedHeight,ACTION_SHEET_START_HEIGHT_RATIO,TOAST_BOTTOM_GAP,positionDelta,TOAST_ANIMATION_Y_DELTA,opacity}=this.__closure;return{bottom:(isInIOS?isExpanded?maxDynamicContentSize+TOAST_BOTTOM_MARGIN:nonExpandedHeight+TOAST_BOTTOM_MARGIN:isExpanded?maxDynamicContentSize+TOAST_BOTTOM_MARGIN:ACTION_SHEET_START_HEIGHT_RATIO*maxDynamicContentSize+TOAST_BOTTOM_GAP)+ +(1-positionDelta.get())*TOAST_ANIMATION_Y_DELTA,opacity:opacity.get()};}" };
const __initData2 = { code: "function ActionSheetBackdropToastTsx2(){const{isInIOS,isExpanded,maxDynamicContentSize,TOAST_BOTTOM_MARGIN,nonExpandedHeight,ACTION_SHEET_START_HEIGHT_RATIO,TOAST_BOTTOM_GAP,positionDelta,TOAST_ANIMATION_Y_DELTA,opacity}=this.__closure;return{bottom:(isInIOS?isExpanded?maxDynamicContentSize+TOAST_BOTTOM_MARGIN:nonExpandedHeight+TOAST_BOTTOM_MARGIN:isExpanded?maxDynamicContentSize+TOAST_BOTTOM_MARGIN:ACTION_SHEET_START_HEIGHT_RATIO*maxDynamicContentSize+TOAST_BOTTOM_GAP)+ +(1-positionDelta.get())*TOAST_ANIMATION_Y_DELTA,opacity:opacity.get()};}" };
const ReactCompilerGating = fn(558);
let obj5 = { position: "absolute", bottom: 16, backgroundColor: nativeDefault.colors.MOBILE_TOAST_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round, paddingTop: 6, paddingBottom: 8, paddingHorizontal: 16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/ActionSheetBackdropToast.tsx");

export const ActionSheetBackdropToast = ReactCompilerGating.isReactCompilerEnabled() ? (function ActionSheetBackdropToast(arg0) {
  const cResult = isExpanded(576).c(15);
  ({ text, isExpanded } = arg0);
  const tmp4 = closure_10();
  const height = useWindowDimensionsDefault().height;
  let result = height * ACTION_SHEET_START_HEIGHT_RATIO;
  importDefault = result;
  const diff = height - isExpanded(6263).NAV_BAR_HEIGHT_MULTILINE - useSafeAreaInsetsDefault().top;
  dependencyMap = diff;
  let obj = isExpanded(576);
  const sharedValue = isExpanded(4811).useSharedValue(0);
  let obj2 = isExpanded(4811);
  const sharedValue1 = isExpanded(4811).useSharedValue(0);
  if (cResult[0] === sharedValue1) {
    if (cResult[1] === sharedValue) {
      let tmp11 = cResult[2];
      let tmp12 = cResult[3];
    }
    const effect = sharedValue.useEffect(tmp11, tmp12);
    class R {
      constructor() {
        tmp = isExpanded;
        if (closure_9) {
          if (tmp) {
            tmp10 = closure_2;
            tmp11 = c7;
            sum = closure_2 + c7;
          } else {
            tmp7 = closure_1;
            tmp8 = c7;
            sum = closure_1 + c7;
          }
          tmp12 = sum;
        } else {
          if (tmp) {
            tmp5 = closure_2;
            tmp6 = c7;
            sum1 = closure_2 + c7;
          } else {
            tmp2 = closure_5;
            tmp3 = closure_2;
            num = 46;
            sum1 = closure_5 * closure_2 + 46;
          }
          obj = { bottom: null, opacity: null };
          tmp13 = closure_3;
          num2 = 1;
          num3 = 15;
          obj.bottom = sum1 + 15 * (1 - closure_3.get());
          tmp14 = closure_4;
          obj.opacity = closure_4.get();
          return obj;
        }
        return;
      }
    }
    let obj4 = { isInIOS, isExpanded, maxDynamicContentSize: diff, TOAST_BOTTOM_MARGIN, nonExpandedHeight: result, ACTION_SHEET_START_HEIGHT_RATIO, TOAST_BOTTOM_GAP: 46, positionDelta: sharedValue, TOAST_ANIMATION_Y_DELTA: 15, opacity: sharedValue1 };
    R.__closure = obj4;
    R.__workletHash = 9630436597435;
    R.__initData = __initData;
    const animatedStyle = isExpanded(4811).useAnimatedStyle(R);
    if (cResult[4] === tmp4.toast) {
      if (cResult[5] === animatedStyle) {
        let tmp19 = cResult[6];
      }
      if (cResult[7] !== text) {
        let obj5 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: text };
        const tmp22 = jsx(isExpanded(5087).Text, { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: text });
        class R {
          constructor() {
            tmp = isExpanded;
            if (closure_9) {
              if (tmp) {
                tmp10 = closure_2;
                tmp11 = c7;
                sum = closure_2 + c7;
              } else {
                tmp7 = closure_1;
                tmp8 = c7;
                sum = closure_1 + c7;
              }
              tmp12 = sum;
            } else {
              if (tmp) {
                tmp5 = closure_2;
                tmp6 = c7;
                sum1 = closure_2 + c7;
              } else {
                tmp2 = closure_5;
                tmp3 = closure_2;
                num = 46;
                sum1 = closure_5 * closure_2 + 46;
              }
              obj = { bottom: null, opacity: null };
              tmp13 = closure_3;
              num2 = 1;
              num3 = 15;
              obj.bottom = sum1 + 15 * (1 - closure_3.get());
              tmp14 = closure_4;
              obj.opacity = closure_4.get();
              return obj;
            }
            return;
          }
        }
        cResult[7] = text;
        cResult[8] = tmp22;
        let tmp20 = tmp22;
      } else {
        tmp20 = cResult[8];
      }
      if (cResult[9] === tmp19) {
        if (cResult[10] === tmp20) {
          let tmp23 = cResult[11];
        }
        if (cResult[12] === tmp4.container) {
          if (cResult[13] === tmp23) {
            let tmp27 = cResult[14];
          }
          return tmp27;
        }
        class R {
          constructor() {
            tmp = isExpanded;
            if (closure_9) {
              if (tmp) {
                tmp10 = closure_2;
                tmp11 = c7;
                sum = closure_2 + c7;
              } else {
                tmp7 = closure_1;
                tmp8 = c7;
                sum = closure_1 + c7;
              }
              tmp12 = sum;
            } else {
              if (tmp) {
                tmp5 = closure_2;
                tmp6 = c7;
                sum1 = closure_2 + c7;
              } else {
                tmp2 = closure_5;
                tmp3 = closure_2;
                num = 46;
                sum1 = closure_5 * closure_2 + 46;
              }
              obj = { bottom: null, opacity: null };
              tmp13 = closure_3;
              num2 = 1;
              num3 = 15;
              obj.bottom = sum1 + 15 * (1 - closure_3.get());
              tmp14 = closure_4;
              obj.opacity = closure_4.get();
              return obj;
            }
            return;
          }
        }
        tmp30[0] = tmp4.container;
        tmp30[2] = tmp23;
        const tmp31 = <sharedValue1 {...tmp30} />;
        cResult[12] = tmp4.container;
        cResult[13] = tmp23;
        cResult[14] = tmp31;
        tmp27 = tmp31;
      }
      class R {
        constructor() {
          tmp = isExpanded;
          if (closure_9) {
            if (tmp) {
              tmp10 = closure_2;
              tmp11 = c7;
              sum = closure_2 + c7;
            } else {
              tmp7 = closure_1;
              tmp8 = c7;
              sum = closure_1 + c7;
            }
            tmp12 = sum;
          } else {
            if (tmp) {
              tmp5 = closure_2;
              tmp6 = c7;
              sum1 = closure_2 + c7;
            } else {
              tmp2 = closure_5;
              tmp3 = closure_2;
              num = 46;
              sum1 = closure_5 * closure_2 + 46;
            }
            obj = { bottom: null, opacity: null };
            tmp13 = closure_3;
            num2 = 1;
            num3 = 15;
            obj.bottom = sum1 + 15 * (1 - closure_3.get());
            tmp14 = closure_4;
            obj.opacity = closure_4.get();
            return obj;
          }
          return;
        }
      }
      tmp25[0] = tmp19;
      tmp25[1] = tmp20;
      const tmp26 = jsx(ReanimatedRexportDefault.View, tmp25);
      cResult[9] = tmp19;
      cResult[10] = tmp20;
      cResult[11] = tmp26;
      tmp23 = tmp26;
    }
    const items = [tmp4.toast, animatedStyle];
    cResult[4] = tmp4.toast;
    cResult[5] = animatedStyle;
    cResult[6] = items;
    tmp19 = items;
    const tmpResult = isExpanded(4811);
  }
  const fn = function o() {
    let obj = ReanimatedRexport;
    const obj3 = { duration, easing: null };
    let Easing = ReanimatedRexport.Easing;
    obj3.easing = Easing.in(ReanimatedRexport.Easing.ease);
    result = sharedValue.set(obj.withDelay(100, timing.withTiming(1, obj3)));
    const obj5 = { duration: 300, easing: null };
    const Easing2 = ReanimatedRexport.Easing;
    obj5.easing = Easing2.in(ReanimatedRexport.Easing.linear);
    let result1 = sharedValue1.set(timing.withTiming(1, obj5));
    return () => {
      const obj = isExpanded(diff[12]);
      result = sharedValue.set(obj.withDelay(duration, isExpanded(diff[13]).withTiming(0)));
      const obj2 = isExpanded(diff[13]);
      const obj4 = { duration, easing: null };
      const Easing = isExpanded(diff[12]).Easing;
      obj4.easing = Easing.out(isExpanded(diff[12]).Easing.exp);
      const result1 = sharedValue1.set(isExpanded(diff[13]).withTiming(0, obj4));
    };
  };
  const items1 = [sharedValue, sharedValue1];
  cResult[0] = sharedValue1;
  cResult[1] = sharedValue;
  cResult[2] = fn;
  cResult[3] = items1;
  tmp12 = items1;
  tmp11 = fn;
  let obj3 = isExpanded(4811);
}) : (function ActionSheetBackdropToast(children) {
  const isExpanded = children.isExpanded;
  const tmp = closure_10();
  const height = useWindowDimensionsDefault().height;
  let result = height * ACTION_SHEET_START_HEIGHT_RATIO;
  importDefault = result;
  const diff = height - isExpanded(6263).NAV_BAR_HEIGHT_MULTILINE - useSafeAreaInsetsDefault().top;
  dependencyMap = diff;
  const sharedValue = isExpanded(4811).useSharedValue(0);
  let obj = isExpanded(4811);
  const sharedValue1 = isExpanded(4811).useSharedValue(0);
  const items = [sharedValue, sharedValue1];
  const effect = sharedValue.useEffect(() => {
    let obj = ReanimatedRexport;
    const obj3 = { duration, easing: null };
    let Easing = ReanimatedRexport.Easing;
    obj3.easing = Easing.in(ReanimatedRexport.Easing.ease);
    let result = sharedValue.set(obj.withDelay(100, timing.withTiming(1, obj3)));
    const obj5 = { duration: 300, easing: null };
    const Easing2 = ReanimatedRexport.Easing;
    obj5.easing = Easing2.in(ReanimatedRexport.Easing.linear);
    let result1 = sharedValue1.set(timing.withTiming(1, obj5));
    return () => {
      const obj = isExpanded(4811);
      const result = sharedValue.set(obj.withDelay(duration, isExpanded(5092).withTiming(0)));
      const obj2 = isExpanded(5092);
      const obj4 = { duration, easing: null };
      const Easing = isExpanded(4811).Easing;
      obj4.easing = Easing.out(isExpanded(4811).Easing.exp);
      const result1 = sharedValue1.set(isExpanded(5092).withTiming(0, obj4));
    };
  }, items);
  let obj2 = isExpanded(4811);
  class M {
    constructor() {
      tmp = isExpanded;
      if (closure_9) {
        if (tmp) {
          tmp10 = closure_2;
          tmp11 = c7;
          sum = closure_2 + c7;
        } else {
          tmp7 = closure_1;
          tmp8 = c7;
          sum = closure_1 + c7;
        }
        tmp12 = sum;
      } else {
        if (tmp) {
          tmp5 = closure_2;
          tmp6 = c7;
          sum1 = closure_2 + c7;
        } else {
          tmp2 = closure_5;
          tmp3 = closure_2;
          num = 46;
          sum1 = closure_5 * closure_2 + 46;
        }
        obj = { bottom: null, opacity: null };
        tmp13 = closure_3;
        num2 = 1;
        num3 = 15;
        obj.bottom = sum1 + 15 * (1 - closure_3.get());
        tmp14 = closure_4;
        obj.opacity = closure_4.get();
        return obj;
      }
      return;
    }
  }
  M.__closure = { isInIOS, isExpanded, maxDynamicContentSize: diff, TOAST_BOTTOM_MARGIN, nonExpandedHeight: result, ACTION_SHEET_START_HEIGHT_RATIO, TOAST_BOTTOM_GAP: 46, positionDelta: sharedValue, TOAST_ANIMATION_Y_DELTA: 15, opacity: sharedValue1 };
  M.__workletHash = 16641609709624;
  M.__initData = __initData2;
  let obj5 = { style: tmp.container, pointerEvents: "none", children: null };
  const animatedStyle = isExpanded(4811).useAnimatedStyle(M);
  const obj6 = { style: null, children: jsx(isExpanded(5087).Text, { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: children.text }) };
  const items1 = [tmp.toast, animatedStyle];
  obj6.style = items1;
  obj5.children = jsx(ReanimatedRexportDefault.View, { style: null, children: jsx(isExpanded(5087).Text, { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: children.text }) });
  return <sharedValue1 style={tmp.container} pointerEvents="none">{null}</sharedValue1>;
});