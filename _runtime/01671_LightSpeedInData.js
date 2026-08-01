// === Module 1671: LightSpeedInData ===

// Module 1671 (LightSpeedInData)
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes";
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes";
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes";
import convertAnimationObjectToKeyframes from "convertAnimationObjectToKeyframes";

obj = { LightSpeedInRight: { name: "LightSpeedInRight", style: obj, duration: 0.3 }, LightSpeedInLeft: { name: "LightSpeedInLeft", style: obj, duration: 0.3 } };
obj = { 0: { transform: items, opacity: 0 }, 70: null, 85: null, 100: null };
items = [{ translateX: "100vw", skewX: "-45deg" }];
const items1 = [{ skewX: "10deg" }];
obj[70] = { transform: items1 };
const items2 = [{ skewX: "-5deg" }];
obj[85] = { transform: items2 };
const items3 = [{ skewX: "0deg" }];
obj[100] = { transform: items3 };
obj = { 0: { transform: items4, opacity: 0 }, 70: null, 85: null, 100: null };
items4 = [{ translateX: "-100vw", skewX: "45deg" }];
const items5 = [{ skewX: "-10deg" }];
obj[70] = { transform: items5 };
const items6 = [{ skewX: "5deg" }];
obj[85] = { transform: items6 };
const items7 = [{ skewX: "0deg" }];
obj[100] = { transform: items7 };
const obj1 = { LightSpeedOutRight: { name: "LightSpeedOutRight", style: obj2, duration: 0.3 }, LightSpeedOutLeft: { name: "LightSpeedOutLeft", style: obj3, duration: 0.3 } };
obj2 = { 0: { transform: items8, opacity: 1 }, 100: null };
items8 = [{ translateX: "0vw", skewX: "0deg" }];
const items9 = [{ translateX: "100vw", skewX: "-45deg" }];
obj2[100] = { transform: items9, opacity: 0 };
obj3 = { 0: { transform: items10, opacity: 1 }, 100: null };
items10 = [{ translateX: "0vw", skew: "0deg" }];
const items11 = [{ translateX: "-100vw", skew: "45deg" }];
obj3[100] = { transform: items11, opacity: 0 };
const obj4 = { LightSpeedInRight: null, LightSpeedInLeft: null };
const obj5 = { style: null, duration: null };
obj5[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.LightSpeedInRight);
obj5[1] = obj.LightSpeedInRight.duration;
obj4[0] = obj5;
const obj6 = { style: null, duration: null };
obj6[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.LightSpeedInLeft);
obj6[1] = obj.LightSpeedInLeft.duration;
obj4[1] = obj6;
const obj7 = { LightSpeedOutRight: null, LightSpeedOutLeft: null };
const obj8 = { style: null, duration: null };
obj8[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj1.LightSpeedOutRight);
obj8[1] = obj1.LightSpeedOutRight.duration;
obj7[0] = obj8;
const obj9 = { style: null, duration: null };
obj9[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj1.LightSpeedOutLeft);
obj9[1] = obj1.LightSpeedOutLeft.duration;
obj7[1] = obj9;

export const LightSpeedInData = obj;
export const LightSpeedOutData = obj1;
export const LightSpeedIn = obj4;
export const LightSpeedOut = obj7;