// === Module 16196: ? ===

// Module 16196
import Text from "Text" /* 4442 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({ section: { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", textTransform: "none", paddingTop: require("MessageEmbedTypes").SEARCH_LIST_SECTION_TOP_PADDING, paddingHorizontal: 16, paddingBottom: 8 } });
const memoResult = importAllResult.memo((arg0) => {
  ({ title, trailing } = arg0);
  const obj = { style: callback3().section, children: null };
  const items = [callback(Text.Text, { maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: "text-sm/semibold", color: "interactive-text-default", children: title }), trailing];
  obj[1] = items;
  return callback2(View, obj);
});
const result = require("set").fileFinishedImporting("modules/search/native/components/list/SearchListSection.tsx");

export default memoResult;