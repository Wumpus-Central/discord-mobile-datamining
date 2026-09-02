// _runtime/01713_FlipInData.js
import convertAnimationObjectToKeyframes from "01710_convertAnimationObjectToKeyframes.js";

obj = {
  FlipInYRight: { name: "FlipInYRight", style: obj, duration: 0.3 },
  FlipInYLeft: { name: "FlipInYLeft", style: obj, duration: 0.3 },
  FlipInXUp: { name: "FlipInXUp", style: obj1, duration: 0.3 },
  FlipInXDown: { name: "FlipInXDown", style: obj2, duration: 0.3 },
  FlipInEasyX: { name: "FlipInEasyX", style: obj3, duration: 0.3 },
  FlipInEasyY: { name: "FlipInEasyY", style: obj4, duration: 0.3 },
};
obj = { 0: { transform: items }, 100: null };
items = [{ perspective: "500px", rotateY: "90deg", translateX: "100%" }];
const items1 = [{ perspective: "500px", rotateY: "0deg", translateX: "0%" }];
obj[100] = { transform: items1 };
obj = { 0: { transform: items2 }, 100: null };
items2 = [{ perspective: "500px", rotateY: "-90deg", translateX: "-100%" }];
const items3 = [{ perspective: "500px", rotateY: "0deg", translateX: "0%" }];
obj[100] = { transform: items3 };
obj1 = { 0: { transform: items4 }, 100: null };
items4 = [{ perspective: "500px", rotateX: "90deg", translateY: "-100%" }];
const items5 = [{ perspective: "500px", rotateX: "0deg", translateY: "0%" }];
obj1[100] = { transform: items5 };
obj2 = { 0: { transform: items6 }, 100: null };
items6 = [{ perspective: "500px", rotateX: "-90deg", translateY: "100%" }];
const items7 = [{ perspective: "500px", rotateX: "0deg", translateY: "0%" }];
obj2[100] = { transform: items7 };
obj3 = { 0: { transform: items8 }, 100: null };
items8 = [{ perspective: "500px", rotateX: "90deg" }];
const items9 = [{ perspective: "500px", rotateX: "0deg" }];
obj3[100] = { transform: items9 };
obj4 = { 0: { transform: items10 }, 100: null };
items10 = [{ perspective: "500px", rotateY: "90deg" }];
const items11 = [{ perspective: "500px", rotateY: "0deg" }];
obj4[100] = { transform: items11 };
const obj5 = {
  FlipOutYRight: { name: "FlipOutYRight", style: obj6, duration: 0.3 },
  FlipOutYLeft: { name: "FlipOutYLeft", style: obj7, duration: 0.3 },
  FlipOutXUp: { name: "FlipOutXUp", style: obj8, duration: 0.3 },
  FlipOutXDown: { name: "FlipOutXDown", style: obj9, duration: 0.3 },
  FlipOutEasyX: { name: "FlipOutEasyX", style: obj10, duration: 0.3 },
  FlipOutEasyY: { name: "FlipOutEasyY", style: obj11, duration: 0.3 },
};
obj6 = { 0: { transform: items12 }, 100: null };
items12 = [{ perspective: "500px", rotateY: "0deg", translateX: "0%" }];
const items13 = [{ perspective: "500px", rotateY: "90deg", translateX: "100%" }];
obj6[100] = { transform: items13 };
obj7 = { 0: { transform: items14 }, 100: null };
items14 = [{ perspective: "500px", rotateY: "0deg", translateX: "0%" }];
const items15 = [{ perspective: "500px", rotateY: "-90deg", translateX: "-100%" }];
obj7[100] = { transform: items15 };
obj8 = { 0: { transform: items16 }, 100: null };
items16 = [{ perspective: "500px", rotateX: "0deg", translateY: "0%" }];
const items17 = [{ perspective: "500px", rotateX: "90deg", translateY: "-100%" }];
obj8[100] = { transform: items17 };
obj9 = { 0: { transform: items18 }, 100: null };
items18 = [{ perspective: "500px", rotateX: "0deg", translateY: "0%" }];
const items19 = [{ perspective: "500px", rotateX: "-90deg", translateY: "100%" }];
obj9[100] = { transform: items19 };
obj10 = { 0: { transform: items20 }, 100: null };
items20 = [{ perspective: "500px", rotateX: "0deg" }];
const items21 = [{ perspective: "500px", rotateX: "90deg" }];
obj10[100] = { transform: items21 };
obj11 = { 0: { transform: items22 }, 100: null };
items22 = [{ perspective: "500px", rotateY: "0deg" }];
const items23 = [{ perspective: "500px", rotateY: "90deg" }];
obj11[100] = { transform: items23 };
const obj12 = {
  FlipInYRight: null,
  FlipInYLeft: null,
  FlipInXUp: null,
  FlipInXDown: null,
  FlipInEasyX: null,
  FlipInEasyY: null,
};
const obj13 = { style: null, duration: null };
obj13[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.FlipInYRight);
obj13[1] = obj.FlipInYRight.duration;
obj12[0] = obj13;
const obj14 = { style: null, duration: null };
obj14[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.FlipInYLeft);
obj14[1] = obj.FlipInYLeft.duration;
obj12[1] = obj14;
const obj15 = { style: null, duration: null };
obj15[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.FlipInXUp);
obj15[1] = obj.FlipInXUp.duration;
obj12[2] = obj15;
const obj16 = { style: null, duration: null };
obj16[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.FlipInXDown);
obj16[1] = obj.FlipInXDown.duration;
obj12[3] = obj16;
const obj17 = { style: null, duration: null };
obj17[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.FlipInEasyX);
obj17[1] = obj.FlipInEasyX.duration;
obj12[4] = obj17;
const obj18 = { style: null, duration: null };
obj18[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.FlipInEasyY);
obj18[1] = obj.FlipInEasyY.duration;
obj12[5] = obj18;
const obj19 = {
  FlipOutYRight: null,
  FlipOutYLeft: null,
  FlipOutXUp: null,
  FlipOutXDown: null,
  FlipOutEasyX: null,
  FlipOutEasyY: null,
};
const obj20 = { style: null, duration: null };
obj20[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj5.FlipOutYRight);
obj20[1] = obj5.FlipOutYRight.duration;
obj19[0] = obj20;
const obj21 = { style: null, duration: null };
obj21[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj5.FlipOutYLeft);
obj21[1] = obj5.FlipOutYLeft.duration;
obj19[1] = obj21;
const obj22 = { style: null, duration: null };
obj22[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj5.FlipOutXUp);
obj22[1] = obj5.FlipOutXUp.duration;
obj19[2] = obj22;
const obj23 = { style: null, duration: null };
obj23[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj5.FlipOutXDown);
obj23[1] = obj5.FlipOutXDown.duration;
obj19[3] = obj23;
const obj24 = { style: null, duration: null };
obj24[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj5.FlipOutEasyX);
obj24[1] = obj5.FlipOutEasyX.duration;
obj19[4] = obj24;
const obj25 = { style: null, duration: null };
obj25[0] = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj5.FlipOutEasyY);
obj25[1] = obj5.FlipOutEasyY.duration;
obj19[5] = obj25;

export const FlipInData = obj;
export const FlipOutData = obj5;
export const FlipIn = obj12;
export const FlipOut = obj19;
