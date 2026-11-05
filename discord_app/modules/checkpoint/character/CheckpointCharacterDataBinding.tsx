// === Module 13865: CheckpointCharacterDataBinding ===

// Module 13865 (CheckpointCharacterDataBinding)
import CheckpointNavigation from "CheckpointNavigation" /* 6572 */;
import CheckpointCharacterTextureUtils from "CheckpointCharacterTextureUtils" /* 13699 */;
import CheckpointCharacterRiveTraits from "CheckpointCharacterRiveTraits" /* 13866 */;
import size from "module_2" /* 2 */;

const items = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14"];
const mapped = items.map((item) => "outfit" + item + "Image");
let closure_4 = { [CheckpointNavigation.CheckpointCharacterStage.IDLE]: 0, [CheckpointNavigation.CheckpointCharacterStage.INTRODUCTION]: 1, [CheckpointNavigation.CheckpointCharacterStage.FACE]: 2, [CheckpointNavigation.CheckpointCharacterStage.OUTFIT]: 3, [CheckpointNavigation.CheckpointCharacterStage.HEADWEAR]: 4, [CheckpointNavigation.CheckpointCharacterStage.SHOES]: 5, [CheckpointNavigation.CheckpointCharacterStage.WEARABLE]: 6, [CheckpointNavigation.CheckpointCharacterStage.AURA]: 7, [CheckpointNavigation.CheckpointCharacterStage.ASSEMBLED]: 8, [CheckpointNavigation.CheckpointCharacterStage.FINALIZE]: 8, [CheckpointNavigation.CheckpointCharacterStage.SUMMARY]: 8 };
let obj = { Desktop: { gradientTopOpacity: 0, gradientTopPosition: 0, gradientBottomOpacity: 0, gradientBottomPosition: 0, gradientLeftOpacity: 100, gradientLeftPosition: 100, gradientRightOpacity: 0, gradientRightPosition: 0 }, MobilePortrait: { gradientTopOpacity: 100, gradientTopPosition: 45, gradientBottomOpacity: 100, gradientBottomPosition: 75, gradientLeftOpacity: 0, gradientLeftPosition: 0, gradientRightOpacity: 0, gradientRightPosition: 0 }, MobileLandscape: { gradientTopOpacity: 100, gradientTopPosition: 50, gradientBottomOpacity: 100, gradientBottomPosition: 30, gradientLeftOpacity: 0, gradientLeftPosition: 0, gradientRightOpacity: 100, gradientRightPosition: 100 } };
let obj2 = {};
let merged = Object.assign(obj.MobilePortrait);
obj2.gradientTopPosition = 55;
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
export function getCheckpointCharacterDataBinding(textureScale) {
  ({ stage, layout, mobileLift } = textureScale);
  if (mobileLift === undefined) {
    mobileLift = 0;
  }
  textureScale = textureScale.textureScale;
  obj = textureScale(6248);
  const characterFromTraits = obj.getCharacterFromTraits(textureScale.traits);
  ({ base, shoes, outfit, face, hat, wearable, aura } = characterFromTraits);
  const tmp4 = textureScale(13866).CHECKPOINT_OUTFIT_OPTION_TO_RIVE_OUTFIT[outfit];
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
  const obj3 = { device: layout, mobileLift, chapterID: closure_4[stage], faceID: face, shoesID: shoes, headwearID: textureScale(13866).CHECKPOINT_HAT_OPTION_TO_HEADWEAR_RIVE_ID[hat], wearableID: textureScale(13866).CHECKPOINT_WEARABLE_OPTION_TO_WEARABLE_RIVE_ID[wearable], outfitID: null, auraImage: null, baseColorImage: null };
  let num;
  if (tmp4 != null) {
    num = tmp4.riveId;
  }
  if (num == null) {
    num = 0;
  }
  obj3.outfitID = num;
  obj3.auraImage = textureScale(13699).getCheckpointCharacterTextureUrl(textureScale(13866).CHECKPOINT_AURA_OPTION_TO_AURA_RIVE_TEXTURE[aura].name, textureScale);
  const tmpResult = textureScale(13699);
  obj3.baseColorImage = textureScale(13699).getCheckpointCharacterTextureUrl(textureScale(13866).CHECKPOINT_BASE_OPTION_TO_BASE_RIVE_TEXTURE[base].name, textureScale);
  if ("MobilePortrait" === layout) {
    if (stage === tmp(6572).CheckpointCharacterStage.INTRODUCTION) {
      let tmp6 = obj2;
    }
    const merged = Object.assign(tmp6);
    const merged1 = Object.assign(obj2);
    return obj3;
  }
  tmp6 = obj[layout];
}