// === Module 10358: ExclusiveBadge ===

// Module 10358 (ExclusiveBadge)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import ClydeIcon from "ClydeIcon" /* 9551 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";
import obj132 from "obj132" /* 500 */;

require = fn;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { flexDirection: "row", alignItems: "center", textAlignVertical: "center", alignSelf: "flex-start", gap: ThemesDefault.space.PX_4, borderRadius: ThemesDefault.radii.round, paddingHorizontal: ThemesDefault.space.PX_8, backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND };
createCacheKey[0] = createCacheKey;
const obj1 = { textTransform: "uppercase", fontSize: ThemesDefault.space.PX_12, lineHeight: null };
obj132 = obj132.isAndroid();
const space = ThemesDefault.space;
obj1[2] = obj132 ? space.PX_12 : space.PX_16;
createCacheKey[1] = obj1;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = obj132.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontBadges.tsx");

export const ExclusiveBadge = function ExclusiveBadge() {
  const tmp = callback3();
  let obj = { size: "xs", color: ThemesDefault.colors.WHITE };
  const items = [callback(ClydeIcon.ClydeIcon, obj), ];
  obj = { variant: "text-xs/bold", color: "text-overlay-light", style: tmp.exclusiveBadgeText, children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.RiDMFz);
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
};