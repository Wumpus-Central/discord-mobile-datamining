// discord_app/modules/guild_onboarding/LandingAssetUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";

const result = obj132.fileFinishedImporting("modules/guild_onboarding/LandingAssetUtils.tsx");

export default function replaceFlagIconAndFlagColor(layers, p) {
  closure_0 = layers;
  closure_1 = arg2;
  layers.assets[0].p = p;
  layers = layers.layers;
  const findIndexResult = layers.findIndex((item, index) => "flag" === item.nm);
  closure_2 = findIndexResult;
  let it = layers.layers[findIndexResult].shapes[0].it;
  const item = it.forEach((item, index) => {
    if ("gr" === layers.layers[closure_2].shapes[0].it[index].ty) {
      const it = layers.layers[closure_2].shapes[0].it[index].it;
      if (it.findIndex((item, index) => "fl" === item.ty) >= 0) {
        const items = [];
        items[HermesBuiltin.arraySpread(closure_1.map((item, index) => item / 256), 0)] = 1;
        layers.layers[closure_2].shapes[0].it[index].it[1].c.k = items;
      }
    }
  });
  return layers;
};