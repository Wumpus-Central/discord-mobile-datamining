// discord_app/modules/image_upload/native/AddImageDescriptionModalActionCreators.tsx
const ADD_IMAGE_DESCRIPTION_MODAL_KEY = "ADD_IMAGE_DESCRIPTION_MODAL_KEY";
const result = require("AddDescription").fileFinishedImporting("modules/image_upload/native/AddImageDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4253).hideActionSheet();
    const obj = importDefault(4253);
    importDefault(4490).pushLazy(require(1959) /* asyncRequireImpl */(10097, dependencyMap.paths), closure_0, ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  },
  close() {
    importDefault(4490).popWithKey(ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  }
};