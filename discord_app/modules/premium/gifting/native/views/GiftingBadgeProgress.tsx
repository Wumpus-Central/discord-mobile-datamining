// discord_app/modules/premium/gifting/native/views/GiftingBadgeProgress.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import _modDef2493 from "../../GiftingBadge.messages.js";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import GiftingBadgesUtils from "../../GiftingBadgesUtils.tsx";
import GiftingBadgeIconDefault from "GiftingBadgeIcon.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function GiftingBadgeProgressBar(percent) {
  const tmp = closure_8();
  const obj = { style: tmp.progressBarTrack, children: null };
  const obj2 = { style: null };
  const items = [tmp.progressBarFill, { width: "" + Math.min(Math.max(percent.percent, 0), 100) + "%" }];
  obj2.style = items;
  obj.children = hasOwnProperty(View, obj2);
  return hasOwnProperty(View, obj);
}
const View = fn(17).View;
let closure_4 = fn(8321).getSingleRequirementThreshold;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4638);
let obj2 = {
  container: { flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_16 },
  content: null,
  progressBarTrack: null,
  progressBarFill: null,
  labels: null,
};
const obj3 = { flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_16 };
obj2.content = { flex: 1, paddingHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 };
let obj4 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 };
obj2.progressBarTrack = {
  height: 6,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  overflow: "hidden",
};
let obj5 = {
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
let obj6 = {
  height: 6,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
};
obj2.labels = {
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  minHeight: nativeDefault.space.PX_16,
};
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeProgress.tsx");

export default function GiftingBadgeProgress(title) {
  ({ progress, nextTier, iconSize } = title);
  if (iconSize === undefined) {
    iconSize = 24;
  }
  title = title.title;
  const tmp = closure_8();
  const isGiftingBadgeComplexArtEnabled = GiftingBadgesUtils.useIsGiftingBadgeComplexArtEnabled("GiftingBadgeProgress");
  const giftingBadgeTierIconUrl = GiftingBadgesUtils.getGiftingBadgeTierIconUrl(
    title.currentTier,
    isGiftingBadgeComplexArtEnabled,
  );
  const giftingBadgeTierIconUrl1 = GiftingBadgesUtils.getGiftingBadgeTierIconUrl(
    nextTier,
    isGiftingBadgeComplexArtEnabled,
  );
  const tmp7 = closure_4(nextTier);
  let tmp8 = null != nextTier;
  if (tmp8) {
    tmp8 = tmp7 > 0;
  }
  let num2 = 100;
  if (tmp8) {
    const _Math = Math;
    const _Math2 = Math;
    num2 = Math.min(Math.max((progress / tmp7) * 100, 0), 100);
  }
  const obj4 = { style: tmp.container, children: null };
  let tmp12 = null != giftingBadgeTierIconUrl;
  if (tmp12) {
    const obj5 = { icon: giftingBadgeTierIconUrl, size: iconSize };
    tmp12 = hasOwnProperty(GiftingBadgeIconDefault, obj5);
  }
  const items = [tmp12, ,];
  const obj6 = { style: tmp.content, children: null };
  let tmp15 = null != title;
  if (tmp15) {
    const obj7 = { variant: "text-md/semibold", children: title };
    tmp15 = hasOwnProperty(Text_Text.Text, obj7);
  }
  const items1 = [tmp15, hasOwnProperty(GiftingBadgeProgressBar, { percent: num2 })];
  const obj8 = { style: tmp.labels, children: null };
  let tmp17Result = null != nextTier;
  if (tmp17Result) {
    const obj9 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl = util.intl;
    const obj10 = { count: progress, threshold: tmp7 };
    obj9.children = intl.format(_modDef2493.iIpfQe, obj10);
    tmp17Result = hasOwnProperty(Text_Text.Text, obj9);
  }
  obj8.children = tmp17Result;
  items1[2] = hasOwnProperty(View, obj8);
  obj6.children = items1;
  items[1] = timestampProducer(View, obj6);
  let tmp17Result2 = null != giftingBadgeTierIconUrl1;
  if (tmp17Result2) {
    const obj11 = { icon: giftingBadgeTierIconUrl1, size: iconSize };
    tmp17Result2 = hasOwnProperty(GiftingBadgeIconDefault, obj11);
  }
  items[2] = tmp17Result2;
  obj4.children = items;
  return timestampProducer(View, obj4);
}
