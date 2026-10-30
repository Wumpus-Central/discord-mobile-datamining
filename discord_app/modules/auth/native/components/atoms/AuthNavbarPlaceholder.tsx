// === Module 7139: AuthNavbarPlaceholder ===

// Module 7139 (AuthNavbarPlaceholder)
import nativeDefault from "native" /* 575 */;
import NavigatorHeader from "NavigatorHeader" /* 6992 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
const obj2 = { navBar: { backgroundColor: nativeDefault.unsafe_rawColors.TRANSPARENT, borderBottomWidth: 0 } };
let closure_3 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/atoms/AuthNavbarPlaceholder.tsx");

export default function AuthNavbarPlaceholder() {
  const tmp = closure_3();
  return jsx(NavigatorHeader.FauxHeader, { style: closure_3().navBar, children: null });
};