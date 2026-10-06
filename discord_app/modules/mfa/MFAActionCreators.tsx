// === Module 15513: mfa/MFAActionCreators ===

// Module 15513 (mfa/MFAActionCreators)
import MFAConstants from "MFAConstants" /* 15514 */;
import MFA from "MFA" /* 15524 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const SELECT_NAMES = MFAConstants.SELECT_NAMES;
const result = size.fileFinishedImporting("modules/mfa/MFAActionCreators.tsx");

export const openMFAModal = function openMFAModal(methods, arg1, cancel) {
  let closure_0;
  _require = arg1;
  methods = methods.methods;
  methods.methods = methods.filter((type) => Object.hasOwn(SELECT_NAMES, type.type));
  let obj = require("MFAModal");
  obj.openMFAModal(methods, (arg0) => {
    const obj = MFA;
    return obj.trySubmit(arg0, closure_0);
  }, cancel);
};