// discord_app/modules/mfa/MFAActionCreators.tsx
import MFAConstants from "MFAConstants.tsx";
import MFA from "../../../discord_common/js/shared/MFA.tsx";
import size from "../../../_runtime/metro/00002__.js";

const SELECT_NAMES = MFAConstants.SELECT_NAMES;
const result = size.fileFinishedImporting("modules/mfa/MFAActionCreators.tsx");

export const openMFAModal = function openMFAModal(methods, arg1, cancel) {
  _require = arg1;
  methods = methods.methods;
  methods.methods = methods.filter((type) => Object.hasOwn(SELECT_NAMES, type.type));
  require("MFAModal").openMFAModal(methods, (arg0) => MFA.trySubmit(arg0, closure_0), cancel);
};
