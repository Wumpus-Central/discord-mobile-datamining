// === Module 10767: BadgeProgressSection ===

// Module 10767 (BadgeProgressSection)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import BadgeDetailsUtils from "BadgeDetailsUtils" /* 10667 */;
import BadgeArtImageDefault from "BadgeArtImage" /* 10766 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4836);
let obj2 = { section: { gap: nativeDefault.space.PX_12 }, row: null, content: null, track: null, fill: null };
let obj3 = { gap: nativeDefault.space.PX_12 };
obj2.row = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj2.content = { flex: 1, gap: nativeDefault.space.PX_8 };
let obj5 = { flex: 1, gap: nativeDefault.space.PX_8 };
obj2.track = { height: 8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, overflow: "hidden" };
let obj6 = { height: 8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, overflow: "hidden" };
obj2.fill = { height: 8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/native/BadgeProgressSection.tsx");

export default function BadgeProgressSection(arg0) {
  ({ badge, viewerBadge } = arg0);
  const tmp = closure_6();
  const badgeProgressDisplay = BadgeDetailsUtils.getBadgeProgressDisplay(badge, viewerBadge);
  ({ progress, threshold, currentArtUrl, nextArtUrl, helperText } = badgeProgressDisplay);
  let num;
  if (progress != null) {
    num = progress.current;
  }
  if (num == null) {
    num = 0;
  }
  let num2;
  if (progress != null) {
    num2 = progress.floor;
  }
  if (num2 == null) {
    num2 = 0;
  }
  const obj2 = { style: tmp.section, children: null };
  const obj3 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["2m/g2c"]);
  const items = [React4(Text_Text.Text, obj3), ];
  const obj4 = { style: tmp.row, children: null };
  let tmp7Result = null != currentArtUrl;
  if (tmp7Result) {
    const obj5 = { url: currentArtUrl, height: 48 };
    tmp7Result = React4(BadgeArtImageDefault, obj5);
  }
  const items1 = [tmp7Result, , ];
  const obj6 = { style: tmp.content, children: null };
  let tmp7Result4 = null != helperText;
  if (tmp7Result4) {
    const obj7 = { variant: "text-sm/medium", "aria-hidden": null != threshold, children: helperText };
    tmp7Result4 = React4(Text_Text.Text, obj7);
  }
  const items2 = [tmp7Result4, ];
  let tmp7Result5 = null != threshold;
  if (tmp7Result5) {
    const obj8 = { style: tmp.track, accessible: true, accessibilityRole: "progressbar", accessibilityLabel: null, accessibilityValue: null, children: null };
    if (helperText == null) {
      const intl2 = util.intl;
      helperText = intl2.string(util.t.Uwhb1l);
    }
    obj8.accessibilityLabel = helperText;
    const range = { min: num2, max: threshold, now: null };
    const _Math = Math;
    range.now = Math.min(num, threshold);
    obj8.accessibilityValue = range;
    const items3 = [tmp.fill, ];
    const diff = threshold - num2;
    let num5 = 1;
    if (diff > 0) {
      const _Math2 = Math;
      const _Math3 = Math;
      num5 = Math.min(Math.max((num - num2) / diff, 0), 1);
    }
    const obj9 = { style: null };
    const obj10 = { width: `${100 * num5}%` };
    items3[1] = obj10;
    obj9.style = items3;
    obj8.children = React4(View, obj9);
    tmp7Result5 = React4(View, obj8);
  }
  items2[1] = tmp7Result5;
  obj6.children = items2;
  items1[1] = hasOwnProperty(View, obj6);
  let tmp7Result6 = null != nextArtUrl;
  if (tmp7Result6) {
    const obj11 = { url: nextArtUrl, height: 48 };
    tmp7Result6 = React4(BadgeArtImageDefault, obj11);
  }
  items1[2] = tmp7Result6;
  obj4.children = items1;
  items[1] = hasOwnProperty(View, obj4);
  obj2.children = items;
  return hasOwnProperty(View, obj2);
};