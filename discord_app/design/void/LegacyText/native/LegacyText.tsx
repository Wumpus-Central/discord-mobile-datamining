// discord_app/design/void/LegacyText/native/LegacyText.tsx
import { Text } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

const require = arg1;
let closure_4 = createCacheKey.createStyles({ text: { fontFamily: require("ME").Fonts.PRIMARY_MEDIUM, includeFontPadding: false } });
let obj = { fontFamily: require("ME").Fonts.PRIMARY_MEDIUM, includeFontPadding: false };
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  let children;
  let style;
  ({ style, children } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  let obj = require(7810) /* useLegacyTextMigrationHighlight */;
  obj = { ref };
  const legacyTextMigrationHighlight = obj.useLegacyTextMigrationHighlight();
  const merged1 = Object.assign(merged);
  const items = [callback().text, style, legacyTextMigrationHighlight];
  obj.style = items;
  obj.children = children;
  return <Text ref={arg1} />;
});
const result = require("ME").fileFinishedImporting("design/void/LegacyText/native/LegacyText.tsx");

export default forwardRefResult;