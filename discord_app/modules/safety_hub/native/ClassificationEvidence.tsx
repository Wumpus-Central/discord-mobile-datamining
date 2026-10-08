// === Module 11507: ClassificationEvidence ===

// Module 11507 (ClassificationEvidence)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5086 */;
import ClassificationMessageEvidenceDefault from "ClassificationMessageEvidence" /* 11508 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5090);
let obj2 = { cardShadow: null, flaggedContent: null, sectionContainer: null };
const native = fn(1200);
obj2.cardShadow = native.generateBoxShadowStyle(fn(1200).FOUR_DP_ELEVATION_SHADOW_PARAMS);
obj2.flaggedContent = { borderWidth: 1, borderRadius: nativeDefault.radii.sm, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, backgroundColor: nativeDefault.colors.CHANNELTEXTAREA_BACKGROUND, padding: 20 };
let obj4 = { borderWidth: 1, borderRadius: nativeDefault.radii.sm, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, backgroundColor: nativeDefault.colors.CHANNELTEXTAREA_BACKGROUND, padding: 20 };
obj2.sectionContainer = { display: "flex", gap: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { display: "flex", gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/ClassificationEvidence.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ClassificationEvidence(flaggedContent) {
  const cResult = c.c(12);
  flaggedContent = flaggedContent.flaggedContent;
  let sectionContainer = closure_6();
  if (0 === flaggedContent.length) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { variant: "eyebrow", color: "text-default", children: null };
      const intl = util.intl;
      obj2.children = intl.string(util.t.s64CMg);
      const tmp6 = React4(Text_Text.Text, obj2);
      cResult[0] = tmp6;
      let first = tmp6;
    } else {
      first = cResult[0];
    }
    if (cResult[1] === sectionContainer.cardShadow) {
      if (cResult[2] === sectionContainer.flaggedContent) {
        let tmp7 = cResult[3];
      }
      if (cResult[4] !== flaggedContent) {
        const obj3 = { flaggedContent };
        const tmp11 = React4(ClassificationMessageEvidenceDefault, obj3);
        cResult[4] = flaggedContent;
        cResult[5] = tmp11;
        let tmp8 = tmp11;
      } else {
        tmp8 = cResult[5];
      }
      if (cResult[6] === tmp7) {
        if (cResult[7] === tmp8) {
          let tmp12 = cResult[8];
        }
        if (cResult[9] === sectionContainer.sectionContainer) {
        }
        const obj4 = { style: sectionContainer.sectionContainer, children: null };
        const items = [first, tmp12];
        obj4.children = items;
        const tmp19 = hasOwnProperty(View, obj4);
        sectionContainer = sectionContainer.sectionContainer;
        cResult[9] = sectionContainer;
        cResult[10] = tmp12;
        cResult[11] = tmp19;
      }
      const obj5 = { style: tmp7, children: tmp8 };
      const tmp15 = React4(View, obj5);
      cResult[6] = tmp7;
      cResult[7] = tmp8;
      cResult[8] = tmp15;
      tmp12 = tmp15;
    }
    const items1 = [, ];
    ({ flaggedContent: arr2[0], cardShadow: arr2[1] } = sectionContainer);
    cResult[1] = sectionContainer.cardShadow;
    cResult[2] = sectionContainer.flaggedContent;
    cResult[3] = items1;
    tmp7 = items1;
  }
}) : (function ClassificationEvidence(flaggedContent) {
  flaggedContent = flaggedContent.flaggedContent;
  const tmp = closure_6();
  let tmp2 = null;
  if (0 !== flaggedContent.length) {
    const obj = { style: tmp.sectionContainer, children: null };
    const obj2 = { variant: "eyebrow", color: "text-default", children: null };
    const intl = util.intl;
    obj2.children = intl.string(util.t.s64CMg);
    const items = [React4(Text_Text.Text, obj2), ];
    const obj3 = { style: null, children: null };
    const items1 = [, ];
    ({ flaggedContent: arr3[0], cardShadow: arr3[1] } = tmp);
    obj3.style = items1;
    const obj4 = { flaggedContent };
    obj3.children = React4(ClassificationMessageEvidenceDefault, obj4);
    items[1] = React4(View, obj3);
    obj.children = items;
    tmp2 = hasOwnProperty(View, obj);
  }
  return tmp2;
});