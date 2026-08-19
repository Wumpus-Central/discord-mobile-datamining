// === Module 8115: ? ===

// Module 8115
import useLegacyTextMigrationHighlight from "useLegacyTextMigrationHighlight" /* 8116 */;
import { Text } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import importAllResult from "noop" /* 19 */;

require = fn;
let closure_4 = createCacheKey.createStyles({ text: { fontFamily: require("ME").Fonts.PRIMARY_MEDIUM, includeFontPadding: false } });
let obj = { fontFamily: require("ME").Fonts.PRIMARY_MEDIUM, includeFontPadding: false };
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  ({ style, children } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const obj = { ref };
  const legacyTextMigrationHighlight = obj.useLegacyTextMigrationHighlight();
  const merged1 = Object.assign(merged);
  const items = [callback().text, style, legacyTextMigrationHighlight];
  obj.style = items;
  obj.children = children;
  return <Text ref={ref} />;
});
const result = require("obj132").fileFinishedImporting("design/void/LegacyText/native/LegacyText.tsx");

export default forwardRefResult;