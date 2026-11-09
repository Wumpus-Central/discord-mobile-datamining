// === Module 19488: pip/usePIPAvoidanceSpecs ===

// Module 19488 (pip/usePIPAvoidanceSpecs)
import _mod1652 from "module_1652" /* 1652 */;
import cheapWorkletShallowEqual from "cheapWorkletShallowEqual" /* 10210 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11367 */;
import useAnimatedKeyboardHeightDefault from "useAnimatedKeyboardHeight" /* 12238 */;
import getPIPBottomOffsetForPIPModeDefault from "getPIPBottomOffsetForPIPMode" /* 19375 */;
import useScreenNameSharedValueDefault from "useScreenNameSharedValue" /* 19489 */;
import getAdjustedBottomOffsetsDefault from "getAdjustedBottomOffsets" /* 19490 */;
import size from "module_2" /* 2 */;

let closure_3 = { code: "(function usePIPAvoidanceSpecsTsx1(){let[keyboardHeight,safeArea,screenName]=this.__closure;return{keyboardHeight:keyboardHeight.get(),safeAreaBottom:safeArea.bottom,screenName:screenName.get()};})" };
let closure_4 = { code: "(function usePIPAvoidanceSpecsTsx2(props,previous){let[cheapWorkletShallowEqual,getPIPBottomOffsetForPIPMode,getAdjustedBottomOffsets,updateSharedValueIfChanged,pipAvoidanceSpecs]=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{keyboardHeight:keyboardHeight,safeAreaBottom:safeAreaBottom,screenName:screenName}=props;const screenBottomOffset=getPIPBottomOffsetForPIPMode(screenName);const{bottomOffset:bottomOffset}=getAdjustedBottomOffsets({screenBottomOffset:screenBottomOffset,safeAreaBottom:safeAreaBottom,keyboardHeight:keyboardHeight});updateSharedValueIfChanged(pipAvoidanceSpecs,{top:0,bottom:bottomOffset});})" };
const result = size.fileFinishedImporting("modules/activities/panel/native/pip/usePIPAvoidanceSpecs.tsx");

export default function usePIPAvoidanceSpecs(arg0) {
  const sharedValue = _mod1652.useSharedValue({ top: 0, bottom: 0 });
  const tmp5 = useAnimatedKeyboardHeightDefault();
  const tmp6 = useScreenNameSharedValueDefault();
  items = [_undefined4, tmp5, arg0, tmp6];
  [tmp7, tmp8, tmp9, tmp10] = items;
  function usePIPAvoidanceSpecsTsx1() {
    return { keyboardHeight: _undefined.get(), safeAreaBottom: _undefined2.bottom, screenName: _undefined3.get() };
  }
  const items1 = [tmp8, tmp9, tmp10];
  usePIPAvoidanceSpecsTsx1.__closure = items1;
  usePIPAvoidanceSpecsTsx1.__workletHash = 2538865691381;
  usePIPAvoidanceSpecsTsx1.__initData = tmp7;
  const items2 = [closure_4, cheapWorkletShallowEqual.cheapWorkletShallowEqual, getPIPBottomOffsetForPIPModeDefault, getAdjustedBottomOffsetsDefault, updateSharedValueIfChangedDefault, sharedValue];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items2;
  function usePIPAvoidanceSpecsTsx2(screenName, arg1) {
    if (!_undefined(screenName, tmp)) {
      ({ keyboardHeight, safeAreaBottom } = screenName);
      const obj = { screenBottomOffset: _undefined2(screenName.screenName), safeAreaBottom, keyboardHeight };
      const rect = { top: 0, bottom: _undefined3(obj).bottomOffset };
      _undefined4(c4, rect);
    }
    tmp = arg1;
  }
  const items3 = [tmp12, tmp13, tmp14, tmp15, tmp16];
  usePIPAvoidanceSpecsTsx2.__closure = items3;
  usePIPAvoidanceSpecsTsx2.__workletHash = 12351742460170;
  usePIPAvoidanceSpecsTsx2.__initData = tmp11;
  const animatedReaction = _mod1652.useAnimatedReaction(usePIPAvoidanceSpecsTsx1, usePIPAvoidanceSpecsTsx2);
  return sharedValue;
};