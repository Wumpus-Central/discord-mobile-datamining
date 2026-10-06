// === Module 14620: WebAuthnSuccessStep ===

// Module 14620 (WebAuthnSuccessStep)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import UserSettingsAccountBackupCodesDefault from "UserSettingsAccountBackupCodes" /* 14600 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    UserSettingsAccountBackupCodesDefault;
    const intl = intl2.intl;
    const tmp8 = <tmp7 onGenerate={null} headerLabel={intl.format(intl2.t.iVTs6i, {})} />;
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  UserSettingsAccountBackupCodesDefault;
  const intl = intl2.intl;
  return <tmp onGenerate={null} headerLabel={intl.format(intl2.t.iVTs6i, {})} />;
});
const result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnSuccessStep.tsx");

export default tmp3;