// === Module 11170: GiftingBadgeProgress ===

// Module 11170 (GiftingBadgeProgress)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef2493 from "module_2493" /* 2493 */;
import Text_Text from "Text/Text" /* 4635 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10882 */;
import noop from "module_19" /* 19 */;

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
let closure_4 = fn(8312).getSingleRequirementThreshold;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4639);
let obj2 = { container: { flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_16 }, content: null, progressBarTrack: null, progressBarFill: null, labels: null };
let obj3 = { flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_16 };
obj2.content = { flex: 1, paddingHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 };
let obj4 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 };
obj2.progressBarTrack = { height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
let obj5 = { height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
obj2.progressBarFill = { height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let obj6 = { height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.labels = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", minHeight: nativeDefault.space.PX_16 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeProgress.tsx");

export default function GiftingBadgeProgress(title) {
  ({ progress, currentTier, nextTier, iconSize } = title);
  if (iconSize === undefined) {
    iconSize = 24;
  }
  title = title.title;
  const tmp = closure_8();
  const tmp2 = closure_4(nextTier);
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
  const obj = { style: tmp.container, children: null };
  let simple_icon_url;
  if (currentTier != null) {
    simple_icon_url = currentTier.simple_icon_url;
  }
  let tmp8 = null != simple_icon_url;
  if (tmp8) {
    const obj2 = { icon: currentTier.simple_icon_url, size: iconSize };
    tmp8 = hasOwnProperty(GiftingBadgeIconDefault, obj2);
  }
  const items = [tmp8, , ];
  const obj3 = { style: tmp.content, children: null };
  let tmp12 = null != title;
  if (tmp12) {
    const obj4 = { variant: "text-md/semibold", children: title };
    tmp12 = hasOwnProperty(Text_Text.Text, obj4);
  }
  const items1 = [tmp12, hasOwnProperty(GiftingBadgeProgressBar, { percent: num2 }), ];
  const obj5 = { style: tmp.labels, children: null };
  let tmp16Result = null != nextTier;
  if (tmp16Result) {
    const obj6 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl = util.intl;
    const obj7 = { count: progress, threshold: tmp2 };
    obj6.children = intl.format(_modDef2493.iIpfQe, obj7);
    tmp16Result = hasOwnProperty(Text_Text.Text, obj6);
  }
  obj5.children = tmp16Result;
  items1[2] = hasOwnProperty(View, obj5);
  obj3.children = items1;
  items[1] = timestampProducer(View, obj3);
  let simple_icon_url1;
  if (nextTier != null) {
    simple_icon_url1 = nextTier.simple_icon_url;
  }
  let tmp16Result2 = null != simple_icon_url1;
  if (tmp16Result2) {
    const obj8 = { icon: nextTier.simple_icon_url, size: iconSize };
    tmp16Result2 = hasOwnProperty(GiftingBadgeIconDefault, obj8);
  }
  items[2] = tmp16Result2;
  obj.children = items;
  return timestampProducer(View, obj);
};