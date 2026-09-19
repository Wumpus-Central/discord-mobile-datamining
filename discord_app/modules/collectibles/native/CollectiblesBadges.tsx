// discord_app/modules/collectibles/native/CollectiblesBadges.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import LockIcon from "../../../design/components/Icon/native/redesign/generated/LockIcon.tsx";
import NitroWheelIcon from "../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import PremiumFeaturesBackgroundDefault from "../../user_settings/premium/native/PremiumFeaturesBackground.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const PremiumTypes = fn(1374).PremiumTypes;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4756);
let obj2 = {
  badgeTextUppercase: { textTransform: "uppercase" },
  badgeSurfaceDarkMode: { backgroundColor: nativeDefault.colors.WHITE },
  badgeSurfaceLightMode: null,
  newIconBadge: null,
  limitedTimeBadge: null,
  lockIconBadge: null,
  newLockIconBadge: null,
  badgePill: null,
  iconTextBadge: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.WHITE };
obj2.badgeSurfaceLightMode = { backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND };
let obj4 = { backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND };
obj2.newIconBadge = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  borderRadius: nativeDefault.radii.round,
  paddingHorizontal: 6,
  paddingVertical: 2,
};
let obj5 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  borderRadius: nativeDefault.radii.round,
  paddingHorizontal: 6,
  paddingVertical: 2,
};
obj2.limitedTimeBadge = {
  backgroundColor: nativeDefault.colors.WHITE,
  borderRadius: nativeDefault.radii.md,
  paddingHorizontal: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_4,
};
const obj6 = {
  backgroundColor: nativeDefault.colors.WHITE,
  borderRadius: nativeDefault.radii.md,
  paddingHorizontal: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_4,
};
obj2.lockIconBadge = {
  backgroundColor: nativeDefault.colors.ICON_OVERLAY_DARK,
  padding: 5,
  borderRadius: nativeDefault.radii.round,
};
const obj7 = {
  backgroundColor: nativeDefault.colors.ICON_OVERLAY_DARK,
  padding: 5,
  borderRadius: nativeDefault.radii.round,
};
obj2.newLockIconBadge = {
  backgroundColor: nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS_2,
  flexDirection: "row",
  paddingHorizontal: 5,
  paddingVertical: 3,
  borderRadius: nativeDefault.radii.round,
  alignItems: "center",
  gap: 2,
};
const obj8 = {
  backgroundColor: nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS_2,
  flexDirection: "row",
  paddingHorizontal: 5,
  paddingVertical: 3,
  borderRadius: nativeDefault.radii.round,
  alignItems: "center",
  gap: 2,
};
obj2.badgePill = {
  paddingHorizontal: nativeDefault.space.PX_4,
  paddingVertical: 1.5,
  borderRadius: nativeDefault.radii.round,
  flexShrink: 1,
};
const obj9 = {
  paddingHorizontal: nativeDefault.space.PX_4,
  paddingVertical: 1.5,
  borderRadius: nativeDefault.radii.round,
  flexShrink: 1,
};
obj2.iconTextBadge = {
  flexDirection: "row",
  alignItems: "center",
  gap: 4,
  paddingHorizontal: nativeDefault.space.PX_8,
  paddingVertical: 2,
  borderRadius: nativeDefault.radii.round,
};
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesBadges.tsx");

export const NewBadge = function NewBadge(style) {
  const tmp = closure_7();
  const obj = { style: null, children: null };
  const items = [tmp.newIconBadge, style.style];
  obj.style = items;
  const obj2 = { variant: "text-sm/bold", color: "text-overlay-light", style: tmp.badgeTextUppercase, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.y2b7CA);
  obj.children = hasOwnProperty(Text_Text.Text, obj2);
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
    const obj2 = { premiumType: PremiumTypes.TIER_2, style: null, children: null };
    const items = [tmp.newLockIconBadge, style];
    obj2.style = items;
    const obj3 = { size: "xxs", color: nativeDefault.colors.WHITE };
    const items1 = [hasOwnProperty(LockIcon.LockIcon, obj3)];
    const obj4 = {
      variant: "text-xs/bold",
      color: "text-overlay-light",
      style: tmp.badgeTextUppercase,
      children: null,
    };
    const intl = util.intl;
    obj4.children = intl.string(util.t.y2b7CA);
    items1[1] = hasOwnProperty(Text_Text.Text, obj4);
    obj2.children = items1;
    let tmp7 = timestampProducer(PremiumFeaturesBackgroundDefault, obj2);
  } else {
    const obj = { style: null, children: null };
    const items2 = [tmp.lockIconBadge, style];
    obj.style = items2;
    const obj5 = { size: "sm", color: nativeDefault.colors.WHITE };
    obj.children = hasOwnProperty(LockIcon.LockIcon, obj5);
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
    const obj2 = { premiumType: PremiumTypes.TIER_2, style: null, children: null };
    const items = [tmp.newLockIconBadge, style];
    obj2.style = items;
    const obj3 = { size: "xxs", color: nativeDefault.colors.WHITE };
    const items1 = [hasOwnProperty(NitroWheelIcon.NitroWheelIcon, obj3)];
    const obj4 = {
      variant: "text-xs/bold",
      color: "text-overlay-light",
      style: tmp.badgeTextUppercase,
      children: null,
    };
    const intl = util.intl;
    obj4.children = intl.string(util.t.y2b7CA);
    items1[1] = hasOwnProperty(Text_Text.Text, obj4);
    obj2.children = items1;
    let tmp7 = timestampProducer(PremiumFeaturesBackgroundDefault, obj2);
  } else {
    const obj = { style: null, children: null };
    const items2 = [tmp.lockIconBadge, style];
    obj.style = items2;
    const obj5 = { size: "sm", color: nativeDefault.colors.WHITE };
    obj.children = hasOwnProperty(NitroWheelIcon.NitroWheelIcon, obj5);
    tmp7 = hasOwnProperty(View, obj);
  }
  return tmp7;
};
export const LimitedTimeBadge = function LimitedTimeBadge(style) {
  const tmp = closure_7();
  const obj = { style: null, children: null };
  const items = [tmp.limitedTimeBadge, style.style];
  obj.style = items;
  const obj2 = { variant: "text-xs/bold", color: "text-overlay-dark", style: tmp.badgeTextUppercase, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t["h/uBCR"]);
  obj.children = hasOwnProperty(Text_Text.Text, obj2);
  return hasOwnProperty(View, obj);
};
export const IconBadgePill = function IconBadgePill(isDark) {
  isDark = isDark.isDark;
  ({ icon, accessibilityLabel } = isDark);
  const tmp = closure_7();
  const items = [tmp.badgePill];
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
  const items = [tmp.iconTextBadge];
  const obj = { style: items, children: null };
  items[1] = isDark ? tmp.badgeSurfaceDarkMode : tmp.badgeSurfaceLightMode;
  let str = "white";
  if (isDark) {
    str = "black";
  }
  const items1 = [hasOwnProperty(icon, { size: "xs", color: str })];
  let str2 = "text-overlay-light";
  if (isDark) {
    str2 = "text-overlay-dark";
  }
  items1[1] = hasOwnProperty(Text_Text.Text, {
    variant: "text-xs/bold",
    color: str2,
    style: tmp.badgeTextUppercase,
    children: label,
  });
  obj.children = items1;
  return timestampProducer(View, obj);
};
