// discord_app/modules/self_mod/shared/native/SafetyTipsSection.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { image: { alignSelf: "center", justifySelf: "center" }, tips: null, text: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.lg, overflow: "hidden" };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { textAlign: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/self_mod/shared/native/SafetyTipsSection.tsx");

export default function SafetyTipsContainer(children) {
  const safetyTips = children.safetyTips;
  let showHeader = children.showHeader;
  const tmp = createCacheKey();
  let obj = { style: tmp.image, children: null };
  obj[1] = callback(safetyTips(5447).SafetyBookletSpotIllustration, {});
  const items = [callback(View, obj), , ];
  if (showHeader) {
    obj = { style: null, variant: "heading-xl/semibold", children: null };
    obj[0] = tmp.text;
    const intl = tmp3(1236).intl;
    obj[2] = intl.string(tmp3(1236).t.eAbVfS);
    showHeader = tmp5(tmp3(4734).Text, obj);
  }
  obj = { spacing: 16, children: null };
  const obj1 = { spacing: 8, align: "center", justify: "center", children: null };
  const items1 = [showHeader, callback(safetyTips(4734).Text, { style: tmp.text, accessibilityRole: "header", variant: "text-md/medium", color: "text-default", children: children.description })];
  obj1[3] = items1;
  items[1] = closure_5(safetyTips(4733).Stack, obj1);
  items[2] = callback(View, { style: tmp.tips, children: safetyTips.map((tip) => outer1_4(outer1_1(outer1_2[9]), { index: arg1 + 1, tip, end: arg1 === safetyTips.length - 1 }, arg1)) });
  obj[1] = items;
  return closure_5(safetyTips(4733).Stack, obj);
};