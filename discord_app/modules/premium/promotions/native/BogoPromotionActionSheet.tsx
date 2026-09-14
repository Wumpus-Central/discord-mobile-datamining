// === Module 17045: BogoPromotionActionSheet ===

// Module 17045 (BogoPromotionActionSheet)
import nativeDefault from "native" /* 576 */;
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 7525 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const PremiumTypes = fn(1373).PremiumTypes;
const Constants = fn(1074);
({ AnalyticsSections: metroRequire, AnalyticsObjects: closure_7, AnalyticsPages: closure_8, AnalyticsObjectTypes: closure_9, HelpdeskArticles: c10 } = Constants);
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4636);
let obj2 = { container: { dipslay: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.lg, marginBottom: nativeDefault.space.PX_24 }, buttonContainer: null, header: null, subheader: null, image: null };
let size = { marginTop: nativeDefault.space.PX_24, width: 335, height: 48 };
obj2.buttonContainer = size;
obj2.header = { marginBottom: 12, textAlign: "center" };
obj2.subheader = { textAlign: "center" };
const size1 = { alignSelf: "center", paddingBottom: nativeDefault.space.PX_16, height: 213, width: 335, borderRadius: nativeDefault.radii.lg, marginBottom: 12 };
obj2.image = size1;
let closure_14 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/promotions/native/BogoPromotionActionSheet.tsx");

export default function BogoPromotionActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  let analyticsLocations;
  const tmp = closure_14();
  analyticsLocations = analyticsLocations(7265)().analyticsLocations;
  const items = [analyticsLocations, markAsDismissed];
  const items1 = [markAsDismissed];
  const callback = noop.useCallback(() => {
    markAsDismissed(ContentDismissActionType.PRIMARY);
    const obj = { analyticsLocation: { page: constants3.BOGO_PROMOTION_ACTION_SHEET, section: constants.FOOTER, object: constants2.BUTTON_CTA, objectType: constants4.BUY }, analyticsLocations, premiumType: PremiumTypes.TIER_2 };
    openPremiumPlanSelectionActionSheetDefault(obj);
  }, items);
  const callback1 = noop.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items1);
  let obj = { onDismiss: callback1, children: null };
  const obj2 = { style: null, children: null };
  const items2 = [tmp.container];
  obj2.style = items2;
  const items3 = [closure_12(analyticsLocations(5668), { source: { uri: "https://cdn.discordapp.com/assets/content/a59aed2e0e61a955dc3e0f4f6f7ab295e39f89a93c4f01e4bd84ed7fb418ec63.png" }, style: tmp.image }), , , ];
  const obj4 = { style: null, color: "mobile-text-heading-primary", variant: "heading-xl/bold", children: null };
  const items4 = [tmp.header];
  obj4.style = items4;
  const intl = markAsDismissed(1114).intl;
  obj4.children = intl.string(markAsDismissed(1114).t["6Jjfk8"]);
  items3[1] = closure_12(markAsDismissed(4632).Text, obj4);
  const obj5 = { style: null, color: "text-subtle", variant: "text-md/medium", children: null };
  const items5 = [tmp.subheader];
  obj5.style = items5;
  const intl2 = markAsDismissed(1114).intl;
  const obj6 = { helpCenterLink: analyticsLocations(2024).getArticleURL(SUMMER_BOGO_2025.SUMMER_BOGO_2025) };
  obj5.children = intl2.format(markAsDismissed(1114).t.y7lJK6, obj6);
  items3[2] = closure_12(markAsDismissed(4632).Text, obj5);
  const obj8 = { style: null, children: null };
  const items6 = [tmp.buttonContainer];
  obj8.style = items6;
  const obj9 = { text: null, onPress: null };
  const obj3 = { source: { uri: "https://cdn.discordapp.com/assets/content/a59aed2e0e61a955dc3e0f4f6f7ab295e39f89a93c4f01e4bd84ed7fb418ec63.png" }, style: tmp.image };
  const obj7 = analyticsLocations(2024);
  const intl3 = markAsDismissed(1114).intl;
  obj9.text = intl3.string(markAsDismissed(1114).t.J61px0);
  obj9.onPress = callback;
  obj8.children = closure_12(analyticsLocations(10099), obj9);
  items3[3] = closure_12(View, obj8);
  obj2.children = items3;
  obj.children = closure_13(View, obj2);
  return closure_12(markAsDismissed(7253).BottomSheet, obj);
};