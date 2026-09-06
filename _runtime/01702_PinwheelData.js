// === Module 1702: PinwheelData ===

// Module 1702 (PinwheelData)
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes" /* 1694 */;

let obj = { PinwheelIn: null, PinwheelOut: null };
obj = { name: "PinwheelIn", style: null, duration: 0.3 };
obj = { 0: null, 100: null };
const obj1 = { transform: null, opacity: 0 };
const items = [{ rotate: "5rad", scale: 0 }];
obj1.transform = items;
obj[0] = obj1;
const obj2 = { transform: null, opacity: 1 };
const items1 = [{ rotate: "0deg", scale: 1 }];
obj2.transform = items1;
obj[100] = obj2;
obj.style = obj;
obj.PinwheelIn = obj;
const obj3 = { name: "PinwheelOut", style: null, duration: 0.3 };
const obj4 = { 0: null, 100: null };
const obj5 = { transform: null, opacity: 1 };
const items2 = [{ rotate: "0rad", scale: 1 }];
obj5.transform = items2;
obj4[0] = obj5;
const obj6 = { transform: null, opacity: 0 };
const items3 = [{ rotate: "5rad", scale: 0 }];
obj6.transform = items3;
obj4[100] = obj6;
obj3.style = obj4;
obj.PinwheelOut = obj3;
const obj7 = { PinwheelIn: null, PinwheelOut: null };
const obj8 = { style: null, duration: null };
obj8.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.PinwheelIn);
obj8.duration = obj.PinwheelIn.duration;
obj7.PinwheelIn = obj8;
const obj9 = { style: null, duration: null };
obj9.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.PinwheelOut);
obj9.duration = obj.PinwheelOut.duration;
obj7.PinwheelOut = obj9;

export const PinwheelData = obj;
export const Pinwheel = obj7;