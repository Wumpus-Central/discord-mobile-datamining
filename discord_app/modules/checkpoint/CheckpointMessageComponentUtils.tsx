// === Module 5081: checkpoint/CheckpointMessageComponentUtils ===

// Module 5081 (checkpoint/CheckpointMessageComponentUtils)
import util from "util" /* 1115 */;
import Server from "Server" /* 1979 */;
import _modDef3005 from "module_3005" /* 3005 */;
import CheckpointConstants from "CheckpointConstants" /* 5061 */;
import size from "module_2" /* 2 */;

const CheckpointVersions = CheckpointConstants.CheckpointVersions;
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
  const obj = {};
  const merged = Object.assign(checkpointData);
  if (null != checkpointData.character) {
    const character = checkpointData.character;
    let items = [];
  } else {
    items = [];
  }
  obj.characterLayerUrls = items;
  return obj;
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
  if (CheckpointVersions.V2025 === checkpointDataFromMessage.version) {
    const intl = util.intl;
    return intl.string(_modDef3005.goiR2u);
  } else {
    const V2026 = tmp.V2026;
    return null;
  }
};