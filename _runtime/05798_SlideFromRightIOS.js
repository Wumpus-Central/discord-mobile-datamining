// _runtime/05798_SlideFromRightIOS.js
import { Platform } from "get ActivityIndicator";

let obj = { gestureDirection: "horizontal", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
obj = { open: require("TransitionIOSSpec").TransitionIOSSpec, close: require("TransitionIOSSpec").TransitionIOSSpec };
obj[1] = obj;
obj[2] = require("forHorizontalIOS").forHorizontalIOS;
obj[3] = require("Animated").forFade;
obj = { gestureDirection: "vertical", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
obj[1] = { open: require("TransitionIOSSpec").TransitionIOSSpec, close: require("TransitionIOSSpec").TransitionIOSSpec };
obj[2] = require("forHorizontalIOS").forVerticalIOS;
obj[3] = require("Animated").forFade;
const obj2 = { gestureDirection: "vertical", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
const obj1 = { open: require("TransitionIOSSpec").TransitionIOSSpec, close: require("TransitionIOSSpec").TransitionIOSSpec };
obj2[1] = { open: require("TransitionIOSSpec").TransitionIOSSpec, close: require("TransitionIOSSpec").TransitionIOSSpec };
obj2[2] = require("forHorizontalIOS").forModalPresentationIOS;
obj2[3] = require("Animated").forFade;
const obj4 = { gestureDirection: "vertical", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
const obj3 = { open: require("TransitionIOSSpec").TransitionIOSSpec, close: require("TransitionIOSSpec").TransitionIOSSpec };
obj4[1] = { open: require("TransitionIOSSpec").FadeInFromBottomAndroidSpec, close: require("TransitionIOSSpec").FadeOutToBottomAndroidSpec };
obj4[2] = require("forHorizontalIOS").forFadeFromBottomAndroid;
obj4[3] = require("Animated").forFade;
const obj6 = { gestureDirection: "vertical", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
const obj5 = { open: require("TransitionIOSSpec").FadeInFromBottomAndroidSpec, close: require("TransitionIOSSpec").FadeOutToBottomAndroidSpec };
obj6[1] = { open: require("TransitionIOSSpec").RevealFromBottomAndroidSpec, close: require("TransitionIOSSpec").RevealFromBottomAndroidSpec };
obj6[2] = require("forHorizontalIOS").forRevealFromBottomAndroid;
obj6[3] = require("Animated").forFade;
const obj8 = { gestureDirection: "horizontal", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
const obj7 = { open: require("TransitionIOSSpec").RevealFromBottomAndroidSpec, close: require("TransitionIOSSpec").RevealFromBottomAndroidSpec };
obj8[1] = { open: require("TransitionIOSSpec").ScaleFromCenterAndroidSpec, close: require("TransitionIOSSpec").ScaleFromCenterAndroidSpec };
obj8[2] = require("forHorizontalIOS").forScaleFromCenterAndroid;
obj8[3] = require("Animated").forFade;
const obj10 = { gestureDirection: "horizontal", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
const obj9 = { open: require("TransitionIOSSpec").ScaleFromCenterAndroidSpec, close: require("TransitionIOSSpec").ScaleFromCenterAndroidSpec };
obj10[1] = { open: require("TransitionIOSSpec").FadeInFromBottomAndroidSpec, close: require("TransitionIOSSpec").FadeOutToBottomAndroidSpec };
obj10[2] = require("forHorizontalIOS").forFadeFromRightAndroid;
obj10[3] = require("Animated").forFade;
const obj12 = { gestureDirection: "vertical", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
const obj11 = { open: require("TransitionIOSSpec").FadeInFromBottomAndroidSpec, close: require("TransitionIOSSpec").FadeOutToBottomAndroidSpec };
obj12[1] = { open: require("TransitionIOSSpec").BottomSheetSlideInSpec, close: require("TransitionIOSSpec").BottomSheetSlideOutSpec };
obj12[2] = require("forHorizontalIOS").forBottomSheetAndroid;
obj12[3] = require("Animated").forFade;
const obj14 = { gestureDirection: "vertical", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
const obj13 = { open: require("TransitionIOSSpec").BottomSheetSlideInSpec, close: require("TransitionIOSSpec").BottomSheetSlideOutSpec };
obj14[1] = { open: require("TransitionIOSSpec").BottomSheetSlideInSpec, close: require("TransitionIOSSpec").BottomSheetSlideOutSpec };
obj14[2] = require("forHorizontalIOS").forFadeFromCenter;
obj14[3] = require("Animated").forFade;
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
obj16.cardStyleInterpolator = require("forHorizontalIOS").forHorizontalIOSInverted;

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