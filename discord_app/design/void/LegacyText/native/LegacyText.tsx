// discord_app/design/void/LegacyText/native/LegacyText.tsx
import useLegacyTextMigrationHighlight from "useLegacyTextMigrationHighlight.tsx";
import { Text } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";

require = arg1;
let closure_4 = createCacheKey.createStyles({
  text: { fontFamily: require("ME").Fonts.PRIMARY_MEDIUM, includeFontPadding: false },
});
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
