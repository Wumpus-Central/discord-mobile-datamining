// === Module 11719: SafetyTipsSection ===

// Module 11719 (SafetyTipsSection)
import nativeDefault from "native" /* 576 */;
import SafetyTipsRowDefault from "SafetyTipsRow" /* 8930 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4827);
let obj2 = { image: { alignSelf: "center", justifySelf: "center" }, tips: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, overflow: "hidden" }, text: { textAlign: "center" } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyTipsSection.tsx");

export default function SafetyTipsContainer(children) {
  const safetyTips = children.safetyTips;
  let showHeader = children.showHeader;
  const tmp = closure_6();
  const items = [closure_4(View, { style: tmp.image, children: closure_4(safetyTips(5995).SafetyBookletSpotIllustration, {}) }), , ];
  if (showHeader) {
    const obj2 = { style: tmp.text, variant: "heading-xl/semibold", children: null };
    const intl = tmp3(1115).intl;
    obj2.children = intl.string(tmp3(1115).t.eAbVfS);
    showHeader = closure_4(tmp3(4823).Text, obj2);
  }
  const obj3 = { spacing: 16, children: null };
  const obj4 = { spacing: 8, align: "center", justify: "center", children: null };
  const items1 = [showHeader, closure_4(safetyTips(4823).Text, { style: tmp.text, accessibilityRole: "header", variant: "text-md/medium", color: "text-default", children: children.description })];
  obj4.children = items1;
  items[1] = closure_5(safetyTips(5269).Stack, obj4);
  const obj = { style: tmp.image, children: closure_4(safetyTips(5995).SafetyBookletSpotIllustration, {}) };
  const obj5 = { style: tmp.text, accessibilityRole: "header", variant: "text-md/medium", color: "text-default", children: children.description };
  items[2] = closure_4(View, { style: tmp.tips, children: safetyTips.map((tip, index) => React4(SafetyTipsRowDefault, { index: index + 1, tip, end: index === safetyTips.length - 1 }, index)) });
  obj3.children = items;
  return closure_5(safetyTips(5269).Stack, obj3);
};