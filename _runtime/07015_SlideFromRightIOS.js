// === Module 7015: SlideFromRightIOS ===

// Module 7015 (SlideFromRightIOS)
import _mod17 from "module_17" /* 17 */;
import _mod7009 from "module_7009" /* 7009 */;
import TransitionIOSSpec from "TransitionIOSSpec" /* 7016 */;
import forHorizontalIOS from "forHorizontalIOS" /* 7017 */;

const Platform = _mod17.Platform;
let obj = { gestureDirection: "horizontal", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
obj = { open: TransitionIOSSpec.TransitionIOSSpec, close: TransitionIOSSpec.TransitionIOSSpec };
obj.transitionSpec = obj;
obj.cardStyleInterpolator = forHorizontalIOS.forHorizontalIOS;
obj.headerStyleInterpolator = _mod7009.forFade;
obj = { gestureDirection: "vertical", transitionSpec: { open: TransitionIOSSpec.TransitionIOSSpec, close: TransitionIOSSpec.TransitionIOSSpec }, cardStyleInterpolator: forHorizontalIOS.forVerticalIOS, headerStyleInterpolator: _mod7009.forFade };
const obj2 = { gestureDirection: "vertical", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
const obj1 = { open: TransitionIOSSpec.TransitionIOSSpec, close: TransitionIOSSpec.TransitionIOSSpec };
obj2.transitionSpec = { open: TransitionIOSSpec.TransitionIOSSpec, close: TransitionIOSSpec.TransitionIOSSpec };
obj2.cardStyleInterpolator = forHorizontalIOS.forModalPresentationIOS;
obj2.headerStyleInterpolator = _mod7009.forFade;
const obj4 = { gestureDirection: "vertical", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
const obj3 = { open: TransitionIOSSpec.TransitionIOSSpec, close: TransitionIOSSpec.TransitionIOSSpec };
obj4.transitionSpec = { open: TransitionIOSSpec.FadeInFromBottomAndroidSpec, close: TransitionIOSSpec.FadeOutToBottomAndroidSpec };
obj4.cardStyleInterpolator = forHorizontalIOS.forFadeFromBottomAndroid;
obj4.headerStyleInterpolator = _mod7009.forFade;
const obj6 = { gestureDirection: "vertical", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
const obj5 = { open: TransitionIOSSpec.FadeInFromBottomAndroidSpec, close: TransitionIOSSpec.FadeOutToBottomAndroidSpec };
obj6.transitionSpec = { open: TransitionIOSSpec.RevealFromBottomAndroidSpec, close: TransitionIOSSpec.RevealFromBottomAndroidSpec };
obj6.cardStyleInterpolator = forHorizontalIOS.forRevealFromBottomAndroid;
obj6.headerStyleInterpolator = _mod7009.forFade;
const obj8 = { gestureDirection: "horizontal", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
const obj7 = { open: TransitionIOSSpec.RevealFromBottomAndroidSpec, close: TransitionIOSSpec.RevealFromBottomAndroidSpec };
obj8.transitionSpec = { open: TransitionIOSSpec.ScaleFromCenterAndroidSpec, close: TransitionIOSSpec.ScaleFromCenterAndroidSpec };
obj8.cardStyleInterpolator = forHorizontalIOS.forScaleFromCenterAndroid;
obj8.headerStyleInterpolator = _mod7009.forFade;
const obj10 = { gestureDirection: "horizontal", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
const obj9 = { open: TransitionIOSSpec.ScaleFromCenterAndroidSpec, close: TransitionIOSSpec.ScaleFromCenterAndroidSpec };
obj10.transitionSpec = { open: TransitionIOSSpec.FadeInFromBottomAndroidSpec, close: TransitionIOSSpec.FadeOutToBottomAndroidSpec };
obj10.cardStyleInterpolator = forHorizontalIOS.forFadeFromRightAndroid;
obj10.headerStyleInterpolator = _mod7009.forFade;
const obj12 = { gestureDirection: "vertical", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
const obj11 = { open: TransitionIOSSpec.FadeInFromBottomAndroidSpec, close: TransitionIOSSpec.FadeOutToBottomAndroidSpec };
obj12.transitionSpec = { open: TransitionIOSSpec.BottomSheetSlideInSpec, close: TransitionIOSSpec.BottomSheetSlideOutSpec };
obj12.cardStyleInterpolator = forHorizontalIOS.forBottomSheetAndroid;
obj12.headerStyleInterpolator = _mod7009.forFade;
const obj14 = { gestureDirection: "vertical", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
const obj13 = { open: TransitionIOSSpec.BottomSheetSlideInSpec, close: TransitionIOSSpec.BottomSheetSlideOutSpec };
obj14.transitionSpec = { open: TransitionIOSSpec.BottomSheetSlideInSpec, close: TransitionIOSSpec.BottomSheetSlideOutSpec };
obj14.cardStyleInterpolator = forHorizontalIOS.forFadeFromCenter;
obj14.headerStyleInterpolator = _mod7009.forFade;
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