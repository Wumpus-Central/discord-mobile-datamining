// === Module 1720: PinwheelData ===

// Module 1720 (PinwheelData)
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes" /* 1712 */;

obj = { PinwheelIn: { name: "PinwheelIn", style: obj, duration: 0.3 }, PinwheelOut: { name: "PinwheelOut", style: obj, duration: 0.3 } };
obj = { 0: { transform: items, opacity: 0 }, 100: null };
items = [{ rotate: "5rad", scale: 0 }];
const items1 = [{ rotate: "0deg", scale: 1 }];
obj[100] = { transform: items1, opacity: 1 };
obj = { 0: { transform: items2, opacity: 1 }, 100: null };
items2 = [{ rotate: "0rad", scale: 1 }];
const items3 = [{ rotate: "5rad", scale: 0 }];
obj[100] = { transform: items3, opacity: 0 };
const obj1 = { PinwheelIn: null, PinwheelOut: null };
const obj2 = { style: null, duration: null };
obj2[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.PinwheelIn);
obj2[1] = obj.PinwheelIn.duration;
obj1[0] = obj2;
const obj3 = { style: null, duration: null };
obj3[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.PinwheelOut);
obj3[1] = obj.PinwheelOut.duration;
obj1[1] = obj3;

export const PinwheelData = obj;
export const Pinwheel = obj1;