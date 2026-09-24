// === Module 11389: GiftingBadgeLevelUpProgress ===

// Module 11389 (GiftingBadgeLevelUpProgress)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef2582 from "module_2582" /* 2582 */;
import Text_Text from "Text/Text" /* 4825 */;
import GiftingBadgesUtils from "GiftingBadgesUtils" /* 11092 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 11097 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
let closure_4 = fn(8540).getSingleRequirementThreshold;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4829);
let obj2 = { container: { gap: nativeDefault.space.PX_4, width: "100%" }, barRow: null, progressBarTrack: null, progressBarFill: null, labels: null };
let obj3 = { gap: nativeDefault.space.PX_4, width: "100%" };
obj2.barRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.progressBarTrack = { flex: 1, height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
let obj5 = { flex: 1, height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
obj2.progressBarFill = { height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.labels = { flexDirection: "row", justifyContent: "flex-end" };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeLevelUpProgress.tsx");

export default function GiftingBadgeLevelUpProgress(style) {
  ({ progress, currentTier, newTier } = style);
  const tmp = closure_7();
  const isGiftingBadgeComplexArtEnabled = GiftingBadgesUtils.useIsGiftingBadgeComplexArtEnabled("GiftingBadgeLevelUpProgress");
  const giftingBadgeTierIconUrl = GiftingBadgesUtils.getGiftingBadgeTierIconUrl(currentTier, isGiftingBadgeComplexArtEnabled);
  const giftingBadgeTierIconUrl1 = GiftingBadgesUtils.getGiftingBadgeTierIconUrl(newTier, isGiftingBadgeComplexArtEnabled);
  const tmp7 = closure_4(newTier);
  let num = 100;
  if (tmp7 > 0) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.min(Math.max(progress / tmp7 * 100, 0), 100);
  }
  const obj3 = { style: null, children: null };
  const items = [tmp.container, style.style];
  obj3.style = items;
  const obj4 = { style: tmp.barRow, children: null };
  let tmp11 = null != giftingBadgeTierIconUrl;
  if (tmp11) {
    const obj5 = { icon: giftingBadgeTierIconUrl, size: 24 };
    tmp11 = hasOwnProperty(GiftingBadgeIconDefault, obj5);
  }
  const items1 = [tmp11, , ];
  const obj6 = { style: tmp.progressBarTrack, children: null };
  const obj7 = { style: null };
  const items2 = [tmp.progressBarFill, ];
  const tmp2Result = GiftingBadgesUtils;
  items2[1] = { width: "" + num + "%" };
  obj7.style = items2;
  obj6.children = hasOwnProperty(View, obj7);
  items1[1] = hasOwnProperty(View, obj6);
  let tmp14Result = null != giftingBadgeTierIconUrl1;
  if (tmp14Result) {
    const obj9 = { icon: giftingBadgeTierIconUrl1, size: 24 };
    tmp14Result = hasOwnProperty(GiftingBadgeIconDefault, obj9);
  }
  items1[2] = tmp14Result;
  obj4.children = items1;
  const items3 = [timestampProducer(View, obj4), ];
  const obj10 = { style: tmp.labels, children: null };
  const obj11 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = util.intl;
  obj11.children = intl.format(_modDef2582.iIpfQe, { count: progress, threshold: tmp7 });
  obj10.children = hasOwnProperty(Text_Text.Text, obj11);
  items3[1] = hasOwnProperty(View, obj10);
  obj3.children = items3;
  return timestampProducer(View, obj3);
};