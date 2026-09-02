// === Module 10232: Timestamp ===

// Module 10232 (Timestamp)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import itemsDefault from "items" /* 10233 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
noopAll;
createCacheKey = { timestamp: null };
createCacheKey = { color: ThemesDefault.colors.TEXT_DEFAULT, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[0] = createCacheKey;
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/markup/Timestamp.native.tsx");

export default function Timestamp(node) {
  node = node.node;
  const tmp = callback();
  let style = tmp.timestamp;
  if (style == null) {
    style = node.style;
  }
  const tmp2 = itemsDefault(node);
  const tmp3 = jsx;
  return tmp3(node(1296).LegacyText, {
    style,
    onPress() {
      let obj = closure_1_1(closure_1_2[6]);
      obj = { key: "TIMESTAMP", content: node.full };
      obj.open(obj);
    },
    children: itemsDefault(node)
  });
};