// _runtime/01699_ZoomInData.js
import convertAnimationObjectToKeyframes from "01694_convertAnimationObjectToKeyframes.js";

obj = {
  ZoomIn: { name: "ZoomIn", style: obj, duration: 0.3 },
  ZoomInRotate: { name: "ZoomInRotate", style: obj, duration: 0.3 },
  ZoomInRight: { name: "ZoomInRight", style: obj1, duration: 0.3 },
  ZoomInLeft: { name: "ZoomInLeft", style: obj2, duration: 0.3 },
  ZoomInUp: { name: "ZoomInUp", style: obj3, duration: 0.3 },
  ZoomInDown: { name: "ZoomInDown", style: obj4, duration: 0.3 },
  ZoomInEasyUp: { name: "ZoomInEasyUp", style: obj5, duration: 0.3 },
  ZoomInEasyDown: { name: "ZoomInEasyDown", style: obj6, duration: 0.3 },
};
obj = { 0: { transform: items }, 100: null };
items = [{ scale: 0 }];
const items1 = [{ scale: 1 }];
obj[100] = { transform: items1 };
obj = { 0: { transform: items2 }, 100: null };
items2 = [{ scale: 0, rotate: "0.3rad" }];
const items3 = [{ scale: 1, rotate: "0deg" }];
obj[100] = { transform: items3 };
obj1 = { 0: { transform: items4 }, 100: null };
items4 = [{ translateX: "100vw", scale: 0 }];
const items5 = [{ translateX: "0%", scale: 1 }];
obj1[100] = { transform: items5 };
obj2 = { 0: { transform: items6 }, 100: null };
items6 = [{ translateX: "-100vw", scale: 0 }];
const items7 = [{ translateX: "0%", scale: 1 }];
obj2[100] = { transform: items7 };
obj3 = { 0: { transform: items8 }, 100: null };
items8 = [{ translateY: "-100vh", scale: 0 }];
const items9 = [{ translateY: "0%", scale: 1 }];
obj3[100] = { transform: items9 };
obj4 = { 0: { transform: items10 }, 100: null };
items10 = [{ translateY: "100vh", scale: 0 }];
const items11 = [{ translateY: "0%", scale: 1 }];
obj4[100] = { transform: items11 };
obj5 = { 0: { transform: items12 }, 100: null };
items12 = [{ translateY: "-100%", scale: 0 }];
const items13 = [{ translateY: "0%", scale: 1 }];
obj5[100] = { transform: items13 };
obj6 = { 0: { transform: items14 }, 100: null };
items14 = [{ translateY: "100%", scale: 0 }];
const items15 = [{ translateY: "0%", scale: 1 }];
obj6[100] = { transform: items15 };
const obj7 = {
  ZoomOut: { name: "ZoomOut", style: obj8, duration: 0.3 },
  ZoomOutRotate: { name: "ZoomOutRotate", style: obj9, duration: 0.3 },
  ZoomOutRight: { name: "ZoomOutRight", style: obj10, duration: 0.3 },
  ZoomOutLeft: { name: "ZoomOutLeft", style: obj11, duration: 0.3 },
  ZoomOutUp: { name: "ZoomOutUp", style: obj12, duration: 0.3 },
  ZoomOutDown: { name: "ZoomOutDown", style: obj13, duration: 0.3 },
  ZoomOutEasyUp: { name: "ZoomOutEasyUp", style: obj14, duration: 0.3 },
  ZoomOutEasyDown: { name: "ZoomOutEasyDown", style: obj15, duration: 0.3 },
};
obj8 = { 0: { transform: items16 }, 100: null };
items16 = [{ scale: 1 }];
const items17 = [{ scale: 0 }];
obj8[100] = { transform: items17 };
obj9 = { 0: { transform: items18 }, 100: null };
items18 = [{ scale: 1, rotate: "0rad" }];
const items19 = [{ scale: 0, rotate: "0.3rad" }];
obj9[100] = { transform: items19 };
obj10 = { 0: { transform: items20 }, 100: null };
items20 = [{ translateX: "0vw", scale: 1 }];
const items21 = [{ translateX: "100vw", scale: 0 }];
obj10[100] = { transform: items21 };
obj11 = { 0: { transform: items22 }, 100: null };
items22 = [{ translateX: "0vw", scale: 1 }];
const items23 = [{ translateX: "-100vw", scale: 0 }];
obj11[100] = { transform: items23 };
obj12 = { 0: { transform: items24 }, 100: null };
items24 = [{ translateX: "0vh", scale: 1 }];
const items25 = [{ translateY: "-100vh", scale: 0 }];
obj12[100] = { transform: items25 };
obj13 = { 0: { transform: items26 }, 100: null };
items26 = [{ translateX: "0vh", scale: 1 }];
const items27 = [{ translateY: "100vh", scale: 0 }];
obj13[100] = { transform: items27 };
obj14 = { 0: { transform: items28 }, 100: null };
items28 = [{ translateY: "0%", scale: 1 }];
const items29 = [{ translateY: "-100%", scale: 0 }];
obj14[100] = { transform: items29 };
obj15 = { 0: { transform: items30 }, 100: null };
items30 = [{ translateY: "0%", scale: 1 }];
const items31 = [{ translateY: "100%", scale: 0 }];
obj15[100] = { transform: items31 };
const obj16 = {
  ZoomIn: null,
  ZoomInRotate: null,
  ZoomInRight: null,
  ZoomInLeft: null,
  ZoomInUp: null,
  ZoomInDown: null,
  ZoomInEasyUp: null,
  ZoomInEasyDown: null,
};
const obj17 = { style: null, duration: null };
obj17[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.ZoomIn);
obj17[1] = obj.ZoomIn.duration;
obj16[0] = obj17;
const obj18 = { style: null, duration: null };
obj18[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.ZoomInRotate);
obj18[1] = obj.ZoomInRotate.duration;
obj16[1] = obj18;
const obj19 = { style: null, duration: null };
obj19[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.ZoomInRight);
obj19[1] = obj.ZoomInRight.duration;
obj16[2] = obj19;
const obj20 = { style: null, duration: null };
obj20[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.ZoomInLeft);
obj20[1] = obj.ZoomInLeft.duration;
obj16[3] = obj20;
const obj21 = { style: null, duration: null };
obj21[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.ZoomInUp);
obj21[1] = obj.ZoomInUp.duration;
obj16[4] = obj21;
const obj22 = { style: null, duration: null };
obj22[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.ZoomInDown);
obj22[1] = obj.ZoomInDown.duration;
obj16[5] = obj22;
const obj23 = { style: null, duration: null };
obj23[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.ZoomInEasyUp);
obj23[1] = obj.ZoomInEasyUp.duration;
obj16[6] = obj23;
const obj24 = { style: null, duration: null };
obj24[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.ZoomInEasyDown);
obj24[1] = obj.ZoomInEasyDown.duration;
obj16[7] = obj24;
const obj25 = {
  ZoomOut: null,
  ZoomOutRotate: null,
  ZoomOutRight: null,
  ZoomOutLeft: null,
  ZoomOutUp: null,
  ZoomOutDown: null,
  ZoomOutEasyUp: null,
  ZoomOutEasyDown: null,
};
const obj26 = { style: null, duration: null };
obj26[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj7.ZoomOut);
obj26[1] = obj7.ZoomOut.duration;
obj25[0] = obj26;
const obj27 = { style: null, duration: null };
obj27[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj7.ZoomOutRotate);
obj27[1] = obj7.ZoomOutRotate.duration;
obj25[1] = obj27;
const obj28 = { style: null, duration: null };
obj28[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj7.ZoomOutRight);
obj28[1] = obj7.ZoomOutRight.duration;
obj25[2] = obj28;
const obj29 = { style: null, duration: null };
obj29[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj7.ZoomOutLeft);
obj29[1] = obj7.ZoomOutLeft.duration;
obj25[3] = obj29;
const obj30 = { style: null, duration: null };
obj30[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj7.ZoomOutUp);
obj30[1] = obj7.ZoomOutUp.duration;
obj25[4] = obj30;
const obj31 = { style: null, duration: null };
obj31[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj7.ZoomOutDown);
obj31[1] = obj7.ZoomOutDown.duration;
obj25[5] = obj31;
const obj32 = { style: null, duration: null };
obj32[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj7.ZoomOutEasyUp);
obj32[1] = obj7.ZoomOutEasyUp.duration;
obj25[6] = obj32;
const obj33 = { style: null, duration: null };
obj33[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj7.ZoomOutEasyDown);
obj33[1] = obj7.ZoomOutEasyDown.duration;
obj25[7] = obj33;

export const ZoomInData = obj;
export const ZoomOutData = obj7;
export const ZoomIn = obj16;
export const ZoomOut = obj25;
