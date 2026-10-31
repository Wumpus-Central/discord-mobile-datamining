// discord_app/design/components/Badge/native/Badge.native.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import useBadgeTextVariant from "../../../../../discord_common/js/packages/design/hooks/useBadgeTextVariant.native.tsx";
import LinearGradientDefault from "../../../../../_runtime/05587_LinearGradient.js";
import useToken from "../../../tokens/native/useToken.tsx";
import Text_Text from "../../Text/native/Text.tsx";
import BadgeShared from "../../../../../discord_common/js/packages/design/components/Badge/shared/BadgeShared.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function getBadgeColors(variant) {
  switch (variant) {
    case "secondary":
      const obj2 = {
        background: nativeDefault.colors.BADGE_SECONDARY_BACKGROUND,
        border: nativeDefault.colors.BADGE_SECONDARY_BORDER,
        text: nativeDefault.colors.BADGE_SECONDARY_TEXT,
      };
      return obj2;
    case "primary":
      const obj3 = {
        background: nativeDefault.colors.BADGE_PRIMARY_BACKGROUND,
        border: nativeDefault.colors.BADGE_PRIMARY_BORDER,
        text: nativeDefault.colors.BADGE_PRIMARY_TEXT,
      };
      return obj3;
    case "expressive":
      const obj4 = {
        background: nativeDefault.colors.BADGE_EXPRESSIVE_BACKGROUND,
        border: nativeDefault.colors.BADGE_EXPRESSIVE_BORDER,
        text: nativeDefault.colors.BADGE_EXPRESSIVE_TEXT,
      };
      return obj4;
    case "warning":
      const obj5 = {
        background: nativeDefault.colors.BADGE_WARNING_BACKGROUND,
        border: nativeDefault.colors.BADGE_WARNING_BORDER,
        text: nativeDefault.colors.BADGE_WARNING_TEXT,
      };
      return obj5;
    case "critical":
      const obj6 = {
        background: nativeDefault.colors.BADGE_CRITICAL_BACKGROUND,
        border: nativeDefault.colors.BADGE_CRITICAL_BORDER,
        text: nativeDefault.colors.BADGE_CRITICAL_TEXT,
      };
      return obj6;
    case "success":
      const obj7 = {
        background: nativeDefault.colors.BADGE_SUCCESS_BACKGROUND,
        border: nativeDefault.colors.BADGE_SUCCESS_BORDER,
        text: nativeDefault.colors.BADGE_SUCCESS_TEXT,
      };
      return obj7;
    case "notification":
      const obj8 = {
        background: nativeDefault.colors.BADGE_NOTIFICATION_BACKGROUND,
        border: nativeDefault.colors.BADGE_NOTIFICATION_BORDER,
        text: nativeDefault.colors.BADGE_NOTIFICATION_TEXT,
      };
      return obj8;
    case "premium":
      const obj9 = {
        background: nativeDefault.colors.BADGE_PREMIUM_BACKGROUND_GRADIENT_START,
        text: nativeDefault.colors.BADGE_PREMIUM_TEXT,
      };
      return obj9;
    case "inverted":
      const obj10 = {
        background: nativeDefault.colors.BADGE_INVERTED_BACKGROUND,
        border: nativeDefault.colors.BADGE_INVERTED_BORDER,
        text: nativeDefault.colors.BADGE_INVERTED_TEXT,
      };
      return obj10;
    case "rarity-common":
      const obj11 = {
        background: nativeDefault.colors.BADGE_COMMON_BACKGROUND,
        border: nativeDefault.colors.BADGE_COMMON_BORDER,
        text: nativeDefault.colors.BADGE_COMMON_TEXT,
      };
      return obj11;
    case "rarity-rare":
      const obj12 = {
        background: nativeDefault.colors.BADGE_RARE_BACKGROUND,
        border: nativeDefault.colors.BADGE_RARE_BORDER_GRADIENT_START,
        text: nativeDefault.colors.BADGE_RARE_TEXT,
      };
      return obj12;
    case "rarity-epic":
      const obj13 = {
        background: nativeDefault.colors.BADGE_EPIC_BACKGROUND,
        border: nativeDefault.colors.BADGE_EPIC_BORDER_GRADIENT_START,
        text: nativeDefault.colors.BADGE_EPIC_TEXT,
      };
      return obj13;
    case "rarity-mythic":
      const obj = {
        background: nativeDefault.colors.BADGE_MYTHIC_BACKGROUND,
        border: nativeDefault.colors.BADGE_MYTHIC_TEXT,
        text: nativeDefault.colors.BADGE_MYTHIC_TEXT,
      };
      return obj;
    default:
  }
}
function PremiumGradient(style) {
  const colors = [useToken.useToken(nativeDefault.colors.BADGE_PREMIUM_BACKGROUND_GRADIENT_START), ,];
  colors[1] = useToken.useToken(nativeDefault.colors.BADGE_PREMIUM_BACKGROUND_GRADIENT_MID);
  colors[2] = useToken.useToken(nativeDefault.colors.BADGE_PREMIUM_BACKGROUND_GRADIENT_END);
  return React4(LinearGradientDefault, { start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, colors, style: style.style });
}
const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let closure_7 = createStyles.createStyles((variant) => {
  const tmp = getBadgeColors(variant);
  let tmp2 = null;
  if ("premium" === variant) {
    tmp2 = React4(PremiumGradient, { style: null });
  }
  const obj = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: nativeDefault.space.PX_4,
    minWidth: 0,
    maxWidth: "100%",
    minHeight: nativeDefault.space.PX_16,
    paddingHorizontal: nativeDefault.space.PX_8,
    borderRadius: nativeDefault.radii.round,
    backgroundColor: tmp.background,
    borderWidth: null,
    borderColor: null,
    overflow: null,
  };
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
  return {
    badge: obj,
    gradient: { position: "absolute", top: -1, bottom: -1, left: -1, right: -1 },
    label: { flexShrink: 1, minWidth: 0, textAlign: "center", textTransform: "uppercase", color: tmp.text },
  };
});
const result = size.fileFinishedImporting("design/components/Badge/native/Badge.native.tsx");

export function Badge(icon) {
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
    tmp10 = React4(PremiumGradient, obj3);
  }
  const items = [tmp10, ,];
  let tmp13 = null;
  if (null != icon) {
    const obj4 = { size: "xxs", color: getBadgeColors(variant).text, accessible: false };
    tmp13 = React4(icon, obj4);
  }
  items[1] = tmp13;
  items[2] = React4(Text_Text.Text, {
    variant: badgeTextVariant,
    color: "none",
    lineClamp: 1,
    style: tmp3.label,
    children: text,
  });
  obj2.children = items;
  return hasOwnProperty(View, obj2);
}
