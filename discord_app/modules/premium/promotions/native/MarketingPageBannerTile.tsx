// === Module 13535: MarketingPageBannerTile ===

// Module 13535 (MarketingPageBannerTile)
import nativeDefault from "native" /* 576 */;
import LinkingDefault from "Linking" /* 4334 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7276 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8924 */;
import NitroUpsellButtonDefault from "NitroUpsellButton" /* 10120 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4640);
let obj2 = { container: { width: "100%" }, card: { display: "flex", width: "100%", flexDirection: "column", justifyContent: "flex-start", padding: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT, overflow: "hidden" }, image: null, bodyText: null, ctaButton: null };
let size = { width: "100%", maxWidth: 317, height: 144, borderRadius: nativeDefault.radii.md, marginBottom: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_8, alignSelf: "center" };
obj2.image = size;
let obj3 = { display: "flex", width: "100%", flexDirection: "column", justifyContent: "flex-start", padding: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT, overflow: "hidden" };
obj2.bodyText = { marginTop: nativeDefault.space.PX_4 };
let obj4 = { marginTop: nativeDefault.space.PX_4 };
obj2.ctaButton = { marginTop: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/promotions/native/MarketingPageBannerTile.tsx");

export default function MarketingPageBannerTile(bannerFields) {
  bannerFields = bannerFields.bannerFields;
  let helpArticleLinkProps;
  ({ style, cardStyle, componentId, promotionId, analyticsPage, onPaymentSuccess, onPaymentDismiss } = bannerFields);
  const tmp = closure_7();
  const button = bannerFields.button;
  let buttonAction;
  if (button != null) {
    buttonAction = button.buttonAction;
  }
  const obj2 = { buttonAction, applicationId: null, analyticsLocations: null, analyticsPage: null, onPaymentSuccess: null, onPaymentDismiss: null };
  const button2 = bannerFields.button;
  value = undefined;
  if (button2 != null) {
    if (button2.navigableStorefrontApplicationId != null) {
      value = iter.value;
    }
  }
  obj2.applicationId = value;
  obj2.analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  obj2.analyticsPage = analyticsPage;
  obj2.onPaymentSuccess = onPaymentSuccess;
  obj2.onPaymentDismiss = onPaymentDismiss;
  const obj = helpArticleLinkProps(13536);
  const obj3 = { type: null, name: null, properties: null };
  const buttonActionHandler = helpArticleLinkProps(13536).getButtonActionHandler(obj2);
  obj3.type = helpArticleLinkProps(1249).ImpressionTypes.VIEW;
  obj3.name = helpArticleLinkProps(1249).ImpressionNames.PREMIUM_MARKETING_COMPONENT;
  const tmp2Result = useTrackImpressionDefault;
  obj3.properties = { component_type: helpArticleLinkProps(10891).MarketingComponentType.MARKETING_PAGE_BANNER, component_id: componentId, promotion_id: promotionId };
  tmp2Result(obj3);
  const obj4 = { component_type: helpArticleLinkProps(10891).MarketingComponentType.MARKETING_PAGE_BANNER, component_id: componentId, promotion_id: promotionId };
  const formatStringWithCommonPremiumParams = helpArticleLinkProps(13539).useFormatStringWithCommonPremiumParams(bannerFields.body);
  const tmp4Result = helpArticleLinkProps(13539);
  helpArticleLinkProps = helpArticleLinkProps(13539).getHelpArticleLinkProps(bannerFields.helpArticle, bannerFields.helpArticleId);
  const obj5 = { style: null, children: null };
  const items = [tmp.container, style];
  obj5.style = items;
  const obj6 = { style: null, children: null };
  const items1 = [tmp.card, cardStyle];
  obj6.style = items1;
  let tmp12Result = "" !== bannerFields.assetUrl;
  if (tmp12Result) {
    const obj7 = { source: null, style: null, resizeMode: "contain" };
    const obj8 = { uri: bannerFields.assetUrl };
    obj7.source = obj8;
    obj7.style = tmp.image;
    tmp12Result = closure_5(closure_3, obj7);
  }
  const items2 = [tmp12Result, closure_5(helpArticleLinkProps(4636).Text, { color: "mobile-text-heading-primary", variant: "text-lg/bold", children: bannerFields.header }), , ];
  const obj10 = { color: "mobile-text-heading-primary", variant: "text-sm/medium", style: tmp.bodyText, children: null };
  const items3 = [formatStringWithCommonPremiumParams, " ", ];
  let tmp12Result3 = null != helpArticleLinkProps;
  if (tmp12Result3) {
    const obj11 = {
      color: "text-link",
      variant: "text-sm/medium",
      accessibilityRole: "link",
      onPress() {
          return LinkingDefault.openURL(helpArticleLinkProps.url);
        },
      children: helpArticleLinkProps.linkText
    };
    tmp12Result3 = closure_5(tmp4(4636).Text, obj11);
  }
  items3[2] = tmp12Result3;
  obj10.children = items3;
  items2[2] = closure_6(helpArticleLinkProps(4636).Text, obj10);
  let tmp12Result4 = null != bannerFields.button;
  if (tmp12Result4) {
    const obj12 = { style: tmp.ctaButton, children: null };
    const obj13 = { text: bannerFields.button.copy, onPress: buttonActionHandler };
    obj12.children = closure_5(NitroUpsellButtonDefault, obj13);
    tmp12Result4 = closure_5(closure_4, obj12);
  }
  items2[3] = tmp12Result4;
  obj6.children = items2;
  obj5.children = closure_6(closure_4, obj6);
  return closure_5(closure_4, obj5);
};