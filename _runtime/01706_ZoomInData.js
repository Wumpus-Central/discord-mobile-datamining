// _runtime/01706_ZoomInData.js
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
let items24;
let items25;
let items26;
let items27;
let items28;
let items29;
let items3;
let items30;
let items31;
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
let obj26;
let obj27;
let obj3;
let obj30;
let obj31;
let obj35;
let obj36;
let obj39;
let obj40;
let obj43;
let obj44;
let obj47;
let obj48;
let obj51;
let obj52;
let obj55;
let obj56;
let obj59;
let obj6;
let obj60;
let obj63;
let obj64;
let obj68;
let obj69;
let obj7;
let obj70;
let obj71;
let obj72;
let obj73;
let obj74;
let obj75;
let obj77;
let obj78;
let obj79;
let obj80;
let obj81;
let obj82;
let obj83;
let obj84;
const obj = {
  ZoomIn: obj2,
  ZoomInRotate: obj6,
  ZoomInRight: obj10,
  ZoomInLeft: obj14,
  ZoomInUp: obj18,
  ZoomInDown: obj22,
  ZoomInEasyUp: obj26,
  ZoomInEasyDown: obj30,
};
obj2 = { name: "ZoomIn", style: obj3, duration: 0.3 };
obj3 = { 0: null, 100: null };
const obj4 = { transform: items };
items = [{ scale: 0 }];
obj3[0] = obj4;
const obj5 = { transform: items1 };
items1 = [{ scale: 1 }];
obj3[100] = obj5;
obj6 = { name: "ZoomInRotate", style: obj7, duration: 0.3 };
obj7 = { 0: null, 100: null };
const obj8 = { transform: items2 };
items2 = [{ scale: 0, rotate: "0.3rad" }];
obj7[0] = obj8;
const obj9 = { transform: items3 };
items3 = [{ scale: 1, rotate: "0deg" }];
obj7[100] = obj9;
obj10 = { name: "ZoomInRight", style: obj11, duration: 0.3 };
obj11 = { 0: null, 100: null };
const obj12 = { transform: items4 };
items4 = [{ translateX: "100vw", scale: 0 }];
obj11[0] = obj12;
const obj13 = { transform: items5 };
items5 = [{ translateX: "0%", scale: 1 }];
obj11[100] = obj13;
obj14 = { name: "ZoomInLeft", style: obj15, duration: 0.3 };
obj15 = { 0: null, 100: null };
const obj16 = { transform: items6 };
items6 = [{ translateX: "-100vw", scale: 0 }];
obj15[0] = obj16;
const obj17 = { transform: items7 };
items7 = [{ translateX: "0%", scale: 1 }];
obj15[100] = obj17;
obj18 = { name: "ZoomInUp", style: obj19, duration: 0.3 };
obj19 = { 0: null, 100: null };
const obj20 = { transform: items8 };
items8 = [{ translateY: "-100vh", scale: 0 }];
obj19[0] = obj20;
const obj21 = { transform: items9 };
items9 = [{ translateY: "0%", scale: 1 }];
obj19[100] = obj21;
obj22 = { name: "ZoomInDown", style: obj23, duration: 0.3 };
obj23 = { 0: null, 100: null };
const obj24 = { transform: items10 };
items10 = [{ translateY: "100vh", scale: 0 }];
obj23[0] = obj24;
const obj25 = { transform: items11 };
items11 = [{ translateY: "0%", scale: 1 }];
obj23[100] = obj25;
obj26 = { name: "ZoomInEasyUp", style: obj27, duration: 0.3 };
obj27 = { 0: null, 100: null };
const obj28 = { transform: items12 };
items12 = [{ translateY: "-100%", scale: 0 }];
obj27[0] = obj28;
const obj29 = { transform: items13 };
items13 = [{ translateY: "0%", scale: 1 }];
obj27[100] = obj29;
obj30 = { name: "ZoomInEasyDown", style: obj31, duration: 0.3 };
obj31 = { 0: null, 100: null };
const obj32 = { transform: items14 };
items14 = [{ translateY: "100%", scale: 0 }];
obj31[0] = obj32;
const obj33 = { transform: items15 };
items15 = [{ translateY: "0%", scale: 1 }];
obj31[100] = obj33;
const obj34 = {
  ZoomOut: obj35,
  ZoomOutRotate: obj39,
  ZoomOutRight: obj43,
  ZoomOutLeft: obj47,
  ZoomOutUp: obj51,
  ZoomOutDown: obj55,
  ZoomOutEasyUp: obj59,
  ZoomOutEasyDown: obj63,
};
obj35 = { name: "ZoomOut", style: obj36, duration: 0.3 };
obj36 = { 0: null, 100: null };
const obj37 = { transform: items16 };
items16 = [{ scale: 1 }];
obj36[0] = obj37;
const obj38 = { transform: items17 };
items17 = [{ scale: 0 }];
obj36[100] = obj38;
obj39 = { name: "ZoomOutRotate", style: obj40, duration: 0.3 };
obj40 = { 0: null, 100: null };
const obj41 = { transform: items18 };
items18 = [{ scale: 1, rotate: "0rad" }];
obj40[0] = obj41;
const obj42 = { transform: items19 };
items19 = [{ scale: 0, rotate: "0.3rad" }];
obj40[100] = obj42;
obj43 = { name: "ZoomOutRight", style: obj44, duration: 0.3 };
obj44 = { 0: null, 100: null };
const obj45 = { transform: items20 };
items20 = [{ translateX: "0vw", scale: 1 }];
obj44[0] = obj45;
const obj46 = { transform: items21 };
items21 = [{ translateX: "100vw", scale: 0 }];
obj44[100] = obj46;
obj47 = { name: "ZoomOutLeft", style: obj48, duration: 0.3 };
obj48 = { 0: null, 100: null };
const obj49 = { transform: items22 };
items22 = [{ translateX: "0vw", scale: 1 }];
obj48[0] = obj49;
const obj50 = { transform: items23 };
items23 = [{ translateX: "-100vw", scale: 0 }];
obj48[100] = obj50;
obj51 = { name: "ZoomOutUp", style: obj52, duration: 0.3 };
obj52 = { 0: null, 100: null };
const obj53 = { transform: items24 };
items24 = [{ translateX: "0vh", scale: 1 }];
obj52[0] = obj53;
const obj54 = { transform: items25 };
items25 = [{ translateY: "-100vh", scale: 0 }];
obj52[100] = obj54;
obj55 = { name: "ZoomOutDown", style: obj56, duration: 0.3 };
obj56 = { 0: null, 100: null };
const obj57 = { transform: items26 };
items26 = [{ translateX: "0vh", scale: 1 }];
obj56[0] = obj57;
const obj58 = { transform: items27 };
items27 = [{ translateY: "100vh", scale: 0 }];
obj56[100] = obj58;
obj59 = { name: "ZoomOutEasyUp", style: obj60, duration: 0.3 };
obj60 = { 0: null, 100: null };
const obj61 = { transform: items28 };
items28 = [{ translateY: "0%", scale: 1 }];
obj60[0] = obj61;
const obj62 = { transform: items29 };
items29 = [{ translateY: "-100%", scale: 0 }];
obj60[100] = obj62;
obj63 = { name: "ZoomOutEasyDown", style: obj64, duration: 0.3 };
obj64 = { 0: null, 100: null };
const obj65 = { transform: items30 };
items30 = [{ translateY: "0%", scale: 1 }];
obj64[0] = obj65;
const obj66 = { transform: items31 };
items31 = [{ translateY: "100%", scale: 0 }];
obj64[100] = obj66;
const obj67 = {
  ZoomIn: obj68,
  ZoomInRotate: obj69,
  ZoomInRight: obj70,
  ZoomInLeft: obj71,
  ZoomInUp: obj72,
  ZoomInDown: obj73,
  ZoomInEasyUp: obj74,
  ZoomInEasyDown: obj75,
};
obj68 = { style: _slicedToArray.convertAnimationObjectToKeyframes(obj.ZoomIn), duration: obj.ZoomIn.duration };
_slicedToArray = _slicedToArray_mod;
obj69 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj.ZoomInRotate),
  duration: obj.ZoomInRotate.duration,
};
_slicedToArray = _slicedToArray_mod;
obj70 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj.ZoomInRight),
  duration: obj.ZoomInRight.duration,
};
_slicedToArray = _slicedToArray_mod;
obj71 = { style: _slicedToArray.convertAnimationObjectToKeyframes(obj.ZoomInLeft), duration: obj.ZoomInLeft.duration };
_slicedToArray = _slicedToArray_mod;
obj72 = { style: _slicedToArray.convertAnimationObjectToKeyframes(obj.ZoomInUp), duration: obj.ZoomInUp.duration };
_slicedToArray = _slicedToArray_mod;
obj73 = { style: _slicedToArray.convertAnimationObjectToKeyframes(obj.ZoomInDown), duration: obj.ZoomInDown.duration };
_slicedToArray = _slicedToArray_mod;
obj74 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj.ZoomInEasyUp),
  duration: obj.ZoomInEasyUp.duration,
};
_slicedToArray = _slicedToArray_mod;
obj75 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj.ZoomInEasyDown),
  duration: obj.ZoomInEasyDown.duration,
};
_slicedToArray = _slicedToArray_mod;
const obj76 = {
  ZoomOut: obj77,
  ZoomOutRotate: obj78,
  ZoomOutRight: obj79,
  ZoomOutLeft: obj80,
  ZoomOutUp: obj81,
  ZoomOutDown: obj82,
  ZoomOutEasyUp: obj83,
  ZoomOutEasyDown: obj84,
};
obj77 = { style: _slicedToArray.convertAnimationObjectToKeyframes(obj34.ZoomOut), duration: obj34.ZoomOut.duration };
_slicedToArray = _slicedToArray_mod;
obj78 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj34.ZoomOutRotate),
  duration: obj34.ZoomOutRotate.duration,
};
_slicedToArray = _slicedToArray_mod;
obj79 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj34.ZoomOutRight),
  duration: obj34.ZoomOutRight.duration,
};
_slicedToArray = _slicedToArray_mod;
obj80 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj34.ZoomOutLeft),
  duration: obj34.ZoomOutLeft.duration,
};
_slicedToArray = _slicedToArray_mod;
obj81 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj34.ZoomOutUp),
  duration: obj34.ZoomOutUp.duration,
};
_slicedToArray = _slicedToArray_mod;
obj82 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj34.ZoomOutDown),
  duration: obj34.ZoomOutDown.duration,
};
_slicedToArray = _slicedToArray_mod;
obj83 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj34.ZoomOutEasyUp),
  duration: obj34.ZoomOutEasyUp.duration,
};
_slicedToArray = _slicedToArray_mod;
obj84 = {
  style: _slicedToArray.convertAnimationObjectToKeyframes(obj34.ZoomOutEasyDown),
  duration: obj34.ZoomOutEasyDown.duration,
};
_slicedToArray = _slicedToArray_mod;

export const ZoomInData = obj;
export const ZoomOutData = obj34;
export const ZoomIn = obj67;
export const ZoomOut = obj76;
