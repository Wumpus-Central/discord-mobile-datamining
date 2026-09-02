// _runtime/01714_StretchInData.js
import convertAnimationObjectToKeyframes from "01710_convertAnimationObjectToKeyframes.js";

obj = {
  StretchInX: { name: "StretchInX", style: obj, duration: 0.3 },
  StretchInY: { name: "StretchInY", style: obj, duration: 0.3 },
};
obj = { 0: { transform: items }, 100: null };
items = [{ scaleX: 0 }];
const items1 = [{ scaleX: 1 }];
obj[100] = { transform: items1 };
obj = { 0: { transform: items2 }, 100: null };
items2 = [{ scaleY: 0 }];
const items3 = [{ scaleY: 1 }];
obj[100] = { transform: items3 };
const obj1 = {
  StretchOutX: { name: "StretchOutX", style: obj2, duration: 0.3 },
  StretchOutY: { name: "StretchOutY", style: obj3, duration: 0.3 },
};
obj2 = { 0: { transform: items4 }, 100: null };
items4 = [{ scaleX: 1 }];
const items5 = [{ scaleX: 0 }];
obj2[100] = { transform: items5 };
obj3 = { 0: { transform: items6 }, 100: null };
items6 = [{ scaleY: 1 }];
const items7 = [{ scaleY: 0 }];
obj3[100] = { transform: items7 };
const obj4 = { StretchInX: null, StretchInY: null };
const obj5 = { style: null, duration: null };
obj5[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.StretchInX);
obj5[1] = obj.StretchInX.duration;
obj4[0] = obj5;
const obj6 = { style: null, duration: null };
obj6[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.StretchInY);
obj6[1] = obj.StretchInY.duration;
obj4[1] = obj6;
const obj7 = { StretchOutX: null, StretchOutY: null };
const obj8 = { style: null, duration: null };
obj8[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj1.StretchOutX);
obj8[1] = obj1.StretchOutX.duration;
obj7[0] = obj8;
const obj9 = { style: null, duration: null };
obj9[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj1.StretchOutY);
obj9[1] = obj1.StretchOutY.duration;
obj7[1] = obj9;

export const StretchInData = obj;
export const StretchOutData = obj1;
export const StretchIn = obj4;
export const StretchOut = obj7;
