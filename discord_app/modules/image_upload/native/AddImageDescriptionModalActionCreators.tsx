// discord_app/modules/image_upload/native/AddImageDescriptionModalActionCreators.tsx
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const ADD_IMAGE_DESCRIPTION_MODAL_KEY = "ADD_IMAGE_DESCRIPTION_MODAL_KEY";
const result = size.fileFinishedImporting("modules/image_upload/native/AddImageDescriptionModalActionCreators.tsx");

export default {
  open(merged) {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    ModalActionCreatorsDefault.pushLazy(
      asyncRequireImpl(11240, dependencyMap.paths),
      merged,
      ADD_IMAGE_DESCRIPTION_MODAL_KEY,
    );
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  },
};
