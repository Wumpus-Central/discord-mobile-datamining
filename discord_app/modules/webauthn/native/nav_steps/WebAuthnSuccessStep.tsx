// === Module 17006: WebAuthnSuccessStep ===

// Module 17006 (WebAuthnSuccessStep)
import util from "util" /* 1113 */;
import UserSettingsAccountBackupCodesDefault from "UserSettingsAccountBackupCodes" /* 16981 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnSuccessStep.tsx");

export default function WebAuthnSuccessStep() {
  const obj = { onGenerate: null, headerLabel: null };
  const intl = util.intl;
  obj.headerLabel = intl.format(util.t.iVTs6i, {});
  return jsx(UserSettingsAccountBackupCodesDefault, { onGenerate: null, headerLabel: null });
};