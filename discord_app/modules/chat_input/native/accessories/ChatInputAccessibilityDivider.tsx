// === Module 11892: ChatInputAccessibilityDivider ===

// Module 11892 (ChatInputAccessibilityDivider)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5770 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ StyleSheet: c2, View: c3 } = react_native);
const jsx = Fragment.jsx;
let c5 = "chat-input-accessibility-divider";
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = react2;
  const cResult = obj.c(2);
  let tmp4 = null;
  const obj2 = useIsScreenReaderEnabled;
  if (obj2.useIsScreenReaderEnabled()) {
    tmp4 = null;
    const tmpResult = PlatformUtils;
    if (!tmpResult.isAndroid()) {
      let first;
      let tmp8;
      const _Symbol = Symbol;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl2.intl;
        const stringResult = intl.string(intl2.t["uKZtC/"]);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      const _Symbol2 = Symbol;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [React2.absoluteFill, { height: 1 }];
        const tmp13 = <_false nativeID={nativeID} accessible accessibilityLabel={first} accessibilityRole="header" style={items} />;
        cResult[1] = tmp13;
        tmp8 = tmp13;
      } else {
        tmp8 = cResult[1];
      }
      tmp4 = tmp8;
    }
  }
  return tmp4;
}) : (() => {
  let tmp3 = null;
  const obj = useIsScreenReaderEnabled;
  if (obj.useIsScreenReaderEnabled()) {
    tmp3 = null;
    const tmpResult = PlatformUtils;
    if (!tmpResult.isAndroid()) {
      const intl = intl2.intl;
      const items = [React2.absoluteFill, { height: 1 }];
      tmp3 = <_false nativeID={nativeID} accessible accessibilityLabel={intl.string(intl2.t["uKZtC/"])} accessibilityRole="header" style={items} />;
    }
  }
  return tmp3;
}));
const result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputAccessibilityDivider.tsx");

export const ChatInputAccessibilityDivider = memoResult;