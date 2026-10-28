// === Module 5145: CheckpointCharacterRive ===

// Module 5145 (CheckpointCharacterRive)
import c from "c" /* 576 */;
import BaseRive from "BaseRive" /* 5079 */;
import RiveErrorBoundary from "RiveErrorBoundary" /* 5134 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["ref", "fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
let closure_3 = ["ref", "fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
const jsx = fn(21).jsx;
const artboardProperties = { AB_Master: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_12_Spooked: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Environment: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Character: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_01_Chill: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Aura: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_15_Awkward: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_14_Possessed: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_13_FreeFall: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_11_Spellbound: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_10_Sus: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_09_Rage: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_07_Anxious: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_06_Confused: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_05_Smitten: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_04_LockedIn: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_03_Bored: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_08_Sparkle: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_02_CryBaby: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" } };
const artboardViewModelInstances = { AB_Master: ["Base"], AB_Face_12_Spooked: ["Base"], AB_Environment: ["Base"], AB_Character: ["Base"], AB_Face_01_Chill: ["Base"], AB_Aura: ["Base"], AB_Face_15_Awkward: ["Base"], AB_Face_14_Possessed: ["Base"], AB_Face_13_FreeFall: ["Base"], AB_Face_11_Spellbound: ["Base"], AB_Face_10_Sus: ["Base"], AB_Face_09_Rage: ["Base"], AB_Face_07_Anxious: ["Base"], AB_Face_06_Confused: ["Base"], AB_Face_05_Smitten: ["Base"], AB_Face_04_LockedIn: ["Base"], AB_Face_03_Bored: ["Base"], AB_Face_08_Sparkle: ["Base"], AB_Face_02_CryBaby: ["Base"] };
let ReactCompilerGating = fn(558);
let obj2 = {
  AB_Master: ReactCompilerGating.isReactCompilerEnabled() ? (function ABMasterBindings(arg0) {
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    const tmpResult = BaseRive;
    let mobileLift;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    const tmpResult37 = BaseRive;
    let faceID;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
    const tmpResult38 = BaseRive;
    let outfitID;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    const tmpResult39 = BaseRive;
    let outfit01Image;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    const tmpResult40 = BaseRive;
    let outfit02Image;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    const tmpResult41 = BaseRive;
    let outfit03Image;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    const tmpResult42 = BaseRive;
    let outfit04Image;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    const tmpResult43 = BaseRive;
    let outfit05Image;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    const tmpResult44 = BaseRive;
    let outfit06Image;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    const tmpResult45 = BaseRive;
    let outfit07Image;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    const tmpResult46 = BaseRive;
    let outfit08Image;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    const tmpResult47 = BaseRive;
    let outfit09Image;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    const tmpResult48 = BaseRive;
    let outfit10Image;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    const tmpResult49 = BaseRive;
    let outfit11Image;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    const tmpResult50 = BaseRive;
    let outfit12Image;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    const tmpResult51 = BaseRive;
    let outfit13Image;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    const tmpResult52 = BaseRive;
    let outfit14Image;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    const tmpResult53 = BaseRive;
    let headwearID;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    const tmpResult54 = BaseRive;
    let shoesID;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    const tmpResult55 = BaseRive;
    let wearableID;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    const tmpResult56 = BaseRive;
    let auraImage;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    const tmpResult57 = BaseRive;
    let baseColorImage;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    const tmpResult58 = BaseRive;
    let stateChange;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    const tmpResult59 = BaseRive;
    let faceStateChange;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    const tmpResult60 = BaseRive;
    let wearableChange;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    const tmpResult61 = BaseRive;
    let cursorX;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    const tmpResult62 = BaseRive;
    let cursorY;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    const tmpResult63 = BaseRive;
    let prop;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    const tmpResult64 = BaseRive;
    let prop2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    const tmpResult65 = BaseRive;
    let gradientLeftOpacity;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    const tmpResult66 = BaseRive;
    let gradientLeftPosition;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    const tmpResult67 = BaseRive;
    let gradientRightOpacity;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    const tmpResult68 = BaseRive;
    let prop4;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    const tmpResult69 = BaseRive;
    let gradientTopOpacity;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    const tmpResult70 = BaseRive;
    let gradientTopPosition;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult71 = BaseRive;
    const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }) : (function ABMasterBindings(arg0) {
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    const tmpResult = BaseRive;
    let mobileLift;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    const tmpResult37 = BaseRive;
    let faceID;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
    const tmpResult38 = BaseRive;
    let outfitID;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    const tmpResult39 = BaseRive;
    let outfit01Image;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    const tmpResult40 = BaseRive;
    let outfit02Image;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    const tmpResult41 = BaseRive;
    let outfit03Image;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    const tmpResult42 = BaseRive;
    let outfit04Image;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    const tmpResult43 = BaseRive;
    let outfit05Image;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    const tmpResult44 = BaseRive;
    let outfit06Image;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    const tmpResult45 = BaseRive;
    let outfit07Image;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    const tmpResult46 = BaseRive;
    let outfit08Image;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    const tmpResult47 = BaseRive;
    let outfit09Image;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    const tmpResult48 = BaseRive;
    let outfit10Image;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    const tmpResult49 = BaseRive;
    let outfit11Image;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    const tmpResult50 = BaseRive;
    let outfit12Image;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    const tmpResult51 = BaseRive;
    let outfit13Image;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    const tmpResult52 = BaseRive;
    let outfit14Image;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    const tmpResult53 = BaseRive;
    let headwearID;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    const tmpResult54 = BaseRive;
    let shoesID;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    const tmpResult55 = BaseRive;
    let wearableID;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    const tmpResult56 = BaseRive;
    let auraImage;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    const tmpResult57 = BaseRive;
    let baseColorImage;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    const tmpResult58 = BaseRive;
    let stateChange;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    const tmpResult59 = BaseRive;
    let faceStateChange;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    const tmpResult60 = BaseRive;
    let wearableChange;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    const tmpResult61 = BaseRive;
    let cursorX;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    const tmpResult62 = BaseRive;
    let cursorY;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    const tmpResult63 = BaseRive;
    let prop;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    const tmpResult64 = BaseRive;
    let prop2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    const tmpResult65 = BaseRive;
    let gradientLeftOpacity;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    const tmpResult66 = BaseRive;
    let gradientLeftPosition;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    const tmpResult67 = BaseRive;
    let gradientRightOpacity;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    const tmpResult68 = BaseRive;
    let prop4;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    const tmpResult69 = BaseRive;
    let gradientTopOpacity;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    const tmpResult70 = BaseRive;
    let gradientTopPosition;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult71 = BaseRive;
    const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }),
  AB_Face_12_Spooked: null,
  AB_Environment: null,
  AB_Character: null,
  AB_Face_01_Chill: null,
  AB_Aura: null,
  AB_Face_15_Awkward: null,
  AB_Face_14_Possessed: null,
  AB_Face_13_FreeFall: null,
  AB_Face_11_Spellbound: null,
  AB_Face_10_Sus: null,
  AB_Face_09_Rage: null,
  AB_Face_07_Anxious: null,
  AB_Face_06_Confused: null,
  AB_Face_05_Smitten: null,
  AB_Face_04_LockedIn: null,
  AB_Face_03_Bored: null,
  AB_Face_08_Sparkle: null,
  AB_Face_02_CryBaby: null
};
ReactCompilerGating = fn(558);
obj2.AB_Face_12_Spooked = ReactCompilerGating.isReactCompilerEnabled() ? (function ABFace12SpookedBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
}) : (function ABFace12SpookedBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
obj2.AB_Environment = ReactCompilerGating.isReactCompilerEnabled() ? (function ABEnvironmentBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
}) : (function ABEnvironmentBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
obj2.AB_Character = ReactCompilerGating.isReactCompilerEnabled() ? (function ABCharacterBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
}) : (function ABCharacterBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
obj2.AB_Face_01_Chill = ReactCompilerGating.isReactCompilerEnabled() ? (function ABFace01ChillBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
}) : (function ABFace01ChillBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
obj2.AB_Aura = ReactCompilerGating.isReactCompilerEnabled() ? (function ABAuraBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
}) : (function ABAuraBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
obj2.AB_Face_15_Awkward = ReactCompilerGating.isReactCompilerEnabled() ? (function ABFace15AwkwardBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
}) : (function ABFace15AwkwardBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
obj2.AB_Face_14_Possessed = ReactCompilerGating.isReactCompilerEnabled() ? (function ABFace14PossessedBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
}) : (function ABFace14PossessedBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
obj2.AB_Face_13_FreeFall = ReactCompilerGating.isReactCompilerEnabled() ? (function ABFace13FreeFallBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
}) : (function ABFace13FreeFallBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
obj2.AB_Face_11_Spellbound = ReactCompilerGating.isReactCompilerEnabled() ? (function ABFace11SpellboundBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
}) : (function ABFace11SpellboundBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
obj2.AB_Face_10_Sus = ReactCompilerGating.isReactCompilerEnabled() ? (function ABFace10SusBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
}) : (function ABFace10SusBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
obj2.AB_Face_09_Rage = ReactCompilerGating.isReactCompilerEnabled() ? (function ABFace09RageBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
}) : (function ABFace09RageBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
obj2.AB_Face_07_Anxious = ReactCompilerGating.isReactCompilerEnabled() ? (function ABFace07AnxiousBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
}) : (function ABFace07AnxiousBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
obj2.AB_Face_06_Confused = ReactCompilerGating.isReactCompilerEnabled() ? (function ABFace06ConfusedBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
}) : (function ABFace06ConfusedBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
obj2.AB_Face_05_Smitten = ReactCompilerGating.isReactCompilerEnabled() ? (function ABFace05SmittenBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
}) : (function ABFace05SmittenBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
obj2.AB_Face_04_LockedIn = ReactCompilerGating.isReactCompilerEnabled() ? (function ABFace04LockedInBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
}) : (function ABFace04LockedInBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
obj2.AB_Face_03_Bored = ReactCompilerGating.isReactCompilerEnabled() ? (function ABFace03BoredBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
}) : (function ABFace03BoredBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
obj2.AB_Face_08_Sparkle = ReactCompilerGating.isReactCompilerEnabled() ? (function ABFace08SparkleBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
}) : (function ABFace08SparkleBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
obj2.AB_Face_02_CryBaby = ReactCompilerGating.isReactCompilerEnabled() ? (function ABFace02CryBabyBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
}) : (function ABFace02CryBabyBindings(arg0) {
  ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let device;
  if (dataBinding != null) {
    device = dataBinding.device;
  }
  let device1;
  if (onDataBindingChange != null) {
    device1 = onDataBindingChange.device;
  }
  const enumBinding = BaseRive.useEnumBinding("device", instance, device, device1, playIfNeeded);
  let chapterID;
  if (dataBinding != null) {
    chapterID = dataBinding.chapterID;
  }
  let chapterID1;
  if (onDataBindingChange != null) {
    chapterID1 = onDataBindingChange.chapterID;
  }
  const numberBinding = BaseRive.useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
  const tmpResult = BaseRive;
  let mobileLift;
  if (dataBinding != null) {
    mobileLift = dataBinding.mobileLift;
  }
  let mobileLift1;
  if (onDataBindingChange != null) {
    mobileLift1 = onDataBindingChange.mobileLift;
  }
  const numberBinding1 = BaseRive.useNumberBinding("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
  const tmpResult37 = BaseRive;
  let faceID;
  if (dataBinding != null) {
    faceID = dataBinding.faceID;
  }
  let faceID1;
  if (onDataBindingChange != null) {
    faceID1 = onDataBindingChange.faceID;
  }
  const numberBinding2 = BaseRive.useNumberBinding("faceID", instance, faceID, faceID1, playIfNeeded);
  const tmpResult38 = BaseRive;
  let outfitID;
  if (dataBinding != null) {
    outfitID = dataBinding.outfitID;
  }
  let outfitID1;
  if (onDataBindingChange != null) {
    outfitID1 = onDataBindingChange.outfitID;
  }
  const numberBinding3 = BaseRive.useNumberBinding("outfitID", instance, outfitID, outfitID1, playIfNeeded);
  const tmpResult39 = BaseRive;
  let outfit01Image;
  if (dataBinding != null) {
    outfit01Image = dataBinding.outfit01Image;
  }
  let outfit01Image1;
  if (onDataBindingChange != null) {
    outfit01Image1 = onDataBindingChange.outfit01Image;
  }
  const imageBinding = BaseRive.useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
  const tmpResult40 = BaseRive;
  let outfit02Image;
  if (dataBinding != null) {
    outfit02Image = dataBinding.outfit02Image;
  }
  let outfit02Image1;
  if (onDataBindingChange != null) {
    outfit02Image1 = onDataBindingChange.outfit02Image;
  }
  const imageBinding1 = BaseRive.useImageBinding("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
  const tmpResult41 = BaseRive;
  let outfit03Image;
  if (dataBinding != null) {
    outfit03Image = dataBinding.outfit03Image;
  }
  let outfit03Image1;
  if (onDataBindingChange != null) {
    outfit03Image1 = onDataBindingChange.outfit03Image;
  }
  const imageBinding2 = BaseRive.useImageBinding("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
  const tmpResult42 = BaseRive;
  let outfit04Image;
  if (dataBinding != null) {
    outfit04Image = dataBinding.outfit04Image;
  }
  let outfit04Image1;
  if (onDataBindingChange != null) {
    outfit04Image1 = onDataBindingChange.outfit04Image;
  }
  const imageBinding3 = BaseRive.useImageBinding("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
  const tmpResult43 = BaseRive;
  let outfit05Image;
  if (dataBinding != null) {
    outfit05Image = dataBinding.outfit05Image;
  }
  let outfit05Image1;
  if (onDataBindingChange != null) {
    outfit05Image1 = onDataBindingChange.outfit05Image;
  }
  const imageBinding4 = BaseRive.useImageBinding("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
  const tmpResult44 = BaseRive;
  let outfit06Image;
  if (dataBinding != null) {
    outfit06Image = dataBinding.outfit06Image;
  }
  let outfit06Image1;
  if (onDataBindingChange != null) {
    outfit06Image1 = onDataBindingChange.outfit06Image;
  }
  const imageBinding5 = BaseRive.useImageBinding("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
  const tmpResult45 = BaseRive;
  let outfit07Image;
  if (dataBinding != null) {
    outfit07Image = dataBinding.outfit07Image;
  }
  let outfit07Image1;
  if (onDataBindingChange != null) {
    outfit07Image1 = onDataBindingChange.outfit07Image;
  }
  const imageBinding6 = BaseRive.useImageBinding("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
  const tmpResult46 = BaseRive;
  let outfit08Image;
  if (dataBinding != null) {
    outfit08Image = dataBinding.outfit08Image;
  }
  let outfit08Image1;
  if (onDataBindingChange != null) {
    outfit08Image1 = onDataBindingChange.outfit08Image;
  }
  const imageBinding7 = BaseRive.useImageBinding("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
  const tmpResult47 = BaseRive;
  let outfit09Image;
  if (dataBinding != null) {
    outfit09Image = dataBinding.outfit09Image;
  }
  let outfit09Image1;
  if (onDataBindingChange != null) {
    outfit09Image1 = onDataBindingChange.outfit09Image;
  }
  const imageBinding8 = BaseRive.useImageBinding("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
  const tmpResult48 = BaseRive;
  let outfit10Image;
  if (dataBinding != null) {
    outfit10Image = dataBinding.outfit10Image;
  }
  let outfit10Image1;
  if (onDataBindingChange != null) {
    outfit10Image1 = onDataBindingChange.outfit10Image;
  }
  const imageBinding9 = BaseRive.useImageBinding("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
  const tmpResult49 = BaseRive;
  let outfit11Image;
  if (dataBinding != null) {
    outfit11Image = dataBinding.outfit11Image;
  }
  let outfit11Image1;
  if (onDataBindingChange != null) {
    outfit11Image1 = onDataBindingChange.outfit11Image;
  }
  const imageBinding10 = BaseRive.useImageBinding("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
  const tmpResult50 = BaseRive;
  let outfit12Image;
  if (dataBinding != null) {
    outfit12Image = dataBinding.outfit12Image;
  }
  let outfit12Image1;
  if (onDataBindingChange != null) {
    outfit12Image1 = onDataBindingChange.outfit12Image;
  }
  const imageBinding11 = BaseRive.useImageBinding("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
  const tmpResult51 = BaseRive;
  let outfit13Image;
  if (dataBinding != null) {
    outfit13Image = dataBinding.outfit13Image;
  }
  let outfit13Image1;
  if (onDataBindingChange != null) {
    outfit13Image1 = onDataBindingChange.outfit13Image;
  }
  const imageBinding12 = BaseRive.useImageBinding("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
  const tmpResult52 = BaseRive;
  let outfit14Image;
  if (dataBinding != null) {
    outfit14Image = dataBinding.outfit14Image;
  }
  let outfit14Image1;
  if (onDataBindingChange != null) {
    outfit14Image1 = onDataBindingChange.outfit14Image;
  }
  const imageBinding13 = BaseRive.useImageBinding("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
  const tmpResult53 = BaseRive;
  let headwearID;
  if (dataBinding != null) {
    headwearID = dataBinding.headwearID;
  }
  let headwearID1;
  if (onDataBindingChange != null) {
    headwearID1 = onDataBindingChange.headwearID;
  }
  const numberBinding4 = BaseRive.useNumberBinding("headwearID", instance, headwearID, headwearID1, playIfNeeded);
  const tmpResult54 = BaseRive;
  let shoesID;
  if (dataBinding != null) {
    shoesID = dataBinding.shoesID;
  }
  let shoesID1;
  if (onDataBindingChange != null) {
    shoesID1 = onDataBindingChange.shoesID;
  }
  const numberBinding5 = BaseRive.useNumberBinding("shoesID", instance, shoesID, shoesID1, playIfNeeded);
  const tmpResult55 = BaseRive;
  let wearableID;
  if (dataBinding != null) {
    wearableID = dataBinding.wearableID;
  }
  let wearableID1;
  if (onDataBindingChange != null) {
    wearableID1 = onDataBindingChange.wearableID;
  }
  const numberBinding6 = BaseRive.useNumberBinding("wearableID", instance, wearableID, wearableID1, playIfNeeded);
  const tmpResult56 = BaseRive;
  let auraImage;
  if (dataBinding != null) {
    auraImage = dataBinding.auraImage;
  }
  let auraImage1;
  if (onDataBindingChange != null) {
    auraImage1 = onDataBindingChange.auraImage;
  }
  const imageBinding14 = BaseRive.useImageBinding("auraImage", instance, auraImage, auraImage1, playIfNeeded);
  const tmpResult57 = BaseRive;
  let baseColorImage;
  if (dataBinding != null) {
    baseColorImage = dataBinding.baseColorImage;
  }
  let baseColorImage1;
  if (onDataBindingChange != null) {
    baseColorImage1 = onDataBindingChange.baseColorImage;
  }
  const imageBinding15 = BaseRive.useImageBinding("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
  const tmpResult58 = BaseRive;
  let stateChange;
  if (dataBinding != null) {
    stateChange = dataBinding.stateChange;
  }
  let stateChange1;
  if (onDataBindingChange != null) {
    stateChange1 = onDataBindingChange.stateChange;
  }
  const triggerBinding = BaseRive.useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
  const tmpResult59 = BaseRive;
  let faceStateChange;
  if (dataBinding != null) {
    faceStateChange = dataBinding.faceStateChange;
  }
  let faceStateChange1;
  if (onDataBindingChange != null) {
    faceStateChange1 = onDataBindingChange.faceStateChange;
  }
  const triggerBinding1 = BaseRive.useTriggerBinding("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
  const tmpResult60 = BaseRive;
  let wearableChange;
  if (dataBinding != null) {
    wearableChange = dataBinding.wearableChange;
  }
  let wearableChange1;
  if (onDataBindingChange != null) {
    wearableChange1 = onDataBindingChange.wearableChange;
  }
  const triggerBinding2 = BaseRive.useTriggerBinding("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
  const tmpResult61 = BaseRive;
  let cursorX;
  if (dataBinding != null) {
    cursorX = dataBinding.cursorX;
  }
  let cursorX1;
  if (onDataBindingChange != null) {
    cursorX1 = onDataBindingChange.cursorX;
  }
  const numberBinding7 = BaseRive.useNumberBinding("cursorX", instance, cursorX, cursorX1, playIfNeeded);
  const tmpResult62 = BaseRive;
  let cursorY;
  if (dataBinding != null) {
    cursorY = dataBinding.cursorY;
  }
  let cursorY1;
  if (onDataBindingChange != null) {
    cursorY1 = onDataBindingChange.cursorY;
  }
  const numberBinding8 = BaseRive.useNumberBinding("cursorY", instance, cursorY, cursorY1, playIfNeeded);
  const tmpResult63 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding.gradientBottomOpacity;
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange.gradientBottomOpacity;
  }
  const numberBinding9 = BaseRive.useNumberBinding("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
  const tmpResult64 = BaseRive;
  let prop2;
  if (dataBinding != null) {
    prop2 = dataBinding.gradientBottomPosition;
  }
  let prop3;
  if (onDataBindingChange != null) {
    prop3 = onDataBindingChange.gradientBottomPosition;
  }
  const numberBinding10 = BaseRive.useNumberBinding("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
  const tmpResult65 = BaseRive;
  let gradientLeftOpacity;
  if (dataBinding != null) {
    gradientLeftOpacity = dataBinding.gradientLeftOpacity;
  }
  let gradientLeftOpacity1;
  if (onDataBindingChange != null) {
    gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
  }
  const numberBinding11 = BaseRive.useNumberBinding("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
  const tmpResult66 = BaseRive;
  let gradientLeftPosition;
  if (dataBinding != null) {
    gradientLeftPosition = dataBinding.gradientLeftPosition;
  }
  let gradientLeftPosition1;
  if (onDataBindingChange != null) {
    gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
  }
  const numberBinding12 = BaseRive.useNumberBinding("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
  const tmpResult67 = BaseRive;
  let gradientRightOpacity;
  if (dataBinding != null) {
    gradientRightOpacity = dataBinding.gradientRightOpacity;
  }
  let gradientRightOpacity1;
  if (onDataBindingChange != null) {
    gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
  }
  const numberBinding13 = BaseRive.useNumberBinding("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
  const tmpResult68 = BaseRive;
  let prop4;
  if (dataBinding != null) {
    prop4 = dataBinding.gradientRightPosition;
  }
  let prop5;
  if (onDataBindingChange != null) {
    prop5 = onDataBindingChange.gradientRightPosition;
  }
  const numberBinding14 = BaseRive.useNumberBinding("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
  const tmpResult69 = BaseRive;
  let gradientTopOpacity;
  if (dataBinding != null) {
    gradientTopOpacity = dataBinding.gradientTopOpacity;
  }
  let gradientTopOpacity1;
  if (onDataBindingChange != null) {
    gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
  }
  const numberBinding15 = BaseRive.useNumberBinding("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
  const tmpResult70 = BaseRive;
  let gradientTopPosition;
  if (dataBinding != null) {
    gradientTopPosition = dataBinding.gradientTopPosition;
  }
  let gradientTopPosition1;
  if (onDataBindingChange != null) {
    gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
  }
  const numberBinding16 = BaseRive.useNumberBinding("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
  const tmpResult71 = BaseRive;
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointCharacterRiveInner(arg0) {
  const cResult = require("c").c(19);
  if (cResult[0] !== arg0) {
    ({ ref, fallback, artboard, stateMachine, defaultViewModelInstance, dataBinding, onDataBindingChange } = arg0);
    const tmp13 = _objectWithoutProperties(arg0, str);
    _require = dataBinding;
    dependencyMap = onDataBindingChange;
    cResult[0] = arg0;
    class R {
      constructor(arg0) {
        tmp = closure_9[closure_2];
        tmp2 = null;
        if (null != tmp) {
          tmp3 = arg0;
          tmp4 = jsx;
          obj = {};
          tmp5 = obj;
          merged = Object.assign(arg0);
          tmp7 = closure_0;
          obj.dataBinding = closure_0;
          tmp8 = closure_1;
          obj.onDataBindingChange = closure_1;
          tmp2 = jsx(tmp, obj);
        }
        return tmp2;
      }
    }
    cResult[1] = dataBinding;
    cResult[2] = onDataBindingChange;
    cResult[3] = ref;
    cResult[4] = tmp13;
    cResult[5] = stateMachine;
    cResult[6] = artboard;
    cResult[7] = defaultViewModelInstance;
    let tmp10 = defaultViewModelInstance;
    let tmp9 = artboard;
    let tmp8 = stateMachine;
    let tmp7 = tmp13;
    let tmp6 = ref;
  } else {
    _require = cResult[1];
    dependencyMap = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
  }
  str = "AB_Master";
  if (undefined !== tmp9) {
    str = tmp9;
  }
  let str2 = "Base";
  if (undefined !== tmp10) {
    str2 = tmp10;
  }
  if (cResult[8] === str) {
    if (cResult[9] === dataBinding) {
      if (cResult[10] === onDataBindingChange) {
        let tmp14 = cResult[11];
      }
      if (cResult[12] === str) {
        if (cResult[13] === str2) {
          if (cResult[14] === tmp6) {
            if (cResult[15] === tmp14) {
              if (cResult[16] === tmp7) {
                if (cResult[17] === tmp8) {
                  let tmp15 = cResult[18];
                }
                return tmp15;
              }
            }
          }
        }
      }
      obj2 = { ref: tmp6, src: tmp(5146), artboard: str, artboardProperties, artboardViewModelInstances, defaultViewModelInstance: str2, stateMachine: tmp8, renderDataBinding: null };
      class R {
        constructor(arg0) {
          tmp = closure_9[closure_2];
          tmp2 = null;
          if (null != tmp) {
            tmp3 = arg0;
            tmp4 = jsx;
            obj = {};
            tmp5 = obj;
            merged = Object.assign(arg0);
            tmp7 = closure_0;
            obj.dataBinding = closure_0;
            tmp8 = closure_1;
            obj.onDataBindingChange = closure_1;
            tmp2 = jsx(tmp, obj);
          }
          return tmp2;
        }
      }
      let merged = Object.assign(tmp7);
      const tmp22 = jsx(tmp(5079).BaseRive, { ref: tmp6, src: tmp(5146), artboard: str, artboardProperties, artboardViewModelInstances, defaultViewModelInstance: str2, stateMachine: tmp8, renderDataBinding: null });
      cResult[12] = str;
      cResult[13] = str2;
      cResult[14] = tmp6;
      cResult[15] = tmp14;
      cResult[16] = tmp7;
      cResult[17] = tmp8;
      cResult[18] = tmp22;
      tmp15 = tmp22;
    }
  }
  class R {
    constructor(arg0) {
      tmp = closure_9[closure_2];
      tmp2 = null;
      if (null != tmp) {
        tmp3 = arg0;
        tmp4 = jsx;
        obj = {};
        tmp5 = obj;
        merged = Object.assign(arg0);
        tmp7 = closure_0;
        obj.dataBinding = closure_0;
        tmp8 = closure_1;
        obj.onDataBindingChange = closure_1;
        tmp2 = jsx(tmp, obj);
      }
      return tmp2;
    }
  }
  cResult[8] = str;
  cResult[9] = dataBinding;
  cResult[10] = onDataBindingChange;
  cResult[11] = R;
  tmp14 = R;
  let obj = require("c");
}) : (function CheckpointCharacterRiveInner(defaultViewModelInstance) {
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "AB_Master";
  if (undefined !== artboard) {
    str = artboard;
  }
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let str2 = "Base";
  if (undefined !== defaultViewModelInstance) {
    str2 = defaultViewModelInstance;
  }
  dataBinding = defaultViewModelInstance.dataBinding;
  const onDataBindingChange = defaultViewModelInstance.onDataBindingChange;
  const items = [str, dataBinding, onDataBindingChange];
  const callback = noop.useCallback((arg0) => {
    let tmp2 = null;
    if (null != obj2[str]) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.dataBinding = dataBinding;
      obj.onDataBindingChange = onDataBindingChange;
      tmp2 = <tmp />;
    }
    return tmp2;
  }, items);
  const tmp = _objectWithoutProperties(defaultViewModelInstance, closure_3);
  let merged = Object.assign(tmp);
  return jsx(str(dataBinding[4]).BaseRive, { ref: defaultViewModelInstance.ref, src: str(dataBinding[6]), artboard: str, artboardProperties, artboardViewModelInstances, defaultViewModelInstance: str2, stateMachine: defaultViewModelInstance.stateMachine, renderDataBinding: callback });
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/CheckpointCharacterRive.tsx");

export const CheckpointCharacterRive = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointCharacterRiveWithBoundary(fallback) {
  const cResult = c.c(5);
  if (cResult[0] !== fallback) {
    obj2 = {};
    const merged = Object.assign(fallback);
    const tmp10 = <closure_10 />;
    cResult[0] = fallback;
    cResult[1] = tmp10;
    let tmp4 = tmp10;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === fallback.fallback) {
    if (cResult[3] === tmp4) {
      let tmp11 = cResult[4];
    }
    return tmp11;
  }
  const tmp12 = jsx(RiveErrorBoundary.RiveErrorBoundary, { fallback: fallback.fallback, children: tmp4 });
  cResult[2] = fallback.fallback;
  cResult[3] = tmp4;
  cResult[4] = tmp12;
  tmp11 = tmp12;
  const obj3 = { fallback: fallback.fallback, children: tmp4 };
}) : (function CheckpointCharacterRiveWithBoundary(fallback) {
  const obj = { fallback: fallback.fallback, children: null };
  const merged = Object.assign(fallback);
  obj.children = <closure_10 />;
  return jsx(RiveErrorBoundary.RiveErrorBoundary, { fallback: fallback.fallback, children: null });
});