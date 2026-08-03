// === Module 11625: DescriptionEllipsis ===

// Module 11625 (DescriptionEllipsis)
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_1;
let obj1;
({ jsx: closure_1, jsxs: obj1 } = jsxProd);
createCacheKey = { topicEllipsis: null, topicEllipsisDot: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, justifyContent: "center", alignItems: "center", flexDirection: "row", borderRadius: require("Themes").radii.xs, marginTop: 4, height: 12, width: 24 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: require("Themes").colors.TEXT_MUTED, borderRadius: 2, margin: 1, height: 4, width: 4 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
obj1 = { backgroundColor: require("Themes").colors.TEXT_MUTED, borderRadius: 2, margin: 1, height: 4, width: 4 };
const result = require("jsxProd").fileFinishedImporting("components_native/common/DescriptionEllipsis.tsx");

export default function DescriptionEllipsis(dotStyle) {
  dotStyle = dotStyle.dotStyle;
  const tmp = createCacheKey();
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