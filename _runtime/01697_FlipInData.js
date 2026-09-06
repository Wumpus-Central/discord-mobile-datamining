// _runtime/01697_FlipInData.js
import convertAnimationObjectToKeyframes from "01694_convertAnimationObjectToKeyframes.js";

let obj = {
  FlipInYRight: null,
  FlipInYLeft: null,
  FlipInXUp: null,
  FlipInXDown: null,
  FlipInEasyX: null,
  FlipInEasyY: null,
};
obj = { name: "FlipInYRight", style: null, duration: 0.3 };
obj = { 0: null, 100: null };
const obj1 = { transform: null };
const items = [{ perspective: "500px", rotateY: "90deg", translateX: "100%" }];
obj1.transform = items;
obj[0] = obj1;
const obj2 = { transform: null };
const items1 = [{ perspective: "500px", rotateY: "0deg", translateX: "0%" }];
obj2.transform = items1;
obj[100] = obj2;
obj.style = obj;
obj.FlipInYRight = obj;
const obj3 = { name: "FlipInYLeft", style: null, duration: 0.3 };
const obj4 = { 0: null, 100: null };
const obj5 = { transform: null };
const items2 = [{ perspective: "500px", rotateY: "-90deg", translateX: "-100%" }];
obj5.transform = items2;
obj4[0] = obj5;
const obj6 = { transform: null };
const items3 = [{ perspective: "500px", rotateY: "0deg", translateX: "0%" }];
obj6.transform = items3;
obj4[100] = obj6;
obj3.style = obj4;
obj.FlipInYLeft = obj3;
const obj7 = { name: "FlipInXUp", style: null, duration: 0.3 };
const obj8 = { 0: null, 100: null };
const obj9 = { transform: null };
const items4 = [{ perspective: "500px", rotateX: "90deg", translateY: "-100%" }];
obj9.transform = items4;
obj8[0] = obj9;
const obj10 = { transform: null };
const items5 = [{ perspective: "500px", rotateX: "0deg", translateY: "0%" }];
obj10.transform = items5;
obj8[100] = obj10;
obj7.style = obj8;
obj.FlipInXUp = obj7;
const obj11 = { name: "FlipInXDown", style: null, duration: 0.3 };
const obj12 = { 0: null, 100: null };
const obj13 = { transform: null };
const items6 = [{ perspective: "500px", rotateX: "-90deg", translateY: "100%" }];
obj13.transform = items6;
obj12[0] = obj13;
const obj14 = { transform: null };
const items7 = [{ perspective: "500px", rotateX: "0deg", translateY: "0%" }];
obj14.transform = items7;
obj12[100] = obj14;
obj11.style = obj12;
obj.FlipInXDown = obj11;
const obj15 = { name: "FlipInEasyX", style: null, duration: 0.3 };
const obj16 = { 0: null, 100: null };
const obj17 = { transform: null };
const items8 = [{ perspective: "500px", rotateX: "90deg" }];
obj17.transform = items8;
obj16[0] = obj17;
const obj18 = { transform: null };
const items9 = [{ perspective: "500px", rotateX: "0deg" }];
obj18.transform = items9;
obj16[100] = obj18;
obj15.style = obj16;
obj.FlipInEasyX = obj15;
const obj19 = { name: "FlipInEasyY", style: null, duration: 0.3 };
const obj20 = { 0: null, 100: null };
const obj21 = { transform: null };
const items10 = [{ perspective: "500px", rotateY: "90deg" }];
obj21.transform = items10;
obj20[0] = obj21;
const obj22 = { transform: null };
const items11 = [{ perspective: "500px", rotateY: "0deg" }];
obj22.transform = items11;
obj20[100] = obj22;
obj19.style = obj20;
obj.FlipInEasyY = obj19;
const obj23 = {
  FlipOutYRight: null,
  FlipOutYLeft: null,
  FlipOutXUp: null,
  FlipOutXDown: null,
  FlipOutEasyX: null,
  FlipOutEasyY: null,
};
const obj24 = { name: "FlipOutYRight", style: null, duration: 0.3 };
const obj25 = { 0: null, 100: null };
const obj26 = { transform: null };
const items12 = [{ perspective: "500px", rotateY: "0deg", translateX: "0%" }];
obj26.transform = items12;
obj25[0] = obj26;
const obj27 = { transform: null };
const items13 = [{ perspective: "500px", rotateY: "90deg", translateX: "100%" }];
obj27.transform = items13;
obj25[100] = obj27;
obj24.style = obj25;
obj23.FlipOutYRight = obj24;
const obj28 = { name: "FlipOutYLeft", style: null, duration: 0.3 };
const obj29 = { 0: null, 100: null };
const obj30 = { transform: null };
const items14 = [{ perspective: "500px", rotateY: "0deg", translateX: "0%" }];
obj30.transform = items14;
obj29[0] = obj30;
const obj31 = { transform: null };
const items15 = [{ perspective: "500px", rotateY: "-90deg", translateX: "-100%" }];
obj31.transform = items15;
obj29[100] = obj31;
obj28.style = obj29;
obj23.FlipOutYLeft = obj28;
const obj32 = { name: "FlipOutXUp", style: null, duration: 0.3 };
const obj33 = { 0: null, 100: null };
const obj34 = { transform: null };
const items16 = [{ perspective: "500px", rotateX: "0deg", translateY: "0%" }];
obj34.transform = items16;
obj33[0] = obj34;
const obj35 = { transform: null };
const items17 = [{ perspective: "500px", rotateX: "90deg", translateY: "-100%" }];
obj35.transform = items17;
obj33[100] = obj35;
obj32.style = obj33;
obj23.FlipOutXUp = obj32;
const obj36 = { name: "FlipOutXDown", style: null, duration: 0.3 };
const obj37 = { 0: null, 100: null };
const obj38 = { transform: null };
const items18 = [{ perspective: "500px", rotateX: "0deg", translateY: "0%" }];
obj38.transform = items18;
obj37[0] = obj38;
const obj39 = { transform: null };
const items19 = [{ perspective: "500px", rotateX: "-90deg", translateY: "100%" }];
obj39.transform = items19;
obj37[100] = obj39;
obj36.style = obj37;
obj23.FlipOutXDown = obj36;
const obj40 = { name: "FlipOutEasyX", style: null, duration: 0.3 };
const obj41 = { 0: null, 100: null };
const obj42 = { transform: null };
const items20 = [{ perspective: "500px", rotateX: "0deg" }];
obj42.transform = items20;
obj41[0] = obj42;
const obj43 = { transform: null };
const items21 = [{ perspective: "500px", rotateX: "90deg" }];
obj43.transform = items21;
obj41[100] = obj43;
obj40.style = obj41;
obj23.FlipOutEasyX = obj40;
const obj44 = { name: "FlipOutEasyY", style: null, duration: 0.3 };
const obj45 = { 0: null, 100: null };
const obj46 = { transform: null };
const items22 = [{ perspective: "500px", rotateY: "0deg" }];
obj46.transform = items22;
obj45[0] = obj46;
const obj47 = { transform: null };
const items23 = [{ perspective: "500px", rotateY: "90deg" }];
obj47.transform = items23;
obj45[100] = obj47;
obj44.style = obj45;
obj23.FlipOutEasyY = obj44;
const obj48 = {
  FlipInYRight: null,
  FlipInYLeft: null,
  FlipInXUp: null,
  FlipInXDown: null,
  FlipInEasyX: null,
  FlipInEasyY: null,
};
const obj49 = { style: null, duration: null };
obj49.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.FlipInYRight);
obj49.duration = obj.FlipInYRight.duration;
obj48.FlipInYRight = obj49;
const obj50 = { style: null, duration: null };
obj50.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.FlipInYLeft);
obj50.duration = obj.FlipInYLeft.duration;
obj48.FlipInYLeft = obj50;
const obj51 = { style: null, duration: null };
obj51.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.FlipInXUp);
obj51.duration = obj.FlipInXUp.duration;
obj48.FlipInXUp = obj51;
const obj52 = { style: null, duration: null };
obj52.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.FlipInXDown);
obj52.duration = obj.FlipInXDown.duration;
obj48.FlipInXDown = obj52;
const obj53 = { style: null, duration: null };
obj53.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.FlipInEasyX);
obj53.duration = obj.FlipInEasyX.duration;
obj48.FlipInEasyX = obj53;
const obj54 = { style: null, duration: null };
obj54.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.FlipInEasyY);
obj54.duration = obj.FlipInEasyY.duration;
obj48.FlipInEasyY = obj54;
const obj55 = {
  FlipOutYRight: null,
  FlipOutYLeft: null,
  FlipOutXUp: null,
  FlipOutXDown: null,
  FlipOutEasyX: null,
  FlipOutEasyY: null,
};
const obj56 = { style: null, duration: null };
obj56.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj23.FlipOutYRight);
obj56.duration = obj23.FlipOutYRight.duration;
obj55.FlipOutYRight = obj56;
const obj57 = { style: null, duration: null };
obj57.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj23.FlipOutYLeft);
obj57.duration = obj23.FlipOutYLeft.duration;
obj55.FlipOutYLeft = obj57;
const obj58 = { style: null, duration: null };
obj58.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj23.FlipOutXUp);
obj58.duration = obj23.FlipOutXUp.duration;
obj55.FlipOutXUp = obj58;
const obj59 = { style: null, duration: null };
obj59.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj23.FlipOutXDown);
obj59.duration = obj23.FlipOutXDown.duration;
obj55.FlipOutXDown = obj59;
const obj60 = { style: null, duration: null };
obj60.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj23.FlipOutEasyX);
obj60.duration = obj23.FlipOutEasyX.duration;
obj55.FlipOutEasyX = obj60;
const obj61 = { style: null, duration: null };
obj61.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj23.FlipOutEasyY);
obj61.duration = obj23.FlipOutEasyY.duration;
obj55.FlipOutEasyY = obj61;

export const FlipInData = obj;
export const FlipOutData = obj23;
export const FlipIn = obj48;
export const FlipOut = obj55;
