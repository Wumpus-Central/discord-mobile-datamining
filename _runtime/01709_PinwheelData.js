// _runtime/01709_PinwheelData.js
import _slicedToArray_mod from "metro/01701__slicedToArray.js";

let _slicedToArray;
let items;
let items1;
let items2;
let items3;
let obj11;
let obj12;
let obj2;
let obj3;
let obj6;
let obj7;
const obj = { PinwheelIn: obj2, PinwheelOut: obj6 };
obj2 = { name: "PinwheelIn", style: obj3, duration: 0.3 };
obj3 = { 0: null, 100: null };
const obj4 = { transform: items, opacity: 0 };
items = [{ rotate: "5rad", scale: 0 }];
obj3[0] = obj4;
const obj5 = { transform: items1, opacity: 1 };
items1 = [{ rotate: "0deg", scale: 1 }];
obj3[100] = obj5;
obj6 = { name: "PinwheelOut", style: obj7, duration: 0.3 };
obj7 = { 0: null, 100: null };
const obj8 = { transform: items2, opacity: 1 };
items2 = [{ rotate: "0rad", scale: 1 }];
obj7[0] = obj8;
const obj9 = { transform: items3, opacity: 0 };
items3 = [{ rotate: "5rad", scale: 0 }];
obj7[100] = obj9;
const obj10 = { PinwheelIn: obj11, PinwheelOut: obj12 };
obj11 = { style: _slicedToArray.convertAnimationObjectToKeyframes(obj.PinwheelIn), duration: obj.PinwheelIn.duration };
_slicedToArray = _slicedToArray_mod;
obj12 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj.PinwheelOut),
  duration: obj.PinwheelOut.duration,
};
_slicedToArray = _slicedToArray_mod;

export const PinwheelData = obj;
export const Pinwheel = obj10;
