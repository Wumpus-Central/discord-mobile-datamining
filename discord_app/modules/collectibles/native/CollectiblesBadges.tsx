// discord_app/modules/collectibles/native/CollectiblesBadges.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import LockIcon from "../../../design/components/Icon/native/redesign/generated/LockIcon.tsx";
import PremiumFeaturesBackgroundDefault from "../../user_settings/premium/native/PremiumFeaturesBackground.tsx";
import NitroWheelIcon from "../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const PremiumTypes = fn(1391).PremiumTypes;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5090);
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
let obj6 = {
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
fn(558);
const obj10 = {
  flexDirection: "row",
  alignItems: "center",
  gap: 4,
  paddingHorizontal: nativeDefault.space.PX_8,
  paddingVertical: 2,
  borderRadius: nativeDefault.radii.round,
};
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function NewBadge(style) {
      const cResult = c.c(9);
      style = style.style;
      const tmp4 = closure_7();
      if (cResult[0] === style) {
        if (cResult[1] === tmp4.newIconBadge) {
          let tmp5 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult = intl.string(util.t.y2b7CA);
          cResult[3] = stringResult;
          let tmp7 = stringResult;
        } else {
          tmp7 = cResult[3];
        }
        if (cResult[4] !== tmp4.badgeTextUppercase) {
          const obj2 = {
            variant: "text-sm/bold",
            color: "text-overlay-light",
            style: tmp4.badgeTextUppercase,
            children: tmp7,
          };
          const tmp11 = hasOwnProperty(Text_Text.Text, obj2);
          cResult[4] = tmp4.badgeTextUppercase;
          cResult[5] = tmp11;
          let tmp9 = tmp11;
        } else {
          tmp9 = cResult[5];
        }
        if (cResult[6] === tmp5) {
          if (cResult[7] === tmp9) {
            let tmp12 = cResult[8];
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
    }
  : function NewBadge(style) {
      const tmp = closure_7();
      const obj = { style: null, children: null };
      const items = [tmp.newIconBadge, style.style];
      obj.style = items;
      const obj2 = {
        variant: "text-sm/bold",
        color: "text-overlay-light",
        style: tmp.badgeTextUppercase,
        children: null,
      };
      const intl = util.intl;
      obj2.children = intl.string(util.t.y2b7CA);
      obj.children = hasOwnProperty(Text_Text.Text, obj2);
      return hasOwnProperty(View, obj);
    };
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function LockBadge(arg0) {
      let stringResult = dependencyMap;
      const cResult = c.c(6);
      ({ isNew, style: lockIconBadge } = arg0);
      let newLockIconBadge = closure_7();
      if (cResult[0] === (undefined !== isNew && isNew)) {
        if (cResult[1] === lockIconBadge) {
          if (cResult[2] === newLockIconBadge.badgeTextUppercase) {
            if (cResult[3] === newLockIconBadge.lockIconBadge) {
              if (cResult[4] === newLockIconBadge.newLockIconBadge) {
                return cResult[5];
              }
            }
          }
        }
      }
      if (undefined !== isNew && isNew) {
        const obj2 = { premiumType: PremiumTypes.TIER_2, style: null, children: null };
        const items = [newLockIconBadge.newLockIconBadge, lockIconBadge];
        obj2.style = items;
        const obj3 = { size: "xxs", color: nativeDefault.colors.WHITE };
        const items1 = [hasOwnProperty(LockIcon.LockIcon, obj3)];
        const obj4 = {
          variant: "text-xs/bold",
          color: "text-overlay-light",
          style: newLockIconBadge.badgeTextUppercase,
          children: null,
        };
        const intl = util.intl;
        stringResult = intl.string(util.t.y2b7CA);
        obj4.children = stringResult;
        items1[1] = hasOwnProperty(Text_Text.Text, obj4);
        obj2.children = items1;
        let tmp8 = timestampProducer(PremiumFeaturesBackgroundDefault, obj2);
      } else {
        const obj5 = { style: null, children: null };
        const items2 = [newLockIconBadge.lockIconBadge, lockIconBadge];
        obj5.style = items2;
        const obj6 = { size: "sm", color: nativeDefault.colors.WHITE };
        obj5.children = hasOwnProperty(LockIcon.LockIcon, obj6);
        tmp8 = hasOwnProperty(View, obj5);
      }
      cResult[0] = undefined !== isNew && isNew;
      cResult[1] = lockIconBadge;
      ({ badgeTextUppercase: tmp3[2], lockIconBadge } = newLockIconBadge);
      cResult[3] = lockIconBadge;
      newLockIconBadge = newLockIconBadge.newLockIconBadge;
      cResult[4] = newLockIconBadge;
      cResult[5] = tmp8;
    }
  : function LockBadge(isNew) {
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
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PremiumBadge(arg0) {
      let stringResult = dependencyMap;
      const cResult = c.c(6);
      ({ isNew, style: lockIconBadge } = arg0);
      let newLockIconBadge = closure_7();
      if (cResult[0] === (undefined !== isNew && isNew)) {
        if (cResult[1] === lockIconBadge) {
          if (cResult[2] === newLockIconBadge.badgeTextUppercase) {
            if (cResult[3] === newLockIconBadge.lockIconBadge) {
              if (cResult[4] === newLockIconBadge.newLockIconBadge) {
                return cResult[5];
              }
            }
          }
        }
      }
      if (undefined !== isNew && isNew) {
        const obj2 = { premiumType: PremiumTypes.TIER_2, style: null, children: null };
        const items = [newLockIconBadge.newLockIconBadge, lockIconBadge];
        obj2.style = items;
        const obj3 = { size: "xxs", color: nativeDefault.colors.WHITE };
        const items1 = [hasOwnProperty(NitroWheelIcon.NitroWheelIcon, obj3)];
        const obj4 = {
          variant: "text-xs/bold",
          color: "text-overlay-light",
          style: newLockIconBadge.badgeTextUppercase,
          children: null,
        };
        const intl = util.intl;
        stringResult = intl.string(util.t.y2b7CA);
        obj4.children = stringResult;
        items1[1] = hasOwnProperty(Text_Text.Text, obj4);
        obj2.children = items1;
        let tmp8 = timestampProducer(PremiumFeaturesBackgroundDefault, obj2);
      } else {
        const obj5 = { style: null, children: null };
        const items2 = [newLockIconBadge.lockIconBadge, lockIconBadge];
        obj5.style = items2;
        const obj6 = { size: "sm", color: nativeDefault.colors.WHITE };
        obj5.children = hasOwnProperty(NitroWheelIcon.NitroWheelIcon, obj6);
        tmp8 = hasOwnProperty(View, obj5);
      }
      cResult[0] = undefined !== isNew && isNew;
      cResult[1] = lockIconBadge;
      ({ badgeTextUppercase: tmp3[2], lockIconBadge } = newLockIconBadge);
      cResult[3] = lockIconBadge;
      newLockIconBadge = newLockIconBadge.newLockIconBadge;
      cResult[4] = newLockIconBadge;
      cResult[5] = tmp8;
    }
  : function PremiumBadge(isNew) {
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
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function LimitedTimeBadge(style) {
      const cResult = c.c(9);
      style = style.style;
      const tmp4 = closure_7();
      if (cResult[0] === style) {
        if (cResult[1] === tmp4.limitedTimeBadge) {
          let tmp5 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult = intl.string(util.t["h/uBCR"]);
          cResult[3] = stringResult;
          let tmp7 = stringResult;
        } else {
          tmp7 = cResult[3];
        }
        if (cResult[4] !== tmp4.badgeTextUppercase) {
          const obj2 = {
            variant: "text-xs/bold",
            color: "text-overlay-dark",
            style: tmp4.badgeTextUppercase,
            children: tmp7,
          };
          const tmp11 = hasOwnProperty(Text_Text.Text, obj2);
          cResult[4] = tmp4.badgeTextUppercase;
          cResult[5] = tmp11;
          let tmp9 = tmp11;
        } else {
          tmp9 = cResult[5];
        }
        if (cResult[6] === tmp5) {
          if (cResult[7] === tmp9) {
            let tmp12 = cResult[8];
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
    }
  : function LimitedTimeBadge(style) {
      const tmp = closure_7();
      const obj = { style: null, children: null };
      const items = [tmp.limitedTimeBadge, style.style];
      obj.style = items;
      const obj2 = {
        variant: "text-xs/bold",
        color: "text-overlay-dark",
        style: tmp.badgeTextUppercase,
        children: null,
      };
      const intl = util.intl;
      obj2.children = intl.string(util.t["h/uBCR"]);
      obj.children = hasOwnProperty(Text_Text.Text, obj2);
      return hasOwnProperty(View, obj);
    };
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function IconBadgePill(arg0) {
      const cResult = c.c(10);
      ({ icon, accessibilityLabel, isDark } = arg0);
      const tmp2 = closure_7();
      const tmp3 = isDark ? tmp2.badgeSurfaceDarkMode : tmp2.badgeSurfaceLightMode;
      if (cResult[0] === tmp2.badgePill) {
        if (cResult[1] === tmp3) {
          let tmp4 = cResult[2];
        }
        let str = "white";
        if (isDark) {
          str = "black";
        }
        if (cResult[3] === icon) {
          if (cResult[4] === str) {
            let tmp5 = cResult[5];
          }
          if (cResult[6] === accessibilityLabel) {
            if (cResult[7] === tmp4) {
              if (cResult[8] === tmp5) {
                let tmp8 = cResult[9];
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
    }
  : function IconBadgePill(isDark) {
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesBadges.tsx");

export const NewBadge = tmp4;
export const LockBadge = tmp5;
export const PremiumBadge = tmp6;
export const LimitedTimeBadge = tmp7;
export const IconBadgePill = tmp8;
export const IconTextBadge = ReactCompilerGating.isReactCompilerEnabled()
  ? function IconTextBadge(arg0) {
      const cResult = c.c(14);
      ({ icon, label, isDark } = arg0);
      const tmp4 = closure_7();
      const tmp5 = isDark ? tmp4.badgeSurfaceDarkMode : tmp4.badgeSurfaceLightMode;
      if (cResult[0] === tmp4.iconTextBadge) {
        if (cResult[1] === tmp5) {
          let tmp6 = cResult[2];
        }
        let str = "white";
        if (isDark) {
          str = "black";
        }
        if (cResult[3] === icon) {
          if (cResult[4] === str) {
            let tmp7 = cResult[5];
          }
          let str2 = "text-overlay-light";
          if (isDark) {
            str2 = "text-overlay-dark";
          }
          if (cResult[6] === label) {
            if (cResult[7] === tmp4.badgeTextUppercase) {
              if (cResult[8] === str2) {
                let tmp10 = cResult[9];
              }
              if (cResult[10] === tmp6) {
                if (cResult[11] === tmp7) {
                  if (cResult[12] === tmp10) {
                    let tmp13 = cResult[13];
                  }
                  return tmp13;
                }
              }
              const obj2 = { style: tmp6, children: null };
              const items = [tmp7, tmp10];
              obj2.children = items;
              const tmp16 = timestampProducer(View, obj2);
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
    }
  : function IconTextBadge(isDark) {
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
