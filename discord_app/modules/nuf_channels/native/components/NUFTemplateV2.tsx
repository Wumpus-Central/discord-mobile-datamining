// === Module 12648: NUFActionSheetTemplate ===

// Module 12648 (NUFActionSheetTemplate)
import noopAll from "noop" /* 19 */;
import Text from "Text" /* 4734 */;
import Button from "Button" /* 4745 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({ container: { padding: 16, alignItems: "center" }, title: { textAlign: "center", marginBottom: 8 }, description: { textAlign: "center", marginBottom: 46, paddingLeft: 18, paddingRight: 18 }, illustration: { alignSelf: "stretch", alignItems: "center", marginBottom: 32 } });
const result = require("set").fileFinishedImporting("modules/nuf_channels/native/components/NUFTemplateV2.tsx");

export default function NUFActionSheetTemplate(arg0) {
  ({ title, illustration, description, onCTAPress, CTALabel } = arg0);
  const tmp = callback3();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.illustration, children: illustration };
  const items = [callback(View, obj), , , ];
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/bold", children: title };
  items[1] = callback(Text.Text, obj);
  items[2] = callback(Text.Text, { style: tmp.description, variant: "text-md/medium", children: description });
  items[3] = callback(Button.Button, { text: CTALabel, onPress: onCTAPress, grow: true });
  obj[1] = items;
  return callback2(View, obj);
};