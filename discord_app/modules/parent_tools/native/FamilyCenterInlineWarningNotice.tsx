// === Module 15152: FamilyCenterInlineWarningNotice ===

// Module 15152 (FamilyCenterInlineWarningNotice)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4752 */;
import WarningIcon from "WarningIcon" /* 8866 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4756);
const obj2 = { container: { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_FEEDBACK_WARNING, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING }, text: null };
const obj3 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_FEEDBACK_WARNING, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING };
obj2.text = { flex: 1, paddingRight: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterInlineWarningNotice.tsx");

export default function FamilyCenterInlineWarningNotice(arg0) {
  ({ text, style } = arg0);
  const tmp = closure_6();
  const obj = { style: null, children: null };
  const items = [tmp.container, style];
  obj.style = items;
  const items1 = [React4(WarningIcon.WarningIcon, { size: "sm", color: nativeDefault.colors.ICON_FEEDBACK_WARNING }), React4(Text_Text.Text, { variant: "text-sm/medium", color: "text-strong", style: tmp.text, children: text })];
  obj.children = items1;
  return hasOwnProperty(View, obj);
};