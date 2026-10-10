// === Module 16109: UserSettingsDesignSystemText ===

// Module 16109 (UserSettingsDesignSystemText)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4818 */;
import Text_Text from "Text/Text" /* 5088 */;
import TextVariants from "TextVariants" /* 5089 */;
import Stack_Stack from "Stack/Stack" /* 5377 */;
import TableRow from "TableRow" /* 6179 */;
import TableRowGroup from "TableRowGroup" /* 6264 */;
import noop from "module_19" /* 19 */;

require = fn;
const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemText.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserSettingsDesignSystemText() {
  const cResult = c.c(5);
  const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
  if (cResult[0] !== token) {
    const obj3 = { paddingHorizontal: token };
    cResult[0] = token;
    cResult[1] = obj3;
    let tmp6 = obj3;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
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
    const tmp9 = jsx(TableRowGroup.TableRowGroup, { title: "Text Variants", hasIcons: false, children: null });
    cResult[2] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== tmp6) {
    const obj5 = { children: null };
    const obj6 = { spacing: nativeDefault.space.PX_24, style: tmp6, children: tmp7 };
    obj5.children = jsx(Stack_Stack.Stack, { spacing: nativeDefault.space.PX_24, style: tmp6, children: tmp7 });
    const tmp13 = <ScrollView>{null}</ScrollView>;
    cResult[3] = tmp6;
    cResult[4] = tmp13;
    let tmp10 = tmp13;
  } else {
    tmp10 = cResult[4];
  }
  return tmp10;
}) : (function UserSettingsDesignSystemText() {
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
});