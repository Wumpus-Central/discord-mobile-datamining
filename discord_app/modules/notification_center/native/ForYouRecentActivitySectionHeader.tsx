// discord_app/modules/notification_center/native/ForYouRecentActivitySectionHeader.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";

const require = arg1;
createCacheKey = { container: null, textHeader: null };
createCacheKey = { marginTop: require("Themes").space.PX_8, marginBottom: require("Themes").space.PX_8, paddingHorizontal: require("Themes").space.PX_24 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: require("Themes").space.PX_8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { marginTop: require("Themes").space.PX_8 };
const result = require("jsxProd").fileFinishedImporting("modules/notification_center/native/ForYouRecentActivitySectionHeader.tsx");

export const ForYouRecentActivitySectionHeader = function ForYouRecentActivitySectionHeader() {
  const tmp = createCacheKey();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.textHeader, color: "text-muted", variant: "text-sm/semibold", accessibilityRole: "header", children: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[4] = intl.string(getSystemLocale /* getSystemLocale */.t.yM9Krm);
  obj[1] = jsx(Text /* Text */.Text, { style: tmp.textHeader, color: "text-muted", variant: "text-sm/semibold", accessibilityRole: "header", children: null });
  return <View style={tmp.textHeader} color="text-muted" variant="text-sm/semibold" accessibilityRole="header">{null}</View>;
};