// === Module 11032: GiftingBadgeLevelUpProgress ===

// Module 11032 (GiftingBadgeLevelUpProgress)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import messagesProxyDefault from "messagesProxy" /* 2492 */;
import Text from "Text" /* 4556 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10749 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { getSingleRequirementThreshold as closure_4 } from "initialize" /* 8192 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, barRow: null, progressBarTrack: null, progressBarFill: null, labels: null };
createCacheKey = { gap: ThemesDefault.space.PX_4, width: "100%" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
let obj1 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
createCacheKey[2] = { flex: 1, height: 6, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
let obj2 = { flex: 1, height: 6, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
createCacheKey[3] = { height: 6, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND };
createCacheKey[4] = { flexDirection: "row", justifyContent: "flex-end" };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const obj3 = { height: 6, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND };
const result = require("set").fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeLevelUpProgress.tsx");

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
  let obj = { style: items, children: null };
  items = [tmp.container, style.style];
  obj = { style: tmp.barRow, children: null };
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
    tmp11Result = tmp11(GiftingBadgeIconDefault, obj4);
  }
  items1[2] = tmp11Result;
  obj[1] = items1;
  const items3 = [closure_6(View, obj), ];
  const obj5 = { style: tmp.labels, children: null };
  const obj6 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = getSystemLocale.intl;
  obj6[2] = intl.format(messagesProxyDefault.iIpfQe, { count: progress, threshold: tmp2 });
  obj5[1] = callback2(Text.Text, obj6);
  items3[1] = callback2(View, obj5);
  obj[1] = items3;
  return closure_6(View, obj);
};