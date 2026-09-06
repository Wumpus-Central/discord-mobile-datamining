// === Module 13398: MarketingPageBannerTile ===

// Module 13398 (MarketingPageBannerTile)
import nativeDefault from "native" /* 576 */;
import LinkingDefault from "Linking" /* 4255 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7162 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8768 */;
import NitroUpsellButtonDefault from "NitroUpsellButton" /* 9970 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { container: { width: "100%" }, card: null, image: null, bodyText: null, ctaButton: null };
createStyles = { display: "flex", width: "100%", flexDirection: "column", justifyContent: "flex-start", padding: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT, overflow: "hidden" };
createStyles.card = createStyles;
let size = { width: "100%", maxWidth: 317, height: 144, borderRadius: nativeDefault.radii.md, marginBottom: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_8, alignSelf: "center" };
createStyles.image = size;
createStyles.bodyText = { marginTop: nativeDefault.space.PX_4 };
const obj1 = { marginTop: nativeDefault.space.PX_4 };
createStyles.ctaButton = { marginTop: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/promotions/native/MarketingPageBannerTile.tsx");

export default function MarketingPageBannerTile(bannerFields) {
  bannerFields = bannerFields.bannerFields;
  let helpArticleLinkProps;
  ({ style, cardStyle, componentId, promotionId, analyticsPage, onPaymentSuccess, onPaymentDismiss } = bannerFields);
  const tmp = closure_7();
  let obj = helpArticleLinkProps(13399);
  const button = bannerFields.button;
  let buttonAction;
  if (button != null) {
    buttonAction = button.buttonAction;
  }
  obj = { buttonAction, applicationId: null, analyticsLocations: null, analyticsPage: null, onPaymentSuccess: null, onPaymentDismiss: null };
  const button2 = bannerFields.button;
  value = undefined;
  if (button2 != null) {
    if (button2.navigableStorefrontApplicationId != null) {
      value = iter.value;
    }
  }
  obj.applicationId = value;
  obj.analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  obj.analyticsPage = analyticsPage;
  obj.onPaymentSuccess = onPaymentSuccess;
  obj.onPaymentDismiss = onPaymentDismiss;
  obj = { type: null, name: null, properties: null };
  const buttonActionHandler = obj.getButtonActionHandler(obj);
  obj.type = helpArticleLinkProps(1250).ImpressionTypes.VIEW;
  obj.name = helpArticleLinkProps(1250).ImpressionNames.PREMIUM_MARKETING_COMPONENT;
  const tmp2Result = useTrackImpressionDefault;
  obj.properties = { component_type: helpArticleLinkProps(10742).MarketingComponentType.MARKETING_PAGE_BANNER, component_id: componentId, promotion_id: promotionId };
  tmp2Result(obj);
  let tmp4Result = tmp4(13402);
  const formatStringWithCommonPremiumParams = tmp4Result.useFormatStringWithCommonPremiumParams(bannerFields.body);
  tmp4Result = tmp4(13402);
  helpArticleLinkProps = tmp4Result.getHelpArticleLinkProps(bannerFields.helpArticle, bannerFields.helpArticleId);
  const obj2 = { style: null, children: null };
  const items = [tmp.container, style];
  obj2.style = items;
  const obj3 = { style: null, children: null };
  const items1 = [tmp.card, cardStyle];
  obj3.style = items1;
  let tmp12Result = "" !== bannerFields.assetUrl;
  if (tmp12Result) {
    const obj4 = { source: null, style: null, resizeMode: "contain" };
    const obj5 = { uri: bannerFields.assetUrl };
    obj4.source = obj5;
    obj4.style = tmp.image;
    tmp12Result = closure_5(closure_3, obj4);
  }
  const items2 = [tmp12Result, closure_5(helpArticleLinkProps(4556).Text, { color: "mobile-text-heading-primary", variant: "text-lg/bold", children: bannerFields.header }), , ];
  const obj7 = { color: "mobile-text-heading-primary", variant: "text-sm/medium", style: tmp.bodyText, children: null };
  const items3 = [formatStringWithCommonPremiumParams, " ", ];
  tmp12Result = null != helpArticleLinkProps;
  if (tmp12Result) {
    const obj8 = {
      color: "text-link",
      variant: "text-sm/medium",
      accessibilityRole: "link",
      onPress() {
          return LinkingDefault.openURL(helpArticleLinkProps.url);
        },
      children: helpArticleLinkProps.linkText
    };
    tmp12Result = closure_5(tmp4(4556).Text, obj8);
  }
  items3[2] = tmp12Result;
  obj7.children = items3;
  items2[2] = closure_6(helpArticleLinkProps(4556).Text, obj7);
  let tmp12Result1 = null != bannerFields.button;
  if (tmp12Result1) {
    const obj9 = { style: tmp.ctaButton, children: null };
    const obj10 = { text: bannerFields.button.copy, onPress: buttonActionHandler };
    obj9.children = closure_5(NitroUpsellButtonDefault, obj10);
    tmp12Result1 = closure_5(closure_4, obj9);
  }
  items2[3] = tmp12Result1;
  obj3.children = items2;
  obj2.children = closure_6(closure_4, obj3);
  return closure_5(closure_4, obj2);
};