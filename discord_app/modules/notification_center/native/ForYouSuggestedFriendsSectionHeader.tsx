// discord_app/modules/notification_center/native/ForYouSuggestedFriendsSectionHeader.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { container: null, noDivider: null, text: null };
createCacheKey = { borderTopWidth: 1, borderTopColor: require("Themes").colors.BORDER_SUBTLE, marginTop: 12, marginBottom: 8, paddingHorizontal: 24, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderTopWidth: 0, marginTop: 0 };
createCacheKey[2] = { marginTop: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { marginTop: require("Themes").space.PX_16 };
const result = require("jsxProd").fileFinishedImporting("modules/notification_center/native/ForYouSuggestedFriendsSectionHeader.tsx");

export default function ForYouSuggestedFriendsSectionHeader(showDivider) {
  showDivider = showDivider.showDivider;
  const tmp = createCacheKey();
  const items = [tmp.container, ];
  let noDivider = !showDivider;
  if (!showDivider) {
    noDivider = tmp.noDivider;
  }
  let obj = { style: items, children: null };
  items[1] = noDivider;
  obj = { style: tmp.text, color: "text-muted", variant: "text-sm/semibold", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl.string(require(1236) /* getSystemLocale */.t["1uAmCw"]);
  obj[1] = jsx(require(4281) /* Text */.Text, { style: tmp.text, color: "text-muted", variant: "text-sm/semibold", children: null });
  return <View style={tmp.text} color="text-muted" variant="text-sm/semibold">{null}</View>;
};