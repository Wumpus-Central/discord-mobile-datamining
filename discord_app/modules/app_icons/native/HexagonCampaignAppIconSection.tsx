// discord_app/modules/app_icons/native/HexagonCampaignAppIconSection.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef4282 from "../../hexagon_campaign/HexagonCampaign.messages.js";
import AppIconTypes from "../AppIconTypes.tsx";
import HexagonCampaignPromoGradientDefault from "../../hexagon_campaign/native/HexagonCampaignPromoGradient.tsx";
import HexagonCampaignDaysLeftBadgeDefault from "../../hexagon_campaign/native/HexagonCampaignDaysLeftBadge.tsx";
import AppIconDefault from "AppIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const HexagonCampaignConstants = fn(5034);
({
  HEXAGON_CAMPAIGN_NON_PREMIUM_CUTOFF_AT_MS: hasOwnProperty,
  HEXAGON_CAMPAIGN_PREMIUM_CUTOFF_AT_MS: metroRequire,
  HexagonCampaignPerk: closure_7,
  HexagonCampaignPerkAvailability: closure_8,
} = HexagonCampaignConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5009);
let obj2 = {
  section: { gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_16, paddingBottom: 0 },
  header: null,
  row: null,
  icon: null,
  label: null,
  legal: null,
};
let obj3 = { gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_16, paddingBottom: 0 };
obj2.header = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.row = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  paddingVertical: nativeDefault.space.PX_12,
  paddingLeft: nativeDefault.space.PX_12,
  paddingRight: nativeDefault.space.PX_16,
  borderWidth: 1,
  borderBottomWidth: 0,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderTopLeftRadius: nativeDefault.radii.lg,
  borderTopRightRadius: nativeDefault.radii.lg,
  overflow: "hidden",
};
let obj5 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  paddingVertical: nativeDefault.space.PX_12,
  paddingLeft: nativeDefault.space.PX_12,
  paddingRight: nativeDefault.space.PX_16,
  borderWidth: 1,
  borderBottomWidth: 0,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderTopLeftRadius: nativeDefault.radii.lg,
  borderTopRightRadius: nativeDefault.radii.lg,
  overflow: "hidden",
};
obj2.icon = { borderRadius: nativeDefault.radii.md };
obj2.label = { flex: 1 };
let obj6 = { borderRadius: nativeDefault.radii.md };
obj2.legal = {
  paddingHorizontal: nativeDefault.space.PX_12,
  paddingVertical: nativeDefault.space.PX_8,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderBottomLeftRadius: nativeDefault.radii.lg,
  borderBottomRightRadius: nativeDefault.radii.lg,
};
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_icons/native/HexagonCampaignAppIconSection.tsx");

export default function HexagonCampaignAppIconSection(isPending) {
  let flag = isPending.isPending;
  if (flag === undefined) {
    flag = false;
  }
  const onSelect = isPending.onSelect;
  const tmp = closure_11();
  const hexagonCampaignPerkAvailability = onSelect(5037).useHexagonCampaignPerkAvailability(
    constants.APP_ICON,
    "HexagonCampaignAppIconSection",
  );
  const obj = onSelect(5037);
  const trackHexagonCampaignContentViewed = onSelect(16411).useTrackHexagonCampaignContentViewed(
    onSelect(6778).QuestContent.APP_ICON_SETTINGS,
    onSelect(16411).HexagonCampaignContentSurface.APP_ICON_PICKER,
    true,
  );
  const tmp7 = isPending.currentAppIcon === onSelect(9959).LimitedTimeAppIconIds.HEXAGON;
  const obj2 = onSelect(16411);
  const radioA11yNative = onSelect(5077).useRadioA11yNative({ selected: tmp7, busy: flag });
  const intl = onSelect(1114).intl;
  const stringResult = intl.string(_modDef4282.JC4Pii);
  const obj3 = onSelect(5077);
  const obj5 = { style: tmp.section, children: null };
  const obj6 = { style: tmp.header, children: null };
  const token = onSelect(5591).useToken(nativeDefault.colors.WHITE);
  const obj7 = { variant: "text-sm/semibold", color: "text-subtle", children: null };
  const intl2 = onSelect(1114).intl;
  obj7.children = intl2.string(_modDef4282["2UCcmW"]);
  const items = [closure_9(onSelect(5619).Text, obj7)];
  let tmp14Result = hexagonCampaignPerkAvailability !== constants2.LOCKED;
  if (tmp14Result) {
    const obj8 = { perk: constants.APP_ICON };
    tmp14Result = closure_9(HexagonCampaignDaysLeftBadgeDefault, obj8);
  }
  items[1] = tmp14Result;
  obj6.children = items;
  const items1 = [closure_10(closure_4, obj6)];
  const obj9 = { theme: onSelect(16427).ThemeTypes.DARK, children: null };
  const obj10 = {
    onPress() {
      return onSelect(AppIconTypes.LimitedTimeAppIconIds.HEXAGON);
    },
    style: tmp.row,
  };
  const merged = Object.assign(radioA11yNative);
  obj10.accessibilityLabel = stringResult;
  const items2 = [closure_9(HexagonCampaignPromoGradientDefault, { angle: 164 }), , ,];
  const obj11 = { id: null, size: 48, style: null };
  const obj4 = onSelect(5591);
  obj11.id = onSelect(9959).LimitedTimeAppIconIds.HEXAGON;
  obj11.style = tmp.icon;
  items2[1] = closure_9(AppIconDefault, obj11);
  items2[2] = closure_9(onSelect(5619).Text, {
    variant: "text-md/semibold",
    color: "text-strong",
    style: tmp.label,
    children: stringResult,
  });
  if (flag) {
    const obj13 = { size: "small", color: token };
    let tmp14Result2 = closure_9(tmp2(6947).ActivityIndicator, obj13);
  } else {
    const obj14 = { selected: tmp7 };
    tmp14Result2 = closure_9(tmp2(7056).FormRadio, obj14);
  }
  const obj15 = { children: null };
  items2[3] = tmp14Result2;
  obj10.children = items2;
  obj9.children = closure_10(closure_3, obj10);
  const items3 = [closure_9(onSelect(5075).ThemeContextProvider, obj9)];
  const obj16 = { style: tmp.legal, children: null };
  const obj17 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const intl3 = tmp2(1114).intl;
  obj17.children = intl3.format(_modDef4282.y2YmJv, {
    nonPremiumEndDate,
    premiumEndDate,
    learnMoreHook(children, arg1) {
      return closure_1_9(
        onSelect(5619).Text,
        {
          variant: "text-xs/medium",
          color: "text-link",
          accessibilityRole: "link",
          onPress: onSelect(16430).openHexagonCampaignLearnMore,
          children,
        },
        arg1,
      );
    },
  });
  obj16.children = closure_9(onSelect(5619).Text, obj17);
  items3[1] = closure_9(closure_4, obj16);
  obj15.children = items3;
  items1[1] = closure_10(closure_4, obj15);
  obj5.children = items1;
  return closure_10(closure_4, obj5);
}
