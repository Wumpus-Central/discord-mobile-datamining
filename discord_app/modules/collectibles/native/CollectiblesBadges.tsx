// === Module 8519: CollectiblesBadges ===

// Module 8519 (CollectiblesBadges)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import Text_Text from "Text/Text" /* 4892 */;
import LockIcon3 from "LockIcon" /* 5886 */;
import NitroWheelIcon3 from "NitroWheelIcon" /* 8346 */;
import PremiumFeaturesBackgroundDefault from "PremiumFeaturesBackground" /* 8520 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
const View = react_native.View;
const PremiumTypes = PremiumConstants.PremiumTypes;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { badgeTextUppercase: { textTransform: "uppercase" }, badgeSurfaceDarkMode: obj2, badgeSurfaceLightMode: obj3, newIconBadge: obj4, limitedTimeBadge: obj5, lockIconBadge: obj6, newLockIconBadge: { backgroundColor: nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS_2, flexDirection: "row", paddingHorizontal: 5, paddingVertical: 3, borderRadius: nativeDefault.radii.round, alignItems: "center", gap: 2 }, badgePill: { paddingHorizontal: nativeDefault.space.PX_4, paddingVertical: 1.5, borderRadius: nativeDefault.radii.round, flexShrink: 1 }, iconTextBadge: { flexDirection: "row", alignItems: "center", gap: 4, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: 2, borderRadius: nativeDefault.radii.round } };
obj2 = { backgroundColor: nativeDefault.colors.WHITE };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.round, paddingHorizontal: 6, paddingVertical: 2 };
obj5 = { backgroundColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.md, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
obj6 = { backgroundColor: nativeDefault.colors.ICON_OVERLAY_DARK, padding: 5, borderRadius: nativeDefault.radii.round };
({ backgroundColor: nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS_2, flexDirection: "row", paddingHorizontal: 5, paddingVertical: 3, borderRadius: nativeDefault.radii.round, alignItems: "center", gap: 2 });
({ paddingHorizontal: nativeDefault.space.PX_4, paddingVertical: 1.5, borderRadius: nativeDefault.radii.round, flexShrink: 1 });
({ flexDirection: "row", alignItems: "center", gap: 4, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: 2, borderRadius: nativeDefault.radii.round });
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  const obj = react2;
  const cResult = obj.c(9);
  style = style.style;
  const tmp4 = closure_7();
  if (cResult[0] === style) {
    let tmp5;
    let tmp7;
    let tmp9;
    if (cResult[1] === tmp4.newIconBadge) {
      tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    const badgeTextUppercase = tmp4.badgeTextUppercase;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = intl2.intl;
      const stringResult = intl.string(intl2.t.y2b7CA);
      cResult[3] = stringResult;
      tmp7 = stringResult;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] !== tmp4.badgeTextUppercase) {
      const obj2 = { variant: "text-sm/bold", color: "text-overlay-light", style: badgeTextUppercase, children: tmp7 };
      const tmp11 = hasOwnProperty(Text_Text.Text, obj2);
      cResult[4] = tmp4.badgeTextUppercase;
      cResult[5] = tmp11;
      tmp9 = tmp11;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] === tmp5) {
      let tmp12;
      if (cResult[7] === tmp9) {
        tmp12 = cResult[8];
      }
      return tmp12;
    }
    const obj3 = { style: tmp5, children: tmp9 };
    const tmp15 = hasOwnProperty(View, obj3);
    cResult[6] = tmp5;
    cResult[7] = tmp9;
    cResult[8] = tmp15;
    tmp12 = tmp15;
  }
  const items = [tmp4.newIconBadge, style];
  cResult[0] = style;
  cResult[1] = tmp4.newIconBadge;
  cResult[2] = items;
  tmp5 = items;
}) : ((style) => {
  let Text;
  let intl;
  let items;
  let obj2;
  style = style.style;
  const tmp = closure_7();
  const obj = { style: items, children: hasOwnProperty(Text, obj2) };
  items = [tmp.newIconBadge, style];
  obj2 = { variant: "text-sm/bold", color: "text-overlay-light", style: tmp.badgeTextUppercase, children: intl.string(intl2.t.y2b7CA) };
  Text = Text_Text.Text;
  intl = intl2.intl;
  return hasOwnProperty(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let LockIcon;
  let intl;
  let isNew;
  let items;
  let items1;
  let items2;
  let obj6;
  let style;
  let tmp10;
  const obj = react2;
  const cResult = obj.c(6);
  ({ isNew, style } = arg0);
  const tmp5 = closure_7();
  if (cResult[0] === (undefined !== isNew && isNew)) {
    if (cResult[1] === style) {
      if (cResult[2] === tmp5.badgeTextUppercase) {
        if (cResult[3] === tmp5.lockIconBadge) {
          let tmp6;
          if (cResult[4] === tmp5.newLockIconBadge) {
            tmp6 = cResult[5];
          }
          return tmp6;
        }
      }
    }
  }
  if (undefined !== isNew && isNew) {
    const obj2 = { premiumType: PremiumTypes.TIER_2, style: items, children: items1 };
    items = [tmp5.newLockIconBadge, style];
    const obj3 = { size: "xxs", color: nativeDefault.colors.WHITE };
    const tmp13 = PremiumFeaturesBackgroundDefault;
    const LockIcon2 = LockIcon3.LockIcon;
    items1 = [hasOwnProperty(LockIcon2, obj3), ];
    const obj4 = { variant: "text-xs/bold", color: "text-overlay-light", style: tmp5.badgeTextUppercase, children: intl.string(intl2.t.y2b7CA) };
    const Text = Text_Text.Text;
    intl = intl2.intl;
    items1[1] = hasOwnProperty(Text, obj4);
    tmp10 = metroRequire(tmp13, obj2);
  } else {
    const obj5 = { style: items2, children: hasOwnProperty(LockIcon, obj6) };
    items2 = [tmp5.lockIconBadge, style];
    obj6 = { size: "sm", color: nativeDefault.colors.WHITE };
    LockIcon = LockIcon3.LockIcon;
    tmp10 = hasOwnProperty(View, obj5);
  }
  cResult[0] = undefined !== isNew && isNew;
  cResult[1] = style;
  cResult[2] = tmp5.badgeTextUppercase;
  cResult[3] = tmp5.lockIconBadge;
  cResult[4] = tmp5.newLockIconBadge;
  cResult[5] = tmp10;
  tmp6 = tmp10;
}) : ((isNew) => {
  let LockIcon;
  let intl;
  let items;
  let items1;
  let items2;
  let obj5;
  let tmp7;
  let flag = isNew.isNew;
  if (flag === undefined) {
    flag = false;
  }
  const style = isNew.style;
  const tmp = closure_7();
  if (flag) {
    const obj2 = { premiumType: PremiumTypes.TIER_2, style: items, children: items1 };
    items = [tmp.newLockIconBadge, style];
    const obj3 = { size: "xxs", color: nativeDefault.colors.WHITE };
    const tmp11 = PremiumFeaturesBackgroundDefault;
    const LockIcon2 = LockIcon3.LockIcon;
    items1 = [hasOwnProperty(LockIcon2, obj3), ];
    const obj4 = { variant: "text-xs/bold", color: "text-overlay-light", style: tmp.badgeTextUppercase, children: intl.string(intl2.t.y2b7CA) };
    const Text = Text_Text.Text;
    intl = intl2.intl;
    items1[1] = hasOwnProperty(Text, obj4);
    tmp7 = metroRequire(tmp11, obj2);
  } else {
    const obj = { style: items2, children: hasOwnProperty(LockIcon, obj5) };
    items2 = [tmp.lockIconBadge, style];
    obj5 = { size: "sm", color: nativeDefault.colors.WHITE };
    LockIcon = LockIcon3.LockIcon;
    tmp7 = hasOwnProperty(View, obj);
  }
  return tmp7;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let NitroWheelIcon;
  let intl;
  let isNew;
  let items;
  let items1;
  let items2;
  let obj6;
  let style;
  let tmp10;
  const obj = react2;
  const cResult = obj.c(6);
  ({ isNew, style } = arg0);
  const tmp5 = closure_7();
  if (cResult[0] === (undefined !== isNew && isNew)) {
    if (cResult[1] === style) {
      if (cResult[2] === tmp5.badgeTextUppercase) {
        if (cResult[3] === tmp5.lockIconBadge) {
          let tmp6;
          if (cResult[4] === tmp5.newLockIconBadge) {
            tmp6 = cResult[5];
          }
          return tmp6;
        }
      }
    }
  }
  if (undefined !== isNew && isNew) {
    const obj2 = { premiumType: PremiumTypes.TIER_2, style: items, children: items1 };
    items = [tmp5.newLockIconBadge, style];
    const obj3 = { size: "xxs", color: nativeDefault.colors.WHITE };
    const tmp13 = PremiumFeaturesBackgroundDefault;
    const NitroWheelIcon2 = NitroWheelIcon3.NitroWheelIcon;
    items1 = [hasOwnProperty(NitroWheelIcon2, obj3), ];
    const obj4 = { variant: "text-xs/bold", color: "text-overlay-light", style: tmp5.badgeTextUppercase, children: intl.string(intl2.t.y2b7CA) };
    const Text = Text_Text.Text;
    intl = intl2.intl;
    items1[1] = hasOwnProperty(Text, obj4);
    tmp10 = metroRequire(tmp13, obj2);
  } else {
    const obj5 = { style: items2, children: hasOwnProperty(NitroWheelIcon, obj6) };
    items2 = [tmp5.lockIconBadge, style];
    obj6 = { size: "sm", color: nativeDefault.colors.WHITE };
    NitroWheelIcon = NitroWheelIcon3.NitroWheelIcon;
    tmp10 = hasOwnProperty(View, obj5);
  }
  cResult[0] = undefined !== isNew && isNew;
  cResult[1] = style;
  cResult[2] = tmp5.badgeTextUppercase;
  cResult[3] = tmp5.lockIconBadge;
  cResult[4] = tmp5.newLockIconBadge;
  cResult[5] = tmp10;
  tmp6 = tmp10;
}) : ((isNew) => {
  let NitroWheelIcon;
  let intl;
  let items;
  let items1;
  let items2;
  let obj5;
  let tmp7;
  let flag = isNew.isNew;
  if (flag === undefined) {
    flag = false;
  }
  const style = isNew.style;
  const tmp = closure_7();
  if (flag) {
    const obj2 = { premiumType: PremiumTypes.TIER_2, style: items, children: items1 };
    items = [tmp.newLockIconBadge, style];
    const obj3 = { size: "xxs", color: nativeDefault.colors.WHITE };
    const tmp11 = PremiumFeaturesBackgroundDefault;
    const NitroWheelIcon2 = NitroWheelIcon3.NitroWheelIcon;
    items1 = [hasOwnProperty(NitroWheelIcon2, obj3), ];
    const obj4 = { variant: "text-xs/bold", color: "text-overlay-light", style: tmp.badgeTextUppercase, children: intl.string(intl2.t.y2b7CA) };
    const Text = Text_Text.Text;
    intl = intl2.intl;
    items1[1] = hasOwnProperty(Text, obj4);
    tmp7 = metroRequire(tmp11, obj2);
  } else {
    const obj = { style: items2, children: hasOwnProperty(NitroWheelIcon, obj5) };
    items2 = [tmp.lockIconBadge, style];
    obj5 = { size: "sm", color: nativeDefault.colors.WHITE };
    NitroWheelIcon = NitroWheelIcon3.NitroWheelIcon;
    tmp7 = hasOwnProperty(View, obj);
  }
  return tmp7;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  const obj = react2;
  const cResult = obj.c(9);
  style = style.style;
  const tmp4 = closure_7();
  if (cResult[0] === style) {
    let tmp5;
    let tmp7;
    let tmp9;
    if (cResult[1] === tmp4.limitedTimeBadge) {
      tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    const badgeTextUppercase = tmp4.badgeTextUppercase;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = intl2.intl;
      const stringResult = intl.string(intl2.t["h/uBCR"]);
      cResult[3] = stringResult;
      tmp7 = stringResult;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] !== tmp4.badgeTextUppercase) {
      const obj2 = { variant: "text-xs/bold", color: "text-overlay-dark", style: badgeTextUppercase, children: tmp7 };
      const tmp11 = hasOwnProperty(Text_Text.Text, obj2);
      cResult[4] = tmp4.badgeTextUppercase;
      cResult[5] = tmp11;
      tmp9 = tmp11;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] === tmp5) {
      let tmp12;
      if (cResult[7] === tmp9) {
        tmp12 = cResult[8];
      }
      return tmp12;
    }
    const obj3 = { style: tmp5, children: tmp9 };
    const tmp15 = hasOwnProperty(View, obj3);
    cResult[6] = tmp5;
    cResult[7] = tmp9;
    cResult[8] = tmp15;
    tmp12 = tmp15;
  }
  const items = [tmp4.limitedTimeBadge, style];
  cResult[0] = style;
  cResult[1] = tmp4.limitedTimeBadge;
  cResult[2] = items;
  tmp5 = items;
}) : ((style) => {
  let Text;
  let intl;
  let items;
  let obj2;
  style = style.style;
  const tmp = closure_7();
  const obj = { style: items, children: hasOwnProperty(Text, obj2) };
  items = [tmp.limitedTimeBadge, style];
  obj2 = { variant: "text-xs/bold", color: "text-overlay-dark", style: tmp.badgeTextUppercase, children: intl.string(intl2.t["h/uBCR"]) };
  Text = Text_Text.Text;
  intl = intl2.intl;
  return hasOwnProperty(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityLabel;
  let icon;
  let isDark;
  const obj = react2;
  const cResult = obj.c(10);
  ({ icon, accessibilityLabel, isDark } = arg0);
  const tmp2 = closure_7();
  const tmp3 = isDark ? tmp2.badgeSurfaceDarkMode : tmp2.badgeSurfaceLightMode;
  if (cResult[0] === tmp2.badgePill) {
    let tmp4;
    if (cResult[1] === tmp3) {
      tmp4 = cResult[2];
    }
    let str = "white";
    if (isDark) {
      str = "black";
    }
    if (cResult[3] === icon) {
      let tmp5;
      if (cResult[4] === str) {
        tmp5 = cResult[5];
      }
      if (cResult[6] === accessibilityLabel) {
        if (cResult[7] === tmp4) {
          let tmp8;
          if (cResult[8] === tmp5) {
            tmp8 = cResult[9];
          }
          return tmp8;
        }
      }
      const obj2 = { style: tmp4, accessibilityLabel, children: tmp5 };
      const tmp11 = hasOwnProperty(View, obj2);
      cResult[6] = accessibilityLabel;
      cResult[7] = tmp4;
      cResult[8] = tmp5;
      cResult[9] = tmp11;
      tmp8 = tmp11;
    }
    const obj3 = { size: "xs", color: str };
    const tmp7 = hasOwnProperty(icon, obj3);
    cResult[3] = icon;
    cResult[4] = str;
    cResult[5] = tmp7;
    tmp5 = tmp7;
  }
  const items = [tmp2.badgePill, tmp3];
  cResult[0] = tmp2.badgePill;
  cResult[1] = tmp3;
  cResult[2] = items;
  tmp4 = items;
}) : ((isDark) => {
  let accessibilityLabel;
  let icon;
  let str;
  isDark = isDark.isDark;
  ({ icon, accessibilityLabel } = isDark);
  const tmp = closure_7();
  const items = [tmp.badgePill, ];
  items[1] = isDark ? tmp.badgeSurfaceDarkMode : tmp.badgeSurfaceLightMode;
  const obj = { style: items, accessibilityLabel, children: hasOwnProperty(icon, { size: "xs", color: str }) };
  str = "white";
  if (isDark) {
    str = "black";
  }
  return hasOwnProperty(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let icon;
  let isDark;
  let items;
  let label;
  const obj = react2;
  const cResult = obj.c(14);
  ({ icon, label, isDark } = arg0);
  const tmp4 = closure_7();
  const tmp5 = isDark ? tmp4.badgeSurfaceDarkMode : tmp4.badgeSurfaceLightMode;
  if (cResult[0] === tmp4.iconTextBadge) {
    let tmp6;
    if (cResult[1] === tmp5) {
      tmp6 = cResult[2];
    }
    let str = "white";
    if (isDark) {
      str = "black";
    }
    if (cResult[3] === icon) {
      let tmp7;
      if (cResult[4] === str) {
        tmp7 = cResult[5];
      }
      let str2 = "text-overlay-light";
      if (isDark) {
        str2 = "text-overlay-dark";
      }
      if (cResult[6] === label) {
        if (cResult[7] === tmp4.badgeTextUppercase) {
          let tmp10;
          if (cResult[8] === str2) {
            tmp10 = cResult[9];
          }
          if (cResult[10] === tmp6) {
            if (cResult[11] === tmp7) {
              let tmp13;
              if (cResult[12] === tmp10) {
                tmp13 = cResult[13];
              }
              return tmp13;
            }
          }
          const obj2 = { style: tmp6, children: items };
          items = [tmp7, tmp10];
          const tmp16 = metroRequire(View, obj2);
          cResult[10] = tmp6;
          cResult[11] = tmp7;
          cResult[12] = tmp10;
          cResult[13] = tmp16;
          tmp13 = tmp16;
        }
      }
      const obj3 = { variant: "text-xs/bold", color: str2, style: tmp4.badgeTextUppercase, children: label };
      const tmp12 = hasOwnProperty(Text_Text.Text, obj3);
      cResult[6] = label;
      cResult[7] = tmp4.badgeTextUppercase;
      cResult[8] = str2;
      cResult[9] = tmp12;
      tmp10 = tmp12;
    }
    const obj4 = { size: "xs", color: str };
    const tmp9 = hasOwnProperty(icon, obj4);
    cResult[3] = icon;
    cResult[4] = str;
    cResult[5] = tmp9;
    tmp7 = tmp9;
  }
  const items1 = [tmp4.iconTextBadge, tmp5];
  cResult[0] = tmp4.iconTextBadge;
  cResult[1] = tmp5;
  cResult[2] = items1;
  tmp6 = items1;
}) : ((isDark) => {
  let icon;
  let items1;
  let label;
  isDark = isDark.isDark;
  ({ icon, label } = isDark);
  const tmp = closure_7();
  const items = [tmp.iconTextBadge, ];
  const obj = { style: items, children: items1 };
  items[1] = isDark ? tmp.badgeSurfaceDarkMode : tmp.badgeSurfaceLightMode;
  let str = "white";
  if (isDark) {
    str = "black";
  }
  items1 = [hasOwnProperty(icon, { size: "xs", color: str }), ];
  let str2 = "text-overlay-light";
  const Text = Text_Text.Text;
  if (isDark) {
    str2 = "text-overlay-dark";
  }
  const obj2 = { variant: "text-xs/bold", color: str2, style: tmp.badgeTextUppercase, children: label };
  items1[1] = hasOwnProperty(Text, obj2);
  return metroRequire(View, obj);
});
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesBadges.tsx");

export const NewBadge = tmp5;
export const LockBadge = tmp6;
export const PremiumBadge = tmp7;
export const LimitedTimeBadge = tmp8;
export const IconBadgePill = tmp9;
export const IconTextBadge = tmp10;