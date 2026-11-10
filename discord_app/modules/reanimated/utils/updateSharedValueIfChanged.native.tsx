// === Module 11376: updateSharedValueIfChanged ===

// Module 11376 (updateSharedValueIfChanged)
import _mod1705 from "module_1705" /* 1705 */;
import size from "module_2" /* 2 */;

const items = [{ code: "(function updateSharedValueIfChanged_updateSharedValueIfChangedNativeTsx1(sharedValue,value){const updateSharedValueIfChanged_updateSharedValueIfChangedNativeTsx1=this._recur;let[scheduleOnUI]=this.__closure;if(!_WORKLET){scheduleOnUI(updateSharedValueIfChanged_updateSharedValueIfChangedNativeTsx1,sharedValue,value);}else{const _sharedValue=sharedValue.get();const newValue={..._sharedValue,...value};for(const key in newValue){if(_sharedValue[key]!==newValue[key]){sharedValue.set(newValue);break;}}}})" }, _mod1705.scheduleOnUI];
let c0;
[tmp2, tmp3] = items;
function updateSharedValueIfChanged(get, arg1) {
  if (globalThis._WORKLET) {
    value = get.get();
    const obj = {};
    const merged = Object.assign(value);
    const merged1 = Object.assign(arg1);
    for (const key10019 in obj) {
      if (value[key10019] === obj[key10019]) {
        continue;
      } else {
        let result = arg0.set(obj);
        break;
      }
      break;
    }
  } else {
    _undefined(updateSharedValueIfChanged, get, arg1);
  }
}
const items1 = [tmp3];
updateSharedValueIfChanged.__closure = items1;
updateSharedValueIfChanged.__workletHash = 7240397684674;
updateSharedValueIfChanged.__initData = tmp2;
const items2 = [{ code: "(function updateSharedValueArrayIfChanged_updateSharedValueIfChangedNativeTsx2(sharedValue,value){const updateSharedValueArrayIfChanged_updateSharedValueIfChangedNativeTsx2=this._recur;let[scheduleOnUI]=this.__closure;if(!_WORKLET){scheduleOnUI(updateSharedValueArrayIfChanged_updateSharedValueIfChangedNativeTsx2,sharedValue,value);}else{const _sharedValue=sharedValue.get();if(_sharedValue.length!==value.length){sharedValue.set(value);}for(let i=0;i<value.length;i++){if(_sharedValue[i]!==value[i]){sharedValue.set(value);}}}})" }, _mod1705.scheduleOnUI];
let closure_129_0;
[tmp4, tmp5] = items2;
function updateSharedValueArrayIfChanged(sharedValue, arg1) {
  if (globalThis._WORKLET) {
    value = sharedValue.get();
    if (value.length !== arg1.length) {
      const result = sharedValue.set(arg1);
    }
    for (let num = 0; num < arg1.length; num = num + 1) {
      if (value[num] !== arg1[num]) {
        let result1 = sharedValue.set(arg1);
      }
    }
  } else {
    _undefined(updateSharedValueIfChanged, sharedValue, arg1);
  }
}
let closure_129_1 = updateSharedValueArrayIfChanged;
const items3 = [tmp5];
updateSharedValueArrayIfChanged.__closure = items3;
updateSharedValueArrayIfChanged.__workletHash = 11311716479018;
updateSharedValueArrayIfChanged.__initData = tmp4;
let result = size.fileFinishedImporting("modules/reanimated/utils/updateSharedValueIfChanged.native.tsx");

export default updateSharedValueIfChanged;
export { updateSharedValueArrayIfChanged };