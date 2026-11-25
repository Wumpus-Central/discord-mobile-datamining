// === Module 19950: showSoundboardSoundEditModal ===

// Module 19950 (showSoundboardSoundEditModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/edit_modal/showSoundboardSoundEditModal.tsx");

export default function showSoundboardSoundEditModal(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(19951, dependencyMap.paths), merged, "SoundboardSoundEditModal");
};