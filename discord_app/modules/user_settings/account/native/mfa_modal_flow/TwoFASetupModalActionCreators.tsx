// discord_app/modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx
import asyncRequire from "../../../../../../_runtime/01987_asyncRequire.js";
import ModalActionCreatorsDefault from "../../../../../actions/ModalActionCreators.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const TWO_FA_SETUP_MODAL_KEY = "TWO_FA_SETUP_MODAL_KEY";
let obj = {
  open(initialRouteName) {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { initialRouteName };
    obj.pushLazy(asyncRequire(14567, dependencyMap.paths), obj2, TWO_FA_SETUP_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(TWO_FA_SETUP_MODAL_KEY);
  },
};
const result = size.fileFinishedImporting(
  "modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx",
);

export default obj;
