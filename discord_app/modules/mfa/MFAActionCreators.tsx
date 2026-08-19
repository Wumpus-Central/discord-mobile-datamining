// === Module 15118: openMFAModal ===

// Module 15118 (openMFAModal)
import obj132 from "obj132" /* 2 */;
import get_webauthn from "get webauthn" /* 15119 */;

const SELECT_NAMES = get_webauthn.SELECT_NAMES;
const result = obj132.fileFinishedImporting("modules/mfa/MFAActionCreators.tsx");

export const openMFAModal = function openMFAModal(methods) {
  const _require = arg1;
  methods = methods.methods;
  methods.methods = methods.filter((item, index) => Object.hasOwn(closure_2, item.type));
  _require(15120).openMFAModal(methods, (arg0) => callback(dependencyMap[2]).trySubmit(arg0, callback), arg2);
};