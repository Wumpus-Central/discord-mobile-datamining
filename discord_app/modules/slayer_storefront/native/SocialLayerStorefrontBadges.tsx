// discord_app/modules/slayer_storefront/native/SocialLayerStorefrontBadges.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import set from "set";
import { space } from "Themes";
import set from "jsxProd";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { ClydeIcon } from "../../../design/components/Icon/native/redesign/generated/ClydeIcon.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { exclusiveBadge: null, exclusiveBadgeText: null };
createCacheKey = { flexDirection: "row", alignItems: "center", textAlignVertical: "center", alignSelf: "flex-start", gap: require("Themes").space.PX_4, borderRadius: require("Themes").radii.round, paddingHorizontal: require("Themes").space.PX_8, backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
createCacheKey[0] = createCacheKey;
const obj1 = { textTransform: "uppercase", fontSize: require("Themes").space.PX_12, lineHeight: null };
set = set.isAndroid();
obj1[2] = set ? space.PX_12 : space.PX_16;
createCacheKey[1] = obj1;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = set.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontBadges.tsx");

export const ExclusiveBadge = function ExclusiveBadge() {
  const tmp = createCacheKey();
  let obj = { style: tmp.exclusiveBadge, children: null };
  obj = { size: "xs", color: null };
  obj[1] = Themes.colors.WHITE;
  const items = [callback(ClydeIcon /* ClydeIcon */.ClydeIcon, obj), ];
  obj = { variant: "text-xs/bold", color: "text-overlay-light", style: tmp.exclusiveBadgeText, children: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[3] = intl.string(getSystemLocale /* getSystemLocale */.t.RiDMFz);
  items[1] = callback(Text /* Text */.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
};