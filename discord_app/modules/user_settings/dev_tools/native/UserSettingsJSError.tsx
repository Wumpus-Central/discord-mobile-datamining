// discord_app/modules/user_settings/dev_tools/native/UserSettingsJSError.tsx
import c from "../../../../../_runtime/00576_c.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/dev_tools/native/UserSettingsJSError.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UserSettingsJSError() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "display-md", children: null.boo };
        const tmp7 = jsx(Text_Text.Text, { variant: "display-md", children: null.boo });
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : function UserSettingsJSError() {
      return jsx(Text_Text.Text, { variant: "display-md", children: null.boo });
    };
