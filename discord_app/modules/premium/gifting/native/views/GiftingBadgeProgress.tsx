// === Module 10695: GiftingBadgeProgressBar ===

// Module 10695 (GiftingBadgeProgressBar)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2465 */;
import Text from "Text" /* 4441 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10444 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { getSingleRequirementThreshold as closure_4 } from "initialize" /* 8492 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
function GiftingBadgeProgressBar(percent) {
  const tmp = callback3();
  let obj = { style: tmp.progressBarTrack, children: null };
  obj = { style: null };
  const items = [tmp.progressBarFill, ];
  obj = { width: "" + Math.min(Math.max(percent.percent, 0), 100) + "%" };
  items[1] = obj;
  obj[0] = items;
  obj[1] = callback2(View, obj);
  return callback2(View, obj);
}
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, content: null, progressBarTrack: null, progressBarFill: null, labels: null };
createCacheKey = { flexDirection: "row", alignItems: "center", padding: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, paddingHorizontal: ThemesDefault.space.PX_8, gap: ThemesDefault.space.PX_4 };
let obj1 = { flex: 1, paddingHorizontal: ThemesDefault.space.PX_8, gap: ThemesDefault.space.PX_4 };
createCacheKey[2] = { height: 6, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
let obj2 = { height: 6, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
createCacheKey[3] = { height: 6, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND };
let obj3 = { height: 6, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND };
createCacheKey[4] = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", minHeight: ThemesDefault.space.PX_16 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj4 = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", minHeight: ThemesDefault.space.PX_16 };
const result = require("set").fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeProgress.tsx");

export default function GiftingBadgeProgress(title) {
  ({ progress, currentTier, nextTier, iconSize } = title);
  if (iconSize === undefined) {
    iconSize = 24;
  }
  title = title.title;
  const tmp = callback3();
  const tmp2 = callback(nextTier);
  let tmp3 = null != nextTier;
  if (tmp3) {
    tmp3 = tmp2 > 0;
  }
  let num2 = 100;
  if (tmp3) {
    const _Math = Math;
    const _Math2 = Math;
    num2 = Math.min(Math.max(progress / tmp2 * 100, 0), 100);
  }
  let obj = { style: tmp.container, children: null };
  let simple_icon_url;
  if (currentTier != null) {
    simple_icon_url = currentTier.simple_icon_url;
  }
  let tmp8 = null != simple_icon_url;
  if (tmp8) {
    obj = { icon: null, size: null };
    obj[0] = currentTier.simple_icon_url;
    obj[1] = iconSize;
    tmp8 = callback2(GiftingBadgeIconDefault, obj);
  }
  const items = [tmp8, , ];
  obj = { style: tmp.content, children: null };
  let tmp12 = null != title;
  if (tmp12) {
    obj1 = { variant: "text-md/semibold", children: null };
    obj1[1] = title;
    tmp12 = callback2(Text.Text, obj1);
  }
  const items1 = [tmp12, callback2(GiftingBadgeProgressBar, { percent: num2 }), ];
  const obj2 = { style: tmp.labels, children: null };
  let tmp16Result = null != nextTier;
  if (tmp16Result) {
    const obj3 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl = getSystemLocale.intl;
    const obj4 = { count: null, threshold: null };
    obj4[0] = progress;
    obj4[1] = tmp2;
    obj3[2] = intl.format(messagesProxyDefault.iIpfQe, obj4);
    tmp16Result = tmp16(Text.Text, obj3);
  }
  obj2[1] = tmp16Result;
  items1[2] = callback2(View, obj2);
  obj[1] = items1;
  items[1] = closure_6(View, obj);
  let simple_icon_url1;
  if (nextTier != null) {
    simple_icon_url1 = nextTier.simple_icon_url;
  }
  tmp16Result = null != simple_icon_url1;
  if (tmp16Result) {
    const obj5 = { icon: null, size: null };
    obj5[0] = nextTier.simple_icon_url;
    obj5[1] = iconSize;
    tmp16Result = tmp16(GiftingBadgeIconDefault, obj5);
  }
  items[2] = tmp16Result;
  obj[1] = items;
  return closure_6(View, obj);
};