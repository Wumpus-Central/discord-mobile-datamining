// === Module 12204: DescriptionEllipsis ===

// Module 12204 (DescriptionEllipsis)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

noopAll;
({ jsx: closure_1, jsxs: obj1 } = jsxProd);
createCacheKey = { topicEllipsis: null, topicEllipsisDot: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, justifyContent: "center", alignItems: "center", flexDirection: "row", borderRadius: ThemesDefault.radii.xs, marginTop: 4, height: 12, width: 24 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: ThemesDefault.colors.TEXT_MUTED, borderRadius: 2, margin: 1, height: 4, width: 4 };
let closure_3 = createCacheKey.createStyles(createCacheKey);
obj1 = { backgroundColor: ThemesDefault.colors.TEXT_MUTED, borderRadius: 2, margin: 1, height: 4, width: 4 };
const result = require("set").fileFinishedImporting("components_native/common/DescriptionEllipsis.tsx");

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