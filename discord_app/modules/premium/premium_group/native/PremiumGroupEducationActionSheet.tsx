// === Module 13608: PremiumGroupEducationActionSheet ===

// Module 13608 (PremiumGroupEducationActionSheet)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef3075 from "module_3075" /* 3075 */;
import PremiumGroupConstants from "PremiumGroupConstants" /* 4311 */;
import Text_Text from "Text/Text" /* 4635 */;
import CircleErrorIcon from "CircleErrorIcon" /* 6715 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7257 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4639 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const HELP_CENTER_LINK = PremiumGroupConstants.HELP_CENTER_LINK;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { container: { marginTop: 32, marginHorizontal: 30 }, aboutContainer: { flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", borderRadius: nativeDefault.radii.lg, marginBottom: 12 }, warningIcon: { margin: 16 }, aboutTextContainer: { justifyContent: "center", flex: 1, marginRight: 30 }, helpdeskText: { textAlign: "center", marginBottom: 24 } };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/premium_group/native/PremiumGroupEducationActionSheet.tsx");

export default function PremiumGroupEducationActionSheet(children) {
  const tmp = closure_7();
  const obj = { children: null };
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.aboutContainer, children: null };
  const items = [hasOwnProperty(CircleErrorIcon.CircleErrorIcon, { size: "lg", style: tmp.warningIcon }), hasOwnProperty(View, { style: tmp.aboutTextContainer, children: hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-overlay-light", children: children.aboutText }) })];
  obj3.children = items;
  const items1 = [timestampProducer(View, obj3), ];
  const obj6 = { variant: "text-sm/medium", color: "text-overlay-light", style: tmp.helpdeskText, children: null };
  const intl = util.intl;
  obj6.children = intl.format(_modDef3075.ah1Ecm, { helpCenterLink: HELP_CENTER_LINK });
  items1[1] = hasOwnProperty(Text_Text.Text, obj6);
  obj2.children = items1;
  obj.children = timestampProducer(View, obj2);
  return hasOwnProperty(Sheet_BottomSheet.BottomSheet, obj);
};