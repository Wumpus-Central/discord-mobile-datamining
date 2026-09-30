// === Module 5111: checkpoint/CheckpointMessageComponentUtils ===

// Module 5111 (checkpoint/CheckpointMessageComponentUtils)
import util from "util" /* 1115 */;
import Server from "Server" /* 1979 */;
import _modDef3005 from "module_3005" /* 3005 */;
import CheckpointTrait from "CheckpointTrait" /* 5113 */;
import CheckpointCharacterAssets from "CheckpointCharacterAssets" /* 5114 */;
import CheckpointConstants from "CheckpointConstants" /* 5091 */;
import size from "module_2" /* 2 */;

({ NATIVE_CHARACTER_LAYER_SIZE: c3, CheckpointVersions: closure_4 } = CheckpointConstants);
let obj = {};
obj[CheckpointTrait.CheckpointTrait.BASE] = CheckpointCharacterAssets.CHARACTER_BASE_TRAIT_ASSETS;
obj[CheckpointTrait.CheckpointTrait.SHOES] = CheckpointCharacterAssets.CHARACTER_SHOES_TRAIT_ASSETS;
obj[CheckpointTrait.CheckpointTrait.OUTFIT] = CheckpointCharacterAssets.CHARACTER_OUTFIT_TRAIT_ASSETS;
obj[CheckpointTrait.CheckpointTrait.FACE] = CheckpointCharacterAssets.CHARACTER_FACE_TRAIT_ASSETS;
obj[CheckpointTrait.CheckpointTrait.HAT] = CheckpointCharacterAssets.CHARACTER_HAT_TRAIT_ASSETS;
obj[CheckpointTrait.CheckpointTrait.WEARABLE] = CheckpointCharacterAssets.CHARACTER_WEARABLE_TRAIT_ASSETS;
obj[CheckpointTrait.CheckpointTrait.AURA] = CheckpointCharacterAssets.CHARACTER_AURA_TRAIT_ASSETS;
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointMessageComponentUtils.tsx");

export const transformCheckpoint2026CardComponent = function transformCheckpoint2026CardComponent(checkpoint_data) {
  let tmp = null;
  if (obj.getIsCheckpointEnabled("transformCheckpoint2026CardComponent")) {
    let tmp3 = null;
    if (null != checkpoint_data.character) {
      const obj2 = { version: checkpoint_data.version, character: null };
      const obj3 = { base: checkpoint_data.character.base, shoes: checkpoint_data.character.shoes, outfit: checkpoint_data.character.outfit, face: checkpoint_data.character.face, hat: checkpoint_data.character.hat, wearable: checkpoint_data.character.wearable, aura: checkpoint_data.character.aura };
      obj2.character = obj3;
      tmp3 = obj2;
    }
    tmp = tmp3;
  }
  return tmp;
};
export const transformCheckpoint2026CardToRowGeneratedComponent = function transformCheckpoint2026CardToRowGeneratedComponent(checkpointData) {
  obj = {};
  rounded = Math.round(closure_3 * rounded(items[5])());
  const merged = Object.assign(checkpointData);
  if (null != checkpointData.character) {
    const character = checkpointData.character;
    const CHECKPOINT_WEARABLE_LAYER_BACKGROUND = character(tmp[4]).CHECKPOINT_WEARABLE_LAYER_BACKGROUND;
    const hasItem = CHECKPOINT_WEARABLE_LAYER_BACKGROUND.has(character.wearable);
    character(tmp[4]);
    items = [];
    const item = hasItem ? items.CHECKPOINT_LAYER_BACKGROUND_WEARABLE_ORDERING : items.CHECKPOINT_LAYER_DEFAULT_ORDERING.forEach((item) => {
      let layer;
      if (obj[item][character[item]] != null) {
        layer = tmp.layer;
      }
      let tmp3 = null != layer;
      if (tmp3) {
        tmp3 = "" !== layer;
      }
      if (tmp3) {
        const _HermesInternal = HermesInternal;
        items.push("" + layer + "?height=" + rounded + "&width=" + rounded);
      }
    });
    const arr2 = hasItem ? items.CHECKPOINT_LAYER_BACKGROUND_WEARABLE_ORDERING : items.CHECKPOINT_LAYER_DEFAULT_ORDERING;
  } else {
    obj.characterLayerUrls = [];
    return obj;
  }
};
export const getCheckpointDataFromMessage = function getCheckpointDataFromMessage(contentMessage) {
  const first = contentMessage.components[0];
  let checkpointData = null;
  if (null != first) {
    checkpointData = null;
    if (first.type === Server.ComponentType.CHECKPOINT_CARD) {
      checkpointData = first.checkpointData;
    }
  }
  return checkpointData;
};
export const getCheckpointLabel = function getCheckpointLabel(checkpointDataFromMessage) {
  if (V2025.V2025 === checkpointDataFromMessage.version) {
    const intl = util.intl;
    return intl.string(_modDef3005.goiR2u);
  } else {
    const V2026 = tmp.V2026;
    return null;
  }
};