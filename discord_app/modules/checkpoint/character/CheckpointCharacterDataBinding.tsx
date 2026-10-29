// discord_app/modules/checkpoint/character/CheckpointCharacterDataBinding.tsx
import CheckpointNavigation from "../CheckpointNavigation.tsx";
import CheckpointCharacterTextureUtils from "CheckpointCharacterTextureUtils.tsx";
import CheckpointCharacterRiveTraits from "CheckpointCharacterRiveTraits.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_2 = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14"];
let closure_3 = {
  [CheckpointNavigation.CheckpointCharacterStage.IDLE]: 0,
  [CheckpointNavigation.CheckpointCharacterStage.INTRODUCTION]: 1,
  [CheckpointNavigation.CheckpointCharacterStage.FACE]: 2,
  [CheckpointNavigation.CheckpointCharacterStage.OUTFIT]: 3,
  [CheckpointNavigation.CheckpointCharacterStage.HEADWEAR]: 4,
  [CheckpointNavigation.CheckpointCharacterStage.SHOES]: 5,
  [CheckpointNavigation.CheckpointCharacterStage.WEARABLE]: 6,
  [CheckpointNavigation.CheckpointCharacterStage.AURA]: 7,
  [CheckpointNavigation.CheckpointCharacterStage.ASSEMBLED]: 8,
  [CheckpointNavigation.CheckpointCharacterStage.FINALIZE]: 8,
  [CheckpointNavigation.CheckpointCharacterStage.SUMMARY]: 8,
};
let obj = {
  MobilePortrait: {
    gradientTopOpacity: 100,
    gradientTopPosition: 45,
    gradientBottomOpacity: 100,
    gradientBottomPosition: 75,
    gradientLeftOpacity: 0,
    gradientLeftPosition: 0,
    gradientRightOpacity: 0,
    gradientRightPosition: 0,
  },
  MobileLandscape: {
    gradientTopOpacity: 100,
    gradientTopPosition: 50,
    gradientBottomOpacity: 100,
    gradientBottomPosition: 30,
    gradientLeftOpacity: 0,
    gradientLeftPosition: 0,
    gradientRightOpacity: 100,
    gradientRightPosition: 100,
  },
};
let obj2 = {};
let merged = Object.assign(obj.MobilePortrait);
obj2.gradientTopPosition = 55;
obj2.gradientBottomPosition = 90;
const result = size.fileFinishedImporting("modules/checkpoint/character/CheckpointCharacterDataBinding.tsx");

export function getCheckpointCharacterDataBinding(traits) {
  ({ stage, layout, characterBottomInset, stageHeight, textureScale } = traits);
  obj = textureScale(6099);
  const characterFromTraits = obj.getCharacterFromTraits(traits.traits);
  ({ base, shoes, outfit, face, hat, wearable, aura } = characterFromTraits);
  const tmp4 = textureScale(13427).CHECKPOINT_OUTFIT_OPTION_TO_RIVE_OUTFIT[outfit];
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
    obj2[combined] = CheckpointCharacterTextureUtils.getCheckpointCharacterTextureUrl(
      CHECKPOINT_CHARACTER_BLANK_TEXTURE.name,
      textureScale,
    );
  });
  const obj3 = {
    device: layout,
    mobileLift: null,
    chapterID: null,
    faceID: null,
    shoesID: null,
    headwearID: null,
    wearableID: null,
    outfitID: null,
    auraImage: null,
    baseColorImage: null,
  };
  let num = 0;
  if ("MobilePortrait" === layout) {
    let num2 = 30;
    if (null != characterBottomInset) {
      const _Math = Math;
      num2 = Math.round(((0.75 * stageHeight - (stageHeight - characterBottomInset)) / stageHeight) * 1080);
    }
    num = num2;
  }
  obj3.mobileLift = num;
  obj3.chapterID = closure_3[stage];
  obj3.faceID = face;
  obj3.shoesID = shoes;
  obj3.headwearID = textureScale(13427).CHECKPOINT_HAT_OPTION_TO_HEADWEAR_RIVE_ID[hat];
  obj3.wearableID = textureScale(13427).CHECKPOINT_WEARABLE_OPTION_TO_WEARABLE_RIVE_ID[wearable];
  let num5;
  if (tmp4 != null) {
    num5 = tmp4.riveId;
  }
  if (num5 == null) {
    num5 = 0;
  }
  obj3.outfitID = num5;
  obj3.auraImage = textureScale(13260).getCheckpointCharacterTextureUrl(
    textureScale(13427).CHECKPOINT_AURA_OPTION_TO_AURA_RIVE_TEXTURE[aura].name,
    textureScale,
  );
  const tmpResult = textureScale(13260);
  obj3.baseColorImage = textureScale(13260).getCheckpointCharacterTextureUrl(
    textureScale(13427).CHECKPOINT_BASE_OPTION_TO_BASE_RIVE_TEXTURE[base].name,
    textureScale,
  );
  if ("MobilePortrait" === layout) {
    if (stage === tmp(6423).CheckpointCharacterStage.INTRODUCTION) {
      let tmp8 = obj2;
    }
    const merged = Object.assign(tmp8);
    const merged1 = Object.assign(obj2);
    return obj3;
  }
  tmp8 = obj[layout];
}
