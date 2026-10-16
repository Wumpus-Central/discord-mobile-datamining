// === Module 13025: Badge/Badge ===

// Module 13025 (Badge/Badge)
import _mod17 from "module_17" /* 17 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import useBadgeTextVariant from "useBadgeTextVariant" /* 4889 */;
import Text_Text from "Text/Text" /* 5150 */;
import BadgeShared from "BadgeShared" /* 13026 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5154 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function getBadgeColors(variant) {
  if ("secondary" === variant) {
    const obj2 = { background: nativeDefault.colors.BADGE_SECONDARY_BACKGROUND, text: nativeDefault.colors.BADGE_SECONDARY_TEXT };
    return obj2;
  } else if ("primary" === variant) {
    const obj3 = { background: nativeDefault.colors.BADGE_PRIMARY_BACKGROUND, text: nativeDefault.colors.BADGE_PRIMARY_TEXT };
    return obj3;
  } else if ("expressive" === variant) {
    const obj4 = { background: nativeDefault.colors.BADGE_EXPRESSIVE_BACKGROUND, text: nativeDefault.colors.BADGE_EXPRESSIVE_TEXT };
    return obj4;
  } else if ("rarity-common" === variant) {
    const obj5 = { background: nativeDefault.colors.BADGE_COMMON_BACKGROUND, border: nativeDefault.colors.BADGE_COMMON_BORDER, text: nativeDefault.colors.BADGE_COMMON_TEXT };
    return obj5;
  } else if ("rarity-rare" === variant) {
    const obj6 = { background: nativeDefault.colors.BADGE_RARE_BACKGROUND, border: nativeDefault.colors.BADGE_RARE_BORDER_GRADIENT_START, text: nativeDefault.colors.BADGE_RARE_TEXT };
    return obj6;
  } else if ("rarity-epic" === variant) {
    const obj7 = { background: nativeDefault.colors.BADGE_EPIC_BACKGROUND, border: nativeDefault.colors.BADGE_EPIC_BORDER_GRADIENT_START, text: nativeDefault.colors.BADGE_EPIC_TEXT };
    return obj7;
  } else if ("rarity-mythic" === variant) {
    const obj = { background: nativeDefault.colors.BADGE_MYTHIC_BACKGROUND, border: nativeDefault.colors.BADGE_MYTHIC_TEXT, text: nativeDefault.colors.BADGE_MYTHIC_TEXT };
    return obj;
  }
}
const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let closure_7 = createStyles.createStyles((variant) => {
  let num = 0;
  const tmp = getBadgeColors(variant);
  const obj = { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_4, minWidth: 0, maxWidth: "100%", minHeight: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, backgroundColor: tmp.background, borderWidth: null, borderColor: null };
  if (tmp2) {
    num = 1;
  }
  obj.borderWidth = num;
  let str = tmp.border;
  if (str == null) {
    str = "transparent";
  }
  obj.borderColor = str;
  return { badge: obj, label: { flexShrink: 1, minWidth: 0, textAlign: "center", textTransform: "uppercase", color: tmp.text } };
});
const result = size.fileFinishedImporting("design/components/Badge/native/Badge.native.tsx");

export const Badge = ReactCompilerGating.isReactCompilerEnabled() ? (function Badge(arg0) {
  const cResult = c.c(13);
  ({ type, variant, icon } = arg0);
  if (undefined === variant) {
    variant = BadgeShared.DEFAULT_BADGE_VARIANT;
  }
  const tmp4 = closure_7(variant);
  const badgeTextVariant = useBadgeTextVariant.useBadgeTextVariant();
  if (cResult[0] !== type) {
    if ("new" === type) {
      const intl4 = util.intl;
      let text = intl4.string(util.t.y2b7CA);
    } else if ("beta" === type) {
      const intl3 = util.intl;
      text = intl3.string(util.t.oW0eUd);
    } else {
      if ("early_access" === type) {
        const intl2 = util.intl;
        text = intl2.string(util.t.EYxi0o);
      } else if ("free_trial" !== type) {
        text = type.text;
      }
      const intl = util.intl;
      text = intl.string(util.t.IBYG5U);
    }
    cResult[0] = type;
    cResult[1] = text;
  } else {
    if (cResult[2] === icon) {
      if (cResult[3] === variant) {
        let tmp8 = cResult[4];
      }
      if (cResult[5] === tmp4.label) {
        if (cResult[6] === tmp6) {
          if (cResult[7] === badgeTextVariant) {
            let tmp12 = cResult[8];
          }
          if (cResult[9] === tmp4.badge) {
            if (cResult[10] === tmp8) {
              if (cResult[11] === tmp12) {
                let tmp15 = cResult[12];
              }
              return tmp15;
            }
          }
          const obj2 = { style: tmp4.badge, children: null };
          const items = [tmp8, tmp12];
          obj2.children = items;
          const tmp18 = hasOwnProperty(View, obj2);
          cResult[9] = tmp4.badge;
          cResult[10] = tmp8;
          cResult[11] = tmp12;
          cResult[12] = tmp18;
          tmp15 = tmp18;
        }
      }
      const obj3 = { variant: badgeTextVariant, color: "none", lineClamp: 1, style: tmp4.label, children: tmp6 };
      const tmp14 = React4(Text_Text.Text, obj3);
      cResult[5] = tmp4.label;
      cResult[6] = tmp6;
      cResult[7] = badgeTextVariant;
      cResult[8] = tmp14;
      tmp12 = tmp14;
    }
    let tmp9 = null;
    if (null != icon) {
      const obj4 = { size: "xxs", color: getBadgeColors(variant).text, accessible: false };
      tmp9 = React4(icon, obj4);
    }
    cResult[2] = icon;
    cResult[3] = variant;
    cResult[4] = tmp9;
    tmp8 = tmp9;
  }
  const tmpResult = useBadgeTextVariant;
}) : (function Badge(icon) {
  ({ type, variant } = icon);
  if (variant === undefined) {
    variant = BadgeShared.DEFAULT_BADGE_VARIANT;
  }
  icon = icon.icon;
  const tmp3 = closure_7(variant);
  const badgeTextVariant = useBadgeTextVariant.useBadgeTextVariant();
  if ("new" === type) {
    const intl4 = util.intl;
    let text = intl4.string(util.t.y2b7CA);
  } else if ("beta" === type) {
    const intl3 = util.intl;
    text = intl3.string(util.t.oW0eUd);
  } else if ("early_access" === type) {
    const intl2 = util.intl;
    text = intl2.string(util.t.EYxi0o);
  } else if ("free_trial" === type) {
    const intl = util.intl;
    text = intl.string(util.t.IBYG5U);
  } else {
    text = type.text;
  }
  const obj2 = { style: tmp3.badge, children: null };
  let tmp9 = null;
  if (null != icon) {
    const obj3 = { size: "xxs", color: getBadgeColors(variant).text, accessible: false };
    tmp9 = React4(icon, obj3);
  }
  const items = [tmp9, React4(Text_Text.Text, { variant: badgeTextVariant, color: "none", lineClamp: 1, style: tmp3.label, children: text })];
  obj2.children = items;
  return hasOwnProperty(View, obj2);
});