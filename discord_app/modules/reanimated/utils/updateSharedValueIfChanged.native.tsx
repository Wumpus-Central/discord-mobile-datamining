// discord_app/modules/reanimated/utils/updateSharedValueIfChanged.native.tsx
let fn2 = require;
const fn = function u(get) {
  if (globalThis._WORKLET) {
    const value = get.get();
    let obj = {};
    const merged = Object.assign(value);
    const merged1 = Object.assign(arg1);
    for (const key10024 in obj) {
      let tmp14 = key10024;
      if (value[key10024] === obj[key10024]) {
        continue;
      } else {
        let result = arg0.set(obj);
        break;
      }
      break;
    }
  } else {
    obj = fn2(4083);
    obj.runOnUI(fn)(get, arg1);
  }
};
let obj = { runOnUI: require("module_4083").runOnUI, updateSharedValueIfChanged: "a" };
fn.__closure = obj;
fn.__workletHash = 6367316923455;
fn.__initData = { code: "function updateSharedValueIfChangedNativeTsx2(sharedValue,value){const{runOnUI,updateSharedValueIfChanged}=this.__closure;if(!_WORKLET){runOnUI(updateSharedValueIfChanged)(sharedValue,value);}else{const _sharedValue=sharedValue.get();const newValue={..._sharedValue,...value};for(const key in newValue){if(_sharedValue[key]!==newValue[key]){sharedValue.set(newValue);break;}}}}" };
obj = { runOnUI: require("module_4083").runOnUI };
fn.__closure = obj;
fn.__workletHash = 13662114226774;
fn.__initData = { code: "function updateSharedValueIfChanged_updateSharedValueIfChangedNativeTsx1(sharedValue,value){const updateSharedValueIfChanged_updateSharedValueIfChangedNativeTsx1=this._recur;const{runOnUI}=this.__closure;if(!_WORKLET){runOnUI(updateSharedValueIfChanged_updateSharedValueIfChangedNativeTsx1)(sharedValue,value);}else{const _sharedValue=sharedValue.get();const newValue={..._sharedValue,...value};for(const key in newValue){if(_sharedValue[key]!==newValue[key]){sharedValue.set(newValue);break;}}}}" };
fn2 = undefined;
fn2 = function u(get) {
  if (globalThis._WORKLET) {
    const value = get.get();
    if (value.length !== arg1.length) {
      const result = get.set(arg1);
    }
    for (let num = 0; num < arg1.length; num = num + 1) {
      let tmp6 = num;
      if (value[num] !== arg1[num]) {
        let result1 = get.set(arg1);
      }
    }
  } else {
    fn2(4083).runOnUI(fn2)(get, arg1);
    const obj = fn2(4083);
  }
};
obj = { runOnUI: require("module_4083").runOnUI, updateSharedValueArrayIfChanged: "a" };
fn2.__closure = obj;
fn2.__workletHash = 10682766507787;
fn2.__initData = { code: "function updateSharedValueIfChangedNativeTsx4(sharedValue,value){const{runOnUI,updateSharedValueArrayIfChanged}=this.__closure;if(!_WORKLET){runOnUI(updateSharedValueArrayIfChanged)(sharedValue,value);}else{const _sharedValue=sharedValue.get();if(_sharedValue.length!==value.length){sharedValue.set(value);}for(let i=0;i<value.length;i++){if(_sharedValue[i]!==value[i]){sharedValue.set(value);}}}}" };
fn2.__closure = { runOnUI: require("module_4083").runOnUI };
fn2.__workletHash = 13887777879519;
fn2.__initData = { code: "function updateSharedValueArrayIfChanged_updateSharedValueIfChangedNativeTsx3(sharedValue,value){const updateSharedValueArrayIfChanged_updateSharedValueIfChangedNativeTsx3=this._recur;const{runOnUI}=this.__closure;if(!_WORKLET){runOnUI(updateSharedValueArrayIfChanged_updateSharedValueIfChangedNativeTsx3)(sharedValue,value);}else{const _sharedValue=sharedValue.get();if(_sharedValue.length!==value.length){sharedValue.set(value);}for(let i=0;i<value.length;i++){if(_sharedValue[i]!==value[i]){sharedValue.set(value);}}}}" };
const obj1 = { runOnUI: require("module_4083").runOnUI };
let result = require("set").fileFinishedImporting("modules/reanimated/utils/updateSharedValueIfChanged.native.tsx");

export default fn;
export const updateSharedValueArrayIfChanged = fn2;