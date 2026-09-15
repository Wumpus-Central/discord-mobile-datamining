// === Module 11171: GiftingBadgeLevelUpProgress ===

// Module 11171 (GiftingBadgeLevelUpProgress)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef2493 from "module_2493" /* 2493 */;
import Text_Text from "Text/Text" /* 4635 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10882 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
let closure_4 = fn(8312).getSingleRequirementThreshold;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4639);
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
  const tmp2 = closure_4(newTier);
  let num = 100;
  if (tmp2 > 0) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.min(Math.max(progress / tmp2 * 100, 0), 100);
  }
  const obj = { style: null, children: null };
  const items = [tmp.container, style.style];
  obj.style = items;
  const obj2 = { style: tmp.barRow, children: null };
  let simple_icon_url;
  if (currentTier != null) {
    simple_icon_url = currentTier.simple_icon_url;
  }
  let tmp7 = null != simple_icon_url;
  if (tmp7) {
    const obj3 = { icon: currentTier.simple_icon_url, size: 24 };
    tmp7 = hasOwnProperty(GiftingBadgeIconDefault, obj3);
  }
  const items1 = [tmp7, , ];
  const obj4 = { style: tmp.progressBarTrack, children: null };
  const obj5 = { style: null };
  const items2 = [tmp.progressBarFill, { width: "" + num + "%" }];
  obj5.style = items2;
  obj4.children = hasOwnProperty(View, obj5);
  items1[1] = hasOwnProperty(View, obj4);
  let tmp11Result = null != newTier.simple_icon_url;
  if (tmp11Result) {
    const obj7 = { icon: newTier.simple_icon_url, size: 24 };
    tmp11Result = hasOwnProperty(GiftingBadgeIconDefault, obj7);
  }
  items1[2] = tmp11Result;
  obj2.children = items1;
  const items3 = [timestampProducer(View, obj2), ];
  const obj8 = { style: tmp.labels, children: null };
  const obj9 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = util.intl;
  obj9.children = intl.format(_modDef2493.iIpfQe, { count: progress, threshold: tmp2 });
  obj8.children = hasOwnProperty(Text_Text.Text, obj9);
  items3[1] = hasOwnProperty(View, obj8);
  obj.children = items3;
  return timestampProducer(View, obj);
};