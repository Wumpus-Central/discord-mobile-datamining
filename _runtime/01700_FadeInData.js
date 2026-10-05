// _runtime/01700_FadeInData.js
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
let obj12;
let obj13;
let obj16;
let obj17;
let obj2;
let obj21;
let obj22;
let obj23;
let obj24;
let obj27;
let obj28;
let obj3;
let obj31;
let obj32;
let obj35;
let obj36;
let obj4;
let obj40;
let obj41;
let obj42;
let obj43;
let obj44;
let obj46;
let obj47;
let obj48;
let obj49;
let obj5;
let obj50;
let obj8;
let obj9;
const obj = { FadeIn: obj2, FadeInRight: obj4, FadeInLeft: obj8, FadeInUp: obj12, FadeInDown: obj16 };
obj2 = { name: "FadeIn", style: obj3, duration: 0.3 };
obj3 = { 0: { opacity: 0 }, 100: null };
obj3[100] = { opacity: 1 };
obj4 = { name: "FadeInRight", style: obj5, duration: 0.3 };
obj5 = { 0: null, 100: null };
const obj6 = { opacity: 0, transform: items };
items = [{ translateX: "25px" }];
obj5[0] = obj6;
const obj7 = { opacity: 1, transform: items1 };
items1 = [{ translateX: "0px" }];
obj5[100] = obj7;
obj8 = { name: "FadeInLeft", style: obj9, duration: 0.3 };
obj9 = { 0: null, 100: null };
const obj10 = { opacity: 0, transform: items2 };
items2 = [{ translateX: "-25px" }];
obj9[0] = obj10;
const obj11 = { opacity: 1, transform: items3 };
items3 = [{ translateX: "0px" }];
obj9[100] = obj11;
obj12 = { name: "FadeInUp", style: obj13, duration: 0.3 };
obj13 = { 0: null, 100: null };
const obj14 = { opacity: 0, transform: items4 };
items4 = [{ translateY: "-25px" }];
obj13[0] = obj14;
const obj15 = { opacity: 1, transform: items5 };
items5 = [{ translateY: "0px" }];
obj13[100] = obj15;
obj16 = { name: "FadeInDown", style: obj17, duration: 0.3 };
obj17 = { 0: null, 100: null };
const obj18 = { opacity: 0, transform: items6 };
items6 = [{ translateY: "25px" }];
obj17[0] = obj18;
const obj19 = { opacity: 1, transform: items7 };
items7 = [{ translateY: "0px" }];
obj17[100] = obj19;
const obj20 = { FadeOut: obj21, FadeOutRight: obj23, FadeOutLeft: obj27, FadeOutUp: obj31, FadeOutDown: obj35 };
obj21 = { name: "FadeOut", style: obj22, duration: 0.3 };
obj22 = { 0: { opacity: 1 }, 100: null };
obj22[100] = { opacity: 0 };
obj23 = { name: "FadeOutRight", style: obj24, duration: 0.3 };
obj24 = { 0: null, 100: null };
const obj25 = { opacity: 1, transform: items8 };
items8 = [{ translateX: "0px" }];
obj24[0] = obj25;
const obj26 = { opacity: 0, transform: items9 };
items9 = [{ translateX: "25px" }];
obj24[100] = obj26;
obj27 = { name: "FadeOutLeft", style: obj28, duration: 0.3 };
obj28 = { 0: null, 100: null };
const obj29 = { opacity: 1, transform: items10 };
items10 = [{ translateX: "0px" }];
obj28[0] = obj29;
const obj30 = { opacity: 0, transform: items11 };
items11 = [{ translateX: "-25px" }];
obj28[100] = obj30;
obj31 = { name: "FadeOutUp", style: obj32, duration: 0.3 };
obj32 = { 0: null, 100: null };
const obj33 = { opacity: 1, transform: items12 };
items12 = [{ translateY: "0px" }];
obj32[0] = obj33;
const obj34 = { opacity: 0, transform: items13 };
items13 = [{ translateY: "-25px" }];
obj32[100] = obj34;
obj35 = { name: "FadeOutDown", style: obj36, duration: 0.3 };
obj36 = { 0: null, 100: null };
const obj37 = { opacity: 1, transform: items14 };
items14 = [{ translateY: "0px" }];
obj36[0] = obj37;
const obj38 = { opacity: 0, transform: items15 };
items15 = [{ translateY: "25px" }];
obj36[100] = obj38;
const obj39 = { FadeIn: obj40, FadeInRight: obj41, FadeInLeft: obj42, FadeInUp: obj43, FadeInDown: obj44 };
obj40 = { style: _slicedToArray.convertAnimationObjectToKeyframes(obj.FadeIn), duration: obj.FadeIn.duration };
_slicedToArray = _slicedToArray_mod;
obj41 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj.FadeInRight),
  duration: obj.FadeInRight.duration,
};
_slicedToArray = _slicedToArray_mod;
obj42 = { style: _slicedToArray.convertAnimationObjectToKeyframes(obj.FadeInLeft), duration: obj.FadeInLeft.duration };
_slicedToArray = _slicedToArray_mod;
obj43 = { style: _slicedToArray.convertAnimationObjectToKeyframes(obj.FadeInUp), duration: obj.FadeInUp.duration };
_slicedToArray = _slicedToArray_mod;
obj44 = { style: _slicedToArray.convertAnimationObjectToKeyframes(obj.FadeInDown), duration: obj.FadeInDown.duration };
_slicedToArray = _slicedToArray_mod;
const obj45 = { FadeOut: obj46, FadeOutRight: obj47, FadeOutLeft: obj48, FadeOutUp: obj49, FadeOutDown: obj50 };
obj46 = { style: _slicedToArray.convertAnimationObjectToKeyframes(obj20.FadeOut), duration: obj20.FadeOut.duration };
_slicedToArray = _slicedToArray_mod;
obj47 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj20.FadeOutRight),
  duration: obj20.FadeOutRight.duration,
};
_slicedToArray = _slicedToArray_mod;
obj48 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj20.FadeOutLeft),
  duration: obj20.FadeOutLeft.duration,
};
_slicedToArray = _slicedToArray_mod;
obj49 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj20.FadeOutUp),
  duration: obj20.FadeOutUp.duration,
};
_slicedToArray = _slicedToArray_mod;
obj50 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj20.FadeOutDown),
  duration: obj20.FadeOutDown.duration,
};
_slicedToArray = _slicedToArray_mod;

export const FadeInData = obj;
export const FadeOutData = obj20;
export const FadeIn = obj39;
export const FadeOut = obj45;
