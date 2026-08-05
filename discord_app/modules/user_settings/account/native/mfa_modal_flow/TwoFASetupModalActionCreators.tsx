// discord_app/modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx
import { asyncRequireImpl } from "../../../../../../_runtime/01959_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../../../actions/ModalActionCreators.tsx";
const TWO_FA_SETUP_MODAL_KEY = "TWO_FA_SETUP_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx");

export default {
  open(initialRouteName) {
    let obj = ModalActionCreators;
    obj = { initialRouteName };
    obj.pushLazy(asyncRequireImpl /* asyncRequireImpl */(13932, dependencyMap.paths), obj, TWO_FA_SETUP_MODAL_KEY);
  },
  close() {
    ModalActionCreators.popWithKey(TWO_FA_SETUP_MODAL_KEY);
  }
};