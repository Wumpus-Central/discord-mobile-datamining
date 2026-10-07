// === Module 15533: UserSettingsJSError ===

// Module 15533 (UserSettingsJSError)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 4892 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/dev_tools/native/UserSettingsJSError.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => jsx(Text_Text.Text, { variant: "display-md", children: null.boo }));