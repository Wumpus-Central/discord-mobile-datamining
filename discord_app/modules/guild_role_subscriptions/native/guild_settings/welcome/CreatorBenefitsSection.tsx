// discord_app/modules/guild_role_subscriptions/native/guild_settings/welcome/CreatorBenefitsSection.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import shared from "../../../../../design/shared.tsx";
import useThemeDefault from "../../../../../hooks/useTheme.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import _modDef17699 from "../../../../../../_runtime/metro/17699__.js";
import _modDef17700 from "../../../../../../_runtime/metro/17700__.js";
import _modDef17701 from "../../../../../../_runtime/metro/17701__.js";
import _modDef17702 from "../../../../../../_runtime/metro/17702__.js";
import _modDef17703 from "../../../../../../_runtime/metro/17703__.js";
import _modDef17704 from "../../../../../../_runtime/metro/17704__.js";
import _modDef17705 from "../../../../../../_runtime/metro/17705__.js";
import _modDef17706 from "../../../../../../_runtime/metro/17706__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function EarningPreview() {
  const tmp3 = useThemeDefault();
  const tmp4 = closure_7();
  const items = [tmp4.earningMetricsShadowContainer];
  let obj = { style: items, children: null };
  items[1] = obj.isThemeDark(tmp3) && tmp4.earningMetricsShadowContainerDarkMode;
  const items1 = [, ,];
  ({ earningMetrics: arr2[0], horizontalContainer: arr2[1] } = tmp4);
  let tmp7Result = shared;
  obj = { style: null, children: null };
  items1[2] = tmp7Result.isThemeDark(tmp3) ? tmp4.earningMetricsDarkMode : tmp4.earningMetricsLightMode;
  obj.style = items1;
  const obj1 = { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj1.children = intl.string(util.t.TXPK7B);
  const items2 = [hasOwnProperty(Text_Text.Text, obj1)];
  tmp7Result = shared;
  const obj2 = { children: null };
  const obj3 = {
    style: tmp7Result.isThemeDark(tmp3) ? tmp4.greenTextDarkMode : tmp4.greenTextLightMode,
    variant: "heading-lg/extrabold",
    children: null,
  };
  const intl2 = util.intl;
  obj3.children = intl2.string(util.t.LdjJG5);
  items2[1] = hasOwnProperty(Text_Text.Text, obj3);
  obj2.children = items2;
  const items3 = [timestampProducer(View, obj2)];
  const obj4 = { style: tmp4.earningMetricsAvatar, source: null };
  const tmp8 = obj.isThemeDark(tmp3) && tmp4.earningMetricsShadowContainerDarkMode;
  obj4.source = _modDef17699;
  items3[1] = hasOwnProperty(FastImageDefault, obj4);
  obj.children = items3;
  obj.children = timestampProducer(View, obj);
  return hasOwnProperty(View, obj);
}
function ConsistentEarningBenefit() {
  const tmp4 = closure_7();
  let obj = { style: tmp4.benefitCard, children: null };
  obj = { style: tmp4.benefitCardTitle, variant: "heading-md/medium", color: "text-default", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t["9CdmS8"]);
  const items = [hasOwnProperty(Text_Text.Text, obj), hasOwnProperty(EarningPreview, {})];
  obj = { style: null, children: null };
  const items1 = [,];
  ({ horizontalContainer: arr2[0], benefitAvatars: arr2[1] } = tmp4);
  obj.style = items1;
  const tmp3 = useThemeDefault();
  if (obj4.isThemeDark(tmp3)) {
    let tmpResult = _modDef17700;
  } else {
    tmpResult = _modDef17701;
  }
  const items2 = [hasOwnProperty(BenefitAvatar, { avatarSource: tmpResult }), ,];
  obj4 = shared;
  items2[1] = hasOwnProperty(BenefitAvatar, { avatarSource: _modDef17702 });
  const obj1 = { avatarSource: _modDef17702 };
  items2[2] = hasOwnProperty(BenefitAvatar, { avatarSource: _modDef17703 });
  obj.children = items2;
  items[2] = timestampProducer(View, obj);
  obj.children = items;
  return timestampProducer(View, obj);
}
function FollowerAwardBenefit() {
  const tmp = closure_7();
  let obj = { style: tmp.benefitCard, children: null };
  obj = { style: tmp.benefitCardTitle, variant: "heading-md/medium", color: "text-default", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.qsKRUQ);
  const items = [hasOwnProperty(Text_Text.Text, obj), ,];
  obj = { style: tmp.socialIllo, source: _modDef17704 };
  items[1] = hasOwnProperty(FastImageDefault, obj);
  const obj1 = { style: tmp.lanyardIllo, source: null };
  obj1.source = _modDef17705;
  items[2] = hasOwnProperty(FastImageDefault, obj1);
  obj.children = items;
  return timestampProducer(View, obj);
}
function RevenueShareBenefit() {
  const tmp4 = closure_7();
  let obj = { style: null, children: null };
  const items = [,];
  ({ benefitCard: arr[0], revenueShareContainer: arr[1] } = tmp4);
  obj.style = items;
  const items1 = [tmp4.revenueShare];
  let obj1 = shared;
  obj = { style: null, variant: "heading-xxl/extrabold", color: "status-positive", children: null };
  items1[1] = obj1.isThemeDark(useThemeDefault()) ? tmp4.greenTextDarkMode : tmp4.greenTextLightMode;
  obj.style = items1;
  obj.children = `${closure_4}%`;
  const items2 = [hasOwnProperty(Text_Text.Text, obj), ,];
  obj = { style: tmp4.revenueShareDescription, variant: "heading-md/medium", color: "text-default", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.AewsXD);
  items2[1] = hasOwnProperty(Text_Text.Text, obj);
  obj1 = { style: tmp4.revenueShareIllo, source: null };
  const tmp3 = useThemeDefault();
  obj1.source = _modDef17706;
  items2[2] = hasOwnProperty(FastImageDefault, obj1);
  obj.children = items2;
  return timestampProducer(View, obj);
}
function BenefitAvatar(avatarSource) {
  const tmp = closure_7();
  let obj = { style: tmp.benefitAvatarContainer, children: null };
  obj = { source: avatarSource.avatarSource, style: tmp.benefitAvatar };
  obj.children = hasOwnProperty(FastImageDefault, obj);
  return hasOwnProperty(View, obj);
}
const View = fn(17).View;
let closure_4 = fn(15205).CREATOR_REVENUE_SHARE_PERCENTAGE;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = {
  horizontalContainer: { flex: 1, flexDirection: "row" },
  benefitAvatarContainer: null,
  benefitCard: null,
  benefitAvatar: null,
  benefitAvatars: null,
  benefitCardTitle: null,
  earningMetricsShadowContainer: null,
  earningMetricsShadowContainerDarkMode: null,
  earningMetrics: null,
  earningMetricsDarkMode: null,
  earningMetricsLightMode: null,
  greenTextDarkMode: null,
  greenTextLightMode: null,
  earningMetricsAvatar: null,
  socialIllo: null,
  lanyardIllo: null,
  revenueShare: null,
  revenueShareContainer: null,
  revenueShareIllo: null,
  revenueShareDescription: null,
};
createStyles = {
  padding: 20,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
};
createStyles.benefitAvatarContainer = createStyles;
createStyles.benefitCard = {
  marginVertical: 6,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
};
createStyles.benefitAvatar = { width: 40, height: 40, marginHorizontal: 8, borderRadius: 20, overflow: "hidden" };
createStyles.benefitAvatars = { marginHorizontal: 24, marginBottom: 24, justifyContent: "space-between" };
createStyles.benefitCardTitle = { marginStart: 24, marginEnd: 35, marginVertical: 24 };
let obj1 = {
  marginVertical: 6,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
};
createStyles.earningMetricsShadowContainer = {
  shadowColor: nativeDefault.colors.BLACK,
  shadowOffset: { width: 0, height: 8 },
  shadowOpacity: 0.16,
  shadowRadius: 16,
  elevation: 4,
};
createStyles.earningMetricsShadowContainerDarkMode = { shadowOpacity: 0.24 };
let obj2 = {
  shadowColor: nativeDefault.colors.BLACK,
  shadowOffset: { width: 0, height: 8 },
  shadowOpacity: 0.16,
  shadowRadius: 16,
  elevation: 4,
};
createStyles.earningMetrics = {
  marginHorizontal: 24,
  marginBottom: 24,
  padding: 16,
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
};
createStyles.earningMetricsDarkMode = { backgroundColor: "#2E3638" };
let obj3 = {
  marginHorizontal: 24,
  marginBottom: 24,
  padding: 16,
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
};
createStyles.earningMetricsLightMode = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.greenTextDarkMode = { color: nativeDefault.unsafe_rawColors.GREEN_230 };
const obj5 = { color: nativeDefault.unsafe_rawColors.GREEN_230 };
createStyles.greenTextLightMode = { color: nativeDefault.unsafe_rawColors.GREEN_400 };
createStyles.earningMetricsAvatar = { width: 54, height: 54, borderRadius: 27, overflow: "hidden" };
createStyles.socialIllo = { marginTop: 50, marginStart: 16 };
createStyles.lanyardIllo = { position: "absolute", bottom: 25, end: 0 };
createStyles.revenueShare = { fontSize: 50, lineHeight: 52 };
createStyles.revenueShareContainer = { padding: 24 };
createStyles.revenueShareIllo = { marginTop: 15, alignSelf: "flex-end" };
createStyles.revenueShareDescription = { marginEnd: 120 };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/welcome/CreatorBenefitsSection.tsx",
);

export default function CreatorBenefitsSection() {
  const obj = { children: null };
  const items = [
    hasOwnProperty(ConsistentEarningBenefit, {}),
    hasOwnProperty(FollowerAwardBenefit, {}),
    hasOwnProperty(RevenueShareBenefit, {}),
  ];
  obj.children = items;
  return timestampProducer(View, obj);
}
