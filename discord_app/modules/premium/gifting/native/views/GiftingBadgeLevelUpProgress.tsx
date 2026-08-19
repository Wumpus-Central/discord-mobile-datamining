// === Module 10422: GiftingBadgeLevelUpProgress ===

// Module 10422 (GiftingBadgeLevelUpProgress)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2431 */;
import Text from "Text" /* 4734 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10302 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { getSingleRequirementThreshold as closure_4 } from "initialize" /* 8936 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const createCacheKey = { gap: ThemesDefault.space.PX_4, width: "100%" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
createCacheKey[2] = { flex: 1, height: 6, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
createCacheKey[3] = { height: 6, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND };
createCacheKey[4] = { flexDirection: "row", justifyContent: "flex-end" };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeLevelUpProgress.tsx");

export default function GiftingBadgeLevelUpProgress(style) {
  ({ progress, currentTier, newTier } = style);
  const tmp = callback3();
  const tmp2 = callback(newTier);
  let num = 100;
  if (tmp2 > 0) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.min(Math.max(progress / tmp2 * 100, 0), 100);
  }
  const items = [tmp.container, style.style];
  let obj = { style: tmp.barRow, children: null };
  let simple_icon_url;
  if (currentTier != null) {
    simple_icon_url = currentTier.simple_icon_url;
  }
  let tmp7 = null != simple_icon_url;
  if (tmp7) {
    obj = { icon: null, size: 24 };
    obj[0] = currentTier.simple_icon_url;
    tmp7 = callback2(GiftingBadgeIconDefault, obj);
  }
  const items1 = [tmp7, , ];
  obj1 = { style: tmp.progressBarTrack, children: null };
  const obj2 = { style: null };
  const items2 = [tmp.progressBarFill, { width: "" + num + "%" }];
  obj2[0] = items2;
  obj1[1] = callback2(View, obj2);
  items1[1] = callback2(View, obj1);
  let tmp11Result = null != newTier.simple_icon_url;
  if (tmp11Result) {
    const obj4 = { icon: null, size: 24 };
    obj4[0] = newTier.simple_icon_url;
    tmp11Result = callback2(GiftingBadgeIconDefault, obj4);
  }
  items1[2] = tmp11Result;
  obj[1] = items1;
  const items3 = [callback(View, obj), ];
  const obj5 = { style: tmp.labels, children: null };
  const obj6 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = getSystemLocale.intl;
  obj6[2] = intl.format(messagesProxyDefault.iIpfQe, { count: progress, threshold: tmp2 });
  obj5[1] = callback2(Text.Text, obj6);
  items3[1] = callback2(View, obj5);
  obj[1] = items3;
  return callback(View, obj);
};