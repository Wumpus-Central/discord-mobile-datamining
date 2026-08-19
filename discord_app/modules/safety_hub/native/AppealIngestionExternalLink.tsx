// === Module 11086: AppealIngestionExternalLink ===

// Module 11086 (AppealIngestionExternalLink)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import _modDef4090 from "module_4090" /* 4090 */;
import Text from "Text" /* 4734 */;
import PressableBase from "PressableBase" /* 5433 */;
import registerAsset from "registerAsset" /* 8147 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { marginBottom: 8, borderRadius: ThemesDefault.radii.xs };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { minHeight: 60, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, paddingVertical: 16, paddingStart: 16, paddingEnd: 8, borderRadius: ThemesDefault.radii.xs };
createCacheKey[2] = { flex: 1, lineHeight: 20 };
createCacheKey[3] = { color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/safety_hub/native/AppealIngestionExternalLink.tsx");

export default function AppealIngestionExternalLink(children) {
  ({ url: require, onPress: importDefault } = children);
  const tmp = callback3();
  const obj = { style: tmp.childButtonText, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: children.text };
  const items = [callback(Text.Text, obj), callback(Button.Icon, { source: registerAsset, color: tmp.chevron.color })];
  obj[1] = items;
  obj[3] = callback2(View, obj);
  return callback(PressableBase.PressableHighlight, obj);
};