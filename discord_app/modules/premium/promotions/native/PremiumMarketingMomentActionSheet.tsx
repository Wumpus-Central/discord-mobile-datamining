// discord_app/modules/premium/promotions/native/PremiumMarketingMomentActionSheet.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import maybeApplyNoTextColorForLightCustomTheme from "../../../a11y/AccessibilityStore.tsx";
import { AnalyticsPages } from "../../../../Constants.tsx";
import { ContentDismissActionType } from "../../../dismissible_content/DismissibleContentConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ jsx: closure_8, jsxs: c9 } = jsxProd);
const createCacheKey = { display: "flex", flexDirection: "column", alignItems: "center", paddingVertical: 12, paddingHorizontal: 20, borderRadius: ThemesDefault.radii.lg };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: ThemesDefault.space.PX_24, width: 335, height: 48 };
createCacheKey[2] = { marginBottom: ThemesDefault.space.PX_8, textAlign: "center" };
createCacheKey[3] = { textAlign: "center" };
createCacheKey[4] = { height: 188, width: 335, borderRadius: ThemesDefault.radii.md, marginBottom: ThemesDefault.space.PX_24 };
createCacheKey[5] = { borderRadius: ThemesDefault.radii.md, marginBottom: ThemesDefault.space.PX_24 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/premium/promotions/native/PremiumMarketingMomentActionSheet.tsx");

export default function PremiumMarketingMomentActionSheet(component_id) {
  const markAsDismissed = component_id.markAsDismissed;
  const bottomSheetData = component_id.bottomSheetData;
  const promotionId = component_id.promotionId;
  let callback;
  let helpArticleLinkProps;
  const tmp = callback();
  let obj = markAsDismissed(promotionId[8]);
  const items = [helpArticleLinkProps];
  const stateFromStores = obj.useStateFromStores(items, () => helpArticleLinkProps.useReducedMotion);
  const analyticsLocations = bottomSheetData(promotionId[9])().analyticsLocations;
  obj1 = analyticsLocations;
  const items1 = [markAsDismissed, promotionId];
  callback = analyticsLocations.useCallback((arg0) => {
    markAsDismissed(arg0);
    bottomSheetData(promotionId[10]);
    const obj = { type: "PREMIUM_MARKETING_ANNOUNCEMENT_MODAL_DISMISSED", promotionId };
    obj.dispatch(obj);
  }, items1);
  let button = bottomSheetData.button;
  let buttonAction;
  if (button != null) {
    buttonAction = button.buttonAction;
  }
  const items2 = [buttonAction, , , ];
  let button2 = bottomSheetData.button;
  let value;
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
    let obj = markAsDismissed(promotionId[11]);
    const button = bottomSheetData.button;
    let buttonAction;
    if (button != null) {
      buttonAction = button.buttonAction;
    }
    obj = { buttonAction, applicationId: null, analyticsLocations: null, analyticsPage: null };
    const button2 = bottomSheetData.button;
    let value;
    if (button2 != null) {
      if (button2.navigableStorefrontApplicationId != null) {
        value = iter.value;
      }
    }
    obj[1] = value;
    obj[2] = analyticsLocations;
    obj[3] = AnalyticsPages.PREMIUM_MARKETING_MOMENT_ACTION_SHEET;
    obj.getButtonActionHandler(obj)();
  }, items2);
  const callback2 = obj1.useCallback(() => {
    callback(ContentDismissActionType.USER_DISMISS);
  }, items3);
  obj = { type: null, name: null, properties: null };
  let tmp5Result = tmp5(tmp3[12]);
  obj[0] = markAsDismissed(promotionId[13]).ImpressionTypes.HALFSHEET;
  obj[1] = markAsDismissed(promotionId[13]).ImpressionNames.PREMIUM_MARKETING_COMPONENT;
  obj = { component_type: tmp2(tmp3[14]).MarketingComponentType.MOBILE_BOTTOM_SHEET, component_id: component_id.componentId, dismissible_content: bottomSheetData.dismissibleContent, promotion_id: promotionId };
  obj[2] = obj;
  tmp5Result(obj);
  let tmp2Result = tmp2(tmp3[15]);
  helpArticleLinkProps = tmp2Result.getHelpArticleLinkProps(bottomSheetData.helpArticle, bottomSheetData.helpArticleId);
  obj1 = { onDismiss: callback2, children: null };
  const obj2 = { style: items4, children: null };
  items4 = [tmp.container];
  tmp2Result = tmp2(tmp3[17]);
  if (tmp2Result.getFile(obj3).isVideo) {
    const obj4 = { src: null, style: null, muted: true, height: 188, width: 335, paused: null, resizeMode: "contain" };
    ({ assetUrl: obj13[0], assetUrl: obj13[1] } = bottomSheetData);
    obj4[0] = { videoURI: null, uri: null };
    obj4[1] = tmp.video;
    obj4[5] = stateFromStores;
    let tmp14Result = callback(tmp5(tmp3[18]), obj4);
  } else {
    const obj6 = { source: null, style: null, resizeMode: "contain" };
    const obj7 = { uri: null };
    obj7[0] = bottomSheetData.assetUrl;
    obj6[0] = obj7;
    obj6[1] = tmp.image;
    tmp14Result = callback(tmp5(tmp3[19]), obj6);
  }
  const items5 = [tmp14Result, , , ];
  const items6 = [tmp.header];
  items5[1] = callback(markAsDismissed(promotionId[20]).Text, { style: items6, color: "mobile-text-heading-primary", variant: "heading-lg/extrabold", children: bottomSheetData.header });
  const obj9 = { style: items7, color: "text-default", variant: "text-sm/normal", children: null };
  items7 = [tmp.body];
  const items8 = [bottomSheetData.body, " ", ];
  tmp14Result = null != helpArticleLinkProps;
  if (tmp14Result) {
    const obj10 = { color: "text-link", variant: "text-sm/normal", accessibilityRole: "link", onPress: null, children: null };
    obj10[3] = function onPress() {
      return bottomSheetData(promotionId[21]).openURL(helpArticleLinkProps.url);
    };
    obj10[4] = helpArticleLinkProps.linkText;
    tmp14Result = callback(tmp2(tmp3[20]).Text, obj10);
  }
  items8[2] = tmp14Result;
  obj9[3] = items8;
  items5[2] = callback2(markAsDismissed(promotionId[20]).Text, obj9);
  const obj11 = { style: items9, children: null };
  items9 = [tmp.buttonContainer];
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
  obj11[1] = callback(tmp5Result, { text: copy, onPress: callback1 });
  items5[3] = callback(callback, obj11);
  obj2[1] = items5;
  obj1[1] = callback2(callback, obj2);
  return callback(markAsDismissed(promotionId[16]).BottomSheet, obj1);
};