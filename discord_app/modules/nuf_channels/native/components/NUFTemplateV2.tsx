// === Module 15421: NUFTemplateV2 ===

// Module 15421 (NUFTemplateV2)
import Text_Text from "Text/Text" /* 5781 */;
import components_Button_Button from "components/Button/Button" /* 5788 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5170);
let closure_5 = createStyles.createStyles({ container: { padding: 16, alignItems: "center" }, title: { textAlign: "center", marginBottom: 8 }, description: { textAlign: "center", marginBottom: 46, paddingLeft: 18, paddingRight: 18 }, illustration: { alignSelf: "stretch", alignItems: "center", marginBottom: 32 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFTemplateV2.tsx");

export default function NUFActionSheetTemplate(arg0) {
  ({ title, illustration, description, onCTAPress, CTALabel } = arg0);
  const tmp = closure_5();
  const obj = { style: tmp.container, children: null };
  items = [React3(View, { style: tmp.illustration, children: illustration }), React3(Text_Text.Text, { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/semibold", children: title }), React3(Text_Text.Text, { style: tmp.description, variant: "body-md/medium", children: description }), React3(components_Button_Button.Button, { text: CTALabel, onPress: onCTAPress, grow: true })];
  obj.children = items;
  return React4(View, obj);
};