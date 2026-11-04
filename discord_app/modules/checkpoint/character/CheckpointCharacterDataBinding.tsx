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
  Desktop: {
    gradientTopOpacity: 0,
    gradientTopPosition: 0,
    gradientBottomOpacity: 0,
    gradientBottomPosition: 0,
    gradientLeftOpacity: 100,
    gradientLeftPosition: 100,
    gradientRightOpacity: 0,
    gradientRightPosition: 0,
  },
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

export function getCheckpointCharacterDataBinding(textureScale) {
  ({ stage, layout, mobileLift } = textureScale);
  if (mobileLift === undefined) {
    mobileLift = 0;
  }
  textureScale = textureScale.textureScale;
  obj = textureScale(6246);
  const characterFromTraits = obj.getCharacterFromTraits(textureScale.traits);
  ({ base, shoes, outfit, face, hat, wearable, aura } = characterFromTraits);
  const tmp4 = textureScale(13854).CHECKPOINT_OUTFIT_OPTION_TO_RIVE_OUTFIT[outfit];
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
    mobileLift,
    chapterID: closure_3[stage],
    faceID: face,
    shoesID: shoes,
    headwearID: textureScale(13854).CHECKPOINT_HAT_OPTION_TO_HEADWEAR_RIVE_ID[hat],
    wearableID: textureScale(13854).CHECKPOINT_WEARABLE_OPTION_TO_WEARABLE_RIVE_ID[wearable],
    outfitID: null,
    auraImage: null,
    baseColorImage: null,
  };
  let num;
  if (tmp4 != null) {
    num = tmp4.riveId;
  }
  if (num == null) {
    num = 0;
  }
  obj3.outfitID = num;
  obj3.auraImage = textureScale(13687).getCheckpointCharacterTextureUrl(
    textureScale(13854).CHECKPOINT_AURA_OPTION_TO_AURA_RIVE_TEXTURE[aura].name,
    textureScale,
  );
  const tmpResult = textureScale(13687);
  obj3.baseColorImage = textureScale(13687).getCheckpointCharacterTextureUrl(
    textureScale(13854).CHECKPOINT_BASE_OPTION_TO_BASE_RIVE_TEXTURE[base].name,
    textureScale,
  );
  if ("MobilePortrait" === layout) {
    if (stage === tmp(6570).CheckpointCharacterStage.INTRODUCTION) {
      let tmp6 = obj2;
    }
    const merged = Object.assign(tmp6);
    const merged1 = Object.assign(obj2);
    return obj3;
  }
  tmp6 = obj[layout];
}
