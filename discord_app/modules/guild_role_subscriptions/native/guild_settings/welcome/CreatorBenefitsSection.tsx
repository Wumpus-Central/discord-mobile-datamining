// discord_app/modules/guild_role_subscriptions/native/guild_settings/welcome/CreatorBenefitsSection.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../../intl/index.native.tsx";
import AccessibilityAnnouncer from "../../../../../design/shared.tsx";
import useThemeDefault from "../../../../../hooks/useTheme.tsx";
import Text from "../../../../../design/components/Text/native/Text.tsx";
import preloadDefault from "../../../../../components_native/common/FastImage.tsx";
import registerAssetDefault from "../../../../../../_runtime/16920_registerAsset.js";
import registerAssetDefault2 from "../../../../../../_runtime/16921_registerAsset.js";
import registerAssetDefault3 from "../../../../../../_runtime/16922_registerAsset.js";
import registerAssetDefault4 from "../../../../../../_runtime/16923_registerAsset.js";
import registerAssetDefault5 from "../../../../../../_runtime/16924_registerAsset.js";
import registerAssetDefault6 from "../../../../../../_runtime/16925_registerAsset.js";
import registerAssetDefault7 from "../../../../../../_runtime/16926_registerAsset.js";
import registerAssetDefault8 from "../../../../../../_runtime/16927_registerAsset.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { CREATOR_REVENUE_SHARE_PERCENTAGE as closure_4 } from "../../../GuildRoleSubscriptionsConstants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
function EarningPreview() {
  const tmp3 = useThemeDefault();
  const tmp4 = callback3();
  const items = [tmp4.earningMetricsShadowContainer, ];
  let obj = { style: items, children: null };
  items[1] = obj.isThemeDark(tmp3) && tmp4.earningMetricsShadowContainerDarkMode;
  const items1 = [, , ];
  ({ earningMetrics: arr2[0], horizontalContainer: arr2[1] } = tmp4);
  let tmp7Result = AccessibilityAnnouncer;
  obj = { style: null, children: null };
  items1[2] = tmp7Result.isThemeDark(tmp3) ? tmp4.earningMetricsDarkMode : tmp4.earningMetricsLightMode;
  obj[0] = items1;
  obj1 = { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  obj1[2] = intl.string(getSystemLocale.t.TXPK7B);
  const items2 = [callback(Text.Text, obj1), ];
  tmp7Result = AccessibilityAnnouncer;
  const obj2 = { children: null };
  const obj3 = { style: tmp7Result.isThemeDark(tmp3) ? tmp4.greenTextDarkMode : tmp4.greenTextLightMode, variant: "heading-lg/extrabold", children: null };
  const intl2 = getSystemLocale.intl;
  obj3[2] = intl2.string(getSystemLocale.t.LdjJG5);
  items2[1] = callback(Text.Text, obj3);
  obj2[0] = items2;
  const items3 = [callback2(View, obj2), ];
  const obj4 = { style: tmp4.earningMetricsAvatar, source: null };
  const tmp8 = obj.isThemeDark(tmp3) && tmp4.earningMetricsShadowContainerDarkMode;
  obj4[1] = registerAssetDefault;
  items3[1] = callback(preloadDefault, obj4);
  obj[1] = items3;
  obj[1] = callback2(View, obj);
  return callback(View, obj);
}
function ConsistentEarningBenefit() {
  const tmp4 = callback3();
  let obj = { style: tmp4.benefitCardTitle, variant: "heading-md/medium", color: "text-default", children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t["9CdmS8"]);
  const items = [callback(Text.Text, obj), callback(EarningPreview, {}), ];
  obj = { style: items1, children: null };
  items1 = [, ];
  ({ horizontalContainer: arr2[0], benefitAvatars: arr2[1] } = tmp4);
  const tmp3 = useThemeDefault();
  if (obj4.isThemeDark(tmp3)) {
    let tmpResult = registerAssetDefault2;
  } else {
    tmpResult = registerAssetDefault3;
  }
  const items2 = [callback(BenefitAvatar, { avatarSource: tmpResult }), , ];
  obj4 = AccessibilityAnnouncer;
  items2[1] = callback(BenefitAvatar, { avatarSource: registerAssetDefault4 });
  items2[2] = callback(BenefitAvatar, { avatarSource: registerAssetDefault5 });
  obj[1] = items2;
  items[2] = callback2(View, obj);
  obj[1] = items;
  return callback2(View, obj);
}
function FollowerAwardBenefit() {
  const tmp = callback3();
  let obj = { style: tmp.benefitCardTitle, variant: "heading-md/medium", color: "text-default", children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.qsKRUQ);
  const items = [callback(Text.Text, obj), , ];
  obj = { style: tmp.socialIllo, source: registerAssetDefault6 };
  items[1] = callback(preloadDefault, obj);
  obj1 = { style: tmp.lanyardIllo, source: null };
  obj1[1] = registerAssetDefault7;
  items[2] = callback(preloadDefault, obj1);
  obj[1] = items;
  return callback2(View, obj);
}
function RevenueShareBenefit() {
  const tmp4 = callback3();
  const items = [, ];
  ({ benefitCard: arr[0], revenueShareContainer: arr[1] } = tmp4);
  const items1 = [tmp4.revenueShare, ];
  obj1 = AccessibilityAnnouncer;
  let obj = { style: null, variant: "heading-xxl/extrabold", color: "status-positive", children: null };
  items1[1] = obj1.isThemeDark(useThemeDefault()) ? tmp4.greenTextDarkMode : tmp4.greenTextLightMode;
  obj[0] = items1;
  obj[3] = `${closure_4}%`;
  const items2 = [callback(Text.Text, obj), , ];
  obj = { style: tmp4.revenueShareDescription, variant: "heading-md/medium", color: "text-default", children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.AewsXD);
  items2[1] = callback(Text.Text, obj);
  obj1 = { style: tmp4.revenueShareIllo, source: null };
  const tmp3 = useThemeDefault();
  obj1[1] = registerAssetDefault8;
  items2[2] = callback(preloadDefault, obj1);
  obj[1] = items2;
  return callback2(View, obj);
}
function BenefitAvatar(avatarSource) {
  const tmp = callback3();
  { style: tmp.benefitAvatarContainer, children: callback(preloadDefault, obj) };
  obj = { source: avatarSource.avatarSource, style: tmp.benefitAvatar };
  return callback(View, obj);
}
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const createCacheKey = { padding: 20, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderRadius: ThemesDefault.radii.sm, overflow: "hidden" };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { marginVertical: 6, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.sm };
createCacheKey[3] = { width: 40, height: 40, marginHorizontal: 8, borderRadius: 20, overflow: "hidden" };
createCacheKey[4] = { marginHorizontal: 24, marginBottom: 24, justifyContent: "space-between" };
createCacheKey[5] = { marginStart: 24, marginEnd: 35, marginVertical: 24 };
createCacheKey[6] = { shadowColor: ThemesDefault.colors.BLACK, shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.16, shadowRadius: 16, elevation: 4 };
createCacheKey[7] = { shadowOpacity: 0.24 };
createCacheKey[8] = { marginHorizontal: 24, marginBottom: 24, padding: 16, justifyContent: "space-between", alignItems: "center", borderRadius: ThemesDefault.radii.sm, overflow: "hidden" };
createCacheKey[9] = { backgroundColor: "#2E3638" };
createCacheKey[10] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[11] = { color: ThemesDefault.unsafe_rawColors.GREEN_230 };
createCacheKey[12] = { color: ThemesDefault.unsafe_rawColors.GREEN_400 };
createCacheKey[13] = { width: 54, height: 54, borderRadius: 27, overflow: "hidden" };
createCacheKey[14] = { marginTop: 50, marginStart: 16 };
createCacheKey[15] = { position: "absolute", bottom: 25, end: 0 };
createCacheKey[16] = { fontSize: 50, lineHeight: 52 };
createCacheKey[17] = { padding: 24 };
createCacheKey[18] = { marginTop: 15, alignSelf: "flex-end" };
createCacheKey[19] = { marginEnd: 120 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/CreatorBenefitsSection.tsx");

export default function CreatorBenefitsSection() {
  const obj = { children: null };
  const items = [callback(ConsistentEarningBenefit, {}), callback(FollowerAwardBenefit, {}), callback(RevenueShareBenefit, {})];
  obj[0] = items;
  return callback2(View, obj);
};