// discord_app/modules/image_upload/native/AddImageDescriptionModalActionCreators.tsx
const ADD_IMAGE_DESCRIPTION_MODAL_KEY = "ADD_IMAGE_DESCRIPTION_MODAL_KEY";
const result = require("AddDescription").fileFinishedImporting("modules/image_upload/native/AddImageDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    require("../../action_sheet/native/ActionSheetActionCreators.tsx").hideActionSheet();
    const obj = require("../../action_sheet/native/ActionSheetActionCreators.tsx");
    require("../../../actions/ModalActionCreators.tsx").pushLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(10097, dependencyMap.paths), closure_0, ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  },
  close() {
    require("../../../actions/ModalActionCreators.tsx").popWithKey(ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  }
};