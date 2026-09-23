// === Module 18238: CreatorBenefitsSection ===

// Module 18238 (CreatorBenefitsSection)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import shared from "shared" /* 4678 */;
import useThemeDefault from "useTheme" /* 4761 */;
import Text_Text from "Text/Text" /* 4823 */;
import FastImageDefault from "FastImage" /* 5890 */;
import _modDef18239 from "module_18239" /* 18239 */;
import _modDef18240 from "module_18240" /* 18240 */;
import _modDef18241 from "module_18241" /* 18241 */;
import _modDef18242 from "module_18242" /* 18242 */;
import _modDef18243 from "module_18243" /* 18243 */;
import _modDef18244 from "module_18244" /* 18244 */;
import _modDef18245 from "module_18245" /* 18245 */;
import _modDef18246 from "module_18246" /* 18246 */;
import noop from "module_19" /* 19 */;

require = fn;
function EarningPreview() {
  const tmp3 = useThemeDefault();
  const tmp4 = closure_7();
  const items = [tmp4.earningMetricsShadowContainer, ];
  const obj2 = { style: items, children: null };
  items[1] = shared.isThemeDark(tmp3) && tmp4.earningMetricsShadowContainerDarkMode;
  const items1 = [, , ];
  ({ earningMetrics: arr2[0], horizontalContainer: arr2[1] } = tmp4);
  const tmp8 = shared.isThemeDark(tmp3) && tmp4.earningMetricsShadowContainerDarkMode;
  const obj3 = { style: null, children: null };
  items1[2] = shared.isThemeDark(tmp3) ? tmp4.earningMetricsDarkMode : tmp4.earningMetricsLightMode;
  obj3.style = items1;
  const obj4 = { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t.TXPK7B);
  const items2 = [hasOwnProperty(Text_Text.Text, obj4), ];
  const tmp7Result = shared;
  const obj5 = { children: null };
  const obj6 = { style: shared.isThemeDark(tmp3) ? tmp4.greenTextDarkMode : tmp4.greenTextLightMode, variant: "heading-lg/extrabold", children: null };
  const intl2 = util.intl;
  obj6.children = intl2.string(util.t.LdjJG5);
  items2[1] = hasOwnProperty(Text_Text.Text, obj6);
  obj5.children = items2;
  const items3 = [timestampProducer(View, obj5), ];
  const obj7 = { style: tmp4.earningMetricsAvatar, source: null };
  const tmp7Result2 = shared;
  obj7.source = _modDef18239;
  items3[1] = hasOwnProperty(FastImageDefault, obj7);
  obj3.children = items3;
  obj2.children = timestampProducer(View, obj3);
  return hasOwnProperty(View, obj2);
}
function ConsistentEarningBenefit() {
  const tmp4 = closure_7();
  const obj = { style: tmp4.benefitCard, children: null };
  const obj2 = { style: tmp4.benefitCardTitle, variant: "heading-md/medium", color: "text-default", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t["9CdmS8"]);
  const items = [hasOwnProperty(Text_Text.Text, obj2), hasOwnProperty(EarningPreview, {}), ];
  const obj3 = { style: null, children: null };
  const items1 = [, ];
  ({ horizontalContainer: arr2[0], benefitAvatars: arr2[1] } = tmp4);
  obj3.style = items1;
  const tmp3 = useThemeDefault();
  if (obj4.isThemeDark(tmp3)) {
    let tmpResult = _modDef18240;
  } else {
    tmpResult = _modDef18241;
  }
  const items2 = [hasOwnProperty(BenefitAvatar, { avatarSource: tmpResult }), , ];
  obj4 = shared;
  items2[1] = hasOwnProperty(BenefitAvatar, { avatarSource: _modDef18242 });
  const obj5 = { avatarSource: _modDef18242 };
  items2[2] = hasOwnProperty(BenefitAvatar, { avatarSource: _modDef18243 });
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
  const items = [hasOwnProperty(Text_Text.Text, obj2), , ];
  const obj3 = { style: tmp.socialIllo, source: _modDef18244 };
  items[1] = hasOwnProperty(FastImageDefault, obj3);
  const obj4 = { style: tmp.lanyardIllo, source: null };
  obj4.source = _modDef18245;
  items[2] = hasOwnProperty(FastImageDefault, obj4);
  obj.children = items;
  return timestampProducer(View, obj);
}
function RevenueShareBenefit() {
  const tmp4 = closure_7();
  const obj = { style: null, children: null };
  const items = [, ];
  ({ benefitCard: arr[0], revenueShareContainer: arr[1] } = tmp4);
  obj.style = items;
  const items1 = [tmp4.revenueShare, ];
  const tmp3 = useThemeDefault();
  const obj3 = { style: null, variant: "heading-xxl/extrabold", color: "status-positive", children: null };
  items1[1] = shared.isThemeDark(tmp3) ? tmp4.greenTextDarkMode : tmp4.greenTextLightMode;
  obj3.style = items1;
  obj3.children = `${closure_4}%`;
  const items2 = [hasOwnProperty(Text_Text.Text, obj3), , ];
  const obj4 = { style: tmp4.revenueShareDescription, variant: "heading-md/medium", color: "text-default", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t.AewsXD);
  items2[1] = hasOwnProperty(Text_Text.Text, obj4);
  const obj5 = { style: tmp4.revenueShareIllo, source: null };
  obj5.source = _modDef18246;
  items2[2] = hasOwnProperty(FastImageDefault, obj5);
  obj.children = items2;
  return timestampProducer(View, obj);
}
function BenefitAvatar(avatarSource) {
  const tmp = closure_7();
  const obj = { style: tmp.benefitAvatarContainer, children: hasOwnProperty(FastImageDefault, { source: avatarSource.avatarSource, style: tmp.benefitAvatar }) };
  return hasOwnProperty(View, obj);
}
const View = fn(17).View;
let closure_4 = fn(15540).CREATOR_REVENUE_SHARE_PERCENTAGE;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4827);
let obj2 = { horizontalContainer: { flex: 1, flexDirection: "row" }, benefitAvatarContainer: { padding: 20, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.sm, overflow: "hidden" }, benefitCard: null, benefitAvatar: null, benefitAvatars: null, benefitCardTitle: null, earningMetricsShadowContainer: null, earningMetricsShadowContainerDarkMode: null, earningMetrics: null, earningMetricsDarkMode: null, earningMetricsLightMode: null, greenTextDarkMode: null, greenTextLightMode: null, earningMetricsAvatar: null, socialIllo: null, lanyardIllo: null, revenueShare: null, revenueShareContainer: null, revenueShareIllo: null, revenueShareDescription: null };
let obj3 = { padding: 20, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj2.benefitCard = { marginVertical: 6, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm };
obj2.benefitAvatar = { width: 40, height: 40, marginHorizontal: 8, borderRadius: 20, overflow: "hidden" };
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
let obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.greenTextDarkMode = { color: nativeDefault.unsafe_rawColors.GREEN_230 };
const obj8 = { color: nativeDefault.unsafe_rawColors.GREEN_230 };
obj2.greenTextLightMode = { color: nativeDefault.unsafe_rawColors.GREEN_400 };
obj2.earningMetricsAvatar = { width: 54, height: 54, borderRadius: 27, overflow: "hidden" };
obj2.socialIllo = { marginTop: 50, marginStart: 16 };
obj2.lanyardIllo = { position: "absolute", bottom: 25, end: 0 };
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