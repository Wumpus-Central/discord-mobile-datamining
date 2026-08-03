import Button from "Button";
import { View } from "preload";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import ME from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "set";
import createCacheKey from "createCacheKey";

let c10;
let closure_6;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
({ AnalyticsSections: closure_6, AnalyticsObjects: error, AnalyticsPages: metroImportAll } = ME);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { container: null, textContainer: null, text: null, imageShared: null, imageWrapperAndroid: null };
createCacheKey = { alignItems: "center", padding: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { gap: require("Themes").space.PX_8, paddingHorizontal: require("Themes").space.PX_16, paddingVertical: require("Themes").space.PX_24 };
createCacheKey[2] = { textAlign: "center" };
let obj1 = { gap: require("Themes").space.PX_8, paddingHorizontal: require("Themes").space.PX_16, paddingVertical: require("Themes").space.PX_24 };
createCacheKey[3] = { height: 188, width: 335, borderRadius: require("Themes").radii.sm };
createCacheKey[4] = { overflow: "hidden" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { height: 188, width: 335, borderRadius: require("Themes").radii.sm };
const result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingPromotionCoachmark.tsx");

export default function GiftingPromotionCoachmarkActionSheet(arg0) {
  let coachmarkComponent;
  let markAsDismissed;
  ({ coachmarkComponent, markAsDismissed } = arg0);
  let analyticsLocations;
  const tmp = createCacheKey();
  let obj = markAsDismissed(589);
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj1 = markAsDismissed(9722);
  let asset;
  if (coachmarkComponent != null) {
    asset = coachmarkComponent.asset;
  }
  const themeAndReducedMotionAwareAssetUrl = obj1.useThemeAndReducedMotionAwareAssetUrl(asset);
  let tmp7 = analyticsLocations;
  analyticsLocations = analyticsLocations(5519)(analyticsLocations(5539).GIFTING_PROMOTION_COACHMARK).analyticsLocations;
  const items1 = [analyticsLocations, markAsDismissed];
  let tmp11Result = null;
  if (null != coachmarkComponent) {
    obj = { startExpanded: true, onDismiss: null, children: null };
    obj[1] = function onDismiss() {
      return markAsDismissed(outer1_9.USER_DISMISS);
    };
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    if (null == themeAndReducedMotionAwareAssetUrl) {
      const items2 = [tmp15, , ];
      obj1 = { style: null, children: null };
      obj1[0] = tmp.textContainer;
      const obj2 = { style: null, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
      obj2[0] = tmp.text;
      obj2[3] = coachmarkComponent.header;
      const items3 = [tmp11(tmp2(4189).Text, obj2), ];
      const obj3 = { style: null, variant: "text-md/normal", color: "text-default", children: null };
      obj3[0] = tmp.text;
      obj3[3] = coachmarkComponent.body;
      items3[1] = tmp11(tmp2(4189).Text, obj3);
      obj1[1] = items3;
      items2[1] = tmp13(tmp14, obj1);
      const obj4 = { grow: true, text: null, onPress: null };
      const intl = tmp2(1236).intl;
      obj4[1] = intl.string(tmp2(1236).t.RzWDqY);
      obj4[2] = tmp9;
      items2[2] = tmp11(tmp2(4604).Button, obj4);
      obj[1] = items2;
      obj[2] = tmp13(tmp14, obj);
      tmp11Result = tmp11(tmp12, obj);
    } else {
      if (tmp2Result.isAndroid()) {
        if (!stateFromStores) {
          const obj5 = { style: null, children: null };
          const items4 = [, ];
          ({ imageShared: arr3[0], imageWrapperAndroid: arr3[1] } = tmp);
          obj5[0] = items4;
          const obj6 = { url: null, style: null };
          obj6[0] = themeAndReducedMotionAwareAssetUrl;
          obj6[1] = tmp.imageShared;
          obj5[1] = tmp11(tmp7(6211), obj6);
          tmp11Result = tmp11(tmp14, obj5);
        }
      }
      tmp7 = tmp7(5145);
      const obj7 = { source: null, style: null };
      const obj8 = { uri: null };
      obj8[0] = themeAndReducedMotionAwareAssetUrl;
      obj7[0] = obj8;
      obj7[1] = tmp.imageShared;
      tmp11Result = tmp11(tmp7, obj7);
      tmp2Result = tmp2(500);
    }
  }
  return tmp11Result;
};