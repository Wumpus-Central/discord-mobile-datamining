// === Module 8832: CollectiblesBadges ===

// Module 8832 (CollectiblesBadges)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import LockIcon from "LockIcon" /* 5095 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8662 */;
import PremiumFeaturesBackgroundDefault from "PremiumFeaturesBackground" /* 8833 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const PremiumTypes = fn(1373).PremiumTypes;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { badgeTextUppercase: { textTransform: "uppercase" }, badgeSurfaceDarkMode: null, badgeSurfaceLightMode: null, newIconBadge: null, limitedTimeBadge: null, lockIconBadge: null, newLockIconBadge: null, badgePill: null, iconTextBadge: null };
createStyles = { backgroundColor: nativeDefault.colors.WHITE };
createStyles.badgeSurfaceDarkMode = createStyles;
createStyles.badgeSurfaceLightMode = { backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND };
let obj1 = { backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND };
createStyles.newIconBadge = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.round, paddingHorizontal: 6, paddingVertical: 2 };
let obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.round, paddingHorizontal: 6, paddingVertical: 2 };
createStyles.limitedTimeBadge = { backgroundColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.md, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
const obj3 = { backgroundColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.md, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
createStyles.lockIconBadge = { backgroundColor: nativeDefault.colors.ICON_OVERLAY_DARK, padding: 5, borderRadius: nativeDefault.radii.round };
const obj4 = { backgroundColor: nativeDefault.colors.ICON_OVERLAY_DARK, padding: 5, borderRadius: nativeDefault.radii.round };
createStyles.newLockIconBadge = { backgroundColor: nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS_2, flexDirection: "row", paddingHorizontal: 5, paddingVertical: 3, borderRadius: nativeDefault.radii.round, alignItems: "center", gap: 2 };
const obj5 = { backgroundColor: nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS_2, flexDirection: "row", paddingHorizontal: 5, paddingVertical: 3, borderRadius: nativeDefault.radii.round, alignItems: "center", gap: 2 };
createStyles.badgePill = { paddingHorizontal: nativeDefault.space.PX_4, paddingVertical: 1.5, borderRadius: nativeDefault.radii.round, flexShrink: 1 };
const obj6 = { paddingHorizontal: nativeDefault.space.PX_4, paddingVertical: 1.5, borderRadius: nativeDefault.radii.round, flexShrink: 1 };
createStyles.iconTextBadge = { flexDirection: "row", alignItems: "center", gap: 4, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: 2, borderRadius: nativeDefault.radii.round };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesBadges.tsx");

export const NewBadge = function NewBadge(style) {
  const tmp = closure_7();
  let obj = { style: null, children: null };
  const items = [tmp.newIconBadge, style.style];
  obj.style = items;
  obj = { variant: "text-sm/bold", color: "text-overlay-light", style: tmp.badgeTextUppercase, children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.y2b7CA);
  obj.children = hasOwnProperty(Text_Text.Text, obj);
  return hasOwnProperty(View, obj);
};
export const LockBadge = function LockBadge(isNew) {
  let flag = isNew.isNew;
  if (flag === undefined) {
    flag = false;
  }
  const style = isNew.style;
  const tmp = closure_7();
  if (flag) {
    let obj = { premiumType: PremiumTypes.TIER_2, style: null, children: null };
    const items = [tmp.newLockIconBadge, style];
    obj.style = items;
    obj = { size: "xxs", color: nativeDefault.colors.WHITE };
    const items1 = [hasOwnProperty(LockIcon.LockIcon, obj), ];
    const obj1 = { variant: "text-xs/bold", color: "text-overlay-light", style: tmp.badgeTextUppercase, children: null };
    const intl = util.intl;
    obj1.children = intl.string(util.t.y2b7CA);
    items1[1] = hasOwnProperty(Text_Text.Text, obj1);
    obj.children = items1;
    let tmp7 = timestampProducer(PremiumFeaturesBackgroundDefault, obj);
  } else {
    obj = { style: null, children: null };
    const items2 = [tmp.lockIconBadge, style];
    obj.style = items2;
    const obj2 = { size: "sm", color: nativeDefault.colors.WHITE };
    obj.children = hasOwnProperty(LockIcon.LockIcon, obj2);
    tmp7 = hasOwnProperty(View, obj);
  }
  return tmp7;
};
export const PremiumBadge = function PremiumBadge(isNew) {
  let flag = isNew.isNew;
  if (flag === undefined) {
    flag = false;
  }
  const style = isNew.style;
  const tmp = closure_7();
  if (flag) {
    let obj = { premiumType: PremiumTypes.TIER_2, style: null, children: null };
    const items = [tmp.newLockIconBadge, style];
    obj.style = items;
    obj = { size: "xxs", color: nativeDefault.colors.WHITE };
    const items1 = [hasOwnProperty(NitroWheelIcon.NitroWheelIcon, obj), ];
    const obj1 = { variant: "text-xs/bold", color: "text-overlay-light", style: tmp.badgeTextUppercase, children: null };
    const intl = util.intl;
    obj1.children = intl.string(util.t.y2b7CA);
    items1[1] = hasOwnProperty(Text_Text.Text, obj1);
    obj.children = items1;
    let tmp7 = timestampProducer(PremiumFeaturesBackgroundDefault, obj);
  } else {
    obj = { style: null, children: null };
    const items2 = [tmp.lockIconBadge, style];
    obj.style = items2;
    const obj2 = { size: "sm", color: nativeDefault.colors.WHITE };
    obj.children = hasOwnProperty(NitroWheelIcon.NitroWheelIcon, obj2);
    tmp7 = hasOwnProperty(View, obj);
  }
  return tmp7;
};
export const LimitedTimeBadge = function LimitedTimeBadge(style) {
  const tmp = closure_7();
  let obj = { style: null, children: null };
  const items = [tmp.limitedTimeBadge, style.style];
  obj.style = items;
  obj = { variant: "text-xs/bold", color: "text-overlay-dark", style: tmp.badgeTextUppercase, children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t["h/uBCR"]);
  obj.children = hasOwnProperty(Text_Text.Text, obj);
  return hasOwnProperty(View, obj);
};
export const IconBadgePill = function IconBadgePill(isDark) {
  isDark = isDark.isDark;
  ({ icon, accessibilityLabel } = isDark);
  const tmp = closure_7();
  const items = [tmp.badgePill, ];
  const obj = { style: items, accessibilityLabel, children: null };
  items[1] = isDark ? tmp.badgeSurfaceDarkMode : tmp.badgeSurfaceLightMode;
  let str = "white";
  if (isDark) {
    str = "black";
  }
  obj.children = hasOwnProperty(icon, { size: "xs", color: str });
  return hasOwnProperty(View, obj);
};
export const IconTextBadge = function IconTextBadge(isDark) {
  isDark = isDark.isDark;
  ({ icon, label } = isDark);
  const tmp = closure_7();
  const items = [tmp.iconTextBadge, ];
  let obj = { style: items, children: null };
  items[1] = isDark ? tmp.badgeSurfaceDarkMode : tmp.badgeSurfaceLightMode;
  let str = "white";
  if (isDark) {
    str = "black";
  }
  const items1 = [hasOwnProperty(icon, { size: "xs", color: str }), ];
  let str2 = "text-overlay-light";
  if (isDark) {
    str2 = "text-overlay-dark";
  }
  obj = { variant: "text-xs/bold", color: str2, style: tmp.badgeTextUppercase, children: label };
  items1[1] = hasOwnProperty(Text_Text.Text, obj);
  obj.children = items1;
  return timestampProducer(View, obj);
};