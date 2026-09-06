// === Module 11032: GiftingBadgeLevelUpProgress ===

// Module 11032 (GiftingBadgeLevelUpProgress)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import _modDef2492 from "module_2492" /* 2492 */;
import Text_Text from "Text/Text" /* 4556 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10749 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
let closure_4 = fn(8192).getSingleRequirementThreshold;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { container: null, barRow: null, progressBarTrack: null, progressBarFill: null, labels: null };
createStyles = { gap: nativeDefault.space.PX_4, width: "100%" };
createStyles.container = createStyles;
createStyles.barRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj1 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
createStyles.progressBarTrack = { flex: 1, height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
let obj2 = { flex: 1, height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
createStyles.progressBarFill = { height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles.labels = { flexDirection: "row", justifyContent: "flex-end" };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeLevelUpProgress.tsx");

export default function GiftingBadgeLevelUpProgress(style) {
  ({ progress, currentTier, newTier } = style);
  const tmp = closure_7();
  const tmp2 = closure_4(newTier);
  let num = 100;
  if (tmp2 > 0) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.min(Math.max(progress / tmp2 * 100, 0), 100);
  }
  let obj = { style: null, children: null };
  const items = [tmp.container, style.style];
  obj.style = items;
  obj = { style: tmp.barRow, children: null };
  let simple_icon_url;
  if (currentTier != null) {
    simple_icon_url = currentTier.simple_icon_url;
  }
  let tmp7 = null != simple_icon_url;
  if (tmp7) {
    obj = { icon: currentTier.simple_icon_url, size: 24 };
    tmp7 = hasOwnProperty(GiftingBadgeIconDefault, obj);
  }
  const items1 = [tmp7, , ];
  const obj1 = { style: tmp.progressBarTrack, children: null };
  const obj2 = { style: null };
  const items2 = [tmp.progressBarFill, { width: "" + num + "%" }];
  obj2.style = items2;
  obj1.children = hasOwnProperty(View, obj2);
  items1[1] = hasOwnProperty(View, obj1);
  let tmp11Result = null != newTier.simple_icon_url;
  if (tmp11Result) {
    const obj4 = { icon: newTier.simple_icon_url, size: 24 };
    tmp11Result = tmp11(GiftingBadgeIconDefault, obj4);
  }
  items1[2] = tmp11Result;
  obj.children = items1;
  const items3 = [timestampProducer(View, obj), ];
  const obj5 = { style: tmp.labels, children: null };
  const obj6 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = util.intl;
  obj6.children = intl.format(_modDef2492.iIpfQe, { count: progress, threshold: tmp2 });
  obj5.children = hasOwnProperty(Text_Text.Text, obj6);
  items3[1] = hasOwnProperty(View, obj5);
  obj.children = items3;
  return timestampProducer(View, obj);
};