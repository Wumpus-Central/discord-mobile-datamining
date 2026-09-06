// discord_app/modules/premium/promotions/native/BogoPromotionActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import openPremiumPlanSelectionActionSheetDefault from "../../native/openPremiumPlanSelectionActionSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const PremiumTypes = fn(1373).PremiumTypes;
const Constants = fn(1074);
({
  AnalyticsSections: metroRequire,
  AnalyticsObjects: closure_7,
  AnalyticsPages: closure_8,
  AnalyticsObjectTypes: closure_9,
  HelpdeskArticles: c10,
} = Constants);
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
fn(4560);
let createStyles = { container: null, buttonContainer: null, header: null, subheader: null, image: null };
createStyles = {
  dipslay: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.radii.lg,
  marginBottom: nativeDefault.space.PX_24,
};
createStyles.container = createStyles;
let size = { marginTop: nativeDefault.space.PX_24, width: 335, height: 48 };
createStyles.buttonContainer = size;
createStyles.header = { marginBottom: 12, textAlign: "center" };
createStyles.subheader = { textAlign: "center" };
const size1 = {
  alignSelf: "center",
  paddingBottom: nativeDefault.space.PX_16,
  height: 213,
  width: 335,
  borderRadius: nativeDefault.radii.lg,
  marginBottom: 12,
};
createStyles.image = size1;
let closure_14 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/promotions/native/BogoPromotionActionSheet.tsx");

export default function BogoPromotionActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  let analyticsLocations;
  const tmp = closure_14();
  analyticsLocations = analyticsLocations(7162)().analyticsLocations;
  const items = [analyticsLocations, markAsDismissed];
  const items1 = [markAsDismissed];
  const callback = noop.useCallback(() => {
    markAsDismissed(ContentDismissActionType.PRIMARY);
    let obj = { analyticsLocation: null, analyticsLocations, premiumType: PremiumTypes.TIER_2 };
    obj = {
      page: constants3.BOGO_PROMOTION_ACTION_SHEET,
      section: constants.FOOTER,
      object: constants2.BUTTON_CTA,
      objectType: constants4.BUY,
    };
    obj.analyticsLocation = obj;
    openPremiumPlanSelectionActionSheetDefault(obj);
  }, items);
  const callback1 = noop.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items1);
  let obj = { onDismiss: callback1, children: null };
  obj = { style: null, children: null };
  const items2 = [tmp.container];
  obj.style = items2;
  obj = {
    source: {
      uri: "https://cdn.discordapp.com/assets/content/a59aed2e0e61a955dc3e0f4f6f7ab295e39f89a93c4f01e4bd84ed7fb418ec63.png",
    },
    style: tmp.image,
  };
  const items3 = [closure_12(analyticsLocations(5587), obj), , ,];
  const obj1 = { style: null, color: "mobile-text-heading-primary", variant: "heading-xl/bold", children: null };
  const items4 = [tmp.header];
  obj1.style = items4;
  const intl = markAsDismissed(1114).intl;
  obj1.children = intl.string(markAsDismissed(1114).t["6Jjfk8"]);
  items3[1] = closure_12(markAsDismissed(4556).Text, obj1);
  const obj2 = { style: null, color: "text-subtle", variant: "text-md/medium", children: null };
  const items5 = [tmp.subheader];
  obj2.style = items5;
  const intl2 = markAsDismissed(1114).intl;
  const obj3 = { helpCenterLink: analyticsLocations(2024).getArticleURL(SUMMER_BOGO_2025.SUMMER_BOGO_2025) };
  obj2.children = intl2.format(markAsDismissed(1114).t.y7lJK6, obj3);
  items3[2] = closure_12(markAsDismissed(4556).Text, obj2);
  const obj4 = { style: null, children: null };
  const items6 = [tmp.buttonContainer];
  obj4.style = items6;
  const obj5 = { text: null, onPress: null };
  const obj7 = analyticsLocations(2024);
  const intl3 = markAsDismissed(1114).intl;
  obj5.text = intl3.string(markAsDismissed(1114).t.J61px0);
  obj5.onPress = callback;
  obj4.children = closure_12(analyticsLocations(9970), obj5);
  items3[3] = closure_12(View, obj4);
  obj.children = items3;
  obj.children = closure_13(View, obj);
  return closure_12(markAsDismissed(7150).BottomSheet, obj);
}
