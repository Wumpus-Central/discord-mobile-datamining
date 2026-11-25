// === Module 17960: WaterwheelsSectionLabel ===

// Module 17960 (WaterwheelsSectionLabel)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5603 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5012);
const obj2 = { label: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 }, text: { flexShrink: 1 } };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/cards/native/WaterwheelsSectionLabel.tsx");

export default function WaterwheelsSectionLabel(arg0) {
  ({ icon, text } = arg0);
  const tmp = closure_5();
  const obj = { style: tmp.label, children: null };
  items = [icon, React3(Text_Text.Heading, { variant: "body-sm/medium", color: "text-muted", style: tmp.text, children: text })];
  obj.children = items;
  return React4(View, obj);
};