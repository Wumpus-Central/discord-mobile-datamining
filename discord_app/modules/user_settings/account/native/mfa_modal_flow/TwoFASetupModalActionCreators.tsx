// discord_app/modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx
import asyncRequireImpl from "../../../../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../../../actions/ModalActionCreators.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const TWO_FA_SETUP_MODAL_KEY = "TWO_FA_SETUP_MODAL_KEY";
const result = size.fileFinishedImporting(
  "modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx",
);

export default {
  open(initialRouteName) {
    const obj = { initialRouteName };
    obj.pushLazy(asyncRequireImpl(14782, dependencyMap.paths), obj, TWO_FA_SETUP_MODAL_KEY);
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(TWO_FA_SETUP_MODAL_KEY);
  },
};
