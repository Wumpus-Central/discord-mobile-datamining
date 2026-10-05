// discord_app/modules/webauthn/native/nav_steps/WebAuthnSuccessStep.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import intl2 from "../../../../intl/index.native.tsx";
import UserSettingsAccountBackupCodesDefault from "../../../user_settings/account/native/UserSettingsAccountBackupCodes.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
    }
  : () => {
      UserSettingsAccountBackupCodesDefault;
      const intl = intl2.intl;
      return <tmp onGenerate={null} headerLabel={intl.format(intl2.t.iVTs6i, {})} />;
    };
const result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnSuccessStep.tsx");

export default tmp3;
