// === Module 16531: useMainTabsChannelScreenStyles ===

// Module 16531 (useMainTabsChannelScreenStyles)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import noop from "module_19" /* 19 */;

require = fn;
fn(4560);
let createStyles = { elevation: null };
createStyles = {};
const merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
const merged1 = Object.assign(nativeDefault.shadows.SHADOW_LOW);
createStyles.elevation = createStyles;
let closure_3 = createStyles.createStyles(createStyles);
let __initData = { code: "function useMainTabsChannelScreenStylesTsx1(){const{freezeValue,isDragging,translateX,maxWidth,elevationStyle,isCompletelyCovered}=this.__closure;var _freezeValue,_isCompletelyCovered;(_freezeValue=freezeValue)===null||_freezeValue===void 0||_freezeValue.get();const showBorder=isDragging.get()||translateX.get()!==0&&translateX.get()!==maxWidth;return{transform:[{translateX:translateX.get()}],shadowOpacity:showBorder?elevationStyle.shadowOpacity:0,elevation:showBorder?elevationStyle.elevation:0,opacity:(_isCompletelyCovered=isCompletelyCovered)!==null&&_isCompletelyCovered!==void 0&&_isCompletelyCovered.get()?0:1};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/useMainTabsChannelScreenStyles.tsx");

export const useMainTabsChannelScreenStyles = function useMainTabsChannelScreenStyles(isDragging, translateX, maxWidth, derivedValue, parentFreezeValue) {
  closure_2 = maxWidth;
  __initData = parentFreezeValue;
  const tmp = derivedValue();
  const elevation = tmp.elevation;
  const fn = function c() {
    let obj = closure_4;
    if (closure_4 != null) {
      value = obj.get();
    }
    value = isDragging.get();
    if (!value) {
      let tmp3 = 0 !== translateX.get();
      if (tmp3) {
        tmp3 = obj2.get() !== closure_2;
      }
      value = tmp3;
      obj2 = translateX;
    }
    obj = { transform: null, shadowOpacity: null, elevation: null, opacity: null };
    obj = { translateX: translateX.get() };
    const items = [obj];
    obj.transform = items;
    let num2 = 0;
    if (value) {
      num2 = elevation.shadowOpacity;
    }
    obj.shadowOpacity = num2;
    let num3 = 0;
    if (value) {
      num3 = elevation.elevation;
    }
    obj.elevation = num3;
    let value1;
    if (derivedValue != null) {
      value1 = derivedValue.get();
    }
    let num4 = 1;
    if (value1) {
      num4 = 0;
    }
    obj.opacity = num4;
    return obj;
  };
  fn.__closure = { freezeValue: parentFreezeValue, isDragging, translateX, maxWidth, elevationStyle: elevation, isCompletelyCovered: derivedValue };
  fn.__workletHash = 16765484569296;
  fn.__initData = __initData;
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
  let items = [tmp, animatedStyle];
  return noop.useMemo(() => {
    const items = [elevation.elevation, animatedStyle];
    return items;
  }, items);
};