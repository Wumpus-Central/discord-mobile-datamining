// === Module 13783: PremiumGroupEducationActionSheet ===

// Module 13783 (PremiumGroupEducationActionSheet)
import _mod17 from "module_17" /* 17 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef3280 from "module_3280" /* 3280 */;
import PremiumGroupConstants from "PremiumGroupConstants" /* 4783 */;
import Text_Text from "Text/Text" /* 5088 */;
import CircleErrorIcon from "CircleErrorIcon" /* 6289 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6839 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const HELP_CENTER_LINK = PremiumGroupConstants.HELP_CENTER_LINK;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { container: { marginTop: 32, marginHorizontal: 30 }, aboutContainer: { flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", borderRadius: nativeDefault.radii.lg, marginBottom: 12 }, warningIcon: { margin: 16 }, aboutTextContainer: { justifyContent: "center", flex: 1, marginRight: 30 }, helpdeskText: { textAlign: "center", marginBottom: 24 } };
let closure_7 = createStyles.createStyles(obj);
let obj2 = { flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", borderRadius: nativeDefault.radii.lg, marginBottom: 12 };
const result = size.fileFinishedImporting("modules/premium/premium_group/native/PremiumGroupEducationActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumGroupEducationActionSheet(aboutText) {
  const cResult = c.c(18);
  aboutText = aboutText.aboutText;
  const tmp4 = closure_7();
  if (cResult[0] !== tmp4.warningIcon) {
    const obj2 = { size: "lg", style: tmp4.warningIcon };
    const tmp7 = hasOwnProperty(CircleErrorIcon.CircleErrorIcon, obj2);
    cResult[0] = tmp4.warningIcon;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== aboutText) {
    const obj3 = { variant: "text-sm/medium", color: "text-overlay-light", children: aboutText };
    const tmp10 = hasOwnProperty(Text_Text.Text, obj3);
    cResult[2] = aboutText;
    cResult[3] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === tmp4.aboutTextContainer) {
    if (cResult[5] === tmp8) {
      let tmp11 = cResult[6];
    }
    if (cResult[7] === tmp4.aboutContainer) {
      if (cResult[8] === tmp5) {
        if (cResult[9] === tmp11) {
          let tmp13 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const obj4 = { helpCenterLink: HELP_CENTER_LINK };
          const formatResult = intl.format(_modDef3280.ah1Ecm, obj4);
          cResult[11] = formatResult;
          let tmp18 = formatResult;
        } else {
          tmp18 = cResult[11];
        }
        if (cResult[12] !== tmp4.helpdeskText) {
          const obj5 = { variant: "text-sm/medium", color: "text-overlay-light", style: tmp4.helpdeskText, children: tmp18 };
          const tmp24 = hasOwnProperty(Text_Text.Text, obj5);
          cResult[12] = tmp4.helpdeskText;
          cResult[13] = tmp24;
          let tmp22 = tmp24;
        } else {
          tmp22 = cResult[13];
        }
        if (cResult[14] === tmp4.container) {
          if (cResult[15] === tmp13) {
            if (cResult[16] === tmp22) {
              let tmp25 = cResult[17];
            }
            return tmp25;
          }
        }
        const obj6 = { children: null };
        const obj7 = { style: tmp4.container, children: null };
        const items = [tmp13, tmp22];
        obj7.children = items;
        obj6.children = timestampProducer(View, obj7);
        const tmp29 = hasOwnProperty(Sheet_BottomSheet.BottomSheet, obj6);
        cResult[14] = tmp4.container;
        cResult[15] = tmp13;
        cResult[16] = tmp22;
        cResult[17] = tmp29;
        tmp25 = tmp29;
      }
    }
    const obj8 = { style: tmp4.aboutContainer, children: null };
    const items1 = [tmp5, tmp11];
    obj8.children = items1;
    const tmp16 = timestampProducer(View, obj8);
    cResult[7] = tmp4.aboutContainer;
    cResult[8] = tmp5;
    cResult[9] = tmp11;
    cResult[10] = tmp16;
    tmp13 = tmp16;
  }
  const tmp12 = hasOwnProperty(View, { style: tmp4.aboutTextContainer, children: tmp8 });
  cResult[4] = tmp4.aboutTextContainer;
  cResult[5] = tmp8;
  cResult[6] = tmp12;
  tmp11 = tmp12;
  const obj9 = { style: tmp4.aboutTextContainer, children: tmp8 };
}) : (function PremiumGroupEducationActionSheet(children) {
  const tmp = closure_7();
  const obj = { children: null };
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.aboutContainer, children: null };
  const items = [hasOwnProperty(CircleErrorIcon.CircleErrorIcon, { size: "lg", style: tmp.warningIcon }), hasOwnProperty(View, { style: tmp.aboutTextContainer, children: hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-overlay-light", children: children.aboutText }) })];
  obj3.children = items;
  const items1 = [timestampProducer(View, obj3), ];
  const obj6 = { variant: "text-sm/medium", color: "text-overlay-light", style: tmp.helpdeskText, children: null };
  const intl = util.intl;
  obj6.children = intl.format(_modDef3280.ah1Ecm, { helpCenterLink: HELP_CENTER_LINK });
  items1[1] = hasOwnProperty(Text_Text.Text, obj6);
  obj2.children = items1;
  obj.children = timestampProducer(View, obj2);
  return hasOwnProperty(Sheet_BottomSheet.BottomSheet, obj);
});