// === Module 16717: GiftingPromotionCoachmark ===

// Module 16717 (GiftingPromotionCoachmark)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6578 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6598 */;
import usePreviousDefault from "usePrevious" /* 7712 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10113 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4821 */;
import PromotionsStore from "PromotionsStore" /* 10117 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticsSections: closure_7, AnalyticsObjects: closure_8, AnalyticsPages: closure_9 } = Constants);
const ContentDismissActionType = fn(2041).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { container: { alignItems: "center", padding: nativeDefault.space.PX_16 }, textContainer: null, text: null, countdownBadge: null, countdownBadgeText: null, imageShared: null, imageWrapperAndroid: null };
let obj3 = { alignItems: "center", padding: nativeDefault.space.PX_16 };
obj2.textContainer = { gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
obj2.text = { textAlign: "center" };
let obj4 = { gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
obj2.countdownBadge = { flexDirection: "row", alignSelf: "center", borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_24, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let PlatformUtils = fn(1364);
PlatformUtils = PlatformUtils.isAndroid();
const space = nativeDefault.space;
let obj7 = { lineHeight: PlatformUtils ? space.PX_12 : space.PX_16, paddingVertical: null };
PlatformUtils = fn(1364);
let PX_4;
if (PlatformUtils.isAndroid()) {
  PX_4 = nativeDefault.space.PX_4;
}
obj7.paddingVertical = PX_4;
obj2.countdownBadgeText = obj7;
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
  const themeAndReducedMotionAwareAssetUrl = markAsDismissed(10206).useThemeAndReducedMotionAwareAssetUrl(asset);
  let obj2 = markAsDismissed(10206);
  const items1 = [PromotionsStore];
  const stateFromStores1 = markAsDismissed(504).useStateFromStores(items1, () => giftPromotion.getGiftPromotion());
  const tmp2Result = markAsDismissed(504);
  let endDate;
  if (stateFromStores1 != null) {
    endDate = stateFromStores1.endDate;
  }
  const str = markAsDismissed(16718).useTickingFormattedLimitedOfferTimeLeft(endDate);
  importDefault = tmp9;
  const tmp11 = usePreviousDefault(null != stateFromStores1);
  dependencyMap = tmp11;
  noop = tmp12;
  const tmp13 = usePreviousDefault(null != str);
  closure_4 = tmp13;
  const items2 = [tmp13, null != str, null != stateFromStores1, tmp11, markAsDismissed];
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
  const tmp2Result3 = markAsDismissed(16718);
  analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.GIFTING_PROMOTION_COACHMARK).analyticsLocations;
  const items3 = [analyticsLocations, markAsDismissed];
  let tmp18Result3 = null;
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
      const items4 = [tmp22, , , ];
      let tmp18Result = null != str;
      if (tmp18Result) {
        const obj5 = { style: tmp.countdownBadge, children: null };
        const obj6 = { variant: "text-xs/bold", color: "text-overlay-light", style: tmp.countdownBadgeText, children: str.toUpperCase() };
        obj5.children = closure_11(markAsDismissed(4825).Text, obj6);
        tmp18Result = closure_11(tmp21, obj5);
      }
      items4[1] = tmp18Result;
      const obj7 = { style: tmp.textContainer, children: null };
      const obj8 = { style: tmp.text, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: coachmarkComponent.header };
      const items5 = [closure_11(markAsDismissed(4825).Heading, obj8), ];
      const obj9 = { style: tmp.text, variant: "text-md/normal", color: "text-default", children: coachmarkComponent.body };
      items5[1] = closure_11(markAsDismissed(4825).Text, obj9);
      obj7.children = items5;
      items4[2] = closure_12(tmp21, obj7);
      const obj10 = { grow: true, icon: null, text: null, onPress: null };
      const obj11 = { size: "sm", color: tmp10(576).colors.WHITE };
      obj10.icon = closure_11(markAsDismissed(10485).GiftIcon, obj11);
      const intl = markAsDismissed(1115).intl;
      obj10.text = intl.string(markAsDismissed(1115).t.Ve9Ge6);
      obj10.onPress = tmp16;
      items4[3] = closure_11(markAsDismissed(5274).Button, obj10);
      obj4.children = items4;
      obj3.children = closure_12(tmp21, obj4);
      tmp18Result3 = closure_11(tmp19, obj3);
    } else {
      if (tmp2Result4.isAndroid()) {
        if (!stateFromStores) {
          const obj12 = { style: null, children: null };
          const items6 = [, ];
          ({ imageShared: arr5[0], imageWrapperAndroid: arr5[1] } = tmp);
          obj12.style = items6;
          const obj13 = { url: themeAndReducedMotionAwareAssetUrl, style: tmp.imageShared, autoplay: true };
          obj12.children = closure_11(markAsDismissed(8263).APNGPlayer, obj13);
          let tmp18Result4 = closure_11(tmp21, obj12);
        }
      }
      const obj14 = { source: null, style: null };
      const obj15 = { uri: themeAndReducedMotionAwareAssetUrl };
      obj14.source = obj15;
      obj14.style = tmp.imageShared;
      tmp18Result4 = closure_11(tmp10(5894), obj14);
      tmp2Result4 = markAsDismissed(1364);
    }
  }
  return tmp18Result3;
};