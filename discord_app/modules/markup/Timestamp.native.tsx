// discord_app/modules/markup/Timestamp.native.tsx
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { timestamp: null };
createCacheKey = { color: require("Themes").colors.TEXT_DEFAULT, backgroundColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/markup/Timestamp.native.tsx");

export default function Timestamp(node) {
  node = node.node;
  const tmp = createCacheKey();
  let style = tmp.timestamp;
  if (style == null) {
    style = node.style;
  }
  const tmp2 = require("useFormattedTimestamp.tsx")(node);
  const tmp3 = jsx;
  return tmp3(node(1297).LegacyText, {
    style,
    onPress() {
      let obj = outer1_1(outer1_2[6]);
      obj = { key: "TIMESTAMP", content: node.full };
      obj.open(obj);
    },
    children: require("useFormattedTimestamp.tsx")(node)
  });
};