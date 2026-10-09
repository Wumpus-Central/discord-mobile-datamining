// === Module 15888: mfa/MFAActionCreators ===

// Module 15888 (mfa/MFAActionCreators)
import MFAConstants from "MFAConstants" /* 15889 */;
import MFA from "MFA" /* 15899 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const SELECT_NAMES = MFAConstants.SELECT_NAMES;
const result = size.fileFinishedImporting("modules/mfa/MFAActionCreators.tsx");

export const openMFAModal = function openMFAModal(methods, arg1, cancel) {
  _require = arg1;
  methods = methods.methods;
  methods.methods = methods.filter((type) => Object.hasOwn(SELECT_NAMES, type.type));
  require("MFAModal").openMFAModal(methods, function finish(arg0) {
    return MFA.trySubmit(arg0, closure_0);
  }, cancel);
};