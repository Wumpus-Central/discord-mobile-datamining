// === Module 11376: SafetyTipsSection ===

// Module 11376 (SafetyTipsSection)
import nativeDefault from "native" /* 576 */;
import SafetyTipsRowDefault from "SafetyTipsRow" /* 8579 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { image: { alignSelf: "center", justifySelf: "center" }, tips: null, text: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
createStyles.tips = createStyles;
createStyles.text = { textAlign: "center" };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyTipsSection.tsx");

export default function SafetyTipsContainer(children) {
  const safetyTips = children.safetyTips;
  let showHeader = children.showHeader;
  const tmp = closure_6();
  let obj = { style: tmp.image, children: closure_4(safetyTips(5692).SafetyBookletSpotIllustration, {}) };
  const items = [closure_4(View, obj), , ];
  if (showHeader) {
    obj = { style: tmp.text, variant: "heading-xl/semibold", children: null };
    const intl = tmp3(1114).intl;
    obj.children = intl.string(tmp3(1114).t.eAbVfS);
    showHeader = closure_4(tmp3(4556).Text, obj);
  }
  obj = { spacing: 16, children: null };
  const obj1 = { spacing: 8, align: "center", justify: "center", children: null };
  const items1 = [showHeader, closure_4(safetyTips(4556).Text, { style: tmp.text, accessibilityRole: "header", variant: "text-md/medium", color: "text-default", children: children.description })];
  obj1.children = items1;
  items[1] = closure_5(safetyTips(4973).Stack, obj1);
  items[2] = closure_4(View, { style: tmp.tips, children: safetyTips.map((tip, index) => React4(SafetyTipsRowDefault, { index: index + 1, tip, end: index === safetyTips.length - 1 }, index)) });
  obj.children = items;
  return closure_5(safetyTips(4973).Stack, obj);
};