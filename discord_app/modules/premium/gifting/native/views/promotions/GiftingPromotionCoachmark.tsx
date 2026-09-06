// discord_app/modules/premium/gifting/native/views/promotions/GiftingPromotionCoachmark.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import useAnalyticsLocationsDefault from "../../../../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../../../../app_analytics/AnalyticsLocation.tsx";
import usePreviousDefault from "../../../../../../hooks/usePrevious.tsx";
import utils_openGiftModal from "../../../../native/utils/openGiftModal.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../../a11y/AccessibilityStore.tsx";
import PromotionsStore from "../../../../promotions/PromotionsStore.tsx";

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticsSections: closure_7, AnalyticsObjects: closure_8, AnalyticsPages: closure_9 } = Constants);
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
fn(4560);
let createStyles = {
  container: null,
  textContainer: null,
  text: null,
  countdownBadge: null,
  countdownBadgeText: null,
  imageShared: null,
  imageWrapperAndroid: null,
};
createStyles = { alignItems: "center", padding: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.textContainer = {
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_24,
};
createStyles.text = { textAlign: "center" };
let obj1 = {
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_24,
};
createStyles.countdownBadge = {
  flexDirection: "row",
  alignSelf: "center",
  borderRadius: nativeDefault.radii.round,
  paddingHorizontal: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_24,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
};
let PlatformUtils = fn(1115);
PlatformUtils = PlatformUtils.isAndroid();
const space = nativeDefault.space;
let obj3 = { lineHeight: PlatformUtils ? space.PX_12 : space.PX_16, paddingVertical: null };
PlatformUtils = fn(1115);
let PX_4;
if (PlatformUtils.isAndroid()) {
  PX_4 = nativeDefault.space.PX_4;
}
obj3.paddingVertical = PX_4;
createStyles.countdownBadgeText = obj3;
let size = { height: 188, width: 335, borderRadius: nativeDefault.radii.sm };
createStyles.imageShared = size;
createStyles.imageWrapperAndroid = { overflow: "hidden" };
let closure_13 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/premium/gifting/native/views/promotions/GiftingPromotionCoachmark.tsx",
);

export default function GiftingPromotionCoachmarkActionSheet(arg0) {
  ({ coachmarkComponent, markAsDismissed } = arg0);
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  closure_4 = undefined;
  let analyticsLocations;
  const tmp = closure_13();
  let obj = markAsDismissed(504);
  const items = [analyticsLocations];
  const stateFromStores = obj.useStateFromStores(items, () => analyticsLocations.useReducedMotion);
  let obj1 = markAsDismissed(10753);
  let asset;
  if (coachmarkComponent != null) {
    asset = coachmarkComponent.asset;
  }
  const themeAndReducedMotionAwareAssetUrl = obj1.useThemeAndReducedMotionAwareAssetUrl(asset);
  let tmp2Result = tmp2(504);
  const items1 = [PromotionsStore];
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => giftPromotion.getGiftPromotion());
  tmp2Result = tmp2(16928);
  let endDate;
  if (stateFromStores1 != null) {
    endDate = stateFromStores1.endDate;
  }
  const str = tmp2Result.useTickingFormattedLimitedOfferTimeLeft(endDate);
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
  analyticsLocations = useAnalyticsLocationsDefault(
    AnalyticsLocationDefault.GIFTING_PROMOTION_COACHMARK,
  ).analyticsLocations;
  const items3 = [analyticsLocations, markAsDismissed];
  let tmp18Result = null;
  if (null != coachmarkComponent) {
    obj = {
      startExpanded: true,
      onDismiss() {
        return markAsDismissed(ContentDismissActionType.USER_DISMISS);
      },
      children: null,
    };
    obj = { style: tmp.container, children: null };
    if (null == themeAndReducedMotionAwareAssetUrl) {
      const items4 = [tmp22, , ,];
      tmp18Result = null != str;
      if (tmp18Result) {
        obj1 = { style: tmp.countdownBadge, children: null };
        let obj2 = {
          variant: "text-xs/bold",
          color: "text-overlay-light",
          style: tmp.countdownBadgeText,
          children: str.toUpperCase(),
        };
        obj1.children = tmp18(tmp2(4556).Text, obj2);
        tmp18Result = tmp18(tmp21, obj1);
      }
      items4[1] = tmp18Result;
      const obj3 = { style: tmp.textContainer, children: null };
      const obj4 = {
        style: tmp.text,
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: coachmarkComponent.header,
      };
      const items5 = [tmp18(tmp2(4556).Text, obj4)];
      const obj5 = {
        style: tmp.text,
        variant: "text-md/normal",
        color: "text-default",
        children: coachmarkComponent.body,
      };
      items5[1] = tmp18(tmp2(4556).Text, obj5);
      obj3.children = items5;
      items4[2] = tmp20(tmp21, obj3);
      const obj6 = { grow: true, icon: null, text: null, onPress: null };
      const obj7 = { size: "sm", color: tmp10(576).colors.WHITE };
      obj6.icon = tmp18(tmp2(11030).GiftIcon, obj7);
      const intl = tmp2(1114).intl;
      obj6.text = intl.string(tmp2(1114).t.Ve9Ge6);
      obj6.onPress = tmp16;
      items4[3] = tmp18(tmp2(4975).Button, obj6);
      obj.children = items4;
      obj.children = tmp20(tmp21, obj);
      tmp18Result = tmp18(tmp19, obj);
    } else {
      if (tmp2Result1.isAndroid()) {
        if (!stateFromStores) {
          const obj8 = { style: null, children: null };
          const items6 = [,];
          ({ imageShared: arr5[0], imageWrapperAndroid: arr5[1] } = tmp);
          obj8.style = items6;
          const obj9 = { url: themeAndReducedMotionAwareAssetUrl, style: tmp.imageShared, autoplay: true };
          obj8.children = tmp18(tmp2(8808).APNGPlayer, obj9);
          let tmp18Result1 = tmp18(tmp21, obj8);
        }
      }
      const obj10 = { source: null, style: null };
      const obj11 = { uri: themeAndReducedMotionAwareAssetUrl };
      obj10.source = obj11;
      obj10.style = tmp.imageShared;
      tmp18Result1 = tmp18(tmp10(5587), obj10);
      tmp2Result1 = tmp2(1115);
    }
  }
  return tmp18Result;
}
