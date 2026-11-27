// === Module 12633: openCheckpoint ===

// Module 12633 (openCheckpoint)
import NativeImageManagerModuleDefault from "NativeImageManagerModule" /* 2024 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import CheckpointModalConstants from "CheckpointModalConstants" /* 12634 */;
import _modDef12635 from "module_12635" /* 12635 */;
import CheckpointActionCreators from "CheckpointActionCreators" /* 12636 */;
import useCheckpointGuildsBarEntrypoint from "useCheckpointGuildsBarEntrypoint" /* 12637 */;
import size from "module_2" /* 2 */;

const CHECKPOINT_MODAL_KEY = CheckpointModalConstants.CHECKPOINT_MODAL_KEY;
let result = size.fileFinishedImporting("modules/checkpoint/openCheckpoint.native.tsx");

export function openCheckpoint(devtools) {
  let obj = FAKE_DATA;
  if (FAKE_DATA === undefined) {
    obj = {};
  }
  if (obj2.isModalOpen(CHECKPOINT_MODAL_KEY)) {
    let resolved = Promise.resolve(false);
  } else {
    const obj4 = { uri: _modDef12635 };
    NativeImageManagerModuleDefault.preload(obj4);
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    const checkpointData = CheckpointActionCreators.fetchCheckpointData(obj);
    const tmpResult = CheckpointActionCreators;
    const result = useCheckpointGuildsBarEntrypoint.dismissCheckpointIntro(devtools);
    const tmpResult2 = useCheckpointGuildsBarEntrypoint;
    const obj6 = { source: devtools };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12638, dependencyMap.paths), obj6, CHECKPOINT_MODAL_KEY);
    resolved = Promise.resolve(true);
  }
  return resolved;
}