// === Module 15143: PremiumPerksList ===

// Module 15143 (PremiumPerksList)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: ThemesDefault.radii.round, width: 40, height: 40, justifyContent: "center", alignItems: "center" };
createCacheKey[3] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("components_native/premium/PremiumPerksList.tsx");

export default function PremiumPerksList(perks) {
  perks = perks.perks;
  const tmp = callback2();
  closure_0 = tmp;
  return callback(View, {
    style: tmp.perkListContainer,
    children: perks.map((item, index) => {
      let obj = { style: lib.perkIconContainer, children: closure_1_3(item.IconComponent, { size: "md" }) };
      const items = [closure_1_3(View, obj), ];
      obj = { style: lib.perkInfoTextContainer, children: null };
      const items1 = [closure_1_3(lib(dependencyMap[5]).Text, { variant: "text-md/bold", color: "text-strong", children: item.label }), closure_1_3(lib(dependencyMap[5]).Text, { variant: "text-md/medium", color: "text-default", children: item.description })];
      obj[1] = items1;
      items[1] = closure_1_4(View, obj);
      obj[1] = items;
      return closure_1_4(View, obj, index);
    })
  });
};