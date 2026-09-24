// === Module 17577: pip/usePIPAvoidanceSpecs ===

// Module 17577 (pip/usePIPAvoidanceSpecs)
import cheapWorkletShallowEqual from "cheapWorkletShallowEqual" /* 9747 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11703 */;
import getPIPBottomOffsetForPIPModeDefault from "getPIPBottomOffsetForPIPMode" /* 17483 */;
import getAdjustedBottomOffsetsDefault from "getAdjustedBottomOffsets" /* 17579 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let __initData = { code: "function usePIPAvoidanceSpecsTsx1(){const{keyboardHeight,safeArea,screenName}=this.__closure;return{keyboardHeight:keyboardHeight.get(),safeAreaBottom:safeArea.bottom,screenName:screenName.get()};}" };
const __initData2 = { code: "function usePIPAvoidanceSpecsTsx2(props,previous){const{cheapWorkletShallowEqual,getPIPBottomOffsetForPIPMode,getAdjustedBottomOffsets,updateSharedValueIfChanged,pipAvoidanceSpecs}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{keyboardHeight:keyboardHeight,safeAreaBottom:safeAreaBottom,screenName:screenName}=props;const screenBottomOffset=getPIPBottomOffsetForPIPMode(screenName);const{bottomOffset:bottomOffset}=getAdjustedBottomOffsets({screenBottomOffset:screenBottomOffset,safeAreaBottom:safeAreaBottom,keyboardHeight:keyboardHeight});updateSharedValueIfChanged(pipAvoidanceSpecs,{top:0,bottom:bottomOffset});}" };
const result = size.fileFinishedImporting("modules/activities/panel/native/pip/usePIPAvoidanceSpecs.tsx");

export default function usePIPAvoidanceSpecs(safeArea) {
  _require = safeArea;
  const sharedValue = require("ReanimatedRexport").useSharedValue({ top: 0, bottom: 0 });
  const tmp2 = sharedValue(17055)();
  dependencyMap = tmp2;
  const tmp3 = sharedValue(17578)();
  __initData = tmp3;
  let obj = require("ReanimatedRexport");
  const fn = function n() {
    return { keyboardHeight: closure_2.get(), safeAreaBottom: safeArea.bottom, screenName: closure_3.get() };
  };
  fn.__closure = { keyboardHeight: tmp2, safeArea, screenName: tmp3 };
  fn.__workletHash = 9790941132204;
  fn.__initData = __initData;
  const fn2 = function f(safeAreaState, current) {
    if (!obj.cheapWorkletShallowEqual(safeAreaState, tmp)) {
      ({ keyboardHeight, safeAreaBottom, screenName } = safeAreaState);
      const obj2 = { screenBottomOffset: getPIPBottomOffsetForPIPModeDefault(screenName), safeAreaBottom, keyboardHeight };
      const rect = { top: 0, bottom: getAdjustedBottomOffsetsDefault(obj2).bottomOffset };
      updateSharedValueIfChangedDefault(sharedValue, rect);
      const tmp4 = getPIPBottomOffsetForPIPModeDefault(screenName);
    }
    obj = cheapWorkletShallowEqual;
    tmp = current;
  };
  let obj2 = require("ReanimatedRexport");
  fn2.__closure = { cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual, getPIPBottomOffsetForPIPMode: sharedValue(17483), getAdjustedBottomOffsets: sharedValue(17579), updateSharedValueIfChanged: sharedValue(11703), pipAvoidanceSpecs: sharedValue };
  fn2.__workletHash = 643938425459;
  fn2.__initData = __initData2;
  const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
  return sharedValue;
};