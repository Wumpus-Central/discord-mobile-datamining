// === Module 13321: PremiumGroupEducationActionSheet ===

// Module 13321 (PremiumGroupEducationActionSheet)
import react_native from "react-native" /* 17 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import _modDef3205 from "module_3205" /* 3205 */;
import PremiumGroupConstants from "PremiumGroupConstants" /* 4542 */;
import CircleErrorIcon from "CircleErrorIcon" /* 4800 */;
import Text_Text from "Text/Text" /* 4886 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6645 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, aboutText;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
const HELP_CENTER_LINK = PremiumGroupConstants.HELP_CENTER_LINK;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: { marginTop: 32, marginHorizontal: 30 }, aboutContainer: obj2, warningIcon: { margin: 16 }, aboutTextContainer: { justifyContent: "center", flex: 1, marginRight: 30 }, helpdeskText: { textAlign: "center", marginBottom: 24 } };
obj2 = { flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", borderRadius: nativeDefault.radii.lg, marginBottom: 12 };
let closure_7 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((aboutText) => {
  let items;
  let items1;
  let obj7;
  let tmp5;
  let tmp8;
  const obj = react;
  const cResult = obj.c(18);
  aboutText = aboutText.aboutText;
  const tmp4 = closure_7();
  const container = tmp4.container;
  if (cResult[0] !== tmp4.warningIcon) {
    const obj2 = { size: "lg", style: tmp4.warningIcon };
    const tmp7 = hasOwnProperty(CircleErrorIcon.CircleErrorIcon, obj2);
    cResult[0] = tmp4.warningIcon;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== aboutText) {
    const obj3 = { variant: "text-sm/medium", color: "text-overlay-light", children: aboutText };
    const tmp10 = hasOwnProperty(Text_Text.Text, obj3);
    cResult[2] = aboutText;
    cResult[3] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === tmp4.aboutTextContainer) {
    let tmp11;
    if (cResult[5] === tmp8) {
      tmp11 = cResult[6];
    }
    if (cResult[7] === tmp4.aboutContainer) {
      if (cResult[8] === tmp5) {
        let tmp13;
        let tmp18;
        let tmp22;
        if (cResult[9] === tmp11) {
          tmp13 = cResult[10];
        }
        const _Symbol = Symbol;
        const helpdeskText = tmp4.helpdeskText;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl2.intl;
          const obj4 = { helpCenterLink: HELP_CENTER_LINK };
          const formatResult = intl.format(_modDef3205.ah1Ecm, obj4);
          cResult[11] = formatResult;
          tmp18 = formatResult;
        } else {
          tmp18 = cResult[11];
        }
        if (cResult[12] !== tmp4.helpdeskText) {
          const obj5 = { variant: "text-sm/medium", color: "text-overlay-light", style: helpdeskText, children: tmp18 };
          const tmp24 = hasOwnProperty(Text_Text.Text, obj5);
          cResult[12] = tmp4.helpdeskText;
          cResult[13] = tmp24;
          tmp22 = tmp24;
        } else {
          tmp22 = cResult[13];
        }
        if (cResult[14] === tmp4.container) {
          if (cResult[15] === tmp13) {
            let tmp25;
            if (cResult[16] === tmp22) {
              tmp25 = cResult[17];
            }
            return tmp25;
          }
        }
        const obj6 = { children: metroRequire(View, obj7) };
        obj7 = { style: container, children: items };
        items = [tmp13, tmp22];
        BottomSheet = Sheet_BottomSheet.BottomSheet;
        const tmp29 = hasOwnProperty(BottomSheet, obj6);
        cResult[14] = tmp4.container;
        cResult[15] = tmp13;
        cResult[16] = tmp22;
        cResult[17] = tmp29;
        tmp25 = tmp29;
      }
    }
    const obj8 = { style: tmp4.aboutContainer, children: items1 };
    items1 = [tmp5, tmp11];
    const tmp16 = metroRequire(View, obj8);
    cResult[7] = tmp4.aboutContainer;
    cResult[8] = tmp5;
    cResult[9] = tmp11;
    cResult[10] = tmp16;
    tmp13 = tmp16;
  }
  const obj9 = { style: tmp4.aboutTextContainer, children: tmp8 };
  const tmp12 = hasOwnProperty(View, obj9);
  cResult[4] = tmp4.aboutTextContainer;
  cResult[5] = tmp8;
  cResult[6] = tmp12;
  tmp11 = tmp12;
}) : ((aboutText) => {
  let intl;
  let items;
  let items1;
  let obj2;
  let obj7;
  aboutText = aboutText.aboutText;
  const tmp = closure_7();
  const obj = { children: metroRequire(View, obj2) };
  obj2 = { style: tmp.container, children: items1 };
  const obj3 = { style: tmp.aboutContainer, children: items };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  items = [, ];
  const obj4 = { size: "lg", style: tmp.warningIcon };
  items[0] = hasOwnProperty(CircleErrorIcon.CircleErrorIcon, obj4);
  const obj5 = { style: tmp.aboutTextContainer, children: hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-overlay-light", children: aboutText }) };
  items[1] = hasOwnProperty(View, obj5);
  items1 = [metroRequire(View, obj3), ];
  const obj6 = { variant: "text-sm/medium", color: "text-overlay-light", style: tmp.helpdeskText, children: intl.format(_modDef3205.ah1Ecm, obj7) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  obj7 = { helpCenterLink: HELP_CENTER_LINK };
  items1[1] = hasOwnProperty(Text, obj6);
  return hasOwnProperty(BottomSheet, obj);
});
const result = size.fileFinishedImporting("modules/premium/premium_group/native/PremiumGroupEducationActionSheet.tsx");

export default tmp3;