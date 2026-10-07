// === Module 16829: pages/ErrorScreen ===

// Module 16829 (pages/ErrorScreen)
import c from "c" /* 576 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4596 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6478 */;
import noop from "module_19" /* 19 */;

const Text_Text = tmp(4892);
require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let closure_6 = createStyles.createStyles({ container: { justifyContent: "center", alignItems: "center", height: "100%", display: "flex" }, text: { textAlign: "center", width: "75%" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/ErrorScreen.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((text) => {
  const cResult = c.c(15);
  text = text.text;
  require = text;
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { includeKeyboardHeight: true };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const insets = useSafeAreaInsetsKeyboardAwareDefault(first).insets;
  if (cResult[1] !== text) {
    const fn = function y() {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(text, "polite");
    };
    const items = [text];
    cResult[1] = text;
    cResult[2] = fn;
    cResult[3] = items;
    let tmp7 = items;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const effect = noop.useEffect(tmp6, tmp7);
  if (cResult[4] !== insets.bottom) {
    const obj3 = { paddingBottom: insets.bottom };
    cResult[4] = insets.bottom;
    cResult[5] = obj3;
    let tmp9 = obj3;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] === tmp4.container) {
    if (cResult[7] === tmp9) {
      let tmp10 = cResult[8];
    }
    if (cResult[9] === tmp4.text) {
      if (cResult[10] === text) {
        let tmp11 = cResult[11];
      }
      if (cResult[12] === tmp10) {
        if (cResult[13] === tmp11) {
          let tmp14 = cResult[14];
        }
        return tmp14;
      }
      const obj4 = { style: tmp10, children: tmp11 };
      const tmp17 = <View style={tmp10}>{tmp11}</View>;
      cResult[12] = tmp10;
      cResult[13] = tmp11;
      cResult[14] = tmp17;
      tmp14 = tmp17;
    }
    const obj5 = { variant: "text-sm/medium", color: "text-muted", style: tmp4.text, children: text };
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
  const effect = noop.useEffect(() => {
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(text, "polite");
  }, items);
  const obj = { style: null, children: null };
  const items1 = [tmp.container, { paddingBottom: useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom }];
  obj.style = items1;
  obj.children = jsx(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", style: tmp.text, children: text });
  return <View style={null}>{null}</View>;
}));