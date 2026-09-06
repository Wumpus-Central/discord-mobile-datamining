// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemText.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import TextVariants from "../../../../../discord_common/js/packages/tokens/typography/generated/TextVariants.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemText.tsx",
);

export default function UserSettingsDesignSystemText() {
  let obj = { children: null };
  const token = obj.useToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
  obj = { spacing: nativeDefault.space.PX_24, style: { paddingHorizontal: token }, children: null };
  const obj1 = { title: "Text Variants", hasIcons: false, children: null };
  const TEXT_VARIANT = TextVariants.TEXT_VARIANT;
  obj1.children = TEXT_VARIANT.map((variant) => {
    let tmp = null;
    if ("code" !== variant) {
      let obj = { label: null };
      obj = { variant, children: variant };
      obj.label = jsx(Text_Text.Text, { variant, children: variant }, variant);
      tmp = jsx(TableRow.TableRow, { variant, children: variant }, variant);
    }
    return tmp;
  });
  obj.children = jsx(TableRowGroup.TableRowGroup, { title: "Text Variants", hasIcons: false, children: null });
  obj.children = jsx(Stack_Stack.Stack, {
    spacing: nativeDefault.space.PX_24,
    style: { paddingHorizontal: token },
    children: null,
  });
  return (
    <ScrollView spacing={nativeDefault.space.PX_24} style={{ paddingHorizontal: token }}>
      {null}
    </ScrollView>
  );
}
