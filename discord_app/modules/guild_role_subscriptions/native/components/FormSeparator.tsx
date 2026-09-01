// === Module 14813: FormSeparator ===

// Module 14813 (FormSeparator)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

noopAll;
createCacheKey = { container: { alignSelf: "stretch" }, margins: { marginTop: 16 }, separator: null };
createCacheKey = { width: "100%", height: 1, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[2] = createCacheKey;
let closure_2 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormSeparator.tsx");

export default function FormSeparator(arg0) {
  ({ style, withoutMargins } = arg0);
  const tmp = callback();
  const items = [tmp.container, , ];
  let margins;
  if (!withoutMargins) {
    margins = tmp.margins;
  }
  obj = { style: items, children: tmp2(tmp3, obj) };
  items[1] = margins;
  items[2] = style;
  obj = { style: tmp.separator };
  return <View style={tmp.separator} />;
};