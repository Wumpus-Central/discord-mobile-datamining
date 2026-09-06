// discord_app/modules/premium/promotions/native/PremiumMarketingMomentActionSheet.tsx
import DispatcherDefault from "../../../../Dispatcher.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import PremiumMarketingButtonActions from "../../premium_marketing/native/PremiumMarketingButtonActions.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
const View = fn(17).View;
const AnalyticsPages = fn(1074).AnalyticsPages;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { container: null, buttonContainer: null, header: null, body: null, image: null, video: null };
createStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderRadius: nativeDefault.radii.lg,
};
createStyles.container = createStyles;
let size = { marginTop: nativeDefault.space.PX_24, width: 335, height: 48 };
createStyles.buttonContainer = size;
createStyles.header = { marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
createStyles.body = { textAlign: "center" };
const size1 = {
  height: 188,
  width: 335,
  borderRadius: nativeDefault.radii.md,
  marginBottom: nativeDefault.space.PX_24,
};
createStyles.image = size1;
let obj1 = { marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
createStyles.video = { borderRadius: nativeDefault.radii.md, marginBottom: nativeDefault.space.PX_24 };
let closure_10 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/promotions/native/PremiumMarketingMomentActionSheet.tsx");

export default function PremiumMarketingMomentActionSheet(component_id) {
  const markAsDismissed = component_id.markAsDismissed;
  const bottomSheetData = component_id.bottomSheetData;
  const promotionId = component_id.promotionId;
  let helpArticleLinkProps;
  const tmp = closure_10();
  let obj = markAsDismissed(promotionId[8]);
  const items = [helpArticleLinkProps];
  const stateFromStores = obj.useStateFromStores(items, () => helpArticleLinkProps.useReducedMotion);
  const analyticsLocations = bottomSheetData(promotionId[9])().analyticsLocations;
  let obj1 = analyticsLocations;
  const items1 = [markAsDismissed, promotionId];
  const callback = analyticsLocations.useCallback((arg0) => {
    markAsDismissed(arg0);
    const obj = { type: "PREMIUM_MARKETING_ANNOUNCEMENT_MODAL_DISMISSED", promotionId };
    obj.dispatch(obj);
  }, items1);
  let button = bottomSheetData.button;
  let buttonAction;
  if (button != null) {
    buttonAction = button.buttonAction;
  }
  const items2 = [buttonAction, , ,];
  let button2 = bottomSheetData.button;
  value = undefined;
  if (button2 != null) {
    if (button2.navigableStorefrontApplicationId != null) {
      value = iter.value;
    }
  }
  items2[1] = value;
  items2[2] = callback;
  items2[3] = analyticsLocations;
  const items3 = [callback];
  const callback1 = analyticsLocations.useCallback(() => {
    callback(ContentDismissActionType.PRIMARY);
    let obj = PremiumMarketingButtonActions;
    const button = bottomSheetData.button;
    let buttonAction;
    if (button != null) {
      buttonAction = button.buttonAction;
    }
    obj = { buttonAction, applicationId: null, analyticsLocations: null, analyticsPage: null };
    const button2 = bottomSheetData.button;
    value = undefined;
    if (button2 != null) {
      if (button2.navigableStorefrontApplicationId != null) {
        value = iter.value;
      }
    }
    obj.applicationId = value;
    obj.analyticsLocations = analyticsLocations;
    obj.analyticsPage = AnalyticsPages.PREMIUM_MARKETING_MOMENT_ACTION_SHEET;
    obj.getButtonActionHandler(obj)();
  }, items2);
  const callback2 = obj1.useCallback(() => {
    callback(ContentDismissActionType.USER_DISMISS);
  }, items3);
  obj = { type: null, name: null, properties: null };
  let tmp5Result = tmp5(tmp3[12]);
  obj.type = markAsDismissed(promotionId[13]).ImpressionTypes.HALFSHEET;
  obj.name = markAsDismissed(promotionId[13]).ImpressionNames.PREMIUM_MARKETING_COMPONENT;
  obj = {
    component_type: tmp2(tmp3[14]).MarketingComponentType.MOBILE_BOTTOM_SHEET,
    component_id: component_id.componentId,
    dismissible_content: bottomSheetData.dismissibleContent,
    promotion_id: promotionId,
  };
  obj.properties = obj;
  tmp5Result(obj);
  let tmp2Result = tmp2(tmp3[15]);
  helpArticleLinkProps = tmp2Result.getHelpArticleLinkProps(bottomSheetData.helpArticle, bottomSheetData.helpArticleId);
  obj1 = { onDismiss: callback2, children: null };
  const obj2 = { style: null, children: null };
  const items4 = [tmp.container];
  obj2.style = items4;
  tmp2Result = tmp2(tmp3[17]);
  if (tmp2Result.getFile(obj3).isVideo) {
    const size = { src: null, style: null, muted: true, height: 188, width: 335, paused: null, resizeMode: "contain" };
    ({ assetUrl: obj13.videoURI, assetUrl: obj13.uri } = bottomSheetData);
    size.src = { videoURI: null, uri: null };
    size.style = tmp.video;
    size.paused = stateFromStores;
    let tmp14Result = tmp14(tmp5(tmp3[18]), size);
    const obj4 = { videoURI: null, uri: null };
  } else {
    const obj5 = { source: null, style: null, resizeMode: "contain" };
    const obj6 = { uri: bottomSheetData.assetUrl };
    obj5.source = obj6;
    obj5.style = tmp.image;
    tmp14Result = tmp14(tmp5(tmp3[19]), obj5);
  }
  const items5 = [tmp14Result, , ,];
  const obj7 = {
    style: null,
    color: "mobile-text-heading-primary",
    variant: "heading-lg/extrabold",
    children: bottomSheetData.header,
  };
  const items6 = [tmp.header];
  obj7.style = items6;
  items5[1] = closure_8(markAsDismissed(promotionId[20]).Text, obj7);
  const obj8 = { style: null, color: "text-default", variant: "text-sm/normal", children: null };
  const items7 = [tmp.body];
  obj8.style = items7;
  const items8 = [bottomSheetData.body, " "];
  tmp14Result = null != helpArticleLinkProps;
  if (tmp14Result) {
    const obj9 = {
      color: "text-link",
      variant: "text-sm/normal",
      accessibilityRole: "link",
      onPress() {
        return LinkingDefault.openURL(helpArticleLinkProps.url);
      },
      children: helpArticleLinkProps.linkText,
    };
    tmp14Result = tmp14(tmp2(tmp3[20]).Text, obj9);
  }
  items8[2] = tmp14Result;
  obj8.children = items8;
  items5[2] = closure_9(markAsDismissed(promotionId[20]).Text, obj8);
  const obj10 = { style: null, children: null };
  const items9 = [tmp.buttonContainer];
  obj10.style = items9;
  const button3 = bottomSheetData.button;
  let copy;
  tmp5Result = tmp5(tmp3[22]);
  if (button3 != null) {
    copy = button3.copy;
  }
  if (copy == null) {
    const intl = tmp2(tmp3[23]).intl;
    copy = intl.string(tmp2(tmp3[23]).t.J61px0);
  }
  obj10.children = closure_8(tmp5Result, { text: copy, onPress: callback1 });
  items5[3] = closure_8(callback, obj10);
  obj2.children = items5;
  obj1.children = closure_9(callback, obj2);
  return closure_8(markAsDismissed(promotionId[16]).BottomSheet, obj1);
}
