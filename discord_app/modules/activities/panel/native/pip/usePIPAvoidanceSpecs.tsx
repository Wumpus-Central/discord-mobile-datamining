// === Module 17010: pip/usePIPAvoidanceSpecs ===

// Module 17010 (pip/usePIPAvoidanceSpecs)
import cheapWorkletShallowEqual from "cheapWorkletShallowEqual" /* 9495 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11354 */;
import getPIPBottomOffsetForPIPModeDefault from "getPIPBottomOffsetForPIPMode" /* 16910 */;
import getAdjustedBottomOffsetsDefault from "getAdjustedBottomOffsets" /* 17012 */;
import size from "module_2" /* 2 */;

let __initData = { code: "function usePIPAvoidanceSpecsTsx1(){const{keyboardHeight,safeArea,screenName}=this.__closure;return{keyboardHeight:keyboardHeight.get(),safeAreaBottom:safeArea.bottom,screenName:screenName.get()};}" };
const __initData2 = { code: "function usePIPAvoidanceSpecsTsx2(props,previous){const{cheapWorkletShallowEqual,getPIPBottomOffsetForPIPMode,getAdjustedBottomOffsets,updateSharedValueIfChanged,pipAvoidanceSpecs}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{keyboardHeight:keyboardHeight,safeAreaBottom:safeAreaBottom,screenName:screenName}=props;const screenBottomOffset=getPIPBottomOffsetForPIPMode(screenName);const{bottomOffset:bottomOffset}=getAdjustedBottomOffsets({screenBottomOffset:screenBottomOffset,safeAreaBottom:safeAreaBottom,keyboardHeight:keyboardHeight});updateSharedValueIfChanged(pipAvoidanceSpecs,{top:0,bottom:bottomOffset});}" };
const result = size.fileFinishedImporting("modules/activities/panel/native/pip/usePIPAvoidanceSpecs.tsx");

export default function usePIPAvoidanceSpecs(safeArea) {
  _require = safeArea;
  let obj = require("ReanimatedRexport");
  const sharedValue = obj.useSharedValue({ top: 0, bottom: 0 });
  const tmp2 = sharedValue(16689)();
  dependencyMap = tmp2;
  const tmp3 = sharedValue(17011)();
  __initData = tmp3;
  const fn = function n() {
    return { keyboardHeight: closure_2.get(), safeAreaBottom: safeArea.bottom, screenName: closure_3.get() };
  };
  fn.__closure = { keyboardHeight: tmp2, safeArea, screenName: tmp3 };
  fn.__workletHash = 9790941132204;
  fn.__initData = __initData;
  const fn2 = function f(safeAreaState, current) {
    let obj = cheapWorkletShallowEqual;
    if (!obj.cheapWorkletShallowEqual(safeAreaState, current)) {
      ({ keyboardHeight, safeAreaBottom, screenName } = safeAreaState);
      obj = { screenBottomOffset: getPIPBottomOffsetForPIPModeDefault(screenName), safeAreaBottom, keyboardHeight };
      const rect = { top: 0, bottom: getAdjustedBottomOffsetsDefault(obj).bottomOffset };
      updateSharedValueIfChangedDefault(sharedValue, rect);
      const tmp4 = getPIPBottomOffsetForPIPModeDefault(screenName);
    }
  };
  obj = { cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual, getPIPBottomOffsetForPIPMode: sharedValue(16910), getAdjustedBottomOffsets: sharedValue(17012), updateSharedValueIfChanged: sharedValue(11354), pipAvoidanceSpecs: sharedValue };
  fn2.__closure = obj;
  fn2.__workletHash = 643938425459;
  fn2.__initData = __initData2;
  const animatedReaction = require("ReanimatedRexport").useAnimatedReaction(fn, fn2);
  return sharedValue;
};