// === Module 15380: PremiumPerksList ===

// Module 15380 (PremiumPerksList)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { perkInfoContainer: { flexDirection: "row", alignItems: "center", gap: 16 }, perkInfoTextContainer: { flexDirection: "column", gap: 4, maxWidth: 279 }, perkListContainer: { width: "100%", paddingVertical: 24, flexDirection: "column", gap: 24 }, perkIconContainer: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: ThemesDefault.radii.round, width: 40, height: 40, justifyContent: "center", alignItems: "center" };
createCacheKey[3] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("components_native/premium/PremiumPerksList.tsx");

export default function PremiumPerksList(perks) {
  perks = perks.perks;
  closure_0 = undefined;
  const tmp = callback2();
  closure_0 = tmp;
  return callback(View, {
    style: tmp.perkListContainer,
    children: perks.map((children) => {
      let obj = { style: lib.perkInfoContainer, children: null };
      obj = { style: lib.perkIconContainer, children: closure_1_3(children.IconComponent, { size: "md" }) };
      const items = [closure_1_3(closure_1_2, obj), ];
      obj = { style: lib.perkInfoTextContainer, children: null };
      const items1 = [closure_1_3(lib(closure_1_1[5]).Text, { variant: "text-md/bold", color: "text-strong", children: children.label }), closure_1_3(lib(closure_1_1[5]).Text, { variant: "text-md/medium", color: "text-default", children: children.description })];
      obj[1] = items1;
      items[1] = closure_1_4(closure_1_2, obj);
      obj[1] = items;
      return closure_1_4(closure_1_2, obj, arg1);
    })
  });
};