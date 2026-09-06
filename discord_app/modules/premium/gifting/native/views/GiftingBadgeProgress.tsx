// === Module 11031: GiftingBadgeProgress ===

// Module 11031 (GiftingBadgeProgress)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import _modDef2492 from "module_2492" /* 2492 */;
import Text_Text from "Text/Text" /* 4556 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10749 */;
import noop from "module_19" /* 19 */;

require = fn;
function GiftingBadgeProgressBar(percent) {
  const tmp = closure_8();
  let obj = { style: tmp.progressBarTrack, children: null };
  obj = { style: null };
  const items = [tmp.progressBarFill, ];
  obj = { width: "" + Math.min(Math.max(percent.percent, 0), 100) + "%" };
  items[1] = obj;
  obj.style = items;
  obj.children = hasOwnProperty(View, obj);
  return hasOwnProperty(View, obj);
}
const View = fn(17).View;
let closure_4 = fn(8192).getSingleRequirementThreshold;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { container: null, content: null, progressBarTrack: null, progressBarFill: null, labels: null };
createStyles = { flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.content = { flex: 1, paddingHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 };
let obj1 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 };
createStyles.progressBarTrack = { height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
let obj2 = { height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
createStyles.progressBarFill = { height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let obj3 = { height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles.labels = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", minHeight: nativeDefault.space.PX_16 };
let closure_8 = createStyles.createStyles(createStyles);
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
  let obj = { style: tmp.container, children: null };
  let simple_icon_url;
  if (currentTier != null) {
    simple_icon_url = currentTier.simple_icon_url;
  }
  let tmp8 = null != simple_icon_url;
  if (tmp8) {
    obj = { icon: currentTier.simple_icon_url, size: iconSize };
    tmp8 = hasOwnProperty(GiftingBadgeIconDefault, obj);
  }
  const items = [tmp8, , ];
  obj = { style: tmp.content, children: null };
  let tmp12 = null != title;
  if (tmp12) {
    const obj1 = { variant: "text-md/semibold", children: title };
    tmp12 = hasOwnProperty(Text_Text.Text, obj1);
  }
  const items1 = [tmp12, hasOwnProperty(GiftingBadgeProgressBar, { percent: num2 }), ];
  const obj2 = { style: tmp.labels, children: null };
  let tmp16Result = null != nextTier;
  if (tmp16Result) {
    const obj3 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl = util.intl;
    const obj4 = { count: progress, threshold: tmp2 };
    obj3.children = intl.format(_modDef2492.iIpfQe, obj4);
    tmp16Result = hasOwnProperty(Text_Text.Text, obj3);
  }
  obj2.children = tmp16Result;
  items1[2] = hasOwnProperty(View, obj2);
  obj.children = items1;
  items[1] = timestampProducer(View, obj);
  let simple_icon_url1;
  if (nextTier != null) {
    simple_icon_url1 = nextTier.simple_icon_url;
  }
  tmp16Result = null != simple_icon_url1;
  if (tmp16Result) {
    const obj5 = { icon: nextTier.simple_icon_url, size: iconSize };
    tmp16Result = hasOwnProperty(GiftingBadgeIconDefault, obj5);
  }
  items[2] = tmp16Result;
  obj.children = items;
  return timestampProducer(View, obj);
};