// === Module 6536: NavScrim ===

// Module 6536 (NavScrim)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6471 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c3;
let obj2;
({ View: c3, StyleSheet } = react_native);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { androidNavScrim: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.ANDROID_NAVIGATION_SCRIM_BACKGROUND, top: undefined };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_5 = createStyles(obj);
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(6);
  const tmp3 = closure_5();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { includeCustomKeyboardHeight: false };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const insets = useSafeAreaInsetsKeyboardAwareDefault(first).insets;
  let tmp5 = null;
  if (0 !== insets.bottom) {
    let tmp6;
    if (cResult[1] !== insets.bottom) {
      const obj3 = { height: insets.bottom };
      cResult[1] = insets.bottom;
      cResult[2] = obj3;
      tmp6 = obj3;
    } else {
      tmp6 = cResult[2];
    }
    if (cResult[3] === tmp3.androidNavScrim) {
      let tmp7;
      if (cResult[4] === tmp6) {
        tmp7 = cResult[5];
      }
      tmp5 = tmp7;
    }
    const items = [tmp3.androidNavScrim, tmp6];
    const tmp10 = <_false style={items} pointerEvents="none" />;
    cResult[3] = tmp3.androidNavScrim;
    cResult[4] = tmp6;
    cResult[5] = tmp10;
    tmp7 = tmp10;
  }
  return tmp5;
}) : (() => {
  const tmp = closure_5();
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeCustomKeyboardHeight: false }).insets;
  let tmp2 = null;
  if (0 !== insets.bottom) {
    const items = [tmp.androidNavScrim, ];
    const obj2 = { height: insets.bottom };
    items[1] = obj2;
    tmp2 = <_false style={items} pointerEvents="none" />;
  }
  return tmp2;
}));
const result = size.fileFinishedImporting("design/components/Navigator/native/NavScrim.android.tsx");

export const NavScrim = memoResult;