// discord_app/modules/premium/promotions/native/MarketingPageBannerTile.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { context } from "../../../app_analytics/useAnalyticsLocations.tsx";
import { trackImpression } from "../../../app_analytics/useTrackImpression.tsx";

let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: { width: "100%" }, card: null, image: null, bodyText: null, ctaButton: null };
createCacheKey = { display: "flex", width: "100%", flexDirection: "column", justifyContent: "flex-start", padding: require("Themes").space.PX_16, borderRadius: require("Themes").radii.lg, backgroundColor: require("Themes").colors.BACKGROUND_SECONDARY_ALT, overflow: "hidden" };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { width: "100%", maxWidth: 317, height: 144, borderRadius: require("Themes").radii.md, marginBottom: require("Themes").space.PX_16, padding: require("Themes").space.PX_8, alignSelf: "center" };
const obj1 = { width: "100%", maxWidth: 317, height: 144, borderRadius: require("Themes").radii.md, marginBottom: require("Themes").space.PX_16, padding: require("Themes").space.PX_8, alignSelf: "center" };
createCacheKey[3] = { marginTop: require("Themes").space.PX_4 };
let obj2 = { marginTop: require("Themes").space.PX_4 };
createCacheKey[4] = { marginTop: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { marginTop: require("Themes").space.PX_16 };
const result = require("jsxProd").fileFinishedImporting("modules/premium/promotions/native/MarketingPageBannerTile.tsx");

export default function MarketingPageBannerTile(bannerFields) {
  let analyticsPage;
  let cardStyle;
  let componentId;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let style;
  bannerFields = bannerFields.bannerFields;
  let helpArticleLinkProps;
  ({ style, cardStyle, componentId, analyticsPage, onPaymentSuccess, onPaymentDismiss } = bannerFields);
  const tmp = createCacheKey();
  let obj = helpArticleLinkProps(7755);
  const button = bannerFields.button;
  let buttonAction;
  if (button != null) {
    buttonAction = button.buttonAction;
  }
  obj = { buttonAction, applicationId: null, analyticsLocations: null, analyticsPage: null, onPaymentSuccess: null, onPaymentDismiss: null };
  const button2 = bannerFields.button;
  let value;
  if (button2 != null) {
    if (button2.navigableStorefrontApplicationId != null) {
      value = iter.value;
    }
  }
  obj[1] = value;
  obj[2] = context().analyticsLocations;
  obj[3] = analyticsPage;
  obj[4] = onPaymentSuccess;
  obj[5] = onPaymentDismiss;
  obj = { type: null, name: null, properties: null };
  const buttonActionHandler = obj.getButtonActionHandler(obj);
  obj[0] = helpArticleLinkProps(503).ImpressionTypes.VIEW;
  obj[1] = helpArticleLinkProps(503).ImpressionNames.PREMIUM_MARKETING_COMPONENT;
  const tmp2Result = trackImpression;
  obj[2] = { component_type: helpArticleLinkProps(7647).MarketingComponentType.MARKETING_PAGE_BANNER, component_id: componentId };
  tmp2Result(obj);
  let tmp4Result = tmp4(12676);
  const formatStringWithCommonPremiumParams = tmp4Result.useFormatStringWithCommonPremiumParams(bannerFields.body);
  tmp4Result = tmp4(12676);
  helpArticleLinkProps = tmp4Result.getHelpArticleLinkProps(bannerFields.helpArticle, bannerFields.helpArticleId);
  const obj2 = { style: items, children: null };
  items = [tmp.container, style];
  const obj3 = { style: items1, children: null };
  items1 = [tmp.card, cardStyle];
  let tmp12Result = "" !== bannerFields.assetUrl;
  if (tmp12Result) {
    const obj4 = { source: null, style: null, resizeMode: "contain" };
    const obj5 = { uri: null };
    obj5[0] = bannerFields.assetUrl;
    obj4[0] = obj5;
    obj4[1] = tmp.image;
    tmp12Result = tmp12(closure_3, obj4);
  }
  const items2 = [tmp12Result, closure_5(helpArticleLinkProps(4299).Text, { color: "mobile-text-heading-primary", variant: "text-lg/bold", children: bannerFields.header }), , ];
  const obj7 = { color: "mobile-text-heading-primary", variant: "text-sm/medium", style: tmp.bodyText, children: null };
  const items3 = [formatStringWithCommonPremiumParams, " ", ];
  tmp12Result = null != helpArticleLinkProps;
  if (tmp12Result) {
    const obj8 = { color: "text-link", variant: "text-sm/medium", accessibilityRole: "link", onPress: null, children: null };
    obj8[3] = function onPress() {
      return outer1_1(outer1_2[12]).openURL(helpArticleLinkProps.url);
    };
    obj8[4] = helpArticleLinkProps.linkText;
    tmp12Result = tmp12(tmp4(4299).Text, obj8);
  }
  items3[2] = tmp12Result;
  obj7[3] = items3;
  items2[2] = closure_6(helpArticleLinkProps(4299).Text, obj7);
  let tmp12Result1 = null != bannerFields.button;
  if (tmp12Result1) {
    const obj9 = { style: null, children: null };
    obj9[0] = tmp.ctaButton;
    const obj10 = { text: null, onPress: null };
    obj10[0] = bannerFields.button.copy;
    obj10[1] = buttonActionHandler;
    obj9[1] = tmp12(tmp2(9512), obj10);
    tmp12Result1 = tmp12(tmp13, obj9);
  }
  items2[3] = tmp12Result1;
  obj3[1] = items2;
  obj2[1] = closure_6(closure_4, obj3);
  return closure_5(closure_4, obj2);
};