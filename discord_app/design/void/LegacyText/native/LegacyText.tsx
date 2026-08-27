// === Module 8323: ? ===

// Module 8323
import useLegacyTextMigrationHighlight from "useLegacyTextMigrationHighlight" /* 8324 */;
import { Text } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
let closure_4 = createCacheKey.createStyles({ text: { fontFamily: require("ME").Fonts.PRIMARY_MEDIUM, includeFontPadding: false } });
let obj = { fontFamily: require("ME").Fonts.PRIMARY_MEDIUM, includeFontPadding: false };
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  ({ style, children } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  let obj = useLegacyTextMigrationHighlight;
  obj = { ref };
  const legacyTextMigrationHighlight = obj.useLegacyTextMigrationHighlight();
  const merged1 = Object.assign(merged);
  const items = [callback().text, style, legacyTextMigrationHighlight];
  obj.style = items;
  obj.children = children;
  return <Text ref={arg1} />;
});
const result = require("set").fileFinishedImporting("design/void/LegacyText/native/LegacyText.tsx");

export default forwardRefResult;