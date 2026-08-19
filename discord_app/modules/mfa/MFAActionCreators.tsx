// discord_app/modules/mfa/MFAActionCreators.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import get_webauthn from "MFAConstants.tsx";

const SELECT_NAMES = get_webauthn.SELECT_NAMES;
const result = obj132.fileFinishedImporting("modules/mfa/MFAActionCreators.tsx");

export const openMFAModal = function openMFAModal(methods) {
  const _require = arg1;
  methods = methods.methods;
  methods.methods = methods.filter((item, index) => Object.hasOwn(closure_2, item.type));
  require("native/MFAModal.tsx").openMFAModal(methods, (arg0) => callback(dependencyMap[2]).trySubmit(arg0, callback), arg2);
};