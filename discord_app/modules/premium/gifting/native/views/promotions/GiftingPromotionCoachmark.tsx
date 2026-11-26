// === Module 19277: GiftingPromotionCoachmark ===

// Module 19277 (GiftingPromotionCoachmark)
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6379 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6380 */;
import usePreviousDefault from "usePrevious" /* 6831 */;
import utils_openGiftModal from "utils/openGiftModal" /* 11113 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5044 */;
import PromotionsStore from "PromotionsStore" /* 9162 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1071);
({ AnalyticsSections: metroImportDefault, AnalyticsObjects: closure_8, AnalyticsPages: closure_9 } = Constants);
const ContentDismissActionType = fn(4889).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5043);
let obj2 = { container: { alignItems: "center", padding: nativeDefault.space.PX_16 }, textContainer: null, text: null, countdownBadge: null, imageShared: null };
let obj3 = { alignItems: "center", padding: nativeDefault.space.PX_16 };
obj2.textContainer = { gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
obj2.text = { textAlign: "center" };
let obj4 = { gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
obj2.countdownBadge = { alignSelf: "center", marginTop: nativeDefault.space.PX_24 };
let size = { height: 188, width: 335, borderRadius: nativeDefault.radii.sm };
obj2.imageShared = size;
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
  items = [analyticsLocations];
  const stateFromStores = markAsDismissed(504).useStateFromStores(items, () => analyticsLocations.useReducedMotion);
  let obj = markAsDismissed(504);
  let asset;
  if (coachmarkComponent != null) {
    asset = coachmarkComponent.asset;
  }
  const themeAndReducedMotionAwareAssetUrl = markAsDismissed(11162).useThemeAndReducedMotionAwareAssetUrl(asset);
  const GiftPromotionReminderExperiment = markAsDismissed(11151).GiftPromotionReminderExperiment;
  let enabled = GiftPromotionReminderExperiment.useConfig({ location: "GiftingPromotionCoachmarkActionSheet" }).enabled;
  let obj2 = markAsDismissed(11162);
  const items1 = [PromotionsStore];
  const stateFromStores1 = markAsDismissed(504).useStateFromStores(items1, () => giftPromotion.getGiftPromotion());
  const tmp2Result = markAsDismissed(504);
  let endDate;
  if (stateFromStores1 != null) {
    endDate = stateFromStores1.endDate;
  }
  const tickingFormattedLimitedOfferTimeLeft = markAsDismissed(11163).useTickingFormattedLimitedOfferTimeLeft(endDate);
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
  const tmp2Result2 = markAsDismissed(11163);
  analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.GIFTING_PROMOTION_COACHMARK).analyticsLocations;
  const items3 = [analyticsLocations, markAsDismissed];
  let tmp19Result2 = null;
  if (null != coachmarkComponent) {
    let obj3 = {
      startExpanded: true,
      onDismiss() {
          return markAsDismissed(ContentDismissActionType.USER_DISMISS);
        },
      children: null
    };
    const obj4 = { style: tmp.container, children: null };
    let tmp19Result = null != themeAndReducedMotionAwareAssetUrl;
    if (tmp19Result) {
      const obj5 = { source: null, style: null, enableAnimation: null };
      const obj6 = { uri: themeAndReducedMotionAwareAssetUrl };
      obj5.source = obj6;
      obj5.style = tmp.imageShared;
      obj5.enableAnimation = !stateFromStores;
      tmp19Result = closure_11(tmp11(5730), obj5);
    }
    const items4 = [tmp19Result, , , ];
    if (enabled) {
      enabled = null != tickingFormattedLimitedOfferTimeLeft;
    }
    if (enabled) {
      const obj7 = { text: tickingFormattedLimitedOfferTimeLeft, style: tmp.countdownBadge };
      enabled = closure_11(tmp11(11174), obj7);
    }
    items4[1] = enabled;
    const obj8 = { style: tmp.textContainer, children: null };
    const obj9 = { style: tmp.text, variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: coachmarkComponent.header };
    const items5 = [closure_11(markAsDismissed(5634).Heading, obj9), ];
    const obj10 = { style: tmp.text, variant: "body-md/normal", color: "text-default", children: coachmarkComponent.body };
    items5[1] = closure_11(markAsDismissed(5634).Text, obj10);
    obj8.children = items5;
    items4[2] = closure_12(closure_4, obj8);
    const obj11 = { grow: true, icon: null, text: null, onPress: null };
    const obj12 = { size: "sm", color: tmp11(575).colors.WHITE };
    obj11.icon = closure_11(markAsDismissed(11307).GiftIcon, obj12);
    const intl = markAsDismissed(1112).intl;
    obj11.text = intl.string(markAsDismissed(1112).t.Ve9Ge6);
    obj11.onPress = tmp17;
    items4[3] = closure_11(markAsDismissed(5641).Button, obj11);
    obj4.children = items4;
    obj3.children = closure_12(closure_4, obj4);
    tmp19Result2 = closure_11(markAsDismissed(5271).BottomSheet, obj3);
  }
  return tmp19Result2;
};