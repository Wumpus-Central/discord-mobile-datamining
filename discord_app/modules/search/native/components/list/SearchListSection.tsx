import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({ section: { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", textTransform: "none", paddingTop: require("MessageEmbedTypes").SEARCH_LIST_SECTION_TOP_PADDING, paddingHorizontal: 16, paddingBottom: 8 } });
const memoResult = require("noop").memo((arg0) => {
  let title;
  let trailing;
  ({ title, trailing } = arg0);
  const obj = { style: callback3().section, children: null };
  const items = [callback(require(4281) /* Text */.Text, { maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: "text-sm/semibold", color: "interactive-text-default", children: title }), trailing];
  obj[1] = items;
  return callback2(View, obj);
});
const result = require("MessageEmbedTypes").fileFinishedImporting("modules/search/native/components/list/SearchListSection.tsx");

export default memoResult;