// === Module 1722: RollInData ===

// Module 1722 (RollInData)
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes" /* 1712 */;

obj = { RollInLeft: { name: "RollInLeft", style: obj, duration: 0.3 }, RollInRight: { name: "RollInRight", style: obj, duration: 0.3 } };
obj = { 0: { transform: items }, 100: null };
items = [{ translateX: "-100vw", rotate: "-180deg" }];
const items1 = [{ translateX: "0vw", rotate: "0deg" }];
obj[100] = { transform: items1 };
obj = { 0: { transform: items2 }, 100: null };
items2 = [{ translateX: "100vw", rotate: "180deg" }];
const items3 = [{ translateX: "0vw", rotate: "0deg" }];
obj[100] = { transform: items3 };
const obj1 = { RollOutLeft: { name: "RollOutLeft", style: obj2, duration: 0.3 }, RollOutRight: { name: "RollOutRight", style: obj3, duration: 0.3 } };
obj2 = { 0: { transform: items4 }, 100: null };
items4 = [{ translateX: "0vw", rotate: "0deg" }];
const items5 = [{ translateX: "-100vw", rotate: "-180deg" }];
obj2[100] = { transform: items5 };
obj3 = { 0: { transform: items6 }, 100: null };
items6 = [{ translateX: "0vw", rotate: "0deg" }];
const items7 = [{ translateX: "100vw", rotate: "180deg" }];
obj3[100] = { transform: items7 };
const obj4 = { RollInLeft: null, RollInRight: null };
const obj5 = { style: null, duration: null };
obj5[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.RollInLeft);
obj5[1] = obj.RollInLeft.duration;
obj4[0] = obj5;
const obj6 = { style: null, duration: null };
obj6[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.RollInRight);
obj6[1] = obj.RollInRight.duration;
obj4[1] = obj6;
const obj7 = { RollOutLeft: null, RollOutRight: null };
const obj8 = { style: null, duration: null };
obj8[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj1.RollOutLeft);
obj8[1] = obj1.RollOutLeft.duration;
obj7[0] = obj8;
const obj9 = { style: null, duration: null };
obj9[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj1.RollOutRight);
obj9[1] = obj1.RollOutRight.duration;
obj7[1] = obj9;

export const RollInData = obj;
export const RollOutData = obj1;
export const RollIn = obj4;
export const RollOut = obj7;