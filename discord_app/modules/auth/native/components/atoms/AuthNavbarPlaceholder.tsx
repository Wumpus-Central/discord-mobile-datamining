// === Module 6659: AuthNavbarPlaceholder ===

// Module 6659 (AuthNavbarPlaceholder)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import NavigatorHeader from "NavigatorHeader" /* 6200 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = { navBar: { backgroundColor: nativeDefault.unsafe_rawColors.TRANSPARENT, borderBottomWidth: 0 } };
let closure_3 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = { backgroundColor: nativeDefault.unsafe_rawColors.TRANSPARENT, borderBottomWidth: 0 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/atoms/AuthNavbarPlaceholder.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AuthNavbarPlaceholder() {
  const cResult = c.c(2);
  const tmp4 = closure_3();
  if (cResult[0] !== tmp4.navBar) {
    const obj2 = { style: tmp4.navBar, children: null };
    const tmp7 = jsx(NavigatorHeader.FauxHeader, { style: tmp4.navBar, children: null });
    cResult[0] = tmp4.navBar;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (function AuthNavbarPlaceholder() {
  const tmp = closure_3();
  return jsx(NavigatorHeader.FauxHeader, { style: closure_3().navBar, children: null });
});