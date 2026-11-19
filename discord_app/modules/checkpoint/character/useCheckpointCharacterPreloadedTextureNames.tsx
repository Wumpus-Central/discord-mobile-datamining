// discord_app/modules/checkpoint/character/useCheckpointCharacterPreloadedTextureNames.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const set = new Set();
const obj = {};
const items = [fn(12622).WIREFRAME_TEXTURE];
obj[fn(6217).CheckpointCharacterStage.FINALIZE] = new Set(items);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/checkpoint/character/useCheckpointCharacterPreloadedTextureNames.tsx",
);

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
