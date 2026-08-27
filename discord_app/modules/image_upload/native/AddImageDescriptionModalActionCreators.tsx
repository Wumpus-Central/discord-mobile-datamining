// === Module 10797: ? ===

// Module 10797
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4412 */;
import _modDef4676 from "module_4676" /* 4676 */;

const ADD_IMAGE_DESCRIPTION_MODAL_KEY = "ADD_IMAGE_DESCRIPTION_MODAL_KEY";
const result = set.fileFinishedImporting("modules/image_upload/native/AddImageDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
    const obj = ACTION_SHEET_HEIGHT_HALFDefault;
    _modDef4676.pushLazy(asyncRequireImpl(10798, dependencyMap.paths), closure_0, ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  },
  close() {
    _modDef4676.popWithKey(ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  }
};