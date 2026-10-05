// discord_app/modules/mfa/MFAActionCreators.tsx
import MFAConstants from "MFAConstants.tsx";
import MFA from "../../../discord_common/js/shared/MFA.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
  obj.openMFAModal(
    methods,
    (arg0) => {
      const obj = MFA;
      return obj.trySubmit(arg0, closure_0);
    },
    cancel,
  );
};
