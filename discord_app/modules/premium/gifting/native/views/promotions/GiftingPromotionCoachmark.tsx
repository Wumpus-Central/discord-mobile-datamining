// === Module 17308: GiftingPromotionCoachmark ===

// Module 17308 (GiftingPromotionCoachmark)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7358 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7378 */;
import usePreviousDefault from "usePrevious" /* 8504 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10904 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4714 */;
import PromotionsStore from "PromotionsStore" /* 10908 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticsSections: closure_7, AnalyticsObjects: closure_8, AnalyticsPages: closure_9 } = Constants);
const ContentDismissActionType = fn(1955).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4722);
let obj2 = { container: { alignItems: "center", padding: nativeDefault.space.PX_16 }, textContainer: null, text: null, countdownBadge: null, imageShared: null, imageWrapperAndroid: null };
let obj3 = { alignItems: "center", padding: nativeDefault.space.PX_16 };
obj2.textContainer = { gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
obj2.text = { textAlign: "center" };
let obj4 = { gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
obj2.countdownBadge = { alignSelf: "center", marginTop: nativeDefault.space.PX_24 };
let size = { height: 188, width: 335, borderRadius: nativeDefault.radii.sm };
obj2.imageShared = size;
obj2.imageWrapperAndroid = { overflow: "hidden" };
let closure_13 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingPromotionCoachmark.tsx");

export default function GiftingPromotionCoachmarkActionSheet(arg0) {
  ({ coachmarkComponent, markAsDismissed } = arg0);
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  closure_4 = undefined;
  let analyticsLocations;
  const tmp = closure_13();
  const items = [analyticsLocations];
  const stateFromStores = markAsDismissed(504).useStateFromStores(items, () => analyticsLocations.useReducedMotion);
  let obj = markAsDismissed(504);
  let asset;
  if (coachmarkComponent != null) {
    asset = coachmarkComponent.asset;
  }
  const themeAndReducedMotionAwareAssetUrl = markAsDismissed(10999).useThemeAndReducedMotionAwareAssetUrl(asset);
  let obj2 = markAsDismissed(10999);
  const items1 = [PromotionsStore];
  const stateFromStores1 = markAsDismissed(504).useStateFromStores(items1, () => giftPromotion.getGiftPromotion());
  const tmp2Result = markAsDismissed(504);
  let endDate;
  if (stateFromStores1 != null) {
    endDate = stateFromStores1.endDate;
  }
  const tickingFormattedLimitedOfferTimeLeft = markAsDismissed(11000).useTickingFormattedLimitedOfferTimeLeft(endDate);
  importDefault = tmp10;
  const tmp12 = usePreviousDefault(null != stateFromStores1);
  dependencyMap = tmp12;
  noop = tmp13;
  const tmp14 = usePreviousDefault(null != tickingFormattedLimitedOfferTimeLeft);
  closure_4 = tmp14;
  const items2 = [tmp14, null != tickingFormattedLimitedOfferTimeLeft, null != stateFromStores1, tmp12, markAsDismissed];
  const effect = noop.useEffect(() => {
    if (closure_2) {
      if (!closure_1) {
        ActionSheetActionCreatorsDefault.hideActionSheet();
      }
    }
    let tmp5 = closure_4;
    if (closure_4) {
      tmp5 = !closure_3;
    }
    if (tmp5) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      markAsDismissed(ContentDismissActionType.AUTO_DISMISS);
    }
  }, items2);
  const tmp2Result3 = markAsDismissed(11000);
  analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.GIFTING_PROMOTION_COACHMARK).analyticsLocations;
  const items3 = [analyticsLocations, markAsDismissed];
  let tmp19Result3 = null;
  if (null != coachmarkComponent) {
    let obj3 = {
      startExpanded: true,
      onDismiss() {
          return markAsDismissed(ContentDismissActionType.USER_DISMISS);
        },
      children: null
    };
    const obj4 = { style: tmp.container, children: null };
    if (null == themeAndReducedMotionAwareAssetUrl) {
      const items4 = [tmp23, , , ];
      let tmp19Result = null != tickingFormattedLimitedOfferTimeLeft;
      if (tmp19Result) {
        const obj5 = { text: tickingFormattedLimitedOfferTimeLeft, style: tmp.countdownBadge };
        tmp19Result = closure_11(tmp11(11003), obj5);
      }
      items4[1] = tmp19Result;
      const obj6 = { style: tmp.textContainer, children: null };
      const obj7 = { style: tmp.text, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: coachmarkComponent.header };
      const items5 = [closure_11(markAsDismissed(4718).Heading, obj7), ];
      const obj8 = { style: tmp.text, variant: "text-md/normal", color: "text-subtle", children: coachmarkComponent.body };
      items5[1] = closure_11(markAsDismissed(4718).Text, obj8);
      obj6.children = items5;
      items4[2] = closure_12(tmp22, obj6);
      const obj9 = { grow: true, icon: null, text: null, onPress: null };
      const obj10 = { size: "sm", color: tmp11(576).colors.WHITE };
      obj9.icon = closure_11(markAsDismissed(11284).GiftIcon, obj10);
      const intl = markAsDismissed(1115).intl;
      obj9.text = intl.string(markAsDismissed(1115).t.Ve9Ge6);
      obj9.onPress = tmp17;
      items4[3] = closure_11(markAsDismissed(5144).Button, obj9);
      obj4.children = items4;
      obj3.children = closure_12(tmp22, obj4);
      tmp19Result3 = closure_11(tmp20, obj3);
    } else {
      if (tmp2Result4.isAndroid()) {
        if (!stateFromStores) {
          const obj11 = { style: null, children: null };
          const items6 = [, ];
          ({ imageShared: arr5[0], imageWrapperAndroid: arr5[1] } = tmp);
          obj11.style = items6;
          const obj12 = { url: themeAndReducedMotionAwareAssetUrl, style: tmp.imageShared, autoplay: true };
          obj11.children = closure_11(markAsDismissed(9049).APNGPlayer, obj12);
          let tmp19Result4 = closure_11(tmp22, obj11);
        }
      }
      const obj13 = { source: null, style: null };
      const obj14 = { uri: themeAndReducedMotionAwareAssetUrl };
      obj13.source = obj14;
      obj13.style = tmp.imageShared;
      tmp19Result4 = closure_11(tmp11(5757), obj13);
      tmp2Result4 = markAsDismissed(1364);
    }
  }
  return tmp19Result3;
};