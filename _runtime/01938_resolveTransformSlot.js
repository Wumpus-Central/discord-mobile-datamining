// _runtime/01938_resolveTransformSlot.js
import _slicedToArray from "metro/00032__.js";

const items = [
  {
    code: "(function resolveTransformSlot_Pnpm_utilsTs1(entry,index,values){var _ref,_values,_values$transform;const[key,defaultValue]=Object.entries(entry)[0];const value=(_ref=(_values=values===null||values===void 0?void 0:values[key])!==null&&_values!==void 0?_values:values===null||values===void 0||(_values$transform=values.transform)===null||_values$transform===void 0||(_values$transform=_values$transform[index])===null||_values$transform===void 0?void 0:_values$transform[key])!==null&&_ref!==void 0?_ref:defaultValue;return{key:key,value:value};})",
  },
];
[tmp2] = items;
function resolveTransformSlot(arg0, arg1, targetValues) {
  const tmp = _slicedToArray(Object.entries(arg0)[0], 2);
  const first = tmp[0];
  const entry = { key: first, value: null };
  let tmp3;
  if (targetValues != null) {
    tmp3 = targetValues[first];
  }
  if (tmp3 == null) {
    let tmp4;
    if (targetValues != null) {
      const transform = targetValues.transform;
      if (transform != null) {
        if (transform[arg1] != null) {
          tmp4 = tmp6[first];
        }
      }
    }
    tmp3 = tmp4;
  }
  if (tmp3 == null) {
    tmp3 = tmp[1];
  }
  entry.value = tmp3;
  return entry;
}
resolveTransformSlot.__workletHash = 8600046602339;
resolveTransformSlot.__initData = tmp2;
const items1 = [
  {
    code: "(function resolveTransformValue_Pnpm_utilsTs2(entry,index,values){let[resolveTransformSlot]=this.__closure;return resolveTransformSlot(entry,index,values).value;})",
  },
  resolveTransformSlot,
];
let closure_129_0;
[tmp3, tmp4] = items1;
function resolveTransformValue(arg0, arg1, arg2) {
  return _slicedToArray(arg0, arg1, arg2).value;
}
const items2 = [tmp4];
resolveTransformValue.__closure = items2;
resolveTransformValue.__workletHash = 11922144251680;
resolveTransformValue.__initData = tmp3;
const items3 = [
  {
    code: "(function pickTransformValues_Pnpm_utilsTs3(defaults,values){let[resolveTransformSlot]=this.__closure;return defaults.map(function(entry,index){const{key:key,value:value}=resolveTransformSlot(entry,index,values);return{[key]:value};});})",
  },
  resolveTransformSlot,
];
let closure_130_0;
[tmp5, tmp6] = items3;
function pickTransformValues(arr, arg1) {
  closure_0 = arg1;
  return arr.map((item, index) => {
    const iter = _slicedToArray(item, index, closure_0);
    return { [iter.key]: iter.value };
  });
}
const items4 = [tmp6];
pickTransformValues.__closure = items4;
pickTransformValues.__workletHash = 10539171784218;
pickTransformValues.__initData = tmp5;
const items5 = [
  {
    code: "(function animateTransformToValues_Pnpm_utilsTs4(defaults,values,[animation,config],delayFunction,delay){let[resolveTransformSlot]=this.__closure;return defaults.map(function(entry,index){const{key:key,value:value}=resolveTransformSlot(entry,index,values);return{[key]:delayFunction(delay,animation(value,config))};});})",
  },
  resolveTransformSlot,
];
let closure_131_0;
[tmp7, tmp8] = items5;
function animateTransformToValues(arr, arg1, arg2, arg3, arg4) {
  closure_0 = arg1;
  [closure_1] = arg2;
  closure_3 = arg3;
  closure_4 = arg4;
  return arr.map((item, index) => {
    const iter = _slicedToArray(item, index, closure_0);
    return { [iter.key]: closure_3(closure_4, nextResult(iter.value, nextResult1)) };
  });
}
const items6 = [tmp8];
animateTransformToValues.__closure = items6;
animateTransformToValues.__workletHash = 492971438186;
animateTransformToValues.__initData = tmp7;

export { resolveTransformSlot };
export { resolveTransformValue };
export { pickTransformValues };
export { animateTransformToValues };
