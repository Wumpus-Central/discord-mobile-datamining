// === Module 10064: Timestamp ===

// Module 10064 (Timestamp)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import dispatcherDefault from "dispatcher" /* 4094 */;
import itemsDefault from "items" /* 10065 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
noopAll;
const createCacheKey = { color: ThemesDefault.colors.TEXT_DEFAULT, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[0] = createCacheKey;
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/markup/Timestamp.native.tsx");

export default function Timestamp(node) {
  node = node.node;
  const tmp = callback();
  let style = tmp.timestamp;
  if (style == null) {
    style = node.style;
  }
  const tmp2 = itemsDefault(node);
  return jsx(node(1297).LegacyText, {
    style,
    onPress() {
      const obj = { key: "TIMESTAMP", content: node.full };
      obj.open(obj);
    },
    children: itemsDefault(node)
  });
};