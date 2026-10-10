// === Module 12419: SkipHeaderButton ===

// Module 12419 (SkipHeaderButton)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import HeaderShared from "HeaderShared" /* 9297 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = { button: { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT }, insideNavigatorButton: { paddingRight: 16 } };
let closure_3 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf/native/components/SkipHeaderButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SkipHeaderButton(label) {
  const cResult = c.c(9);
  const tmp4 = closure_3();
  if (cResult[0] !== label.label) {
    label = label.label;
    if (label == null) {
      const intl = util.intl;
      label = intl.string(util.t["5Wxrcd"]);
    }
    cResult[0] = label.label;
    cResult[1] = label;
    let tmp5 = label;
  } else {
    tmp5 = cResult[1];
  }
  let prop;
  if (label.insideNavigator) {
    prop = tmp4.insideNavigatorButton;
  }
  if (cResult[2] === tmp4.button) {
    if (cResult[3] === prop) {
      let tmp8 = cResult[4];
    }
    if (cResult[5] === tmp5) {
      if (cResult[6] === label) {
        if (cResult[7] === tmp8) {
          let tmp9 = cResult[8];
        }
        return tmp9;
      }
    }
    const obj2 = {};
    const merged = Object.assign(label);
    obj2.labelStyle = tmp8;
    obj2.label = tmp5;
    obj2.accessibilityLabel = tmp5;
    const tmp14 = jsx(HeaderShared.HeaderTextButton, {});
    cResult[5] = tmp5;
    cResult[6] = label;
    cResult[7] = tmp8;
    cResult[8] = tmp14;
    tmp9 = tmp14;
  }
  const items = [tmp4.button, prop];
  cResult[2] = tmp4.button;
  cResult[3] = prop;
  cResult[4] = items;
  tmp8 = items;
}) : (function SkipHeaderButton(label) {
  const tmp = closure_3();
  label = label.label;
  if (label == null) {
    const intl = util.intl;
    label = intl.string(util.t["5Wxrcd"]);
  }
  const obj = {};
  const merged = Object.assign(label);
  const items = [tmp.button, ];
  let prop;
  if (label.insideNavigator) {
    prop = tmp.insideNavigatorButton;
  }
  items[1] = prop;
  obj.labelStyle = items;
  obj.label = label;
  obj.accessibilityLabel = label;
  return jsx(HeaderShared.HeaderTextButton, {});
});