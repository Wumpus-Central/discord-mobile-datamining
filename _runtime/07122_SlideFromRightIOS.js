// === Module 7122: SlideFromRightIOS ===

// Module 7122 (SlideFromRightIOS)
import _mod17 from "module_17" /* 17 */;
import _mod7116 from "module_7116" /* 7116 */;
import TransitionIOSSpec from "TransitionIOSSpec" /* 7123 */;
import forHorizontalIOS from "forHorizontalIOS" /* 7124 */;

const Platform = _mod17.Platform;
const obj = { gestureDirection: "horizontal", transitionSpec: { open: TransitionIOSSpec.TransitionIOSSpec, close: TransitionIOSSpec.TransitionIOSSpec }, cardStyleInterpolator: forHorizontalIOS.forHorizontalIOS, headerStyleInterpolator: _mod7116.forFade };
const obj3 = { gestureDirection: "vertical", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
const obj2 = { open: TransitionIOSSpec.TransitionIOSSpec, close: TransitionIOSSpec.TransitionIOSSpec };
obj3.transitionSpec = { open: TransitionIOSSpec.TransitionIOSSpec, close: TransitionIOSSpec.TransitionIOSSpec };
obj3.cardStyleInterpolator = forHorizontalIOS.forVerticalIOS;
obj3.headerStyleInterpolator = _mod7116.forFade;
const obj5 = { gestureDirection: "vertical", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
const obj4 = { open: TransitionIOSSpec.TransitionIOSSpec, close: TransitionIOSSpec.TransitionIOSSpec };
obj5.transitionSpec = { open: TransitionIOSSpec.TransitionIOSSpec, close: TransitionIOSSpec.TransitionIOSSpec };
obj5.cardStyleInterpolator = forHorizontalIOS.forModalPresentationIOS;
obj5.headerStyleInterpolator = _mod7116.forFade;
const obj7 = { gestureDirection: "vertical", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
const obj6 = { open: TransitionIOSSpec.TransitionIOSSpec, close: TransitionIOSSpec.TransitionIOSSpec };
obj7.transitionSpec = { open: TransitionIOSSpec.FadeInFromBottomAndroidSpec, close: TransitionIOSSpec.FadeOutToBottomAndroidSpec };
obj7.cardStyleInterpolator = forHorizontalIOS.forFadeFromBottomAndroid;
obj7.headerStyleInterpolator = _mod7116.forFade;
const obj9 = { gestureDirection: "vertical", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
const obj8 = { open: TransitionIOSSpec.FadeInFromBottomAndroidSpec, close: TransitionIOSSpec.FadeOutToBottomAndroidSpec };
obj9.transitionSpec = { open: TransitionIOSSpec.RevealFromBottomAndroidSpec, close: TransitionIOSSpec.RevealFromBottomAndroidSpec };
obj9.cardStyleInterpolator = forHorizontalIOS.forRevealFromBottomAndroid;
obj9.headerStyleInterpolator = _mod7116.forFade;
const obj11 = { gestureDirection: "horizontal", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
const obj10 = { open: TransitionIOSSpec.RevealFromBottomAndroidSpec, close: TransitionIOSSpec.RevealFromBottomAndroidSpec };
obj11.transitionSpec = { open: TransitionIOSSpec.ScaleFromCenterAndroidSpec, close: TransitionIOSSpec.ScaleFromCenterAndroidSpec };
obj11.cardStyleInterpolator = forHorizontalIOS.forScaleFromCenterAndroid;
obj11.headerStyleInterpolator = _mod7116.forFade;
const obj13 = { gestureDirection: "horizontal", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
const obj12 = { open: TransitionIOSSpec.ScaleFromCenterAndroidSpec, close: TransitionIOSSpec.ScaleFromCenterAndroidSpec };
obj13.transitionSpec = { open: TransitionIOSSpec.FadeInFromBottomAndroidSpec, close: TransitionIOSSpec.FadeOutToBottomAndroidSpec };
obj13.cardStyleInterpolator = forHorizontalIOS.forFadeFromRightAndroid;
obj13.headerStyleInterpolator = _mod7116.forFade;
const obj15 = { gestureDirection: "vertical", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
const obj14 = { open: TransitionIOSSpec.FadeInFromBottomAndroidSpec, close: TransitionIOSSpec.FadeOutToBottomAndroidSpec };
obj15.transitionSpec = { open: TransitionIOSSpec.BottomSheetSlideInSpec, close: TransitionIOSSpec.BottomSheetSlideOutSpec };
obj15.cardStyleInterpolator = forHorizontalIOS.forBottomSheetAndroid;
obj15.headerStyleInterpolator = _mod7116.forFade;
const obj17 = { gestureDirection: "vertical", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
const obj16 = { open: TransitionIOSSpec.BottomSheetSlideInSpec, close: TransitionIOSSpec.BottomSheetSlideOutSpec };
obj17.transitionSpec = { open: TransitionIOSSpec.BottomSheetSlideInSpec, close: TransitionIOSSpec.BottomSheetSlideOutSpec };
obj17.cardStyleInterpolator = forHorizontalIOS.forFadeFromCenter;
obj17.headerStyleInterpolator = _mod7116.forFade;
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
const obj19 = {};
const merged = Object.assign(obj);
obj19.cardStyleInterpolator = forHorizontalIOS.forHorizontalIOSInverted;

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