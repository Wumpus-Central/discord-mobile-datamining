// === Module 13769: NUFTemplateV2 ===

// Module 13769 (NUFTemplateV2)
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles({ container: { padding: 16, alignItems: "center" }, title: { textAlign: "center", marginBottom: 8 }, description: { textAlign: "center", marginBottom: 46, paddingLeft: 18, paddingRight: 18 }, illustration: { alignSelf: "stretch", alignItems: "center", marginBottom: 32 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFTemplateV2.tsx");

export default function NUFActionSheetTemplate(arg0) {
  ({ title, illustration, description, onCTAPress, CTALabel } = arg0);
  const tmp = closure_5();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.illustration, children: illustration };
  const items = [React3(View, obj), , , ];
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/bold", children: title };
  items[1] = React3(Text_Text.Text, obj);
  items[2] = React3(Text_Text.Text, { style: tmp.description, variant: "text-md/medium", children: description });
  items[3] = React3(components_Button_Button.Button, { text: CTALabel, onPress: onCTAPress, grow: true });
  obj.children = items;
  return React4(View, obj);
};