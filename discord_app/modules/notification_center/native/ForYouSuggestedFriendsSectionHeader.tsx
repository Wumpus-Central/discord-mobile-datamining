// === Module 15694: ForYouSuggestedFriendsSectionHeader ===

// Module 15694 (ForYouSuggestedFriendsSectionHeader)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
noopAll;
createCacheKey = { container: null, noDivider: null, text: null };
createCacheKey = { borderTopWidth: 1, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE, marginTop: 12, marginBottom: 8, paddingHorizontal: 24, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderTopWidth: 0, marginTop: 0 };
createCacheKey[2] = { marginTop: ThemesDefault.space.PX_16 };
let closure_4 = createCacheKey.createStyles(createCacheKey);
const obj1 = { marginTop: ThemesDefault.space.PX_16 };
const result = require("set").fileFinishedImporting("modules/notification_center/native/ForYouSuggestedFriendsSectionHeader.tsx");

export default function ForYouSuggestedFriendsSectionHeader(showDivider) {
  showDivider = showDivider.showDivider;
  const tmp = callback();
  const items = [tmp.container, ];
  let noDivider = !showDivider;
  if (!showDivider) {
    noDivider = tmp.noDivider;
  }
  let obj = { style: items, children: null };
  items[1] = noDivider;
  obj = { style: tmp.text, color: "text-muted", variant: "text-sm/semibold", children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t["1uAmCw"]);
  obj[1] = jsx(Text.Text, { style: tmp.text, color: "text-muted", variant: "text-sm/semibold", children: null });
  return <View style={tmp.text} color="text-muted" variant="text-sm/semibold">{null}</View>;
};