// discord_app/modules/nuf_channels/native/components/NUFTemplate.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import Button from "../../../../design/components/Button/native/Button.native.tsx";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

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