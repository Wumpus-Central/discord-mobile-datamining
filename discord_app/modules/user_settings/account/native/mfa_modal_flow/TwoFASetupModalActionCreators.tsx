// discord_app/modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx
const TWO_FA_SETUP_MODAL_KEY = "TWO_FA_SETUP_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx");

export default {
  open(initialRouteName) {
    let obj = require("../../../../../actions/ModalActionCreators.tsx");
    obj = { initialRouteName };
    obj.pushLazy(require("../../../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(13932, dependencyMap.paths), obj, TWO_FA_SETUP_MODAL_KEY);
  },
  close() {
    require("../../../../../actions/ModalActionCreators.tsx").popWithKey(TWO_FA_SETUP_MODAL_KEY);
  }
};