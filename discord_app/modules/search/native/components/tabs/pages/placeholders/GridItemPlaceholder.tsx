// === Module 15969: ? ===

// Module 15969
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;
import importAllResult from "noop" /* 19 */;

let obj = { imageContainer: null };
obj = { flex: 1, borderRadius: ThemesDefault.radii.xs, overflow: "hidden", backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
obj[0] = obj;
let closure_2 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((arg0) => {
  ({ width, height, style } = arg0);
  const obj = { style: null };
  const items = [{ width, height }, callback().imageContainer, style];
  obj[0] = items;
  return <View style={null} />;
});
const result = require("set").fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/GridItemPlaceholder.tsx");

export default memoResult;