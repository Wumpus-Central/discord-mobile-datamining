// === Module 12793: CheckpointCharacterDataBinding ===

// Module 12793 (CheckpointCharacterDataBinding)
import CheckpointNavigation from "CheckpointNavigation" /* 6736 */;
import CheckpointCharacterTextureUtils from "CheckpointCharacterTextureUtils" /* 12627 */;
import CheckpointCharacterRiveTraits from "CheckpointCharacterRiveTraits" /* 12794 */;
import size from "module_2" /* 2 */;

let items = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14"];
const mapped = items.map((item) => "outfit" + item + "Image");
const dependencyMap = { [CheckpointNavigation.CheckpointCharacterStage.IDLE]: 0, [CheckpointNavigation.CheckpointCharacterStage.INTRODUCTION]: 1, [CheckpointNavigation.CheckpointCharacterStage.FACE]: 2, [CheckpointNavigation.CheckpointCharacterStage.OUTFIT]: 3, [CheckpointNavigation.CheckpointCharacterStage.HEADWEAR]: 4, [CheckpointNavigation.CheckpointCharacterStage.SHOES]: 5, [CheckpointNavigation.CheckpointCharacterStage.WEARABLE]: 6, [CheckpointNavigation.CheckpointCharacterStage.AURA]: 7, [CheckpointNavigation.CheckpointCharacterStage.ASSEMBLED]: 8, [CheckpointNavigation.CheckpointCharacterStage.FINALIZE]: 8, [CheckpointNavigation.CheckpointCharacterStage.EXIT]: 9, [CheckpointNavigation.CheckpointCharacterStage.SUMMARY]: 8 };
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
export function getCheckpointCharacterDataBinding(compactAssets) {
  ({ stage, layout, textureScale } = compactAssets);
  let flag = compactAssets.compactAssets;
  ({ isHidden, traits } = compactAssets);
  if (flag === undefined) {
    flag = false;
  }
  obj = textureScale(flag[1]);
  const characterFromTraits = obj.getCharacterFromTraits(traits);
  ({ base, shoes, outfit, face, hat, wearable, aura } = characterFromTraits);
  const tmp4 = textureScale(flag[2]).CHECKPOINT_OUTFIT_OPTION_TO_RIVE_OUTFIT[outfit];
  items = tmp4;
  obj2 = {};
  const item = items.forEach((item) => {
    let riveId;
    if (closure_2 != null) {
      riveId = closure_2.riveId;
    }
    if (NumberResult === riveId) {
      let CHECKPOINT_CHARACTER_BLANK_TEXTURE = closure_2.texture;
    } else {
      CHECKPOINT_CHARACTER_BLANK_TEXTURE = CheckpointCharacterRiveTraits.CHECKPOINT_CHARACTER_BLANK_TEXTURE;
    }
    const combined = "outfit" + item + "Image";
    NumberResult = Number(item);
    obj2[combined] = CheckpointCharacterTextureUtils.getCheckpointCharacterTextureUrl(CHECKPOINT_CHARACTER_BLANK_TEXTURE.name, textureScale, flag);
  });
  const obj3 = { device: layout, chapterID: null, faceID: null, shoesID: null, headwearID: null, wearableID: null, outfitID: null, auraImage: null, baseColorImage: null };
  if (isHidden) {
    if (stage === textureScale(tmp2[0]).CheckpointCharacterStage.FACE) {
      let tmp6 = dependencyMap[textureScale(undefined, tmp2[0]).CheckpointCharacterStage.IDLE];
    }
    obj3.chapterID = tmp6;
    obj3.faceID = face;
    obj3.shoesID = shoes;
    obj3.headwearID = textureScale(tmp2[2]).CHECKPOINT_HAT_OPTION_TO_HEADWEAR_RIVE_ID[hat];
    obj3.wearableID = textureScale(tmp2[2]).CHECKPOINT_WEARABLE_OPTION_TO_WEARABLE_RIVE_ID[wearable];
    let num;
    if (tmp4 != null) {
      num = tmp4.riveId;
    }
    if (num == null) {
      num = 0;
    }
    obj3.outfitID = num;
    obj3.auraImage = textureScale(tmp2[3]).getCheckpointCharacterTextureUrl(textureScale(tmp2[2]).CHECKPOINT_AURA_OPTION_TO_AURA_RIVE_TEXTURE[aura].name, textureScale, flag);
    const tmpResult = textureScale(tmp2[3]);
    obj3.baseColorImage = textureScale(tmp2[3]).getCheckpointCharacterTextureUrl(textureScale(tmp2[2]).CHECKPOINT_BASE_OPTION_TO_BASE_RIVE_TEXTURE[base].name, textureScale, flag);
    if ("MobilePortrait" === layout) {
      if (stage === textureScale(tmp2[0]).CheckpointCharacterStage.INTRODUCTION) {
        let tmp10 = obj2;
      }
      const merged = Object.assign(tmp10);
      const merged1 = Object.assign(obj2);
      return obj3;
    }
    tmp10 = obj[layout];
    const tmpResult2 = textureScale(tmp2[3]);
  }
  tmp6 = dependencyMap[stage];
}