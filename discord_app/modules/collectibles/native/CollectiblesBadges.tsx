import "noop";
import { View } from "get ActivityIndicator";
import { PremiumTypes } from "GuildFeatures";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { badgeTextUppercase: { textTransform: "uppercase" }, badgeSurfaceDarkMode: null, badgeSurfaceLightMode: null, newIconBadge: null, limitedTimeBadge: null, lockIconBadge: null, newLockIconBadge: null, badgePill: null, iconTextBadge: null };
createCacheKey = { backgroundColor: require("Themes").colors.WHITE };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { backgroundColor: require("Themes").colors.BADGE_BACKGROUND_BRAND };
let obj1 = { backgroundColor: require("Themes").colors.BADGE_BACKGROUND_BRAND };
createCacheKey[3] = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND, borderRadius: require("Themes").radii.round, paddingHorizontal: 6, paddingVertical: 2 };
let obj2 = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND, borderRadius: require("Themes").radii.round, paddingHorizontal: 6, paddingVertical: 2 };
createCacheKey[4] = { backgroundColor: require("Themes").colors.WHITE, borderRadius: require("Themes").radii.md, paddingHorizontal: require("Themes").space.PX_8, paddingVertical: require("Themes").space.PX_4 };
const obj3 = { backgroundColor: require("Themes").colors.WHITE, borderRadius: require("Themes").radii.md, paddingHorizontal: require("Themes").space.PX_8, paddingVertical: require("Themes").space.PX_4 };
createCacheKey[5] = { backgroundColor: require("Themes").colors.ICON_OVERLAY_DARK, padding: 5, borderRadius: require("Themes").radii.round };
const obj4 = { backgroundColor: require("Themes").colors.ICON_OVERLAY_DARK, padding: 5, borderRadius: require("Themes").radii.round };
createCacheKey[6] = { backgroundColor: require("Themes").unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS_2, flexDirection: "row", paddingHorizontal: 5, paddingVertical: 3, borderRadius: require("Themes").radii.round, alignItems: "center", gap: 2 };
const obj5 = { backgroundColor: require("Themes").unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS_2, flexDirection: "row", paddingHorizontal: 5, paddingVertical: 3, borderRadius: require("Themes").radii.round, alignItems: "center", gap: 2 };
createCacheKey[7] = { paddingHorizontal: require("Themes").space.PX_4, paddingVertical: 1.5, borderRadius: require("Themes").radii.round, flexShrink: 1 };
const obj6 = { paddingHorizontal: require("Themes").space.PX_4, paddingVertical: 1.5, borderRadius: require("Themes").radii.round, flexShrink: 1 };
createCacheKey[8] = { flexDirection: "row", alignItems: "center", gap: 4, paddingHorizontal: require("Themes").space.PX_8, paddingVertical: 2, borderRadius: require("Themes").radii.round };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj7 = { flexDirection: "row", alignItems: "center", gap: 4, paddingHorizontal: require("Themes").space.PX_8, paddingVertical: 2, borderRadius: require("Themes").radii.round };
const result = require("GuildFeatures").fileFinishedImporting("modules/collectibles/native/CollectiblesBadges.tsx");

export const NewBadge = function NewBadge(style) {
  const tmp = createCacheKey();
  let obj = { style: items, children: null };
  items = [tmp.newIconBadge, style.style];
  obj = { variant: "text-sm/bold", color: "text-overlay-light", style: tmp.badgeTextUppercase, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl.string(require(1236) /* getSystemLocale */.t.y2b7CA);
  obj[1] = callback(require(4251) /* Text */.Text, obj);
  return callback(View, obj);
};
export const LockBadge = function LockBadge(isNew) {
  let flag = isNew.isNew;
  if (flag === undefined) {
    flag = false;
  }
  const style = isNew.style;
  const tmp = createCacheKey();
  if (flag) {
    let obj = { premiumType: null, style: null, children: null };
    obj[0] = PremiumTypes.TIER_2;
    const items = [tmp.newLockIconBadge, style];
    obj[1] = items;
    obj = { size: "xxs", color: null };
    obj[1] = importDefault(712).colors.WHITE;
    const items1 = [callback(require(4775) /* LockIcon */.LockIcon, obj), ];
    const obj1 = { variant: "text-xs/bold", color: "text-overlay-light", style: null, children: null };
    obj1[2] = tmp.badgeTextUppercase;
    const intl = require(1236) /* getSystemLocale */.intl;
    obj1[3] = intl.string(require(1236) /* getSystemLocale */.t.y2b7CA);
    items1[1] = callback(require(4251) /* Text */.Text, obj1);
    obj[2] = items1;
    let tmp7 = callback2(importDefault(8089), obj);
    const tmp11 = importDefault(8089);
  } else {
    obj = { style: null, children: null };
    const items2 = [tmp.lockIconBadge, style];
    obj[0] = items2;
    const obj2 = { size: "sm", color: null };
    obj2[1] = importDefault(712).colors.WHITE;
    obj[1] = callback(require(4775) /* LockIcon */.LockIcon, obj2);
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
  const tmp = createCacheKey();
  if (flag) {
    let obj = { premiumType: null, style: null, children: null };
    obj[0] = PremiumTypes.TIER_2;
    const items = [tmp.newLockIconBadge, style];
    obj[1] = items;
    obj = { size: "xxs", color: null };
    obj[1] = importDefault(712).colors.WHITE;
    const items1 = [callback(require(7613) /* NitroWheelIcon */.NitroWheelIcon, obj), ];
    const obj1 = { variant: "text-xs/bold", color: "text-overlay-light", style: null, children: null };
    obj1[2] = tmp.badgeTextUppercase;
    const intl = require(1236) /* getSystemLocale */.intl;
    obj1[3] = intl.string(require(1236) /* getSystemLocale */.t.y2b7CA);
    items1[1] = callback(require(4251) /* Text */.Text, obj1);
    obj[2] = items1;
    let tmp7 = callback2(importDefault(8089), obj);
    const tmp11 = importDefault(8089);
  } else {
    obj = { style: null, children: null };
    const items2 = [tmp.lockIconBadge, style];
    obj[0] = items2;
    const obj2 = { size: "sm", color: null };
    obj2[1] = importDefault(712).colors.WHITE;
    obj[1] = callback(require(7613) /* NitroWheelIcon */.NitroWheelIcon, obj2);
    tmp7 = callback(View, obj);
  }
  return tmp7;
};
export const LimitedTimeBadge = function LimitedTimeBadge(style) {
  const tmp = createCacheKey();
  let obj = { style: items, children: null };
  items = [tmp.limitedTimeBadge, style.style];
  obj = { variant: "text-xs/bold", color: "text-overlay-dark", style: tmp.badgeTextUppercase, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl.string(require(1236) /* getSystemLocale */.t["h/uBCR"]);
  obj[1] = callback(require(4251) /* Text */.Text, obj);
  return callback(View, obj);
};
export const IconBadgePill = function IconBadgePill(isDark) {
  let accessibilityLabel;
  let icon;
  isDark = isDark.isDark;
  ({ icon, accessibilityLabel } = isDark);
  const tmp = createCacheKey();
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
  let icon;
  let label;
  isDark = isDark.isDark;
  ({ icon, label } = isDark);
  const tmp = createCacheKey();
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
  items1[1] = closure_5(require(4251) /* Text */.Text, obj);
  obj[1] = items1;
  return closure_6(View, obj);
};