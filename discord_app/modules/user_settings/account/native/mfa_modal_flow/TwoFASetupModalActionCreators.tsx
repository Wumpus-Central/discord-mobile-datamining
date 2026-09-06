// === Module 14781: TwoFASetupModalActionCreators ===

// Module 14781 (TwoFASetupModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import size from "module_2" /* 2 */;

const TWO_FA_SETUP_MODAL_KEY = "TWO_FA_SETUP_MODAL_KEY";
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx");

export default {
  open(initialRouteName) {
    const obj = { initialRouteName };
    obj.pushLazy(asyncRequireImpl(14782, dependencyMap.paths), obj, TWO_FA_SETUP_MODAL_KEY);
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(TWO_FA_SETUP_MODAL_KEY);
  }
};