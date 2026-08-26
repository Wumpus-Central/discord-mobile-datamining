// === Module 15872: ForYouRecentActivitySectionHeader ===

// Module 15872 (ForYouRecentActivitySectionHeader)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4440 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
noopAll;
createCacheKey = { container: null, textHeader: null };
createCacheKey = { marginTop: ThemesDefault.space.PX_8, marginBottom: ThemesDefault.space.PX_8, paddingHorizontal: ThemesDefault.space.PX_24 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: ThemesDefault.space.PX_8 };
let closure_4 = createCacheKey.createStyles(createCacheKey);
const obj1 = { marginTop: ThemesDefault.space.PX_8 };
const result = require("set").fileFinishedImporting("modules/notification_center/native/ForYouRecentActivitySectionHeader.tsx");

export const ForYouRecentActivitySectionHeader = function ForYouRecentActivitySectionHeader() {
  const tmp = callback();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.textHeader, color: "text-muted", variant: "text-sm/semibold", accessibilityRole: "header", children: null };
  const intl = getSystemLocale.intl;
  obj[4] = intl.string(getSystemLocale.t.yM9Krm);
  obj[1] = jsx(Text.Text, { style: tmp.textHeader, color: "text-muted", variant: "text-sm/semibold", accessibilityRole: "header", children: null });
  return <View style={tmp.textHeader} color="text-muted" variant="text-sm/semibold" accessibilityRole="header">{null}</View>;
};