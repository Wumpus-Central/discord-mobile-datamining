// === Module 17108: GiftingPromotionCoachmark ===

// Module 17108 (GiftingPromotionCoachmark)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6657 */;
import usePreviousDefault from "usePrevious" /* 7946 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10392 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import PromotionsStore from "PromotionsStore" /* 10396 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, dependencyMap, importDefault;

let c9;
let closure_12;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let size;
let tmp21;
let unpackModuleId;
const AnalyticsLocationDefault = tmp21(6681);
let react = react_mod;
const View = react_native.View;
({ AnalyticsSections: metroImportDefault, AnalyticsObjects: metroImportAll, AnalyticsPages: c9 } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, textContainer: obj3, text: { textAlign: "center" }, countdownBadge: obj4, imageShared: size, imageWrapperAndroid: { overflow: "hidden" } };
obj2 = { alignItems: "center", padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
obj4 = { alignSelf: "center", marginTop: nativeDefault.space.PX_24 };
size = { height: 188, width: 335, borderRadius: nativeDefault.radii.sm };
let closure_13 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let analyticsLocations;
  let closure_1;
  let closure_2;
  let closure_3;
  let coachmarkComponent;
  let giftPromotion;
  let markAsDismissed;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp5;
  let tmp6;
  let obj = markAsDismissed(576);
  const cResult = obj.c(49);
  ({ coachmarkComponent, markAsDismissed } = arg0);
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [analyticsLocations];
    const fn = function x() {
      return analyticsLocations.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = fn;
    tmp5 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = markAsDismissed(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  let asset;
  const useThemeAndReducedMotionAwareAssetUrl = markAsDismissed(10485).useThemeAndReducedMotionAwareAssetUrl;
  markAsDismissed(10485);
  if (coachmarkComponent != null) {
    asset = coachmarkComponent.asset;
  }
  const themeAndReducedMotionAwareAssetUrl = useThemeAndReducedMotionAwareAssetUrl(asset);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { location: "GiftingPromotionCoachmarkActionSheet" };
    cResult[2] = obj2;
    tmp12 = obj2;
  } else {
    tmp12 = cResult[2];
  }
  const GiftPromotionReminderExperiment = markAsDismissed(10469).GiftPromotionReminderExperiment;
  const enabled = GiftPromotionReminderExperiment.useConfig(tmp12).enabled;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PromotionsStore];
    class M {
      constructor() {
        return giftPromotion.getGiftPromotion();
      }
    }
    cResult[3] = items1;
    cResult[4] = M;
    tmp14 = M;
    tmp13 = items1;
  } else {
    tmp13 = cResult[3];
    tmp14 = cResult[4];
  }
  const tmpResult5 = markAsDismissed(504);
  const stateFromStores1 = tmpResult5.useStateFromStores(tmp13, tmp14);
  let endDate;
  const useTickingFormattedLimitedOfferTimeLeft = markAsDismissed(10486).useTickingFormattedLimitedOfferTimeLeft;
  markAsDismissed(10486);
  if (stateFromStores1 != null) {
    endDate = stateFromStores1.endDate;
  }
  const tickingFormattedLimitedOfferTimeLeft = useTickingFormattedLimitedOfferTimeLeft(endDate);
  importDefault = tmp20;
  const tmp22 = usePreviousDefault(null != stateFromStores1);
  dependencyMap = tmp22;
  react = tmp23;
  const tmp24 = usePreviousDefault(null != tickingFormattedLimitedOfferTimeLeft);
  let closure_4 = tmp24;
  if (cResult[5] === tmp22) {
    if (cResult[6] === tmp24) {
      if (cResult[7] === null != stateFromStores1) {
        if (cResult[8] === null != tickingFormattedLimitedOfferTimeLeft) {
          let tmp25;
          let tmp26;
          if (cResult[9] === markAsDismissed) {
            tmp25 = cResult[10];
            tmp26 = cResult[11];
          }
          const effect = react.useEffect(tmp25, tmp26);
          class M {
            constructor() {
              return giftPromotion.getGiftPromotion();
            }
          }
          analyticsLocations = tmp29(AnalyticsLocationDefault.GIFTING_PROMOTION_COACHMARK).analyticsLocations;
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
                    return giftPromotion.getGiftPromotion();
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
                  return giftPromotion.getGiftPromotion();
                }
              }
              cResult[17] = themeAndReducedMotionAwareAssetUrl;
              class D {
                constructor() {
                  let obj4;
                  const obj = ActionSheetActionCreatorsDefault;
                  obj.hideActionSheet();
                  markAsDismissed(ContentDismissActionType.TAKE_ACTION);
                  const obj3 = { analyticsLocation: obj4, analyticsLocations };
                  obj4 = { page: constants.PREMUIM_UPSELL_GIFTING_PROMOTION, section: metroImportDefault.FOOTER, object: metroImportAll.BUTTON_CTA };
                  const obj2 = utils_openGiftModal;
                  obj2.openGiftModal(obj3);
                }
              }
              cResult[19] = tmp4.imageWrapperAndroid;
              cResult[20] = stateFromStores;
              cResult[21] = null != themeAndReducedMotionAwareAssetUrl;
            }
          }
          class D {
            constructor() {
              let obj4;
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
              markAsDismissed(ContentDismissActionType.TAKE_ACTION);
              const obj3 = { analyticsLocation: obj4, analyticsLocations };
              obj4 = { page: constants.PREMUIM_UPSELL_GIFTING_PROMOTION, section: metroImportDefault.FOOTER, object: metroImportAll.BUTTON_CTA };
              const obj2 = utils_openGiftModal;
              obj2.openGiftModal(obj3);
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
        if (!closure_1) {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
        }
      }
      const tmp6 = closure_4 && !closure_3;
      if (tmp6) {
        const obj2 = ActionSheetActionCreatorsDefault;
        obj2.hideActionSheet();
        markAsDismissed(ContentDismissActionType.AUTO_DISMISS);
      }
    }
  }
  const items2 = [tmp24, null != tickingFormattedLimitedOfferTimeLeft, null != stateFromStores1, tmp22, markAsDismissed];
  cResult[5] = tmp22;
  cResult[6] = tmp24;
  cResult[7] = null != stateFromStores1;
  cResult[8] = null != tickingFormattedLimitedOfferTimeLeft;
  cResult[9] = markAsDismissed;
  cResult[10] = E;
  cResult[11] = items2;
  tmp26 = items2;
  tmp25 = E;
}) : ((arg0) => {
  let GiftIcon;
  let closure_1;
  let closure_2;
  let closure_3;
  let coachmarkComponent;
  let giftPromotion;
  let intl;
  let items4;
  let items5;
  let items6;
  let markAsDismissed;
  let obj13;
  let obj3;
  let obj5;
  let obj7;
  ({ coachmarkComponent, markAsDismissed } = arg0);
  importDefault = undefined;
  dependencyMap = undefined;
  react = undefined;
  let closure_4;
  let analyticsLocations;
  const tmp = closure_13();
  let obj = markAsDismissed(504);
  const items = [analyticsLocations];
  const stateFromStores = obj.useStateFromStores(items, () => analyticsLocations.useReducedMotion);
  let asset;
  const useThemeAndReducedMotionAwareAssetUrl = markAsDismissed(10485).useThemeAndReducedMotionAwareAssetUrl;
  markAsDismissed(10485);
  if (coachmarkComponent != null) {
    asset = coachmarkComponent.asset;
  }
  const themeAndReducedMotionAwareAssetUrl = useThemeAndReducedMotionAwareAssetUrl(asset);
  const GiftPromotionReminderExperiment = markAsDismissed(10469).GiftPromotionReminderExperiment;
  let enabled = GiftPromotionReminderExperiment.useConfig({ location: "GiftingPromotionCoachmarkActionSheet" }).enabled;
  const items1 = [PromotionsStore];
  const tmp2Result = markAsDismissed(504);
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => giftPromotion.getGiftPromotion());
  let endDate;
  const useTickingFormattedLimitedOfferTimeLeft = markAsDismissed(10486).useTickingFormattedLimitedOfferTimeLeft;
  markAsDismissed(10486);
  if (stateFromStores1 != null) {
    endDate = stateFromStores1.endDate;
  }
  const tickingFormattedLimitedOfferTimeLeft = useTickingFormattedLimitedOfferTimeLeft(endDate);
  importDefault = tmp12;
  const tmp14 = usePreviousDefault(null != stateFromStores1);
  dependencyMap = tmp14;
  react = tmp15;
  const tmp16 = usePreviousDefault(null != tickingFormattedLimitedOfferTimeLeft);
  closure_4 = tmp16;
  const items2 = [tmp16, null != tickingFormattedLimitedOfferTimeLeft, null != stateFromStores1, tmp14, markAsDismissed];
  const effect = react.useEffect(() => {
    if (closure_2) {
      if (!closure_1) {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
      }
    }
    const tmp6 = closure_4 && !closure_3;
    if (tmp6) {
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
      markAsDismissed(ContentDismissActionType.AUTO_DISMISS);
    }
  }, items2);
  const tmp18 = useAnalyticsLocationsDefault;
  analyticsLocations = tmp18(AnalyticsLocationDefault.GIFTING_PROMOTION_COACHMARK).analyticsLocations;
  const items3 = [analyticsLocations, markAsDismissed];
  let tmp21Result2 = null;
  if (null != coachmarkComponent) {
    let obj2 = {
      startExpanded: true,
      onDismiss() {
          return markAsDismissed(ContentDismissActionType.USER_DISMISS);
        },
      children: closure_12(closure_4, obj3)
    };
    obj3 = { style: tmp.container, children: items5 };
    let tmp24 = null != themeAndReducedMotionAwareAssetUrl;
    BottomSheet = markAsDismissed(6645).BottomSheet;
    if (tmp24) {
      const tmp2Result4 = markAsDismissed(1369);
      if (tmp2Result4.isAndroid()) {
        let tmp21Result;
        if (!stateFromStores) {
          let obj4 = { style: items4, children: closure_11(markAsDismissed(8464).APNGPlayer, obj5) };
          items4 = [, ];
          ({ imageShared: arr5[0], imageWrapperAndroid: arr5[1] } = tmp);
          obj5 = { url: themeAndReducedMotionAwareAssetUrl, style: tmp.imageShared, autoplay: true };
          tmp21Result = closure_11(tmp23, obj4);
        }
        tmp24 = tmp21Result;
      }
      const obj6 = { source: obj7, style: tmp.imageShared };
      obj7 = { uri: themeAndReducedMotionAwareAssetUrl };
      tmp21Result = closure_11(tmp13(5974), obj6);
    }
    items5 = [tmp24, , , ];
    if (enabled) {
      enabled = null != tickingFormattedLimitedOfferTimeLeft;
    }
    if (enabled) {
      const obj8 = { text: tickingFormattedLimitedOfferTimeLeft, style: tmp.countdownBadge };
      enabled = closure_11(tmp13(10487), obj8);
    }
    items5[1] = enabled;
    const obj10 = { style: tmp.text, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: coachmarkComponent.header };
    const obj9 = { style: tmp.textContainer, children: items6 };
    items6 = [closure_11(markAsDismissed(4886).Heading, obj10), ];
    const obj11 = { style: tmp.text, variant: "text-md/normal", color: "text-default", children: coachmarkComponent.body };
    items6[1] = closure_11(markAsDismissed(4886).Text, obj11);
    items5[2] = closure_12(closure_4, obj9);
    const obj12 = { grow: true, icon: closure_11(GiftIcon, obj13), text: intl.string(markAsDismissed(1126).t.Ve9Ge6), onPress: tmp19 };
    const Button = markAsDismissed(5594).Button;
    obj13 = { size: "sm", color: nativeDefault.colors.WHITE };
    GiftIcon = markAsDismissed(10766).GiftIcon;
    intl = markAsDismissed(1126).intl;
    items5[3] = closure_11(Button, obj12);
    tmp21Result2 = closure_11(BottomSheet, obj2);
  }
  return tmp21Result2;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingPromotionCoachmark.tsx");

export default tmp5;