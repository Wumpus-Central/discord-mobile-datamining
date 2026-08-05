// discord_app/modules/mfa/MFAActionCreators.tsx
import { SELECT_NAMES } from "get webauthn";
import { MFAModal } from "native/MFAModal.tsx";

const result = require("finishMFACheck").fileFinishedImporting("modules/mfa/MFAActionCreators.tsx");

export const openMFAModal = function openMFAModal(methods) {
  const _require = arg1;
  methods = methods.methods;
  methods.methods = methods.filter((type) => Object.hasOwn(closure_2, type.type));
  _MFAModal.openMFAModal(methods, (arg0) => callback(outer1_1[2]).trySubmit(arg0, callback), arg2);
};