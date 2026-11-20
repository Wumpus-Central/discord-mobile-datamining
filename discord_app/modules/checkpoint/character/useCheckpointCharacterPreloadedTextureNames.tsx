// === Module 12591: useCheckpointCharacterPreloadedTextureNames ===

// Module 12591 (useCheckpointCharacterPreloadedTextureNames)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const set = new Set();
const obj = {};
const items = [fn(12592).WIREFRAME_TEXTURE];
obj[fn(6219).CheckpointCharacterStage.FINALIZE] = new Set(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/character/useCheckpointCharacterPreloadedTextureNames.tsx");

export function useCheckpointCharacterPreloadedTextureNames(stage, arg1) {
  const tmp = _slicedToArray(noop.useState(null), 2);
  const first = tmp[0];
  let tmp3 = obj[stage];
  let tmp4 = null != tmp3;
  if (tmp4) {
    tmp4 = stage === first || arg1;
    const tmp5 = stage === first || arg1;
  }
  let tmp6 = null;
  if (tmp4) {
    tmp6 = stage;
  }
  if (tmp6 !== first) {
    tmp[1](tmp6);
  }
  if (!tmp4) {
    tmp3 = set;
  }
  return tmp3;
}