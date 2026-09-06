// === Module 9765: EditGuildEventStepHeader ===

// Module 9765 (EditGuildEventStepHeader)
import Text_Text from "Text/Text" /* 4556 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles({ header: { alignItems: "center", paddingBottom: 24 }, headerTitle: { marginTop: 8, marginBottom: 8 }, headerSubtitle: { textAlign: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventStepHeader.tsx");

export default function EditGuildEventStepHeader(children) {
  const subtitle = children.subtitle;
  const tmp = closure_5();
  let obj = { style: tmp.header, children: null };
  obj = { style: tmp.headerTitle, accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: children.title };
  const items = [React3(Text_Text.Text, obj), ];
  let tmp4Result = null;
  if (null != subtitle) {
    tmp4Result = null;
    if ("" !== subtitle) {
      obj = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default", children: subtitle };
      tmp4Result = React3(Text_Text.Text, obj);
    }
  }
  items[1] = tmp4Result;
  obj.children = items;
  return React4(View, obj);
};