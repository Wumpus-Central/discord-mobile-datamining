import noop from "noop";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { elevation: null };
createCacheKey = {};
const merged = Object.assign(require("get ActivityIndicator").StyleSheet.absoluteFillObject);
const merged1 = Object.assign(require("Themes").shadows.SHADOW_LOW);
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_4 = { code: "function useMainTabsChannelScreenStylesTsx1(){const{freezeValue,isDragging,translateX,maxWidth,elevationStyle,isCompletelyCovered}=this.__closure;var _freezeValue,_isCompletelyCovered;(_freezeValue=freezeValue)===null||_freezeValue===void 0||_freezeValue.get();const showBorder=isDragging.get()||translateX.get()!==0&&translateX.get()!==maxWidth;return{transform:[{translateX:translateX.get()}],shadowOpacity:showBorder?elevationStyle.shadowOpacity:0,elevation:showBorder?elevationStyle.elevation:0,opacity:(_isCompletelyCovered=isCompletelyCovered)!==null&&_isCompletelyCovered!==void 0&&_isCompletelyCovered.get()?0:1};}" };
const result = require("createCacheKey").fileFinishedImporting("modules/main_tabs_v2/native/panels/useMainTabsChannelScreenStyles.tsx");

export const useMainTabsChannelScreenStyles = function useMainTabsChannelScreenStyles(isDragging, translateX, maxWidth, derivedValue, parentFreezeValue) {
  const _require = isDragging;
  const dependencyMap = translateX;
  const React = maxWidth;
  const createCacheKey = derivedValue;
  let closure_4 = parentFreezeValue;
  const tmp = createCacheKey();
  let closure_5 = tmp;
  const elevation = tmp.elevation;
  const fn = function c() {
    let obj = closure_4;
    if (closure_4 != null) {
      let value = obj.get();
    }
    value = isDragging.get();
    if (!value) {
      let tmp3 = 0 !== translateX.get();
      if (tmp3) {
        tmp3 = obj2.get() !== noop;
      }
      value = tmp3;
      obj2 = translateX;
    }
    obj = { transform: null, shadowOpacity: null, elevation: null, opacity: null };
    obj = { translateX: translateX.get() };
    const items = [obj];
    obj[0] = items;
    let num2 = 0;
    if (value) {
      num2 = elevation.shadowOpacity;
    }
    obj[1] = num2;
    let num3 = 0;
    if (value) {
      num3 = elevation.elevation;
    }
    obj[2] = num3;
    let value1;
    if (closure_3 != null) {
      value1 = closure_3.get();
    }
    let num4 = 1;
    if (value1) {
      num4 = 0;
    }
    obj[3] = num4;
    return obj;
  };
  fn.__closure = { freezeValue: parentFreezeValue, isDragging, translateX, maxWidth, elevationStyle: elevation, isCompletelyCovered: derivedValue };
  fn.__workletHash = 16765484569296;
  fn.__initData = closure_4;
  const animatedStyle = _require(4146).useAnimatedStyle(fn);
  let items = [tmp, animatedStyle];
  return React.useMemo(() => {
    const items = [tmp.elevation, animatedStyle];
    return items;
  }, items);
};