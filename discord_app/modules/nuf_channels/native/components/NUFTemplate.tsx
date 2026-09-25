// === Module 13306: NUFTemplate ===

// Module 13306 (NUFTemplate)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4825 */;
import components_Button_Button from "components/Button/Button" /* 5274 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, Image: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4829);
const obj2 = { container: { padding: 16, alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, title: { textAlign: "center", marginBottom: 8 }, description: { textAlign: "center", lineHeight: 18, marginBottom: 24 }, image: { marginBottom: 24 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFTemplate.tsx");

export default function NUFActionSheetTemplate(arg0) {
  ({ title, description, imageSrc, onCTAPress, CTALabel } = arg0);
  const tmp = closure_6();
  const obj = { style: tmp.container, children: null };
  const items = [React4(Text_Text.Text, { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title }), React4(Text_Text.Text, { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: description }), React4(React3, { source: imageSrc, style: tmp.image }), React4(components_Button_Button.Button, { text: CTALabel, size: "md", onPress: onCTAPress, grow: true })];
  obj.children = items;
  return hasOwnProperty(React2, obj);
};