// discord_app/modules/user_profile/native/ActionSheetBackdropToast.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import ActionSheetConstants from "../../action_sheet/native/ActionSheetConstants.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let dependencyMap, importDefault, set, set2;

let StyleSheet;
let closure_4;
let obj2;
let obj3;
let tmp5;
const ReanimatedRexportDefault = tmp5(4612);
({ View: closure_4, StyleSheet } = react_native);
const ACTION_SHEET_START_HEIGHT_RATIO = ActionSheetConstants.ACTION_SHEET_START_HEIGHT_RATIO;
const jsx = Fragment.jsx;
let c7 = 24;
let c8 = 200;
const isInIOS = PlatformUtils.isIOS();
let createStyles = createStyles_mod;
let obj = { container: obj2, toast: obj3 };
obj2 = { flex: 1, alignItems: "center", justifyContent: "center" };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = {
  position: "absolute",
  bottom: 16,
  backgroundColor: nativeDefault.colors.MOBILE_TOAST_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.round,
  paddingTop: 6,
  paddingBottom: 8,
  paddingHorizontal: 16,
};
let closure_10 = createStyles(obj);
const __initData = {
  code: "function ActionSheetBackdropToastTsx1(){const{isInIOS,isExpanded,maxDynamicContentSize,TOAST_BOTTOM_MARGIN,nonExpandedHeight,ACTION_SHEET_START_HEIGHT_RATIO,TOAST_BOTTOM_GAP,positionDelta,TOAST_ANIMATION_Y_DELTA,opacity}=this.__closure;return{bottom:(isInIOS?isExpanded?maxDynamicContentSize+TOAST_BOTTOM_MARGIN:nonExpandedHeight+TOAST_BOTTOM_MARGIN:isExpanded?maxDynamicContentSize+TOAST_BOTTOM_MARGIN:ACTION_SHEET_START_HEIGHT_RATIO*maxDynamicContentSize+TOAST_BOTTOM_GAP)+ +(1-positionDelta.get())*TOAST_ANIMATION_Y_DELTA,opacity:opacity.get()};}",
};
const __initData2 = {
  code: "function ActionSheetBackdropToastTsx2(){const{isInIOS,isExpanded,maxDynamicContentSize,TOAST_BOTTOM_MARGIN,nonExpandedHeight,ACTION_SHEET_START_HEIGHT_RATIO,TOAST_BOTTOM_GAP,positionDelta,TOAST_ANIMATION_Y_DELTA,opacity}=this.__closure;return{bottom:(isInIOS?isExpanded?maxDynamicContentSize+TOAST_BOTTOM_MARGIN:nonExpandedHeight+TOAST_BOTTOM_MARGIN:isExpanded?maxDynamicContentSize+TOAST_BOTTOM_MARGIN:ACTION_SHEET_START_HEIGHT_RATIO*maxDynamicContentSize+TOAST_BOTTOM_GAP)+ +(1-positionDelta.get())*TOAST_ANIMATION_Y_DELTA,opacity:opacity.get()};}",
};
tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let duration;
      let isExpanded;
      let text;
      let obj = isExpanded(576);
      const cResult = obj.c(17);
      ({ text, isExpanded } = arg0);
      const tmp4 = closure_10();
      const top = useSafeAreaInsetsDefault().top;
      const height = useWindowDimensionsDefault().height;
      let result = height * ACTION_SHEET_START_HEIGHT_RATIO;
      importDefault = result;
      const diff = height - isExpanded(6068).NAV_BAR_HEIGHT_MULTILINE - top;
      dependencyMap = diff;
      let obj2 = isExpanded(4612);
      const sharedValue = obj2.useSharedValue(0);
      const obj3 = isExpanded(4612);
      const sharedValue1 = obj3.useSharedValue(0);
      if (cResult[0] === sharedValue1) {
        let tmp11;
        let tmp12;
        let tmp19;
        if (cResult[1] === sharedValue) {
          tmp11 = cResult[2];
          tmp12 = cResult[3];
        }
        const effect = sharedValue.useEffect(tmp11, tmp12);
        const tmpResult = isExpanded(4612);
        class R {
          constructor() {
            let sum1;
            if (isInIOS) {
              let sum;
              if (isExpanded) {
                sum = dependencyMap + c7;
              } else {
                sum = importDefault + c7;
              }
              sum1 = sum;
            } else if (isExpanded) {
              sum1 = dependencyMap + c7;
            } else {
              sum1 = ACTION_SHEET_START_HEIGHT_RATIO * dependencyMap + 46;
            }
            const obj = { bottom: sum1 + 15 * (1 - sharedValue.get()), opacity: sharedValue1.get() };
            return obj;
          }
        }
        const obj4 = {
          isInIOS,
          isExpanded,
          maxDynamicContentSize: diff,
          TOAST_BOTTOM_MARGIN,
          nonExpandedHeight: result,
          ACTION_SHEET_START_HEIGHT_RATIO,
          TOAST_BOTTOM_GAP: 46,
          positionDelta: sharedValue,
          TOAST_ANIMATION_Y_DELTA: 15,
          opacity: sharedValue1,
        };
        R.__closure = obj4;
        R.__workletHash = 9630436597435;
        R.__initData = __initData;
        const animatedStyle = tmpResult.useAnimatedStyle(R);
        if (cResult[4] !== tmp4.container) {
          const items = [tmp4.container];
          cResult[4] = tmp4.container;
          class R {
            constructor() {
              let sum1;
              if (isInIOS) {
                let sum;
                if (isExpanded) {
                  sum = dependencyMap + c7;
                } else {
                  sum = importDefault + c7;
                }
                sum1 = sum;
              } else if (isExpanded) {
                sum1 = dependencyMap + c7;
              } else {
                sum1 = ACTION_SHEET_START_HEIGHT_RATIO * dependencyMap + 46;
              }
              const obj = { bottom: sum1 + 15 * (1 - sharedValue.get()), opacity: sharedValue1.get() };
              return obj;
            }
          }
          cResult[5] = items;
          tmp19 = items;
        } else {
          tmp19 = cResult[5];
        }
        if (cResult[6] === tmp4.toast) {
          let tmp20;
          let tmp21;
          if (cResult[7] === animatedStyle) {
            tmp20 = cResult[8];
          }
          if (cResult[9] !== text) {
            const tmp23 = jsx(isExpanded(4886).Text, {
              variant: "text-sm/medium",
              color: "mobile-text-heading-primary",
              children: text,
            });
            class R {
              constructor() {
                let sum1;
                if (isInIOS) {
                  let sum;
                  if (isExpanded) {
                    sum = dependencyMap + c7;
                  } else {
                    sum = importDefault + c7;
                  }
                  sum1 = sum;
                } else if (isExpanded) {
                  sum1 = dependencyMap + c7;
                } else {
                  sum1 = ACTION_SHEET_START_HEIGHT_RATIO * dependencyMap + 46;
                }
                const obj = { bottom: sum1 + 15 * (1 - sharedValue.get()), opacity: sharedValue1.get() };
                return obj;
              }
            }
            cResult[9] = text;
            cResult[10] = tmp23;
            tmp21 = tmp23;
          } else {
            tmp21 = cResult[10];
          }
          if (cResult[11] === tmp20) {
            let tmp24;
            if (cResult[12] === tmp21) {
              tmp24 = cResult[13];
            }
            if (cResult[14] === tmp19) {
              let tmp28;
              if (cResult[15] === tmp24) {
                tmp28 = cResult[16];
              }
              return tmp28;
            }
            class R {
              constructor() {
                let sum1;
                if (isInIOS) {
                  let sum;
                  if (isExpanded) {
                    sum = dependencyMap + c7;
                  } else {
                    sum = importDefault + c7;
                  }
                  sum1 = sum;
                } else if (isExpanded) {
                  sum1 = dependencyMap + c7;
                } else {
                  sum1 = ACTION_SHEET_START_HEIGHT_RATIO * dependencyMap + 46;
                }
                const obj = { bottom: sum1 + 15 * (1 - sharedValue.get()), opacity: sharedValue1.get() };
                return obj;
              }
            }
            tmp31[0] = tmp19;
            tmp31[2] = tmp24;
            const tmp32 = <sharedValue1 {...tmp31} />;
            cResult[14] = tmp19;
            cResult[15] = tmp24;
            cResult[16] = tmp32;
            tmp28 = tmp32;
          }
          class R {
            constructor() {
              let sum1;
              if (isInIOS) {
                let sum;
                if (isExpanded) {
                  sum = dependencyMap + c7;
                } else {
                  sum = importDefault + c7;
                }
                sum1 = sum;
              } else if (isExpanded) {
                sum1 = dependencyMap + c7;
              } else {
                sum1 = ACTION_SHEET_START_HEIGHT_RATIO * dependencyMap + 46;
              }
              const obj = { bottom: sum1 + 15 * (1 - sharedValue.get()), opacity: sharedValue1.get() };
              return obj;
            }
          }
          tmp26[0] = tmp20;
          tmp26[1] = tmp21;
          const tmp27 = jsx(ReanimatedRexportDefault.View, tmp26);
          cResult[11] = tmp20;
          cResult[12] = tmp21;
          cResult[13] = tmp27;
          tmp24 = tmp27;
        }
        const items1 = [tmp4.toast, animatedStyle];
        cResult[6] = tmp4.toast;
        cResult[7] = animatedStyle;
        cResult[8] = items1;
        tmp20 = items1;
      }
      const fn = function o() {
        let Easing;
        let Easing2;
        set = sharedValue.set;
        const tmp = ReanimatedRexport;
        let withDelay = tmp.withDelay;
        let obj = { duration, easing: Easing.in(ReanimatedRexport.Easing.ease) };
        let withTiming = timing.withTiming;
        timing;
        Easing = ReanimatedRexport.Easing;
        result = set(withDelay(100, withTiming(1, obj)));
        set2 = sharedValue1.set;
        let obj2 = { duration: 300, easing: Easing2.in(ReanimatedRexport.Easing.linear) };
        const withTiming2 = timing.withTiming;
        timing;
        Easing2 = ReanimatedRexport.Easing;
        set2(withTiming2(1, obj2));
        return () => {
          let Easing;
          const withDelay = isExpanded(dependencyMap[12]).withDelay;
          isExpanded(dependencyMap[12]);
          const obj = isExpanded(dependencyMap[13]);
          result = set(withDelay(duration, obj.withTiming(0)));
          const obj2 = { duration, easing: Easing.out(isExpanded(dependencyMap[12]).Easing.exp) };
          const withTiming = isExpanded(dependencyMap[13]).withTiming;
          isExpanded(dependencyMap[13]);
          Easing = isExpanded(dependencyMap[12]).Easing;
          set2.set(withTiming(0, obj2));
        };
      };
      const items2 = [sharedValue, sharedValue1];
      cResult[0] = sharedValue1;
      cResult[1] = sharedValue;
      cResult[2] = fn;
      cResult[3] = items2;
      tmp12 = items2;
      tmp11 = fn;
    }
  : (isExpanded) => {
      let c1;
      let c2;
      let duration;
      isExpanded = isExpanded.isExpanded;
      const text = isExpanded.text;
      let tmp = closure_10();
      const top = useSafeAreaInsetsDefault().top;
      const height = useWindowDimensionsDefault().height;
      let result = height * ACTION_SHEET_START_HEIGHT_RATIO;
      importDefault = result;
      const diff = height - isExpanded(6068).NAV_BAR_HEIGHT_MULTILINE - top;
      dependencyMap = diff;
      let obj = isExpanded(4612);
      const sharedValue = obj.useSharedValue(0);
      let obj2 = isExpanded(4612);
      const sharedValue1 = obj2.useSharedValue(0);
      const items = [sharedValue, sharedValue1];
      const effect = sharedValue.useEffect(() => {
        let Easing;
        let Easing2;
        set = sharedValue.set;
        const tmp = ReanimatedRexport;
        let withDelay = tmp.withDelay;
        let obj = { duration, easing: Easing.in(ReanimatedRexport.Easing.ease) };
        let withTiming = timing.withTiming;
        timing;
        Easing = ReanimatedRexport.Easing;
        let result = set(withDelay(100, withTiming(1, obj)));
        set2 = sharedValue1.set;
        let obj2 = { duration: 300, easing: Easing2.in(ReanimatedRexport.Easing.linear) };
        const withTiming2 = timing.withTiming;
        timing;
        Easing2 = ReanimatedRexport.Easing;
        set2(withTiming2(1, obj2));
        return () => {
          let Easing;
          const withDelay = isExpanded(c2[12]).withDelay;
          isExpanded(c2[12]);
          const obj = isExpanded(c2[13]);
          const result = set(withDelay(duration, obj.withTiming(0)));
          const obj2 = { duration, easing: Easing.out(isExpanded(c2[12]).Easing.exp) };
          const withTiming = isExpanded(c2[13]).withTiming;
          isExpanded(c2[13]);
          Easing = isExpanded(c2[12]).Easing;
          set2.set(withTiming(0, obj2));
        };
      }, items);
      const obj3 = isExpanded(4612);
      class M {
        constructor() {
          let sum1;
          if (isInIOS) {
            let sum;
            if (isExpanded) {
              sum = c2 + c7;
            } else {
              sum = c1 + c7;
            }
            sum1 = sum;
          } else if (isExpanded) {
            sum1 = c2 + c7;
          } else {
            sum1 = ACTION_SHEET_START_HEIGHT_RATIO * c2 + 46;
          }
          const obj = { bottom: sum1 + 15 * (1 - sharedValue.get()), opacity: sharedValue1.get() };
          return obj;
        }
      }
      const obj4 = {
        isInIOS,
        isExpanded,
        maxDynamicContentSize: diff,
        TOAST_BOTTOM_MARGIN,
        nonExpandedHeight: result,
        ACTION_SHEET_START_HEIGHT_RATIO,
        TOAST_BOTTOM_GAP: 46,
        positionDelta: sharedValue,
        TOAST_ANIMATION_Y_DELTA: 15,
        opacity: sharedValue1,
      };
      M.__closure = obj4;
      M.__workletHash = 16641609709624;
      M.__initData = __initData2;
      const items1 = [tmp.container];
      const animatedStyle = obj3.useAnimatedStyle(M);
      const items2 = [tmp.toast, animatedStyle];
      const View = ReanimatedRexportDefault.View;
      return (
        <sharedValue1 style={items1} pointerEvents="none">
          {null}
        </sharedValue1>
      );
    };
let result = size.fileFinishedImporting("modules/user_profile/native/ActionSheetBackdropToast.tsx");

export const ActionSheetBackdropToast = tmp5;
