// === Module 13319: NUFActionSheetTemplate ===

// Module 13319 (NUFActionSheetTemplate)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4440 */;
import Button from "Button" /* 4879 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
noopAll;
({ View: obj1, Image: c3 } = get_ActivityIndicator);
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, title: null, description: null, image: null };
createCacheKey = { padding: 16, alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center", marginBottom: 8 };
createCacheKey[2] = { textAlign: "center", lineHeight: 18, marginBottom: 24 };
createCacheKey[3] = { marginBottom: 24 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/nuf_channels/native/components/NUFTemplate.tsx");

export default function NUFActionSheetTemplate(arg0) {
  ({ title, description, imageSrc, onCTAPress, CTALabel } = arg0);
  const tmp = callback3();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
  const items = [callback(Text.Text, obj), , , ];
  obj = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: description };
  items[1] = callback(Text.Text, obj);
  items[2] = callback(closure_3, { source: imageSrc, style: tmp.image });
  items[3] = callback(Button.Button, { text: CTALabel, size: "md", onPress: onCTAPress, grow: true });
  obj[1] = items;
  return callback2(closure_2, obj);
};