// discord_app/modules/safety_hub/native/AppealIngestionExternalLink.tsx
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import Text from "Text" /* 4734 */;
import PressableBase from "PressableBase" /* 5433 */;
import registerAsset from "registerAsset" /* 8147 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { childButton: null, childContainer: null, childButtonText: null, chevron: null };
createCacheKey = { marginBottom: 8, borderRadius: ThemesDefault.radii.xs };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { minHeight: 60, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, paddingVertical: 16, paddingStart: 16, paddingEnd: 8, borderRadius: ThemesDefault.radii.xs };
createCacheKey[2] = { flex: 1, lineHeight: 20 };
const obj1 = { minHeight: 60, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, paddingVertical: 16, paddingStart: 16, paddingEnd: 8, borderRadius: ThemesDefault.radii.xs };
createCacheKey[3] = { color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const obj2 = { color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const result = require("set").fileFinishedImporting("modules/safety_hub/native/AppealIngestionExternalLink.tsx");

export default function AppealIngestionExternalLink(children) {
  ({ url: require, onPress: importDefault } = children);
  const tmp = callback3();
  let obj = {
    style: tmp.childButton,
    accessibilityRole: "button",
    onPress() {
      if (closure_1 != null) {
        tmp();
      }
      closure_1_1(closure_1_2[6]).openURL(closure_0);
    },
    children: null
  };
  obj = { style: tmp.childContainer, children: null };
  obj = { style: tmp.childButtonText, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: children.text };
  const items = [callback(Text.Text, obj), callback(Button.Icon, { source: registerAsset, color: tmp.chevron.color })];
  obj[1] = items;
  obj[3] = callback2(View, obj);
  return callback(PressableBase.PressableHighlight, obj);
};