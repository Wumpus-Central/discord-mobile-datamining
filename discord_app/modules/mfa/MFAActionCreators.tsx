// === Module 15790: mfa/MFAActionCreators ===

// Module 15790 (mfa/MFAActionCreators)
import MFAConstants from "MFAConstants" /* 15791 */;
import MFA from "MFA" /* 15801 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const SELECT_NAMES = MFAConstants.SELECT_NAMES;
const result = size.fileFinishedImporting("modules/mfa/MFAActionCreators.tsx");

export const openMFAModal = function openMFAModal(methods, arg1, cancel) {
  _require = arg1;
  methods = methods.methods;
  methods.methods = methods.filter((type) => Object.hasOwn(SELECT_NAMES, type.type));
  require("MFAModal").openMFAModal(methods, (arg0) => MFA.trySubmit(arg0, closure_0), cancel);
};