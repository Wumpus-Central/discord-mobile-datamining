// === Module 14521: TwoFASetupModalActionCreators ===

// Module 14521 (TwoFASetupModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5069 */;
import size from "module_2" /* 2 */;

const TWO_FA_SETUP_MODAL_KEY = "TWO_FA_SETUP_MODAL_KEY";
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx");

export default {
  open(initialRouteName) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14522, dependencyMap.paths), { initialRouteName }, TWO_FA_SETUP_MODAL_KEY);
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(TWO_FA_SETUP_MODAL_KEY);
  }
};