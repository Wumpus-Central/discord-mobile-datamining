// _runtime/06511_SlideFromRightIOS.js
import react_native from "00017_react-native.js";
import react_native2 from "06505_react-native.js";
import TransitionIOSSpec from "06512_TransitionIOSSpec.js";
import forHorizontalIOS from "06513_forHorizontalIOS.js";

const Platform = react_native.Platform;
const obj = {
  gestureDirection: "horizontal",
  transitionSpec: { open: TransitionIOSSpec.TransitionIOSSpec, close: TransitionIOSSpec.TransitionIOSSpec },
  cardStyleInterpolator: forHorizontalIOS.forHorizontalIOS,
  headerStyleInterpolator: react_native2.forFade,
};
({ open: TransitionIOSSpec.TransitionIOSSpec, close: TransitionIOSSpec.TransitionIOSSpec });
const obj3 = {
  gestureDirection: "vertical",
  transitionSpec: { open: TransitionIOSSpec.TransitionIOSSpec, close: TransitionIOSSpec.TransitionIOSSpec },
  cardStyleInterpolator: forHorizontalIOS.forVerticalIOS,
  headerStyleInterpolator: react_native2.forFade,
};
({ open: TransitionIOSSpec.TransitionIOSSpec, close: TransitionIOSSpec.TransitionIOSSpec });
const obj5 = {
  gestureDirection: "vertical",
  transitionSpec: { open: TransitionIOSSpec.TransitionIOSSpec, close: TransitionIOSSpec.TransitionIOSSpec },
  cardStyleInterpolator: forHorizontalIOS.forModalPresentationIOS,
  headerStyleInterpolator: react_native2.forFade,
};
({ open: TransitionIOSSpec.TransitionIOSSpec, close: TransitionIOSSpec.TransitionIOSSpec });
const obj7 = {
  gestureDirection: "vertical",
  transitionSpec: {
    open: TransitionIOSSpec.FadeInFromBottomAndroidSpec,
    close: TransitionIOSSpec.FadeOutToBottomAndroidSpec,
  },
  cardStyleInterpolator: forHorizontalIOS.forFadeFromBottomAndroid,
  headerStyleInterpolator: react_native2.forFade,
};
({ open: TransitionIOSSpec.FadeInFromBottomAndroidSpec, close: TransitionIOSSpec.FadeOutToBottomAndroidSpec });
const obj9 = {
  gestureDirection: "vertical",
  transitionSpec: {
    open: TransitionIOSSpec.RevealFromBottomAndroidSpec,
    close: TransitionIOSSpec.RevealFromBottomAndroidSpec,
  },
  cardStyleInterpolator: forHorizontalIOS.forRevealFromBottomAndroid,
  headerStyleInterpolator: react_native2.forFade,
};
({ open: TransitionIOSSpec.RevealFromBottomAndroidSpec, close: TransitionIOSSpec.RevealFromBottomAndroidSpec });
const obj11 = {
  gestureDirection: "horizontal",
  transitionSpec: {
    open: TransitionIOSSpec.ScaleFromCenterAndroidSpec,
    close: TransitionIOSSpec.ScaleFromCenterAndroidSpec,
  },
  cardStyleInterpolator: forHorizontalIOS.forScaleFromCenterAndroid,
  headerStyleInterpolator: react_native2.forFade,
};
({ open: TransitionIOSSpec.ScaleFromCenterAndroidSpec, close: TransitionIOSSpec.ScaleFromCenterAndroidSpec });
const obj13 = {
  gestureDirection: "horizontal",
  transitionSpec: {
    open: TransitionIOSSpec.FadeInFromBottomAndroidSpec,
    close: TransitionIOSSpec.FadeOutToBottomAndroidSpec,
  },
  cardStyleInterpolator: forHorizontalIOS.forFadeFromRightAndroid,
  headerStyleInterpolator: react_native2.forFade,
};
({ open: TransitionIOSSpec.FadeInFromBottomAndroidSpec, close: TransitionIOSSpec.FadeOutToBottomAndroidSpec });
const obj15 = {
  gestureDirection: "vertical",
  transitionSpec: { open: TransitionIOSSpec.BottomSheetSlideInSpec, close: TransitionIOSSpec.BottomSheetSlideOutSpec },
  cardStyleInterpolator: forHorizontalIOS.forBottomSheetAndroid,
  headerStyleInterpolator: react_native2.forFade,
};
({ open: TransitionIOSSpec.BottomSheetSlideInSpec, close: TransitionIOSSpec.BottomSheetSlideOutSpec });
const obj17 = {
  gestureDirection: "vertical",
  transitionSpec: { open: TransitionIOSSpec.BottomSheetSlideInSpec, close: TransitionIOSSpec.BottomSheetSlideOutSpec },
  cardStyleInterpolator: forHorizontalIOS.forFadeFromCenter,
  headerStyleInterpolator: react_native2.forFade,
};
({ open: TransitionIOSSpec.BottomSheetSlideInSpec, close: TransitionIOSSpec.BottomSheetSlideOutSpec });
let tmp2 = obj13;
if (Number(Platform.Version) < 34) {
  const _Number = Number;
  let tmp3 = obj11;
  if (Number(Platform.Version) < 29) {
    const _Number2 = Number;
    let tmp4 = obj7;
    if (Number(Platform.Version) >= 28) {
      tmp4 = obj9;
    }
    tmp3 = tmp4;
  }
  tmp2 = tmp3;
}
const obj19 = { cardStyleInterpolator: forHorizontalIOS.forHorizontalIOSInverted };
const merged = Object.assign(obj);

export const SlideFromRightIOS = obj;
export const ModalSlideFromBottomIOS = obj3;
export const ModalPresentationIOS = obj5;
export const FadeFromBottomAndroid = obj7;
export const RevealFromBottomAndroid = obj9;
export const ScaleFromCenterAndroid = obj11;
export const FadeFromRightAndroid = obj13;
export const BottomSheetAndroid = obj15;
export const ModalFadeTransition = obj17;
export const DefaultTransition = tmp2;
export const ModalTransition = obj15;
export const SlideFromLeftIOS = obj19;
