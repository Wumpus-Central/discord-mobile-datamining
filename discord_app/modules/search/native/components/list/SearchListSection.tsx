// discord_app/modules/search/native/components/list/SearchListSection.tsx
import Text from "../../../../../design/components/Text/native/Text.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../../_runtime/00019_noop.js";

require = fn;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({ section: { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", textTransform: "none", paddingTop: require("MessageEmbedTypes").SEARCH_LIST_SECTION_TOP_PADDING, paddingHorizontal: 16, paddingBottom: 8 } });
const memoResult = importAllResult.memo((arg0) => {
  ({ title, trailing } = arg0);
  const obj = { style: callback3().section, children: null };
  const items = [callback(Text.Text, { maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: "text-sm/semibold", color: "interactive-text-default", children: title }), trailing];
  obj[1] = items;
  return callback2(View, obj);
});
const result = require("obj132").fileFinishedImporting("modules/search/native/components/list/SearchListSection.tsx");

export default memoResult;