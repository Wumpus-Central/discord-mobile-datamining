// === Module 19399: PremiumMarketingMomentActionSheet ===

// Module 19399 (PremiumMarketingMomentActionSheet)
import DispatcherDefault from "Dispatcher" /* 572 */;
import nativeDefault from "native" /* 575 */;
import LinkingDefault from "Linking" /* 5834 */;
import PremiumMarketingButtonActions from "PremiumMarketingButtonActions" /* 15592 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;

require = fn;
const View = fn(17).View;
const AnalyticsPages = fn(1072).AnalyticsPages;
const ContentDismissActionType = fn(4986).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5140);
let obj2 = { container: { display: "flex", flexDirection: "column", alignItems: "center", paddingVertical: 12, paddingHorizontal: 20, borderRadius: nativeDefault.radii.lg }, buttonContainer: null, header: null, body: null, image: null, video: null };
let size = { marginTop: nativeDefault.space.PX_24, width: 335, height: 48 };
obj2.buttonContainer = size;
let obj3 = { display: "flex", flexDirection: "column", alignItems: "center", paddingVertical: 12, paddingHorizontal: 20, borderRadius: nativeDefault.radii.lg };
obj2.header = { marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
obj2.body = { textAlign: "center" };
const size1 = { height: 188, width: 335, borderRadius: nativeDefault.radii.md, marginBottom: nativeDefault.space.PX_24 };
obj2.image = size1;
let obj4 = { marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
obj2.video = { borderRadius: nativeDefault.radii.md, marginBottom: nativeDefault.space.PX_24 };
let closure_10 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/promotions/native/PremiumMarketingMomentActionSheet.tsx");

export default function PremiumMarketingMomentActionSheet(component_id) {
  const markAsDismissed = component_id.markAsDismissed;
  const bottomSheetData = component_id.bottomSheetData;
  ({ copy, promotionId } = component_id);
  let helpArticleLink;
  const tmp = closure_10();
  items = [helpArticleLink];
  const stateFromStores = markAsDismissed(promotionId[8]).useStateFromStores(items, () => helpArticleLink.useReducedMotion);
  const analyticsLocations = bottomSheetData(promotionId[9])().analyticsLocations;
  const items1 = [markAsDismissed, promotionId];
  const callback = analyticsLocations.useCallback((arg0) => {
    markAsDismissed(arg0);
    DispatcherDefault.dispatch({ type: "PREMIUM_MARKETING_ANNOUNCEMENT_MODAL_DISMISSED", promotionId });
  }, items1);
  let button = bottomSheetData.button;
  let buttonAction;
  if (button != null) {
    buttonAction = button.buttonAction;
  }
  const items2 = [buttonAction, , , , ];
  let button2 = bottomSheetData.button;
  value = undefined;
  if (button2 != null) {
    if (button2.navigableStorefrontApplicationId != null) {
      value = iter.value;
    }
  }
  items2[1] = value;
  let button3 = bottomSheetData.button;
  value2 = undefined;
  if (button3 != null) {
    if (button3.shopCollectionId != null) {
      value2 = iter2.value;
    }
  }
  items2[2] = value2;
  items2[3] = callback;
  items2[4] = analyticsLocations;
  const items3 = [callback];
  const callback1 = analyticsLocations.useCallback(() => {
    callback(ContentDismissActionType.PRIMARY);
    const button = bottomSheetData.button;
    let buttonAction;
    if (button != null) {
      buttonAction = button.buttonAction;
    }
    const obj2 = { buttonAction, applicationId: null, shopCollectionId: null, analyticsLocations: null, analyticsPage: null };
    const button2 = bottomSheetData.button;
    value = undefined;
    if (button2 != null) {
      if (button2.navigableStorefrontApplicationId != null) {
        value = iter.value;
      }
    }
    obj2.applicationId = value;
    const button3 = bottomSheetData.button;
    value2 = undefined;
    if (button3 != null) {
      if (button3.shopCollectionId != null) {
        value2 = iter2.value;
      }
    }
    obj2.shopCollectionId = value2;
    obj2.analyticsLocations = analyticsLocations;
    obj2.analyticsPage = AnalyticsPages.PREMIUM_MARKETING_MOMENT_ACTION_SHEET;
    PremiumMarketingButtonActions.getButtonActionHandler(obj2)();
  }, items2);
  const callback2 = analyticsLocations.useCallback(() => {
    callback(ContentDismissActionType.USER_DISMISS);
  }, items3);
  const obj3 = { type: null, name: null, properties: null };
  let obj = markAsDismissed(promotionId[8]);
  obj3.type = markAsDismissed(promotionId[13]).ImpressionTypes.HALFSHEET;
  obj3.name = markAsDismissed(promotionId[13]).ImpressionNames.PREMIUM_MARKETING_COMPONENT;
  const tmp5Result = bottomSheetData(promotionId[12]);
  obj3.properties = { component_type: markAsDismissed(promotionId[14]).MarketingComponentType.MOBILE_BOTTOM_SHEET, component_id: component_id.componentId, dismissible_content: bottomSheetData.dismissibleContent, promotion_id: promotionId };
  tmp5Result(obj3);
  helpArticleLink = copy.helpArticleLink;
  const obj5 = { onDismiss: callback2, children: null };
  const obj6 = { style: tmp.container, children: null };
  const obj4 = { component_type: markAsDismissed(promotionId[14]).MarketingComponentType.MOBILE_BOTTOM_SHEET, component_id: component_id.componentId, dismissible_content: bottomSheetData.dismissibleContent, promotion_id: promotionId };
  if (tmp2Result.getFile(obj7).isVideo) {
    const size = { src: null, style: null, muted: true, height: 188, width: 335, paused: null, resizeMode: "contain" };
    ({ assetUrl: obj12.videoURI, assetUrl: obj12.uri } = bottomSheetData);
    size.src = { videoURI: null, uri: null };
    size.style = tmp.video;
    size.paused = stateFromStores;
    let tmp14Result = closure_8(tmp5(promotionId[17]), size);
    const obj8 = { videoURI: null, uri: null };
  } else {
    const obj9 = { source: null, style: null, resizeMode: "contain" };
    const obj10 = { uri: bottomSheetData.assetUrl };
    obj9.source = obj10;
    obj9.style = tmp.image;
    tmp14Result = closure_8(tmp5(promotionId[18]), obj9);
  }
  const items4 = [tmp14Result, closure_8(markAsDismissed(promotionId[19]).Text, { style: tmp.header, color: "mobile-text-heading-primary", variant: "heading-lg/semibold", children: copy.header }), , ];
  const obj13 = { style: tmp.body, color: "text-default", variant: "body-sm/normal", children: null };
  const items5 = [copy.body, " ", ];
  let tmp14Result2 = null != helpArticleLink;
  if (tmp14Result2) {
    const obj14 = {
      color: "text-link",
      variant: "body-sm/normal",
      accessibilityRole: "link",
      onPress() {
          return LinkingDefault.openURL(helpArticleLink.url);
        },
      children: helpArticleLink.linkText
    };
    tmp14Result2 = closure_8(tmp2(promotionId[19]).Text, obj14);
  }
  items5[2] = tmp14Result2;
  obj13.children = items5;
  items4[2] = closure_9(markAsDismissed(promotionId[19]).Text, obj13);
  const obj15 = { style: tmp.buttonContainer, children: null };
  let buttonCopy = copy.buttonCopy;
  const obj11 = { style: tmp.header, color: "mobile-text-heading-primary", variant: "heading-lg/semibold", children: copy.header };
  obj7 = { uri: bottomSheetData.assetUrl };
  tmp2Result = markAsDismissed(promotionId[16]);
  if (buttonCopy == null) {
    const intl = tmp2(promotionId[22]).intl;
    buttonCopy = intl.string(tmp2(promotionId[22]).t.J61px0);
  }
  obj15.children = closure_8(bottomSheetData(promotionId[21]), { text: buttonCopy, onPress: callback1 });
  items4[3] = closure_8(callback, obj15);
  obj6.children = items4;
  obj5.children = closure_9(callback, obj6);
  return closure_8(markAsDismissed(promotionId[15]).BottomSheet, obj5);
};