import { Platform } from "get ActivityIndicator";

let obj = { gestureDirection: "horizontal", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
obj = { open: require("TransitionIOSSpec").TransitionIOSSpec, close: require("TransitionIOSSpec").TransitionIOSSpec };
obj[1] = obj;
obj[2] = require("Animated").forHorizontalIOS;
obj[3] = require("forUIKit").forFade;
obj = { gestureDirection: "vertical", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
obj[1] = { open: require("TransitionIOSSpec").TransitionIOSSpec, close: require("TransitionIOSSpec").TransitionIOSSpec };
obj[2] = require("Animated").forVerticalIOS;
obj[3] = require("forUIKit").forFade;
const obj2 = { gestureDirection: "vertical", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
const obj1 = { open: require("TransitionIOSSpec").TransitionIOSSpec, close: require("TransitionIOSSpec").TransitionIOSSpec };
obj2[1] = { open: require("TransitionIOSSpec").TransitionIOSSpec, close: require("TransitionIOSSpec").TransitionIOSSpec };
obj2[2] = require("Animated").forModalPresentationIOS;
obj2[3] = require("forUIKit").forFade;
const obj4 = { gestureDirection: "vertical", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
const obj3 = { open: require("TransitionIOSSpec").TransitionIOSSpec, close: require("TransitionIOSSpec").TransitionIOSSpec };
obj4[1] = { open: require("TransitionIOSSpec").FadeInFromBottomAndroidSpec, close: require("TransitionIOSSpec").FadeOutToBottomAndroidSpec };
obj4[2] = require("Animated").forFadeFromBottomAndroid;
obj4[3] = require("forUIKit").forFade;
const obj6 = { gestureDirection: "vertical", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
const obj5 = { open: require("TransitionIOSSpec").FadeInFromBottomAndroidSpec, close: require("TransitionIOSSpec").FadeOutToBottomAndroidSpec };
obj6[1] = { open: require("TransitionIOSSpec").RevealFromBottomAndroidSpec, close: require("TransitionIOSSpec").RevealFromBottomAndroidSpec };
obj6[2] = require("Animated").forRevealFromBottomAndroid;
obj6[3] = require("forUIKit").forFade;
const obj8 = { gestureDirection: "horizontal", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
const obj7 = { open: require("TransitionIOSSpec").RevealFromBottomAndroidSpec, close: require("TransitionIOSSpec").RevealFromBottomAndroidSpec };
obj8[1] = { open: require("TransitionIOSSpec").ScaleFromCenterAndroidSpec, close: require("TransitionIOSSpec").ScaleFromCenterAndroidSpec };
obj8[2] = require("Animated").forScaleFromCenterAndroid;
obj8[3] = require("forUIKit").forFade;
const obj10 = { gestureDirection: "vertical", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
const obj9 = { open: require("TransitionIOSSpec").ScaleFromCenterAndroidSpec, close: require("TransitionIOSSpec").ScaleFromCenterAndroidSpec };
obj10[1] = { open: require("TransitionIOSSpec").BottomSheetSlideInSpec, close: require("TransitionIOSSpec").BottomSheetSlideOutSpec };
obj10[2] = require("Animated").forBottomSheetAndroid;
obj10[3] = require("forUIKit").forFade;
const obj12 = { gestureDirection: "vertical", transitionSpec: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
const obj11 = { open: require("TransitionIOSSpec").BottomSheetSlideInSpec, close: require("TransitionIOSSpec").BottomSheetSlideOutSpec };
obj12[1] = { open: require("TransitionIOSSpec").BottomSheetSlideInSpec, close: require("TransitionIOSSpec").BottomSheetSlideOutSpec };
obj12[2] = require("Animated").forFadeFromCenter;
obj12[3] = require("forUIKit").forFade;
let tmp2 = obj8;
if (Platform.Version < 29) {
  let tmp3 = obj4;
  if (Platform.Version >= 28) {
    tmp3 = obj6;
  }
  tmp2 = tmp3;
}

export const SlideFromRightIOS = obj;
export const ModalSlideFromBottomIOS = obj;
export const ModalPresentationIOS = obj2;
export const FadeFromBottomAndroid = obj4;
export const RevealFromBottomAndroid = obj6;
export const ScaleFromCenterAndroid = obj8;
export const BottomSheetAndroid = obj10;
export const ModalFadeTransition = obj12;
export const DefaultTransition = tmp2;
export const ModalTransition = obj10;