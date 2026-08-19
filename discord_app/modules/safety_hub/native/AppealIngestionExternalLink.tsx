// discord_app/modules/safety_hub/native/AppealIngestionExternalLink.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../design/void/native.tsx";
import _modDef4090 from "../../../lib/native/Linking.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import PressableBase from "../../../design/void/Pressables/native/Pressables.tsx";
import registerAsset from "../../../../_runtime/08147_registerAsset.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
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