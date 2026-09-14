// === Module 1702: PinwheelData ===

// Module 1702 (PinwheelData)
import convertAnimationObjectToKeyframes_mod from "convertAnimationObjectToKeyframes" /* 1694 */;

const obj = { PinwheelIn: null, PinwheelOut: null };
const obj2 = { name: "PinwheelIn", style: null, duration: 0.3 };
const obj3 = { 0: null, 100: null };
const obj4 = { transform: null, opacity: 0 };
const items = [{ rotate: "5rad", scale: 0 }];
obj4.transform = items;
obj3[0] = obj4;
const obj5 = { transform: null, opacity: 1 };
const items1 = [{ rotate: "0deg", scale: 1 }];
obj5.transform = items1;
obj3[100] = obj5;
obj2.style = obj3;
obj.PinwheelIn = obj2;
const obj6 = { name: "PinwheelOut", style: null, duration: 0.3 };
const obj7 = { 0: null, 100: null };
const obj8 = { transform: null, opacity: 1 };
const items2 = [{ rotate: "0rad", scale: 1 }];
obj8.transform = items2;
obj7[0] = obj8;
const obj9 = { transform: null, opacity: 0 };
const items3 = [{ rotate: "5rad", scale: 0 }];
obj9.transform = items3;
obj7[100] = obj9;
obj6.style = obj7;
obj.PinwheelOut = obj6;
const obj10 = { PinwheelIn: null, PinwheelOut: null };
const obj11 = { style: null, duration: null };
let convertAnimationObjectToKeyframes = convertAnimationObjectToKeyframes_mod;
obj11.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.PinwheelIn);
obj11.duration = obj.PinwheelIn.duration;
obj10.PinwheelIn = obj11;
const obj12 = { style: null, duration: null };
let convertAnimationObjectToKeyframes = convertAnimationObjectToKeyframes_mod;
obj12.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.PinwheelOut);
obj12.duration = obj.PinwheelOut.duration;
obj10.PinwheelOut = obj12;

export const PinwheelData = obj;
export const Pinwheel = obj10;