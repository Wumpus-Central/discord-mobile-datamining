// === Module 18284: UserSettingsDesignSystemText ===

// Module 18284 (UserSettingsDesignSystemText)
import nativeDefault from "native" /* 575 */;
import useToken from "useToken" /* 5839 */;
import Text_Text from "Text/Text" /* 5866 */;
import TextVariants from "TextVariants" /* 5867 */;
import Stack_Stack from "Stack/Stack" /* 6274 */;
import TableRow from "TableRow" /* 7379 */;
import TableRowGroup from "TableRowGroup" /* 7680 */;
import noop from "module_19" /* 19 */;

require = fn;
const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemText.tsx");

export default function UserSettingsDesignSystemText() {
  const obj2 = { children: null };
  const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
  const obj3 = { spacing: nativeDefault.space.PX_24, style: { paddingHorizontal: token }, children: null };
  const obj4 = { title: "Text Variants", hasIcons: false, children: null };
  const TEXT_VARIANT = TextVariants.TEXT_VARIANT;
  obj4.children = TEXT_VARIANT.map((variant) => {
    const obj = { label: jsx(Text_Text.Text, { variant, children: variant }, variant) };
    return jsx(TableRow.TableRow, { label: jsx(Text_Text.Text, { variant, children: variant }, variant) }, variant);
  });
  obj3.children = jsx(TableRowGroup.TableRowGroup, { title: "Text Variants", hasIcons: false, children: null });
  obj2.children = jsx(Stack_Stack.Stack, { spacing: nativeDefault.space.PX_24, style: { paddingHorizontal: token }, children: null });
  return <ScrollView>{null}</ScrollView>;
};