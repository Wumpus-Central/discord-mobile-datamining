// === Module 15517: UserSettingsJSError ===

// Module 15517 (UserSettingsJSError)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Text_Text from "Text/Text" /* 4886 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => jsx(Text_Text.Text, { variant: "display-md", children: null.boo }));
const result = size.fileFinishedImporting("modules/user_settings/dev_tools/native/UserSettingsJSError.tsx");

export default tmp3;