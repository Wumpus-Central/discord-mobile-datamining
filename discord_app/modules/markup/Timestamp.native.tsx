// discord_app/modules/markup/Timestamp.native.tsx
import noopAll from "../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import dispatcherDefault from "../toast/native/ToastActionCreators.tsx";
import itemsDefault from "useFormattedTimestamp.tsx";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";
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