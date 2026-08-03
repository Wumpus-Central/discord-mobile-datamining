const result = require("set").fileFinishedImporting("modules/guild_onboarding/LandingAssetUtils.tsx");

export default function replaceFlagIconAndFlagColor(layers, p) {
  let closure_0 = layers;
  let closure_1 = arg2;
  layers.assets[0].p = p;
  layers = layers.layers;
  const findIndexResult = layers.findIndex((nm) => "flag" === nm.nm);
  let closure_2 = findIndexResult;
  let it = layers.layers[findIndexResult].shapes[0].it;
  const item = it.forEach((arg0, arg1) => {
    if ("gr" === layers.layers[closure_2].shapes[0].it[arg1].ty) {
      const it = tmp.layers[tmp2].shapes[0].it[arg1].it;
      if (it.findIndex((ty) => "fl" === ty.ty) >= 0) {
        const items = [];
        items[HermesBuiltin.arraySpread(closure_1.map((arg0) => arg0 / 256), 0)] = 1;
        tmp.layers[tmp2].shapes[0].it[arg1].it[1].c.k = items;
      }
    }
  });
  return layers;
};