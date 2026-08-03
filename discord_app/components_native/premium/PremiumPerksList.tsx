// === Module 14806: PremiumPerksList ===

// Module 14806 (PremiumPerksList)
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { perkInfoContainer: { flexDirection: "row", alignItems: "center", gap: 16 }, perkInfoTextContainer: { flexDirection: "column", gap: 4, maxWidth: 279 }, perkListContainer: { width: "100%", paddingVertical: 24, flexDirection: "column", gap: 24 }, perkIconContainer: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("Themes").radii.round, width: 40, height: 40, justifyContent: "center", alignItems: "center" };
createCacheKey[3] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("components_native/premium/PremiumPerksList.tsx");

export default function PremiumPerksList(perks) {
  perks = perks.perks;
  let c0;
  const tmp = createCacheKey();
  c0 = tmp;
  return callback(View, {
    style: tmp.perkListContainer,
    children: perks.map((children) => {
      let obj = { style: _undefined.perkInfoContainer, children: null };
      obj = { style: _undefined.perkIconContainer, children: outer1_3(children.IconComponent, { size: "md" }) };
      const items = [outer1_3(outer1_2, obj), ];
      obj = { style: _undefined.perkInfoTextContainer, children: null };
      const items1 = [outer1_3(_undefined(outer1_1[5]).Text, { variant: "text-md/bold", color: "text-strong", children: children.label }), outer1_3(_undefined(outer1_1[5]).Text, { variant: "text-md/medium", color: "text-default", children: children.description })];
      obj[1] = items1;
      items[1] = outer1_4(outer1_2, obj);
      obj[1] = items;
      return outer1_4(outer1_2, obj, arg1);
    })
  });
};