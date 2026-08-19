// discord_app/components_native/common/DescriptionEllipsis.tsx
import noopAll from "../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

noopAll;
({ jsx: closure_1, jsxs: obj1 } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, justifyContent: "center", alignItems: "center", flexDirection: "row", borderRadius: ThemesDefault.radii.xs, marginTop: 4, height: 12, width: 24 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: ThemesDefault.colors.TEXT_MUTED, borderRadius: 2, margin: 1, height: 4, width: 4 };
let closure_3 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("components_native/common/DescriptionEllipsis.tsx");

export default function DescriptionEllipsis(dotStyle) {
  dotStyle = dotStyle.dotStyle;
  const tmp = callback3();
  const obj = { style: items, children: null };
  items = [tmp.topicEllipsis, dotStyle.style];
  const items1 = [tmp.topicEllipsisDot, dotStyle];
  const items2 = [callback(View, { style: items1 }), , ];
  const items3 = [tmp.topicEllipsisDot, dotStyle];
  items2[1] = callback(View, { style: items3 });
  const items4 = [tmp.topicEllipsisDot, dotStyle];
  items2[2] = callback(View, { style: items4 });
  obj[1] = items2;
  return callback2(View, obj);
};