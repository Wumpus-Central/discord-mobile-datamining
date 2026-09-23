// === Module 13875: NitroCreditEducationActionSheet ===

// Module 13875 (NitroCreditEducationActionSheet)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2108 */;
import Text_Text from "Text/Text" /* 4823 */;
import CircleErrorIcon from "CircleErrorIcon" /* 6938 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7481 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4827 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { container: { marginTop: 32, marginHorizontal: 30 }, aboutContainer: { flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", borderRadius: nativeDefault.radii.lg, marginBottom: 12 }, warningIcon: { margin: 16 }, aboutTextContainer: { justifyContent: "center", flex: 1, marginRight: 30 }, helpdeskText: { textAlign: "center", marginBottom: 24 } };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/fractional/native/NitroCreditEducationActionSheet.tsx");

export default function NitroCreditEducationActionSheet(children) {
  const tmp = closure_7();
  const obj = { children: null };
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.aboutContainer, children: null };
  const items = [hasOwnProperty(CircleErrorIcon.CircleErrorIcon, { size: "lg", style: tmp.warningIcon }), hasOwnProperty(View, { style: tmp.aboutTextContainer, children: hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-overlay-light", children: children.aboutText }) })];
  obj3.children = items;
  const items1 = [timestampProducer(View, obj3), ];
  const obj6 = { variant: "text-sm/medium", color: "text-overlay-light", style: tmp.helpdeskText, children: null };
  const intl = util.intl;
  const obj7 = { helpCenterLink: null };
  const obj4 = { size: "lg", style: tmp.warningIcon };
  const obj5 = { style: tmp.aboutTextContainer, children: hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-overlay-light", children: children.aboutText }) };
  obj7.helpCenterLink = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.FRACTIONAL_PREMIUM_ABOUT);
  obj6.children = intl.format(util.t.bg3jBj, obj7);
  items1[1] = hasOwnProperty(Text_Text.Text, obj6);
  obj2.children = items1;
  obj.children = timestampProducer(View, obj2);
  return hasOwnProperty(Sheet_BottomSheet.BottomSheet, obj);
};