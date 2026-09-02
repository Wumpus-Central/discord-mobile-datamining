// discord_app/modules/premium/promotions/native/BogoPromotionActionSheet.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { PremiumTypes } from "../../PremiumConstants.tsx";
import ME from "../../../../Constants.tsx";
import { ContentDismissActionType } from "../../../dismissible_content/DismissibleContentConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({
  AnalyticsSections: closure_6,
  AnalyticsObjects: error,
  AnalyticsPages: closure_8,
  AnalyticsObjectTypes: c9,
  HelpdeskArticles: c10,
} = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
createCacheKey = { container: null, buttonContainer: null, header: null, subheader: null, image: null };
createCacheKey = {
  dipslay: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: ThemesDefault.space.PX_16,
  borderRadius: ThemesDefault.radii.lg,
  marginBottom: ThemesDefault.space.PX_24,
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: ThemesDefault.space.PX_24, width: 335, height: 48 };
createCacheKey[2] = { marginBottom: 12, textAlign: "center" };
createCacheKey[3] = { textAlign: "center" };
let obj1 = { marginTop: ThemesDefault.space.PX_24, width: 335, height: 48 };
createCacheKey[4] = {
  alignSelf: "center",
  paddingBottom: ThemesDefault.space.PX_16,
  height: 213,
  width: 335,
  borderRadius: ThemesDefault.radii.lg,
  marginBottom: 12,
};
let closure_14 = createCacheKey.createStyles(createCacheKey);
let obj2 = {
  alignSelf: "center",
  paddingBottom: ThemesDefault.space.PX_16,
  height: 213,
  width: 335,
  borderRadius: ThemesDefault.radii.lg,
  marginBottom: 12,
};
const result = require("set").fileFinishedImporting("modules/premium/promotions/native/BogoPromotionActionSheet.tsx");

export default function BogoPromotionActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  let analyticsLocations;
  const tmp = callback3();
  analyticsLocations = analyticsLocations(5961)().analyticsLocations;
  const items = [analyticsLocations, markAsDismissed];
  const items1 = [markAsDismissed];
  const callback = React.useCallback(() => {
    markAsDismissed(closure_1_11.PRIMARY);
    obj = { analyticsLocation: obj, analyticsLocations, premiumType: closure_1_5.TIER_2 };
    obj = {
      page: closure_1_8.BOGO_PROMOTION_ACTION_SHEET,
      section: closure_1_6.FOOTER,
      object: closure_1_7.BUTTON_CTA,
      objectType: closure_1_9.BUY,
    };
    analyticsLocations(closure_1_2[9])(obj);
  }, items);
  const callback1 = React.useCallback(() => {
    markAsDismissed(closure_1_11.USER_DISMISS);
  }, items1);
  let obj = { onDismiss: callback1, children: null };
  obj = { style: items2, children: null };
  items2 = [tmp.container];
  obj = {
    source: {
      uri: "https://cdn.discordapp.com/assets/content/a59aed2e0e61a955dc3e0f4f6f7ab295e39f89a93c4f01e4bd84ed7fb418ec63.png",
    },
    style: tmp.image,
  };
  const items3 = [callback(analyticsLocations(5501), obj), , ,];
  obj1 = { style: items4, color: "mobile-text-heading-primary", variant: "heading-xl/bold", children: null };
  items4 = [tmp.header];
  const intl = markAsDismissed(1233).intl;
  obj1[3] = intl.string(markAsDismissed(1233).t["6Jjfk8"]);
  items3[1] = callback(markAsDismissed(4474).Text, obj1);
  const obj2 = { style: items5, color: "text-subtle", variant: "text-md/medium", children: null };
  items5 = [tmp.subheader];
  const intl2 = markAsDismissed(1233).intl;
  const obj3 = { helpCenterLink: analyticsLocations(1994).getArticleURL(SUMMER_BOGO_2025.SUMMER_BOGO_2025) };
  obj2[3] = intl2.format(markAsDismissed(1233).t.y7lJK6, obj3);
  items3[2] = callback(markAsDismissed(4474).Text, obj2);
  const obj4 = { style: items6, children: null };
  items6 = [tmp.buttonContainer];
  const obj5 = { text: null, onPress: null };
  const obj7 = analyticsLocations(1994);
  const intl3 = markAsDismissed(1233).intl;
  obj5[0] = intl3.string(markAsDismissed(1233).t.J61px0);
  obj5[1] = callback;
  obj4[1] = callback(analyticsLocations(8984), obj5);
  items3[3] = callback(View, obj4);
  obj[1] = items3;
  obj[1] = callback2(View, obj);
  return callback(markAsDismissed(5630).BottomSheet, obj);
}
