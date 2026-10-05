// === Module 16477: useMainTabsChannelScreenStyles ===

// Module 16477 (useMainTabsChannelScreenStyles)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const StyleSheet = react_native.StyleSheet;
let createStyles = createStyles_mod;
let obj = { elevation: obj2 };
obj2 = {};
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
const merged1 = Object.assign(nativeDefault.shadows.SHADOW_LOW);
let closure_3 = createStyles(obj);
let __initData = { code: "function useMainTabsChannelScreenStylesTsx1(){const{freezeValue,isDragging,translateX,maxWidth,elevationStyle,isCompletelyCovered}=this.__closure;var _freezeValue,_isCompletelyCovered;(_freezeValue=freezeValue)===null||_freezeValue===void 0||_freezeValue.get();const showBorder=isDragging.get()||translateX.get()!==0&&translateX.get()!==maxWidth;return{transform:[{translateX:translateX.get()}],shadowOpacity:showBorder?elevationStyle.shadowOpacity:0,elevation:showBorder?elevationStyle.elevation:0,opacity:(_isCompletelyCovered=isCompletelyCovered)!==null&&_isCompletelyCovered!==void 0&&_isCompletelyCovered.get()?0:1};}" };
let __initData2 = { code: "function useMainTabsChannelScreenStylesTsx2(){const{freezeValue,isDragging,translateX,maxWidth,elevationStyle,isCompletelyCovered}=this.__closure;var _freezeValue,_isCompletelyCovered;(_freezeValue=freezeValue)===null||_freezeValue===void 0||_freezeValue.get();const showBorder=isDragging.get()||translateX.get()!==0&&translateX.get()!==maxWidth;return{transform:[{translateX:translateX.get()}],shadowOpacity:showBorder?elevationStyle.shadowOpacity:0,elevation:showBorder?elevationStyle.elevation:0,opacity:(_isCompletelyCovered=isCompletelyCovered)!==null&&_isCompletelyCovered!==void 0&&_isCompletelyCovered.get()?0:1};}" };
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((isDragging, translateX, maxWidth, isCompletelyCovered, freezeValue) => {
  let closure_0 = isDragging;
  let closure_1 = translateX;
  let closure_2 = maxWidth;
  closure_3 = isCompletelyCovered;
  __initData = freezeValue;
  const obj = react2;
  const cResult = obj.c(3);
  const tmp2 = closure_3();
  const elevation = tmp2.elevation;
  const fn = function y() {
    let items;
    let num2;
    let num3;
    let num4;
    if (closure_4 != null) {
      const value = closure_4.get();
    }
    let value3 = closure_0.get();
    if (!value3) {
      value3 = 0 !== closure_1.get() && closure_1.get() !== closure_2;
      const tmp3 = 0 !== closure_1.get() && closure_1.get() !== closure_2;
    }
    const obj3 = { transform: items, shadowOpacity: num2, elevation: num3, opacity: num4 };
    items = [{ translateX: closure_1.get() }];
    num2 = 0;
    ({ translateX: closure_1.get() });
    if (value3) {
      num2 = elevation.shadowOpacity;
    }
    num3 = 0;
    if (value3) {
      num3 = elevation.elevation;
    }
    let value4;
    if (closure_3 != null) {
      value4 = closure_3.get();
    }
    num4 = 1;
    if (value4) {
      num4 = 0;
    }
    return obj3;
  };
  fn.__closure = { freezeValue, isDragging, translateX, maxWidth, elevationStyle: elevation, isCompletelyCovered };
  fn.__workletHash = 16765484569296;
  fn.__initData = __initData;
  const obj2 = ReanimatedRexport;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (cResult[0] === animatedStyle) {
    let tmp4;
    if (cResult[1] === tmp2.elevation) {
      tmp4 = cResult[2];
    }
    return tmp4;
  }
  let items = [tmp2.elevation, animatedStyle];
  cResult[0] = animatedStyle;
  cResult[1] = tmp2.elevation;
  cResult[2] = items;
  tmp4 = items;
}) : ((isDragging, translateX, maxWidth, isCompletelyCovered, freezeValue) => {
  let closure_0 = isDragging;
  let closure_1 = translateX;
  let closure_2 = maxWidth;
  closure_3 = isCompletelyCovered;
  let closure_4 = freezeValue;
  const tmp = closure_3();
  __initData2 = tmp;
  const elevation = tmp.elevation;
  const fn = function c() {
    let items;
    let num2;
    let num3;
    let num4;
    if (closure_4 != null) {
      const value = closure_4.get();
    }
    let value3 = closure_0.get();
    if (!value3) {
      value3 = 0 !== closure_1.get() && closure_1.get() !== closure_2;
      const tmp3 = 0 !== closure_1.get() && closure_1.get() !== closure_2;
    }
    const obj3 = { transform: items, shadowOpacity: num2, elevation: num3, opacity: num4 };
    items = [{ translateX: closure_1.get() }];
    num2 = 0;
    ({ translateX: closure_1.get() });
    if (value3) {
      num2 = elevation.shadowOpacity;
    }
    num3 = 0;
    if (value3) {
      num3 = elevation.elevation;
    }
    let value4;
    if (closure_3 != null) {
      value4 = closure_3.get();
    }
    num4 = 1;
    if (value4) {
      num4 = 0;
    }
    return obj3;
  };
  fn.__closure = { freezeValue, isDragging, translateX, maxWidth, elevationStyle: elevation, isCompletelyCovered };
  fn.__workletHash = 2313603447059;
  fn.__initData = __initData2;
  const obj = ReanimatedRexport;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let items = [tmp, animatedStyle];
  return react.useMemo(() => {
    const items = [elevation.elevation, animatedStyle];
    return items;
  }, items);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/useMainTabsChannelScreenStyles.tsx");

export const useMainTabsChannelScreenStyles = tmp5;