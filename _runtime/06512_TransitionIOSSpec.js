// _runtime/06512_TransitionIOSSpec.js
import react_native from "00017_react-native.js";

const Easing = react_native.Easing;
const obj = { animation: "timing", config: { duration: 350, easing: Easing.out(Easing.poly(5)) } };
const obj3 = { animation: "timing", config: { duration: 150, easing: Easing.in(Easing.linear) } };
({ duration: 350, easing: Easing.out(Easing.poly(5)) });
const obj5 = { animation: "timing", config: { duration: 425, easing: Easing.bezier(0.20833, 0.82, 0.25, 1) } };
({ duration: 150, easing: Easing.in(Easing.linear) });
const obj7 = { animation: "timing", config: { duration: 400, easing: Easing.bezier(0.20833, 0.82, 0.25, 1) } };
({ duration: 425, easing: Easing.bezier(0.20833, 0.82, 0.25, 1) });
const obj9 = { animation: "timing", config: { duration: 450, easing: Easing.bezier(0.20833, 0.82, 0.25, 1) } };
({ duration: 400, easing: Easing.bezier(0.20833, 0.82, 0.25, 1) });
const obj11 = { animation: "timing", config: { duration: 450, easing: Easing.bezier(0.20833, 0.82, 0.25, 1) } };
({ duration: 450, easing: Easing.bezier(0.20833, 0.82, 0.25, 1) });
const obj13 = {
  animation: "timing",
  config: {
    duration: 250,
    easing(arg0) {
      return Math.cos((arg0 + 1) * Math.PI) / 2 + 0.5;
    },
  },
};
const obj14 = {
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
({ duration: 450, easing: Easing.bezier(0.20833, 0.82, 0.25, 1) });

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
export const BottomSheetSlideInSpec = obj13;
export const BottomSheetSlideOutSpec = obj14;
