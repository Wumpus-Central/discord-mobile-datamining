// discord_app/modules/premium/gifting/native/views/promotions/GiftingPromotionCoachmark.tsx
import ThemesDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import contextDefault from "../../../../../app_analytics/useAnalyticsLocations.tsx";
import QUICK_SWITCHERDefault from "../../../../../app_analytics/AnalyticsLocation.tsx";
import usePreviousDefault from "../../../../../../hooks/usePrevious.tsx";
import closure_3 from "../../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../../../a11y/AccessibilityStore.tsx";
import closure_6 from "../../../../promotions/PromotionsStore.tsx";
import ME from "../../../../../../Constants.tsx";
import { ContentDismissActionType } from "../../../../../dismissible_content/DismissibleContentConstants.tsx";
import jsxProd from "../../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../../design/components/Styles/native/createStyles.tsx";
import set from "../../../../../../utils/PlatformUtils.tsx";

const require = arg1;
({ AnalyticsSections: error, AnalyticsObjects: closure_8, AnalyticsPages: c9 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = {
  container: null,
  textContainer: null,
  text: null,
  countdownBadge: null,
  countdownBadgeText: null,
  imageShared: null,
  imageWrapperAndroid: null,
};
createCacheKey = { alignItems: "center", padding: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = {
  gap: ThemesDefault.space.PX_8,
  paddingHorizontal: ThemesDefault.space.PX_16,
  paddingVertical: ThemesDefault.space.PX_24,
};
createCacheKey[2] = { textAlign: "center" };
let obj1 = {
  gap: ThemesDefault.space.PX_8,
  paddingHorizontal: ThemesDefault.space.PX_16,
  paddingVertical: ThemesDefault.space.PX_24,
};
createCacheKey[3] = {
  flexDirection: "row",
  alignSelf: "center",
  borderRadius: ThemesDefault.radii.round,
  paddingHorizontal: ThemesDefault.space.PX_8,
  marginTop: ThemesDefault.space.PX_24,
  backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND,
};
set = set.isAndroid();
const space = ThemesDefault.space;
let obj3 = { lineHeight: set ? space.PX_12 : space.PX_16, paddingVertical: null };
let PX_4;
if (set.isAndroid()) {
  PX_4 = ThemesDefault.space.PX_4;
}
obj3[1] = PX_4;
createCacheKey[4] = obj3;
let obj2 = {
  flexDirection: "row",
  alignSelf: "center",
  borderRadius: ThemesDefault.radii.round,
  paddingHorizontal: ThemesDefault.space.PX_8,
  marginTop: ThemesDefault.space.PX_24,
  backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND,
};
createCacheKey[5] = { height: 188, width: 335, borderRadius: ThemesDefault.radii.sm };
createCacheKey[6] = { overflow: "hidden" };
let closure_13 = createCacheKey.createStyles(createCacheKey);
const result = set.fileFinishedImporting(
  "modules/premium/gifting/native/views/promotions/GiftingPromotionCoachmark.tsx",
);

export default function GiftingPromotionCoachmarkActionSheet(arg0) {
  ({ coachmarkComponent, markAsDismissed } = arg0);
  importDefault = undefined;
  dependencyMap = undefined;
  let React;
  closure_4 = undefined;
  let analyticsLocations;
  const tmp = callback();
  let obj = markAsDismissed(504);
  const items = [analyticsLocations];
  const stateFromStores = obj.useStateFromStores(items, () => analyticsLocations.useReducedMotion);
  obj1 = markAsDismissed(10753);
  let asset;
  if (coachmarkComponent != null) {
    asset = coachmarkComponent.asset;
  }
  const themeAndReducedMotionAwareAssetUrl = obj1.useThemeAndReducedMotionAwareAssetUrl(asset);
  let tmp2Result = tmp2(504);
  const items1 = [closure_6];
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
  React = tmp12;
  const tmp13 = usePreviousDefault(null != str);
  closure_4 = tmp13;
  const items2 = [tmp13, null != str, null != stateFromStores1, tmp11, markAsDismissed];
  const effect = React.useEffect(() => {
    if (dependencyMap) {
      if (!callback) {
        callback(4527).hideActionSheet();
        const obj = callback(4527);
      }
    }
    let tmp5 = closure_4;
    if (closure_4) {
      tmp5 = !closure_3;
    }
    if (tmp5) {
      callback(4527).hideActionSheet();
      markAsDismissed(closure_1_10.AUTO_DISMISS);
      const obj2 = callback(4527);
    }
  }, items2);
  analyticsLocations = contextDefault(QUICK_SWITCHERDefault.GIFTING_PROMOTION_COACHMARK).analyticsLocations;
  const items3 = [analyticsLocations, markAsDismissed];
  let tmp18Result = null;
  if (null != coachmarkComponent) {
    obj = { startExpanded: true, onDismiss: null, children: null };
    obj[1] = function onDismiss() {
      return markAsDismissed(closure_1_10.USER_DISMISS);
    };
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    if (null == themeAndReducedMotionAwareAssetUrl) {
      const items4 = [tmp22, , ,];
      tmp18Result = null != str;
      if (tmp18Result) {
        obj1 = { style: null, children: null };
        obj1[0] = tmp.countdownBadge;
        let obj2 = { variant: "text-xs/bold", color: "text-overlay-light", style: null, children: null };
        obj2[2] = tmp.countdownBadgeText;
        obj2[3] = str.toUpperCase();
        obj1[1] = tmp18(tmp2(4556).Text, obj2);
        tmp18Result = tmp18(tmp21, obj1);
      }
      items4[1] = tmp18Result;
      const obj3 = { style: null, children: null };
      obj3[0] = tmp.textContainer;
      const obj4 = {
        style: null,
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      obj4[0] = tmp.text;
      obj4[3] = coachmarkComponent.header;
      const items5 = [tmp18(tmp2(4556).Text, obj4)];
      const obj5 = { style: null, variant: "text-md/normal", color: "text-default", children: null };
      obj5[0] = tmp.text;
      obj5[3] = coachmarkComponent.body;
      items5[1] = tmp18(tmp2(4556).Text, obj5);
      obj3[1] = items5;
      items4[2] = tmp20(tmp21, obj3);
      const obj6 = { grow: true, icon: null, text: null, onPress: null };
      const obj7 = { size: "sm", color: null };
      obj7[1] = tmp10(576).colors.WHITE;
      obj6[1] = tmp18(tmp2(11030).GiftIcon, obj7);
      const intl = tmp2(1114).intl;
      obj6[2] = intl.string(tmp2(1114).t.Ve9Ge6);
      obj6[3] = tmp16;
      items4[3] = tmp18(tmp2(4975).Button, obj6);
      obj[1] = items4;
      obj[2] = tmp20(tmp21, obj);
      tmp18Result = tmp18(tmp19, obj);
    } else {
      if (tmp2Result1.isAndroid()) {
        if (!stateFromStores) {
          const obj8 = { style: null, children: null };
          const items6 = [,];
          ({ imageShared: arr5[0], imageWrapperAndroid: arr5[1] } = tmp);
          obj8[0] = items6;
          const obj9 = { url: null, style: null, autoplay: true };
          obj9[0] = themeAndReducedMotionAwareAssetUrl;
          obj9[1] = tmp.imageShared;
          obj8[1] = tmp18(tmp2(8808).APNGPlayer, obj9);
          let tmp18Result1 = tmp18(tmp21, obj8);
        }
      }
      const obj10 = { source: null, style: null };
      const obj11 = { uri: null };
      obj11[0] = themeAndReducedMotionAwareAssetUrl;
      obj10[0] = obj11;
      obj10[1] = tmp.imageShared;
      tmp18Result1 = tmp18(tmp10(5587), obj10);
      tmp2Result1 = tmp2(1115);
    }
  }
  return tmp18Result;
}
