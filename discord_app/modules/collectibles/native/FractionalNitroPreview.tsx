// === Module 12460: FractionalNitroPreview ===

// Module 12460 (FractionalNitroPreview)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import LinearGradientDefault from "LinearGradient" /* 4892 */;
import preloadDefault from "preload" /* 5445 */;
import metadataDefault from "metadata" /* 12461 */;
import NitroIconDefault from "NitroIcon" /* 12462 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { VerticalGradient } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, gradient: null, headerImage: null, nitroIconContainer: null, benefits: null, benefitRow: null };
createCacheKey = { flexDirection: "column", alignItems: "center", justifyContent: "center", padding: ThemesDefault.space.PX_24, borderRadius: ThemesDefault.radii.lg, overflow: "hidden", alignSelf: "center", gap: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
createCacheKey[2] = { width: 211, height: 157, resizeMode: "cover" };
createCacheKey[3] = { alignSelf: "flex-start" };
createCacheKey[4] = { display: "flex", flexDirection: "column", gap: ThemesDefault.space.PX_8 };
let obj1 = { display: "flex", flexDirection: "column", gap: ThemesDefault.space.PX_8 };
createCacheKey[5] = { display: "flex", flexDirection: "row", gap: ThemesDefault.space.PX_8, alignItems: "center" };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj2 = { display: "flex", flexDirection: "row", gap: ThemesDefault.space.PX_8, alignItems: "center" };
const result = require("set").fileFinishedImporting("modules/collectibles/native/FractionalNitroPreview.tsx");

export const FractionalNitroPreview = function FractionalNitroPreview() {
  const tmp = callback3();
  const _require = tmp;
  let items = [_require(1236).t.E1NP2x, _require(1236).t.kpMomJ, _require(1236).t.xT1Vfn, _require(1236).t.myyAEr, _require(1236).t.zTk8Ul];
  let obj = { style: tmp.container, children: null };
  obj = { colors: ["#000000", "#36266d"], start: VerticalGradient.START, end: VerticalGradient.END, style: tmp.gradient };
  const items1 = [callback(LinearGradientDefault, obj), , , ];
  obj = { source: null, style: null };
  obj1 = { uri: metadataDefault };
  obj[0] = obj1;
  obj[1] = tmp.headerImage;
  items1[1] = callback(preloadDefault, obj);
  const tmp2 = preloadDefault;
  items1[2] = callback(View, { style: tmp.nitroIconContainer, children: callback(NitroIconDefault, {}) });
  const obj2 = { style: tmp.nitroIconContainer, children: callback(NitroIconDefault, {}) };
  items1[3] = callback(View, {
    style: tmp.benefits,
    children: items.map((arg0, arg1) => {
      let obj = { style: lib.benefitRow, children: null };
      obj = { color: closure_1_1(closure_1_2[5]).colors.WHITE };
      const items = [closure_1_5(lib(closure_1_2[11]).CheckmarkSmallIcon, obj), ];
      obj = { variant: "text-sm/medium", color: "text-overlay-light", children: null };
      const intl = lib(closure_1_2[6]).intl;
      obj[2] = intl.string(arg0);
      items[1] = closure_1_5(lib(closure_1_2[12]).Text, obj);
      obj[1] = items;
      return closure_1_6(closure_1_3, obj, arg1);
    })
  });
  obj[1] = items1;
  return callback2(View, obj);
};