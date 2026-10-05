// === Module 17108: GiftingPromotionCoachmark ===

// Module 17108 (GiftingPromotionCoachmark)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6657 */;
import usePreviousDefault from "usePrevious" /* 7946 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10392 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import PromotionsStore from "PromotionsStore" /* 10396 */;

const AnalyticsLocationDefault = tmp19(6681);
require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ AnalyticsSections: closure_7, AnalyticsObjects: closure_8, AnalyticsPages: closure_9 } = Constants);
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4890);
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
const ReactCompilerGating = fn(558);
let obj5 = { alignSelf: "center", marginTop: nativeDefault.space.PX_24 };
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingPromotionCoachmark.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = markAsDismissed(576).c(49);
  ({ coachmarkComponent, markAsDismissed } = arg0);
  closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [analyticsLocations];
    const fn = function x() {
      return analyticsLocations.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = markAsDismissed(576);
  const stateFromStores = markAsDismissed(504).useStateFromStores(tmp5, tmp6);
  const tmpResult = markAsDismissed(504);
  let asset;
  if (coachmarkComponent != null) {
    asset = coachmarkComponent.asset;
  }
  const themeAndReducedMotionAwareAssetUrl = markAsDismissed(10485).useThemeAndReducedMotionAwareAssetUrl(asset);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { location: "GiftingPromotionCoachmarkActionSheet" };
    cResult[2] = obj2;
    let tmp11 = obj2;
  } else {
    tmp11 = cResult[2];
  }
  const GiftPromotionReminderExperiment = markAsDismissed(10469).GiftPromotionReminderExperiment;
  const enabled = GiftPromotionReminderExperiment.useConfig(tmp11).enabled;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PromotionsStore];
    class M {
      constructor() {
        return closure_1_6.getGiftPromotion();
      }
    }
    cResult[3] = items1;
    cResult[4] = M;
    let tmp13 = M;
    let tmp12 = items1;
  } else {
    tmp12 = cResult[3];
    tmp13 = cResult[4];
  }
  const tmpResult4 = markAsDismissed(10485);
  const stateFromStores1 = markAsDismissed(504).useStateFromStores(tmp12, tmp13);
  const tmpResult5 = markAsDismissed(504);
  let endDate;
  if (stateFromStores1 != null) {
    endDate = stateFromStores1.endDate;
  }
  const tickingFormattedLimitedOfferTimeLeft = markAsDismissed(10486).useTickingFormattedLimitedOfferTimeLeft(endDate);
  importDefault = tmp18;
  const tmp20 = usePreviousDefault(null != stateFromStores1);
  dependencyMap = tmp20;
  noop = tmp21;
  const tmp22 = usePreviousDefault(null != tickingFormattedLimitedOfferTimeLeft);
  closure_4 = tmp22;
  if (cResult[5] === tmp20) {
    if (cResult[6] === tmp22) {
      if (cResult[7] === tmp18) {
        if (cResult[8] === tmp21) {
          if (cResult[9] === markAsDismissed) {
            let tmp23 = cResult[10];
            let tmp24 = cResult[11];
          }
          const effect = noop.useEffect(tmp23, tmp24);
          class M {
            constructor() {
              return closure_1_6.getGiftPromotion();
            }
          }
          analyticsLocations = tmp27(AnalyticsLocationDefault.GIFTING_PROMOTION_COACHMARK).analyticsLocations;
          if (cResult[12] === analyticsLocations) {
            if (null == coachmarkComponent) {
              return null;
            } else {
              if (cResult[15] !== markAsDismissed) {
                class H {
                  constructor() {
                    return markAsDismissed(ContentDismissActionType.USER_DISMISS);
                  }
                }
                cResult[15] = markAsDismissed;
                class M {
                  constructor() {
                    return closure_1_6.getGiftPromotion();
                  }
                }
                cResult[16] = H;
              } else {
                class H {
                  constructor() {
                    return markAsDismissed(ContentDismissActionType.USER_DISMISS);
                  }
                }
              }
              if (cResult[17] === themeAndReducedMotionAwareAssetUrl) {
                class H {
                  constructor() {
                    return markAsDismissed(ContentDismissActionType.USER_DISMISS);
                  }
                }
              }
              class M {
                constructor() {
                  return closure_1_6.getGiftPromotion();
                }
              }
            }
          }
          class D {
            constructor() {
              obj = closure_1(closure_2[16]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
              obj2 = closure_0(closure_2[19]);
              obj1 = { analyticsLocation: null, analyticsLocations };
              obj5 = { page: AnalyticsPages.PREMUIM_UPSELL_GIFTING_PROMOTION, section: AnalyticsSections.FOOTER, object: AnalyticsObjects.BUTTON_CTA };
              obj1.analyticsLocation = obj5;
              openGiftModalResult = obj2.openGiftModal(obj1);
              return;
            }
          }
          cResult[12] = analyticsLocations;
          cResult[13] = markAsDismissed;
          cResult[14] = D;
        }
      }
    }
  }
  class E {
    constructor() {
      if (closure_2) {
        tmp = closure_1;
        if (!closure_1) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[16]);
          hideActionSheetResult = obj.hideActionSheet();
        }
        return;
      }
      tmp5 = closure_4;
      if (closure_4) {
        tmp6 = closure_3;
        tmp5 = !closure_3;
      }
      if (tmp5) {
        tmp7 = closure_1;
        tmp8 = closure_2;
        obj2 = closure_1(closure_2[16]);
        hideActionSheetResult1 = obj2.hideActionSheet();
        tmp10 = markAsDismissed;
        tmp11 = ContentDismissActionType;
        tmp12 = markAsDismissed(ContentDismissActionType.AUTO_DISMISS);
      }
      return;
    }
  }
  const items2 = [tmp22, null != tickingFormattedLimitedOfferTimeLeft, null != stateFromStores1, tmp20, markAsDismissed];
  cResult[5] = tmp20;
  cResult[6] = tmp22;
  cResult[7] = null != stateFromStores1;
  cResult[8] = null != tickingFormattedLimitedOfferTimeLeft;
  cResult[9] = markAsDismissed;
  cResult[10] = E;
  cResult[11] = items2;
  tmp24 = items2;
  tmp23 = E;
  const tmpResult6 = markAsDismissed(10486);
}) : ((arg0) => {
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
  const themeAndReducedMotionAwareAssetUrl = markAsDismissed(10485).useThemeAndReducedMotionAwareAssetUrl(asset);
  const GiftPromotionReminderExperiment = markAsDismissed(10469).GiftPromotionReminderExperiment;
  let enabled = GiftPromotionReminderExperiment.useConfig({ location: "GiftingPromotionCoachmarkActionSheet" }).enabled;
  let obj2 = markAsDismissed(10485);
  const items1 = [PromotionsStore];
  const stateFromStores1 = markAsDismissed(504).useStateFromStores(items1, () => giftPromotion.getGiftPromotion());
  const tmp2Result = markAsDismissed(504);
  let endDate;
  if (stateFromStores1 != null) {
    endDate = stateFromStores1.endDate;
  }
  const tickingFormattedLimitedOfferTimeLeft = markAsDismissed(10486).useTickingFormattedLimitedOfferTimeLeft(endDate);
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
  const tmp2Result3 = markAsDismissed(10486);
  analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.GIFTING_PROMOTION_COACHMARK).analyticsLocations;
  const items3 = [analyticsLocations, markAsDismissed];
  let tmp19Result = null;
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
      if (enabled) {
        enabled = null != tickingFormattedLimitedOfferTimeLeft;
      }
      if (enabled) {
        const obj5 = { text: tickingFormattedLimitedOfferTimeLeft, style: tmp.countdownBadge };
        enabled = closure_11(tmp11(10487), obj5);
      }
      items4[1] = enabled;
      const obj6 = { style: tmp.textContainer, children: null };
      const obj7 = { style: tmp.text, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: coachmarkComponent.header };
      const items5 = [closure_11(markAsDismissed(4886).Heading, obj7), ];
      const obj8 = { style: tmp.text, variant: "text-md/normal", color: "text-default", children: coachmarkComponent.body };
      items5[1] = closure_11(markAsDismissed(4886).Text, obj8);
      obj6.children = items5;
      items4[2] = closure_12(tmp22, obj6);
      const obj9 = { grow: true, icon: null, text: null, onPress: null };
      const obj10 = { size: "sm", color: tmp11(587).colors.WHITE };
      obj9.icon = closure_11(markAsDismissed(10766).GiftIcon, obj10);
      const intl = markAsDismissed(1126).intl;
      obj9.text = intl.string(markAsDismissed(1126).t.Ve9Ge6);
      obj9.onPress = tmp17;
      items4[3] = closure_11(markAsDismissed(5594).Button, obj9);
      obj4.children = items4;
      obj3.children = closure_12(tmp22, obj4);
      tmp19Result = closure_11(tmp20, obj3);
    } else {
      if (tmp2Result4.isAndroid()) {
        if (!stateFromStores) {
          const obj11 = { style: null, children: null };
          const items6 = [, ];
          ({ imageShared: arr5[0], imageWrapperAndroid: arr5[1] } = tmp);
          obj11.style = items6;
          const obj12 = { url: themeAndReducedMotionAwareAssetUrl, style: tmp.imageShared, autoplay: true };
          obj11.children = closure_11(markAsDismissed(8464).APNGPlayer, obj12);
          let tmp19Result2 = closure_11(tmp22, obj11);
        }
      }
      const obj13 = { source: null, style: null };
      const obj14 = { uri: themeAndReducedMotionAwareAssetUrl };
      obj13.source = obj14;
      obj13.style = tmp.imageShared;
      tmp19Result2 = closure_11(tmp11(5974), obj13);
      tmp2Result4 = markAsDismissed(1369);
    }
  }
  return tmp19Result;
});