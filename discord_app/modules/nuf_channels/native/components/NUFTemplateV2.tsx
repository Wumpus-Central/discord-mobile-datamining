// discord_app/modules/nuf_channels/native/components/NUFTemplateV2.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import Text from "../../../../design/components/Text/native/Text.tsx";
import Button from "../../../../design/components/Button/native/Button.native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({
  container: { padding: 16, alignItems: "center" },
  title: { textAlign: "center", marginBottom: 8 },
  description: { textAlign: "center", marginBottom: 46, paddingLeft: 18, paddingRight: 18 },
  illustration: { alignSelf: "stretch", alignItems: "center", marginBottom: 32 },
});
const result = require("set").fileFinishedImporting("modules/nuf_channels/native/components/NUFTemplateV2.tsx");

export default function NUFActionSheetTemplate(arg0) {
  ({ title, illustration, description, onCTAPress, CTALabel } = arg0);
  const tmp = callback3();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.illustration, children: illustration };
  const items = [callback(View, obj), , ,];
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/bold", children: title };
  items[1] = callback(Text.Text, obj);
  items[2] = callback(Text.Text, { style: tmp.description, variant: "text-md/medium", children: description });
  items[3] = callback(Button.Button, { text: CTALabel, onPress: onCTAPress, grow: true });
  obj[1] = items;
  return callback2(View, obj);
}
