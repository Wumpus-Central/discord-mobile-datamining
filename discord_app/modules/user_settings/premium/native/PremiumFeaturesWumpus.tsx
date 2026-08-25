// === Module 8776: PremiumFeaturesWumpus ===

// Module 8776 (PremiumFeaturesWumpus)
import closure_2 from "noop" /* 19 */;
import { PremiumTypes } from "GuildFeatures" /* 1924 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
let items = [{ scaleX: -1 }];
let closure_7 = createCacheKey.createStyles({ clouds: { position: "absolute", top: 0, right: 0 }, wumpus: { position: "absolute", top: 22, right: 22, height: 90 }, wumpusLeft: { transform: items } });
const result = require("set").fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesWumpus.tsx");

export default function PremiumFeaturesWumpus(premiumType) {
  premiumType = premiumType.premiumType;
  dependencyMap = undefined;
  const tmp = callback2();
  const tmp2 = premiumType(7785)();
  dependencyMap = tmp2;
  const items = [premiumType, tmp2];
  const memo = React.useMemo(() => {
    if (premiumType === closure_1_3.TIER_0) {
      let obj = { wumpusImageSource: null, cloudsImageSource: null };
      obj[0] = premiumType(table[5]);
      obj[1] = premiumType(table ? table[6] : table[7]);
      const tmp7 = premiumType;
    } else {
      if (table) {
        let tmp4 = tmp3[8];
        let tmp5 = tmp3;
      } else {
        tmp4 = tmp3[9];
        tmp5 = tmp3;
      }
      obj = { wumpusImageSource: null, cloudsImageSource: null };
      obj[0] = premiumType(tmp5[10]);
      obj[1] = premiumType(tmp4);
      return obj;
    }
  }, items);
  ({ wumpusImageSource, cloudsImageSource } = memo);
  let obj = { style: tmp.clouds, resizeMode: "contain", source: cloudsImageSource };
  const items1 = [callback(premiumType(5374), obj), ];
  const items2 = [tmp.wumpus, ];
  let wumpusLeft = premiumType === PremiumTypes.TIER_0;
  if (wumpusLeft) {
    wumpusLeft = tmp.wumpusLeft;
  }
  obj = { children: null };
  items2[1] = wumpusLeft;
  items1[1] = callback(premiumType(5374), { style: items2, resizeMode: "contain", source: wumpusImageSource });
  obj[0] = items1;
  return closure_6(closure_5, obj);
};