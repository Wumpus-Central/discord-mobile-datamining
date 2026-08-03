// === Module 15575: ? ===

// Module 15575
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let obj = { imageContainer: null };
obj = { flex: 1, borderRadius: require("Themes").radii.xs, overflow: "hidden", backgroundColor: require("Themes").colors.BORDER_SUBTLE };
obj[0] = obj;
let closure_2 = createCacheKey.createStyles(obj);
const memoResult = require("noop").memo((arg0) => {
  let height;
  let style;
  let width;
  ({ width, height, style } = arg0);
  const obj = { style: null };
  const items = [{ width, height }, callback().imageContainer, style];
  obj[0] = items;
  return <View style={null} />;
});
const result = require("jsxProd").fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/GridItemPlaceholder.tsx");

export default memoResult;