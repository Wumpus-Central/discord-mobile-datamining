// === Module 15331: NUFTemplate ===

// Module 15331 (NUFTemplate)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5747 */;
import components_Button_Button from "components/Button/Button" /* 5754 */;
import FastImageDefault from "FastImage" /* 5837 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5141);
const obj2 = { container: { padding: 16, alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, title: { textAlign: "center", marginBottom: 8 }, description: { textAlign: "center", lineHeight: 18, marginBottom: 24 }, image: { marginBottom: 24 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFTemplate.tsx");

export default function NUFActionSheetTemplate(arg0) {
  ({ title, description, imageSrc, onCTAPress, CTALabel } = arg0);
  const tmp = closure_6();
  const obj = { style: tmp.container, children: null };
  items = [React4(Text_Text.Text, { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: title }), React4(Text_Text.Text, { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: description }), React4(FastImageDefault, { source: imageSrc, style: tmp.image }), React4(components_Button_Button.Button, { text: CTALabel, size: "md", onPress: onCTAPress, grow: true })];
  obj.children = items;
  return hasOwnProperty(View, obj);
};