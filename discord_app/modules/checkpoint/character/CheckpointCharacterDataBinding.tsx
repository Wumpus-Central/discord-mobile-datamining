// === Module 13028: CheckpointCharacterDataBinding ===

// Module 13028 (CheckpointCharacterDataBinding)
import CheckpointNavigation from "CheckpointNavigation" /* 6399 */;
import CheckpointCharacterRiveTraits from "CheckpointCharacterRiveTraits" /* 13029 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_2 = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14"];
let closure_3 = { [CheckpointNavigation.CheckpointCharacterStage.IDLE]: 0, [CheckpointNavigation.CheckpointCharacterStage.INTRODUCTION]: 1, [CheckpointNavigation.CheckpointCharacterStage.FACE]: 2, [CheckpointNavigation.CheckpointCharacterStage.OUTFIT]: 3, [CheckpointNavigation.CheckpointCharacterStage.HEADWEAR]: 4, [CheckpointNavigation.CheckpointCharacterStage.SHOES]: 5, [CheckpointNavigation.CheckpointCharacterStage.WEARABLE]: 6, [CheckpointNavigation.CheckpointCharacterStage.AURA]: 7, [CheckpointNavigation.CheckpointCharacterStage.ASSEMBLED]: 8, [CheckpointNavigation.CheckpointCharacterStage.FINALIZE]: 8, [CheckpointNavigation.CheckpointCharacterStage.SUMMARY]: 8 };
let closure_4 = { MobilePortrait: { gradientTopOpacity: 100, gradientTopPosition: 40, gradientBottomOpacity: 100, gradientBottomPosition: 90, gradientLeftOpacity: 0, gradientLeftPosition: 0, gradientRightOpacity: 0, gradientRightPosition: 0 }, MobileLandscape: { gradientTopOpacity: 100, gradientTopPosition: 10, gradientBottomOpacity: 100, gradientBottomPosition: 10, gradientLeftOpacity: 0, gradientLeftPosition: 0, gradientRightOpacity: 100, gradientRightPosition: 90 } };
const result = size.fileFinishedImporting("modules/checkpoint/character/CheckpointCharacterDataBinding.tsx");

export const getCheckpointCharacterDataBinding = function getCheckpointCharacterDataBinding(stage, stateFromStores, MobileLandscape) {
  const characterFromTraits = require("CheckpointCharacterTraits").getCharacterFromTraits(stateFromStores);
  ({ base, shoes, outfit, face, hat, wearable, aura } = characterFromTraits);
  const tmp4 = require("CheckpointCharacterRiveTraits").CHECKPOINT_OUTFIT_OPTION_TO_RIVE_OUTFIT[outfit];
  _require = tmp4;
  obj2 = {};
  const item = closure_2.forEach((item) => {
    let riveId;
    if (closure_0 != null) {
      riveId = closure_0.riveId;
    }
    if (NumberResult === riveId) {
      let CHECKPOINT_CHARACTER_BLANK_TEXTURE = closure_0.texture;
    } else {
      CHECKPOINT_CHARACTER_BLANK_TEXTURE = CheckpointCharacterRiveTraits.CHECKPOINT_CHARACTER_BLANK_TEXTURE;
    }
    obj2["outfit" + item + "Image"] = CHECKPOINT_CHARACTER_BLANK_TEXTURE.url;
    NumberResult = Number(item);
  });
  const obj3 = { device: MobileLandscape, mobileLift: null, chapterID: null, faceID: null, shoesID: null, headwearID: null, wearableID: null, outfitID: null, auraImage: null, baseColorImage: null };
  let num = 0;
  if ("MobilePortrait" === MobileLandscape) {
    let num2 = 30;
    if (stage === tmp(tmp2[0]).CheckpointCharacterStage.FINALIZE) {
      num2 = 100;
    }
    num = num2;
  }
  obj3.mobileLift = num;
  obj3.chapterID = closure_3[stage];
  obj3.faceID = face;
  obj3.shoesID = shoes;
  obj3.headwearID = require("CheckpointCharacterRiveTraits").CHECKPOINT_HAT_OPTION_TO_HEADWEAR_RIVE_ID[hat];
  obj3.wearableID = require("CheckpointCharacterRiveTraits").CHECKPOINT_WEARABLE_OPTION_TO_WEARABLE_RIVE_ID[wearable];
  let num3;
  if (tmp4 != null) {
    num3 = tmp4.riveId;
  }
  if (num3 == null) {
    num3 = 0;
  }
  obj3.outfitID = num3;
  obj3.auraImage = require("CheckpointCharacterRiveTraits").CHECKPOINT_AURA_OPTION_TO_AURA_RIVE_TEXTURE[aura].url;
  obj3.baseColorImage = require("CheckpointCharacterRiveTraits").CHECKPOINT_BASE_OPTION_TO_BASE_RIVE_TEXTURE[base].url;
  const merged = Object.assign(closure_4[MobileLandscape]);
  const merged1 = Object.assign(obj2);
  return obj3;
};