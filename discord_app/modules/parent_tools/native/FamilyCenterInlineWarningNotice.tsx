// discord_app/modules/parent_tools/native/FamilyCenterInlineWarningNotice.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import WarningIcon from "../../../design/components/Icon/native/redesign/generated/WarningIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: null, text: null };
createStyles = {
  flexDirection: "row",
  alignItems: "flex-start",
  gap: nativeDefault.space.PX_8,
  padding: nativeDefault.space.PX_12,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_FEEDBACK_WARNING,
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING,
};
createStyles.container = createStyles;
createStyles.text = { flex: 1, paddingRight: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterInlineWarningNotice.tsx");

export default function FamilyCenterInlineWarningNotice(arg0) {
  ({ text, style } = arg0);
  const tmp = closure_6();
  let obj = { style: null, children: null };
  const items = [tmp.container, style];
  obj.style = items;
  obj = { size: "sm", color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
  const items1 = [React4(WarningIcon.WarningIcon, obj)];
  obj = { variant: "text-sm/medium", color: "text-strong", style: tmp.text, children: text };
  items1[1] = React4(Text_Text.Text, obj);
  obj.children = items1;
  return hasOwnProperty(View, obj);
}
