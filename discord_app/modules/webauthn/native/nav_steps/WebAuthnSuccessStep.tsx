// === Module 15052: WebAuthnSuccessStep ===

// Module 15052 (WebAuthnSuccessStep)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import UserSettingsAccountBackupCodesDefault from "UserSettingsAccountBackupCodes" /* 15028 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnSuccessStep.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function WebAuthnSuccessStep() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { onGenerate: null, headerLabel: null };
    const intl = util.intl;
    obj2.headerLabel = intl.format(util.t.iVTs6i, {});
    const tmp8 = jsx(UserSettingsAccountBackupCodesDefault, { onGenerate: null, headerLabel: null });
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function WebAuthnSuccessStep() {
  const obj = { onGenerate: null, headerLabel: null };
  const intl = util.intl;
  obj.headerLabel = intl.format(util.t.iVTs6i, {});
  return jsx(UserSettingsAccountBackupCodesDefault, { onGenerate: null, headerLabel: null });
});