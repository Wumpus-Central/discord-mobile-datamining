import "noop";
import { View } from "get ActivityIndicator";
import { VerticalGradient } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
let require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, gradient: null, headerImage: null, nitroIconContainer: null, benefits: null, benefitRow: null };
createCacheKey = { flexDirection: "column", alignItems: "center", justifyContent: "center", padding: require("Themes").space.PX_24, borderRadius: require("Themes").radii.lg, overflow: "hidden", alignSelf: "center", gap: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
createCacheKey[2] = { width: 211, height: 157, resizeMode: "cover" };
createCacheKey[3] = { alignSelf: "flex-start" };
createCacheKey[4] = { display: "flex", flexDirection: "column", gap: require("Themes").space.PX_8 };
let obj1 = { display: "flex", flexDirection: "column", gap: require("Themes").space.PX_8 };
createCacheKey[5] = { display: "flex", flexDirection: "row", gap: require("Themes").space.PX_8, alignItems: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { display: "flex", flexDirection: "row", gap: require("Themes").space.PX_8, alignItems: "center" };
const result = require("ME").fileFinishedImporting("modules/collectibles/native/FractionalNitroPreview.tsx");

export const FractionalNitroPreview = function FractionalNitroPreview() {
  const tmp = createCacheKey();
  const require = tmp;
  let items = [require(1236) /* getSystemLocale */.t.E1NP2x, require(1236) /* getSystemLocale */.t.kpMomJ, require(1236) /* getSystemLocale */.t.xT1Vfn, require(1236) /* getSystemLocale */.t.myyAEr, require(1236) /* getSystemLocale */.t.zTk8Ul];
  let obj = { style: tmp.container, children: null };
  obj = { colors: ["#000000", "#36266d"], start: VerticalGradient.START, end: VerticalGradient.END, style: tmp.gradient };
  const items1 = [callback(importDefault(4615), obj), , , ];
  obj = { source: null, style: null };
  const obj1 = { uri: null };
  obj1[0] = importDefault(8759);
  obj[0] = obj1;
  obj[1] = tmp.headerImage;
  items1[1] = callback(importDefault(5145), obj);
  const tmp2 = importDefault(5145);
  items1[2] = callback(View, { style: tmp.nitroIconContainer, children: callback(importDefault(8760), {}) });
  const obj2 = { style: tmp.nitroIconContainer, children: callback(importDefault(8760), {}) };
  items1[3] = callback(View, {
    style: tmp.benefits,
    children: items.map((arg0, arg1) => {
      let obj = { style: tmp.benefitRow, children: null };
      obj = { color: null };
      obj[0] = outer1_1(outer1_2[5]).colors.WHITE;
      const items = [outer1_5(tmp(outer1_2[11]).CheckmarkSmallIcon, obj), ];
      obj = { variant: "text-sm/medium", color: "text-overlay-light", children: null };
      const intl = tmp(outer1_2[6]).intl;
      obj[2] = intl.string(arg0);
      items[1] = outer1_5(tmp(outer1_2[12]).Text, obj);
      obj[1] = items;
      return outer1_6(outer1_3, obj, arg1);
    })
  });
  obj[1] = items1;
  return callback2(View, obj);
};