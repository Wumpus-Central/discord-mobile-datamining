// discord_app/modules/safety_hub/native/AppealIngestionExternalLink.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../_runtime/07971_registerAsset.js";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { Button } from "../../../design/void/native.tsx";
import { PressableBase } from "../../../design/void/Pressables/native/Pressables.tsx";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { childButton: null, childContainer: null, childButtonText: null, chevron: null };
createCacheKey = { marginBottom: 8, borderRadius: require("Themes").radii.xs };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { minHeight: 60, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, paddingVertical: 16, paddingStart: 16, paddingEnd: 8, borderRadius: require("Themes").radii.xs };
createCacheKey[2] = { flex: 1, lineHeight: 20 };
let obj1 = { minHeight: 60, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, paddingVertical: 16, paddingStart: 16, paddingEnd: 8, borderRadius: require("Themes").radii.xs };
createCacheKey[3] = { color: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj2 = { color: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
const result = require("jsxProd").fileFinishedImporting("modules/safety_hub/native/AppealIngestionExternalLink.tsx");

export default function AppealIngestionExternalLink(children) {
  let importDefault;
  let require;
  ({ url: require, onPress: importDefault } = children);
  const tmp = createCacheKey();
  let obj = {
    style: tmp.childButton,
    accessibilityRole: "button",
    onPress() {
      if (closure_1 != null) {
        tmp();
      }
      outer1_1(outer1_2[6]).openURL(closure_0);
    },
    children: null
  };
  obj = { style: tmp.childContainer, children: null };
  obj = { style: tmp.childButtonText, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: children.text };
  const items = [callback(Text.Text, obj), ];
  const obj1 = { source: null, color: null };
  obj1[0] = registerAsset;
  obj1[1] = tmp.chevron.color;
  items[1] = callback(Button.Icon, obj1);
  obj[1] = items;
  obj[3] = callback2(View, obj);
  return callback(PressableBase.PressableHighlight, obj);
};