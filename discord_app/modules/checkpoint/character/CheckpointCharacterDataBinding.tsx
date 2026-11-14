// === Module 14468: CheckpointCharacterDataBinding ===

// Module 14468 (CheckpointCharacterDataBinding)
import CheckpointNavigation from "CheckpointNavigation" /* 6745 */;
import CheckpointCharacterTextureUtils from "CheckpointCharacterTextureUtils" /* 14302 */;
import CheckpointCharacterRiveTraits from "CheckpointCharacterRiveTraits" /* 14469 */;
import size from "module_2" /* 2 */;

const items = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14"];
const mapped = items.map((item) => "outfit" + item + "Image");
const dependencyMap2 = { [CheckpointNavigation.CheckpointCharacterStage.IDLE]: 0, [CheckpointNavigation.CheckpointCharacterStage.INTRODUCTION]: 1, [CheckpointNavigation.CheckpointCharacterStage.FACE]: 2, [CheckpointNavigation.CheckpointCharacterStage.OUTFIT]: 3, [CheckpointNavigation.CheckpointCharacterStage.HEADWEAR]: 4, [CheckpointNavigation.CheckpointCharacterStage.SHOES]: 5, [CheckpointNavigation.CheckpointCharacterStage.WEARABLE]: 6, [CheckpointNavigation.CheckpointCharacterStage.AURA]: 7, [CheckpointNavigation.CheckpointCharacterStage.ASSEMBLED]: 8, [CheckpointNavigation.CheckpointCharacterStage.FINALIZE]: 8, [CheckpointNavigation.CheckpointCharacterStage.SUMMARY]: 8 };
let obj = { Desktop: { gradientTopOpacity: 0, gradientTopPosition: 0, gradientBottomOpacity: 0, gradientBottomPosition: 0, gradientLeftOpacity: 100, gradientLeftPosition: 100, gradientRightOpacity: 0, gradientRightPosition: 0 }, MobilePortrait: { gradientTopOpacity: 100, gradientTopPosition: 45, gradientBottomOpacity: 100, gradientBottomPosition: 75, gradientLeftOpacity: 0, gradientLeftPosition: 0, gradientRightOpacity: 0, gradientRightPosition: 0 }, MobileLandscape: { gradientTopOpacity: 100, gradientTopPosition: 50, gradientBottomOpacity: 100, gradientBottomPosition: 30, gradientLeftOpacity: 0, gradientLeftPosition: 0, gradientRightOpacity: 100, gradientRightPosition: 100 } };
let obj2 = {};
let merged = Object.assign(obj.MobilePortrait);
obj2.gradientTopPosition = 25;
obj2.gradientBottomPosition = 90;
const result = size.fileFinishedImporting("modules/checkpoint/character/CheckpointCharacterDataBinding.tsx");

export const CHECKPOINT_CHARACTER_OUTFIT_IMAGE_PROPERTIES = mapped;
export function getCheckpointCharacterOutfitImageProperty(outfitID) {
  let tmp = null;
  if (outfitID > 0) {
    tmp = mapped[outfitID - 1];
  }
  return tmp;
}
export function getCheckpointCharacterDataBinding(arg0) {
  ({ stage, layout, textureScale } = arg0);
  ({ isHidden, traits } = arg0);
  obj = textureScale(6421);
  const characterFromTraits = obj.getCharacterFromTraits(traits);
  ({ base, shoes, outfit, face, hat, wearable, aura } = characterFromTraits);
  const tmp4 = textureScale(14469).CHECKPOINT_OUTFIT_OPTION_TO_RIVE_OUTFIT[outfit];
  dependencyMap = tmp4;
  obj2 = {};
  const item = obj2.forEach((item) => {
    let riveId;
    if (closure_1 != null) {
      riveId = closure_1.riveId;
    }
    if (NumberResult === riveId) {
      let CHECKPOINT_CHARACTER_BLANK_TEXTURE = closure_1.texture;
    } else {
      CHECKPOINT_CHARACTER_BLANK_TEXTURE = CheckpointCharacterRiveTraits.CHECKPOINT_CHARACTER_BLANK_TEXTURE;
    }
    const combined = "outfit" + item + "Image";
    NumberResult = Number(item);
    obj2[combined] = CheckpointCharacterTextureUtils.getCheckpointCharacterTextureUrl(CHECKPOINT_CHARACTER_BLANK_TEXTURE.name, textureScale);
  });
  const obj3 = { device: layout, chapterID: null, faceID: null, shoesID: null, headwearID: null, wearableID: null, outfitID: null, auraImage: null, baseColorImage: null };
  if (isHidden) {
    if (stage === textureScale(6745).CheckpointCharacterStage.FACE) {
      let tmp6 = dependencyMap2[textureScale(undefined, 6745).CheckpointCharacterStage.IDLE];
    }
    obj3.chapterID = tmp6;
    obj3.faceID = face;
    obj3.shoesID = shoes;
    obj3.headwearID = textureScale(14469).CHECKPOINT_HAT_OPTION_TO_HEADWEAR_RIVE_ID[hat];
    obj3.wearableID = textureScale(14469).CHECKPOINT_WEARABLE_OPTION_TO_WEARABLE_RIVE_ID[wearable];
    let num;
    if (tmp4 != null) {
      num = tmp4.riveId;
    }
    if (num == null) {
      num = 0;
    }
    obj3.outfitID = num;
    obj3.auraImage = textureScale(14302).getCheckpointCharacterTextureUrl(textureScale(14469).CHECKPOINT_AURA_OPTION_TO_AURA_RIVE_TEXTURE[aura].name, textureScale);
    const tmpResult = textureScale(14302);
    obj3.baseColorImage = textureScale(14302).getCheckpointCharacterTextureUrl(textureScale(14469).CHECKPOINT_BASE_OPTION_TO_BASE_RIVE_TEXTURE[base].name, textureScale);
    if ("MobilePortrait" === layout) {
      if (stage === textureScale(6745).CheckpointCharacterStage.INTRODUCTION) {
        let tmp10 = obj2;
      }
      const merged = Object.assign(tmp10);
      const merged1 = Object.assign(obj2);
      return obj3;
    }
    tmp10 = obj[layout];
    const tmpResult2 = textureScale(14302);
  }
  tmp6 = dependencyMap2[stage];
}