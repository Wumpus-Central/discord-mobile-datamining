// _runtime/01707_SlideInData.js
import _slicedToArray_mod from "metro/01701__slicedToArray.js";

let _slicedToArray;
let items;
let items1;
let items10;
let items11;
let items12;
let items13;
let items14;
let items15;
let items2;
let items3;
let items4;
let items5;
let items6;
let items7;
let items8;
let items9;
let obj10;
let obj11;
let obj14;
let obj15;
let obj19;
let obj2;
let obj20;
let obj23;
let obj24;
let obj27;
let obj28;
let obj3;
let obj31;
let obj32;
let obj36;
let obj37;
let obj38;
let obj39;
let obj41;
let obj42;
let obj43;
let obj44;
let obj6;
let obj7;
const obj = { SlideInRight: obj2, SlideInLeft: obj6, SlideInUp: obj10, SlideInDown: obj14 };
obj2 = { name: "SlideInRight", style: obj3, duration: 0.3 };
obj3 = { 0: null, 100: null };
const obj4 = { transform: items };
items = [{ translateX: "100vw" }];
obj3[0] = obj4;
const obj5 = { transform: items1 };
items1 = [{ translateX: "0%" }];
obj3[100] = obj5;
obj6 = { name: "SlideInLeft", style: obj7, duration: 0.3 };
obj7 = { 0: null, 100: null };
const obj8 = { transform: items2 };
items2 = [{ translateX: "-100vw" }];
obj7[0] = obj8;
const obj9 = { transform: items3 };
items3 = [{ translateX: "0%" }];
obj7[100] = obj9;
obj10 = { name: "SlideInUp", style: obj11, duration: 0.3 };
obj11 = { 0: null, 100: null };
const obj12 = { transform: items4 };
items4 = [{ translateY: "-100vh" }];
obj11[0] = obj12;
const obj13 = { transform: items5 };
items5 = [{ translateY: "0%" }];
obj11[100] = obj13;
obj14 = { name: "SlideInDown", style: obj15, duration: 0.3 };
obj15 = { 0: null, 100: null };
const obj16 = { transform: items6 };
items6 = [{ translateY: "100vh" }];
obj15[0] = obj16;
const obj17 = { transform: items7 };
items7 = [{ translateY: "0%" }];
obj15[100] = obj17;
const obj18 = { SlideOutRight: obj19, SlideOutLeft: obj23, SlideOutUp: obj27, SlideOutDown: obj31 };
obj19 = { name: "SlideOutRight", style: obj20, duration: 0.3 };
obj20 = { 0: null, 100: null };
const obj21 = { transform: items8 };
items8 = [{ translateX: "0%" }];
obj20[0] = obj21;
const obj22 = { transform: items9 };
items9 = [{ translateX: "100vw" }];
obj20[100] = obj22;
obj23 = { name: "SlideOutLeft", style: obj24, duration: 0.3 };
obj24 = { 0: null, 100: null };
const obj25 = { transform: items10 };
items10 = [{ translateX: "0%" }];
obj24[0] = obj25;
const obj26 = { transform: items11 };
items11 = [{ translateX: "-100vw" }];
obj24[100] = obj26;
obj27 = { name: "SlideOutUp", style: obj28, duration: 0.3 };
obj28 = { 0: null, 100: null };
const obj29 = { transform: items12 };
items12 = [{ translateY: "0%" }];
obj28[0] = obj29;
const obj30 = { transform: items13 };
items13 = [{ translateY: "-100vh" }];
obj28[100] = obj30;
obj31 = { name: "SlideOutDown", style: obj32, duration: 0.3 };
obj32 = { 0: null, 100: null };
const obj33 = { transform: items14 };
items14 = [{ translateY: "0%" }];
obj32[0] = obj33;
const obj34 = { transform: items15 };
items15 = [{ translateY: "100vh" }];
obj32[100] = obj34;
const obj35 = { SlideInRight: obj36, SlideInLeft: obj37, SlideInUp: obj38, SlideInDown: obj39 };
obj36 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj.SlideInRight),
  duration: obj.SlideInRight.duration,
};
_slicedToArray = _slicedToArray_mod;
obj37 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj.SlideInLeft),
  duration: obj.SlideInLeft.duration,
};
_slicedToArray = _slicedToArray_mod;
obj38 = { style: _slicedToArray.convertAnimationObjectToKeyframes(obj.SlideInUp), duration: obj.SlideInUp.duration };
_slicedToArray = _slicedToArray_mod;
obj39 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj.SlideInDown),
  duration: obj.SlideInDown.duration,
};
_slicedToArray = _slicedToArray_mod;
const obj40 = { SlideOutRight: obj41, SlideOutLeft: obj42, SlideOutUp: obj43, SlideOutDown: obj44 };
obj41 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj18.SlideOutRight),
  duration: obj18.SlideOutRight.duration,
};
_slicedToArray = _slicedToArray_mod;
obj42 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj18.SlideOutLeft),
  duration: obj18.SlideOutLeft.duration,
};
_slicedToArray = _slicedToArray_mod;
obj43 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj18.SlideOutUp),
  duration: obj18.SlideOutUp.duration,
};
_slicedToArray = _slicedToArray_mod;
obj44 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj18.SlideOutDown),
  duration: obj18.SlideOutDown.duration,
};
_slicedToArray = _slicedToArray_mod;

export const SlideInData = obj;
export const SlideOutData = obj18;
export const SlideIn = obj35;
export const SlideOut = obj40;
