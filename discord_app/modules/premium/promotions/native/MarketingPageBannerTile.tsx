// discord_app/modules/premium/promotions/native/MarketingPageBannerTile.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import useTrackImpressionDefault from "../../../app_analytics/useTrackImpression.tsx";
import useAnalyticsLocationsDefault from "../../../app_analytics/useAnalyticsLocations.tsx";
import NitroUpsellButtonDefault from "../../components/native/NitroUpsellButton.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5243);
let obj2 = {
  container: { width: "100%" },
  card: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: nativeDefault.space.PX_16,
    borderRadius: nativeDefault.radii.lg,
    backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT,
    overflow: "hidden",
  },
  image: null,
  bodyText: null,
  ctaButton: null,
};
let size = {
  width: "100%",
  maxWidth: 317,
  height: 144,
  borderRadius: nativeDefault.radii.md,
  marginBottom: nativeDefault.space.PX_16,
  padding: nativeDefault.space.PX_8,
  alignSelf: "center",
};
obj2.image = size;
let obj3 = {
  display: "flex",
  width: "100%",
  flexDirection: "column",
  justifyContent: "flex-start",
  padding: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT,
  overflow: "hidden",
};
obj2.bodyText = { marginTop: nativeDefault.space.PX_4 };
let obj4 = { marginTop: nativeDefault.space.PX_4 };
obj2.ctaButton = { marginTop: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/promotions/native/MarketingPageBannerTile.tsx");

export default function MarketingPageBannerTile(bannerFields) {
  bannerFields = bannerFields.bannerFields;
  let helpArticleLinkProps;
  ({ style, cardStyle, componentId, componentType, promotionId, analyticsPage, onPaymentSuccess, onPaymentDismiss } =
    bannerFields);
  const tmp = closure_6();
  const button = bannerFields.button;
  let buttonAction;
  if (button != null) {
    buttonAction = button.buttonAction;
  }
  const obj2 = {
    buttonAction,
    applicationId: null,
    shopCollectionId: null,
    analyticsLocations: null,
    analyticsPage: null,
    onPaymentSuccess: null,
    onPaymentDismiss: null,
  };
  const button2 = bannerFields.button;
  value = undefined;
  if (button2 != null) {
    if (button2.navigableStorefrontApplicationId != null) {
      value = iter.value;
    }
  }
  obj2.applicationId = value;
  const button3 = bannerFields.button;
  let value2;
  if (button3 != null) {
    if (button3.shopCollectionId != null) {
      value2 = iter2.value;
    }
  }
  obj2.shopCollectionId = value2;
  obj2.analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  obj2.analyticsPage = analyticsPage;
  obj2.onPaymentSuccess = onPaymentSuccess;
  obj2.onPaymentDismiss = onPaymentDismiss;
  const obj = helpArticleLinkProps(9949);
  const obj3 = { type: null, name: null, properties: null };
  const buttonActionHandler = helpArticleLinkProps(9949).getButtonActionHandler(obj2);
  obj3.type = helpArticleLinkProps(1260).ImpressionTypes.VIEW;
  obj3.name = helpArticleLinkProps(1260).ImpressionNames.PREMIUM_MARKETING_COMPONENT;
  obj3.properties = { component_type: componentType, component_id: componentId, promotion_id: promotionId };
  useTrackImpressionDefault(obj3);
  const tmp2Result = useTrackImpressionDefault;
  const formatStringWithCommonPremiumParams = helpArticleLinkProps(10006).useFormatStringWithCommonPremiumParams(
    bannerFields.body,
  );
  const tmp4Result = helpArticleLinkProps(10006);
  helpArticleLinkProps = helpArticleLinkProps(10006).getHelpArticleLinkProps(
    bannerFields.helpArticle,
    bannerFields.helpArticleId,
  );
  const obj4 = { style: null, children: null };
  items = [tmp.container, style];
  obj4.style = items;
  const obj5 = { style: null, children: null };
  const items1 = [tmp.card, cardStyle];
  obj5.style = items1;
  let tmp13Result = "" !== bannerFields.assetUrl;
  if (tmp13Result) {
    const obj6 = { source: null, style: null, resizeMode: "contain" };
    const obj7 = { uri: bannerFields.assetUrl };
    obj6.source = obj7;
    obj6.style = tmp.image;
    tmp13Result = closure_4(FastImageDefault, obj6);
  }
  const items2 = [
    tmp13Result,
    closure_4(helpArticleLinkProps(5866).Text, {
      color: "mobile-text-heading-primary",
      variant: "body-lg/semibold",
      children: bannerFields.header,
    }),
    ,
  ];
  const obj9 = { color: "mobile-text-heading-primary", variant: "body-sm/medium", style: tmp.bodyText, children: null };
  const items3 = [formatStringWithCommonPremiumParams, " "];
  let tmp13Result3 = null != helpArticleLinkProps;
  if (tmp13Result3) {
    const obj10 = {
      color: "text-link",
      variant: "body-sm/medium",
      accessibilityRole: "link",
      onPress() {
        return LinkingDefault.openURL(helpArticleLinkProps.url);
      },
      children: helpArticleLinkProps.linkText,
    };
    tmp13Result3 = closure_4(tmp4(5866).Text, obj10);
  }
  items3[2] = tmp13Result3;
  obj9.children = items3;
  items2[2] = closure_5(helpArticleLinkProps(5866).Text, obj9);
  let tmp13Result4 = null != bannerFields.button;
  if (tmp13Result4) {
    const obj11 = { style: tmp.ctaButton, children: null };
    const obj12 = { text: bannerFields.button.copy, onPress: buttonActionHandler };
    obj11.children = closure_4(NitroUpsellButtonDefault, obj12);
    tmp13Result4 = closure_4(View, obj11);
  }
  items2[3] = tmp13Result4;
  obj5.children = items2;
  obj4.children = closure_5(View, obj5);
  return closure_4(View, obj4);
}
