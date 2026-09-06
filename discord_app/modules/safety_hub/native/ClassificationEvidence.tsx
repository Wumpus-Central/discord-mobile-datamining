// === Module 11890: ClassificationEvidence ===

// Module 11890 (ClassificationEvidence)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import ClassificationMessageEvidenceDefault from "ClassificationMessageEvidence" /* 11891 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { cardShadow: null, flaggedContent: null, sectionContainer: null };
const native = fn(1178);
createStyles.cardShadow = native.generateBoxShadowStyle(fn(1178).FOUR_DP_ELEVATION_SHADOW_PARAMS);
createStyles = { borderWidth: 1, borderRadius: nativeDefault.radii.sm, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, backgroundColor: nativeDefault.colors.CHANNELTEXTAREA_BACKGROUND, padding: 20 };
createStyles.flaggedContent = createStyles;
createStyles.sectionContainer = { display: "flex", gap: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/ClassificationEvidence.tsx");

export default function ClassificationEvidence(flaggedContent) {
  flaggedContent = flaggedContent.flaggedContent;
  const tmp = closure_6();
  let tmp2 = null;
  if (0 !== flaggedContent.length) {
    let obj = { style: tmp.sectionContainer, children: null };
    obj = { variant: "eyebrow", color: "text-default", children: null };
    const intl = util.intl;
    obj.children = intl.string(util.t.s64CMg);
    const items = [React4(Text_Text.Text, obj), ];
    obj = { style: null, children: null };
    const items1 = [, ];
    ({ flaggedContent: arr3[0], cardShadow: arr3[1] } = tmp);
    obj.style = items1;
    const obj1 = { flaggedContent };
    obj.children = React4(ClassificationMessageEvidenceDefault, obj1);
    items[1] = React4(View, obj);
    obj.children = items;
    tmp2 = hasOwnProperty(View, obj);
  }
  return tmp2;
};