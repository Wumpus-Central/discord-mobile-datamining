// === Module 7103: LandingAssetUtils ===

// Module 7103 (LandingAssetUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_onboarding/LandingAssetUtils.tsx");

export default function replaceFlagIconAndFlagColor(layers, p, arg2) {
  closure_1 = arg2;
  layers.assets[0].p = p;
  layers = layers.layers;
  const findIndexResult = layers.findIndex((nm) => "flag" === nm.nm);
  closure_2 = findIndexResult;
  let it = layers.layers[findIndexResult].shapes[0].it;
  const item = it.forEach((item, index) => {
    if ("gr" === layers.layers[findIndexResult].shapes[0].it[index].ty) {
      const it = layers.layers[findIndexResult].shapes[0].it[index].it;
      if (it.findIndex((ty) => "fl" === ty.ty) >= 0) {
        const items = [];
        items[HermesBuiltin.arraySpread(closure_1.map((item) => item / 256), 0)] = 1;
        layers.layers[findIndexResult].shapes[0].it[index].it[1].c.k = items;
      }
    }
  });
  return layers;
};