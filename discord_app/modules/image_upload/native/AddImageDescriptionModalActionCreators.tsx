// === Module 11641: AddImageDescriptionModalActionCreators ===

// Module 11641 (AddImageDescriptionModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import size from "module_2" /* 2 */;

const ADD_IMAGE_DESCRIPTION_MODAL_KEY = "ADD_IMAGE_DESCRIPTION_MODAL_KEY";
const result = size.fileFinishedImporting("modules/image_upload/native/AddImageDescriptionModalActionCreators.tsx");

export default {
  open(merged) {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11642, dependencyMap.paths), merged, ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  }
};