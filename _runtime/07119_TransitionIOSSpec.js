// _runtime/07119_TransitionIOSSpec.js
import _mod17 from "metro/00017__.js";

const Easing = _mod17.Easing;
const obj = { animation: "timing", config: { duration: 350, easing: Easing.out(Easing.poly(5)) } };
const obj3 = { animation: "timing", config: null };
const obj2 = { duration: 350, easing: Easing.out(Easing.poly(5)) };
obj3.config = { duration: 150, easing: Easing.in(Easing.linear) };
const obj5 = { animation: "timing", config: null };
const obj4 = { duration: 150, easing: Easing.in(Easing.linear) };
obj5.config = { duration: 425, easing: Easing.bezier(0.20833, 0.82, 0.25, 1) };
const obj7 = { animation: "timing", config: null };
const obj6 = { duration: 425, easing: Easing.bezier(0.20833, 0.82, 0.25, 1) };
obj7.config = { duration: 400, easing: Easing.bezier(0.20833, 0.82, 0.25, 1) };
const obj9 = { animation: "timing", config: null };
const obj8 = { duration: 400, easing: Easing.bezier(0.20833, 0.82, 0.25, 1) };
obj9.config = { duration: 450, easing: Easing.bezier(0.20833, 0.82, 0.25, 1) };
const obj11 = { animation: "timing", config: null };
const obj10 = { duration: 450, easing: Easing.bezier(0.20833, 0.82, 0.25, 1) };
obj11.config = { duration: 450, easing: Easing.bezier(0.20833, 0.82, 0.25, 1) };

export const TransitionIOSSpec = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 10,
    restSpeedThreshold: 10,
  },
};
export const FadeInFromBottomAndroidSpec = obj;
export const FadeOutToBottomAndroidSpec = obj3;
export const RevealFromBottomAndroidSpec = obj5;
export const ScaleFromCenterAndroidSpec = obj7;
export const FadeInFromRightAndroidSpec = obj9;
export const FadeOutToLeftAndroidSpec = obj11;
export const BottomSheetSlideInSpec = {
  animation: "timing",
  config: {
    duration: 250,
    easing(arg0) {
      return Math.cos((arg0 + 1) * Math.PI) / 2 + 0.5;
    },
  },
};
export const BottomSheetSlideOutSpec = {
  animation: "timing",
  config: {
    duration: 200,
    easing(sum) {
      let num = 1;
      if (1 !== sum) {
        const _Math = Math;
        num = Math.pow(sum, 2);
      }
      return num;
    },
  },
};
