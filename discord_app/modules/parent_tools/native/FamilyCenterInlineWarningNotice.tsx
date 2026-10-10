// === Module 15130: FamilyCenterInlineWarningNotice ===

// Module 15130 (FamilyCenterInlineWarningNotice)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5088 */;
import WarningIcon from "WarningIcon" /* 7571 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_FEEDBACK_WARNING, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING }, text: null };
let obj3 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_FEEDBACK_WARNING, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING };
obj2.text = { flex: 1, paddingRight: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { flex: 1, paddingRight: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterInlineWarningNotice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterInlineWarningNotice(arg0) {
  const cResult = c.c(10);
  ({ text, style } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === style) {
    if (cResult[1] === tmp4.container) {
      let tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { size: "sm", color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
      const tmp10 = React4(WarningIcon.WarningIcon, obj2);
      cResult[3] = tmp10;
      let tmp7 = tmp10;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] === tmp4.text) {
      if (cResult[5] === text) {
        let tmp11 = cResult[6];
      }
      if (cResult[7] === tmp5) {
        if (cResult[8] === tmp11) {
          let tmp14 = cResult[9];
        }
        return tmp14;
      }
      const obj3 = { style: tmp5, children: null };
      const items = [tmp7, tmp11];
      obj3.children = items;
      const tmp17 = hasOwnProperty(View, obj3);
      cResult[7] = tmp5;
      cResult[8] = tmp11;
      cResult[9] = tmp17;
      tmp14 = tmp17;
    }
    const obj4 = { variant: "text-sm/medium", color: "text-strong", style: tmp4.text, children: text };
    const tmp13 = React4(Text_Text.Text, obj4);
    cResult[4] = tmp4.text;
    cResult[5] = text;
    cResult[6] = tmp13;
    tmp11 = tmp13;
  }
  const items1 = [tmp4.container, style];
  cResult[0] = style;
  cResult[1] = tmp4.container;
  cResult[2] = items1;
  tmp5 = items1;
}) : (function FamilyCenterInlineWarningNotice(arg0) {
  ({ text, style } = arg0);
  const tmp = closure_6();
  const obj = { style: null, children: null };
  const items = [tmp.container, style];
  obj.style = items;
  const items1 = [React4(WarningIcon.WarningIcon, { size: "sm", color: nativeDefault.colors.ICON_FEEDBACK_WARNING }), React4(Text_Text.Text, { variant: "text-sm/medium", color: "text-strong", style: tmp.text, children: text })];
  obj.children = items1;
  return hasOwnProperty(View, obj);
});