// === Module 13516: PremiumGroupEducationActionSheet ===

// Module 13516 (PremiumGroupEducationActionSheet)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import _modDef3063 from "module_3063" /* 3063 */;
import PremiumGroupConstants from "PremiumGroupConstants" /* 4232 */;
import Text_Text from "Text/Text" /* 4556 */;
import CircleErrorIcon from "CircleErrorIcon" /* 6610 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7150 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const HELP_CENTER_LINK = PremiumGroupConstants.HELP_CENTER_LINK;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { container: { marginTop: 32, marginHorizontal: 30 }, aboutContainer: null, warningIcon: null, aboutTextContainer: null, helpdeskText: null };
obj = { flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", borderRadius: nativeDefault.radii.lg, marginBottom: 12 };
obj.aboutContainer = obj;
obj.warningIcon = { margin: 16 };
obj.aboutTextContainer = { justifyContent: "center", flex: 1, marginRight: 30 };
obj.helpdeskText = { textAlign: "center", marginBottom: 24 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/premium_group/native/PremiumGroupEducationActionSheet.tsx");

export default function PremiumGroupEducationActionSheet(children) {
  const tmp = closure_7();
  let obj = { children: null };
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.aboutContainer, children: null };
  const items = [hasOwnProperty(CircleErrorIcon.CircleErrorIcon, { size: "lg", style: tmp.warningIcon }), hasOwnProperty(View, { style: tmp.aboutTextContainer, children: hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-overlay-light", children: children.aboutText }) })];
  obj.children = items;
  const items1 = [timestampProducer(View, obj), ];
  const obj3 = { variant: "text-sm/medium", color: "text-overlay-light", style: tmp.helpdeskText, children: null };
  const intl = util.intl;
  obj3.children = intl.format(_modDef3063.ah1Ecm, { helpCenterLink: HELP_CENTER_LINK });
  items1[1] = hasOwnProperty(Text_Text.Text, obj3);
  obj.children = items1;
  obj.children = timestampProducer(View, obj);
  return hasOwnProperty(Sheet_BottomSheet.BottomSheet, obj);
};