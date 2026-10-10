// === Module 12896: AuthorizeFormSeparator ===

// Module 12896 (AuthorizeFormSeparator)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const jsx = jsxProd.jsx;
const obj = { separator: { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE } };
let closure_4 = createStyles.createStyles(obj);
let obj2 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
const result = size.fileFinishedImporting("modules/oauth2/native/AuthorizeFormSeparator.tsx");

export const AuthorizeFormSeparator = ReactCompilerGating.isReactCompilerEnabled() ? (function AuthorizeFormSeparator() {
  const cResult = c.c(2);
  const tmp2 = closure_4();
  if (cResult[0] !== tmp2.separator) {
    const obj2 = { style: tmp2.separator };
    const tmp6 = <View style={tmp2.separator} />;
    cResult[0] = tmp2.separator;
    cResult[1] = tmp6;
    let tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function AuthorizeFormSeparator() {
  return <View style={closure_4().separator} />;
});