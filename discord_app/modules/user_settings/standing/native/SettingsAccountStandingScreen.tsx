// discord_app/modules/user_settings/standing/native/SettingsAccountStandingScreen.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react from "../../../../../_runtime/00576_react.js";
import SafetyHubPageDefault from "../../../safety_hub/native/SafetyHubPage.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      const obj = react;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp6 = jsx(SafetyHubPageDefault, { visible: true });
        cResult[0] = tmp6;
        first = tmp6;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => jsx(SafetyHubPageDefault, { visible: true });
const result = size.fileFinishedImporting("modules/user_settings/standing/native/SettingsAccountStandingScreen.tsx");

export default tmp2;
