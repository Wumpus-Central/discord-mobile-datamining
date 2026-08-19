// === Module 10588: SafetyTipsContainer ===

// Module 10588 (SafetyTipsContainer)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import SafetyTipsRowDefault from "SafetyTipsRow" /* 6692 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.lg, overflow: "hidden" };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { textAlign: "center" };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/self_mod/shared/native/SafetyTipsSection.tsx");

export default function SafetyTipsContainer(children) {
  const safetyTips = children.safetyTips;
  let showHeader = children.showHeader;
  const tmp = callback2();
  let obj = { style: tmp.image, children: callback(safetyTips(5447).SafetyBookletSpotIllustration, {}) };
  const items = [callback(View, obj), , ];
  if (showHeader) {
    obj = { style: null, variant: "heading-xl/semibold", children: null };
    obj[0] = tmp.text;
    const intl = tmp3(1236).intl;
    obj[2] = intl.string(tmp3(1236).t.eAbVfS);
    showHeader = callback(tmp3(4734).Text, obj);
  }
  obj = { spacing: 16, children: null };
  obj1 = { spacing: 8, align: "center", justify: "center", children: null };
  const items1 = [showHeader, callback(safetyTips(4734).Text, { style: tmp.text, accessibilityRole: "header", variant: "text-md/medium", color: "text-default", children: children.description })];
  obj1[3] = items1;
  items[1] = callback(safetyTips(4733).Stack, obj1);
  items[2] = callback(View, { style: tmp.tips, children: safetyTips.map((item, index) => closure_1_4(SafetyTipsRowDefault, { index: index + 1, tip: item, end: index === safetyTips.length - 1 }, index)) });
  obj[1] = items;
  return callback(safetyTips(4733).Stack, obj);
};