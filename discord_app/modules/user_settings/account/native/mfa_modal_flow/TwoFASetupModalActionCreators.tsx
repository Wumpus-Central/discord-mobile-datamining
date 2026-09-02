// discord_app/modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx
import set from "../../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../../_runtime/02008_asyncRequireImpl.js";
import _modDef4723 from "../../../../../actions/ModalActionCreators.tsx";

const TWO_FA_SETUP_MODAL_KEY = "TWO_FA_SETUP_MODAL_KEY";
const result = set.fileFinishedImporting(
  "modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx",
);

export default {
  open(initialRouteName) {
    let obj = _modDef4723;
    obj = { initialRouteName };
    obj.pushLazy(asyncRequireImpl(14611, dependencyMap.paths), obj, TWO_FA_SETUP_MODAL_KEY);
  },
  close() {
    _modDef4723.popWithKey(TWO_FA_SETUP_MODAL_KEY);
  },
};
