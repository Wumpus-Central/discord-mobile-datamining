// discord_app/modules/checkpoint/testing/CheckpointMitigationOverrideStore.tsx
import CheckpointMockData from "../CheckpointMockData.tsx";
import 00560__ from "../../../../_runtime/metro/00560__.js";
import size from "../../../../_runtime/metro/00002__.js";

const useCheckpointMitigationOverrideStore = module_560.create(() => ({ isNoCharacter: false, isCompactAssets: false }));
const result = size.fileFinishedImporting("modules/checkpoint/testing/CheckpointMitigationOverrideStore.tsx");

export { useCheckpointMitigationOverrideStore };
export function getCheckpointMitigationMock() {
  state = obj.getState();
  if (state.isNoCharacter) {
    let NO_CHARACTER = CheckpointMockData.CheckpointMocks.NO_CHARACTER;
  } else {
    NO_CHARACTER = {};
  }
  obj = {};
  const merged = Object.assign(NO_CHARACTER);
  if (state.isCompactAssets) {
    let COMPACT_ASSETS = CheckpointMockData.CheckpointMocks.COMPACT_ASSETS;
  } else {
    COMPACT_ASSETS = {};
  }
  const merged1 = Object.assign(COMPACT_ASSETS);
  return obj;
}