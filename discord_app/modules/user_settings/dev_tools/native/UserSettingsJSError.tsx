// discord_app/modules/user_settings/dev_tools/native/UserSettingsJSError.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
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
        const tmp7 = jsx(Text_Text.Text, { variant: "display-md", children: null.boo });
        cResult[0] = tmp7;
        first = tmp7;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => jsx(Text_Text.Text, { variant: "display-md", children: null.boo });
const result = size.fileFinishedImporting("modules/user_settings/dev_tools/native/UserSettingsJSError.tsx");

export default tmp3;
