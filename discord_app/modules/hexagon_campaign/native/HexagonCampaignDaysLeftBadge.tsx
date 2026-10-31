// discord_app/modules/hexagon_campaign/native/HexagonCampaignDaysLeftBadge.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import DurationsDefault from "../../../utils/Durations.tsx";
import shared from "../../../design/shared.tsx";
import HexagonCampaignUtils from "../HexagonCampaignUtils.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
function HexagonCampaignBadge(variant) {
  let str = variant.variant;
  if (str === undefined) {
    str = "default";
  }
  ({ renderIcon, text } = variant);
  const tmp = closure_10();
  const obj = native;
  const isThemeDarkResult = shared.isThemeDark(obj.useThemeContext().theme);
  if ("overlay" === str) {
    const obj3 = { iconColor: nativeDefault.colors.TEXT_OVERLAY_LIGHT, textColor: "text-overlay-light" };
    let obj6 = obj3;
  } else if ("expressive" === str) {
    if (isThemeDarkResult) {
      const obj4 = { iconColor: nativeDefault.colors.TEXT_OVERLAY_DARK, textColor: "text-overlay-dark" };
      let obj5 = obj4;
    } else {
      obj5 = { iconColor: nativeDefault.colors.TEXT_OVERLAY_LIGHT, textColor: "text-overlay-light" };
    }
    obj6 = obj5;
  } else {
    obj6 = { iconColor: nativeDefault.colors.TEXT_DEFAULT, textColor: "text-default" };
  }
  const items = [tmp.badge, ,];
  let badgeOverlay = "overlay" === str;
  ({ iconColor, textColor } = obj6);
  if (badgeOverlay) {
    badgeOverlay = tmp.badgeOverlay;
  }
  items[1] = badgeOverlay;
  if ("expressive" !== str) {
    const obj7 = { style: null, children: null };
    items[2] = tmp11;
    obj7.style = items;
    const items1 = [renderIcon(iconColor)];
    const obj8 = { variant: "text-xxs/semibold", color: textColor, children: text };
    items1[1] = timestampProducer(Text_Text.Text, obj8);
    obj7.children = items1;
    return React5(View, obj7);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let closure_8 = 60 * DurationsDefault.Millis.SECOND;
let closure_9 = Object.values(fn(5039).HexagonCampaignPerk);
const createStyles = fn(5014);
let obj2 = {
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: nativeDefault.space.PX_4,
    paddingHorizontal: nativeDefault.space.PX_6,
    paddingVertical: 3,
    borderRadius: nativeDefault.radii.round,
    backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT,
  },
  badgeOverlay: null,
  badgeExpressiveDark: null,
  badgeExpressiveLight: null,
};
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
  paddingHorizontal: nativeDefault.space.PX_6,
  paddingVertical: 3,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT,
};
obj2.badgeOverlay = { backgroundColor: nativeDefault.unsafe_rawColors.OPACITY_BLACK_40 };
let obj4 = { backgroundColor: nativeDefault.unsafe_rawColors.OPACITY_BLACK_40 };
obj2.badgeExpressiveDark = { backgroundColor: nativeDefault.unsafe_rawColors.WHITE };
let obj5 = { backgroundColor: nativeDefault.unsafe_rawColors.WHITE };
obj2.badgeExpressiveLight = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignDaysLeftBadge.tsx");

export default function HexagonCampaignDaysLeftBadge(perk) {
  perk = perk.perk;
  let items = [UserStore];
  const stateFromStores = perk(504).useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    return premiumType;
  });
  const items1 = [perk, stateFromStores];
  const memo = noop.useMemo(() => {
    if (null != perk) {
      let hexagonCampaignPerkCutoffMs = HexagonCampaignUtils.getHexagonCampaignPerkCutoffMs(tmp, stateFromStores);
    } else {
      const _Math = Math;
      const items = [];
      HermesBuiltin.arraySpread(
        closure_9.map((item) => perk(5041).getHexagonCampaignPerkCutoffMs(item, stateFromStores)),
        0,
      );
      const _Math2 = Math;
      hexagonCampaignPerkCutoffMs = HermesBuiltin.apply(items, Math);
    }
    return hexagonCampaignPerkCutoffMs;
  }, items1);
  const tmp6 = stateFromStores(7624)(memo, closure_8);
  let num = 0;
  if (tmp6.hours > 0) {
    num = 1;
  }
  const obj2 = {
    variant: perk.variant,
    renderIcon(color) {
      return closure_1_6(perk(5740).ClockIcon, { size: "xxs", color });
    },
    text: null,
  };
  const bound = Math.max(tmp6.days + num, 1);
  const intl = perk(1113).intl;
  obj2.text = intl.formatToPlainString(stateFromStores(4285)["noGK/D"], { days: bound });
  return closure_6(HexagonCampaignBadge, obj2);
}
export function useHexagonCampaignDaysLeft(arg0) {
  _require = arg0;
  const items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    return premiumType;
  });
  const items1 = [arg0, stateFromStores];
  const memo = noop.useMemo(() => {
    if (null != perk) {
      let hexagonCampaignPerkCutoffMs = HexagonCampaignUtils.getHexagonCampaignPerkCutoffMs(tmp, stateFromStores);
    } else {
      const _Math = Math;
      const items = [];
      HermesBuiltin.arraySpread(
        closure_9.map((item) => perk(5041).getHexagonCampaignPerkCutoffMs(item, stateFromStores)),
        0,
      );
      const _Math2 = Math;
      hexagonCampaignPerkCutoffMs = HermesBuiltin.apply(items, Math);
    }
    return hexagonCampaignPerkCutoffMs;
  }, items1);
  const tmp3 = stateFromStores(7624)(memo, closure_8);
  let num = 0;
  if (tmp3.hours > 0) {
    num = 1;
  }
  return Math.max(tmp3.days + num, 1);
}
