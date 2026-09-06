// === Module 8832: NewBadge ===

// Module 8832 (NewBadge)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import Text from "Text" /* 4556 */;
import LockIcon from "LockIcon" /* 5095 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8662 */;
import PremiumFeaturesBackgroundDefault from "PremiumFeaturesBackground" /* 8833 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { PremiumTypes } from "GuildFeatures" /* 1373 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { badgeTextUppercase: { textTransform: "uppercase" }, badgeSurfaceDarkMode: null, badgeSurfaceLightMode: null, newIconBadge: null, limitedTimeBadge: null, lockIconBadge: null, newLockIconBadge: null, badgePill: null, iconTextBadge: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.WHITE };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { backgroundColor: ThemesDefault.colors.BADGE_BACKGROUND_BRAND };
let obj1 = { backgroundColor: ThemesDefault.colors.BADGE_BACKGROUND_BRAND };
createCacheKey[3] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND, borderRadius: ThemesDefault.radii.round, paddingHorizontal: 6, paddingVertical: 2 };
let obj2 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND, borderRadius: ThemesDefault.radii.round, paddingHorizontal: 6, paddingVertical: 2 };
createCacheKey[4] = { backgroundColor: ThemesDefault.colors.WHITE, borderRadius: ThemesDefault.radii.md, paddingHorizontal: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_4 };
const obj3 = { backgroundColor: ThemesDefault.colors.WHITE, borderRadius: ThemesDefault.radii.md, paddingHorizontal: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_4 };
createCacheKey[5] = { backgroundColor: ThemesDefault.colors.ICON_OVERLAY_DARK, padding: 5, borderRadius: ThemesDefault.radii.round };
const obj4 = { backgroundColor: ThemesDefault.colors.ICON_OVERLAY_DARK, padding: 5, borderRadius: ThemesDefault.radii.round };
createCacheKey[6] = { backgroundColor: ThemesDefault.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS_2, flexDirection: "row", paddingHorizontal: 5, paddingVertical: 3, borderRadius: ThemesDefault.radii.round, alignItems: "center", gap: 2 };
const obj5 = { backgroundColor: ThemesDefault.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS_2, flexDirection: "row", paddingHorizontal: 5, paddingVertical: 3, borderRadius: ThemesDefault.radii.round, alignItems: "center", gap: 2 };
createCacheKey[7] = { paddingHorizontal: ThemesDefault.space.PX_4, paddingVertical: 1.5, borderRadius: ThemesDefault.radii.round, flexShrink: 1 };
const obj6 = { paddingHorizontal: ThemesDefault.space.PX_4, paddingVertical: 1.5, borderRadius: ThemesDefault.radii.round, flexShrink: 1 };
createCacheKey[8] = { flexDirection: "row", alignItems: "center", gap: 4, paddingHorizontal: ThemesDefault.space.PX_8, paddingVertical: 2, borderRadius: ThemesDefault.radii.round };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const obj7 = { flexDirection: "row", alignItems: "center", gap: 4, paddingHorizontal: ThemesDefault.space.PX_8, paddingVertical: 2, borderRadius: ThemesDefault.radii.round };
const result = require("set").fileFinishedImporting("modules/collectibles/native/CollectiblesBadges.tsx");

export const NewBadge = function NewBadge(style) {
  const tmp = callback3();
  let obj = { style: items, children: null };
  items = [tmp.newIconBadge, style.style];
  obj = { variant: "text-sm/bold", color: "text-overlay-light", style: tmp.badgeTextUppercase, children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.y2b7CA);
  obj[1] = callback(Text.Text, obj);
  return callback(View, obj);
};
export const LockBadge = function LockBadge(isNew) {
  let flag = isNew.isNew;
  if (flag === undefined) {
    flag = false;
  }
  const style = isNew.style;
  const tmp = callback3();
  if (flag) {
    let obj = { premiumType: null, style: null, children: null };
    obj[0] = PremiumTypes.TIER_2;
    const items = [tmp.newLockIconBadge, style];
    obj[1] = items;
    obj = { size: "xxs", color: null };
    obj[1] = ThemesDefault.colors.WHITE;
    const items1 = [callback(LockIcon.LockIcon, obj), ];
    obj1 = { variant: "text-xs/bold", color: "text-overlay-light", style: null, children: null };
    obj1[2] = tmp.badgeTextUppercase;
    const intl = getSystemLocale.intl;
    obj1[3] = intl.string(getSystemLocale.t.y2b7CA);
    items1[1] = callback(Text.Text, obj1);
    obj[2] = items1;
    let tmp7 = callback2(PremiumFeaturesBackgroundDefault, obj);
    const tmp11 = PremiumFeaturesBackgroundDefault;
  } else {
    obj = { style: null, children: null };
    const items2 = [tmp.lockIconBadge, style];
    obj[0] = items2;
    const obj2 = { size: "sm", color: null };
    obj2[1] = ThemesDefault.colors.WHITE;
    obj[1] = callback(LockIcon.LockIcon, obj2);
    tmp7 = callback(View, obj);
  }
  return tmp7;
};
export const PremiumBadge = function PremiumBadge(isNew) {
  let flag = isNew.isNew;
  if (flag === undefined) {
    flag = false;
  }
  const style = isNew.style;
  const tmp = callback3();
  if (flag) {
    let obj = { premiumType: null, style: null, children: null };
    obj[0] = PremiumTypes.TIER_2;
    const items = [tmp.newLockIconBadge, style];
    obj[1] = items;
    obj = { size: "xxs", color: null };
    obj[1] = ThemesDefault.colors.WHITE;
    const items1 = [callback(NitroWheelIcon.NitroWheelIcon, obj), ];
    obj1 = { variant: "text-xs/bold", color: "text-overlay-light", style: null, children: null };
    obj1[2] = tmp.badgeTextUppercase;
    const intl = getSystemLocale.intl;
    obj1[3] = intl.string(getSystemLocale.t.y2b7CA);
    items1[1] = callback(Text.Text, obj1);
    obj[2] = items1;
    let tmp7 = callback2(PremiumFeaturesBackgroundDefault, obj);
    const tmp11 = PremiumFeaturesBackgroundDefault;
  } else {
    obj = { style: null, children: null };
    const items2 = [tmp.lockIconBadge, style];
    obj[0] = items2;
    const obj2 = { size: "sm", color: null };
    obj2[1] = ThemesDefault.colors.WHITE;
    obj[1] = callback(NitroWheelIcon.NitroWheelIcon, obj2);
    tmp7 = callback(View, obj);
  }
  return tmp7;
};
export const LimitedTimeBadge = function LimitedTimeBadge(style) {
  const tmp = callback3();
  let obj = { style: items, children: null };
  items = [tmp.limitedTimeBadge, style.style];
  obj = { variant: "text-xs/bold", color: "text-overlay-dark", style: tmp.badgeTextUppercase, children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t["h/uBCR"]);
  obj[1] = callback(Text.Text, obj);
  return callback(View, obj);
};
export const IconBadgePill = function IconBadgePill(isDark) {
  isDark = isDark.isDark;
  ({ icon, accessibilityLabel } = isDark);
  const tmp = callback3();
  const items = [tmp.badgePill, ];
  const obj = { style: items, accessibilityLabel, children: null };
  items[1] = isDark ? tmp.badgeSurfaceDarkMode : tmp.badgeSurfaceLightMode;
  let str = "white";
  if (isDark) {
    str = "black";
  }
  obj[2] = closure_5(icon, { size: "xs", color: str });
  return closure_5(View, obj);
};
export const IconTextBadge = function IconTextBadge(isDark) {
  isDark = isDark.isDark;
  ({ icon, label } = isDark);
  const tmp = callback3();
  const items = [tmp.iconTextBadge, ];
  let obj = { style: items, children: null };
  items[1] = isDark ? tmp.badgeSurfaceDarkMode : tmp.badgeSurfaceLightMode;
  let str = "white";
  if (isDark) {
    str = "black";
  }
  const items1 = [closure_5(icon, { size: "xs", color: str }), ];
  let str2 = "text-overlay-light";
  if (isDark) {
    str2 = "text-overlay-dark";
  }
  obj = { variant: "text-xs/bold", color: str2, style: tmp.badgeTextUppercase, children: label };
  items1[1] = closure_5(Text.Text, obj);
  obj[1] = items1;
  return closure_6(View, obj);
};