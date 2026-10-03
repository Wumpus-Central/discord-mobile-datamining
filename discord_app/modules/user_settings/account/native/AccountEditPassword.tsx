// === Module 14557: AccountEditPassword ===

// Module 14557 (AccountEditPassword)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import UserSettingsAccountEditPasswordDefault from "UserSettingsAccountEditPassword" /* 14558 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4890);
const obj = { container: null };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.container = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_5 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
const obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/AccountEditPassword.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  const tmp3 = closure_5();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = jsx(UserSettingsAccountEditPasswordDefault, {});
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp3.container) {
    const obj2 = { style: tmp3.container, children: first };
    const tmp11 = <React3 style={tmp3.container}>{first}</React3>;
    cResult[1] = tmp3.container;
    cResult[2] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : (() => <React3 style={closure_5().container}>{jsx(UserSettingsAccountEditPasswordDefault, {})}</React3>));