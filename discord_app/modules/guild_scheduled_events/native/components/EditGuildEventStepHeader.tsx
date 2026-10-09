// === Module 8619: EditGuildEventStepHeader ===

// Module 8619 (EditGuildEventStepHeader)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 5087 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5091);
let closure_5 = createStyles.createStyles({ header: { alignItems: "center", paddingBottom: 24 }, headerTitle: { marginTop: 8, marginBottom: 8 }, headerSubtitle: { textAlign: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventStepHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function EditGuildEventStepHeader(arg0) {
  const cResult = c.c(10);
  ({ title, subtitle } = arg0);
  const tmp4 = closure_5();
  if (cResult[0] === tmp4.headerTitle) {
    if (cResult[1] === title) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === tmp4.headerSubtitle) {
      if (cResult[4] === subtitle) {
        let tmp7 = cResult[5];
      }
      if (cResult[6] === tmp4.header) {
        if (cResult[7] === tmp5) {
          if (cResult[8] === tmp7) {
            let tmp11 = cResult[9];
          }
          return tmp11;
        }
      }
      const obj2 = { style: tmp4.header, children: null };
      const items = [tmp5, tmp7];
      obj2.children = items;
      const tmp14 = React4(View, obj2);
      cResult[6] = tmp4.header;
      cResult[7] = tmp5;
      cResult[8] = tmp7;
      cResult[9] = tmp14;
      tmp11 = tmp14;
    }
    let tmp9 = null;
    if (null != subtitle) {
      tmp9 = null;
      if ("" !== subtitle) {
        const obj3 = { style: tmp4.headerSubtitle, variant: "text-sm/medium", color: "text-default", children: subtitle };
        tmp9 = React3(Text_Text.Text, obj3);
      }
    }
    cResult[3] = tmp4.headerSubtitle;
    cResult[4] = subtitle;
    cResult[5] = tmp9;
    tmp7 = tmp9;
  }
  const tmp6 = React3(Text_Text.Text, { style: tmp4.headerTitle, accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: title });
  cResult[0] = tmp4.headerTitle;
  cResult[1] = title;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  const obj4 = { style: tmp4.headerTitle, accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: title };
}) : (function EditGuildEventStepHeader(children) {
  const subtitle = children.subtitle;
  const tmp = closure_5();
  const obj = { style: tmp.header, children: null };
  const items = [React3(Text_Text.Text, { style: tmp.headerTitle, accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: children.title }), ];
  let tmp4Result = null;
  if (null != subtitle) {
    tmp4Result = null;
    if ("" !== subtitle) {
      const obj3 = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default", children: subtitle };
      tmp4Result = React3(Text_Text.Text, obj3);
    }
  }
  items[1] = tmp4Result;
  obj.children = items;
  return React4(View, obj);
});