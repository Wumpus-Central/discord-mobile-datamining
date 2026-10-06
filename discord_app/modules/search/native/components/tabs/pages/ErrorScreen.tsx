// === Module 16829: ErrorScreen ===

// Module 16829 (ErrorScreen)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4596 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6478 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let text;

let tmp;
const Text_Text = tmp(4892);
const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ container: { justifyContent: "center", alignItems: "center", height: "100%", display: "flex" }, text: { textAlign: "center", width: "75%" } });
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((text) => {
  let first;
  let tmp6;
  let tmp7;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(15);
  text = text.text;
  require = text;
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { includeKeyboardHeight: true };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const insets = useSafeAreaInsetsKeyboardAwareDefault(first).insets;
  if (cResult[1] !== text) {
    const fn = function y() {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(require, "polite");
    };
    const items = [text];
    cResult[1] = text;
    cResult[2] = fn;
    cResult[3] = items;
    tmp7 = items;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const effect = react.useEffect(tmp6, tmp7);
  if (cResult[4] !== insets.bottom) {
    const obj3 = { paddingBottom: insets.bottom };
    cResult[4] = insets.bottom;
    cResult[5] = obj3;
    tmp9 = obj3;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] === tmp4.container) {
    let tmp10;
    if (cResult[7] === tmp9) {
      tmp10 = cResult[8];
    }
    if (cResult[9] === tmp4.text) {
      let tmp11;
      if (cResult[10] === text) {
        tmp11 = cResult[11];
      }
      if (cResult[12] === tmp10) {
        let tmp14;
        if (cResult[13] === tmp11) {
          tmp14 = cResult[14];
        }
        return tmp14;
      }
      const tmp17 = <View style={tmp10}>{tmp11}</View>;
      cResult[12] = tmp10;
      cResult[13] = tmp11;
      cResult[14] = tmp17;
      tmp14 = tmp17;
    }
    const tmp13 = jsx(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", style: tmp4.text, children: text });
    cResult[9] = tmp4.text;
    cResult[10] = text;
    cResult[11] = tmp13;
    tmp11 = tmp13;
  }
  const items1 = [tmp4.container, tmp9];
  cResult[6] = tmp4.container;
  cResult[7] = tmp9;
  cResult[8] = items1;
  tmp10 = items1;
}) : ((text) => {
  text = text.text;
  require = text;
  const tmp = closure_6();
  const items = [text];
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  const effect = react.useEffect(() => {
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(require, "polite");
  }, items);
  const items1 = [tmp.container, { paddingBottom: insets.bottom }];
  return <View style={items1}>{null}</View>;
}));
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/ErrorScreen.tsx");

export default memoResult;