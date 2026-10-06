// === Module 11515: ClassificationEvidence ===

// Module 11515 (ClassificationEvidence)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import ClassificationMessageEvidenceDefault from "ClassificationMessageEvidence" /* 11516 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import native_mod from "native" /* 1188 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let flaggedContent;

let closure_4;
let hasOwnProperty;
let native;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { cardShadow: native.generateBoxShadowStyle(native.FOUR_DP_ELEVATION_SHADOW_PARAMS), flaggedContent: obj2, sectionContainer: obj3 };
createStyles = createStyles.createStyles;
native = native_mod;
obj2 = { borderWidth: 1, borderRadius: nativeDefault.radii.sm, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, backgroundColor: nativeDefault.colors.CHANNELTEXTAREA_BACKGROUND, padding: 20 };
obj3 = { display: "flex", gap: nativeDefault.space.PX_8 };
let closure_6 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((flaggedContent) => {
  let intl;
  let items;
  const obj = react2;
  const cResult = obj.c(12);
  flaggedContent = flaggedContent.flaggedContent;
  const tmp4 = closure_6();
  let tmp5 = null;
  if (0 !== flaggedContent.length) {
    let first;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { variant: "eyebrow", color: "text-default", children: intl.string(intl2.t.s64CMg) };
      const Text = Text_Text.Text;
      intl = intl2.intl;
      const tmp8 = React3(Text, obj2);
      cResult[0] = tmp8;
      first = tmp8;
    } else {
      first = cResult[0];
    }
    if (cResult[1] === tmp4.cardShadow) {
      let tmp9;
      let tmp10;
      if (cResult[2] === tmp4.flaggedContent) {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== flaggedContent) {
        const obj3 = { flaggedContent };
        const tmp13 = React3(ClassificationMessageEvidenceDefault, obj3);
        cResult[4] = flaggedContent;
        cResult[5] = tmp13;
        tmp10 = tmp13;
      } else {
        tmp10 = cResult[5];
      }
      if (cResult[6] === tmp9) {
        let tmp14;
        if (cResult[7] === tmp10) {
          tmp14 = cResult[8];
        }
        if (cResult[9] === tmp4.sectionContainer) {
          let tmp18;
          if (cResult[10] === tmp14) {
            tmp18 = cResult[11];
          }
          tmp5 = tmp18;
        }
        const obj4 = { style: tmp4.sectionContainer, children: items };
        items = [first, tmp14];
        const tmp21 = hasOwnProperty(View, obj4);
        cResult[9] = tmp4.sectionContainer;
        cResult[10] = tmp14;
        cResult[11] = tmp21;
        tmp18 = tmp21;
      }
      const obj5 = { style: tmp9, children: tmp10 };
      const tmp17 = React3(View, obj5);
      cResult[6] = tmp9;
      cResult[7] = tmp10;
      cResult[8] = tmp17;
      tmp14 = tmp17;
    }
    const items1 = [, ];
    ({ flaggedContent: arr2[0], cardShadow: arr2[1] } = tmp4);
    cResult[1] = tmp4.cardShadow;
    cResult[2] = tmp4.flaggedContent;
    cResult[3] = items1;
    tmp9 = items1;
  }
  return tmp5;
}) : ((flaggedContent) => {
  let intl;
  let items;
  let items1;
  let obj4;
  flaggedContent = flaggedContent.flaggedContent;
  const tmp = closure_6();
  let tmp2 = null;
  if (0 !== flaggedContent.length) {
    const obj = { style: tmp.sectionContainer, children: items };
    const obj2 = { variant: "eyebrow", color: "text-default", children: intl.string(intl2.t.s64CMg) };
    const Text = Text_Text.Text;
    intl = intl2.intl;
    items = [React3(Text, obj2), ];
    const obj3 = { style: items1, children: React3(ClassificationMessageEvidenceDefault, obj4) };
    items1 = [, ];
    ({ flaggedContent: arr3[0], cardShadow: arr3[1] } = tmp);
    obj4 = { flaggedContent };
    items[1] = React3(View, obj3);
    tmp2 = hasOwnProperty(View, obj);
  }
  return tmp2;
});
const result = size.fileFinishedImporting("modules/safety_hub/native/ClassificationEvidence.tsx");

export default tmp5;