// discord_app/modules/premium/gifting/native/views/promotions/GiftingPromotionCoachmark.tsx
import useAPNGPlayerControls from "useAPNGPlayerControls";
import { View } from "Background";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import createEmptyPromotionsByType from "createEmptyPromotionsByType";
import ME from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "Text";
import createCacheKey from "createCacheKey";
import { usePrevious } from "../../../../../../hooks/usePrevious.tsx";
import { QUICK_SWITCHER } from "../../../../../app_analytics/AnalyticsLocation.tsx";
import { context } from "../../../../../app_analytics/useAnalyticsLocations.tsx";

let c9;
let closure_12;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
({ AnalyticsSections: error, AnalyticsObjects: metroImportAll, AnalyticsPages: c9 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { container: null, textContainer: null, text: null, countdownBadge: null, imageShared: null, imageWrapperAndroid: null };
createCacheKey = { alignItems: "center", padding: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { gap: require("Themes").space.PX_8, paddingHorizontal: require("Themes").space.PX_16, paddingVertical: require("Themes").space.PX_24 };
createCacheKey[2] = { textAlign: "center" };
let obj1 = { gap: require("Themes").space.PX_8, paddingHorizontal: require("Themes").space.PX_16, paddingVertical: require("Themes").space.PX_24 };
createCacheKey[3] = { flexDirection: "row", alignSelf: "center", borderRadius: require("Themes").radii.round, paddingHorizontal: require("Themes").space.PX_8, marginTop: require("Themes").space.PX_24, backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
let obj2 = { flexDirection: "row", alignSelf: "center", borderRadius: require("Themes").radii.round, paddingHorizontal: require("Themes").space.PX_8, marginTop: require("Themes").space.PX_24, backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
createCacheKey[4] = { height: 188, width: 335, borderRadius: require("Themes").radii.sm };
createCacheKey[5] = { overflow: "hidden" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { height: 188, width: 335, borderRadius: require("Themes").radii.sm };
const result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingPromotionCoachmark.tsx");

export default function GiftingPromotionCoachmarkActionSheet(arg0) {
  let coachmarkComponent;
  let markAsDismissed;
  ({ coachmarkComponent, markAsDismissed } = arg0);
  let importDefault;
  let dependencyMap;
  let React;
  let c4;
  let analyticsLocations;
  const tmp = createCacheKey();
  let obj = markAsDismissed(589);
  const items = [analyticsLocations];
  const stateFromStores = obj.useStateFromStores(items, () => analyticsLocations.useReducedMotion);
  let obj1 = markAsDismissed(9976);
  let asset;
  if (coachmarkComponent != null) {
    asset = coachmarkComponent.asset;
  }
  const themeAndReducedMotionAwareAssetUrl = obj1.useThemeAndReducedMotionAwareAssetUrl(asset);
  let tmp2Result = tmp2(589);
  const items1 = [createEmptyPromotionsByType];
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => giftPromotion.getGiftPromotion());
  tmp2Result = tmp2(15918);
  let endDate;
  if (stateFromStores1 != null) {
    endDate = stateFromStores1.endDate;
  }
  const str = tmp2Result.useTickingFormattedLimitedOfferTimeLeft(endDate);
  importDefault = tmp9;
  let tmp10 = importDefault;
  const tmp11 = usePrevious(null != stateFromStores1);
  dependencyMap = tmp11;
  React = tmp12;
  const tmp13 = usePrevious(null != str);
  c4 = tmp13;
  const items2 = [tmp13, null != str, null != stateFromStores1, tmp11, markAsDismissed];
  const effect = React.useEffect(() => {
    if (_undefined2) {
      if (!_undefined) {
        _undefined(_undefined2[13]).hideActionSheet();
        const obj = _undefined(_undefined2[13]);
      }
    }
    let tmp5 = c4;
    if (c4) {
      tmp5 = !c3;
    }
    if (tmp5) {
      _undefined(_undefined2[13]).hideActionSheet();
      markAsDismissed(outer1_10.AUTO_DISMISS);
      const obj2 = _undefined(_undefined2[13]);
    }
  }, items2);
  analyticsLocations = context(QUICK_SWITCHER.GIFTING_PROMOTION_COACHMARK).analyticsLocations;
  const items3 = [analyticsLocations, markAsDismissed];
  let tmp18Result = null;
  if (null != coachmarkComponent) {
    obj = { startExpanded: true, onDismiss: null, children: null };
    obj[1] = function onDismiss() {
      return markAsDismissed(outer1_10.USER_DISMISS);
    };
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    if (null == themeAndReducedMotionAwareAssetUrl) {
      const items4 = [tmp22, , , ];
      tmp18Result = null != str;
      if (tmp18Result) {
        obj1 = { style: null, children: null };
        obj1[0] = tmp.countdownBadge;
        let obj2 = { variant: "text-xs/bold", color: "text-overlay-light", children: null };
        obj2[2] = str.toUpperCase();
        obj1[1] = tmp18(tmp2(4298).Text, obj2);
        tmp18Result = tmp18(tmp21, obj1);
      }
      items4[1] = tmp18Result;
      const obj3 = { style: null, children: null };
      obj3[0] = tmp.textContainer;
      const obj4 = { style: null, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
      obj4[0] = tmp.text;
      obj4[3] = coachmarkComponent.header;
      const items5 = [tmp18(tmp2(4298).Text, obj4), ];
      const obj5 = { style: null, variant: "text-md/normal", color: "text-default", children: null };
      obj5[0] = tmp.text;
      obj5[3] = coachmarkComponent.body;
      items5[1] = tmp18(tmp2(4298).Text, obj5);
      obj3[1] = items5;
      items4[2] = tmp20(tmp21, obj3);
      const obj6 = { grow: true, text: null, onPress: null };
      const intl = tmp2(1236).intl;
      obj6[1] = intl.string(tmp2(1236).t.RzWDqY);
      obj6[2] = tmp16;
      items4[3] = tmp18(tmp2(4712).Button, obj6);
      obj[1] = items4;
      obj[2] = tmp20(tmp21, obj);
      tmp18Result = tmp18(tmp19, obj);
    } else {
      if (tmp2Result1.isAndroid()) {
        if (!stateFromStores) {
          const obj7 = { style: null, children: null };
          const items6 = [, ];
          ({ imageShared: arr5[0], imageWrapperAndroid: arr5[1] } = tmp);
          obj7[0] = items6;
          const obj8 = { url: null, style: null, autoplay: true };
          obj8[0] = themeAndReducedMotionAwareAssetUrl;
          obj8[1] = tmp.imageShared;
          obj7[1] = tmp18(tmp2(9321).APNGPlayer, obj8);
          let tmp18Result1 = tmp18(tmp21, obj7);
        }
      }
      tmp10 = tmp10(5267);
      const obj9 = { source: null, style: null };
      const obj10 = { uri: null };
      obj10[0] = themeAndReducedMotionAwareAssetUrl;
      obj9[0] = obj10;
      obj9[1] = tmp.imageShared;
      tmp18Result1 = tmp18(tmp10, obj9);
      tmp2Result1 = tmp2(500);
    }
  }
  return tmp18Result;
};