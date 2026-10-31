// === Module 19893: CreatorBenefitsSection ===

// Module 19893 (CreatorBenefitsSection)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import shared from "shared" /* 5021 */;
import useThemeDefault from "useTheme" /* 5253 */;
import Text_Text from "Text/Text" /* 5624 */;
import AvatarRoseExample from "AvatarRoseExample" /* 19894 */;
import AvatarLokyExample from "AvatarLokyExample" /* 19898 */;
import AvatarGraggleExample from "AvatarGraggleExample" /* 19902 */;
import AvatarMoatmonsturrExample from "AvatarMoatmonsturrExample" /* 19906 */;
import StarKeySpotIllustration from "StarKeySpotIllustration" /* 19910 */;
import StarCoinsSpotIllustration from "StarCoinsSpotIllustration" /* 19914 */;
import noop from "module_19" /* 19 */;

require = fn;
function EarningPreview() {
  const tmp2 = useThemeDefault();
  const tmp3 = closure_7();
  const items = [tmp3.earningMetricsShadowContainer, ];
  const obj2 = { style: items, children: null };
  items[1] = shared.isThemeDark(tmp2) && tmp3.earningMetricsShadowContainerDarkMode;
  const items1 = [, , ];
  ({ earningMetrics: arr2[0], horizontalContainer: arr2[1] } = tmp3);
  const tmp7 = shared.isThemeDark(tmp2) && tmp3.earningMetricsShadowContainerDarkMode;
  const obj3 = { style: null, children: null };
  items1[2] = shared.isThemeDark(tmp2) ? tmp3.earningMetricsDarkMode : tmp3.earningMetricsLightMode;
  obj3.style = items1;
  const obj4 = { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t.TXPK7B);
  const items2 = [hasOwnProperty(Text_Text.Text, obj4), ];
  const tmp6Result = shared;
  const obj5 = { children: null };
  const obj6 = { style: shared.isThemeDark(tmp2) ? tmp3.greenTextDarkMode : tmp3.greenTextLightMode, variant: "heading-lg/extrabold", children: null };
  const intl2 = util.intl;
  obj6.children = intl2.string(util.t.LdjJG5);
  items2[1] = hasOwnProperty(Text_Text.Text, obj6);
  obj5.children = items2;
  const items3 = [timestampProducer(View, obj5), hasOwnProperty(AvatarRoseExample.AvatarRoseExample, { width: 54 })];
  obj3.children = items3;
  obj2.children = timestampProducer(View, obj3);
  return hasOwnProperty(View, obj2);
}
function ConsistentEarningBenefit() {
  const tmp = closure_7();
  const obj = { style: tmp.benefitCard, children: null };
  const obj2 = { style: tmp.benefitCardTitle, variant: "heading-md/medium", color: "text-default", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t["9CdmS8"]);
  const items = [hasOwnProperty(Text_Text.Text, obj2), hasOwnProperty(EarningPreview, {}), ];
  const obj3 = { style: null, children: null };
  const items1 = [, ];
  ({ horizontalContainer: arr2[0], benefitAvatars: arr2[1] } = tmp);
  obj3.style = items1;
  const items2 = [hasOwnProperty(BenefitAvatar, { Avatar: AvatarLokyExample.AvatarLokyExample }), , ];
  const obj4 = { Avatar: AvatarLokyExample.AvatarLokyExample };
  items2[1] = hasOwnProperty(BenefitAvatar, { Avatar: AvatarGraggleExample.AvatarGraggleExample });
  const obj5 = { Avatar: AvatarGraggleExample.AvatarGraggleExample };
  items2[2] = hasOwnProperty(BenefitAvatar, { Avatar: AvatarMoatmonsturrExample.AvatarMoatmonsturrExample });
  obj3.children = items2;
  items[2] = timestampProducer(View, obj3);
  obj.children = items;
  return timestampProducer(View, obj);
}
function FollowerAwardBenefit() {
  const tmp = closure_7();
  const obj = { style: tmp.benefitCard, children: null };
  const obj2 = { style: tmp.benefitCardTitle, variant: "heading-md/medium", color: "text-default", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.qsKRUQ);
  const items = [hasOwnProperty(Text_Text.Text, obj2), hasOwnProperty(View, { style: tmp.starKeyIllo, children: hasOwnProperty(StarKeySpotIllustration.StarKeySpotIllustration, { width: 160 }) })];
  obj.children = items;
  return timestampProducer(View, obj);
}
function RevenueShareBenefit() {
  const tmp3 = closure_7();
  const obj = { style: null, children: null };
  const items = [, ];
  ({ benefitCard: arr[0], revenueShareContainer: arr[1] } = tmp3);
  obj.style = items;
  const items1 = [tmp3.revenueShare, ];
  const tmp2 = useThemeDefault();
  const obj3 = { style: null, variant: "heading-xxl/extrabold", color: "status-positive", children: null };
  items1[1] = shared.isThemeDark(tmp2) ? tmp3.greenTextDarkMode : tmp3.greenTextLightMode;
  obj3.style = items1;
  obj3.children = `${closure_4}%`;
  const items2 = [hasOwnProperty(Text_Text.Text, obj3), , ];
  const obj4 = { style: tmp3.revenueShareDescription, variant: "heading-md/medium", color: "text-default", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t.AewsXD);
  items2[1] = hasOwnProperty(Text_Text.Text, obj4);
  items2[2] = hasOwnProperty(View, { style: tmp3.revenueShareIllo, children: hasOwnProperty(StarCoinsSpotIllustration.StarCoinsSpotIllustration, { width: 128 }) });
  obj.children = items2;
  return timestampProducer(View, obj);
}
function BenefitAvatar(Avatar) {
  const tmp = closure_7();
  const obj = { style: tmp.benefitAvatarContainer, children: hasOwnProperty(View, { style: tmp.benefitAvatar, children: hasOwnProperty(Avatar.Avatar, { width: 40 }) }) };
  return hasOwnProperty(View, obj);
}
const View = fn(17).View;
let closure_4 = fn(17183).CREATOR_REVENUE_SHARE_PERCENTAGE;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5014);
let obj2 = { horizontalContainer: { flex: 1, flexDirection: "row" }, benefitAvatarContainer: { padding: 20, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.sm, overflow: "hidden" }, benefitCard: null, benefitAvatar: null, benefitAvatars: null, benefitCardTitle: null, earningMetricsShadowContainer: null, earningMetricsShadowContainerDarkMode: null, earningMetrics: null, earningMetricsDarkMode: null, earningMetricsLightMode: null, greenTextDarkMode: null, greenTextLightMode: null, starKeyIllo: null, revenueShare: null, revenueShareContainer: null, revenueShareIllo: null, revenueShareDescription: null };
let obj3 = { padding: 20, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj2.benefitCard = { marginVertical: 6, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm };
obj2.benefitAvatar = { marginHorizontal: 8 };
obj2.benefitAvatars = { marginHorizontal: 24, marginBottom: 24, justifyContent: "space-between" };
obj2.benefitCardTitle = { marginStart: 24, marginEnd: 35, marginVertical: 24 };
let obj4 = { marginVertical: 6, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm };
obj2.earningMetricsShadowContainer = { shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.16, shadowRadius: 16, elevation: 4 };
obj2.earningMetricsShadowContainerDarkMode = { shadowOpacity: 0.24 };
let obj5 = { shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.16, shadowRadius: 16, elevation: 4 };
obj2.earningMetrics = { marginHorizontal: 24, marginBottom: 24, padding: 16, justifyContent: "space-between", alignItems: "center", borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj2.earningMetricsDarkMode = { backgroundColor: "#2E3638" };
let obj6 = { marginHorizontal: 24, marginBottom: 24, padding: 16, justifyContent: "space-between", alignItems: "center", borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj2.earningMetricsLightMode = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.greenTextDarkMode = { color: nativeDefault.unsafe_rawColors.GREEN_230 };
const obj8 = { color: nativeDefault.unsafe_rawColors.GREEN_230 };
obj2.greenTextLightMode = { color: nativeDefault.unsafe_rawColors.GREEN_400 };
obj2.starKeyIllo = { alignSelf: "flex-end", marginEnd: 16, marginBottom: 16 };
obj2.revenueShare = { fontSize: 50, lineHeight: 52 };
obj2.revenueShareContainer = { padding: 24 };
obj2.revenueShareIllo = { marginTop: 15, alignSelf: "flex-end" };
obj2.revenueShareDescription = { marginEnd: 120 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/CreatorBenefitsSection.tsx");

export default function CreatorBenefitsSection() {
  const obj = { children: null };
  const items = [hasOwnProperty(ConsistentEarningBenefit, {}), hasOwnProperty(FollowerAwardBenefit, {}), hasOwnProperty(RevenueShareBenefit, {})];
  obj.children = items;
  return timestampProducer(View, obj);
};