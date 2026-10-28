// === Module 7269: Badge ===

// Module 7269 (Badge)
import _mod17 from "module_17" /* 17 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import useBadgeTextVariant from "useBadgeTextVariant" /* 5071 */;
import Text_Text from "Text/Text" /* 5270 */;
import useToken from "useToken" /* 5288 */;
import LinearGradientDefault from "LinearGradient" /* 5294 */;
import BadgeShared from "BadgeShared" /* 7270 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5004 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function getBadgeColors(variant) {
  switch (variant) {
    case "secondary":
      const obj2 = { background: nativeDefault.colors.BADGE_SECONDARY_BACKGROUND, border: nativeDefault.colors.BADGE_SECONDARY_BORDER, text: nativeDefault.colors.BADGE_SECONDARY_TEXT };
      return obj2;
    case "primary":
      const obj3 = { background: nativeDefault.colors.BADGE_PRIMARY_BACKGROUND, border: nativeDefault.colors.BADGE_PRIMARY_BORDER, text: nativeDefault.colors.BADGE_PRIMARY_TEXT };
      return obj3;
    case "expressive":
      const obj4 = { background: nativeDefault.colors.BADGE_EXPRESSIVE_BACKGROUND, border: nativeDefault.colors.BADGE_EXPRESSIVE_BORDER, text: nativeDefault.colors.BADGE_EXPRESSIVE_TEXT };
      return obj4;
    case "warning":
      const obj5 = { background: nativeDefault.colors.BADGE_WARNING_BACKGROUND, border: nativeDefault.colors.BADGE_WARNING_BORDER, text: nativeDefault.colors.BADGE_WARNING_TEXT };
      return obj5;
    case "critical":
      const obj6 = { background: nativeDefault.colors.BADGE_CRITICAL_BACKGROUND, border: nativeDefault.colors.BADGE_CRITICAL_BORDER, text: nativeDefault.colors.BADGE_CRITICAL_TEXT };
      return obj6;
    case "success":
      const obj7 = { background: nativeDefault.colors.BADGE_SUCCESS_BACKGROUND, border: nativeDefault.colors.BADGE_SUCCESS_BORDER, text: nativeDefault.colors.BADGE_SUCCESS_TEXT };
      return obj7;
    case "notification":
      const obj8 = { background: nativeDefault.colors.BADGE_NOTIFICATION_BACKGROUND, border: nativeDefault.colors.BADGE_NOTIFICATION_BORDER, text: nativeDefault.colors.BADGE_NOTIFICATION_TEXT };
      return obj8;
    case "premium":
      const obj9 = { background: nativeDefault.colors.BADGE_PREMIUM_BACKGROUND_GRADIENT_START, text: nativeDefault.colors.BADGE_PREMIUM_TEXT };
      return obj9;
    case "inverted":
      const obj10 = { background: nativeDefault.colors.BADGE_INVERTED_BACKGROUND, border: nativeDefault.colors.BADGE_INVERTED_BORDER, text: nativeDefault.colors.BADGE_INVERTED_TEXT };
      return obj10;
    case "rarity-common":
      const obj11 = { background: nativeDefault.colors.BADGE_COMMON_BACKGROUND, border: nativeDefault.colors.BADGE_COMMON_BORDER, text: nativeDefault.colors.BADGE_COMMON_TEXT };
      return obj11;
    case "rarity-rare":
      const obj12 = { background: nativeDefault.colors.BADGE_RARE_BACKGROUND, border: nativeDefault.colors.BADGE_RARE_BORDER_GRADIENT_START, text: nativeDefault.colors.BADGE_RARE_TEXT };
      return obj12;
    case "rarity-epic":
      const obj13 = { background: nativeDefault.colors.BADGE_EPIC_BACKGROUND, border: nativeDefault.colors.BADGE_EPIC_BORDER_GRADIENT_START, text: nativeDefault.colors.BADGE_EPIC_TEXT };
      return obj13;
    case "rarity-mythic":
      const obj = { background: nativeDefault.colors.BADGE_MYTHIC_BACKGROUND, border: nativeDefault.colors.BADGE_MYTHIC_TEXT, text: nativeDefault.colors.BADGE_MYTHIC_TEXT };
      return obj;
    default:
  }
}
const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let closure_7 = createStyles.createStyles((variant) => {
  const tmp = getBadgeColors(variant);
  let tmp2 = null;
  if ("premium" === variant) {
    tmp2 = React4(closure_8, { style: null });
  }
  const obj = { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_4, minWidth: 0, maxWidth: "100%", minHeight: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, backgroundColor: tmp.background, borderWidth: null, borderColor: null, overflow: null };
  let num = 0;
  if (tmp6) {
    num = 1;
  }
  obj.borderWidth = num;
  let str = tmp.border;
  if (str == null) {
    str = "transparent";
  }
  obj.borderColor = str;
  let str2 = "visible";
  if (null != tmp2) {
    str2 = "hidden";
  }
  obj.overflow = str2;
  return { badge: obj, gradient: { position: "absolute", top: -1, bottom: -1, left: -1, right: -1 }, label: { flexShrink: 1, minWidth: 0, textAlign: "center", textTransform: "uppercase", color: tmp.text } };
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumGradient(style) {
  const cResult = c.c(9);
  style = style.style;
  const token = useToken.useToken(nativeDefault.colors.BADGE_PREMIUM_BACKGROUND_GRADIENT_START);
  const token1 = useToken.useToken(nativeDefault.colors.BADGE_PREMIUM_BACKGROUND_GRADIENT_MID);
  const token2 = useToken.useToken(nativeDefault.colors.BADGE_PREMIUM_BACKGROUND_GRADIENT_END);
  if (cResult[0] === token) {
    if (cResult[1] === token1) {
      if (cResult[2] === token2) {
        let tmp7 = cResult[3];
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const point = { x: 0, y: 0 };
        const point1 = { x: 1, y: 0 };
        cResult[4] = point;
        cResult[5] = point1;
        let tmp10 = point1;
        let tmp9 = point;
      } else {
        tmp9 = cResult[4];
        tmp10 = cResult[5];
      }
      if (cResult[6] === tmp7) {
        if (cResult[7] === style) {
          let tmp11 = cResult[8];
        }
        return tmp11;
      }
      const obj5 = { start: tmp9, end: tmp10, colors: tmp7, style };
      const tmp13 = React4(LinearGradientDefault, obj5);
      cResult[6] = tmp7;
      cResult[7] = style;
      cResult[8] = tmp13;
      tmp11 = tmp13;
    }
  }
  const items = [token, token1, token2];
  cResult[0] = token;
  cResult[1] = token1;
  cResult[2] = token2;
  cResult[3] = items;
  tmp7 = items;
}) : (function PremiumGradient(style) {
  const colors = [useToken.useToken(nativeDefault.colors.BADGE_PREMIUM_BACKGROUND_GRADIENT_START), , ];
  colors[1] = useToken.useToken(nativeDefault.colors.BADGE_PREMIUM_BACKGROUND_GRADIENT_MID);
  colors[2] = useToken.useToken(nativeDefault.colors.BADGE_PREMIUM_BACKGROUND_GRADIENT_END);
  return React4(LinearGradientDefault, { start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, colors, style: style.style });
});
let ReactCompilerGating = ReactCompilerGating_mod;
const result = size.fileFinishedImporting("design/components/Badge/native/Badge.native.tsx");

export const Badge = ReactCompilerGating.isReactCompilerEnabled() ? (function Badge(arg0) {
  const cResult = c.c(17);
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
    if (cResult[2] === tmp4.gradient) {
      if (cResult[3] === variant) {
        let tmp9 = cResult[4];
      }
      if (cResult[5] === icon) {
        if (cResult[6] === variant) {
          let tmp14 = cResult[7];
        }
        if (cResult[8] === tmp4.label) {
          if (cResult[9] === tmp6) {
            if (cResult[10] === badgeTextVariant) {
              let tmp18 = cResult[11];
            }
            if (cResult[12] === tmp4.badge) {
              if (cResult[13] === tmp9) {
                if (cResult[14] === tmp14) {
                  if (cResult[15] === tmp18) {
                    let tmp21 = cResult[16];
                  }
                  return tmp21;
                }
              }
            }
            const obj2 = { style: tmp8, children: null };
            const items = [tmp9, tmp14, tmp18];
            obj2.children = items;
            const tmp24 = hasOwnProperty(View, obj2);
            cResult[12] = tmp4.badge;
            cResult[13] = tmp9;
            cResult[14] = tmp14;
            cResult[15] = tmp18;
            cResult[16] = tmp24;
            tmp21 = tmp24;
          }
        }
        const obj3 = { variant: badgeTextVariant, color: "none", lineClamp: 1, style: tmp4.label, children: tmp6 };
        const tmp20 = React4(Text_Text.Text, obj3);
        cResult[8] = tmp4.label;
        cResult[9] = tmp6;
        cResult[10] = badgeTextVariant;
        cResult[11] = tmp20;
        tmp18 = tmp20;
      }
      let tmp15 = null;
      if (null != icon) {
        const obj4 = { size: "xxs", color: getBadgeColors(variant).text, accessible: false };
        tmp15 = React4(icon, obj4);
      }
      cResult[5] = icon;
      cResult[6] = variant;
      cResult[7] = tmp15;
      tmp14 = tmp15;
    }
    let tmp11 = null;
    if ("premium" === variant) {
      const obj5 = { style: tmp10 };
      tmp11 = React4(closure_8, obj5);
    }
    cResult[2] = tmp4.gradient;
    cResult[3] = variant;
    cResult[4] = tmp11;
    tmp9 = tmp11;
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
  let tmp10 = null;
  if ("premium" === variant) {
    const obj3 = { style: tmp9 };
    tmp10 = React4(closure_8, obj3);
  }
  const items = [tmp10, , ];
  let tmp13 = null;
  if (null != icon) {
    const obj4 = { size: "xxs", color: getBadgeColors(variant).text, accessible: false };
    tmp13 = React4(icon, obj4);
  }
  items[1] = tmp13;
  items[2] = React4(Text_Text.Text, { variant: badgeTextVariant, color: "none", lineClamp: 1, style: tmp3.label, children: text });
  obj2.children = items;
  return hasOwnProperty(View, obj2);
});