// discord_app/modules/mfa/MFAActionCreators.tsx
import set from "../../../_runtime/00002_set.js";
import get_webauthn from "MFAConstants.tsx";

const SELECT_NAMES = get_webauthn.SELECT_NAMES;
const result = set.fileFinishedImporting("modules/mfa/MFAActionCreators.tsx");

export const openMFAModal = function openMFAModal(methods) {
  const _require = arg1;
  methods = methods.methods;
  methods.methods = methods.filter((type) => Object.hasOwn(closure_2, type.type));
  require("native/MFAModal.tsx").openMFAModal(methods, (arg0) => callback(closure_1_1[2]).trySubmit(arg0, callback), arg2);
};