// === Module 14843: TwoFASetupModalActionCreators ===

// Module 14843 (TwoFASetupModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import size from "module_2" /* 2 */;

const TWO_FA_SETUP_MODAL_KEY = "TWO_FA_SETUP_MODAL_KEY";
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx");

export default {
  open(initialRouteName) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14844, dependencyMap.paths), { initialRouteName }, TWO_FA_SETUP_MODAL_KEY);
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(TWO_FA_SETUP_MODAL_KEY);
  }
};