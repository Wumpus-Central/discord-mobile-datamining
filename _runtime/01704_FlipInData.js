// _runtime/01704_FlipInData.js
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
let items16;
let items17;
let items18;
let items19;
let items2;
let items20;
let items21;
let items22;
let items23;
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
let obj18;
let obj19;
let obj2;
let obj22;
let obj23;
let obj27;
let obj28;
let obj3;
let obj31;
let obj32;
let obj35;
let obj36;
let obj39;
let obj40;
let obj43;
let obj44;
let obj47;
let obj48;
let obj52;
let obj53;
let obj54;
let obj55;
let obj56;
let obj57;
let obj59;
let obj6;
let obj60;
let obj61;
let obj62;
let obj63;
let obj64;
let obj7;
const obj = {
  FlipInYRight: obj2,
  FlipInYLeft: obj6,
  FlipInXUp: obj10,
  FlipInXDown: obj14,
  FlipInEasyX: obj18,
  FlipInEasyY: obj22,
};
obj2 = { name: "FlipInYRight", style: obj3, duration: 0.3 };
obj3 = { 0: null, 100: null };
const obj4 = { transform: items };
items = [{ perspective: "500px", rotateY: "90deg", translateX: "100%" }];
obj3[0] = obj4;
const obj5 = { transform: items1 };
items1 = [{ perspective: "500px", rotateY: "0deg", translateX: "0%" }];
obj3[100] = obj5;
obj6 = { name: "FlipInYLeft", style: obj7, duration: 0.3 };
obj7 = { 0: null, 100: null };
const obj8 = { transform: items2 };
items2 = [{ perspective: "500px", rotateY: "-90deg", translateX: "-100%" }];
obj7[0] = obj8;
const obj9 = { transform: items3 };
items3 = [{ perspective: "500px", rotateY: "0deg", translateX: "0%" }];
obj7[100] = obj9;
obj10 = { name: "FlipInXUp", style: obj11, duration: 0.3 };
obj11 = { 0: null, 100: null };
const obj12 = { transform: items4 };
items4 = [{ perspective: "500px", rotateX: "90deg", translateY: "-100%" }];
obj11[0] = obj12;
const obj13 = { transform: items5 };
items5 = [{ perspective: "500px", rotateX: "0deg", translateY: "0%" }];
obj11[100] = obj13;
obj14 = { name: "FlipInXDown", style: obj15, duration: 0.3 };
obj15 = { 0: null, 100: null };
const obj16 = { transform: items6 };
items6 = [{ perspective: "500px", rotateX: "-90deg", translateY: "100%" }];
obj15[0] = obj16;
const obj17 = { transform: items7 };
items7 = [{ perspective: "500px", rotateX: "0deg", translateY: "0%" }];
obj15[100] = obj17;
obj18 = { name: "FlipInEasyX", style: obj19, duration: 0.3 };
obj19 = { 0: null, 100: null };
const obj20 = { transform: items8 };
items8 = [{ perspective: "500px", rotateX: "90deg" }];
obj19[0] = obj20;
const obj21 = { transform: items9 };
items9 = [{ perspective: "500px", rotateX: "0deg" }];
obj19[100] = obj21;
obj22 = { name: "FlipInEasyY", style: obj23, duration: 0.3 };
obj23 = { 0: null, 100: null };
const obj24 = { transform: items10 };
items10 = [{ perspective: "500px", rotateY: "90deg" }];
obj23[0] = obj24;
const obj25 = { transform: items11 };
items11 = [{ perspective: "500px", rotateY: "0deg" }];
obj23[100] = obj25;
const obj26 = {
  FlipOutYRight: obj27,
  FlipOutYLeft: obj31,
  FlipOutXUp: obj35,
  FlipOutXDown: obj39,
  FlipOutEasyX: obj43,
  FlipOutEasyY: obj47,
};
obj27 = { name: "FlipOutYRight", style: obj28, duration: 0.3 };
obj28 = { 0: null, 100: null };
const obj29 = { transform: items12 };
items12 = [{ perspective: "500px", rotateY: "0deg", translateX: "0%" }];
obj28[0] = obj29;
const obj30 = { transform: items13 };
items13 = [{ perspective: "500px", rotateY: "90deg", translateX: "100%" }];
obj28[100] = obj30;
obj31 = { name: "FlipOutYLeft", style: obj32, duration: 0.3 };
obj32 = { 0: null, 100: null };
const obj33 = { transform: items14 };
items14 = [{ perspective: "500px", rotateY: "0deg", translateX: "0%" }];
obj32[0] = obj33;
const obj34 = { transform: items15 };
items15 = [{ perspective: "500px", rotateY: "-90deg", translateX: "-100%" }];
obj32[100] = obj34;
obj35 = { name: "FlipOutXUp", style: obj36, duration: 0.3 };
obj36 = { 0: null, 100: null };
const obj37 = { transform: items16 };
items16 = [{ perspective: "500px", rotateX: "0deg", translateY: "0%" }];
obj36[0] = obj37;
const obj38 = { transform: items17 };
items17 = [{ perspective: "500px", rotateX: "90deg", translateY: "-100%" }];
obj36[100] = obj38;
obj39 = { name: "FlipOutXDown", style: obj40, duration: 0.3 };
obj40 = { 0: null, 100: null };
const obj41 = { transform: items18 };
items18 = [{ perspective: "500px", rotateX: "0deg", translateY: "0%" }];
obj40[0] = obj41;
const obj42 = { transform: items19 };
items19 = [{ perspective: "500px", rotateX: "-90deg", translateY: "100%" }];
obj40[100] = obj42;
obj43 = { name: "FlipOutEasyX", style: obj44, duration: 0.3 };
obj44 = { 0: null, 100: null };
const obj45 = { transform: items20 };
items20 = [{ perspective: "500px", rotateX: "0deg" }];
obj44[0] = obj45;
const obj46 = { transform: items21 };
items21 = [{ perspective: "500px", rotateX: "90deg" }];
obj44[100] = obj46;
obj47 = { name: "FlipOutEasyY", style: obj48, duration: 0.3 };
obj48 = { 0: null, 100: null };
const obj49 = { transform: items22 };
items22 = [{ perspective: "500px", rotateY: "0deg" }];
obj48[0] = obj49;
const obj50 = { transform: items23 };
items23 = [{ perspective: "500px", rotateY: "90deg" }];
obj48[100] = obj50;
const obj51 = {
  FlipInYRight: obj52,
  FlipInYLeft: obj53,
  FlipInXUp: obj54,
  FlipInXDown: obj55,
  FlipInEasyX: obj56,
  FlipInEasyY: obj57,
};
obj52 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj.FlipInYRight),
  duration: obj.FlipInYRight.duration,
};
_slicedToArray = _slicedToArray_mod;
obj53 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj.FlipInYLeft),
  duration: obj.FlipInYLeft.duration,
};
_slicedToArray = _slicedToArray_mod;
obj54 = { style: _slicedToArray.convertAnimationObjectToKeyframes(obj.FlipInXUp), duration: obj.FlipInXUp.duration };
_slicedToArray = _slicedToArray_mod;
obj55 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj.FlipInXDown),
  duration: obj.FlipInXDown.duration,
};
_slicedToArray = _slicedToArray_mod;
obj56 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj.FlipInEasyX),
  duration: obj.FlipInEasyX.duration,
};
_slicedToArray = _slicedToArray_mod;
obj57 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj.FlipInEasyY),
  duration: obj.FlipInEasyY.duration,
};
_slicedToArray = _slicedToArray_mod;
const obj58 = {
  FlipOutYRight: obj59,
  FlipOutYLeft: obj60,
  FlipOutXUp: obj61,
  FlipOutXDown: obj62,
  FlipOutEasyX: obj63,
  FlipOutEasyY: obj64,
};
obj59 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj26.FlipOutYRight),
  duration: obj26.FlipOutYRight.duration,
};
_slicedToArray = _slicedToArray_mod;
obj60 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj26.FlipOutYLeft),
  duration: obj26.FlipOutYLeft.duration,
};
_slicedToArray = _slicedToArray_mod;
obj61 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj26.FlipOutXUp),
  duration: obj26.FlipOutXUp.duration,
};
_slicedToArray = _slicedToArray_mod;
obj62 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj26.FlipOutXDown),
  duration: obj26.FlipOutXDown.duration,
};
_slicedToArray = _slicedToArray_mod;
obj63 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj26.FlipOutEasyX),
  duration: obj26.FlipOutEasyX.duration,
};
_slicedToArray = _slicedToArray_mod;
obj64 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj26.FlipOutEasyY),
  duration: obj26.FlipOutEasyY.duration,
};
_slicedToArray = _slicedToArray_mod;

export const FlipInData = obj;
export const FlipOutData = obj26;
export const FlipIn = obj51;
export const FlipOut = obj58;
