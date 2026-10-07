// === Module 6543: NavScrim ===

// Module 6543 (NavScrim)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6478 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj = { androidNavScrim: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = nativeDefault.colors.ANDROID_NAVIGATION_SCRIM_BACKGROUND;
obj3.top = undefined;
obj.androidNavScrim = obj3;
let closure_5 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/NavScrim.android.tsx");

export const NavScrim = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(6);
  let androidNavScrim = closure_5();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { includeCustomKeyboardHeight: false };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const insets = useSafeAreaInsetsKeyboardAwareDefault(first).insets;
  if (0 === insets.bottom) {
    return null;
  } else {
    if (cResult[1] !== insets.bottom) {
      const obj3 = { height: insets.bottom };
      cResult[1] = insets.bottom;
      cResult[2] = obj3;
      let tmp4 = obj3;
    } else {
      tmp4 = cResult[2];
    }
    if (cResult[3] === androidNavScrim.androidNavScrim) {
    }
    const obj4 = { style: null, pointerEvents: "none" };
    const items = [androidNavScrim.androidNavScrim, tmp4];
    obj4.style = items;
    const tmp8 = <React3 style={null} pointerEvents="none" />;
    androidNavScrim = androidNavScrim.androidNavScrim;
    cResult[3] = androidNavScrim;
    cResult[4] = tmp4;
    cResult[5] = tmp8;
  }
}) : (() => {
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeCustomKeyboardHeight: false }).insets;
  let tmp2 = null;
  if (0 !== insets.bottom) {
    const obj = { style: null, pointerEvents: "none" };
    const items = [tmp.androidNavScrim, ];
    const obj2 = { height: insets.bottom };
    items[1] = obj2;
    obj.style = items;
    tmp2 = <React3 style={null} pointerEvents="none" />;
  }
  return tmp2;
}));