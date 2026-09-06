// === Module 13778: NUFTemplate ===

// Module 13778 (NUFTemplate)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, Image: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: null, title: null, description: null, image: null };
createStyles = { padding: 16, alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.container = createStyles;
createStyles.title = { textAlign: "center", marginBottom: 8 };
createStyles.description = { textAlign: "center", lineHeight: 18, marginBottom: 24 };
createStyles.image = { marginBottom: 24 };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFTemplate.tsx");

export default function NUFActionSheetTemplate(arg0) {
  ({ title, description, imageSrc, onCTAPress, CTALabel } = arg0);
  const tmp = closure_6();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
  const items = [React4(Text_Text.Text, obj), , , ];
  obj = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: description };
  items[1] = React4(Text_Text.Text, obj);
  items[2] = React4(React3, { source: imageSrc, style: tmp.image });
  items[3] = React4(components_Button_Button.Button, { text: CTALabel, size: "md", onPress: onCTAPress, grow: true });
  obj.children = items;
  return hasOwnProperty(React2, obj);
};