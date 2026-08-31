// === Module 5991: SlideFromRightIOS ===

// Module 5991 (SlideFromRightIOS)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import Animated from "Animated" /* 5985 */;
import TransitionIOSSpec from "TransitionIOSSpec" /* 5992 */;
import forHorizontalIOS from "forHorizontalIOS" /* 5993 */;

const Platform = get_ActivityIndicator.Platform;
let obj = { gestureDirection: "horizontal", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
obj = { open: TransitionIOSSpec.TransitionIOSSpec, close: TransitionIOSSpec.TransitionIOSSpec };
obj[1] = obj;
obj[2] = forHorizontalIOS.forHorizontalIOS;
obj[3] = Animated.forFade;
obj = { gestureDirection: "vertical", transitionSpec: { open: TransitionIOSSpec.TransitionIOSSpec, close: TransitionIOSSpec.TransitionIOSSpec }, cardStyleInterpolator: forHorizontalIOS.forVerticalIOS, headerStyleInterpolator: Animated.forFade };
const obj2 = { gestureDirection: "vertical", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
const obj1 = { open: TransitionIOSSpec.TransitionIOSSpec, close: TransitionIOSSpec.TransitionIOSSpec };
obj2[1] = { open: TransitionIOSSpec.TransitionIOSSpec, close: TransitionIOSSpec.TransitionIOSSpec };
obj2[2] = forHorizontalIOS.forModalPresentationIOS;
obj2[3] = Animated.forFade;
const obj4 = { gestureDirection: "vertical", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
const obj3 = { open: TransitionIOSSpec.TransitionIOSSpec, close: TransitionIOSSpec.TransitionIOSSpec };
obj4[1] = { open: TransitionIOSSpec.FadeInFromBottomAndroidSpec, close: TransitionIOSSpec.FadeOutToBottomAndroidSpec };
obj4[2] = forHorizontalIOS.forFadeFromBottomAndroid;
obj4[3] = Animated.forFade;
const obj6 = { gestureDirection: "vertical", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
const obj5 = { open: TransitionIOSSpec.FadeInFromBottomAndroidSpec, close: TransitionIOSSpec.FadeOutToBottomAndroidSpec };
obj6[1] = { open: TransitionIOSSpec.RevealFromBottomAndroidSpec, close: TransitionIOSSpec.RevealFromBottomAndroidSpec };
obj6[2] = forHorizontalIOS.forRevealFromBottomAndroid;
obj6[3] = Animated.forFade;
const obj8 = { gestureDirection: "horizontal", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
const obj7 = { open: TransitionIOSSpec.RevealFromBottomAndroidSpec, close: TransitionIOSSpec.RevealFromBottomAndroidSpec };
obj8[1] = { open: TransitionIOSSpec.ScaleFromCenterAndroidSpec, close: TransitionIOSSpec.ScaleFromCenterAndroidSpec };
obj8[2] = forHorizontalIOS.forScaleFromCenterAndroid;
obj8[3] = Animated.forFade;
const obj10 = { gestureDirection: "horizontal", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
const obj9 = { open: TransitionIOSSpec.ScaleFromCenterAndroidSpec, close: TransitionIOSSpec.ScaleFromCenterAndroidSpec };
obj10[1] = { open: TransitionIOSSpec.FadeInFromBottomAndroidSpec, close: TransitionIOSSpec.FadeOutToBottomAndroidSpec };
obj10[2] = forHorizontalIOS.forFadeFromRightAndroid;
obj10[3] = Animated.forFade;
const obj12 = { gestureDirection: "vertical", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
const obj11 = { open: TransitionIOSSpec.FadeInFromBottomAndroidSpec, close: TransitionIOSSpec.FadeOutToBottomAndroidSpec };
obj12[1] = { open: TransitionIOSSpec.BottomSheetSlideInSpec, close: TransitionIOSSpec.BottomSheetSlideOutSpec };
obj12[2] = forHorizontalIOS.forBottomSheetAndroid;
obj12[3] = Animated.forFade;
const obj14 = { gestureDirection: "vertical", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
const obj13 = { open: TransitionIOSSpec.BottomSheetSlideInSpec, close: TransitionIOSSpec.BottomSheetSlideOutSpec };
obj14[1] = { open: TransitionIOSSpec.BottomSheetSlideInSpec, close: TransitionIOSSpec.BottomSheetSlideOutSpec };
obj14[2] = forHorizontalIOS.forFadeFromCenter;
obj14[3] = Animated.forFade;
let tmp2 = obj10;
if (Number(Platform.Version) < 34) {
  const _Number = Number;
  let tmp3 = obj8;
  if (Number(Platform.Version) < 29) {
    const _Number2 = Number;
    let tmp4 = obj4;
    if (Number(Platform.Version) >= 28) {
      tmp4 = obj6;
    }
    tmp3 = tmp4;
  }
  tmp2 = tmp3;
}
const obj16 = {};
const merged = Object.assign(obj);
obj16.cardStyleInterpolator = forHorizontalIOS.forHorizontalIOSInverted;

export const SlideFromRightIOS = obj;
export const ModalSlideFromBottomIOS = obj;
export const ModalPresentationIOS = obj2;
export const FadeFromBottomAndroid = obj4;
export const RevealFromBottomAndroid = obj6;
export const ScaleFromCenterAndroid = obj8;
export const FadeFromRightAndroid = obj10;
export const BottomSheetAndroid = obj12;
export const ModalFadeTransition = obj14;
export const DefaultTransition = tmp2;
export const ModalTransition = obj12;
export const SlideFromLeftIOS = obj16;