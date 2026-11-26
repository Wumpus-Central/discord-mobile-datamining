// discord_app/modules/checkpoint/openCheckpoint.native.tsx
import NativeImageManagerModuleDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeImageManagerModule.tsx";
import asyncRequireImpl from "../../../_runtime/02120_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../actions/ModalActionCreators.tsx";
import CheckpointModalConstants from "CheckpointModalConstants.tsx";
import _modDef12627 from "../../../discord_assets/assets/checkpoint/mobile_background_texture.png.js";
import CheckpointActionCreators from "CheckpointActionCreators.tsx";
import useCheckpointGuildsBarEntrypoint from "useCheckpointGuildsBarEntrypoint.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
    const obj4 = { uri: _modDef12627 };
    NativeImageManagerModuleDefault.preload(obj4);
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    const checkpointData = CheckpointActionCreators.fetchCheckpointData(obj);
    const tmpResult = CheckpointActionCreators;
    const result = useCheckpointGuildsBarEntrypoint.dismissCheckpointIntro(devtools);
    const tmpResult2 = useCheckpointGuildsBarEntrypoint;
    const obj6 = { source: devtools };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12630, dependencyMap.paths), obj6, CHECKPOINT_MODAL_KEY);
    resolved = Promise.resolve(true);
  }
  return resolved;
}
