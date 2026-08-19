// === Module 16229: usePIPAvoidanceSpecs ===

// Module 16229 (usePIPAvoidanceSpecs)
import set from "set" /* 2 */;

let closure_3 = { code: "function usePIPAvoidanceSpecsTsx1(){const{keyboardHeight,safeArea,screenName}=this.__closure;return{keyboardHeight:keyboardHeight.get(),safeAreaBottom:safeArea.bottom,screenName:screenName.get()};}" };
let closure_4 = { code: "function usePIPAvoidanceSpecsTsx2(props,previous){const{cheapWorkletShallowEqual,getPIPBottomOffsetForPIPMode,getAdjustedBottomOffsets,updateSharedValueIfChanged,pipAvoidanceSpecs}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{keyboardHeight:keyboardHeight,safeAreaBottom:safeAreaBottom,screenName:screenName}=props;const screenBottomOffset=getPIPBottomOffsetForPIPMode(screenName);const{bottomOffset:bottomOffset}=getAdjustedBottomOffsets({screenBottomOffset:screenBottomOffset,safeAreaBottom:safeAreaBottom,keyboardHeight:keyboardHeight});updateSharedValueIfChanged(pipAvoidanceSpecs,{top:0,bottom:bottomOffset});}" };
const result = set.fileFinishedImporting("modules/activities/panel/native/pip/usePIPAvoidanceSpecs.tsx");

export default function usePIPAvoidanceSpecs(safeArea) {
  const _require = safeArea;
  let obj = _require(4115);
  const sharedValue = obj.useSharedValue({ top: 0, bottom: 0 });
  const tmp2 = sharedValue(16184)();
  dependencyMap = tmp2;
  const tmp3 = sharedValue(16230)();
  closure_3 = tmp3;
  const fn = function n() {
    return { keyboardHeight: closure_2.get(), safeAreaBottom: safeArea.bottom, screenName: closure_3.get() };
  };
  fn.__closure = { keyboardHeight: tmp2, safeArea, screenName: tmp3 };
  fn.__workletHash = 9790941132204;
  fn.__initData = closure_3;
  const fn2 = function f(safeAreaState, current) {
    let obj = safeArea(closure_2[3]);
    if (!obj.cheapWorkletShallowEqual(safeAreaState, current)) {
      ({ keyboardHeight, safeAreaBottom, screenName } = safeAreaState);
      obj = { screenBottomOffset: null, safeAreaBottom: null, keyboardHeight: null };
      obj[0] = sharedValue(tmp2[4])(screenName);
      obj[1] = safeAreaBottom;
      obj[2] = keyboardHeight;
      obj = { top: 0, bottom: null };
      obj[1] = sharedValue(tmp2[5])(obj).bottomOffset;
      sharedValue(tmp2[6])(sharedValue, obj);
      const tmp4 = sharedValue(tmp2[4])(screenName);
    }
  };
  obj = { cheapWorkletShallowEqual: _require(8692).cheapWorkletShallowEqual, getPIPBottomOffsetForPIPMode: sharedValue(16126), getAdjustedBottomOffsets: sharedValue(16231), updateSharedValueIfChanged: sharedValue(10561), pipAvoidanceSpecs: sharedValue };
  fn2.__closure = obj;
  fn2.__workletHash = 643938425459;
  fn2.__initData = closure_4;
  const animatedReaction = _require(4115).useAnimatedReaction(fn, fn2);
  return sharedValue;
};