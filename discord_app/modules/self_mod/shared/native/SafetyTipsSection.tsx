// discord_app/modules/self_mod/shared/native/SafetyTipsSection.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { image: { alignSelf: "center", justifySelf: "center" }, tips: null, text: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.lg, overflow: "hidden" };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { textAlign: "center" };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/self_mod/shared/native/SafetyTipsSection.tsx");

export default function SafetyTipsContainer(children) {
  const safetyTips = children.safetyTips;
  let showHeader = children.showHeader;
  const tmp = callback2();
  let obj = { style: tmp.image, children: callback(safetyTips(5452).SafetyBookletSpotIllustration, {}) };
  const items = [callback(View, obj), , ];
  if (showHeader) {
    obj = { style: null, variant: "heading-xl/semibold", children: null };
    obj[0] = tmp.text;
    const intl = tmp3(1236).intl;
    obj[2] = intl.string(tmp3(1236).t.eAbVfS);
    showHeader = tmp5(tmp3(4739).Text, obj);
  }
  obj = { spacing: 16, children: null };
  obj1 = { spacing: 8, align: "center", justify: "center", children: null };
  const items1 = [showHeader, callback(safetyTips(4739).Text, { style: tmp.text, accessibilityRole: "header", variant: "text-md/medium", color: "text-default", children: children.description })];
  obj1[3] = items1;
  items[1] = closure_5(safetyTips(4738).Stack, obj1);
  items[2] = callback(View, { style: tmp.tips, children: safetyTips.map((tip) => closure_1_4(closure_1_1(closure_1_2[9]), { index: arg1 + 1, tip, end: arg1 === safetyTips.length - 1 }, arg1)) });
  obj[1] = items;
  return closure_5(safetyTips(4738).Stack, obj);
};