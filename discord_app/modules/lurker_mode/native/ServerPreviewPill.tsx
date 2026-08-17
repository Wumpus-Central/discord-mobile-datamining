// discord_app/modules/lurker_mode/native/ServerPreviewPill.tsx
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
noopAll;
createCacheKey = { pill: null, text: null };
createCacheKey = { paddingHorizontal: 10, paddingVertical: ThemesDefault.space.PX_4, borderRadius: ThemesDefault.radii.lg, backgroundColor: ThemesDefault.colors.WHITE };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { color: ThemesDefault.colors.BLACK, textTransform: "uppercase", letterSpacing: 0.5 };
let closure_4 = createCacheKey.createStyles(createCacheKey);
const obj1 = { color: ThemesDefault.colors.BLACK, textTransform: "uppercase", letterSpacing: 0.5 };
const result = require("set").fileFinishedImporting("modules/lurker_mode/native/ServerPreviewPill.tsx");

export default function ServerPreviewPill() {
  const tmp = callback();
  let obj = { style: tmp.pill, accessibilityRole: "text", children: null };
  obj = { variant: "text-xs/bold", style: tmp.text, children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.KNhFgD);
  obj[2] = jsx(Text.Text, { variant: "text-xs/bold", style: tmp.text, children: null });
  return <View variant="text-xs/bold" style={tmp.text}>{null}</View>;
};