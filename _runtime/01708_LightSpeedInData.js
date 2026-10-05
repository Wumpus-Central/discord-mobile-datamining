// _runtime/01708_LightSpeedInData.js
import _slicedToArray_mod from "metro/01701__slicedToArray.js";

let _slicedToArray;
let items;
let items1;
let items10;
let items11;
let items2;
let items3;
let items4;
let items5;
let items6;
let items7;
let items8;
let items9;
let obj15;
let obj16;
let obj19;
let obj2;
let obj20;
let obj24;
let obj25;
let obj27;
let obj28;
let obj3;
let obj8;
let obj9;
const obj = { LightSpeedInRight: obj2, LightSpeedInLeft: obj8 };
obj2 = { name: "LightSpeedInRight", style: obj3, duration: 0.3 };
obj3 = { 0: null, 70: null, 85: null, 100: null };
const obj4 = { transform: items, opacity: 0 };
items = [{ translateX: "100vw", skewX: "-45deg" }];
obj3[0] = obj4;
const obj5 = { transform: items1 };
items1 = [{ skewX: "10deg" }];
obj3[70] = obj5;
const obj6 = { transform: items2 };
items2 = [{ skewX: "-5deg" }];
obj3[85] = obj6;
const obj7 = { transform: items3 };
items3 = [{ skewX: "0deg" }];
obj3[100] = obj7;
obj8 = { name: "LightSpeedInLeft", style: obj9, duration: 0.3 };
obj9 = { 0: null, 70: null, 85: null, 100: null };
const obj10 = { transform: items4, opacity: 0 };
items4 = [{ translateX: "-100vw", skewX: "45deg" }];
obj9[0] = obj10;
const obj11 = { transform: items5 };
items5 = [{ skewX: "-10deg" }];
obj9[70] = obj11;
const obj12 = { transform: items6 };
items6 = [{ skewX: "5deg" }];
obj9[85] = obj12;
const obj13 = { transform: items7 };
items7 = [{ skewX: "0deg" }];
obj9[100] = obj13;
const obj14 = { LightSpeedOutRight: obj15, LightSpeedOutLeft: obj19 };
obj15 = { name: "LightSpeedOutRight", style: obj16, duration: 0.3 };
obj16 = { 0: null, 100: null };
const obj17 = { transform: items8, opacity: 1 };
items8 = [{ translateX: "0vw", skewX: "0deg" }];
obj16[0] = obj17;
const obj18 = { transform: items9, opacity: 0 };
items9 = [{ translateX: "100vw", skewX: "-45deg" }];
obj16[100] = obj18;
obj19 = { name: "LightSpeedOutLeft", style: obj20, duration: 0.3 };
obj20 = { 0: null, 100: null };
const obj21 = { transform: items10, opacity: 1 };
items10 = [{ translateX: "0vw", skew: "0deg" }];
obj20[0] = obj21;
const obj22 = { transform: items11, opacity: 0 };
items11 = [{ translateX: "-100vw", skew: "45deg" }];
obj20[100] = obj22;
const obj23 = { LightSpeedInRight: obj24, LightSpeedInLeft: obj25 };
obj24 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj.LightSpeedInRight),
  duration: obj.LightSpeedInRight.duration,
};
_slicedToArray = _slicedToArray_mod;
obj25 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj.LightSpeedInLeft),
  duration: obj.LightSpeedInLeft.duration,
};
_slicedToArray = _slicedToArray_mod;
const obj26 = { LightSpeedOutRight: obj27, LightSpeedOutLeft: obj28 };
obj27 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj14.LightSpeedOutRight),
  duration: obj14.LightSpeedOutRight.duration,
};
_slicedToArray = _slicedToArray_mod;
obj28 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj14.LightSpeedOutLeft),
  duration: obj14.LightSpeedOutLeft.duration,
};
_slicedToArray = _slicedToArray_mod;

export const LightSpeedInData = obj;
export const LightSpeedOutData = obj14;
export const LightSpeedIn = obj23;
export const LightSpeedOut = obj26;
