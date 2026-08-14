// discord_app/modules/image_upload/native/AddImageDescriptionModalActionCreators.tsx
import { asyncRequireImpl } from "../../../../_runtime/02007_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../actions/ModalActionCreators.tsx";
import { ACTION_SHEET_HEIGHT_HALF } from "../../action_sheet/native/ActionSheetActionCreators.tsx";
const ADD_IMAGE_DESCRIPTION_MODAL_KEY = "ADD_IMAGE_DESCRIPTION_MODAL_KEY";
const result = require("AddDescription").fileFinishedImporting("modules/image_upload/native/AddImageDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    ACTION_SHEET_HEIGHT_HALF.hideActionSheet();
    const obj = ACTION_SHEET_HEIGHT_HALF;
    ModalActionCreators.pushLazy(asyncRequireImpl(10242, dependencyMap.paths), closure_0, ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  },
  close() {
    ModalActionCreators.popWithKey(ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  }
};