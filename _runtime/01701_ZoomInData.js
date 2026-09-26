// _runtime/01701_ZoomInData.js
import convertAnimationObjectToKeyframes_mod from "01696_convertAnimationObjectToKeyframes.js";

const obj = {
  ZoomIn: null,
  ZoomInRotate: null,
  ZoomInRight: null,
  ZoomInLeft: null,
  ZoomInUp: null,
  ZoomInDown: null,
  ZoomInEasyUp: null,
  ZoomInEasyDown: null,
};
const obj2 = { name: "ZoomIn", style: null, duration: 0.3 };
const obj3 = { 0: null, 100: null };
const obj4 = { transform: null };
const items = [{ scale: 0 }];
obj4.transform = items;
obj3[0] = obj4;
const obj5 = { transform: null };
const items1 = [{ scale: 1 }];
obj5.transform = items1;
obj3[100] = obj5;
obj2.style = obj3;
obj.ZoomIn = obj2;
const obj6 = { name: "ZoomInRotate", style: null, duration: 0.3 };
const obj7 = { 0: null, 100: null };
const obj8 = { transform: null };
const items2 = [{ scale: 0, rotate: "0.3rad" }];
obj8.transform = items2;
obj7[0] = obj8;
const obj9 = { transform: null };
const items3 = [{ scale: 1, rotate: "0deg" }];
obj9.transform = items3;
obj7[100] = obj9;
obj6.style = obj7;
obj.ZoomInRotate = obj6;
const obj10 = { name: "ZoomInRight", style: null, duration: 0.3 };
const obj11 = { 0: null, 100: null };
const obj12 = { transform: null };
const items4 = [{ translateX: "100vw", scale: 0 }];
obj12.transform = items4;
obj11[0] = obj12;
const obj13 = { transform: null };
const items5 = [{ translateX: "0%", scale: 1 }];
obj13.transform = items5;
obj11[100] = obj13;
obj10.style = obj11;
obj.ZoomInRight = obj10;
const obj14 = { name: "ZoomInLeft", style: null, duration: 0.3 };
const obj15 = { 0: null, 100: null };
const obj16 = { transform: null };
const items6 = [{ translateX: "-100vw", scale: 0 }];
obj16.transform = items6;
obj15[0] = obj16;
const obj17 = { transform: null };
const items7 = [{ translateX: "0%", scale: 1 }];
obj17.transform = items7;
obj15[100] = obj17;
obj14.style = obj15;
obj.ZoomInLeft = obj14;
const obj18 = { name: "ZoomInUp", style: null, duration: 0.3 };
const obj19 = { 0: null, 100: null };
const obj20 = { transform: null };
const items8 = [{ translateY: "-100vh", scale: 0 }];
obj20.transform = items8;
obj19[0] = obj20;
const obj21 = { transform: null };
const items9 = [{ translateY: "0%", scale: 1 }];
obj21.transform = items9;
obj19[100] = obj21;
obj18.style = obj19;
obj.ZoomInUp = obj18;
const obj22 = { name: "ZoomInDown", style: null, duration: 0.3 };
const obj23 = { 0: null, 100: null };
const obj24 = { transform: null };
const items10 = [{ translateY: "100vh", scale: 0 }];
obj24.transform = items10;
obj23[0] = obj24;
const obj25 = { transform: null };
const items11 = [{ translateY: "0%", scale: 1 }];
obj25.transform = items11;
obj23[100] = obj25;
obj22.style = obj23;
obj.ZoomInDown = obj22;
const obj26 = { name: "ZoomInEasyUp", style: null, duration: 0.3 };
const obj27 = { 0: null, 100: null };
const obj28 = { transform: null };
const items12 = [{ translateY: "-100%", scale: 0 }];
obj28.transform = items12;
obj27[0] = obj28;
const obj29 = { transform: null };
const items13 = [{ translateY: "0%", scale: 1 }];
obj29.transform = items13;
obj27[100] = obj29;
obj26.style = obj27;
obj.ZoomInEasyUp = obj26;
const obj30 = { name: "ZoomInEasyDown", style: null, duration: 0.3 };
const obj31 = { 0: null, 100: null };
const obj32 = { transform: null };
const items14 = [{ translateY: "100%", scale: 0 }];
obj32.transform = items14;
obj31[0] = obj32;
const obj33 = { transform: null };
const items15 = [{ translateY: "0%", scale: 1 }];
obj33.transform = items15;
obj31[100] = obj33;
obj30.style = obj31;
obj.ZoomInEasyDown = obj30;
const obj34 = {
  ZoomOut: null,
  ZoomOutRotate: null,
  ZoomOutRight: null,
  ZoomOutLeft: null,
  ZoomOutUp: null,
  ZoomOutDown: null,
  ZoomOutEasyUp: null,
  ZoomOutEasyDown: null,
};
const obj35 = { name: "ZoomOut", style: null, duration: 0.3 };
const obj36 = { 0: null, 100: null };
const obj37 = { transform: null };
const items16 = [{ scale: 1 }];
obj37.transform = items16;
obj36[0] = obj37;
const obj38 = { transform: null };
const items17 = [{ scale: 0 }];
obj38.transform = items17;
obj36[100] = obj38;
obj35.style = obj36;
obj34.ZoomOut = obj35;
const obj39 = { name: "ZoomOutRotate", style: null, duration: 0.3 };
const obj40 = { 0: null, 100: null };
const obj41 = { transform: null };
const items18 = [{ scale: 1, rotate: "0rad" }];
obj41.transform = items18;
obj40[0] = obj41;
const obj42 = { transform: null };
const items19 = [{ scale: 0, rotate: "0.3rad" }];
obj42.transform = items19;
obj40[100] = obj42;
obj39.style = obj40;
obj34.ZoomOutRotate = obj39;
const obj43 = { name: "ZoomOutRight", style: null, duration: 0.3 };
const obj44 = { 0: null, 100: null };
const obj45 = { transform: null };
const items20 = [{ translateX: "0vw", scale: 1 }];
obj45.transform = items20;
obj44[0] = obj45;
const obj46 = { transform: null };
const items21 = [{ translateX: "100vw", scale: 0 }];
obj46.transform = items21;
obj44[100] = obj46;
obj43.style = obj44;
obj34.ZoomOutRight = obj43;
const obj47 = { name: "ZoomOutLeft", style: null, duration: 0.3 };
const obj48 = { 0: null, 100: null };
const obj49 = { transform: null };
const items22 = [{ translateX: "0vw", scale: 1 }];
obj49.transform = items22;
obj48[0] = obj49;
const obj50 = { transform: null };
const items23 = [{ translateX: "-100vw", scale: 0 }];
obj50.transform = items23;
obj48[100] = obj50;
obj47.style = obj48;
obj34.ZoomOutLeft = obj47;
const obj51 = { name: "ZoomOutUp", style: null, duration: 0.3 };
const obj52 = { 0: null, 100: null };
const obj53 = { transform: null };
const items24 = [{ translateX: "0vh", scale: 1 }];
obj53.transform = items24;
obj52[0] = obj53;
const obj54 = { transform: null };
const items25 = [{ translateY: "-100vh", scale: 0 }];
obj54.transform = items25;
obj52[100] = obj54;
obj51.style = obj52;
obj34.ZoomOutUp = obj51;
const obj55 = { name: "ZoomOutDown", style: null, duration: 0.3 };
const obj56 = { 0: null, 100: null };
const obj57 = { transform: null };
const items26 = [{ translateX: "0vh", scale: 1 }];
obj57.transform = items26;
obj56[0] = obj57;
const obj58 = { transform: null };
const items27 = [{ translateY: "100vh", scale: 0 }];
obj58.transform = items27;
obj56[100] = obj58;
obj55.style = obj56;
obj34.ZoomOutDown = obj55;
const obj59 = { name: "ZoomOutEasyUp", style: null, duration: 0.3 };
const obj60 = { 0: null, 100: null };
const obj61 = { transform: null };
const items28 = [{ translateY: "0%", scale: 1 }];
obj61.transform = items28;
obj60[0] = obj61;
const obj62 = { transform: null };
const items29 = [{ translateY: "-100%", scale: 0 }];
obj62.transform = items29;
obj60[100] = obj62;
obj59.style = obj60;
obj34.ZoomOutEasyUp = obj59;
const obj63 = { name: "ZoomOutEasyDown", style: null, duration: 0.3 };
const obj64 = { 0: null, 100: null };
const obj65 = { transform: null };
const items30 = [{ translateY: "0%", scale: 1 }];
obj65.transform = items30;
obj64[0] = obj65;
const obj66 = { transform: null };
const items31 = [{ translateY: "100%", scale: 0 }];
obj66.transform = items31;
obj64[100] = obj66;
obj63.style = obj64;
obj34.ZoomOutEasyDown = obj63;
const obj67 = {
  ZoomIn: null,
  ZoomInRotate: null,
  ZoomInRight: null,
  ZoomInLeft: null,
  ZoomInUp: null,
  ZoomInDown: null,
  ZoomInEasyUp: null,
  ZoomInEasyDown: null,
};
const obj68 = { style: null, duration: null };
let convertAnimationObjectToKeyframes = convertAnimationObjectToKeyframes_mod;
obj68.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.ZoomIn);
obj68.duration = obj.ZoomIn.duration;
obj67.ZoomIn = obj68;
const obj69 = { style: null, duration: null };
let convertAnimationObjectToKeyframes = convertAnimationObjectToKeyframes_mod;
obj69.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.ZoomInRotate);
obj69.duration = obj.ZoomInRotate.duration;
obj67.ZoomInRotate = obj69;
const obj70 = { style: null, duration: null };
let convertAnimationObjectToKeyframes = convertAnimationObjectToKeyframes_mod;
obj70.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.ZoomInRight);
obj70.duration = obj.ZoomInRight.duration;
obj67.ZoomInRight = obj70;
const obj71 = { style: null, duration: null };
let convertAnimationObjectToKeyframes = convertAnimationObjectToKeyframes_mod;
obj71.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.ZoomInLeft);
obj71.duration = obj.ZoomInLeft.duration;
obj67.ZoomInLeft = obj71;
const obj72 = { style: null, duration: null };
let convertAnimationObjectToKeyframes = convertAnimationObjectToKeyframes_mod;
obj72.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.ZoomInUp);
obj72.duration = obj.ZoomInUp.duration;
obj67.ZoomInUp = obj72;
const obj73 = { style: null, duration: null };
let convertAnimationObjectToKeyframes = convertAnimationObjectToKeyframes_mod;
obj73.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.ZoomInDown);
obj73.duration = obj.ZoomInDown.duration;
obj67.ZoomInDown = obj73;
const obj74 = { style: null, duration: null };
let convertAnimationObjectToKeyframes = convertAnimationObjectToKeyframes_mod;
obj74.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.ZoomInEasyUp);
obj74.duration = obj.ZoomInEasyUp.duration;
obj67.ZoomInEasyUp = obj74;
const obj75 = { style: null, duration: null };
let convertAnimationObjectToKeyframes = convertAnimationObjectToKeyframes_mod;
obj75.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj.ZoomInEasyDown);
obj75.duration = obj.ZoomInEasyDown.duration;
obj67.ZoomInEasyDown = obj75;
const obj76 = {
  ZoomOut: null,
  ZoomOutRotate: null,
  ZoomOutRight: null,
  ZoomOutLeft: null,
  ZoomOutUp: null,
  ZoomOutDown: null,
  ZoomOutEasyUp: null,
  ZoomOutEasyDown: null,
};
const obj77 = { style: null, duration: null };
let convertAnimationObjectToKeyframes = convertAnimationObjectToKeyframes_mod;
obj77.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj34.ZoomOut);
obj77.duration = obj34.ZoomOut.duration;
obj76.ZoomOut = obj77;
const obj78 = { style: null, duration: null };
let convertAnimationObjectToKeyframes = convertAnimationObjectToKeyframes_mod;
obj78.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj34.ZoomOutRotate);
obj78.duration = obj34.ZoomOutRotate.duration;
obj76.ZoomOutRotate = obj78;
const obj79 = { style: null, duration: null };
let convertAnimationObjectToKeyframes = convertAnimationObjectToKeyframes_mod;
obj79.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj34.ZoomOutRight);
obj79.duration = obj34.ZoomOutRight.duration;
obj76.ZoomOutRight = obj79;
const obj80 = { style: null, duration: null };
let convertAnimationObjectToKeyframes = convertAnimationObjectToKeyframes_mod;
obj80.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj34.ZoomOutLeft);
obj80.duration = obj34.ZoomOutLeft.duration;
obj76.ZoomOutLeft = obj80;
const obj81 = { style: null, duration: null };
let convertAnimationObjectToKeyframes = convertAnimationObjectToKeyframes_mod;
obj81.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj34.ZoomOutUp);
obj81.duration = obj34.ZoomOutUp.duration;
obj76.ZoomOutUp = obj81;
const obj82 = { style: null, duration: null };
let convertAnimationObjectToKeyframes = convertAnimationObjectToKeyframes_mod;
obj82.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj34.ZoomOutDown);
obj82.duration = obj34.ZoomOutDown.duration;
obj76.ZoomOutDown = obj82;
const obj83 = { style: null, duration: null };
let convertAnimationObjectToKeyframes = convertAnimationObjectToKeyframes_mod;
obj83.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj34.ZoomOutEasyUp);
obj83.duration = obj34.ZoomOutEasyUp.duration;
obj76.ZoomOutEasyUp = obj83;
const obj84 = { style: null, duration: null };
let convertAnimationObjectToKeyframes = convertAnimationObjectToKeyframes_mod;
obj84.style = convertAnimationObjectToKeyframes.convertAnimationObjectToKeyframes(obj34.ZoomOutEasyDown);
obj84.duration = obj34.ZoomOutEasyDown.duration;
obj76.ZoomOutEasyDown = obj84;

export const ZoomInData = obj;
export const ZoomOutData = obj34;
export const ZoomIn = obj67;
export const ZoomOut = obj76;
