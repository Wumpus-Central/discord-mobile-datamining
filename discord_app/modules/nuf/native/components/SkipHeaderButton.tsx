// === Module 12696: SkipHeaderButton ===

// Module 12696 (SkipHeaderButton)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import HeaderShared from "HeaderShared" /* 7863 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { button: null, insideNavigatorButton: null };
createStyles = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles.button = createStyles;
createStyles.insideNavigatorButton = { paddingRight: 16 };
let closure_3 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf/native/components/SkipHeaderButton.tsx");

export default function SkipHeaderButton(label) {
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
};