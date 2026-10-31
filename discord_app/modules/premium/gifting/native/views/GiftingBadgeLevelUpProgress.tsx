// discord_app/modules/premium/gifting/native/views/GiftingBadgeLevelUpProgress.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import _modDef2634 from "../../GiftingBadge.messages.js";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import GiftingBadgesUtils from "../../GiftingBadgesUtils.tsx";
import GiftingBadgeIconDefault from "GiftingBadgeIcon.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
let closure_4 = fn(8763).getSingleRequirementThreshold;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5014);
let obj2 = {
  container: { gap: nativeDefault.space.PX_4, width: "100%" },
  barRow: null,
  progressBarTrack: null,
  progressBarFill: null,
  labels: null,
};
let obj3 = { gap: nativeDefault.space.PX_4, width: "100%" };
obj2.barRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.progressBarTrack = {
  flex: 1,
  height: 6,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  overflow: "hidden",
};
let obj5 = {
  flex: 1,
  height: 6,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  overflow: "hidden",
};
obj2.progressBarFill = {
  height: 6,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
};
obj2.labels = { flexDirection: "row", justifyContent: "flex-end" };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeLevelUpProgress.tsx");

export default function GiftingBadgeLevelUpProgress(style) {
  ({ progress, currentTier, newTier } = style);
  const tmp = closure_7();
  const giftingBadgeTierIconUrl = GiftingBadgesUtils.getGiftingBadgeTierIconUrl(currentTier);
  const giftingBadgeTierIconUrl1 = GiftingBadgesUtils.getGiftingBadgeTierIconUrl(newTier);
  const tmp6 = closure_4(newTier);
  let num = 100;
  if (tmp6 > 0) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.min(Math.max((progress / tmp6) * 100, 0), 100);
  }
  const obj2 = { style: null, children: null };
  const items = [tmp.container, style.style];
  obj2.style = items;
  const obj3 = { style: tmp.barRow, children: null };
  let tmp10 = null != giftingBadgeTierIconUrl;
  if (tmp10) {
    const obj4 = { icon: giftingBadgeTierIconUrl, size: 24 };
    tmp10 = hasOwnProperty(GiftingBadgeIconDefault, obj4);
  }
  const items1 = [tmp10, ,];
  const obj5 = { style: tmp.progressBarTrack, children: null };
  const obj6 = { style: null };
  const items2 = [tmp.progressBarFill];
  const tmp2Result = GiftingBadgesUtils;
  items2[1] = { width: "" + num + "%" };
  obj6.style = items2;
  obj5.children = hasOwnProperty(View, obj6);
  items1[1] = hasOwnProperty(View, obj5);
  let tmp13Result = null != giftingBadgeTierIconUrl1;
  if (tmp13Result) {
    const obj8 = { icon: giftingBadgeTierIconUrl1, size: 24 };
    tmp13Result = hasOwnProperty(GiftingBadgeIconDefault, obj8);
  }
  items1[2] = tmp13Result;
  obj3.children = items1;
  const items3 = [timestampProducer(View, obj3)];
  const obj9 = { style: tmp.labels, children: null };
  const obj10 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = util.intl;
  obj10.children = intl.format(_modDef2634.iIpfQe, { count: progress, threshold: tmp6 });
  obj9.children = hasOwnProperty(Text_Text.Text, obj10);
  items3[1] = hasOwnProperty(View, obj9);
  obj2.children = items3;
  return timestampProducer(View, obj2);
}
