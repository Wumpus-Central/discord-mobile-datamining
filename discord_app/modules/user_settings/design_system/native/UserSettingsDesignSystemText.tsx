// === Module 16068: UserSettingsDesignSystemText ===

// Module 16068 (UserSettingsDesignSystemText)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4457 */;
import Text_Text from "Text/Text" /* 4752 */;
import TextVariants from "TextVariants" /* 4753 */;
import Stack_Stack from "Stack/Stack" /* 5184 */;
import TableRow from "TableRow" /* 5822 */;
import TableRowGroup from "TableRowGroup" /* 5904 */;
import noop from "module_19" /* 19 */;

require = fn;
const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemText.tsx");

export default function UserSettingsDesignSystemText() {
  let obj2 = { children: null };
  const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
  const obj3 = { spacing: nativeDefault.space.PX_24, style: { paddingHorizontal: token }, children: null };
  const obj4 = { title: "Text Variants", hasIcons: false, children: null };
  const TEXT_VARIANT = TextVariants.TEXT_VARIANT;
  obj4.children = TEXT_VARIANT.map((variant) => {
    let tmp = null;
    if ("code" !== variant) {
      const obj = { label: null };
      const obj2 = { variant, children: variant };
      obj.label = jsx(Text_Text.Text, { variant, children: variant }, variant);
      tmp = jsx(TableRow.TableRow, { label: null }, variant);
    }
    return tmp;
  });
  obj3.children = jsx(TableRowGroup.TableRowGroup, { title: "Text Variants", hasIcons: false, children: null });
  obj2.children = jsx(Stack_Stack.Stack, { spacing: nativeDefault.space.PX_24, style: { paddingHorizontal: token }, children: null });
  return <ScrollView>{null}</ScrollView>;
};