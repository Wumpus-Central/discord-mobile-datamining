// === Module 16901: useMainTabsChannelScreenStyles ===

// Module 16901 (useMainTabsChannelScreenStyles)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import noop from "module_19" /* 19 */;

require = fn;
const createStyles = fn(5091);
const obj2 = { elevation: null };
const merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
const merged1 = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj2.elevation = {};
let closure_3 = createStyles.createStyles(obj2);
let __initData = { code: "function useMainTabsChannelScreenStylesTsx1(){const{freezeValue,isDragging,translateX,maxWidth,elevationStyle,isCompletelyCovered}=this.__closure;var _freezeValue,_isCompletelyCovered;(_freezeValue=freezeValue)===null||_freezeValue===void 0||_freezeValue.get();const showBorder=isDragging.get()||translateX.get()!==0&&translateX.get()!==maxWidth;return{transform:[{translateX:translateX.get()}],shadowOpacity:showBorder?elevationStyle.shadowOpacity:0,elevation:showBorder?elevationStyle.elevation:0,opacity:(_isCompletelyCovered=isCompletelyCovered)!==null&&_isCompletelyCovered!==void 0&&_isCompletelyCovered.get()?0:1};}" };
let __initData2 = { code: "function useMainTabsChannelScreenStylesTsx2(){const{freezeValue,isDragging,translateX,maxWidth,elevationStyle,isCompletelyCovered}=this.__closure;var _freezeValue,_isCompletelyCovered;(_freezeValue=freezeValue)===null||_freezeValue===void 0||_freezeValue.get();const showBorder=isDragging.get()||translateX.get()!==0&&translateX.get()!==maxWidth;return{transform:[{translateX:translateX.get()}],shadowOpacity:showBorder?elevationStyle.shadowOpacity:0,elevation:showBorder?elevationStyle.elevation:0,opacity:(_isCompletelyCovered=isCompletelyCovered)!==null&&_isCompletelyCovered!==void 0&&_isCompletelyCovered.get()?0:1};}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/useMainTabsChannelScreenStyles.tsx");

export const useMainTabsChannelScreenStyles = ReactCompilerGating.isReactCompilerEnabled() ? (function useMainTabsChannelScreenStyles(isDragging, translateX, maxWidth, isCompletelyCovered, freezeValue) {
  closure_2 = maxWidth;
  __initData = freezeValue;
  const cResult = c.c(3);
  const tmp2 = isCompletelyCovered();
  const elevation = tmp2.elevation;
  const fn = function y() {
    if (closure_4 != null) {
      value = closure_4.get();
    }
    value3 = isDragging.get();
    if (!value3) {
      let tmp3 = 0 !== translateX.get();
      if (tmp3) {
        tmp3 = translateX.get() !== closure_2;
      }
      value3 = tmp3;
    }
    const obj3 = { transform: null, shadowOpacity: null, elevation: null, opacity: null };
    const items = [{ translateX: translateX.get() }];
    obj3.transform = items;
    let num2 = 0;
    if (value3) {
      num2 = elevation.shadowOpacity;
    }
    obj3.shadowOpacity = num2;
    let num3 = 0;
    if (value3) {
      num3 = elevation.elevation;
    }
    obj3.elevation = num3;
    let value4;
    if (isCompletelyCovered != null) {
      value4 = isCompletelyCovered.get();
    }
    let num4 = 1;
    if (value4) {
      num4 = 0;
    }
    obj3.opacity = num4;
    return obj3;
  };
  fn.__closure = { freezeValue, isDragging, translateX, maxWidth, elevationStyle: elevation, isCompletelyCovered };
  fn.__workletHash = 16765484569296;
  fn.__initData = __initData;
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
  if (cResult[0] === animatedStyle) {
    if (cResult[1] === tmp2.elevation) {
      let tmp4 = cResult[2];
    }
    return tmp4;
  }
  let items = [tmp2.elevation, animatedStyle];
  cResult[0] = animatedStyle;
  cResult[1] = tmp2.elevation;
  cResult[2] = items;
  tmp4 = items;
}) : (function useMainTabsChannelScreenStyles(isDragging, translateX, maxWidth, isCompletelyCovered, freezeValue) {
  closure_2 = maxWidth;
  closure_4 = freezeValue;
  const tmp = isCompletelyCovered();
  __initData2 = tmp;
  const elevation = tmp.elevation;
  const fn = function c() {
    if (closure_4 != null) {
      value = closure_4.get();
    }
    value3 = isDragging.get();
    if (!value3) {
      let tmp3 = 0 !== translateX.get();
      if (tmp3) {
        tmp3 = translateX.get() !== closure_2;
      }
      value3 = tmp3;
    }
    const obj3 = { transform: null, shadowOpacity: null, elevation: null, opacity: null };
    const items = [{ translateX: translateX.get() }];
    obj3.transform = items;
    let num2 = 0;
    if (value3) {
      num2 = elevation.shadowOpacity;
    }
    obj3.shadowOpacity = num2;
    let num3 = 0;
    if (value3) {
      num3 = elevation.elevation;
    }
    obj3.elevation = num3;
    let value4;
    if (isCompletelyCovered != null) {
      value4 = isCompletelyCovered.get();
    }
    let num4 = 1;
    if (value4) {
      num4 = 0;
    }
    obj3.opacity = num4;
    return obj3;
  };
  fn.__closure = { freezeValue, isDragging, translateX, maxWidth, elevationStyle: elevation, isCompletelyCovered };
  fn.__workletHash = 2313603447059;
  fn.__initData = __initData2;
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
  let items = [tmp, animatedStyle];
  return noop.useMemo(() => {
    const items = [elevation.elevation, animatedStyle];
    return items;
  }, items);
});