// === Module 5629: TransitionIOSSpec ===

// Module 5629 (TransitionIOSSpec)
import { Easing } from "get ActivityIndicator";

let obj = { animation: "timing", config: null };
obj = { duration: 350, easing: Easing.out(require("module_5")) };
obj[1] = obj;
obj = { animation: "timing", config: null };
obj[1] = { duration: 150, easing: Easing.in(Easing.linear) };
const obj2 = { animation: "timing", config: null };
const obj1 = { duration: 150, easing: Easing.in(Easing.linear) };
obj2[1] = { duration: 425, easing: Easing.bezier(0.35, 0.45, 0, 1) };
const obj4 = { animation: "timing", config: null };
const obj3 = { duration: 425, easing: Easing.bezier(0.35, 0.45, 0, 1) };
obj4[1] = { duration: 400, easing: Easing.bezier(0.35, 0.45, 0, 1) };

export const TransitionIOSSpec = { animation: "spring", config: { stiffness: 1000, damping: 500, mass: 3, overshootClamping: true, restDisplacementThreshold: 10, restSpeedThreshold: 10 } };
export const FadeInFromBottomAndroidSpec = obj;
export const FadeOutToBottomAndroidSpec = obj;
export const RevealFromBottomAndroidSpec = obj2;
export const ScaleFromCenterAndroidSpec = obj4;
export const BottomSheetSlideInSpec = {
  animation: "timing",
  config: {
    duration: 250,
    easing(arg0) {
      return Math.cos((arg0 + 1) * Math.PI) / 2 + 0.5;
    }
  }
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
    }
  }
};